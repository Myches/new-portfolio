"use client";

import { useState } from "react";
import type { TabId } from "@/lib/TabContext";
import styles from "./Sidebar.module.css";

interface SidebarProps {
  activeTab: TabId;
  onNavigate: (tab: TabId) => void;
}

const fileMap: Record<TabId, string> = {
  about:      "index.tsx",
  projects:   "projects.ts",
  experience: "experience.json",
  contact:    "contact.tsx",
};

const fileIcon: Record<TabId, string> = {
  about:      "⚛",
  projects:   "📦",
  experience: "{}",
  contact:    "⚛",
};

// Outline items per tab — reflects the actual sections in each file
const outlineMap: Record<TabId, { label: string; kind: "fn" | "prop" | "const" }[]> = {
  about: [
    { label: "MikeAndorful()",  kind: "fn"    },
    { label: "→ hero",          kind: "prop"  },
    { label: "→ stats",         kind: "prop"  },
    { label: "→ skills",        kind: "prop"  },
    { label: "siteConfig",      kind: "const" },
  ],
  projects: [
    { label: "projects[]",      kind: "const" },
    { label: "→ Storefront UI", kind: "prop"  },
    { label: "→ Analytics Dash",kind: "prop"  },
    { label: "→ Portfolio",     kind: "prop"  },
    { label: "ProjectCard()",   kind: "fn"    },
  ],
  experience: [
    { label: "experience{}",    kind: "const" },
    { label: "→ engineer",      kind: "prop"  },
    { label: "→ years_exp: 3",  kind: "prop"  },
    { label: "→ open_to[]",     kind: "prop"  },
    { label: "Timeline()",      kind: "fn"    },
  ],
  contact: [
    { label: "ContactSection()", kind: "fn"   },
    { label: "→ email",          kind: "prop" },
    { label: "→ linkedin",       kind: "prop" },
    { label: "→ github",         kind: "prop" },
    { label: "→ twitter",        kind: "prop" },
  ],
};

// Real tsconfig content preview
const tsconfigPreview = `{
  "compilerOptions": {
    "strict": true,
    "target": "ES2017",
    "jsx": "preserve",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}`;

// Real package.json preview
const packagePreview = `{
  "name": "mike-portfolio",
  "version": "1.0.0",
  "dependencies": {
    "next": "14.2.0",
    "react": "^18.3.0",
    "framer-motion": "^11.0.0"
  }
}`;

// Git log — all real filenames from the project
const gitChanges: { status: "M" | "U" | "A"; file: string }[] = [
  { status: "M", file: "index.tsx"       },
  { status: "M", file: "AboutSection.tsx"},
  { status: "U", file: "projects.ts"     },
  { status: "A", file: "TabContext.tsx"  },
  { status: "M", file: "Sidebar.tsx"     },
];

const gitLog = [
  { hash: "a3f2c1e", msg: "feat: add contact routing"        },
  { hash: "b8d4e9a", msg: "refactor: extract TabContext"      },
  { hash: "c1a9f3d", msg: "perf: reduce bundle by 40%"        },
  { hash: "d2e8b7c", msg: "feat: component library v1"        },
  { hash: "e5f1d6b", msg: "init: first commit 🚀"             },
];

type ConfigFile = "tsconfig" | "package" | null;

export function Sidebar({ activeTab, onNavigate }: SidebarProps) {
  const [openConfig, setOpenConfig] = useState<ConfigFile>(null);
  const [gitView, setGitView] = useState<"changes" | "log">("changes");

  const outline = outlineMap[activeTab];

  return (
    <aside className={styles.sidebar}>

      {/* ── Explorer ── */}
      <div className={styles.section}>
        <div className={styles.label}>Explorer</div>
        <div className={styles.tree}>

          {/* portfolio/ */}
          <div className={`${styles.item} ${styles.folder}`}>📁 portfolio</div>
          {(Object.keys(fileMap) as TabId[]).map((tab) => (
            <button
              key={tab}
              className={`${styles.item} ${activeTab === tab ? styles.active : ""}`}
              onClick={() => onNavigate(tab)}
            >
              <span className={styles.icon}>{fileIcon[tab]}</span>
              {fileMap[tab]}
            </button>
          ))}

          {/* config/ */}
          <div className={`${styles.item} ${styles.folder}`} style={{ marginTop: 8 }}>
            📁 config
          </div>

          {/* tsconfig.json */}
          <button
            className={`${styles.item} ${openConfig === "tsconfig" ? styles.active : ""}`}
            style={{ paddingLeft: 32 }}
            onClick={() => setOpenConfig(openConfig === "tsconfig" ? null : "tsconfig")}
          >
            <span className={styles.icon}>⚙</span>tsconfig.json
          </button>
          {openConfig === "tsconfig" && (
            <div className={styles.filePreview}>
              <pre className={styles.previewCode}>{tsconfigPreview}</pre>
            </div>
          )}

          {/* package.json */}
          <button
            className={`${styles.item} ${openConfig === "package" ? styles.active : ""}`}
            style={{ paddingLeft: 32 }}
            onClick={() => setOpenConfig(openConfig === "package" ? null : "package")}
          >
            <span className={styles.icon}>📋</span>package.json
          </button>
          {openConfig === "package" && (
            <div className={styles.filePreview}>
              <pre className={styles.previewCode}>{packagePreview}</pre>
            </div>
          )}
        </div>
      </div>

      {/* ── Git ── */}
      <div className={styles.section}>
        <div className={styles.labelRow}>
          <span className={styles.label} style={{ padding: 0 }}>Git</span>
          <div className={styles.gitToggle}>
            <button
              className={`${styles.toggleBtn} ${gitView === "changes" ? styles.toggleActive : ""}`}
              onClick={() => setGitView("changes")}
            >
              changes
            </button>
            <button
              className={`${styles.toggleBtn} ${gitView === "log" ? styles.toggleActive : ""}`}
              onClick={() => setGitView("log")}
            >
              log
            </button>
          </div>
        </div>

        <div className={styles.tree}>
          {gitView === "changes" ? (
            <>
              <div className={styles.gitBranch}>⎇ main — {gitChanges.length} changes</div>
              {gitChanges.map((c) => (
                <div
                  key={c.file}
                  className={`${styles.item} ${
                    c.status === "M" ? styles.modified :
                    c.status === "A" ? styles.added :
                    styles.untracked
                  }`}
                >
                  <span className={styles.gitStatus}>{c.status}</span>
                  {c.file}
                </div>
              ))}
            </>
          ) : (
            <>
              {gitLog.map((entry) => (
                <div key={entry.hash} className={styles.logEntry}>
                  <span className={styles.logHash}>{entry.hash}</span>
                  <span className={styles.logMsg}>{entry.msg}</span>
                </div>
              ))}
            </>
          )}
        </div>
      </div>

      {/* ── Outline ── */}
      <div className={styles.section}>
        <div className={styles.label}>Outline — {fileMap[activeTab]}</div>
        <div className={styles.tree}>
          {outline.map((item) => (
            <div
              key={item.label}
              className={`${styles.item} ${
                item.kind === "fn"    ? styles.fn    :
                item.kind === "const" ? styles.constItem :
                styles.prop
              }`}
              style={{ paddingLeft: item.label.startsWith("→") ? 28 : undefined }}
            >
              {item.kind === "fn"    && <span className={styles.kindBadge}>ƒ</span>}
              {item.kind === "const" && <span className={styles.kindBadge} style={{ color: "var(--amber)" }}>c</span>}
              {item.label}
            </div>
          ))}
        </div>
      </div>

    </aside>
  );
}
