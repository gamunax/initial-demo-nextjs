import { MainLayout } from "../components/layout/MainLayout";
import Link from "next/link";
import { DarkLayout } from "../components/layout/DarkLayout";
import { ReactElement } from "react";

export default function AboutPage() {
  return (
    <>
      <h1>About page</h1>
      <h1 className={"title"}>
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/about.js</code>
      </p>
    </>
  );
}

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
