import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GameCard from "@/components/GameCard";
import PageHeader from "@/components/PageHeader";
import { games } from "@/lib/data";

export default function GamesPage() {
  return (
    <section className="page-section">
      <Container>
        <PageHeader title="Our Games" subtitle="Click one of the games to view its details." />
        <Row className="g-4">
          {games.map((game) => (
            <Col key={game.slug} xs={12} sm={6} lg={3}>
              <GameCard game={game} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
