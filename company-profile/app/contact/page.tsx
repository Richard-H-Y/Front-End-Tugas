import Container from "react-bootstrap/Container";
import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";

export default function ContactPage() {
  return (
    <section className="page-section">
      <Container style={{ maxWidth: 560 }}>
        <PageHeader title="Got ideas? Say hi!" />
        <ContactForm />
      </Container>
    </section>
  );
}
