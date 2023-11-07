import ProjectHeader from "../../../Components/ProjectHeader/ProjectHeader";
import data from "./data";
import styles from "./styles.module.css";

import Link from "next/link";
import Image from "next/image";

import demoImage from "./media/demo.png";

export default function Page() {
  return (
    <div className={styles.container}>
      <ProjectHeader data={data} />
      <div className={styles.content}>
        <p>
          As part of my internship in Thailand, I participated in a hackathon
          aimed at innovative web design. Our solution integrates Google's AI
          models as an intuitive and accessible input method for the web.
        </p>
        <Image className={styles.image} src={demoImage} width={1000} />
        <p>
          A proof of concept that allowed users to create drawings on the web,
          and share them with their friends on a social medial-like platform was
          developed during the hackathon. The demos is publicly accessible under
          this{" "}
          <Link
            className={styles.contentLink}
            href="https://bluedraw-mateusz-alicante.vercel.app/"
          >
            link
          </Link>
          .
        </p>
        <br></br>
        <p>
          I continued to develop the project well after the hackathon by
          developing an{" "}
          <Link
            className={styles.contentLink}
            href="https://www.npmjs.com/package/react-hand-tracking"
          >
            NPM package
          </Link>
          .It allows developers to easily integrate the complex AI models
          required to efficiently track users' hands in web environments. The
          NPM package has already received more than 480 downloads, and it is
          updated to ensure the models in use perform well, as well as fixing
          common problems with the package.
        </p>
      </div>
    </div>
  );
}
