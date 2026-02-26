export function analyzePerformance(grades) {
  if (!grades.length) return null;

  let strengths = [];
  let weaknesses = [];

  grades.forEach((g) => {
    if (g.grade >= 85) strengths.push(g.subject);
    if (g.grade < 75) weaknesses.push(g.subject);
  });

  return {
    strengths: strengths.join(", "),
    weaknesses: weaknesses.join(", ")
  };
}