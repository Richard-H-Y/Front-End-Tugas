"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { navLinks } from "@/lib/data";
import styles from "@/styles/navbar.module.css";

export default function AppNavbar() {
  const pathname = usePathname();

  // Link aktif: halaman yang sama, atau halaman turunannya (contoh /games/neon-drift -> Games)
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <Navbar expand="md" variant="light" className={styles.navbar}>
      <Container>
        <Navbar.Brand as={Link} href="/" className={styles.brand}>
          <Image src="/images/logor.png" alt="Harris Studios logo" width={38} height={38} />
          <span>
            Harris <span className={styles.brandAccent}>Studios</span>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            {navLinks.map((item) => (
              <Nav.Link
                key={item.href}
                as={Link}
                href={item.href}
                className={`${styles.link} ${isActive(item.href) ? styles.active : ""}`}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
