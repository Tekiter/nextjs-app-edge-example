import ArticleList from "@/components/ArticleList";
import ArticleListLayout from "@/components/ArticleListLayout";
import { getArticleList } from "@/lib/api";

export const runtime = "edge";
export const revalidate = 5;

export default async function LoadingJS() {
  const articles = await getArticleList();

  return <ArticleListLayout listSlot={<ArticleList articles={articles} />} />;
}
