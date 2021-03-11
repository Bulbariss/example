import Posts from "../../../components/blog/posts";
import Intro from "../../../components/blog/intro";
import Layout from "../../../components/layout";
import { getAllPosts } from "../../../lib/blog/api";
import { POSTS_PER_PAGE } from "../../../lib/blog/constants";

export default function Index({
  allPosts,
  pagination,
  show,
  seo,
  header,
  page,
}) {
  return (
    <>
      <Layout title={"Blog Page " + page} seo={seo} header={header}>
        <Intro />
        {allPosts.length > 0 && <Posts pagination={pagination} posts={show} />}
      </Layout>
    </>
  );
}

export async function getStaticProps({ params }) {
  const seo = await import(`../../../cms/config/seo.md`);
  const header = await import(`../../../cms/config/header.md`);

  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
  ]);
  const page = parseInt(params.page);

  let show = allPosts.slice(
    page * POSTS_PER_PAGE - 2,
    page * POSTS_PER_PAGE - 2 + POSTS_PER_PAGE
  );
  const pagination = {
    current: page,
    pages: Math.ceil(allPosts.length / POSTS_PER_PAGE),
  };
  return {
    props: {
      pagination,
      allPosts,
      show,
      page,
      seo: seo.default.attributes,
      header: header.default.attributes,
    },
  };
}

export const getStaticPaths = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
  ]);
  const pages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  const paths = Array.from(Array(pages - 1).keys()).map((it) => ({
    params: { page: (it + 2).toString() },
  }));
  return {
    paths: paths,
    fallback: false,
  };
};
