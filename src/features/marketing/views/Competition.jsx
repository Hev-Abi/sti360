import { Card, Table } from "../../../components/ui";
import { ROLES } from "../../../constants/roles";

export default function Competition() {
  return (
    <Card title="Competition Analysis" accent={ROLES.SAO.color}>
      <Table
        headers={["Category", "Our School", "Top Competitor", "Gap"]}
        rows={[
          ["Enrollment Growth", "+12%", "+8%", "+4% ✓"],
          ["Program Variety", "32", "28", "+4 ✓"],
        ]}
        color={ROLES.SAO.color}
      />
    </Card>
  );
}