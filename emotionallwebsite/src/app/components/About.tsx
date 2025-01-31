import styles from './About.module.css';
import ContactUs from './home/ContactUs';

export default function About() {
  return (
    <>
      <div className={styles.container}>
        <img className={styles.bgImage} src="images/about.jpg" alt="" />
        <div className={styles.gradient}></div>
        <div className={styles.aboutTitle}>
          About us
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.contentTitle}>
          <div style={{color: '#0669D5'}}>
            Emotionall is
          </div>
          <div style={{marginTop: '20px'}}>
            a mobile <br />
            application that <br />
            helps to balance <br />
            your emotions
          </div>
        </div>
        <div className={styles.contentText}>
          <>
            for the long run by increasing positive emotions and reducing negative
            emotions through a customized Emotion Management report, 180+
            customized self-care activities and an activity progress tracking, backed by
            Positive Psychology & AI.
          </>

          <div style={{marginTop: '20px'}}>
            Our self-care activities can be carried out on a daily basis, tailored to the
            emotional and physical necessities of each user. We help to prevent mental
            illness, boost positive emotions, reduce negative emotions, manage the
            frequency & intensity of positive and negative emotions, improve mood
            balance, self-consciousness, self-enhancement, motivation, social skills and
            – in the long run – live aligned to values and purpose.
          </div>
        </div>
        <div className={styles.aboutImage}/>
      </div>
      
      <div className={styles.aboutImage}/>
      <ContactUs />
    </>
  );
}