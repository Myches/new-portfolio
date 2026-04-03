import { projects } from "@/lib/data";
import { SkillTag } from "@/components/ui/SkillTag";
import styles from "./ProjectsSection.module.css";

export function ProjectsSection() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionTitle}>Projects</span>
        <div className={styles.sectionLine} />
        <span className={styles.sectionTag}>// selected_work</span>
      </div>

      {projects.map((project) => (
        <div key={project.id} className={styles.card}>
          <div className={styles.cardHeader}>
            <div>
              <div className={styles.projectNum}>
                {project.id} {project.featured ? "/ featured" : ""}
              </div>
              <div className={styles.projectName}>{project.name}</div>
            </div>
            <div className={styles.statusBadge}>
              <span
                className={`${styles.statusDot} ${
                  project.status === "live" ? styles.live : styles.wip
                }`}
              />
              <span>{project.status === "live" ? "live" : "wip"}</span>
            </div>
          </div>

          <p className={styles.desc}>{project.description}</p>

          <div className={styles.meta}>
            <div className={styles.stack}>
              {project.stack.map((s) => (
                <SkillTag key={s.name} name={s.name} variant={s.variant} small />
              ))}
            </div>
            <div className={styles.links}>
              {project.demoUrl && (
                <a href={project.demoUrl} className={styles.linkBtn} target="_blank" rel="noreferrer">
                  ↗ demo
                </a>
              )}
              {project.codeUrl && (
                <a href={project.codeUrl} className={styles.linkBtn} target="_blank" rel="noreferrer">
                  ⌥ code
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
