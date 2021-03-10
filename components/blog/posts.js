import Pagination from "./Pagination";
import PostPreview from "./post-preview";

export default function Posts({ posts, pagination }) {
  return (
    <section>
      <div className="grid max-w-2xl grid-cols-1 px-4 mx-auto mb-8 md:grid-cols-1 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 md:px-0">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
      <Pagination
        current={pagination.current}
        pages={pagination.pages}
        link={{
          href: (page) => (page === 1 ? "/blog" : "/blog/page/[page]"),
          as: (page) => (page === 1 ? null : "/blog/page/" + page),
        }}
      />
    </section>
  );
}
