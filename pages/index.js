import React, { useEffect } from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import index from "./index.module.css";
import Circle from "../components/Circle/Circle";

export default function Home({ allPostsData }) {
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches &&
      !document.body.classList.contains("darkmodeinit")
    ) {
      document.body.classList.add("darkmodeinit");
      document.body.classList.add("darkmode");
    }
  }, []);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <Circle />
        <Circle
          style={{
            backgroundColor: "deepskyblue",
            top: -100,
            left: 90,
            width: 150,
            height: 150,
          }}
        />
        <Circle
          style={{
            backgroundColor: "yellow",
            top: -150,
            left: 70,
            width: 60,
            height: 60,
          }}
        />
        <Circle
          style={{
            backgroundColor: "red",
            top: -100,
            left: 260,
            width: 70,
            height: 70,
          }}
        />
        <Circle
          style={{
            backgroundColor: "orangered",
            top: -100,
            left: 360,
            width: 100,
            height: 100,
          }}
        />
        <Circle
          style={{
            backgroundColor: "lightgreen",
            top: -180,
            left: 470,
            width: 80,
            height: 80,
          }}
        />
        <p>Open-source, Web, Google Cloud Certified</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
