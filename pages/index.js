import Layout from "../components/layout";
import BackgroundImage from "../components/BackgroundImage";

export default function Index({ data, seo, header }) {
  return (
    <Layout title={data.title} seo={seo} header={header}>
      <BackgroundImage
        className="flex items-center justify-center min-h-screen"
        image={data.heroImage}
      >
        <h1 className="H1">{data.heroText}</h1>
      </BackgroundImage>
      <div className="design-container">
        <h2 className="font-bold">{data.textOne}</h2>
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
