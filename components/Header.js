import Link from "next/link";
export default function Header({ header }) {
  return (
    <div className="absolute top-0 left-0 z-30 w-full">
      <div className="flex items-center justify-between px-4 pt-4 mx-auto text-white max-w-7xl">
        <Link href="/">
          <a className="text-xl font-bold">{header.logo}</a>
        </Link>
        <div className="flex space-x-6">
          <Link href="/" className="font-bold">
            {header.blog}
          </Link>
          <Link href="/admin" className="font-bold">
            {header.contentPanel}
          </Link>
        </div>
      </div>
    </div>
  );
}
