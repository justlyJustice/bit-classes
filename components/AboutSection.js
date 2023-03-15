import styles from "@/styles/AboutSection.module.css";

const AboutSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content} id="about_section">
        <h1>
          About <span>Bit CLASSES</span>
        </h1>

        <div>
          <p>
            ICT is made simple with out Bit CLASSES. We teach you timely and
            practical <br /> topics that you would find rather difficult
            elsewhere… ranging from
          </p>

          <ul>
            <li>Wordpress</li>
            <li>Back-end Development</li>
            <li>Front-end Development</li>
            <li>Cyber Security</li>
            <li>Graphics</li>
            <li>Social Media Utilization, e.t.c</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
