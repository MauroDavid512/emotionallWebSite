import styles from './StartJourney.module.css'

export default function StartJourney() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
      <div className={styles.title}>
        Ready To Start Your Journey
      </div>
      <div className={styles.description}>
        Looking for a safe space to grow? Emotionall makes it easy and fun to balance your emotions while discovering customized self-care activities.
      </div>
      <a className={styles.a} href="https://apps.apple.com/us/app/emotionall-daily-self-care/id1627764471" style={{ cursor: 'default' }} target='_blank'>
      <button className={styles.button}>Download Emotionall</button>
      </a>
      </div>
      <div className={styles.rightSide}>
        <img className={styles.image} src="/images/phone.png" alt="" />
      </div>
    </div>
  );
}
