import type { SkillVariant } from "@/lib/data";
import styles from "./SkillTag.module.css";

interface SkillTagProps {
  name: string;
  variant: SkillVariant | string;
  small?: boolean;
}

export function SkillTag({ name, variant, small }: SkillTagProps) {
  return (
    <span className={`${styles.tag} ${styles[variant] || ""} ${small ? styles.small : ""}`}>
      {name}
    </span>
  );
}
