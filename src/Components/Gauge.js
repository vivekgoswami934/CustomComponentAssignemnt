import {
    Bottom,
    Circle,
    Container,
    Flex,
    Heading,
    Text,
    Wrapper
  } from './index.sc'
  import React, { useEffect, useRef } from 'react'
  import * as d3 from 'd3'
  import upArrow from './assets/upArrow.svg'
  
  const GaugeGraph = ({
    percent,
    text,
    targetValue,
    targetMatched,
    heading,
    height = '300',
    width = '300',
    headerFontSize,
    arrowCircleSize = 15
  }) => {
    const chartRef = useRef(null)
    const needleRef = useRef(null)
  
    const initialRotation = useRef()
  
    const previousPercent = useRef()
  
    targetValue = targetValue / 100
  
    percent = percent / 100
  
    useEffect(() => {
      initialRotation.current = -135
  
      const drawChart = () => {
        const el = d3.select(chartRef.current)
  
        const numSections = 70
        const sectionPerc = 1 / numSections / 1.33
        const padRad = 0.03
  
        const chartInset = 10
  
        // const margin = { top: 0, right: 20, bottom: 30, left: 20 };
        const margin = { top: 5, right: 20, bottom: -25, left: 20 }
  
        let width = el.node().offsetWidth - margin.left - margin.right
  
        let height = el.node().offsetHeight - margin.top - margin.bottom
  
        // console.log(height, width)
  
        height = Math.min(width, height)
  
        width = Math.min(width, height)
  
        // console.log(height, width)
  
        const barWidth = width / 16
  
        // const height = width;
  
        const radius = (0.9 * Math.min(width, height)) / 2
  
        // console.log(radius)
  
        const percToDeg = (perc) => perc * 360
  
        const percToRad = (perc) => degToRad(percToDeg(perc))
  
        const degToRad = (deg) => (deg * Math.PI) / 180
  
        const svg = el
          .append('svg')
          .attr('width', width + margin.left + margin.right)
          .attr('height', height + margin.top + margin.bottom)
  
        const chart = svg
          .append('g')
          .attr(
            'transform',
            `translate(${(width + margin.left * 2) / 2}, ${
              (height + margin.top) / 2
            })`
          )
  
        const arcColors = [
          'lightgray', // Color when needle is outside the gauge range
          '#22d273', // Color when needle is within the gauge range  (green)
          '#fc6c6c' // Color when needle is within the gauge range  (red)
        ]
  
        const getArcColor = (sectionIndex) => {
          const needlePosition = Math.floor(percent * numSections)
  
          if (percent === 0) return arcColors[0]
  
          // targetMatch and the last position then sending green
          if (sectionIndex === needlePosition && targetMatched) {
            const currentSectionPercentage =
              percent * numSections - needlePosition
            return d3.interpolate(
              arcColors[0],
              arcColors[1]
            )(currentSectionPercentage)
          }
  
          if (sectionIndex === needlePosition) {
            const currentSectionPercentage =
              percent * numSections - needlePosition
            return d3.interpolate(
              arcColors[0],
              arcColors[2]
            )(currentSectionPercentage)
          }
  
          if (sectionIndex < needlePosition && targetMatched) {
            return arcColors[1] // red color for sections covered by the needle
          }
          if (sectionIndex < needlePosition) {
            return arcColors[2] // Green color for sections covered by the needle
          }
          return arcColors[0] // Lightgray color for sections after the needle
        }
  
        for (let sectionIndex = 0; sectionIndex < numSections; sectionIndex++) {
          const arcStartRad =
            degToRad(-135) + sectionIndex * percToRad(sectionPerc)
          const arcEndRad =
            degToRad(-135) + (sectionIndex + 1) * percToRad(sectionPerc) - padRad
  
          const startPadRad = sectionIndex === 0 ? 0 : 0
          const endPadRad = sectionIndex === numSections - 1 ? 0 : 0
          // const endPadRad = sectionIndex === numSections - 1 ? 0 : padRad / 2;
  
          const arc = d3
            .arc()
            .outerRadius(radius - chartInset)
            .innerRadius(radius - chartInset - barWidth)
            .startAngle(arcStartRad + startPadRad)
            .endAngle(arcEndRad - endPadRad)
  
          chart
            .append('path')
            .attr('class', `arc chart-color${sectionIndex + 1}`)
            .attr('d', arc)
            .attr('fill', getArcColor(sectionIndex - 1))
            .transition()
            .ease(d3.easeLinear)
            .duration(1000)
            .attrTween('d', function () {
              const interpolator = d3.interpolate(
                arc.startAngle()(),
                arcEndRad - endPadRad
              )
              return function (t) {
                arc.endAngle(interpolator(t))
                return arc()
              }
            })
        }
  
        svg
          .append('defs')
          .append('linearGradient')
          .attr('id', 'needle-gradient')
          .attr('x1', '0%')
          .attr('y1', '100%')
          .attr('x2', '0%')
          .attr('y2', '0%')
          .call((gradient) => {
            gradient
              .append('stop')
              .attr('offset', '30%')
              .attr('stop-color', 'transparent')
  
            gradient
              .append('stop')
              .attr('offset', '100%')
              .attr('stop-color', 'lightgray')
          })
  
        // drawing the dot value
  
        const targetAngle = targetValue * 270 - 45 // Calculate target angle based on target value (assuming a range of 0-1)
  
        const dotRadius = barWidth * 0.4 // Calculate the radius of the dot as a percentage of the gauge width
  
        // Draw the dot
  
        const dotX =
          -Math.cos(degToRad(targetAngle)) * (radius - chartInset + barWidth)
        const dotY =
          -Math.sin(degToRad(targetAngle)) * (radius - chartInset + barWidth)
  
        const dot = chart
          .append('circle')
          .attr('class', 'target-dot')
          .attr('cx', dotX)
          .attr('cy', dotY)
          .attr('r', dotRadius)
          .style('fill', targetMatched ? '#22d273' : '#fc6c6c')
  
        dot.append('title').text(`Target-${targetValue * 100}`)
  
        // Class of Needle
  
        class Needle {
          constructor(len, width) {
            this.len = len
            this.width = width
          }
  
          drawOn(el, perc) {
            console.count(initialRotation.current)
  
            el.append('rect')
              .attr('class', 'needle')
              .attr('x', -this.width / 12)
              .attr('y', -this.len)
              .attr('width', this.width)
              .attr('height', this.len * 1.3)
              .attr('transform', `rotate(${initialRotation.current})`)
              .style('fill', 'url(#needle-gradient)')
  
            el.append('text')
              .attr('class', 'needle-text')
              .attr('x', '1%')
              .attr('y', radius * 0.5)
              .attr('text-anchor', 'middle')
              .attr('dominant-baseline', 'hanging')
              .attr('font-size', (d) => `${Math.min(height, width) / 12}px`)
              .attr('opacity', '80%')
              .text(`${(percent * 100).toFixed(2)}%`)
          }
  
          updateTo(el, percent) {
            const self = this
  
            const previousPerc = previousPercent.current || 0
  
            const i = d3.interpolate(previousPerc, percent) 
  
            el.select('.needle')
              .attr('data-perc', percent)
              .transition()
              .ease(d3.easeBack)
              .duration(1000)
              .attrTween('transform', function () {
                return function (t) {
                  const progress = i(t)
                  if (self.calculateRotation(progress)) {
                    return `rotate(${self.calculateRotation(progress)})`
                  } else {
                    console.log('darsh ,self.calculateRotation(progress) ')
                    return `rotate(1)`
                  }
                }
              })
  
            // el.select('.target-dot')
            //   .transition()
            //   // .ease(d3.easeBack)
            //   // .duration(1000)
            //   .style('fill', targetMatched ? '#22d273' : '#fc6c6c');
          }
  
          calculateRotation(perc) {
            const minAngle = -135
            const maxAngle = 132
            const angleRange = maxAngle - minAngle
            const limitedPerc = Math.max(Math.min(perc, 1), 0)
  
            return minAngle + limitedPerc * angleRange
  
            // -135 + 0.5 * 270 = 0
          }
        }
  
        const needle = new Needle(
          (radius - chartInset - barWidth) * 0.9,
          width * 0.025
        )
  
        // Adjusted the needle size
        needle.drawOn(chart, 0)
  
        needleRef.current = needle
      }
  
      drawChart()
  
      return () => {
        d3.select(chartRef.current).selectAll('svg').remove()
        d3.select(chartRef.current).selectAll('div').remove()
      }
    }, [percent, height, width])
  
    useEffect(() => {
      if (needleRef.current) {
        needleRef.current.updateTo(d3.select(chartRef.current), percent)
        previousPercent.current = percent
      }
    }, [percent])
  
    return (
      <Flex height={height} width={width}>
        <Heading fontSize={headerFontSize}>{heading}</Heading>
        <Wrapper ref={chartRef} className='chart-gauge' />
        <Bottom
          width={width}
          height={height}
          bgColor={targetMatched ? '#22d273' : '#fc6c6c'}
        >
          <Text width={width}  arrowCircleSize={arrowCircleSize}>{`${text}%`}</Text>
          <Circle arrowCircleSize={arrowCircleSize}
            bgColor={targetMatched ? '#22d273' : '#fc6c6c'}
            width = {width}
          >
            <img
              src={targetMatched ? upArr : downArr}
              alt='arrow svg'
              height={arrowCircleSize - 2 + 'px'}
              width={arrowCircleSize - 2 + 'px'}
            />
          </Circle>
        </Bottom>
      </Flex>
    )
  }
  
  export default GaugeGraph
  
  GaugeGraph.propTypes = {}
  
  let upArr =
    'https://catamera-c1123.firebaseapp.com/static/media/marginarrow-up.e4f80493.svg'
  
  let downArr =
    'https://catamera-c1123.firebaseapp.com/static/media/marginarrow.c3f4bb9b.svg'
  


    // import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: ${({ height }) => `${height}px`};
  width: ${({ width }) => `${width}px`};

  /* border : 1px solid black; */
`

export const Wrapper = styled.div`
  width: 100%;
  height: 80%;
`

export const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: lighter;
  font-size: ${({ fontSize }) => `${fontSize}px`};
  height: 10%;
`

export const Bottom = styled.div`
  border-radius: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  width: ${({ width, height }) => `${Math.min(width, height) /50}rem`};
  height: 10%;
  background: ${({bgColor}) => bgColor};
  margin-top : -1rem;
`

export const Text = styled.div`
display: flex;
justify-content: center;
align-items: center;
  color: #fff;
  margin-left: 8%;
  /* font-size: ${({width }) => `${width/21}px`}; */
font-size: ${({arrowCircleSize}) => `${arrowCircleSize}px`};
`

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  width: ${({arrowCircleSize}) => `${arrowCircleSize}px`};
  height: ${({arrowCircleSize}) => `${arrowCircleSize}px`};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
`
