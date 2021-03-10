import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/blog/container";
import PostBody from "../../components/blog/post-body";
import PostHeader from "../../components/blog/post-header";
import Layout from "../../components/blog/layout";
import { getPostBySlug, getAllPosts } from "../../lib/blog/api";
import PostTitle from "../../components/blog/post-title";
import OtherPosts from "../../components/blog/other-posts";
import Head from "next/head";
import { CMS_NAME } from "../../lib/blog/constants";
import markdownToHtml from "../../lib/blog/markdownToHtml";

export default function Post({ post, preview, previousPost, nextPost }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {post.title} | Next.js Blog Example with {CMS_NAME}
                </title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
            <OtherPosts previousPost={previousPost} nextPost={nextPost} />
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  const allPosts = getAllPosts(["title", "slug"]);
  const slugs = allPosts.map((i) => i.slug);
  const postIndex = slugs.indexOf(params.slug);

  const previousPost = postIndex > 0 && allPosts[postIndex - 1];
  const nextPost = postIndex < allPosts.length - 1 && allPosts[postIndex + 1];

  return {
    props: {
      post: {
        ...post,
        content,
      },
      previousPost,
      nextPost,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
