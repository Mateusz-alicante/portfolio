import styles from "./ProjectHeader.module.css";
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
      <h1>{data.long_title || data.title}</h1>
      <Image src={data.cover} className={styles.image} placeholder="blur" />
    </div>
  );
};
