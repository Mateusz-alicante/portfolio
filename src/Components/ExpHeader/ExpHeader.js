import styles from "./ExpHeader.module.css";
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
      <h1>
        {data.position} at {data.workplace_sentence}
      </h1>
      <Image src={data.cover} className={styles.image} placeholder="blur" />
      <div className={styles.bottomInfoContainer}>
        <h2>{data.location}</h2>
        <h2>
          {data.start.toLocaleString("default", { month: "long" })}{" "}
          {data.start.getFullYear()} -{" "}
          {data.end
            ? data.end.toLocaleString("default", { month: "long" }) +
              " " +
              data.end.getFullYear()
            : "Present"}
        </h2>
      </div>
    </div>
  );
};
