import { Card, Table, Badge, ActionButton } from "../../../components/ui";
import { ROLES } from "../../../constants/roles";

export default function LeadsTracking() {
  return (
    <Card title="Leads Tracking" accent={ROLES.SAO.color}>
      <div style={{ marginBottom: 16, display: "flex", gap: 10 }}>
        <ActionButton label="+ Add Lead" onClick={() => {}} color={ROLES.SAO.color} />
        <ActionButton label="Export" onClick={() => {}} color={ROLES.SAO.color} outline />
      </div>

      <Table
        headers={["Name", "School", "Program", "Status", "Date"]}
        rows={[
          ["Maria Santos", "St. Theresa HS", "BSIT", <Badge text="Hot" color="#e63946" />, "Feb 20"],
          ["Juan dela Cruz", "San Miguel HS", "BSBA", <Badge text="Warm" color="#f4a261" />, "Feb 19"],
        ]}
        color={ROLES.SAO.color}
      />
    </Card>
  );
}