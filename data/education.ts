export interface EducationEntry {
  id: string
  degree: string
  institution: string
  location: string
  board?: string
  score: string
  period: string
  highlights: string[]
}

export const education: EducationEntry[] = [
  {
    id: "be-cs",
    degree: "B.E. Computer Science Engineering",
    institution: "BNM Institute of Technology (VTU Autonomous)",
    location: "Bengaluru",
    score: "GPA: 8.95/10",
    period: "Expected July 2026",
    highlights: [
      "Creative Lead, Q-Quotient Quiz Club",
      "Member: RPA/Nexus/TechIT Clubs",
    ],
  },
  {
    id: "class-12",
    degree: "Class 12",
    institution: "Bangalore International Academy",
    location: "Bengaluru",
    board: "CBSE",
    score: "84%",
    period: "March 2022",
    highlights: [
      "Library Management System",
      "Inter-School MUNs",
    ],
  },
  {
    id: "class-10",
    degree: "Class 10",
    institution: "Innisfree House School",
    location: "Bengaluru",
    board: "ICSE",
    score: "95%",
    period: "May 2020",
    highlights: [
      "Literature fests",
      "Cricket Team",
      "Quizzing/Debates",
    ],
  },
]
