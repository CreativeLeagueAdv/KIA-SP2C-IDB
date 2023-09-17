import styles from "./styles/styles.module.css";
export default function SectionItem({
  image,
  headLine,
  description,
}: {
  image: string;
  headLine: string;
  description: string;
}) {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
      }}
      className={styles.container}>
      <p className={styles.headText}>{headLine}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
