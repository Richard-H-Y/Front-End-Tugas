import Link from "next/link";
import styles from "@/styles/button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline";
  type?: "button" | "submit";
}

// Komponen reusable: tampil sebagai <Link> jika ada href, atau <button> jika tidak
export default function Button({
  children,
  href,
  variant = "primary",
  type = "button",
}: ButtonProps) {
  if (href) {
    return (
      <Link href={href} className={styles[variant]}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={styles[variant]}>
      {children}
    </button>
  );
}
