export function Text({ x, y, text }) {
  const style = {
    fontSize: "13px",
    fill: "rgb(170, 170, 170)",
    alignmentBaseline: "central",
  };

  return (
    <text x={x} y={y} textAnchor="middle" style={style}>
      {text}
    </text>
  );
}
