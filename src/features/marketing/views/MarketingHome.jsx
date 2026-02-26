import { Card, Table, Badge, StatCard } from "../../../components/ui";
import { ROLES } from "../../../constants/roles";
import { marketingStats, campaigns, leadSources } from "../data/marketingData";

export default function MarketingHome() {
  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 24 }}>
        {marketingStats.map(stat => (
          <StatCard key={stat.label} {...stat} color={ROLES.SAO.color} />
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
       <Card title="Recent Campaigns" accent={ROLES.SAO.color}>
  <Table
    headers={["Campaign", "Reach", "Leads", "Status"]}
    rows={campaigns.map(c => [
      c[0],
      c[1],
      c[2],
      <Badge text={c[3]} color={c[3] === "Active" ? "#2A9D8F" : "#888"} />
    ])}
    color={ROLES.SAO.color}
  />
</Card>

        <Card title="Lead Sources" accent={ROLES.SAO.color}>
          <Table
            headers={["Source", "Count", "%"]}
            rows={leadSources}
            color={ROLES.SAO.color}
          />
        </Card>
      </div>
    </div>
  );
}