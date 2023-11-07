import styles from "./ResearchHeader.module.css";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

import Image from "next/image";

export default ({ data }) => {
  return (
    <div>
      <Link href={"/"} className={styles.backContainer}>
        <ArrowLeftIcon className={styles.backIcon} />
        <h2>Main page</h2>
      </Link>
      <h1>{data.title}</h1>
      <h2>{data.published}</h2>
    </div>
  );
};
