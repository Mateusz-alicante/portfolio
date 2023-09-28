"use client";

import { LinkedinIcon, GithubIcon, EmailIcon } from "next-share";
import styles from "./Shares.module.css";

export default function Shares() {
  return (
    <div className={styles.container}>
      <div>
        <a
          href="https://www.linkedin.com/in/mateusz-kazimierczak-830b42243"
          target="_blank"
        >
          <LinkedinIcon size={50} round />
        </a>
      </div>
      <div>
        <a href="https://github.com/Mateusz-alicante" target="_blank">
          <GithubIcon size={50} round />
        </a>
      </div>
      <div>
        <a href="mailto:mateusz.alicante@gmail.com">
          <EmailIcon size={50} round />
        </a>
      </div>
    </div>
  );
}
