import { Typography } from '@mui/material'
import AccordionItem from './components/accordion'
import AccordionDetailsList from './components/accordionList'
import styles from './styles/styles.module.css'
import { useTranslation } from 'react-i18next'
const SpecsSection = () => {
    const { t } = useTranslation('common')
    return (
        <div id='Specifications' className={styles.container}>
            <p className={styles.headText}>
                {t('specs')}
            </p>
            <div className={styles.gridList}>
                <div className={styles.item}>
                    <img className={styles.IconImage} src='assets/specs/engine.svg' />
                    <Typography className={styles.itemText}>{t('specsTurbo')}</Typography>
                </div>
                <div className={styles.item}>
                    <img className={styles.IconImage} src='assets/specs/airBag.svg' />

                    <Typography className={styles.itemText}>{t('specsAirBag')}</Typography>
                </div>
                <div className={styles.item}>
                    <img className={styles.IconImage} src='assets/specs/CarWhee.svg' />

                    <Typography className={styles.itemText}>{t('specsRim')}</Typography>
                </div>
                <div className={styles.item}>
                    <img className={styles.IconImage} src='assets/specs/CarWhee.svg' />

                    <Typography className={styles.itemText}>{t('panorama')}</Typography>
                </div>
                <div className={styles.item}>
                    <img className={styles.IconImage} src='assets/specs/saftey.svg' />

                    <Typography className={styles.itemText}>{t('specsKeyLess')}</Typography>
                </div>
                <div className={styles.item}>
                    <img className={styles.IconImage} src='assets/specs/aircondition.svg' />

                    <Typography className={styles.itemText}>{t('specsAC')}</Typography>

                </div>
                <div className={styles.item}>
                    <img className={styles.IconImage} src='assets/specs/cerify.svg' />

                    <Typography className={styles.itemText}>{t('specsWarranty')}</Typography>

                </div>


            </div>
            <div className={styles.flexAccordionContainer}>
                <AccordionDetailsList />
                <div className={styles.accordionContainer}>
                    <AccordionItem expanded={'panel5'} handleChange={() => { }} headName={t('specsACCHead5')} name='panel5' image='assets/specs.png' />
                </div>
            </div>


        </div>
    )
}
export default (SpecsSection)