import Container from "../../components/blog/container";
import MoreStories from "../../components/blog/more-stories";
import Intro from "../../components/blog/intro";
import Layout from "../../components/blog/layout";
import { getAllPosts } from "../../lib/blog/api";
import { POSTS_PER_PAGE } from "../../lib/blog/constants";

export default function Index({ allPosts, pagination }) {
  const show = allPosts.slice(0, POSTS_PER_PAGE);
  return (
    <>
      <Layout>
        <Container>
          <Intro />
          <MoreStories pagination={pagination} posts={show} />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  const pagination = {
    current: 1,
    pages: Math.ceil(allPosts.length / POSTS_PER_PAGE),
  };
  return {
    props: { allPosts, pagination },
  };
}
