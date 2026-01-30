export const personalInformation = {
  bio: `// Personal Information
const developer = {
  name: "Lê Minh Phương",
  location: "Việt Nam",
  skills: ["JavaScript", "Node.js", "React", "Java", "C/C++", "SQL],
  passion: "Building scalable web applications"
};
export default developer;`,

  interests: `// My Interests
const interests = [
  { category: "Technology", items: ["Web Dev", "Mobile Dev"] },
  { category: "Hobbies", items: ["Coding"] }
];
export default interests;`,

  education: `/**
 * About me
 * I have 5 years of experience in web development...
 */`,

  university: `// University Education
const education = {
  university: "FPT University",
};
export default education;`,

  "high-school": `// High School Education
const highSchool = {
  schoolName: "Bien Hoa Specialized High School",
};
export default highSchool;`,
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
