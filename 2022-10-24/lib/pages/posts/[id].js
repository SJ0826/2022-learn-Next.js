import Head from "next/head"
import Layout from "../../components/Layout"
import { getAllPostIds } from '../../lib/posts';

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post() {
  return (
  <Layout>
  <Head>
    <title>첫번째 글</title>
  </Head>
  <h1>첫번째 글</h1>
  </Layout>
  )
}