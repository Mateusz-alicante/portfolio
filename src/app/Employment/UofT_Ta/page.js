import ExpHeader from "../../../Components/ExpHeader/ExpHeader";
import data from "./data";
import styles from "./styles.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <ExpHeader data={data} />
      <div className={styles.content}>
        Teaching assistant for two programming courses:
        <ul className={styles.list}>
          <li>
            <h3>ESC180H1:</h3> Introduction to Computer Programming: A course to
            get students familiar with the Python programming language.{" "}
          </li>
          <li>
            <h3>ESC190H1:</h3> Computer Algorithms and Data Structures: A more
            advanced course on C programming. These is a special focus on data
            structures and algorithms
          </li>
        </ul>
        <br></br>
        Key skills I have developed include:
        <ul className={styles.list}>
          <li>
            Being able to explain advanced programming concepts in an intuitive
            way.
          </li>
          <li>
            Writing and thinking about code in a way that is easy to understand
            for others.
          </li>
        </ul>
      </div>
    </div>
  );
}
