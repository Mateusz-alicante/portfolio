import Image from "next/image";
import styles from "./SingleContainer.module.css";

import Link from "next/link";

export default function SingleContainer({ data }) {
  return (
    <Link className={styles.container} href={data.url}>
      <h2>{data.title}</h2>
    </Link>
  );
}
