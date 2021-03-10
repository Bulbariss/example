import Link from "next/link";

export default function OtherPosts({ previousPost, nextPost }) {
  return (
    <div>
      {previousPost && (
        <Link href={"/posts/" + previousPost.slug}>
          <a className="text-xl font-bold">{previousPost.title}</a>
        </Link>
      )}
      {nextPost && (
        <Link href={"/posts/" + nextPost.slug}>
          <a className="text-xl font-bold">{nextPost.title}</a>
        </Link>
      )}
    </div>
  );
}
