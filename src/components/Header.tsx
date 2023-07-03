"use client";

import Link from "next/link";
import { FC } from "react";
import { styled } from "styled-components";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <Container>
      <RouteLink href="/">홈</RouteLink>
      <RouteLink href="/loadingjs">전체 로딩</RouteLink>
      <RouteLink href="/suspense">일부 로딩</RouteLink>
      <RouteLink href="/about">About</RouteLink>
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
