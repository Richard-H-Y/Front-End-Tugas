import Container from "react-bootstrap/Container";
import styles from "@/styles/footer.module.css";

const socials = [
  { icon: "bi-discord", label: "Discord" },
  { icon: "bi-twitter-x", label: "X" },
  { icon: "bi-youtube", label: "YouTube" },
  { icon: "bi-instagram", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.social}>
          {socials.map((s) => (
            <a key={s.label} href="#" aria-label={s.label}>
              <i className={`bi ${s.icon}`}></i>
            </a>
          ))}
        </div>
        <p className={styles.copy}>© 2026 Harris Studios | All rights reserved.</p>
      </Container>
    </footer>
  );
}
