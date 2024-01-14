import styles from "./Recommendation.module.css";

export default function Exp({ name, text }) {
  return (
    <div>
      <div className={styles.container}>
        <blockquote className={styles.quote}>
          <p>{text}</p>
          <cite>{name}</cite>
        </blockquote>
      </div>
    </div>
  );
}
