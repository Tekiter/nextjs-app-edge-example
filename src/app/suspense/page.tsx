import ArticleList from "@/components/ArticleList";
import ArticleListLayout from "@/components/ArticleListLayout";
import { getArticleList } from "@/lib/api";
import { FC, Suspense } from "react";

interface ArticleListPageProps {}

const ArticleListPage: FC<ArticleListPageProps> = ({}) => {
  return (
    <ArticleListLayout
      listSlot={
        <Suspense fallback={<div>Loading...</div>}>
          <ArticleListData />
        </Suspense>
      }
    />
  );
};

export default ArticleListPage;

async function ArticleListData() {
  const articles = await getArticleList();

  return <ArticleList articles={articles} />;
}
