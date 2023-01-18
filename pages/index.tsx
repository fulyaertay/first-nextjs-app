import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });
import Layout from "./components/layout";
export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
        <h1>Hello World! You are on home page</h1>
        <Image src="/images/cat.jpg" width={900} height={600}></Image>
        <div>
          <Link href="/">Home</Link>
          <Link href="./about/about"> About</Link>
          <Link href="./posts/first-post"> Posts</Link>
        </div>
     
    </Layout>
  );
}
