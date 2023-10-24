import styles from '../styles/styles.module.css'
import { useTranslation } from "react-i18next";

export default function SpecsList({
  isAccordion,
  name,
}: {

  isAccordion?: boolean;
  name:string
  }) {
      const { t } = useTranslation("common");
    console.log("name",name)
  return (
    <div
      className={styles.column}
      style={{ maxWidth: isAccordion ? "100%" : "30%" }}>
      <p className={styles.columnHead}>
        <ul style={{ listStyleType: "revert-layer" }}>
          {name.includes("1") || name.includes("2")
            ? Array(9)
                .fill(1, 0, 9)
                .map((item, index) => (
                  <li className={styles.liStyle}>
                    {t(`specsACC${name.slice(-1)}Points${index + 1}`)}
                  </li>
                ))
            : name.includes("3")
            ? Array(6)
                .fill(1, 0, 6)
                .map((item, index) => (
                  <li className={styles.liStyle}>
                    {t(`specsACC${name.slice(-1)}Points${index + 1}`)}
                  </li>
                ))
            : Array(8)
                .fill(1, 0, 8)
                .map((item, index) => (
                  <li className={styles.liStyle}>
                    {t(`specsACC${name.slice(-1)}Points${index + 1}`)}
                  </li>
                ))}
        </ul>
      </p>
    </div>
  );
}