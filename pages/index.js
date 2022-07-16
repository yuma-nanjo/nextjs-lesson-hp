import Image from "next/image";
import Layout from "../components/Layout";
import { Carousel } from "flowbite-react";

export default function Home() {
  return (
    <Layout title="Home">
      <div className="flex items-center justify-center">
        <p className="text-4xl">Welcome to umanoc</p>
      </div>
    </Layout>
  );
}
