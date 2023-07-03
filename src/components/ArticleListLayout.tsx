"use client";

import { FC, ReactNode } from "react";
import { styled } from "styled-components";

interface ArticleListLayoutProps {
  listSlot: ReactNode;
}

const ArticleListLayout: FC<ArticleListLayoutProps> = ({ listSlot }) => {
  return (
    <Container>
      <h1>Articles</h1>
      {listSlot}
    </Container>
  );
};

export default ArticleListLayout;

const Container = styled.div``;
