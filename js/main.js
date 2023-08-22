let bank = [
  {
    name: "Autosalon BMW",
    budget: 3000000,
    tax: 20,
    expensesPerYear: [
      {
        title: "rent",
        total: 6000000,
      },
      {
        title: "payments",
        total: 2000000,
      },
      {
        title: "others",
        total: 7000000,
      },
    ],
  },
  {
    name: "Bunker game club",
    budget: 15000,
    tax: 15,
    expensesPerYear: [
      {
        title: "rent",
        total: 200000,
      },
      {
        title: "payments",
        total: 85000,
      },
    ],
  },
  {
    name: "Munis Building",
    budget: 8000000,
    tax: 15,
    expensesPerYear: [
      {
        title: "payments",
        total: 5000000,
      },
      {
        title: "documents",
        total: 1000000,
      },
    ],
  },
];
// 1. Найти кто больше всех платит налог
let nalog = 0;
bank.forEach((i) =>
  (i.budget / 100) * i.tax > nalog ? (nalog = (i.budget / 100) * i.tax) : null
);
bank.forEach((i) =>
  ((i.budget / 100) * i.tax).toString().includes(nalog)
    ? console.log(`Кто больше всех платит налог: ` + i.name + " - " + nalog)
    : null
);
let udachniye = [];
let neudachniye = [];
// 2. Создать новый ключ компаниям (процент) Найти соотношение трат и сохранить его в новом ключе
for (let i of bank) {
  let expenses_per_month = 0;
  for (let k of i.expensesPerYear) {
    expenses_per_month += k.total / 12;
  }
  i.procent = (expenses_per_month / i.budget) * 100;

  // 2. Вычитав все расходы включая налоги определить куда пушается компания в уд или не удачные если денег остается больше 0 то в уд меньше (не удачные)

  if (i.budget - expenses_per_month - (i.budget / 100) * i.tax > 0) {
    udachniye.push(i);
  } else {
    neudachniye.push(i);
  }
}
console.log(bank);
console.log(`Успешные!`);
console.log(udachniye);
console.log(`Неуспешные!`);
console.log(neudachniye);