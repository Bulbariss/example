import { useRouter } from "next/router";
import ErrorPage from "next/error";
import PostBody from "../../components/blog/post-body";
import PostHeader from "../../components/blog/post-header";
import Layout from "../../components/layout";
import { getPostBySlug, getAllPosts } from "../../lib/blog/api";
import PostTitle from "../../components/blog/post-title";
import markdownToHtml from "../../lib/blog/markdownToHtml";
import OtherPosts from "../../components/blog/other-posts";

export default function Post({
  post,
  previousPost,
  nextPost,
  data,
  seo,
  header,
}) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout title={data.title} seo={seo} header={header}>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article className="mb-32">
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
            />
            <PostBody content={post.content} />
          </article>
          <OtherPosts previousPost={previousPost} nextPost={nextPost} />
        </>
      )}
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const pageContent = await import(`../../cms/pages/homepage.md`);
  const seo = await import(`../../cms/config/seo.md`);
  const header = await import(`../../cms/config/header.md`);

  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "content",
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
      data: pageContent.default.attributes,
      seo: seo.default.attributes,
      header: header.default.attributes,
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
