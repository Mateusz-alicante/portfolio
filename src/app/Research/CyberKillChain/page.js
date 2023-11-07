import ResearchHeader from "../../../Components/ResearchHeader/ResearchHeader";
import data from "./data";
import styles from "./styles.module.css";

import Link from "next/link";
import Image from "next/image";

import conf from "./media/conf.png";

export default function Page() {
  return (
    <div className={styles.container}>
      <ResearchHeader data={data} />
      <div className={styles.content}>
        <h3>Status:</h3>
        <p>
          The paper has been submitted to a conference, and we are awaiting
          feedback
        </p>
        <h3>Awards:</h3>
        <p>
          We have presented the faindings of this paper at the UNERD conference
          at the University of Toronto. Our work was awarded the "best
          presentation for the data analytics & AI presentation".
        </p>
        <Image className={styles.image} src={conf} width={1000} />
        <h3>Abstract:</h3>
        <p>
          Recent advancements in artificial intelligence (AI) have transformed
          the cybersecurity landscape. AI powered tools have empowered
          adversaries to execute sophisticated attacks that exploit system
          vulnerabilities to inflict severe harm on government institutions,
          personal data, and financial systems. As a result, interest in
          developing defense mechanisms against these powerful malicious tools
          is rising. However, there is a lack of research on how these tools
          affect the different stages of the Cyber Kill Chain. This study
          examines how attackers leverage AI at every stage of the chain and
          explores how defenders can mitigate adverse behavior at each step. We
          review papers published between 2013 and 2023 from the Web of Science
          and Google Scholar databases, querying by specific keywords. Then a
          set of adverse tools and strategies explored in recent research is
          compiled to build a cybersecurity toolbox which aims to help defenders
          understand the newest technologies. Furthermore, this research
          presents emerging defender tools used at every stage of the cyber kill
          chain. Additionally, this study provides the reader with a
          comprehensive visual review of the current cybersecurity literature
          that focuses on AI. Our findings indicate that these malicious tools
          are most advantageous during the initial stages of the Cyber Kill
          Chain, where emerging tools do not significantly benefit defenders.
          The insights provided by this study are valuable for cybersecurity
          specialists who aim to develop robust defense approaches, an
          understanding of novel adversarial strategies, and to possibly adapt
          the Lockheed Martin Cyber Kill Chain framework to address the changing
          threat landscape.
        </p>
      </div>
    </div>
  );
}
