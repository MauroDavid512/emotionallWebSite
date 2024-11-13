import styles from './Benefits.module.css'

interface BenefitProps {
  title: string
  description: string
  icon: string
}

export default function BenefitsCards({title, description, icon} : BenefitProps) {
  return (
        <div className={styles.benefitsCard}>
        <img className={styles.icon} src={icon} alt="" />
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.description}>{description}</p>
        </div>
  );
}
