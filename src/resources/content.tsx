import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";

const person: Person = {
  firstName: "Tianrun",
  lastName: "Gao",
  name: "Tianrun Gao",
  role: "Master Student, Civil Engineering | AI for Science",
  avatar: "/images/avatar-tianrun.jpg",
  email: "gaotianrun1@tongji.edu.cn",
  location: "Asia/Shanghai",
  locationName: "Shanghai, China",
  languages: ["English", "Chinese"],
};

const researchAreas = [
  "Scientific machine learning for mechanics and engineering systems",
  "PDE modeling and fusion-energy-facing scientific ML",
  "Mechanics and AI-empowered mechanics",
  "Agentic systems and generative AI for science",
  "Automated numerical simulation of mechanical and engineering systems",
];

const honors = [
  "Top Ten Candidate of the School of Construction Engineering in Tianjin University",
  "Tianjin University Alumni Scholarship",
  "Outstanding Student of Tianjin University",
  "Tianjin Municipal Government Scholarship",
  "Tianjin University Research and Design Institute Scholarship",
];

const publicationGroups = [
  {
    title: "Conferences",
    note: "dagger denotes equal contribution",
    items: [
      {
        authors:
          "Peiyan Hu, Haodong Feng, Hongyuan Liu, Tongtong Yan, Wenhao Deng, Tianrun Gao, Rong Zheng, Haoren Zheng, Chenglei Yu, Chuanrui Wang, Kaiwen Li, Zhi-Ming Ma, Dezhi Zhou, Xingcai Lu, Dixia Fan, Tailin Wu",
        title: "RealBench: A Benchmark for Complex Physical Systems with Real-World Data",
        venue: "ICLR 2026, Oral",
        year: "2026",
        link: "https://realpdebench.github.io/",
      },
      {
        authors:
          "Tianrun Gao†, Haoren Zheng†, Wenhao Deng†, Haodong Feng, Tao Zhang, Ruiqi Feng, Qianyi Chen, Tailin Wu",
        title:
          "GenCP: Towards Generative Modeling Paradigm of Coupled Physics with Application to Fluid-Structure Interaction",
        venue: "ICLR 2026",
        year: "2026",
        link: "https://arxiv.org/abs/2601.19541",
      },
      {
        authors:
          "Tian Xia, Tianrun Gao, Wenhao Deng, Long Wei, Xiaowei Qian, Jiang Yixian, Chenglei Yu, Tailin Wu",
        title:
          "BuildArena: A Physics-Aligned Interactive Benchmark of LLMs for Engineering Construction",
        venue: "ICML 2026",
        year: "2026",
        link: "https://build-arena.github.io/",
      },
      {
        authors: "Qianyi Chen†, Tianrun Gao†, Chenbo Jiang†, Tailin Wu",
        title: "EqCollide: Equivariant and Collision-Aware Deformable Objects Neural Simulator",
        venue: "KDD 2026",
        year: "2026",
        link: "https://arxiv.org/abs/2506.05797v1",
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
        title: "Experimental Study on Tunneling-Induced Disturbance and Propagation in Complex Environment",
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
        title: "A Hybrid Approach for Modifying Tunneling-Induced Response in Existing Multi-Tunnel Environment",
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
    link: "/files/tianrun-gao-cv.pdf",
    essential: true,
  },
  {
    name: "X",
    icon: "twitter",
    link: "https://twitter.com/gao_tianrun",
    essential: false,
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
  image: "/images/og/home.svg",
  label: "Home",
  title: `${person.name} | AI for Science and Engineering`,
  description:
    "Tianrun Gao's academic homepage, focused on publications, research updates, and CV.",
  headline: <>Building AI that helps science move from simulation to discovery.</>,
  featured: {
    display: false,
    title: <>Featured research</>,
    href: "/work",
  },
  subline: (
    <>
      Tianrun Gao is a master student at Tongji University, currently interning at Fudan AI3 and
      SAIS. His work sits at the intersection of scientific machine learning, mechanics, and
      engineering systems.
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
        I am a master student at{" "}
        <a href="https://civileng.tongji.edu.cn/main.htm">Tongji University</a>, advised by Prof.
        Hongwei Huang. I am currently studying as an intern at{" "}
        <a href="https://ai3.fudan.edu.cn/">
          Artificial Intelligence Innovation and Incubation Institute at Fudan University
        </a>{" "}
        and the <a href="https://www.sais.com.cn/">Shanghai Academy of AI for Science (SAIS)</a>,
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
        company: "Artificial Intelligence Innovation and Incubation Institute at Fudan University / Shanghai Academy of AI for Science",
        timeframe: "2025.10 - Now",
        role: "Research Intern, supervised by Prof. Long Wei",
        achievements: [
          <>
            Working on AI for science, generative modeling, and agentic systems for engineering and
            physical systems.
          </>,
        ],
        images: [],
      },
      {
        company: "AI Division, School of Engineering, Westlake University",
        timeframe: "2024.12 - 2025.10",
        role: "Research Intern, supervised by Prof. Tailin Wu",
        achievements: [
          <>
            Studied scientific machine learning, neural simulation, and benchmarks for complex
            physical systems.
          </>,
        ],
        images: [],
      },
      {
        company: "University of Toronto",
        timeframe: "2021.07 - 2021.11",
        role: "Mitacs Globalink Research Intern (online)",
        achievements: [<>Participated in a research internship funded by Mitacs Globalink.</>],
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
        description: <>Master of Civil Engineering, 2022.09 - Now.</>,
      },
      {
        name: "Tianjin University",
        description: <>Bachelor of Engineering, 2018.09 - 2022.06.</>,
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
          { name: "Mechanics-informed modeling" },
          { name: "Numerical simulation workflows" },
        ],
        images: [],
      },
      {
        title: "Engineering Simulation",
        tags: [
          { name: "Abaqus" },
          { name: "FLAC3D" },
          { name: "PFC3D" },
          { name: "MPM" },
          { name: "Matlab" },
          { name: "Rhino" },
          { name: "HyperMesh" },
          { name: "FEM / FDM / DEM" },
        ],
        images: [],
      },
      {
        title: "Communication",
        tags: [
          { name: "TOEFL 102" },
          { name: "GRE 324" },
          { name: "Oral English" },
          { name: "Academic reading" },
          { name: "Academic writing" },
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
  description: `Academic publications and research projects by ${person.name}`,
};

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
};
