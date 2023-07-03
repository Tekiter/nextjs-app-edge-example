"use client";

import Link from "next/link";
import { FC } from "react";
import { styled } from "styled-components";

interface ArticleListProps {
  articles: {
    title: string;
    url: string;
  }[];
}

const ArticleList: FC<ArticleListProps> = ({ articles }) => {
  return (
    <Container>
      {articles.map((article) => (
        <Link key={article.url} href={`/article/${article.url}`}>
          {article.title}
        </Link>
      ))}
    </Container>
  );
};

export default ArticleList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
