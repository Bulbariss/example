import Link from "next/link";

export default function Header({ header, home }) {
  return (
    <div className={`${home ? "absolute" : ""} top-0 left-0 z-30 w-full`}>
      <div
        className={`${
          home ? "max-w-7xl text-white px-design" : "max-w-2xl px-4 md:px-0"
        } flex items-center justify-between pt-4 mx-auto`}
      >
        <Link href="/">
          <a className="text-xl font-bold">{header.logo}</a>
        </Link>
        <div className="flex space-x-6">
          <Link href="/blog">
            <a className="hover:underline">{header.blog}</a>
          </Link>
          <Link href="/admin">
            <a className="hover:underline">{header.contentPanel}</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
