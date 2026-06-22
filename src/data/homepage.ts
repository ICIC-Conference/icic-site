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
      columns: [{ width: "1fr", blocks: [{ title: "Registration", location: "M244" }] }],
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
      columns: [{ width: "1fr", blocks: [{ title: "Morning Tea", location: "M232 & M233" }] }],
    },
    {
      time: "10:30–12:30",
      columns: [
        { width: "1fr", blocks: [{ title: "Oral Sessions 2-A", location: "M145" }] },
        { width: "1fr", blocks: [{ title: "Oral Sessions 2-B", location: "M146" }] },
      ],
    },
    {
      time: "12:30–1:30",
      columns: [{ width: "1fr", blocks: [{ title: "Lunch", location: "M232 & M233" }] }],
    },
    {
      time: "1:30–3:30",
      columns: [
        { width: "1fr", blocks: [{ title: "Oral Sessions 3-A", location: "M145" }] },
        { width: "1fr", blocks: [{ title: "Oral Sessions 3-B", location: "M146" }] },
        {
          width: "1fr",
          blocks: [
            { title: "Program Introduction Session", location: "M244" },
            { title: "Poster Session 2", location: "M232 & M233" },
          ],
        },
      ],
    },
    {
      time: "3:30–4:00",
      columns: [{ width: "1fr", blocks: [{ title: "Afternoon Tea", location: "M232 & M233" }] }],
    },
    {
      time: "4:00–5:00",
      columns: [{ width: "1fr", blocks: [{ title: "Keynote Address", talkTitle: "Unlocking Brain Potential: What and How to Learn in the AI Era", speaker: "Chi-Hung Juan, Chair Professor and Executive Vice President (National Central University)", location: "M201" }] }],
    },
    {
      time: "5:00–5:30",
      columns: [{ width: "1fr", blocks: [{ title: "Awards and Closing", location: "M201" }] }],
    },
  ],

  importantDates: [
    { label: "Oral Presentation Submission Deadline", value: "May 5, 2026" },
    { label: "Poster Proposal Deadline", value: "May 8, 2026" },
    { label: "Poster Files Due", value: "June 5, 2026" },
    { label: "ICIC Conference", value: "June 25, 2026" },
  ],

  documents: [
    {
      group: "General",
      items: [
        { label: "Conference Program", href: "/documents/ICIC2026-Conference-Program.pdf" },
        { label: "Campus/Event Map", href: "/documents/Maps.pdf" },
      ],
    },
    {
      items: [],
    },
    {
      group: "Poster Presentations",
      items: [
        { label: "Poster Presentation Fact Sheet", href: "/documents/poster fact sheet.pdf" },
        { label: "Poster Judging Criteria", href: "/documents/judging criteria.pdf" },
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
      time: "1:30–3:30",
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
              speaker: "Yulis",
              affiliation: "National Chung Hsing University",
              title: "Building Bilingual Environment in Taiwan: Bridging Policy and Practice in Public Education",
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
              speaker: "Priyanka C. Bhatt",
              affiliation: "Yuan Ze University",
              title: "Designing EMI Business and Technology\u2013Oriented Courses in the Age of AI: Pedagogical Strategies from Multilingual Classrooms",
            },
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
          ],
        },
      ],
    },
  ],

  sponsors: [
    { name: "Tunghai University", image: "/images/logos/thu.svg", href: "https://www.thu.edu.tw" },
    { name: "International College", image: "/images/logos/ic.svg", href: "https://ic.thu.edu.tw/" },
    { name: "International Liberal Arts Honors Program", image: "/images/logos/honors.png", href: "https://honors.thu.edu.tw/" },
    { name: "International Business Administration", image: "/images/logos/iba.jpg", href: "https://iba.thu.edu.tw/" },
    { name: "IDP", image: "/images/logos/idp.jpg", href: "https://ic.thu.edu.tw/web/about/page.php?lang=en&scid=15&sid=84" },
    { name: "Sustainability Science and Engineering", image: "/images/logos/ssm.jpg", href: "https://ic.thu.edu.tw/web/about/page.php?lang=en&scid=15&sid=2" },
  ],

  footer: {
    contactEmail: "icic@thu.edu.tw",
  },
};

export default homepageData;