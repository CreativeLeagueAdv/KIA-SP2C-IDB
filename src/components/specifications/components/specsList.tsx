import styles from '../styles/styles.module.css'
export default function SpecsList({
  list,
  header,
  isAccordion,
}: {
  list: string[];
  header: string;
  isAccordion?:boolean
}) {
  return (
    <div className={styles.column} style={{maxWidth:isAccordion?'100%':'30%'}}>
      <p className={styles.columnHead}>
        {header ?? ""}
        <ul style={{ listStyleType: "revert-layer" }}>
          <li className={styles.liStyle}>
            1.6L Turbo Hybrid Powertrain w/ 227 HP and 258 lb.-ft. torque
          </li>
          <li className={styles.liStyle}>
            Active All-Wheel Drive w/ Center Locking Differential
          </li>
          <li className={styles.liStyle}>
            18-inch Alloy Wheels, Machined Finished
          </li>
          <li className={styles.liStyle}>Roof Rails</li>
          <li className={styles.liStyle}>
            Heated Side View Mirrors, w/ LED Turn Signal
          </li>
          <li className={styles.liStyle}>Dual-Zone Auto Climate Control</li>
          <li className={styles.liStyle}>LED Headlights and Tail Lights</li>
          <li className={styles.liStyle}>
            Auto Rain-Sensing Windshield Wipers
          </li>
        </ul>
      </p>
    </div>
  );
}