import ExpHeader from "../../../Components/ExpHeader/ExpHeader";
import data from "./data";
import styles from "./styles.module.css";

import ItemLink from "@/Components/ItemLink/ItemLink";

import WhatsApp from "../../Research/WhatsApp/data";
import CyberKillChain from "../../Research/CyberKillChain/data";

import HandTrack from "../../Projects/hand_track/data";
import Robo from "../../Projects/robotics_hack/data";

export default function Page() {
  return (
    <div className={styles.container}>
      <ExpHeader data={data} />
      <div className={styles.content}>
        During my internship I worked on a number of projects and research
        papers:
        <h3>Projects:</h3>
        <br></br>
        <ItemLink data={Robo} />
        <ItemLink data={HandTrack} />
        <h3>Research Experience:</h3>
        <ItemLink data={WhatsApp} />
        <ItemLink data={CyberKillChain} />
      </div>
    </div>
  );
}
