import Image from "next/image";
import { useRef } from "react";
export default function BackgroundImage({
  image,
  children,
  alt,
  className,
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
      <div ref={imageRef} className={`relative w-screen ${className}`}>
        <div className="absolute top-0 left-0 w-full h-full placeholder-container">
          <Image
            src={`/_next/image?url=/${image}&w=40&q=75`}
            className="z-10 w-full h-full delay-200 bg-image"
            layout="fill"
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
          alt={alt ? alt : "test"}
          className="w-full h-full onload"
        />
        <div className="relative z-20">{children}</div>
      </div>
    </>
  );
}
