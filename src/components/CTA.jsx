import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col rounded-[20px] box-shadow`}style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', zIndex: 5 }}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Experience Our IT Solutions Today!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Everything you need to elevate your technology and empower your business worldwide.
        Unleash the potential of your business with our expert IT consultancy services.
        Streamline operations and embrace innovation in the ever-evolving digital landscape.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;
