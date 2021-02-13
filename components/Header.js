import Link from "next/link";
export default function Header({ header }) {
  return (
    <div className="fixed top-0 left-0 w-full">
      <div className="flex justify-between mx-auto max-w-7xl">
        <Link href="/" className="font-bold">
          {header.logo}
        </Link>
        <div className="flex">
          <Link href="/" className="font-bold">
            {header.blog}
          </Link>
          <Link href="/" className="font-bold">
            {header.contentPanel}
          </Link>
        </div>
      </div>
    </div>
  );
}
