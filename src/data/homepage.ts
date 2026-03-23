const homepageData = {
  hero: {
    title: "International Conference on International Colleges 2026",
    date: "Thursday, June 25, 2026",
    venue: "Tunghai University International College",
    image: "/images/site/hero-home.jpg",
  },

  theme: {
    heading: "Seventy Years Forward: Liberal Learning for a Changing World",
    description:
      "As Tunghai University approaches its seventieth anniversary, the International College invites students, faculty, and researchers to reflect on the evolving purposes of liberal learning in a rapidly changing world. International colleges occupy a distinctive position within higher education: multilingual, globally oriented, and committed to academic breadth as well as professional preparation. These commitments raise urgent questions about what liberal learning should look like in the decades ahead, and how institutions can cultivate intellectual flexibility, ethical awareness, intercultural fluency, and the capacity to navigate complex global challenges.",
  },

  keynote: {
    name: "Chi-Hung Juan",
    talkTitle: "Unlocking Brain Potential: What and How to Learn in the AI Era",
    title: "Chair Professor and Executive Vice President, National Central University",
    description:
      "Join me as we explore the history of AI and its profound impact on our daily lives and the academic world through the lens of brain science. With this foundation, we will focus on how students and educators can proactively harness the power of these rapidly evolving AI tools to effectively pursue their goals. I look forward to an interactive brainstorming session with the audience as we envision an even brighter future in the AI era together.",
    image: "/images/site/keynote-juan.jpg",
  },

  schedule: [
  {
    time: "08:45–09:10",
    columns: [{ width: "1fr", blocks: [{ title: "Registration", location: null }] }],
  },
  {
    time: "09:10–10:10",
    columns: [{ width: "1fr", blocks: [{ title: "Poster Session 1", location: null }] }],
  },
  {
    time: "10:10–10:30",
    columns: [{ width: "1fr", blocks: [{ title: "Coffee Break", location: null }] }],
  },
  {
    time: "10:30–12:30",
    columns: [{ width: "1fr", blocks: [{ title: "Oral Sessions 1", location: null }] }],
  },
  {
    time: "12:30–1:30",
    columns: [{ width: "1fr", blocks: [{ title: "Lunch", location: null }] }],
  },
  {
    time: "1:30–3:30",
    columns: [
      { width: "1fr", blocks: [{ title: "Oral Sessions 2", location: null }] },
      {
        width: "1fr",
        blocks: [
          { title: "Program Introduction Session", location: null },
          { title: "Poster Session 2", location: null },
        ],
      },
    ],
  },
  {
    time: "3:30–4:00",
    columns: [{ width: "1fr", blocks: [{ title: "Coffee Break", location: null }] }],
  },
  {
    time: "4:00–5:00",
    columns: [{ width: "1fr", blocks: [{ title: "Keynote Address", talkTitle: "Unlocking Brain Potential: What and How to Learn in the AI Era", speaker: "Chi-Hung Juan, Chair Professor and Executive Vice President (National Central University)", location: null }] }],
  },
  {
    time: "5:00–5:30",
    columns: [{ width: "1fr", blocks: [{ title: "Awards and Closing", location: null }] }],
  },
],

  importantDates: [
    {
      label: "Oral Presentation Submission Deadline",
      value: "May 5, 2026",
    },
    {
      label: "Poster Proposal Deadline",
      value: "May 8, 2026",
    },
        {
      label: "Poster Files Due",
      value: "June 5, 2026",
    },
    {
      label: "ICIC Conference",
      value: "June 25, 2026",
    },
  ],

  documents: [
  {
    group: "General",
    items: [
      { label: "Campus Map", href: "/documents/map.pdf" },
    ],
  },
  {
    group: "Oral Presentations",
    items: [
      { label: "Submit an Oral Presentation Proposal", href: "https://forms.gle/LEwj9x1rUFDZZgff7", external: true },
      { label: "Presentation Schedule", href: "/documents/ICIC schedule.pdf" },
      { label: "Abstracts", href: "/documents/ICIC abstracts.pdf" },
    ],
  },
  {
    group: "Poster Presentations",
    items: [
      { label: "Submit a Poster Presentation Proposal", href: "https://forms.gle/ykdUsYnfrtq8CUsA9", external: true },
      { label: "Poster Presentation Fact Sheet", href: "/documents/poster fact sheet.pdf" },
      { label: "Poster Judging Criteria", href: "/documents/judging criteria.pdf" },
      { label: "Sample Authorization Sheet", href: "/documents/authorization sheet sample.pdf" },
    ],
  },
],

  sponsors: [
    {
      name: "Tunghai University",
      image: "/images/logos/thu.svg",
      href: "https://www.thu.edu.tw",
    },
    {
      name: "International College",
      image: "/images/logos/ic.svg",
      href: "https://ic.thu.edu.tw/",
    },
    {
      name: "International Liberal Arts Honors Program",
      image: "/images/logos/honors.png",
      href: "https://honors.thu.edu.tw/",
    },
    {
      name: "International Business Administration",
      image: "/images/logos/iba.jpg",
      href: "https://iba.thu.edu.tw/",
    },
    {
      name: "IDP",
      image: "/images/logos/idp.jpg",
      href: "https://ic.thu.edu.tw/web/about/page.php?lang=en&scid=15&sid=84",
    },
    {
      name: "Sustainability Science and Engineering",
      image: "/images/logos/ssm.jpg",
      href: "https://ic.thu.edu.tw/web/about/page.php?lang=en&scid=15&sid=2",
    },
  ],

  footer: {
    contactEmail: "icic@thu.edu.tw",
  },
};

export default homepageData;