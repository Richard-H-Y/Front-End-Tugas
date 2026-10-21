import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "@/components/Button";
import styles from "@/styles/hero.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <Container>
        <Image src="/images/logor.png" alt="Harris Studios" className={styles.logo} />
        <h1 className={styles.title}>
          Welcome to <span className={styles.highlight}>Harris Studios</span>
        </h1>
        <p className={styles.lead}>
          We are an independent game studio that creates immersive worlds of adventure, simulation,
          and exciting action for you to play with friends.
        </p>
        <Button href="/games">View Games</Button>
      </Container>
    </section>
  );
}
