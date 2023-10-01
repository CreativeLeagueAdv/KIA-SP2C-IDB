import { Typography } from '@mui/material'
import AccordionItem from './components/accordion'
import AccordionDetailsList from './components/accordionList'
import SpecsList from './components/specsList'
import styles from './styles/styles.module.css'
const SpecsSection = () => {
    return (
        <div id='specifications' className={styles.container}>
            <p className={styles.headText}>
                SPECIFICATIONS

            </p>
            <div className={styles.gridList}>
                <div className={styles.item}>
                    <img  className={styles.IconImage} src='assets/specs/engine.svg' />
                    <Typography className={styles.itemText}>1.4T DCT</Typography>
                </div>
                <div className={styles.item}>
                    <img  className={styles.IconImage} src='assets/specs/airBag.svg' />

                     <Typography className={styles.itemText}>Front THORAX+ Curtain Airbag</Typography>
                </div>
                <div className={styles.item}>
                    <img  className={styles.IconImage} src='assets/specs/CarWhee.svg' />

                     <Typography className={styles.itemText}>Alloy 17” (B-Type)</Typography>
                </div>
                <div className={styles.item}>
                    <img  className={styles.IconImage} src='assets/specs/saftey.svg' />

                     <Typography className={styles.itemText}>Keyless Entry</Typography>
                </div>
                <div className={styles.item}>
                    <img  className={styles.IconImage} src='assets/specs/aircondition.svg' />

                     <Typography className={styles.itemText}>Dual-Zone Air
                        Condition</Typography>
                </div>
                <div className={styles.item}>
                    <img className={styles.IconImage} src='assets/specs/cerify.svg' />

                     <Typography className={styles.itemText}>5-Years /
                        150,000 Km</Typography>
                </div>


            </div>
            <div className={styles.flexAccordionContainer}>
                <AccordionDetailsList />
                <div className={styles.accordionContainer}>
                    <AccordionItem expanded={'panel4'} handleChange={() => { }} headName='DIMENSIONS' name='panel4' image='assets/specs.png' />
                </div>
            </div>


        </div>
    )
}
export default (SpecsSection)