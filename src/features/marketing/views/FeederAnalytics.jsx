import { Card, Table, Badge } from "../../../components/ui";
import { ROLES } from "../../../constants/roles";

export default function FeederAnalytics() {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <Card title="Feeder School Analytics" accent={ROLES.SAO.color}>
        <Table
          headers={["School", "Enrollees", "Programs"]}
          rows={[
            ["St. Theresa HS", "89", "4"],
            ["Holy Cross HS", "67", "3"],
          ]}
          color={ROLES.SAO.color}
        />
      </Card>

      <Card title="Track Enrollees" accent={ROLES.SAO.color}>
        <Table
          headers={["Student", "From", "Program", "Standing"]}
          rows={[
            ["Ma. Flores", "St. Theresa HS", "BSIT", <Badge text="Good" color="#2A9D8F" />],
          ]}
          color={ROLES.SAO.color}
        />
      </Card>
    </div>
  );
}