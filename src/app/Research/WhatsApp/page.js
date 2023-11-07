import ResearchHeader from "../../../Components/ResearchHeader/ResearchHeader";
import data from "./data";
import styles from "./styles.module.css";

import Link from "next/link";
import Image from "next/image";

import SysArch from "./media/SysArch.png";

export default function Page() {
  return (
    <div className={styles.container}>
      <ResearchHeader data={data} />
      <div className={styles.content}>
        <h3>Status:</h3>
        <p>
          The paper has been submitted and approved to be presented at a
          conference this December.
        </p>
        <h3>conference:</h3>
        <Link href={"https://soict.org/"} className={styles.contentLink}>
          International Symposium on Information and Communication Technology -
          SOICT 2023
        </Link>
        <h3>Abstract:</h3>
        <p>
          With the increasing reliance on instant messaging applications like
          WhatsApp, ensuring user privacy and security has become paramount.
          This paper argues for the need to enhance the security of the WhatsApp
          messaging service. An API endpoint and Chrome extension capable of
          detecting profanity, malicious URLs, and inappropriate images are
          developed to satisfy this need. In its current stage, not only can
          malicious URLs circulate freely through WhatsApp without any checks,
          but it is also easy to send inappropriate images and texts which
          receiving users should be careful with. We survey existing publicly
          available services and APIs in the domains of profanity, malicious
          URLs, and inappropriate images. A novel approach that incorporates the
          most appropriate models for our purpose in an integrated detection
          system, based on simple statistical models and output from the
          third-party APIs, is proposed. We compile two extensive datasets of
          profane text and malicious URLs and employ them in testing the
          effectiveness of our proposed model using statistical methods.
          Additionally, we present a publicly available proof of concept Chrome
          extension that incorporates our model to provide users with an added
          layer of protection. Finally, we discuss potential areas for future
          research and suggest improvements to enhance the effectiveness of the
          proposed system and the cybersecurity aspect of chatting applications
          in general.
        </p>
        <Image className={styles.image} src={SysArch} width={1000} />
      </div>
    </div>
  );
}
