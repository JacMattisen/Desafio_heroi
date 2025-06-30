let nameHeroe = "drstrange";
let xp = 10001;

let niveis = [
  { nome: "Ferro", max: 1000 },
  { nome: "Bronze", max: 2000 },
  { nome: "Prata", max: 5000 },
  { nome: "Ouro", max: 7000 },
  { nome: "Platina", max: 8000 },
  { nome: "Ascendente", max: 9000 },
  { nome: "Imortal", max: 10000 },
  { nome: "Radiante", max: Infinity },
];

let nivel = "";

for (let i = 0; i < niveis.length; i++) {
  if (xp <= niveis[i].max) {
    nivel = niveis[i].nome;
    break;
  }
}

console.log(`O Herói de nome ${nameHeroe} está no nível de ${nivel}`);
