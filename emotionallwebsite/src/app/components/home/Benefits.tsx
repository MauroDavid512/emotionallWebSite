import styles from './Benefits.module.css'
import BenefitsCards from './BenefitsCards';

export default function Benefits() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        How Can Emotionall <br /> Benefit You?
      </div>
      <div className={styles.benefitsCards}>
        <BenefitsCards
          title="Develops Your Well-Being"
          description="Measured by accurate science-based results"
          icon='/images/develop.png'
        />
        <BenefitsCards
          title="Improve Your Self-Awareness"
          description="As well as motivation and social skills"
          icon='/images/improve.png'
        />
        <BenefitsCards
          title="Better Your Mood Balance"
          description="Increase positive emotions and reducing the negative"
          icon='/images/better.png'
        />
      </div>
    </div>
  );
}
