import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";
import { DarkLayout } from "../components/layouts/DarkLayout";
import { ReactElement } from "react";
export default function aboutPage() {
  return (
    <>
     
        <h1 className={"title"}>
          Welcome to <Link href="/"> about</Link>
        </h1>

        <p className={"description"}>
          Get started by editing <code className={"code"}>pages/about.js</code>
        </p>
       
    </>
  );
}

aboutPage.getLayout = function getLayout(page:ReactElement) {
 return (<MainLayout>
    <DarkLayout>{page}</DarkLayout>
  </MainLayout>);
};
