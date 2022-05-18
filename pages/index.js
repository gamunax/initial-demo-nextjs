import { MainLayout } from "../components/layout/MainLayout";
import Link from "next/link";

export default function Home() {
  return (
    <MainLayout>
      <h1>Home page</h1>
      <h1 className={"title"}>
        {/* Ir a <a href="/about">About</a> */}
        Ir a <Link href="/about">About</Link>
      </h1>

      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/index.js</code>
      </p>
    </MainLayout>
  );
}
