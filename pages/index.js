import { useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";

import styles from "@/styles/Home.module.css";
import Head from "@/components/Head";
import Input from "@/components/forms/Input";

import illustration from "@/public/assets/images/register.png";
import { regsiterUser } from "@/services/auth";
import { useRouter } from "next/router";
import RegisterBtn from "@/components/RegisterBtn";

export default function Home() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    gender: "",
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
      console.log(res.problem);
    }
  };

  return (
    <>
      <Head
        title="Bit CLASSES - Payment"
        description="ICT is made simple with our Bit CLASSES.  We teach you timely and practical topics that you would find rather difficult elsewhere… ranging from Wordpress, Back-end Development, Front-end Development, Ethical Hacking, Graphics, Social Media Utilization, e.t.c"
      />

      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.img_contain}>
            <Image
              className={styles.illustration}
              src={illustration}
              alt={`Illustration`}
              width={300}
              height={300}
            />
          </div>

          <div className={styles.otherContent}>
            <div className={styles.textContain}>
              <h1>Bit CLASSES</h1>
              <p>
                Register for <span>Ethical Hacking</span> Course
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
    </>
  );
}
