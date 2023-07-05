import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

const SampleList = ({  data = sampleListData,limit = 3, loadMore, pagination,}) => {
  const [length, setLength] = useState(1);
  const [showData, setShowData] = useState(data);

  const handleChange = () => {
    if (length * limit <= data.length) setLength((p) => p + 1);
  };

  useEffect(() => {
    if (loadMore) {
      if (limit) {
        const slicedData = data.slice(0, length * limit);
        setShowData(slicedData);
      }
    }
  }, [length]);

  return (
    <>
      <Component>
        {showData?.map((el, i) => (
          <Wrapper key={i}>
            <TopElement>
              {el.src && (
                <LogoWrapper>
                  <LogoImg src={el.src && el.src} alt="J" />
                </LogoWrapper>
              )}
              {!el.src && <LogoWrapper>{el.title.slice(0, 1)}</LogoWrapper>}
              {el.title && <Typography>{el.title}</Typography>}
              {true && <DateTypography>{el.date}</DateTypography>}
            </TopElement>
            {el.text && <BottomElement>{el.text}</BottomElement>}
          </Wrapper>
        ))}
      </Component>
      {loadMore && data.length > 3 && (
        <ButtonWrapper>
          <Button
            onClick={handleChange}
            disabled={length * limit >= data.length}
          >
            Load More
          </Button>
        </ButtonWrapper>
      )}

      {pagination && (
        <PaginationWrapper>Pagination Component is here...</PaginationWrapper>
      )}
    </>
  );
};

export default SampleList;

const LogoImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const Component = styled.div`
  display: flex;
  width: 75.625rem;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 0.1875rem;
  border: 1px solid var(--grey-background, #f2f6fa);
  background: var(--white-100, #fff);
`;

const Wrapper = styled.div`
  display: flex;
  width: 74.625rem;
  /* width: 100%; */
  padding: 0.875rem;
  flex-direction: column;
  align-items: flex-start;
  /* gap: 0.875rem; */
  border-radius: 0.1875rem;
  border: 1px solid var(--grey-background, #f2f6fa);
  background: var(--white-100, #fff);
`;

const TopElement = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
`;

const BottomElement = styled.div`
  display: flex;
  width: 65.625rem;
  flex-direction: column;
  justify-content: center;
  color: var(--text-dark, #2f3446);
  font-size: 0.8125rem;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  line-height: 1.1875rem;
  padding: 0 2.12rem;
`;

const Typography = styled.div`
  color: var(--text-dark, #2f3446);
  font-size: 0.8125rem;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 1.125rem;
`;

const LogoWrapper = styled.div`
  display: flex;
  width: 1.5rem;
  height: 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 1.25rem;
  border: 1px solid var(--white-100, #fff);
  background: var(--mid-blue, #2a67a0);
`;
const DateTypography = styled.div`
  color: var(--text-inactive, #a1aab3);
  font-size: 0.75rem;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  line-height: 1.0625rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 76.625rem;
  margin-top: 1rem;
`;
const Button = styled.button`
  display: inline-flex;
  height: 2rem;
  padding: 0.5rem 0.9375rem;
  justify-content: center;
  align-items: center;
  gap: 0.375rem;
  flex-shrink: 0;
  border-radius: 0.1875rem;
  background: var(--white, #fff);
  cursor: pointer;
`;

const PaginationWrapper = styled.div`
  display: flex;
  /* width: 13.875rem; */
  width: 100%;
  align-items: center;
  gap: 0.875rem;
  justify-content: flex-end;
  margin-top: 1rem;
`;

const sampleListData = [
  {
    title: "Name Title 1",
    src: "",
  },
  {
    title: "PName Title 2",
    src: "",
  },
  {
    title: "TName Title 3",
    src: "",
  },
];
