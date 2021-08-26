import styled from "styled-components";

const HomePageContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;

  @media screen and (max-width: 600px) {
    padding: 20px 2rem;
  }
`;

export default HomePageContainer;
