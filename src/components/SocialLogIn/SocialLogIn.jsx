import styles from "./SocialLogIn.module.css";
const SocialLogIn = () => {
  return (
    // <div className={styles.container}>
      <button className={styles.button}>
        <img src="google.png" alt="Google" className={styles.icon} />
        Google
      </button>
    // </div>
  );
};

export default SocialLogIn;
