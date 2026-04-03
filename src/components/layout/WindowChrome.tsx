import type { TabId } from "@/lib/TabContext";
import styles from "./WindowChrome.module.css";

interface Tab {
  id: TabId;
  label: string;
  icon: string;
}

interface WindowChromeProps {
  tabs: Tab[];
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

const fileMap: Record<TabId, string> = {
  about:      "index.tsx",
  projects:   "projects.ts",
  experience: "experience.json",
  contact:    "contact.tsx",
};

export function WindowChrome({ tabs, activeTab, onTabChange }: WindowChromeProps) {
  const activeTabData = tabs.find((t) => t.id === activeTab);

  return (
    <div className={styles.chrome}>
      <div className={styles.dots}>
        <span className={`${styles.dot} ${styles.red}`} />
        <span className={`${styles.dot} ${styles.yellow}`} />
        <span className={`${styles.dot} ${styles.green}`} />
      </div>

      {/* Desktop: full tab strip */}
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tab} ${activeTab === tab.id ? styles.active : ""}`}
            onClick={() => onTabChange(tab.id)}
          >
            <span className={styles.tabIcon}>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Mobile: just show the active file name */}
      <div className={styles.mobileTitle}>
        <span className={styles.mobileTitleIcon}>{activeTabData?.icon}</span>
        {fileMap[activeTab]}
      </div>
    </div>
  );
}