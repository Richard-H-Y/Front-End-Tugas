"use client";

import Image from "react-bootstrap/Image";
import Link from "next/link";
import Carousel from "react-bootstrap/Carousel";
import { games } from "@/lib/data";
import styles from "@/styles/hero.module.css";

// Slider carousel (react-bootstrap) untuk menampilkan game unggulan
export default function FeaturedCarousel() {
  return (
    <Carousel fade interval={4000}>
      {games.slice(0, 3).map((game) => (
        <Carousel.Item key={game.slug} className={styles.slide}>
          <Image src={game.image} alt={game.title} className={styles.slideImg} />
          <Carousel.Caption className={styles.caption}>
            <h3>
              <Link href={`/games/${game.slug}`} className="text-white">
                {game.title}
              </Link>
            </h3>
            <p>{game.tagline}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
