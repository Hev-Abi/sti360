import { Card, Table } from "../../../components/ui";
import { ROLES } from "../../../constants/roles";

export default function MarketingAnalytics() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
      <Card title="Competitor Analysis" accent={ROLES.SAO.color}>
        <Table
          headers={["School", "Programs", "Tuition", "Enrollees"]}
          rows={[
            ["XYZ University", "28", "₱45,000", "3,400"],
          ]}
          color={ROLES.SAO.color}
        />
      </Card>
    </div>
  );
}