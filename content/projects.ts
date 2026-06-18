export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectSection {
  heading: string;
  body: string[];
}

export interface Project {
  slug: string;
  title: string;
  /** One-line hook shown on cards. */
  tagline: string;
  period: string;
  stack: string[];
  /** Card-length summary (1–2 sentences). */
  summary: string;
  /** Punchy bullets for the case-study header. */
  highlights: string[];
  /** Full case-study sections. */
  sections: ProjectSection[];
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    slug: "computational-sprinting-simulator",
    title: "Computational Sprinting Data-Center Simulator",
    tagline:
      "A data-center simulator that decides when chips should sprint — wired to a real power supply.",
    period: "Sep 2025 – May 2026",
    stack: ["Java", "JavaFX", "Python", "PyVISA / SCPI", "Mean-field game theory"],
    summary:
      "Senior capstone: a data-center simulation that computes optimal computational-sprinting thresholds via mean-field game theory, models chip- and rack-level thermal and power limits, and drives a physical Tektronix power supply in real time.",
    highlights: [
      "Implements the Bellman equilibrium threshold policy from Fan et al. (ASPLOS '16)",
      "Hardware-in-the-loop: maps simulated processor states to live voltage setpoints on a Tektronix PWS4323",
      "Real-time JavaFX visualization of racks, servers, processors, and the current sprint threshold",
    ],
    sections: [
      {
        heading: "The problem",
        body: [
          "Computational sprinting lets a processor briefly exceed its sustainable power and thermal budget to finish high-value work faster, then recover. In a shared data center, that creates a game: if too many chips sprint at once, a rack trips its power limit and everyone pays. Each processor has to decide, independently and continuously, whether a given task is worth sprinting for.",
          "The capstone frames this as the cooling-and-throughput optimization problem: integrate passive thermosensitive-hydrogel cooling with intelligent sprinting, and find the policy that maximizes throughput under both rack-level power constraints and chip-level thermal constraints.",
        ],
      },
      {
        heading: "The approach",
        body: [
          "A SprintCoordinator recomputes the optimal sprint threshold every N epochs by fitting a bimodal Gaussian mixture to the current distribution of task utilities and solving the Bellman fixed-point equations — the equilibrium threshold policy from Fan et al.'s mean-field formulation (ASPLOS '16). Processors sprint only when a task's utility clears the current threshold.",
          "Each processor accumulates temperature from sprinting; overheating triggers per-processor cooling recovery. At the rack level, too many simultaneous sprinters trips power recovery across the whole rack, and a circuit breaker (Nmin/Nmax) prevents thundering-herd oscillation. A greedy scheduler assigns new tasks to the least-loaded runner.",
        ],
      },
      {
        heading: "Hardware in the loop",
        body: [
          "To validate the thermal model against physical behavior, a Python bridge controls a real Tektronix PWS4323 power supply over USB/VISA using SCPI commands. The simulator maps each runner's state — sprinting, working, idle — to a voltage setpoint in real time, so the physical hydrogel responds to the simulated workload and the model can be checked against measured behavior.",
        ],
      },
      {
        heading: "Visualization",
        body: [
          "A JavaFX GUI renders the whole data center hierarchically — racks, servers, and individual processors — with play/pause/step controls, a live sprint-threshold readout, a recompute countdown, and hydrogel state. It makes the otherwise-invisible equilibrium dynamics legible as they unfold.",
        ],
      },
    ],
    links: [
      { label: "View code", href: "https://github.com/rydersitcawich/Kewl" },
    ],
  },
  {
    slug: "penncloud",
    title: "PennCloud",
    tagline:
      "A distributed cloud platform — Drive + webmail — on a Bigtable-style backend with replication and crash recovery.",
    period: "Mar 2025 – May 2025",
    stack: ["C++", "gRPC", "Distributed systems", "HTML", "CSS"],
    summary:
      "A full-stack cloud platform inspired by Google Drive and Gmail, built on a Bigtable-style architecture with tablet partitioning, primary replication, heartbeat fault detection, and a durable key-value store with write-ahead logging.",
    highlights: [
      "Bigtable-style storage with tablet partitioning and primary replication across distributed nodes",
      "Durable key-value store with write-ahead logging and periodic checkpointing for crash recovery",
      "Round-robin load balancing on both tiers, cookie-based sessions, and a live admin console",
    ],
    sections: [
      {
        heading: "What it is",
        body: [
          "PennCloud is a from-scratch cloud platform offering the core of Google Drive and Gmail — file storage, webmail, and account management — backed by a distributed storage system the team built rather than borrowed. The interesting engineering is entirely under the hood: how the data stays consistent, available, and durable when nodes fail.",
        ],
      },
      {
        heading: "Storage architecture",
        body: [
          "The backend is a Bigtable-style key-value store. Data is split into tablets and partitioned across backend nodes, with primary replication so each tablet has copies that can take over. A heartbeat mechanism detects failed nodes, and the system reroutes around them.",
          "Durability comes from a write-ahead log plus periodic checkpointing: every mutation is logged before it's applied, so a node that crashes mid-write can replay its log and recover a consistent state. The store is designed to keep latency low and stay correct under concurrent request load.",
        ],
      },
      {
        heading: "Frontend and operations",
        body: [
          "The webmail, drive, and account services sit behind round-robin load balancing on both the frontend and backend tiers, with cookie-based session management tying a user to their data. A real-time admin console monitors node health across the cluster — useful both for grading demos and for actually watching failover happen.",
        ],
      },
    ],
    links: [],
  },
  {
    slug: "pennos",
    title: "PennOS",
    tagline: "A small Unix-like OS: a FAT16 file system and a priority scheduler, in C.",
    period: "Mar 2024 – May 2024",
    stack: ["C", "Operating systems", "POSIX"],
    summary:
      "A Unix-like operating system in roughly 2,500 lines of C: a FAT16-based file system with POSIX-style operations and a priority scheduler with three-level queuing and fixed quanta, integrated through shell built-ins and system calls.",
    highlights: [
      "FAT16 file system with standard POSIX-style file operations",
      "Priority scheduler: three-level queues with fixed quanta for fair execution",
      "Kernel and file-system layers integrated via system calls and file-descriptor tables",
    ],
    sections: [
      {
        heading: "What it is",
        body: [
          "PennOS is a user-space operating system that behaves like a tiny Unix. It runs as a single host process but implements its own scheduler, file system, and shell, exercising the same abstractions a real kernel provides — processes, file descriptors, system calls — from the ground up.",
        ],
      },
      {
        heading: "File system",
        body: [
          "The file system is FAT16-based and exposes standard POSIX-style operations. It's wired into the rest of the OS through process-level file-descriptor tables that index into a global descriptor table, mirroring how a real kernel tracks open files per process.",
        ],
      },
      {
        heading: "Scheduling",
        body: [
          "Processes are run by a priority scheduler with three-level queuing and fixed time quanta, balancing fairness against priority so that high-priority work runs sooner without starving the rest. Shell built-ins and system calls tie the kernel and file-system layers together into a usable, interactive system — about 2,500 lines of C in total.",
        ],
      },
    ],
    links: [],
  },
  {
    slug: "instalite",
    title: "Instalite",
    tagline:
      "A social network at cloud scale: face-match onboarding, RAG search, Kafka feeds, and Spark-ranked posts.",
    period: "Apr 2024 – May 2024",
    stack: [
      "Node.js",
      "Java / Apache Spark",
      "React",
      "AWS (EC2, RDS, S3)",
      "ChromaDB",
      "Apache Kafka",
      "LLM / RAG",
      "DALL·E",
    ],
    summary:
      "A scalable, Instagram-like social platform spanning a Node/Java backend on AWS, embedding-based image search in ChromaDB, an LLM/RAG search layer, Kafka-streamed feeds, and a Spark adsorption algorithm that ranks every post.",
    highlights: [
      "Selfie-to-actor onboarding: matches a user's face embedding against IMDB actors in ChromaDB",
      "Feeds ranked by an Apache Spark adsorption algorithm over the friend/like/hashtag graph",
      "Real-time social stream via Apache Kafka; LLM + RAG for natural-language and ad targeting",
    ],
    sections: [
      {
        heading: "What it is",
        body: [
          "Instalite is a full social network — signup and login, customizable profiles, friends, posts, comments, real-time chat, and an interactive feed — built to run on cloud infrastructure rather than a laptop. The challenge wasn't the CRUD; it was assembling a half-dozen distributed components into one responsive product.",
        ],
      },
      {
        heading: "Data architecture",
        body: [
          "Each kind of data lives where it fits best: relational data (accounts, the social graph, posts) in RDS/PostgreSQL, media in S3, and vector embeddings in ChromaDB. Apache Kafka carries the real-time social stream so new activity flows into feeds continuously. The React frontend talks to the backend over Axios routes, with hooks driving dynamic, responsive UI updates.",
        ],
      },
      {
        heading: "Face-match onboarding",
        body: [
          "At signup, a user can take a selfie and be linked to a similar IMDB actor: the app computes the selfie's face embedding and queries ChromaDB for the most similar actor profile photos, letting the user pick from the closest matches. It's embedding-similarity search applied to onboarding.",
        ],
      },
      {
        heading: "Ranking and AI features",
        body: [
          "The feed is ranked by an implementation of the adsorption algorithm in Apache Spark, which propagates weights across the graph of users, posts, hashtags, and likes to score what each user should see — recomputed periodically over fresh data. On top of that sit LLM-powered features: natural-language search over users and posts using RAG, targeted advertisements, and DALL·E-generated image posts.",
        ],
      },
    ],
    links: [
      { label: "View code", href: "https://github.com/upenn-nets-2120/project-sam" },
    ],
  },
  {
    slug: "metrolytics",
    title: "Metrolytics",
    tagline:
      "A real-estate insights platform that joins income and housing data by ZIP to find where value is headed.",
    period: "Apr 2024 – May 2024",
    stack: ["React", "Node.js / Express", "SQL", "Mapbox"],
    summary:
      "A data-driven real-estate analytics platform that joins US household-income and housing-listing datasets on ZIP code to surface property trends, income-vs-value correlations, and predictions of where prices are likely to appreciate.",
    highlights: [
      "Joins two large datasets — household income and real-estate listings — on shared ZIP codes",
      "Surfaces price trends, income/value correlations, and appreciation predictions",
      "Interactive Mapbox visualization over a React + Express stack",
    ],
    sections: [
      {
        heading: "What it is",
        body: [
          "Metrolytics is a real-estate insights platform that answers questions a single dataset can't: how do local income demographics relate to property values, which areas are likely to appreciate, and what do the trends look like by location. It's a databases project where the interesting work is in the queries.",
        ],
      },
      {
        heading: "The data",
        body: [
          "The platform sits on top of two public datasets — US household income by ZIP code (2011–2021) and a USA real-estate listings dataset — which overlap on their ZIP-code fields. Joining them on ZIP is what makes the cross-domain insights possible: income and housing become comparable at the same geographic grain.",
        ],
      },
      {
        heading: "Querying and presentation",
        body: [
          "A Node/Express backend serves analytical SQL queries over the joined data — trends, correlations, and ranking which areas look poised to appreciate — to a React frontend. A Mapbox map makes the results spatial, so insights show up where they actually live: on the map.",
        ],
      },
    ],
    links: [
      { label: "View code", href: "https://github.com/rydersitcawich/CIS-550" },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
