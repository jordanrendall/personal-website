import React from 'react';
import Layout from '../components/Layout/Layout';
import styled from 'styled-components';
import Logos from '../components/Logos';
import { breakpoints } from '../components/Utilities';
// const StyledButton = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background: ${(props) => props.theme.colours.Dominant};
//     border: 2px solid ${(props) => props.theme.colours.Borders};
//     border-radius: 10px;
//     padding: 1vw 2.25vw 1vw 2.25vw;
//     margin: 10px;
//     font-size: 2rem;
//     width: 8rem;
//     height: 8rem;
//     /* font-size: 1.5rem; */
//     color: ${(props) => props.theme.colours.TextLight};
//   text-align: center;
//     &:hover,
//     :focus,
//     :active {
//       /* background: ${(props) => props.theme.colours.Borders}; */
//       transform: translateY(-1px);
//       box-shadow: 0px 0px 20px ${(props) => props.theme.colours.Borders}
//     }

//     @media (max-width: ${(props) => props.theme.breakpoints.MobileLg}) {
//       font-size: 2rem;
//     }
//     @media (max-width: ${(props) => props.theme.breakpoints.MobileSm}) {
//       font-size: 1.75rem;
//     }
// `;

const Title = styled.article`
  grid-area: other;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: 2rem;
  text-align: center;
  padding: 20px;
  margin: 10px 10px;
  h1 {
    font-weight: 400;
    margin: 20px;
    text-align: center;
    line-height: 4rem;
  }

  .main-cta-group {
    display: flex;
    justify-content: center;

    align-items: center;
    width: 100%;
    > {
      padding: 1rem;
    }
  }

  @media (max-width: ${breakpoints.mobileLg}px) {
    margin: 0;
    h1 {
      margin-top: -20px;
    }
  }
`;
const connectPage = () => {
 

  return (
    <Layout>
     <Title>
         <p>Connect @</p>
          <Logos />
        </Title>
    </Layout>
  );
};

export default connectPage;
