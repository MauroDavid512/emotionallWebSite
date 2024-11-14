import styles from './VideoComponent.module.css'

export default function VideoComponent() {
  return (
    <div className={styles.container}>

      <video loop autoPlay muted className={styles.videoContainer}>
        <source src="/images/Memory-of-a-Woman-free-stock-footage.mp4" type="video/mp4" ></source>
      </video>
      <div className={styles.textContainer}>
        <div className={styles.title}>
          Connect with Yourself
        </div>
        <div className={styles.subtitle}>
          {"The World's First Al-Driven Emotional Inteligence App"}
        </div>
      </div>
      <a href="http://bit.ly/3O6Ur1C" target="_blank">
        <img className={styles.appleStoreButton} src="/images/AppleButton.png" alt="" />
      </a>
    </div>
  );
}
