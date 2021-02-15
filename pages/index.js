import Layout from "../components/layout";
import BackgroundImage from "../components/BackgroundImage";
import TextPopUpStaggered from "../components/TextPopUp";

export default function Index({ data, seo, header }) {
  return (
    <Layout title={data.title} seo={seo} header={header}>
      <BackgroundImage
        className="flex items-center justify-center min-h-screen"
        image={data.heroImage}
      >
        <h1
          className="font-bold leading-tight text-center text-white H1 text-hero"
          dangerouslySetInnerHTML={{ __html: data.heroText }}
        ></h1>
      </BackgroundImage>
      <div className="design-container bg-theme">
        <h2 className="text-2xl font-bold leading-tight text-center text-theme">
          <TextPopUpStaggered text={data.textOne} />
        </h2>
      </div>
      <div className="design-container">
        <h3 className="text-2xl font-bold leading-tight text-center text-theme">
          {data.textTwo}
        </h3>
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
