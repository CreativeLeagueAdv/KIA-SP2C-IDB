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
            <p className={styles.monoText}>HIGHLIGHTS</p>
            <div className={styles.gridList}>
                <SpecsList header='Capabilities and Comfort' list={[]} />
                <SpecsList header='Convenience and Innovation' list={[]} />
                <SpecsList header='Kia Drive Wise Driver Assist Technology' list={[]} />



            </div>
            <div className={styles.flexAccordionContainer}>
                <AccordionDetailsList />
                <div className={styles.accordionContainer}>
                    <AccordionItem expanded={'panel4'} handleChange={() => { }} headName='DIMENSIONS' name='panel4' image='/assets/specs.png' />
                </div>
            </div>


        </div>
    )
}
export default (SpecsSection)