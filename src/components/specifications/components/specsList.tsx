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

  return (
    <div
      className={styles.column}
      style={{ maxWidth: isAccordion ? "100%" : "30%" }}>
      <p className={styles.columnHead}>
        <ul style={{ listStyleType: "revert-layer" }}>
          {name.includes("1") || name.includes("2")
            ? Array(12)
                .fill(1, 0, 12)
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