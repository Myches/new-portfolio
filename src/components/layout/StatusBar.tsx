"use client";

import { useEffect, useState } from "react";
import type { TabId } from "@/lib/TabContext";
import styles from "./StatusBar.module.css";

const fileMap: Record<TabId, string> = {
  about: "index.tsx",
  projects: "projects.ts",
  experience: "experience.json",
  contact: "contact.tsx",
};

export function StatusBar({ activeTab }: { activeTab: TabId }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }));
    };
    update();
    const id = setInterval(update, 60000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={styles.bar}>
      <span className={styles.item}>⎇ main</span>
      <span className={styles.item}>{fileMap[activeTab]}</span>
      <span className={styles.item}>⚡ TypeScript React</span>
      <div className={styles.right}>
        <span className={styles.item}>{time}</span>
        <span className={styles.item}>UTF-8</span>
        <span className={styles.item}>Ln 1, Col 1</span>
      </div>
    </div>
  );
}
