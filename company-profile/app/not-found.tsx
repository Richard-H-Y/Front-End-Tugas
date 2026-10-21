import Container from "react-bootstrap/Container";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="page-section text-center">
      <Container>
        <h1 className="section-title" style={{ fontSize: "5rem" }}>
          404
        </h1>
        <p className="section-subtitle">Page not found</p>
        <Button href="/">Back to Home</Button>
      </Container>
    </section>
  );
}
