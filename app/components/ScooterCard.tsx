interface ScooterCardProps {}

export interface ScooterProp {
  type: string;
  id: string;
  attributes: {};
}

function ScooterCard({}: ScooterCardProps) {
  return <div>ScooterCard</div>;
}

export default ScooterCard;
