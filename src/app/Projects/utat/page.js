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
          I am a member of the{" "}
          <Link className={styles.contentLink} href="https://www.utat.ca/uas">
            Unmanned Aerial Systems
          </Link>{" "}
          division of the University of Toronto Aerospace Team. I am responsible
          for the autonomous navigation of the aircraft.
        </p>
        <h2>Skills:</h2>
        <p>
          <li>Robot Operating System (ROS)</li>
          <li>Python</li>
          <li>Gazebo Simulations</li>
          <li>PX4 autopilot</li>
        </p>
      </div>
    </div>
  );
}
