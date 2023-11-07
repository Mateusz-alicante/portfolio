import ProjectHeader from "../../../Components/ProjectHeader/ProjectHeader";
import data from "./data";
import styles from "./styles.module.css";

import Link from "next/link";
import Image from "next/image";

import courseImage from "./media/course.png";

import ItemLink from "../../../Components/ItemLink/ItemLink";
import npmData from "../hand_track/data";

export default function Page() {
  return (
    <div className={styles.container}>
      <ProjectHeader data={data} />
      <div className={styles.content}>
        <p>
          One of the projects I was assigned to in my time at KMUTT was
          organising a robotics hackathon for high school students.{" "}
        </p>
        <br></br>
        <p>
          I was responsible for teaching students the basics of Arduino, so they
          could get started on their robots and compete with other students. I
          prepared a series of short lectures and notes that helped students
          understand the basic concepts of Arduino.
        </p>
        <Image src={courseImage} className={styles.image} width={1000} />
        <p>
          I also created a demo project aimed at showing students what can be
          built with more time and practice. I made use of my NPM package
          developed for my hand tracking project, to create an application that
          allows users to control Arduinos using a hand tracking web interface.
          The project was welcomed eagerly among the students, who competed to
          see who was able to complete a circuit faster using the interface.
        </p>
        <ItemLink data={npmData} />
      </div>
    </div>
  );
}
