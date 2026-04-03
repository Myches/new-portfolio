"use client";

import { siteConfig, skills } from "@/lib/data";
import { useTab } from "@/lib/TabContext";
import { SkillTag } from "@/components/ui/SkillTag";
import styles from "./AboutSection.module.css";

export function AboutSection() {
  const { setActiveTab } = useTab();
  return (
    <div>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.prompt}>
          <span className={styles.arrow}>➜</span>
          <span>~/portfolio</span>
          <span className={styles.branch}> git:(main)</span>
          <span className={styles.star}>✦</span>
        </div>

        <h1 className={styles.name}>
          Mike <span className={styles.accent}>Andorful</span>
          <span className={styles.cursor} />
        </h1>

        <div className={styles.titleRow}>
          <span>Frontend Engineer</span>
          {siteConfig.available && (
            <span className={`${styles.badge} ${styles.badgeGreen}`}>● Available for work</span>
          )}
          <span className={`${styles.badge} ${styles.badgeBlue}`}>🇬🇭 Accra, Ghana</span>
          <span className={styles.badge}>3+ yrs exp</span>
        </div>

        <p className={styles.bio}>
          I build <strong>fast, accessible, and obsessively polished</strong> web experiences.
          Specialising in <strong>React + Next.js</strong> with TypeScript, I care deeply about
          the details that separate a good product from a great one — motion, performance,
          component architecture, and the spaces between.
        </p>

        <div className={styles.actions}>
          <button
            className={`${styles.btn} ${styles.btnPrimary}`}
            onClick={() => setActiveTab("projects")}
          >
            view_projects()
          </button>
          <button
            className={`${styles.btn} ${styles.btnGhost}`}
            onClick={() => setActiveTab("contact")}
          >
            get_in_touch()
          </button>
          <a href={siteConfig.resumeUrl} className={`${styles.btn} ${styles.btnGhost}`}>
            ↓ resume.pdf
          </a>
        </div>
      </section>

      {/* Stats */}
      <div className={styles.statsRow}>
        {siteConfig.stats.map((stat) => (
          <div key={stat.label} className={styles.statCell}>
            <span className={styles.statNum}>
              {stat.value === "∞" ? (
                <span>∞</span>
              ) : stat.value.includes("+") ? (
                <>{stat.value.replace("+", "")}<span className={styles.accent}>+</span></>
              ) : (
                stat.value
              )}
            </span>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Skills */}
      <section className={styles.skillsSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTitle}>Skills</span>
          <div className={styles.sectionLine} />
          <span className={styles.sectionTag}>// tech_stack.ts</span>
        </div>
        <div className={styles.skillGroups}>
          {skills.map((group) => (
            <div key={group.group} className={styles.skillGroup}>
              <div className={styles.skillGroupTitle}>{group.group}</div>
              <div className={styles.skillTags}>
                {group.items.map((item) => (
                  <SkillTag key={item.name} name={item.name} variant={item.variant} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
