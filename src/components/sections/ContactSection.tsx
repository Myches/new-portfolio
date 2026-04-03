import { siteConfig } from "@/lib/data";
import styles from "./ContactSection.module.css";

const contactLinks = [
  {
    label: "Email",
    value: "hello@mikeandorful.dev",
    icon: "✉",
    href: `mailto:${siteConfig.email}`,
  },
  {
    label: "LinkedIn",
    value: "Mike Andorful",
    icon: "in",
    href: siteConfig.linkedin,
  },
  {
    label: "GitHub",
    value: "@mikeandorful",
    icon: "⌥",
    href: siteConfig.github,
  },
  {
    label: "X / Twitter",
    value: "@mikeandorful",
    icon: "𝕏",
    href: siteConfig.twitter,
  },
];

export function ContactSection() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionTitle}>Contact</span>
        <div className={styles.sectionLine} />
        <span className={styles.sectionTag}>// reach_out()</span>
      </div>

      <p className={styles.intro}>
        Currently{" "}
        <span className={styles.available}>open to new opportunities</span> — remote,
        contract, or full-time.
        <br />
        I reply to every message. Usually within a day.
      </p>

      <div className={styles.grid}>
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noreferrer"
            className={styles.card}
          >
            <div className={styles.icon}>{link.icon}</div>
            <div>
              <div className={styles.cardLabel}>{link.label}</div>
              <div className={styles.cardValue}>{link.value}</div>
            </div>
          </a>
        ))}
      </div>

      <div className={styles.statusCard}>
        <div className={styles.statusComment}>// availability_status</div>
        <div className={styles.statusRow}>
          <span className={styles.dot} />
          <span>
            Available for{" "}
            <span className={styles.highlight}>frontend roles</span>,{" "}
            <span className={styles.highlight}>contract work</span>, and interesting
            conversations.
          </span>
        </div>
      </div>
    </div>
  );
}
