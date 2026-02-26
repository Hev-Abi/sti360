import { useEffect, useState } from "react";
import { getEmploymentStats } from "../services/employmentService";

export default function useEmploymentStats() {
  const [stats, setStats] = useState({ employed: 0, unemployed: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const result = await getEmploymentStats();
      setStats(result);
      setLoading(false);
    }
    load();
  }, []);

  return { stats, loading };
}   