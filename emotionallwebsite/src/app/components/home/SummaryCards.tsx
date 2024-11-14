import SummaryCard from "./SummaryCard";
import styles from "./SummaryCards.module.css"

export default function SummaryCards() {

  const text1 = 'When it comes to emotions and moods, we don’t feel bad because of the emotion per se, we tend to feel bad because we can’t control that emotion and consciously or unconsciously we let the emotion affect us, in some occasions, until we’re over the edge. Emotions are alerts for acting and not for always being in that mood.So don’t let emotions take the best of you.'

  const text2 = 'If we want to change our behavior, one particular and effective way is to control our emotions; not by avoiding them and letting them become a problem. What are you doing today to control your emotions?';

  const text3 = 'Emotional Intelligence can’t be practiced accurately if we don’t first acknowledge the importance of knowing what we’re feeling. If we don’t know exactly how we feel and embrace our own emotions, it would be harder to manage our emotions and recognize emotions in others. So take a deep breath this weekend and think, how are you feeling?';

  return (
    <div className={styles.container}>
      <SummaryCard image={'/images/Image-1.jpg'} description={text1} />
      <SummaryCard image={'/images/Image-2.jpg'} description={text2} />
      <SummaryCard image={'/images/Image-3.jpg'} description={text3} />
    </div>
  );
}
