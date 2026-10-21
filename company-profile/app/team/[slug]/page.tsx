import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "@/components/Button";
import { getMember } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

// Dynamic route: params.slug diambil dari URL
export default async function TeamDetailPage({ params }: Props) {
  const { slug } = await params;
  const member = getMember(slug);
  if (!member) {
    return (
      <section className="page-section text-center">
        <Container>
          <h1 className="section-title">Team member not found</h1>
          <Button href="/team">Back to Team</Button>
        </Container>
      </section>
    );
  }

  return (
    <section className="page-section text-center">
      <Container style={{ maxWidth: 720 }}>
        <Image
          src={member.image}
          alt={member.name}
          roundedCircle
          width={170}
          height={170}
          style={{ border: "4px solid var(--accent)" }}
          className="mb-3"
        />
        <h1 style={{ color: "var(--accent)" }}>{member.name}</h1>
        <h2 className="h5 mb-4" style={{ color: "var(--accent)" }}>
          {member.role}
        </h2>
        <p className="text-start" style={{ textAlign: "justify" }}>
          {member.bio}
        </p>
        <Button href="/team" variant="outline">
          Back to Team
        </Button>
      </Container>
    </section>
  );
}
