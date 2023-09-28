import Image from "next/image";
import styles from "./SingleContainer.module.css";

export default function SingleContainer({ data }) {
  return (
    <div className={styles.container}>
      <Image src={data.cover} className={styles.image} placeholder="blur" />
      <div className={styles.infoContainer}>
        <h2>{data.workplace}</h2>
        <h3>{data.position}</h3>
        <p>
          {data.start.getMonth() + 1}-{data.start.getFullYear()} to{" "}
          {data.end
            ? `${data.end.getMonth() + 1}-${data.end.getFullYear()}`
            : "Present"}
        </p>
      </div>
    </div>
  );
}
