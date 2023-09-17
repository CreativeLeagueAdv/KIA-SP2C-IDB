import * as React from "react";
import AccordionItem from "./accordion";
import styles from '../styles/styles.module.css'
export default function AccordionDetailsList() {
  const [expanded, setExpanded] = React.useState<string>("panel1");

  const handleChange = (panel: any) => (event: any, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={styles.accordionContainer}>
      <AccordionItem
        expanded={expanded}
        handleChange={handleChange}
        headName='EXTERIOR'
        name='panel1'
      />
      <AccordionItem
        expanded={expanded}
        handleChange={handleChange}
        headName='INTERIOR'
        name='panel2'
      />

      <AccordionItem
        expanded={expanded}
        handleChange={handleChange}
        headName='SAFETY'
        name='panel3'
      />
    </div>
  );
}
