import dynamic from "next/dynamic";
import Layout from "@/layout";
import React, { Suspense } from "react";

const HomeHero = dynamic(() => import("@/components/Home/HomeHero"), {
  ssr: true, // Critical content for SSR
});
const ServiceDisplay = dynamic(
  () => import("@/components/Home/ServiceDisplay"),
);
const ClientChallenges = dynamic(
  () => import("@/components/Home/ClientChallenges"),
);
const HowItWorks = dynamic(() => import("@/components/Home/HowItWorks"));
const HomeClient = dynamic(() => import("@/components/Home/HomeClient"), {
  ssr: false,
});
const HomeServices = dynamic(() => import("@/components/Home/HomeServices"), {
  ssr: false,
});
const Commitment = dynamic(() => import("@/components/Home/Commitment"), {
  ssr: false,
});
const FAQs = dynamic(() => import("@/components/Home/FAQs"), { ssr: false });
const BlogPost = dynamic(() => import("@/components/Home/BlogPost"), {
  ssr: false,
});

export default function Home() {
  return (
    <Layout>
      <HomeHero />
      <ServiceDisplay />
      <ClientChallenges />
      <HowItWorks />
      <Suspense fallback={<div>Loading...</div>}>
        <HomeClient />
        <HomeServices />
        <Commitment />
        <FAQs />
        <BlogPost />
      </Suspense>
    </Layout>
  );
}
