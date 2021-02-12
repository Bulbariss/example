import Layout from "../components/layout";

export default function Index({ data, seo }) {
  return <Layout title={data.title} seo={seo}></Layout>;
}

export async function getStaticProps() {
  const content = await import(`../cms/pages/homepage.md`);
  const seo = await import(`../cms/config/seo.md`);

  return {
    props: {
      data: content.default.attributes,
      seo: seo.default.attributes,
    },
  };
}
