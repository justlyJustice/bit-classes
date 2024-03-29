import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import Head from "@/components/Head";
import Input from "@/components/forms/Input";
import RegisterBtn from "@/components/RegisterBtn";

import illustration from "@/public/images/register.png";
import { regsiterUser } from "@/services/auth";
import styles from "@/styles/Pages.module.css";

export default function Home() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    gender: "",
    phone: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const { push } = useRouter();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitting(true);
    const res = await regsiterUser(values);
    setSubmitting(false);

    if (res.ok) {
      toast(res.data.message, { type: "success", autoClose: 2000 });

      setTimeout(() => {
        push(`/payment`);
      }, 4000);
    }

    if (!res.ok) {
      setSubmitting(false);
      toast.error(res.data.message);
      console.log(res);
    }
  };

  return (
    <>
      <Head
        title="Bit CLASSES"
        description="ICT is made simple with our Bit CLASSES. We teach you timely and practical topics that you would find rather difficult elsewhere… ranging from Wordpress, Back-end Development, Front-end Development, Ethical Hacking, Graphics, Social Media Utilization, e.t.c"
        image="/images/web-logo.png"
      />

      {/* <Hero />

      <AboutSection />
 */}
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
                <span>Cyber Security: </span>How to Secure Your wireless
                Network.
              </p>

              <hr />

              <div className={styles.price}>
                <p>
                  <b>Course price: $7</b>
                </p>
              </div>
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
                  type="number"
                  value={values.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number here"
                  required
                />

                <div className={styles.gender}>
                  <span>Gender</span>

                  <div className={styles.option}>
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      id="male"
                      onChange={handleChange}
                    />
                    <label htmlFor="male">Male</label>
                  </div>

                  <div className={styles.option}>
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
    </>
  );
}

export const getServerSideProps = async (context) => {
  const { req } = context;

  let user;

  if (req.cookies.user) {
    user = JSON.parse(req.cookies.user);
  }

  if (user && user.hasRegistered) {
    return {
      redirect: {
        destination: "/payment",
      },
    };
  }

  return {
    props: {},
  };
};
