import Image from "next/image";
import styles from "./page.module.css";

import Shares from "../Components/Shares/Shares";
import Exp from "../Components/Exp/Exp";

import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>Hi, I'm Mateusz 👋</h1>
        <br></br>
        <p>Here is some quick info about me: </p>
        <div className={styles.quickContainer}>
          <div className={styles.singleQuickContainer}>
            <h4>Currently studying at: University of Toronto degree:</h4>
            <h2>Engineering Science (second year)</h2>
          </div>
          <div className={styles.singleQuickContainer}>
            <h4>Favorite hobby:</h4>
            <h2>Judo</h2>
          </div>
          <div className={styles.singleQuickContainer}>
            <h4>Languages I speak:</h4>
            <h2>English, Spainsh, Polish</h2>
          </div>
          <div className={styles.singleQuickContainer}>
            <h4>Born in:</h4>
            <h2>Warsaw, Poland</h2>
          </div>
        </div>
        <div className={styles.shareAndCVContainer}>
          <div>
            <h2>My accounts:</h2>
            <div>
              <Shares />
            </div>
          </div>
          <div className={styles.resumeContainer}>
            <h2>Get My resume here:</h2>
            <a
              className={styles.resumeLink}
              href="https://drive.google.com/uc?export=download&id=1zgjLfBMHpZf-LA73HHOG4hBklBXe1a7t"
              target="_blank"
            >
              <ArrowDownTrayIcon className={styles.resumeIcon} />
            </a>
          </div>
        </div>
        <Exp />
      </div>
    </main>
  );
}
