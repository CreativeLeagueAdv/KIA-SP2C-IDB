import * as React from "react";
import AccordionItem from "./accordion";
import styles from "../styles/styles.module.css";
import { useTranslation } from "react-i18next";
export default function AccordionDetailsList() {
  const [expanded, setExpanded] = React.useState<string>("panel1");

  const handleChange = (panel: any) => (event: any, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : "panel1");
  };
  const { t } = useTranslation("common");

  return (
    <div className={styles.accordionContainer}>
      {[1, 2, 3, 4].map((item) => (
        <AccordionItem
          expanded={expanded}
          handleChange={handleChange}
          headName={t(`specsACCHead${item}`)}
          name={`panel${item}`}
        />
      ))}
    </div>
  );
}
