import { experience, siteConfig } from "@/lib/data";
import styles from "./ExperienceSection.module.css";

export function ExperienceSection() {
  return (
    <div>
      {/* Terminal window */}
      <div className={styles.wrapper}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTitle}>Experience</span>
          <div className={styles.sectionLine} />
          <span className={styles.sectionTag}>// experience.json</span>
        </div>

        <div className={styles.terminal}>
          <div className={styles.terminalHeader}>
            <div className={styles.termDots}>
              <span className={`${styles.dot} ${styles.red}`} />
              <span className={`${styles.dot} ${styles.yellow}`} />
              <span className={`${styles.dot} ${styles.green}`} />
            </div>
            <span className={styles.termTitle}>bash — mike@portfolio</span>
          </div>
          <div className={styles.termBody}>
            <span className={styles.comment}>// cat experience.json</span>
            <br />
            {"{"}
            <br />
            &nbsp;&nbsp;<span className={styles.key}>"engineer"</span>:{" {"}<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.key}>"current"</span>:{" "}
            <span className={styles.str}>"Frontend Developer"</span>,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.key}>"location"</span>:{" "}
            <span className={styles.str}>"Accra, Ghana 🇬🇭"</span>,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.key}>"specialisation"</span>: [
            <span className={styles.str}>"React"</span>,{" "}
            <span className={styles.str}>"Next.js"</span>,{" "}
            <span className={styles.str}>"TypeScript"</span>],<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.key}>"years_exp"</span>:{" "}
            <span className={styles.num}>3</span>,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.key}>"open_to"</span>: [
            <span className={styles.str}>"remote"</span>,{" "}
            <span className={styles.str}>"contract"</span>,{" "}
            <span className={styles.str}>"fulltime"</span>]<br />
            &nbsp;&nbsp;{"}"}
            <br />
            {"}"}
            <br />
            <span className={styles.prompt}>$ git log --oneline -5</span>
            <br />
            <span className={styles.comment}>a3f2c1e</span>{" "}
            <span className={styles.cmd}>feat: shipped analytics dashboard v2</span>
            <br />
            <span className={styles.comment}>b8d4e9a</span>{" "}
            <span className={styles.cmd}>refactor: migrated codebase to TypeScript</span>
            <br />
            <span className={styles.comment}>c1a9f3d</span>{" "}
            <span className={styles.cmd}>perf: reduced bundle size by 40%</span>
            <br />
            <span className={styles.comment}>d2e8b7c</span>{" "}
            <span className={styles.cmd}>feat: accessible component library v1</span>
            <br />
            <span className={styles.comment}>e5f1d6b</span>{" "}
            <span className={styles.cmd}>init: first commit 🚀</span>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className={styles.timeline}>
        {experience.map((item, i) => (
          <div key={i} className={styles.expItem}>
            <div className={styles.expPeriod}>{item.period}</div>
            <div className={styles.expRole}>{item.role}</div>
            <div className={styles.expCompany}>{item.company}</div>
            <div className={styles.expDesc}>{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
