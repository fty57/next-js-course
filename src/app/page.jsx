import Image from "next/image";
import Hero from "public/hero.png";
import styles from "./page.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Image src={Hero} alt="Hero" className={styles.img} />
    </div>
  );
}
