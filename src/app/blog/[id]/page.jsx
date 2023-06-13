import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium animi, nobis deserunt temporibus fugiat maxime magnam
            sit dolores, dolorem necessitatibus suscipit velit, repudiandae
            tenetur laboriosam quod culpa error illo sint.
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Json</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum laborum
          nostrum deleniti sapiente perferendis aspernatur sit architecto,
          molestias sint dolorum at sed temporibus harum ipsam voluptates maxime
          modi! Quos, porro.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
