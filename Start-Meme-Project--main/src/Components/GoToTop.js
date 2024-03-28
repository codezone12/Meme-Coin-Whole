import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import styled, { ThemeProvider, keyframes } from "styled-components";
const bounceAnimation = keyframes`
  0% {
    transform: translateY(-0.5rem);
  }
  100% {
    transform: translateY(1rem);
    
  }
`;
const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const goToBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    const listenToScroll = () => {
        let heightToHidden = 450;
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > heightToHidden) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    }, []);
    const theme = {
        colors: {
            btn: "#yourColorValue",
            shadow: "yourShadowValue",
        },
        media: {
            mobile: "yourMobileValue",
        },
    };
    return (
        <ThemeProvider theme={theme}>
            <Wrapper>
                {isVisible && (
                    <div className="top-btn" onClick={goToBtn}>
                        <FaArrowUp className="top-btn--icon  " />
                    </div>
                )}
            </Wrapper>
        </ThemeProvider>
    );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .top-btn {
    font-size: 2.2rem;
    width: 4rem;
    height: 4rem;
    color: white;
    background-color: green;
    border: 3px solid #FFFFFF;
    box-shadow: ${({ theme }) => theme.colors.shadow};
    border-radius: 50%;
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
      background-color: #F7B7A2; /* Change background color on hover */
    }
    &:hover .top-btn--icon {
      animation: ${bounceAnimation} 1.2s linear infinite alternate-reverse;
      color: black;

    }
    
  }

  .top-btn--icon {
    animation: gototop linear infinite alternate-reverse;
    
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .top-btn {
      right: 0;
      left: 40%;
    }
  }
`;

export default GoToTop;

