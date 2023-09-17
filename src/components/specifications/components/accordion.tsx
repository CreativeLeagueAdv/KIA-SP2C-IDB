import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import SpecsList from "./specsList";
export default function AccordionItem({
  name,
  expanded,
  handleChange,
  headName,
    data,
  image
}: {
  name: string;
  expanded: string;
  handleChange: any;
  headName: string;
  data?: string[];
  image?: string;
}) {
  return (
    <Accordion
      style={{ marginBottom: "8px", border: "0px", boxShadow: "none" }}
      expanded={expanded === name}
      onChange={handleChange(name)}>
      <AccordionSummary
        style={{ background: expanded == name ? "#05141F" : "#f3f3f3" }}
        expandIcon={
          expanded === name ? (
            <RemoveIcon
              style={{
                color: image ? "#05141F" : "#fff",
                fontWeight: "900",
                fontSize: "28px",
              }}
            />
          ) : (
            <AddIcon
              style={{
                color: "#05141F",
                fontWeight: "900",
                fontSize: "28px",
              }}
            />
          )
        }
        aria-controls='panel1bh-content'
        id='panel1bh-header'>
        <Typography
          sx={{
            color: expanded === name ? "#fff" : "#05141F",
            fontWeight: "bold",
            flexShrink: 0,
          }}>
          {headName}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
              {image ? <img src={image} width={'100%'} style={{objectFit:'cover'}}/>:   <SpecsList isAccordion={true} header='' list={[]} />}
      </AccordionDetails>
    </Accordion>
  );
}
