import styles from './Summary.module.css'


export default function Summary() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          Enhance self-awareness, <br />
          boost resilience<br />
          and have greater<br />
          social skills.
        </div>
        <div className={styles.text}>
          Get to know your customized Emotion Management report, self-care activities, progress tracking and insights that remain relevant across all contexts—cultures, eras, and experiences. <br />
          Designed to grow with you, it evolves with changing needs while maintaining a foundation rooted in the core elements of Emotional Intelligence. <br />
          This timeless approach ensures that no matter the moment or situation, you have access to enduring guidance for your emotional well-being and personal growth.
        </div>
        <a className={styles.a} href="https://apps.apple.com/us/app/emotionall-daily-self-care/id1627764471" style={{ cursor: 'default' }} target='_blank'>
          <button className={styles.trialBtn}>
            Try a 30 day Free Trial
          </button>
        </a>
      </div>
    </>
  );
}
