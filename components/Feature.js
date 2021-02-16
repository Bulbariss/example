import { FadeUp } from "../components/animation/animations";
import AnimationBox from "../components/animation/AnimationBox";
import BackgroundImage from "../components/BackgroundImage";

export default function Feature({
  image,
  text,
  className,
  first,
  heading,
  last,
  reverse,
}) {
  return (
    <div
      className={`md:flex items-center bg-theme ${
        first ? "px-design pb-design-sm pt-design" : "p-design-sm"
      } ${last && "pb-design"} ${reverse && "md:flex-row-reverse"}`}
    >
      <div className="w-full shadow-2xl md:w-7/12">
        <BackgroundImage className={className} image={image} />
      </div>
      <div className="w-full pt-6 md:w-5/12 md:pt-0">
        <AnimationBox
          variants={FadeUp}
          className={`${reverse && "md:text-right"} md:px-6`}
        >
          <p className="pb-2 text-xl font-bold leading-tight md:text-3xl text-theme">
            {heading}
          </p>
          <p className="text-xl text-theme">{text}</p>
        </AnimationBox>
      </div>
    </div>
  );
}
