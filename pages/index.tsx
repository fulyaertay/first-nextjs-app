import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>

        <h1>The Most Popular Films</h1>
        
       

    </>
  );
}

//list popular movies
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const request = await fetch(' https://api.themoviedb.org/3/movie/popular?api_key=32f7c7b9f71027c01ab2c5910e5be9c9&language=en-US&page=1')
  const movies=await request.json()
  return {
    props: {
      movies,
    },
  }
       
}