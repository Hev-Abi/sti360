import { Card, Table, Badge, ActionButton } from "../../../components/ui";
import { ROLES } from "../../../constants/roles";

export default function Programs() {
  return (
    <Card title="Programs Offered" accent={ROLES.SAO.color}>
      <ActionButton label="+ Add Program" color={ROLES.SAO.color} />
      <Table
        headers={["Program", "Department", "Duration", "Enrolled", "Status"]}
        rows={[
          ["BSIT", "Engineering", "4 years", "342", <Badge text="Active" color="#2A9D8F" />],
        ]}
        color={ROLES.SAO.color}
      />
    </Card>
  );
}