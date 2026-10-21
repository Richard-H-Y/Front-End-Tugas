"use client";

import Image from "react-bootstrap/Image";
import Link from "next/link";
import Card from "react-bootstrap/Card";
import type { Game } from "@/lib/data";
import styles from "@/styles/card.module.css";

export default function GameCard({ game }: { game: Game }) {
  return (
    <Link href={`/games/${game.slug}`} className="text-decoration-none d-block h-100">
      <Card className={styles.card}>
        <Image src={game.image} alt={game.title} className={styles.cover} />
        <Card.Body>
          <span className={styles.tag}>{game.genre}</span>
          <Card.Title className={styles.title}>{game.title}</Card.Title>
          <Card.Text className={styles.text}>{game.tagline}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}
