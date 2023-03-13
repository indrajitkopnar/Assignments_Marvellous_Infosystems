//Assignment1Q2
function Area(radius: number, PI: number = 3.14): number {
    const area = PI * radius * radius;
    return area;
  }
  
  const radius = 5;
  const area = Area(radius);
  
  console.log("area of circle: " + area);
  