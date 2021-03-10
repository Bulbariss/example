import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";

export default function PostHeader({ title, coverImage, date }) {
  return (
    <div className="max-w-2xl px-4 pt-12 mx-auto md:px-0">
      {/* <div className="hidden md:block md:mb-12"></div> */}
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} height={620} width={1240} />
      </div>
      <PostTitle>{title}</PostTitle>
      <div>
        <div className="block mb-6 md:hidden"></div>
        <div className="mb-6 text-sm font-bold text-gray-600">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </div>
  );
}
