import ResearchHeader from "../../../Components/ResearchHeader/ResearchHeader";
import data from "./data";
import styles from "./styles.module.css";

import Link from "next/link";
import Image from "next/image";

import SysArch from "../WhatsApp/media/sysArch.png";
import Poster from "../WhatsApp/media/poster.png";

export default function Page() {
  return (
    <div className={styles.container}>
      <ResearchHeader data={data} />
      <div className={styles.content}>
        <h3>Link to Paper</h3>
        <p>
          <Link
            href={"https://dl.acm.org/doi/abs/10.1145/3628797.3628966"}
            className={styles.contentLink}
          >
            At ACM library
          </Link>
        </p>
        <h3>conference:</h3>
        <Link href={"https://soict.org/"} className={styles.contentLink}>
          International Symposium on Information and Communication Technology -
          SOICT 2023
        </Link>
        <h3>Awards:</h3>
        <li>Best Poster award at SOICT 2023</li>
        <h3>Video Presentation:</h3>
        <iframe
          className={styles.video}
          src="https://www.youtube.com/embed/Qp7C-6U_CUM?si=R8tZtpzvT6DlFEts"
          width="640"
          height="480"
          allow="autoplay"
        ></iframe>
        <h3>Poster:</h3>
        <Image className={styles.image} src={Poster} width={1000} />
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
