import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import PageHeader from "@/components/PageHeader";

export default function AboutPage() {
  return (
    <section className="page-section">
      <Container>
        <PageHeader title="About Us" />
        <Row className="align-items-center g-5">
          <Col xs={12} md={5} className="text-center">
            <Image src="/images/logor.png" alt="Harris Studios" fluid style={{ maxWidth: 260 }} />
          </Col>
          <Col xs={12} md={7}>
            <p>
              Harris Studios is an independent game studio established in 2023. We create games for PC, consoles, and mobile, with a focus on compelling storytelling, distinctive art, and engaging gameplay.
            </p>
            <p>
              We believe that games are the best way to tell a story: players dont just watch, they help shape the course of the adventure. From dungeon crawlers to flight simulations, every project is approached with a deep sense of curiosity.
            </p>
            <p>
              Our vision is to create memorable gaming experiences that can be enjoyed by everyone, anywhere.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
