"use client";

import type { TabId } from "@/lib/TabContext";
import styles from "./MobileNav.module.css";

interface MobileNavProps {
  activeTab: TabId;
  onNavigate: (tab: TabId) => void;
}

const tabs: { id: TabId; label: string; icon: string }[] = [
  { id: "about",      label: "About",      icon: "⚛" },
  { id: "projects",   label: "Projects",   icon: "📦" },
  { id: "experience", label: "Experience", icon: "🔄" },
  { id: "contact",    label: "Contact",    icon: "✉" },
];

export function MobileNav({ activeTab, onNavigate }: MobileNavProps) {
  return (
    <nav className={styles.nav}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`${styles.item} ${activeTab === tab.id ? styles.active : ""}`}
          onClick={() => onNavigate(tab.id)}
        >
          <span className={styles.icon}>{tab.icon}</span>
          <span className={styles.label}>{tab.label}</span>
          {activeTab === tab.id && <span className={styles.indicator} />}
        </button>
      ))}
    </nav>
  );
}