import Image from "next/image";
import styles from "./page.module.css";
import { DataTable } from "@/components/DataTable";

export default async function Page() {
  const data = await getData();

  return (
    <main className={styles.main}>
      <h1>Table Data</h1>
    </main>
  );
}
async function getData() {
  const response = await fetch(
    "https://backdelightfulobjectpool.harshitbharani.repl.co"
  );
  if (!response.ok) {
    throw new Error("enable to fetch data");
  }

  return response.json();
}
