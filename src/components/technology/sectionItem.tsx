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
      key={headLine}
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition:'center',
      }}
      className={styles.container}>
      <div className={styles.subContainer}>
        <p className={styles.headText}>{headLine}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
