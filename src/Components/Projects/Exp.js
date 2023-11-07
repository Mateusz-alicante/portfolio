import SingleContainer from "./SingleContainer/SingleContainer";

import hand_track_data from "../../app/Projects/hand_track/data";
import robotics_hack_data from "../../app/Projects/robotics_hack/data";

import styles from "./Exp.module.css";

const projects = [hand_track_data, robotics_hack_data];

export default function Exp() {
  return (
    <div>
      <h1>Projects</h1>
      <div className={styles.singleExperienceContainer}>
        {projects.map((data) => (
          <SingleContainer data={data} />
        ))}
      </div>
    </div>
  );
}
