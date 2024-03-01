export function Cell({ x, y, width, height, date, fill }) {
  const defaultRectColor = "#E5E6E6";

  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      id={date}
      fill={fill}
      rx="2"
      ry="2"
    ></rect>
  );
}
