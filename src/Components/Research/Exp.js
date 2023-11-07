import SingleContainer from "./SingleContainer/SingleContainer";

import WhatsApp from "../../app/Research/WhatsApp/data";
import CyberKillChain from "../../app/Research/CyberKillChain/data";

import styles from "./Exp.module.css";

const projects = [WhatsApp, CyberKillChain];

export default function Exp() {
  return (
    <div>
      <h1>Research</h1>
      <div className={styles.singleExperienceContainer}>
        {projects.map((data) => (
          <SingleContainer data={data} />
        ))}
      </div>
    </div>
  );
}
