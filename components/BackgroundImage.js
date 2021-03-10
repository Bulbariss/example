import Image from "next/image";
import { useRef } from "react";

export default function BackgroundImage({
  image,
  children,
  alt,
  className,
  containerClassName,
  quality,
}) {
  let imageRef = useRef();
  function imageLoaded() {
    let imagePlaceholder = imageRef.current.getElementsByClassName(
      "placeholder-container"
    )[0];
    imagePlaceholder.classList.add("loaded");
  }
  return (
    <>
      <div ref={imageRef} className={`relative ${className}`}>
        <div className="absolute top-0 left-0 w-full h-full placeholder-container">
          <Image
            aria-hidden="true"
            src={`/_next/image?url=/${image}&w=40&q=75`}
            className="z-10 w-full h-full delay-200 bg-image"
            layout="fill"
            unoptimized
            alt="cover placeholder"
            objectFit="cover"
            priority="true"
          />
          <div className="absolute z-20 w-full h-full delay-200 blur" />
        </div>
        <Image
          onLoad={() => imageLoaded()}
          layout="fill"
          quality={quality || 75}
          objectFit="cover"
          src={"/" + image}
          alt={alt ? alt : "cover"}
          className="w-full h-full onload"
        />
        <div className={`relative z-20 ${containerClassName}`}>{children}</div>
      </div>
    </>
  );
}
