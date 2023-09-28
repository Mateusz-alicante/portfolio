import SingleContainer from "./SingleContainer/SingleContainer";

import UofT_Ta_data from "../../app/Employment/UofT_Ta/data";

import styles from "./Exp.module.css";

const employment = [UofT_Ta_data];

export default function Exp() {
  return (
    <div>
      <h1>Employment</h1>
      <div className={styles.singleExperienceContainer}>
        {employment.map((data) => (
          <SingleContainer data={data} />
        ))}
      </div>
    </div>
  );
}
