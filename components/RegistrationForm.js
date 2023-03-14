import Image from "next/image";
import Input from "@/components/forms/Input";

import RegisterBtn from "@/components/RegisterBtn";
import illustration from "@/public/images/register.png";

import styles from "@/styles/Pages.module.css";

const RegistrationForm = () => {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.img_contain}>
          <Image
            className={styles.illustration}
            src={illustration}
            alt={`Illustration`}
            width={300}
            priority
            height={300}
          />
        </div>

        <div className={styles.otherContent}>
          <div className={styles.textContain}>
            <h1>Bit CLASSES</h1>
            <p>
              <span>Cyber Security</span>: How to Secure Your <br /> wireless
              Network.
            </p>

            <hr />
          </div>

          <div className={styles.formContain}>
            <form onSubmit={handleSubmit}>
              <Input
                label="Name"
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder="Enter name here"
                required
              />

              <Input
                label="Email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Enter email here"
                required
              />

              <Input
                label="Phone Number"
                name="phone"
                type="phone"
                value={values.phone}
                onChange={handleChange}
                placeholder="Enter phone number here"
                required
              />

              <div className={styles.gender}>
                <span>Gender</span>

                <div className={styles.male}>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    id="male"
                    onChange={handleChange}
                  />{" "}
                  <label htmlFor="male">Male</label>
                </div>

                <div className="female">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={handleChange}
                    id="female"
                  />{" "}
                  <label htmlFor="female">Female</label>
                </div>
              </div>

              <RegisterBtn loading={submitting} />
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegistrationForm;
