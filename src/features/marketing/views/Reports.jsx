import { Card, ActionButton } from "../../../components/ui";
import { ROLES } from "../../../constants/roles";

export default function Reports() {
  return (
    <Card title="Generate Marketing Reports" accent={ROLES.SAO.color}>
      <ActionButton label="Generate Report" color={ROLES.SAO.color} />
    </Card>
  );
}