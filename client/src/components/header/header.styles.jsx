import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const getHeaderType = (props) => {
  if (props.main) {
    return HeaderMainContainer;
  }

  if (props.left) {
    return HeaderLeftContainer;
  }

  if (props.right) {
    return HeaderRightContainer;
  }
};

export const HeaderContainer = styled.div`
  ${getHeaderType}
`;

const HeaderMainContainer = css`
  margin: 1rem 5rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    margin: 1rem 2rem;
  }
`;

const HeaderLeftContainer = css`
  flex: 1 1 auto;
`;

const HeaderRightContainer = css`
  flex: 1 1 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const LinkContainer = styled(Link)`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  margin-right: 1rem;

  @media screen and (max-width: 600px) {
    display: none;
  }

  &:last-child {
    margin-right: 0;
  }
`;
