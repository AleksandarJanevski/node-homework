// C - create
// R - read
// U - update
// D - delete

const studenti = [
  { ime: "Bojan", prosek: 7.5, grad: "Skopje" },
  { ime: "Pero", prosek: 8.3, grad: "Bitola" },
  { ime: "Janko", prosek: 6.9, grad: "Bitola" },
  { ime: "Vesna", prosek: 9.2, grad: "Skopje" },
  { ime: "Elena", prosek: 9.9, grad: "Kumanovo" },
  { ime: "Vancho", prosek: 10, grad: "Tetovo" },
  { ime: "Elena", prosek: 9.9, grad: "Ohrid" },
  { ime: "Ivana", prosek: 6.9, grad: "Kumanovo" },
  { ime: "Natasha", prosek: 8.1, grad: "Skopje" },
  { ime: "Stanko", prosek: 7.2, grad: "Strumica" },
];

// Домашна
// 1. Сите студенти од Скопје чие име завршува на а и имаат просек над 7, подредени по име (растечки).

let firstSort = studenti.filter((s) => {
  return s.grad === "Skopje" && s.ime.endsWith("a") && s.prosek > 7;
});

studenti.sort((a, b) => {
  if (a.ime < b.ime) return 1;
  if (a.ime > b.ime) return -1;
  return 0;
});

// console.log(firstSort);

// 2. Сите студенти кои имаат просек над 9 и не се од Скопје, подредени по просек опаѓачки.

let secondSort = studenti.filter((s) => {
  return s.prosek > 9 && s.grad !== "Skopje";
});

secondSort.sort((a, b) => {
  if (a.prosek > b.prosek) return -1;
  if (a.prosek < b.prosek) return 1;
  return 0;
});

// console.log(secondSort);

// 3. Првите 3 студенти кои имаат имиња од 5 карактери, подредени по просек.

let thirdSort = studenti.filter((s) => {
  return s.ime.length === 5;
});

thirdSort.sort((a, b) => {
  if (a.prosek > b.prosek) return -1;
  if (a.prosek < b.prosek) return 1;
  return 0;
});

thirdSort = thirdSort.slice(0, 3);

// console.log(thirdSort);

// 4. Градови подредени по групна висина на просек.

let set = new Set(studenti.map((s) => s.grad));

let res = Array.from(set)
  .map((g) => {
    let sbroj = studenti.filter((s) => s.grad === g).length;
    let svkupno = studenti.reduce((acc, v) => {
      if (v.grad === g) {
        return acc + v.prosek;
      }
      return acc;
    }, 0);
    return {
      grad: g,
      prosek: svkupno / sbroj,
    };
  })
  .sort((a, b) => {
    if (a.prosek > b.prosek) return -1;
    if (a.prosek < b.prosek) return 1;
    if (a.prosek === b.prosek) return 0;
  });

console.log(res);

let set2 = [];

for (let i = 0; i < studenti.length; i++) {
  if (!set2.includes(studenti[i].grad)) {
    set.push(studenti[i].grad);
  }
}

// 5. Вкупен просек на студенти чие име завршува на а наспроти сите останати.

let prvaGrupa = studenti.filter((s) => {
  return s.ime.endsWith("a");
});

let vtoraGrupa = studenti.filter((s) => {
  return !s.ime.endsWith("a");
});

let prvProsek = prvaGrupa.reduce((acc, s) => {
  return acc + s.prosek;
}, 0);

let vtorProsek = vtoraGrupa.reduce((acc, s) => {
  return acc + s.prosek;
}, 0);

// console.log(
//   `Просекот на студентите чие име завршува на A изнесува: ${Math.round(prvProsek/prvaGrupa.length)}. Просекот на останатите изнесува: ${Math.round(vtorProsek.vtoraGrupa.length)}.`
// );
