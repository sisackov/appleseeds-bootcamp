const circleArea = (radius) => {
  const area = Math.PI * radius * radius;
  console.log(area);
  return area.toFixed(2);
};
console.log(circleArea(3));
