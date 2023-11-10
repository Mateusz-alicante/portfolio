import ProjectHeader from "../../../Components/ProjectHeader/ProjectHeader";
import data from "./data";
import styles from "./styles.module.css";

import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <div className={styles.container}>
      <ProjectHeader data={data} />
      <div className={styles.content}>
        <h2>Overview:</h2>
        <p>
          I have worked on a project that allows students to record their notes,
          and receive AI-generated markdown summaries of the content of the
          lectures. The appllication includes a number of other features aimed
          at helping students better absorb knowladge from their lectures. After
          a recording is submitted, they will receive quiz questions based on
          their notes. The questions are spaced out in time according to the
          spaced repetition theory. The students can also ask questions about
          their notes to a chatbot, which will answer them using the notes and
          the lecture slides, and refer them back to specific parts of the note
          where the content is included.
        </p>
        <h2>Status:</h2>
        <p>
          A demo version of the appliation has already been published. The
          current stack makes use of MongoDB, Vercel, AWS, and other APIs that
          help us weave all of these functions together. The demo version can be
          found{" "}
          <Link
            className={styles.contentLink}
            href="https://toni-notes.vercel.app/"
          >
            online
          </Link>
          .
        </p>
        <p>
          We are looking forward to releasing a more fleshed out version of the
          app with a specific pricing plan, and a wider array of features soon.
        </p>
        <h2>Pitch Deck presentation:</h2>
        <p>
          A more detailed presentation about the functonality and plan for the
          application can be found{" "}
          <Link
            className={styles.contentLink}
            href="https://docs.google.com/presentation/d/19j8XS7kaO7K9BnFLbYnDb327YZGNvnqLCYTraI3P0p4/edit?usp=sharing"
          >
            online
          </Link>
        </p>
        <h2>Presentation video:</h2>
        <iframe
          className={styles.video}
          src="https://drive.google.com/file/d/1V2TudSJq9i_EvibtKsqw-H1c1Jtamvh0/preview"
          width="640"
          height="480"
          allow="autoplay"
        ></iframe>
      </div>
    </div>
  );
}
