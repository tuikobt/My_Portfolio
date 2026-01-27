export const personalInformation = {
  bio: `// Personal Information
const developer = {
  name: "Lê Minh Phương",
  role: "Backend Developer",
  location: "Việt Nam",
  experience: "2+ years",
  skills: ["JavaScript", "Node.js", "React", "MongoDB"],
  passion: "Building scalable web applications"
};
export default developer;`,

  interests: `// My Interests
const interests = [
  { category: "Technology", items: ["Web Dev", "Cloud", "AI"] },
  { category: "Hobbies", items: ["Coding", "Reading", "Open Source"] }
];
export default interests;`,

  education: `/**
 * About me
 * I have 5 years of experience in web development...
 */`,

  university: `// University Education
const education = {
  degree: "Bachelor of Computer Science",
  university: "Technology University",
  gpa: "3.8/4.0"
};
export default education;`,

  "high-school": "// High School Info...",
};

export const codeSnippets = [
  {
    username: "@username",
    time: "9 months ago",
    stars: 3,
    code: `function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {
  const value: T = parseModel(chunk._response);
  return value;
}`,
  },
  {
    username: "@username",
    time: "9 months ago",
    stars: 0,
    code: `export function parseModelTuple(response: Response) {
  const tuple: [mixed, mixed] = (value: any);
}`,
  },
];
