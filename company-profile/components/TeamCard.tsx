"use client";

import Image from "react-bootstrap/Image";
import Link from "next/link";
import Card from "react-bootstrap/Card";
import type { TeamMember } from "@/lib/data";
import styles from "@/styles/card.module.css";

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <Link href={`/team/${member.slug}`} className="text-decoration-none d-block h-100">
      <Card className={`${styles.card} text-center`}>
        <Card.Body className="py-4">
          <Image src={member.image} alt={member.name} className={styles.avatar} />
          <p className={styles.memberName}>{member.name}</p>
          <p className={styles.memberRole}>{member.role}</p>
        </Card.Body>
      </Card>
    </Link>
  );
}
