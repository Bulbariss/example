import Link from "next/link";
import Layout from "../components/layout";
import Feature from "../components/Feature";
import BackgroundImage from "../components/BackgroundImage";

export default function Index({ data, seo, header }) {
  const button = (
    <Link href="/admin">
      <a className="px-8 py-2 mx-auto mt-4 text-base font-bold text-center text-white rounded-md shadow-2xl bg-theme-2">
        {data.buttonText}
      </a>
    </Link>
  );
  return (
    <Layout home title={data.title} seo={seo} header={header}>
      <BackgroundImage
        containerClassName="flex flex-col items-center justify-center min-h-screen px-4"
        image={data.heroImage}
      >
        <h1
          className="font-bold leading-none text-center text-white text-hero"
          dangerouslySetInnerHTML={{ __html: data.heroText }}
        ></h1>
        <h2
          className="max-w-md pt-2 mx-auto text-xl text-center text-white"
          dangerouslySetInnerHTML={{ __html: data.heroTextTwo }}
        ></h2>
        {button}
      </BackgroundImage>
      <div className="text-center p-design text-theme">
        <h3 className="pb-2 text-xl font-bold leading-tight md:text-3xl">
          {data.headingOne}
        </h3>
        <p className="max-w-md mx-auto md:text-xl">{data.textOne}</p>
      </div>
      <Feature
        first
        heading={data.headingTwo}
        text={data.textTwo}
        image={data.imageOne}
        className="pb-64-percent"
      />
      <Feature
        heading={data.headingThree}
        text={data.textThree}
        image={data.imageTwo}
        className="pb-64-percent"
        reverse
      />
      <Feature
        heading={data.headingFour}
        text={data.textFour}
        image={data.imageThree}
        className="pb-64-percent"
      />
      <Feature
        last
        reverse
        heading={data.headingFive}
        text={data.textFive}
        image={data.imageFour}
        className="pb-64-percent"
      />
      <div className="flex flex-col justify-center p-design">
        <p
          className="text-xl font-bold text-center md:text-3xl text-theme"
          dangerouslySetInnerHTML={{ __html: data.headingSix }}
        ></p>
        {button}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const content = await import(`../cms/pages/homepage.md`);
  const seo = await import(`../cms/config/seo.md`);
  const header = await import(`../cms/config/header.md`);

  return {
    props: {
      data: content.default.attributes,
      seo: seo.default.attributes,
      header: header.default.attributes,
    },
  };
}
