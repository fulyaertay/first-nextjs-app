import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>

        <h1>Home Page</h1>

        <Image src="/images/cat.jpg" width={900} height={600}></Image>

    </>
  );
}
