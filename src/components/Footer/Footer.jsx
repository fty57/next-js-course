import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>@2023 Lamamia. All rights reserveds</div>
      <div className={styles.social}>
        <Image
          src="/1.png"
          alt="Lama dev Facebook"
          width={15}
          height={15}
          className={styles.icon}
        />
        <Image
          src="/2.png"
          alt="Lama dev Instagram"
          width={15}
          height={15}
          className={styles.icon}
        />
        <Image
          src="/3.png"
          alt="Lama dev Twitter"
          width={15}
          height={15}
          className={styles.icon}
        />
        <Image
          src="/4.png"
          alt="Lama dev Youtube"
          width={15}
          height={15}
          className={styles.icon}
        />
      </div>
    </div>
  );
};

export default Footer;
