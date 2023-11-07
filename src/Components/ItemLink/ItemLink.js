import styles from "./ItemLink.module.css";

import Link from "next/link";
import Image from "next/image";

export default function ItemLink({ data }) {
  if (data.type == "Project") {
    return (
      <Link href={data.url} className={styles.outerContainer}>
        <Image src={data.cover} className={styles.image} />
        <div className={styles.infoContainer}>
          <h3>Go to project: </h3>
          <br></br>
          <h2>{data.title}</h2>
        </div>
      </Link>
    );
  } else if (data.type == "Job") {
    return (
      <Link href={data.url} className={styles.outerContainer}>
        <Image src={data.cover} className={styles.image} />
        <div className={styles.infoContainer}>
          <h3>{data.workplace}</h3>
          <h3>{data.position}</h3>
          <br></br>
          <h2>{data.title}</h2>
        </div>
      </Link>
    );
  } else if (data.type == "Research") {
    return (
      <Link href={data.url} className={styles.outerContainer}>
        <div className={styles.infoContainer}>
          <h3>Research experience:</h3>
          <h2>{data.title}</h2>
        </div>
      </Link>
    );
  }
}
