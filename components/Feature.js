import BackgroundImage from "../components/BackgroundImage";
import AnimationBox from "../components/animation/AnimationBox";
import { FadeUp } from "../components/animation/animations";

export default function Feature({
  image,
  text,
  className,
  first,
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
          <p className="pb-2 text-lg font-bold leading-tight md:text-2xl text-theme">
            {text}
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio esse
            dicta nisi!
          </p>
        </AnimationBox>
      </div>
    </div>
  );
}
