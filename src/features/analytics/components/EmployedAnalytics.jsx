import useEmploymentStats from "../hooks/useEmploymentStats";

export default function EmployedAnalytics() {
  const { stats, loading } = useEmploymentStats();

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Employed Graduates</h2>
      <h1>{stats.employed}</h1>
    </div>
  );
}