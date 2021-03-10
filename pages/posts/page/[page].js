import Container from "../../../components/blog/container";
import MoreStories from "../../../components/blog/more-stories";
import Intro from "../../../components/blog/intro";
import Layout from "../../../components/blog/layout";
import { getAllPosts } from "../../../lib/blog/api";
import { POSTS_PER_PAGE } from "../../../lib/blog/constants";

export default function Index({ allPosts, pagination, show }) {
  return (
    <>
      <Layout>
        <Container>
          <Intro />
          {allPosts.length > 0 && (
            <MoreStories pagination={pagination} posts={show} />
          )}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ params }) {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
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
    props: { pagination, allPosts, show },
  };
}

export const getStaticPaths = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
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
