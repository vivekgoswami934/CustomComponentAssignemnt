import { styled } from "styled-components";

const isDarkerShade = (bgColor) => {

    let r, g, b, color ;

    // Check the format of the color, HEX or RGB?
    if (bgColor.match(/^rgb/)) {

        // If HEX --> store the red, green, blue values in separate variables
        color = bgColor.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);

        r = color[1];
        g = color[2];
        b = color[3];
    }
    else {

        // If RGB --> Convert it to HEX: http://gist.github.com/983661
        color = +("0x" + bgColor.slice(1).replace(bgColor.length < 5 && /./g, '$&$&'));

        r = color > 16;
        g = color > 8 & 255;
        b = color & 255;
    }

    
    let hsp = Math.sqrt(0.299 * (r * r) +0.587 * (g * g) +0.114 * (b * b));
    
    console.log(hsp)
    // Using the HSP value, determine whether the bgColor is light or dark

    return hsp > 70 ? false : true;

}

export const Heading = styled.p`
  color: var(--text-dark, #2f3446);
  font-size: 1.8125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;



export const Component = styled.div`
  display: flex;
  /* width: 75.625rem; */
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 0.1875rem;
  border: 1px solid var(--grey-background, #f2f6fa);
  background-color: var(--white-100, #fff);
`;

export const Wrapper = styled.div`
  display: flex;
  width: 95%;
  padding: 0.875rem;
  flex-direction: column;
  align-items: flex-start;
  /* gap: 0.875rem; */
  border-radius: 0.1875rem;
  border: 1px solid var(--grey-background, #f2f6fa);
  `;

export const TopElement = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  `;

export const BottomElement = styled.div`
  display: flex;
  padding-left: 0px;
  align-items: flex-start;
  align-self: stretch;
  background: var(--white-100, #fff);
`;

export const BottomElementText = styled.p`
  color: var(--text-dark, #2f3446);
  /* Roboto / Body / 13px: Regular */
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.1875rem;
  padding: 0px 2.12rem;
  background: var(--white-100, #fff);
`;

export const Typography = styled.div`
  color: var(--text-dark, #2f3446);
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: 1.125rem;
`;

export const LogoWrapper = styled.div`
  display: flex;
  width: 1.5rem;
  height: 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 1.25rem;
  border: 1px solid var(--w hite-100, #fff);
  background: var(--mid-blue, #2a67a0);
  font-size: 0.8125rem;
  background-color: ${({ bgColor }) => bgColor};
  color : ${({ bgColor }) => isDarkerShade(bgColor) ? "white" : "black"};
`;

export const LogoImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
export const DateTypography = styled.div`
  color: var(--text-inactive, #a1aab3);
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.0625rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`;
export const Button = styled.button`
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

export const PaginationWrapper = styled.div`
  display: flex;
  /* width: 13.875rem; */
  width: 100%;
  align-items: center;
  gap: 0.875rem;
  justify-content: flex-end;
  margin-top: 1rem;
`;