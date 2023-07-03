import { getArticle } from "@/lib/api";
import { notFound } from "next/navigation";
import { FC } from "react";

interface ArticleProps {
  params: {
    url: string;
  };
}

export const runtime = "edge";

const page: FC<ArticleProps> = async ({ params: { url } }) => {
  const article = await getArticle(url);

  if (!article) {
    notFound();
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
};

export default page;
