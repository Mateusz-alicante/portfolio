import ExpHeader from "../../../Components/ExpHeader/ExpHeader";
import data from "./data";
import styles from "./styles.module.css";

import ItemLink from "@/Components/ItemLink/ItemLink";

import WhatsApp from "../../Research/WhatsApp/data";
import CyberKillChain from "../../Research/CyberKillChain/data";

import HandTrack from "../../Projects/hand_track/data";
import Robo from "../../Projects/robotics_hack/data";

import Recommendation from "@/Components/Recommendation/Recommendation";

export default function Page() {
  return (
    <div className={styles.container}>
      <ExpHeader data={data} />
      <div className={styles.content}>
        The internship had a strong focus on AI. Apart from the projects listed
        below, I completed a number of AI courses, and participated in a number
        of AI Kaggle competitions.
        <br></br>
        During my internship I worked on a number of projects and research
        papers:
        <h3>Projects:</h3>
        <br></br>
        <ItemLink data={Robo} />
        <ItemLink data={HandTrack} />
        <h3>Recommendation:</h3>
        <Recommendation text={recommendationText} name={recommendationName} />
        <h3>Research Experience:</h3>
        <ItemLink data={WhatsApp} />
        <ItemLink data={CyberKillChain} />
      </div>
    </div>
  );
}

const recommendationText =
  "It's an absolute pleasure to host Mateusz at IC2 over the Summer of 2023. He's enthusiastic, highly intelligent, and able to complete his tasks efficiently and effectively. Mateusz simply exceeded my expectations in every positive way!";
const recommendationName = "Prof. Jonathan H. Chan";
