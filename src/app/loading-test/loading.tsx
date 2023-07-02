"use client";

import { FC } from "react";
import { styled } from "styled-components";

const loading: FC = () => {
  return <Container>Loading...</Container>;
};

export default loading;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
`;
