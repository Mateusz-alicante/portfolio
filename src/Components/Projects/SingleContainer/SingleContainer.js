import Image from "next/image";
import styles from "./SingleContainer.module.css";

import Link from "next/link";

export default function SingleContainer({ data }) {
  return (
    <Link className={styles.container} href={data.url}>
      <Image src={data.cover} className={styles.image} placeholder="blur" />
      <div className={styles.infoContainer}>
        <h2>{data.title}</h2>
      </div>
    </Link>
  );
}
