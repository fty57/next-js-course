import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/4049992/pexels-photo-4049992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            dolor, aliquid nisi laudantium neque ipsum quisquam maiores expedita
            recusandae iste corrupti nam est voluptatibus ex mollitia quos,
            consequuntur officia delectus?
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae odio
            voluptate animi voluptatem, quas recusandae vitae officia tempore
            quibusdam quaerat? Exercitationem asperiores unde molestias
            reprehenderit voluptatibus? Qui nostrum quos ea?
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Who We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            dolor, aliquid nisi laudantium neque ipsum quisquam maiores expedita
            recusandae iste corrupti nam est voluptatibus ex mollitia quos,
            consequuntur officia delectus?
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae odio
            voluptate animi voluptatem, quas recusandae vitae officia tempore
            quibusdam quaerat? Exercitationem asperiores unde molestias
            reprehenderit voluptatibus? Qui nostrum quos ea?
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
