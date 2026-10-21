import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "@/components/Button";
import { getGame } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

// Dynamic route: params.slug diambil dari URL
export default async function GameDetailPage({ params }: Props) {
  const { slug } = await params; // di Next.js 16, params berupa Promise
  const game = getGame(slug);
  if (!game) {
    return (
      <section className="page-section text-center">
        <Container>
          <h1 className="section-title">Game not found</h1>
          <Button href="/games">Back to Games</Button>
        </Container>
      </section>
    );
  }

  return (
    <section className="page-section">
      <Container>
        <Row className="g-5 align-items-center">
          <Col xs={12} md={6}>
            <Image
              src={game.image}
              alt={game.title}
              style={{ width: "100%", borderRadius: 16, border: "1px solid var(--border)" }}
            />
          </Col>
          <Col xs={12} md={6}>
            <span className="badge mb-2" style={{ backgroundColor: "var(--accent)" }}>{game.genre}</span>
            <h1 style={{ color: "var(--accent)" }}>{game.title}</h1>
            <p className="text-secondary">
              <i className="bi bi-controller me-2"></i>
              {game.platform}
            </p>
            <p>{game.description}</p>
            <h2 className="h5" style={{ color: "var(--accent)" }}>
              Main Features
            </h2>
            <ul>
              {game.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <Button href="/games" variant="outline">
              Back to Games
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
