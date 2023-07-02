"use client";

import Link from "next/link";
import { FC } from "react";
import { styled } from "styled-components";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <Container>
      <RouteLink href="/">홈</RouteLink>
      <RouteLink href="/loading-test">로딩 테스트</RouteLink>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  background-color: #e5e5e5;
`;

const RouteLink = styled(Link)`
  display: flex;

  padding: 6px 10px;
`;
