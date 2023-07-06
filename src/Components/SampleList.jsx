import React, { useEffect, useRef, useState } from "react";
import {
  BottomElement,
  BottomElementText,
  Button,
  ButtonWrapper,
  Component,
  DateTypography,
  Heading,
  LogoImg,
  LogoWrapper,
  PaginationWrapper,
  TopElement,
  Typography,
  Wrapper,
} from "./index.sc";

const SampleList = ({ data, limit = 3, loadMore, pagination, heading }) => {
  const [length, setLength] = useState(1);
  const [showData, setShowData] = useState(data);
  const [visible, setVisible] = useState(true);
  const scrollToRef = useRef();

  const bgColors = ["#2A67A0", "#D9D9D9", "#2A67A0", "#AE2437", "#D9D9D9"];

  const handleChange = () => {
    if (length * limit <= data.length) setLength((p) => p + 1);

    scrollToRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (loadMore) {
      if (limit) {
        const slicedData = data.slice(0, length * limit);
        setShowData(slicedData);
      }
    }
  }, [length]);

  useEffect(() => {
    const thresholdValue = length * limit <= data.length;

    if (!thresholdValue) setVisible(thresholdValue);
  }, [showData]);

  return (
    <>
     {heading && <Heading>{heading}</Heading>}
      <Component>
        {showData?.map((el, i) => (
          <Wrapper key={i}>
            <TopElement>
              {el.src && (
                <LogoWrapper
                  bgColor={bgColors[Math.floor((Math.random() * 10) / 2)]}
                >
                  <LogoImg src={el.src && el.src} alt="J" />
                </LogoWrapper>
              )}
              {!el.src && (
                <LogoWrapper
                  bgColor={bgColors[Math.floor((Math.random() * 10) / 2)]}
                >
                  {el.title.slice(0, 1)}
                </LogoWrapper>
              )}
              {el.title && (
                <Typography fontWeight={el.text ? 500 : 400}>
                  {el.title}
                </Typography>
              )}
              {el.date && <DateTypography>{el.date}</DateTypography>}
            </TopElement>
            {el.text && (
              <BottomElement>
                <BottomElementText>{el.text}</BottomElementText>
              </BottomElement>
            )}
          </Wrapper>
        ))}
      </Component>
      {loadMore && data.length > 3 && (
        <ButtonWrapper>
          <Button ref={scrollToRef} onClick={handleChange} disabled={!visible}>
            Load More
          </Button>
        </ButtonWrapper>
      )}

      {pagination && (
        <PaginationWrapper>Pagination Component</PaginationWrapper>
      )}
    </>
  );
};

export default SampleList;
