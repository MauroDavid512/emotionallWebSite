import styles from "./Footer.module.css"

export default function Footer() {
    return (
        <div className={styles.container}>
          <div className={styles.follow}>
            Follow us
          </div>
          <div className={styles.socialContainer}>
            <a className={styles.a} target="_blank" href="https://www.facebook.com/emotionallapp">
              <img className={styles.logo} src="/images/facebooklogo.png" alt="" />
            </a>
            <a className={styles.a} target="_blank" href="https://www.instagram.com/emotionallapp/">
              <img className={styles.logo} src="/images/instagramlogo.png" alt="" />
            </a>
            <a className={styles.a} target="_blank" href="https://www.linkedin.com/company/emotionall-emotion-management/">
              <img className={styles.logo} src="/images/linkedinlogo.png" alt="" />
            </a>
          </div>
          <div className={styles.copyright}>
            ©2024 Emotionall. | All Rights Reserved
          </div>
        </div>
    );
}
