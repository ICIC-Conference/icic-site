const homepageData = {
  scheduleDisplayOn: true,
  speakerScheduleDisplayOn: true,

  video: {
    displayOn: true,
    url: "https://www.youtube.com/embed/qKkFxaKfAN8",
  },

  conferenceProgram: {
    displayOn: true,
    url: "/programs/Program 2026.pdf",
  },

  hero: {
    shortLabel: "ICIC2026",
    title: "International Conference on International Colleges 2026",
    date: "Sunday, July 25, 2027",
    venue: "Tunghai University International College",
    image: "/images/site/hero-home.jpg",
  },

  theme: {
    heading: "Seventy Years Forward: Liberal Learning for a Changing World",
    description:
      "As Tunghai University approaches its seventieth anniversary, the International College invites students, faculty, and researchers to reflect on the evolving purposes of liberal learning in a rapidly changing world. International colleges occupy a distinctive position within higher education: multilingual, globally oriented, and committed to academic breadth as well as professional preparation. These commitments raise urgent questions about what liberal learning should look like in the decades ahead, and how institutions can cultivate intellectual flexibility, ethical awareness, intercultural fluency, and the capacity to navigate complex global challenges.",
  },

  keynote: [
  {
    name: "Chi-Hung Juan",
    talkTitle: "Unlocking Brain Potential: What and How to Learn in the AI Era",
    role: "Chair Professor and Executive Vice President",
    institution: "National Central University",
    description:
      "Join me as we explore the history of AI and its profound impact on our daily lives and the academic world through the lens of brain science. With this foundation, we will focus on how students and educators can proactively harness the power of these rapidly evolving AI tools to effectively pursue their goals. I look forward to an interactive brainstorming session with the audience as we envision an even brighter future in the AI era together.",
    image: "/images/keynote/Chi-Hung_Juan.jpg",
  },
  ],

  schedule: [
    {
      time: "08:45–09:10",
      columns: [
        { width: "1fr", blocks: [{ title: "Registration", location: "M244" }] },
      ],
    },
    {
      time: "09:10–10:10",
      columns: [
        { width: "1fr", blocks: [{ title: "Oral Session 1-A", location: "M145" }] },
        { width: "1fr", blocks: [{ title: "Poster Session 1", location: "M232 & M233" }] },
      ],
    },
    {
      time: "10:10–10:30",
      columns: [
        { width: "1fr", blocks: [{ title: "Morning Tea", location: "M232 & M233" }] },
      ],
    },
    {
      time: "10:30–12:30",
      columns: [
        { width: "1fr", blocks: [{ title: "Oral Sessions 2-A", location: "M145" }] },
        { width: "1fr", blocks: [{ title: "Oral Sessions 2-B", location: "M146" }] },
      ],
    },
    {
      time: "12:30–13:30",
      columns: [
        { width: "1fr", blocks: [{ title: "Lunch", location: "M232 & M233" }] },
      ],
    },
    {
      time: "13:30–15:30",
      columns: [
        { width: "1fr", blocks: [{ title: "Oral Sessions 3-A", location: "M145" }] },
        { width: "1fr", blocks: [{ title: "Oral Sessions 3-B", location: "M146" }] },
        { width: "1fr", blocks: [{ title: "Program Introduction Session", location: "M244" }, { title: "Poster Session 2", location: "M232 & M233" }] },
      ],
    },
    {
      time: "15:30–16:00",
      columns: [
        { width: "1fr", blocks: [{ title: "Afternoon Tea", location: "M232 & M233" }] },
      ],
    },
    {
      time: "16:00–17:00",
      columns: [
        { width: "1fr", blocks: [{ title: "Keynote Address", location: "M201", talkTitle: "Unlocking Brain Potential: What and How to Learn in the AI Era", speaker: "Chi-Hung Juan, Chair Professor and Executive Vice President (National Central University)" }] },
      ],
    },
    {
      time: "17:00–17:30",
      columns: [
        { width: "1fr", blocks: [{ title: "Awards and Closing", location: "M201" }] },
      ],
    },
  ],

  importantDates: [
    { label: "Oral Presentations Submission Date", value: "May 5, 2026" },
    { label: "Poster Presentation Submission Date", value: "May 8, 2026" },
    { label: "Authorization Sheet Due Date", value: "June 3, 2026" },
    { label: "Conference Date", value: "July 25, 2027" },
  ],

  documents: [
       {
      group: "General",
      items: [
        { label: "Campus/Event Map", href: "/site-documents/Maps.pdf" },
      ],
    },
    {
      group: "Poster Presentations",
      items: [
        { label: "Poster Presentation Fact Sheet", href: "/site-documents/poster fact sheet.pdf" },
        { label: "Poster Judging Criteria", href: "/site-documents/judging criteria.pdf" },
      ],
    },
  ],

  speakerSchedule: [
    {
      time: "09:10–10:10",
      sessions: [
        {
          label: "Session 1-A",
          location: "M145",
          chair: "Makiko Yurita",
          papers: [
            {
              speaker: "Iljoon Park",
              affiliation: "Wongkwang University",
              title: "General Education for Nonhumans: From an Extended Viewpoint of Humankind",
            },
            {
              speaker: "Lucas Scripter",
              affiliation: "The Hong Kong Polytechnic University",
              title: "Animal Grief and Meaning in Human and Other Animal Lives",
            },
          ],
        },
      ],
    },
    {
      time: "10:30–12:30",
      sessions: [
        {
          label: "Session 2-A",
          location: "M145",
          chair: "Subashini K. Rajanthran",
          papers: [
            {
              speaker: "Michael Mikulewicz",
              affiliation: "State University of New York ESF",
              title: "NOT At All Costs: Climate Justice, Democracy, and the Promise of Liberal Education",
            },
            {
              speaker: "Jessica Sze Yin Ho",
              affiliation: "Heriot-Watt University",
              title: "From Learning to Impact: Connecting Teaching, Research, and Real-World Relevance",
            },
            {
              speaker: "Julien Paret",
              affiliation: "Alliance University",
              title: "Learning to Flow: Liberal Arts Education and the Formation of Adaptive Strategists in a World in Motion",
            },
          ],
        },
        {
          label: "Session 2-B",
          location: "M146",
          chair: "Imed Nsiri",
          papers: [
            {
              speaker: "Marc Lanteigne",
              affiliation: "Arctic University of Norway",
              title: "Critical Theory and Political Science: \u2018Radical\u2019 Views from the Arctic",
            },
            {
              speaker: "Svitlana Kosolapova",
              affiliation: "Tzu Chi University",
              title: "Reading War Across Contexts: Feminist Film Analysis and Global Visual Literacy in Ukrainian Cinema",
            },
            {
              speaker: "Aining Hsieh",
              affiliation: "National Chi Nan University",
              title: "Trend Changes in Southeast Asian-Themed Content on Public Television Service (2001\u20132024)",
            },
          ],
        },
      ],
    },
    {
      time: "13:30–15:30",
      sessions: [
        {
          label: "Session 3-A",
          location: "M145",
          chair: "Jessica Sze Yin Ho",
          papers: [
            {
              speaker: "Makiko Yurita",
              affiliation: "National Institute for School Teachers and Staff Development",
              title: "Beyond Instrumental Utility: Reframing Empowerment through the Mode of Being in Liberal Arts and Bilingual Education",
            },
            {
              speaker: "Krystie Wills",
              affiliation: "American University of Sharjah",
              title: "Building ESL Students\u2019 Presentation Skills While Leveraging GAI and PB",
            },
                        {
              speaker: "Imed Nsiri",
              affiliation: "American University of Sharjah",
              title: "Arab Heritage in an English Language Context",
            },
          ],
        },
        {
          label: "Session 3-B",
          location: "M146",
          chair: "Julien Paret",
          papers: [
            {
              speaker: "Subashini K. Rajanthran",
              affiliation: "University of the Arts Singapore",
              title: "Curiosity, Creativity, Criticality: An AI-Resilient Framework for English-Medium Higher Arts Education",
            },
            {
              speaker: "Kai Wah Hen",
              affiliation: "Universiti Tunku Abdul Rahman",
              title: "Cross-Border E-Commerce in Southeast Asia: A Qualitative Study of Challenges and Opportunities for Taiwanese Merchants",
            },
            {
              speaker: "Yulis",
              affiliation: "National Chung Hsing University",
              title: "Building Bilingual Environment in Taiwan: Bridging Policy and Practice in Public Education",
            },
          ],
        },
      ],
    },
  ],

  sponsors: [
    { name: "Tunghai University", image: "/images/logos/Tunghai_University.svg", href: "https://www.thu.edu.tw" },
    { name: "International College", image: "/images/logos/International_College.svg", href: "https://ic.thu.edu.tw/" },
    { name: "Tunghai Honors Program", image: "/images/logos/Tunghai_Honors_Program.png", href: "https://honors.thu.edu.tw/" },
    { name: "International Business Administration", image: "/images/logos/International_Business_Administration.jpg", href: "https://iba.thu.edu.tw/" },
    { name: "Interdisciplinary Degree Program", image: "/images/logos/Interdisciplinary_Degree_Program.jpg", href: "https://ic.thu.edu.tw/web/about/page.php?lang=en&scid=15&sid=84" },
    { name: "Sustainability Science and Management", image: "/images/logos/Sustainability_Science_and_Management.jpg", href: "https://ic.thu.edu.tw/web/about/page.php?lang=en&scid=15&sid=2" },
  ],

  oralPresentationsPage: {
    intro: "As Tunghai University approaches its seventieth anniversary, the International College invites scholars who teach and conduct research in English to share work that reflects the breadth and diversity of academic inquiry within English-medium higher education. We place particular emphasis on scholars teaching in non-English-dominant contexts, such as international colleges, where English functions as a shared academic language across linguistic, cultural, and disciplinary boundaries.\n\nInternational colleges occupy a distinctive position within higher education: multilingual in practice, globally oriented in outlook, and committed to both academic breadth and professional preparation. These environments raise important questions about how liberal learning is pursued and communicated in such contexts. ICIC 2026 provides a forum for exploring these questions indirectly, through the presentation of diverse research and teaching-related work across disciplines.\n\nIn this spirit, ICIC 2026 welcomes submissions from all academic fields. Submissions need not address the conference theme directly; rather, the conference highlights how the full range of scholarly work conducted in English-medium, internationally oriented settings contributes to liberal learning in an increasingly interconnected world.",
    invitedSpeakersDisplayOn: true,
    invitedSpeakers: [
      { name: "Marc Lanteigne", affiliation: "Professor of Political Science, Arctic University of Norway, Tromsø, Norway" },
      { name: "Makito Yurita", affiliation: "Professor, National Institute for School Teachers and Staff Development, Japan" },
      { name: "Jessica Sze Yin Ho", affiliation: "Associate Professor, Edinburgh Business School, Heriot-Watt University, Malaysia" },
      { name: "Michael Mikulewicz", affiliation: "Assistant Professor, Department of Environmental Studies, State University of New York ESF, USA" },
    ],
    submissionsDisplayOn: false,
    submissionsText: "Submit a title and 300-word abstract via the online form\nDeadline: May 5 — acceptance decisions communicated by late May",
    conferenceSupportDisplayOn: false,
    conferenceSupportText: "Funding permitting, we anticipate being able to provide the following for a limited number of participants:\nTwo nights of accommodation\nHigh-speed rail tickets from Taoyuan International Airport to Taichung\nA modest per diem",
    closingNoteText: "This is a fully in-person conference.",
    submissionDeadlineDisplay: "May 5",
    contactName: "Chifumi Takagi",
    contactEmail: "ctakagi@thu.edu.tw",
    submitButtonDisplayOn: false,
  },

  posterPresentationsPage: {
    categories: [
      {
        name: "Business & Social Sciences",
        guidance: "Choose this category if your project mainly looks at how people, groups, or organizations work in the real world.",
        bullets: ["Business, marketing, finance", "Psychology and behaviour", "Society, culture, education", "Communication, media, public issues", "Governments, institutions, international affairs"],
        fitNote: "If your project studies real-world behaviour, systems, trends, or practical problems, it fits here.",
      },
      {
        name: "Natural & Environmental Sciences",
        guidance: "Choose this category if your project is about nature, science, the environment, or technology.",
        bullets: ["Biology, chemistry, physics", "Environmental issues, ecosystems, sustainability", "Engineering, computing, data, algorithms", "Scientific experiments or technical designs"],
        fitNote: "If your project studies how natural or technical systems work, it fits here.",
      },
      {
        name: "Arts & Humanities",
        guidance: "Choose this category if your project is mainly about ideas, values, meaning, culture, ethics, language, creativity, or how we understand human experience.",
        bullets: ["Literature, writing, languages", "Philosophy, ethics, religion", "History, culture, communication", "Art or design concepts presented in poster form", "Questions about values, principles, or meaning"],
        fitNote: "If your project focuses on ideas, values, culture, or how we make sense of the human world, it fits here.",
      },
    ],
    posterDeadlineDisplay: "May 8",
    posterFileDeadline: "2026-06-05",
    posterFileDeadlineDisplay: "June 5",
    prizesDisplayOn: true,
    prizesNote: "Awarded per category, in both High School and University divisions.",
    prizes: [
      { rank: "1st Place", amount: "NT$3,000" },
      { rank: "2nd Place", amount: "NT$2,000" },
      { rank: "3rd Place", amount: "NT$1,000" },
    ],
    submitButtonDisplayOn: false,
    contactName: "Tan Jue Xin and Mrinalini Mishra",
    contactEmail: "tanjx@thu.edu.tw and mishra_m@thu.edu.tw",
  },

  footer: {
    contactName: "Ms. Tiffany Xie",
    contactEmail: "icic@thu.edu.tw",
    contactPhone: "+886-4-2359-8941, x39303",
  },
};

export default homepageData;