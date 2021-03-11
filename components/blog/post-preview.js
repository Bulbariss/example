import DateFormatter from "./date-formatter";
import Link from "next/link";
import CoverImage from "./cover-image";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          height={278}
          width={556}
        />
      </div>
      <h3 className="mb-3 text-3xl leading-snug">
        <Link as={`/blog/${slug}`} href="/blog/[slug]">
          <a className="font-bold hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="mb-4 text-sm font-bold text-gray-600">
        <DateFormatter dateString={date} />
      </div>
      <p className="mb-4 prose prose-lg max-w-none">{excerpt}</p>
    </div>
  );
}
