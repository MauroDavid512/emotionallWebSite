import styles from "./SummaryCards.module.css"

interface SummaryCardProps {
  image: string
  description: string
}

export default function SummaryCard({ image, description }: SummaryCardProps) {
  return (
    <div className={styles.cardContainer}>
      <img className={styles.image} src={image} alt="" />
      <div className={styles.description} >
        {description}
      </div>
    </div>
  );
}
