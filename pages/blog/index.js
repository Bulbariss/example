import Posts from "../../components/blog/posts";
import Intro from "../../components/blog/intro";
import { getAllPosts } from "../../lib/blog/api";
import Layout from "../../components/layout";
import { POSTS_PER_PAGE } from "../../lib/blog/constants";

export default function Index({ allPosts, pagination, data, seo, header }) {
  const show = allPosts.slice(0, POSTS_PER_PAGE);
  return (
    <>
    <Layout title={data.title} seo={seo} header={header}>
        <Intro />
        <Posts pagination={pagination} posts={show} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const pageContent = await import(`../../cms/pages/homepage.md`);
  const seo = await import(`../../cms/config/seo.md`);
  const header = await import(`../../cms/config/header.md`);

  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
  ]);

  const pagination = {
    current: 1,
    pages: Math.ceil(allPosts.length / POSTS_PER_PAGE),
  };
  return {
    props: {
      allPosts,
      pagination,
      data: pageContent.default.attributes,
      seo: seo.default.attributes,
      header: header.default.attributes,
    },
  };
}
