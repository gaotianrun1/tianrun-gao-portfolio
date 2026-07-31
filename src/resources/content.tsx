import type { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";

type FeaturedPublicationInfo = {
  rank: number;
  label: string;
  summary: string;
};

type PublicationItem = {
  authors: string;
  title: string;
  venue: string;
  year: string;
  link: string;
  image?: string;
  featured?: FeaturedPublicationInfo;
};

type PublicationGroup = {
  title: string;
  note: string;
  items: PublicationItem[];
};

const person: Person = {
  firstName: "Tianrun",
  lastName: "Gao",
  name: "Tianrun Gao",
  role: "Master’s Student | AI for Science",
  avatar: "/images/avatar-tianrun.jpg",
  email: "gaotianrun1@tongji.edu.cn",
  location: "Asia/Shanghai",
  locationName: "Shanghai, China",
  languages: ["English", "Chinese"],
};

const researchAreas = [
  "Physics-aware AI for simulation, design, control, and discovery",
  "PDEs, coupled physical systems, and fusion energy",
  "Generative models and agentic systems for science",
  "Automated numerical simulation for mechanics and engineering",
];

const honors = [
  "Top Ten Candidate of the School of Construction Engineering in Tianjin University",
  "Tianjin University Alumni Scholarship",
  "Outstanding Student of Tianjin University",
  "Tianjin Municipal Government Scholarship",
  "Tianjin University Research and Design Institute Scholarship",
];

const publicationGroups: PublicationGroup[] = [
  {
    title: "Conferences",
    note: "asterisk denotes equal contribution",
    items: [
      {
        authors: "Qianyi Chen*, Tianrun Gao*, Chenbo Jiang*, Tailin Wu",
        title: "EqCollide: Equivariant and Collision-Aware Deformable Objects Neural Simulator",
        venue: "KDD 2026, Oral",
        year: "2026",
        link: "https://arxiv.org/abs/2506.05797",
        image: "/images/publications/eqcollide.png",
        featured: {
          rank: 3,
          label: "Equal contribution · Oral",
          summary:
            "An equivariant, collision-aware neural simulator for deformable-object dynamics.",
        },
      },
      {
        authors:
          "Tianrun Gao*, Haoren Zheng*, Wenhao Deng*, Haodong Feng, Tao Zhang, Ruiqi Feng, Qianyi Chen, Tailin Wu",
        title:
          "GenCP: Towards Generative Modeling Paradigm of Coupled Physics with Application to Fluid-Structure Interaction",
        venue: "ICLR 2026",
        year: "2026",
        link: "https://arxiv.org/abs/2601.19541",
        image: "/images/publications/gencp.png",
        featured: {
          rank: 1,
          label: "First author",
          summary:
            "A generative modeling paradigm for coupled physics, demonstrated on fluid–structure interaction.",
        },
      },
      {
        authors:
          "Peiyan Hu, Haodong Feng, Hongyuan Liu, Tongtong Yan, Wenhao Deng, Tianrun Gao, Rong Zheng, Haoren Zheng, Chenglei Yu, Chuanrui Wang, Kaiwen Li, Zhi-Ming Ma, Dezhi Zhou, Xingcai Lu, Dixia Fan, Tailin Wu",
        title: "RealBench: A Benchmark for Complex Physical Systems with Real-World Data",
        venue: "ICLR 2026, Oral",
        year: "2026",
        link: "https://arxiv.org/abs/2601.01829",
        image: "/images/publications/realbench.png",
        featured: {
          rank: 2,
          label: "Oral",
          summary: "A real-world benchmark for learning and evaluating complex physical systems.",
        },
      },
      {
        authors:
          "Tian Xia, Tianrun Gao, Wenhao Deng, Long Wei, Xiaowei Qian, Jiang Yixian, Chenglei Yu, Tailin Wu",
        title:
          "BuildArena: A Physics-Aligned Interactive Benchmark of LLMs for Engineering Construction",
        venue: "ICML 2026",
        year: "2026",
        link: "https://www.arxiv.org/abs/2510.16559",
        image: "/images/publications/buildarena.png",
      },
      {
        authors:
          "Ruiqi Shu, Xiaohui Zhong, Qiusheng Huang, Ruijian Gou, Tianrun Gao, Hao Li, Xiaomeng Huang",
        title:
          "HybridOM: Hybrid Physics-Based and Data-Driven Global Ocean Modeling with Efficient Spatial Downscaling",
        venue: "ICML 2026",
        year: "2026",
        link: "https://arxiv.org/abs/2602.00598",
        image: "/images/publications/hybridom.png",
      },
      {
        authors: "T. R. Gao, D. M. Zhang, X. M. Liu, H. W. Huang",
        title:
          "Data-based Risk Evaluation on 4 Overlapped Existing Subway Tunnels Undercrossed by Shield Tunneling",
        venue: "World Tunnel Congress 2025",
        year: "2025",
        link: "https://www.taylorfrancis.com/chapters/oa-edit/10.1201/9781003559047-82/data-based-risk-evaluation-4-overlapped-existing-subway-tunnels-undercrossed-shield-tunneling-tianrun-gao-dongming-zhang-xiaomin-liu-hongwei-huang",
      },
      {
        authors: "T. R. Gao, D. M. Zhang, H. W. Huang",
        title:
          "Experimental Study on Tunneling-Induced Disturbance and Propagation in Complex Environment",
        venue: "PIARC 2025, Oral Presentation",
        year: "2025",
        link: "https://www.piarc-seminar-cq.cn/",
      },
      {
        authors: "T. R. Gao, D. M. Zhang, H. W. Huang",
        title:
          "Study on Predicting Existing Tunnel Settlement Induced by Shield Tunneling Based on Machine Learning",
        venue: "2FOMLIG & 5MLIGD 2024, Oral Presentation",
        year: "2024",
        link: "https://en.swjtu.edu.cn/xwxq.jsp?urltype=news.NewsContentUrl&wbtreeid=1063&wbnewsid=3129",
      },
      {
        authors: "T. R. Gao, J. W. Jia, X. M. Liu, W. J. Zhang, H. W. Huang",
        title:
          "3D Refined Numerical Simulation Analysis of the Impact of Shield Tunnel Construction on Adjacent Pile Foundation and Soil",
        venue: "China Tunnel and Underground Engineering Conference 2022, Oral Presentation",
        year: "2023",
        link: "https://news.csu.edu.cn/info/1002/155635.htm",
      },
    ],
  },
  {
    title: "Journals",
    note: "double dagger denotes first author taken by supervisor",
    items: [
      {
        authors: "H. W. Huang, T. R. Gao‡, D. M. Zhang",
        title:
          "A Hybrid Approach for Modifying Tunneling-Induced Response in Existing Multi-Tunnel Environment",
        venue: "Computers and Geotechnics, 179, 106921",
        year: "2025",
        link: "https://doi.org/10.1016/j.compgeo.2024.106921",
      },
      {
        authors: "R. Jia, T. R. Gao‡, G. Yang",
        title:
          "Analysis on the Influence of Construction Stress Release and Disturbance on Seismic Response of Tunnel",
        venue: "Chinese Journal of Underground Space and Engineering, 18(S2): 916-925",
        year: "2022",
        link: "https://kns.cnki.net/kcms2/article/abstract?v=ufuULlVWCsOANfdHShtrMPAvJ1uneL5PNUGCJERSP941X4m3bdBqazpuQJ5NL1-VL3BKot5Jo_QgXZkk_3QvnckGc1HwubXN9IFSTh9VtIcrf54SkZlhlVNGlVM6isFapJ-TNAmru0x7dxCk4mQvVA==&uniplatform=NZKPT&language=CHS",
      },
      {
        authors: "J. Z. Zhang, T. R. Gao",
        title: "Compressibility of Abnormal Pressure Gas Reservoirs and its Effect on Reserves",
        venue: "ACS Omega, 6(40): 26221-26230",
        year: "2021",
        link: "https://doi.org/10.1021/acsomega.1c03228",
      },
    ],
  },
];

const newsletter: Newsletter = {
  display: false,
  title: <>Research updates</>,
  description: <>Occasional notes on AI for science and engineering systems.</>,
};

const social: Social = [
  {
    name: "Google Scholar",
    icon: "book",
    link: "https://scholar.google.com/citations?user=pkez5wUAAAAJ&hl=zh-CN&oi=sra",
    essential: true,
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/gaotianrun1",
    essential: true,
  },
  {
    name: "CV",
    icon: "document",
    link: "/cv",
    essential: true,
  },
  {
    name: "X",
    icon: "x",
    link: "https://twitter.com/gao_tianrun",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.png",
  label: "Home",
  title: `${person.name} | AI for Science and Engineering`,
  description:
    "Tianrun Gao develops physics-aware simulators, generative models, and scientific agents for complex physical and engineering systems.",
  headline: <>AI for Science across complex physical systems.</>,
  featured: {
    display: false,
    title: <>Featured research</>,
    href: "/work",
  },
  subline: (
    <>
      I develop physics-aware simulators, generative models, and scientific agents for PDEs, coupled
      systems, engineering design, and control.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About - ${person.name}`,
  description: `Academic profile, experience, publications, and CV for ${person.name}`,
  tableOfContent: {
    display: false,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Profile",
    description: (
      <>
        I am a master’s student at{" "}
        <a href="https://civileng.tongji.edu.cn/main.htm">
          School of Civil Engineering, Tongji University
        </a>
        , advised by Prof. Hongwei Huang. I am currently a research intern at the{" "}
        <a href="https://ai3.fudan.edu.cn/">
          Artificial Intelligence Innovation and Incubation Institute at Fudan University
        </a>{" "}
        and at the <a href="https://www.sais.com.cn/">Shanghai Academy of AI for Science (SAIS)</a>,
        supervised by <a href="https://longweizju.github.io/">Prof. Long Wei</a>. I completed my
        undergraduate studies at <a href="https://www.tju.edu.cn/index.htm">Tianjin University</a>{" "}
        in 2022.
      </>
    ),
  },
  work: {
    display: true,
    title: "Experience",
    experiences: [
      {
        company:
          "Artificial Intelligence Innovation and Incubation Institute, Fudan University / Shanghai Academy of AI for Science (SAIS)",
        timeframe: "Oct 2025 — Present",
        role: "Research intern, supervised by Prof. Long Wei.",
        achievements: [],
        images: [],
      },
      {
        company: "Department of AI, Westlake University",
        timeframe: "Dec 2024 — Oct 2025",
        role: "Research intern, supervised by Prof. Tailin Wu.",
        achievements: [],
        images: [],
      },
      {
        company: "University of Toronto",
        timeframe: "Jul 2021 — Nov 2021",
        role: "Research intern, funded by Mitacs Globalink.",
        achievements: [],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Tongji University",
        description: <>Master of Civil Engineering, Sep 2022 — Present.</>,
      },
      {
        name: "Tianjin University",
        description: <>Bachelor of Engineering, Sep 2018 — Jun 2022.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Skills",
    skills: [
      {
        title: "Scientific Computing and Machine Learning",
        tags: [
          { name: "Python" },
          { name: "PyTorch" },
          { name: "JAX" },
          { name: "PDE modeling" },
          { name: "Matlab" },
        ],
        images: [],
      },
      {
        title: "Engineering Simulation",
        tags: [
          { name: "Abaqus (FEM)" },
          { name: "FLAC3D (FDM)" },
          { name: "PFC3D (DEM)" },
          { name: "Taichi (MPM)" },
          { name: "Rhino" },
          { name: "HyperMesh" },
          { name: "Automated numerical simulation workflows" },
        ],
        images: [],
      },
      {
        title: "Communication",
        tags: [
          { name: "TOEFL 102" },
          { name: "GRE 324" },
          { name: "Fluent in oral English" },
          { name: "Strong in academic reading" },
          { name: "Strong in academic writing" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Notes",
  title: `Notes - ${person.name}`,
  description: `Research notes by ${person.name}`,
};

const work: Work = {
  path: "/work",
  label: "Publications",
  title: `Publications - ${person.name}`,
  description: `Peer-reviewed publications and research projects by ${person.name} in AI for science, physical systems, and engineering.`,
};

const featuredPublications = publicationGroups
  .flatMap((group) => group.items)
  .filter((item): item is PublicationItem & { image: string; featured: FeaturedPublicationInfo } =>
    Boolean(item.image && item.featured),
  )
  .sort((a, b) => a.featured.rank - b.featured.rank);

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Research visuals - ${person.name}`,
  description: `A restrained collection of research visuals and paper figures by ${person.name}`,
  images: [],
};

export {
  person,
  social,
  newsletter,
  home,
  about,
  blog,
  work,
  gallery,
  researchAreas,
  honors,
  publicationGroups,
  featuredPublications,
};
