import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState,
} from '@mui/x-charts/Gauge';

function GaugePointer() {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();

  if (valueAngle === null) {
    // No value to display
    return null;
  }

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };
  return (
    <g>
      <circle cx={cx} cy={cy} r={8} fill="gray" />
      <path
        d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
        stroke="gray"
        strokeWidth={3}
      />
    </g>
  );
}

export default function CompositionExample3() {
  return (
    <GaugeContainer
      width={200}
      height={110}
      startAngle={-110}
      endAngle={110}
      value={50}
    >
      <GaugeReferenceArc />
      <GaugeValueArc />
      <GaugePointer />
    </GaugeContainer>
  );
}