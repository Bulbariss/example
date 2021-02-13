import Link from "next/link";
export default function Header({ header }) {
  return (
    <div className="flex justify-between max-w-7xl">
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
  );
}
