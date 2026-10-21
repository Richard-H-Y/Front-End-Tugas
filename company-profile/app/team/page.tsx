import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TeamCard from "@/components/TeamCard";
import PageHeader from "@/components/PageHeader";
import { team } from "@/lib/data";

export default function TeamPage() {
  return (
    <section className="page-section">
      <Container>
        <PageHeader title="Our Team" subtitle="People behind our games" />
        <Row className="g-4 justify-content-center">
          {team.map((member) => (
            <Col key={member.slug} xs={12} sm={6} lg={4}>
              <TeamCard member={member} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
