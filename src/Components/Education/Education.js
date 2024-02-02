import Link from "next/link";
import styles from "./Education.module.css";

export default () => {
  return (
    <div className={styles.container}>
      <h1>Education</h1>
      <p>
        {" "}
        I am currently enrolled in the{" "}
        <Link
          href={
            "https://discover.engineering.utoronto.ca/programs/engineering-programs/engineering-science/"
          }
        >
          <span className={styles.courseLink}>Engineering Science program</span>
        </Link>{" "}
        at the University of Toronto, an engineering program with a strong focus
        on theoretical math and physics aimed at educating the next generation
        of engineering researchers. I am specializing in the{" "}
        <Link
          href={
            "https://engsci.utoronto.ca/program/majors/machine-intelligence/"
          }
        >
          <span className={styles.courseLink}>
            Electrical and Computer engineering major with minor in AI.
          </span>
        </Link>{" "}
        .
      </p>
    </div>
  );
};
