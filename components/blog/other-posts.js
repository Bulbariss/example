import Link from "next/link";

function Placeholder() {
  return <div className="w-full sm:w-1/2"></div>;
}
function Container({ label, post, right }) {
  return (
    <Link href={"/blog/" + post.slug}>
      <a
        className={`${
          right ? "sm:text-right" : ""
        } w-full mb-auto px-4 py-10 text-base font-bold transition-colors duration-200 rounded-lg sm:w-1/2 hover:bg-gray-100`}
      >
        <span className="block pb-1 text-xs font-bold text-gray-600">
          {label}
        </span>
        <span>{post.title}</span>
      </a>
    </Link>
  );
}

export default function OtherPosts({ previousPost, nextPost }) {
  return (
    <div className="max-w-2xl mx-auto">
      <hr className="bg-gray-600" />
      <div className="flex flex-wrap py-10">
        {previousPost ? (
          <Container label="PREVIOUS" post={previousPost} />
        ) : (
          <Placeholder />
        )}
        {nextPost && <Container label="NEXT" post={nextPost} right />}
      </div>
    </div>
  );
}
