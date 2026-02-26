export const generateInsights = (analysisList) => {
  if (!analysisList.length) return null;

  const weaknessCount = {};

  analysisList.forEach((a) => {
    if (!a.weaknesses) return;

    const subjects = a.weaknesses.split(",").map((s) => s.trim());

    subjects.forEach((sub) => {
      weaknessCount[sub] = (weaknessCount[sub] || 0) + 1;
    });
  });

  const sorted = Object.entries(weaknessCount)
    .sort((a, b) => b[1] - a[1])
    .map(([subject, count]) => ({ subject, count }));

  return sorted;
};