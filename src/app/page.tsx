"use client";

import { TabProvider, useTab } from "@/lib/TabContext";
import { WindowChrome } from "@/components/layout/WindowChrome";
import { Sidebar } from "@/components/layout/Sidebar";
import { StatusBar } from "@/components/layout/StatusBar";
import { MobileNav } from "@/components/layout/MobileNav";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ContactSection } from "@/components/sections/ContactSection";
import styles from "./page.module.css";
import { tabs } from "./tabs";
export type { TabId } from "@/lib/TabContext";


function Shell() {
  const { activeTab, setActiveTab } = useTab();

  return (
    <>
      <WindowChrome tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      <div className={styles.layout}>
        <Sidebar activeTab={activeTab} onNavigate={setActiveTab} />
        <main className={styles.main} key={activeTab}>
          {activeTab === "about"      && <AboutSection />}
          {activeTab === "projects"   && <ProjectsSection />}
          {activeTab === "experience" && <ExperienceSection />}
          {activeTab === "contact"    && <ContactSection />}
        </main>
      </div>
      <StatusBar activeTab={activeTab} />
      <MobileNav activeTab={activeTab} onNavigate={setActiveTab} />
    </>
  );
}

export default function Home() {
  return (
    <TabProvider>
      <Shell />
    </TabProvider>
  );
}