const menu = [
  { name: "cookie", price: 3000, kcal: 400 },
  { name: "doughnut", price: 3500, kcal: 500 },
  { name: "yogurt", price: 2000, kcal: 200 },
  { name: "cchocolate", price: 2500, kcal: 500 },
];
// 1. 가격이 3000 이하만 살리기
const allPrice = (x) => x.price <= 3000;
menu.filter(allPrice);

// 2. 칼로리 300보다 작은것만 살리기
const allKcal = (x) => x.kcal <= 300;
menu.filter(allKcal);
