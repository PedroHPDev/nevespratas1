"use strict";
// Preços e dados preservados. Fotos com fundo preto: 04/10/2026.
const PRODUCTS = [
  {
    "id": "NP-001",
    "name": "Corrente Italiana Pipoca 1,5 mm",
    "length": 40,
    "priceCents": 8300,
    "category": "corrente",
    "image": "NP-001.webp"
  },
  {
    "id": "NP-002",
    "name": "Corrente Elo Português 2 mm",
    "length": 40,
    "priceCents": 8300,
    "category": "corrente",
    "image": "NP-021.webp"
  },
  {
    "id": "NP-003",
    "name": "Corrente Veneziana V12",
    "length": 40,
    "priceCents": 3500,
    "category": "corrente",
    "image": "NP-019.webp"
  },
  {
    "id": "NP-004",
    "name": "Corrente Grume Flat 2 mm",
    "length": 45,
    "priceCents": 9600,
    "category": "corrente",
    "image": "NP-004.webp"
  },
  {
    "id": "NP-005",
    "name": "Corrente Pipoca Envelhecida 3 mm",
    "length": 45,
    "priceCents": 23300,
    "category": "corrente",
    "image": "NP-005.webp"
  },
  {
    "id": "NP-006",
    "name": "Corrente Nuvem Diamantada 3 mm",
    "length": 45,
    "priceCents": 6900,
    "category": "corrente",
    "image": "NP-006.webp"
  },
  {
    "id": "NP-007",
    "name": "Corrente 3 × 1 1,5 mm",
    "length": 45,
    "priceCents": 6600,
    "category": "corrente",
    "image": "NP-007.webp"
  },
  {
    "id": "NP-008",
    "name": "Corrente Cartie 2 × 5,5 mm",
    "length": 45,
    "priceCents": 8900,
    "category": "corrente",
    "image": "NP-008.webp"
  },
  {
    "id": "NP-009",
    "name": "Corrente Piastrine 2 mm",
    "length": 45,
    "priceCents": 7900,
    "category": "corrente",
    "image": "NP-009.webp"
  },
  {
    "id": "NP-010",
    "name": "Corrente Italiana Elo Português 1,2 mm",
    "length": 45,
    "priceCents": 6400,
    "category": "corrente",
    "image": "NP-010.webp"
  },
  {
    "id": "NP-011",
    "name": "Corrente Minhoca Italiana 1 mm",
    "length": 45,
    "priceCents": 10700,
    "category": "corrente",
    "image": "NP-011.webp"
  },
  {
    "id": "NP-012",
    "name": "Corrente Italiana Cordão 1,5 mm",
    "length": 45,
    "priceCents": 15400,
    "category": "corrente",
    "image": "NP-012.webp"
  },
  {
    "id": "NP-013",
    "name": "Corrente Piastrine 2,5 mm",
    "length": 45,
    "priceCents": 11300,
    "category": "corrente",
    "image": "NP-013.webp"
  },
  {
    "id": "NP-014",
    "name": "Corrente Italiana Rabo de Rato 1 mm",
    "length": 45,
    "priceCents": 9400,
    "category": "corrente",
    "image": "NP-014.webp"
  },
  {
    "id": "NP-015",
    "name": "Corrente Elo Português 2 mm",
    "length": 45,
    "priceCents": 8600,
    "category": "corrente",
    "image": "NP-015.webp"
  },
  {
    "id": "NP-016",
    "name": "Corrente Veneziana V12",
    "length": 45,
    "priceCents": 4500,
    "category": "corrente",
    "image": "NP-019.webp"
  },
  {
    "id": "NP-017",
    "name": "Corrente Veneziana V15",
    "length": 45,
    "priceCents": 6200,
    "category": "corrente",
    "image": "NP-017.webp"
  },
  {
    "id": "NP-018",
    "name": "Corrente Veneziana 1,8 × 3,8 mm",
    "length": 50,
    "priceCents": 13400,
    "category": "corrente",
    "image": "NP-018.webp"
  },
  {
    "id": "NP-019",
    "name": "Corrente Veneziana V12",
    "length": 50,
    "priceCents": 5200,
    "category": "corrente",
    "image": "NP-019.webp"
  },
  {
    "id": "NP-020",
    "name": "Corrente Elo Português F05 2 mm",
    "length": 50,
    "priceCents": 9700,
    "category": "corrente",
    "image": "NP-020.webp"
  },
  {
    "id": "NP-021",
    "name": "Corrente Elo Português 1,9 mm",
    "length": 50,
    "priceCents": 9000,
    "category": "corrente",
    "image": "NP-021.webp"
  },
  {
    "id": "NP-022",
    "name": "Corrente Italiana Cordão Fino 1,5 mm",
    "length": 50,
    "priceCents": 18000,
    "category": "corrente",
    "image": "NP-022.webp"
  },
  {
    "id": "NP-023",
    "name": "Corrente Veneziana V12",
    "length": 60,
    "priceCents": 5900,
    "category": "corrente",
    "image": "NP-023.webp"
  },
  {
    "id": "NP-024",
    "name": "Corrente Elo Português F05 2 mm",
    "length": 60,
    "priceCents": 8900,
    "category": "corrente",
    "image": "NP-024.webp"
  },
  {
    "id": "NP-025",
    "name": "Corrente 3 × 1 2 mm",
    "length": 60,
    "priceCents": 14500,
    "category": "corrente",
    "image": "NP-025.webp"
  },
  {
    "id": "NP-026",
    "name": "Corrente Grume 3 mm",
    "length": 60,
    "priceCents": 21700,
    "category": "corrente",
    "image": "NP-026.webp"
  },
  {
    "id": "NP-027",
    "name": "Corrente Cordão Baiano 2 mm",
    "length": 60,
    "priceCents": 21800,
    "category": "corrente",
    "image": "NP-027.webp"
  },
  {
    "id": "NP-028",
    "name": "Corrente Minhoca 2 mm",
    "length": 60,
    "priceCents": 30400,
    "category": "corrente",
    "image": "NP-028.webp"
  },
  {
    "id": "NP-029",
    "name": "Corrente Grume Flat 4 mm",
    "length": 60,
    "priceCents": 34500,
    "category": "corrente",
    "image": "NP-029.webp"
  },
  {
    "id": "NP-030",
    "name": "Corrente Cartie F05 2 × 4 mm",
    "length": 60,
    "priceCents": 9700,
    "category": "corrente",
    "image": "NP-030.webp"
  },
  {
    "id": "NP-031",
    "name": "Corrente Veneziana V22",
    "length": 60,
    "priceCents": 13800,
    "category": "corrente",
    "image": "NP-041.webp"
  },
  {
    "id": "NP-032",
    "name": "Corrente Grume Dupla 3 mm",
    "length": 60,
    "priceCents": 28000,
    "category": "corrente",
    "image": "NP-032.webp"
  },
  {
    "id": "NP-033",
    "name": "Corrente Veneziana 2 × 5 mm",
    "length": 60,
    "priceCents": 19100,
    "category": "corrente",
    "image": "NP-050.webp"
  },
  {
    "id": "NP-034",
    "name": "Corrente Masculina 3 × 1 1,5 mm",
    "length": 60,
    "priceCents": 8300,
    "category": "corrente",
    "image": "NP-034.webp"
  },
  {
    "id": "NP-035",
    "name": "Corrente Masculina Grume FA 3 mm",
    "length": 60,
    "priceCents": 19800,
    "category": "corrente",
    "image": "NP-035.webp"
  },
  {
    "id": "NP-036",
    "name": "Corrente Veneziana V30",
    "length": 70,
    "priceCents": 34200,
    "category": "corrente",
    "image": "NP-036.webp"
  },
  {
    "id": "NP-037",
    "name": "Corrente Cartie 2 × 3 mm",
    "length": 70,
    "priceCents": 24000,
    "category": "corrente",
    "image": "NP-037.webp"
  },
  {
    "id": "NP-038",
    "name": "Corrente Cartie Elo Oval F05 2 × 4 mm",
    "length": 70,
    "priceCents": 10900,
    "category": "corrente",
    "image": "NP-038.webp"
  },
  {
    "id": "NP-039",
    "name": "Corrente Masculina Cartie 4 × 7 mm",
    "length": 70,
    "priceCents": 53600,
    "category": "corrente",
    "image": "NP-052.webp"
  },
  {
    "id": "NP-040",
    "name": "Corrente Elo Cadeado 2 mm",
    "length": 70,
    "priceCents": 19800,
    "category": "corrente",
    "image": "NP-040.webp"
  },
  {
    "id": "NP-041",
    "name": "Corrente V19",
    "length": 70,
    "priceCents": 11500,
    "category": "corrente",
    "image": "NP-041.webp"
  },
  {
    "id": "NP-042",
    "name": "Corrente 3 × 1 3 mm",
    "length": 70,
    "priceCents": 19800,
    "category": "corrente",
    "image": "NP-042.webp"
  },
  {
    "id": "NP-043",
    "name": "Corrente Grume 6,5 mm",
    "length": 70,
    "priceCents": 97000,
    "category": "corrente",
    "image": "NP-043.webp"
  },
  {
    "id": "NP-044",
    "name": "Corrente Grume Dupla 3 mm",
    "length": 70,
    "priceCents": 34500,
    "category": "corrente",
    "image": "NP-044.webp"
  },
  {
    "id": "NP-045",
    "name": "Corrente Grume 1,5 mm",
    "length": 70,
    "priceCents": 10900,
    "category": "corrente",
    "image": "NP-045.webp"
  },
  {
    "id": "NP-046",
    "name": "Corrente Masculina Grume 7 mm",
    "length": 70,
    "priceCents": 118600,
    "category": "corrente",
    "image": "NP-046.webp"
  },
  {
    "id": "NP-047",
    "name": "Corrente Masculina 3 × 1 2 mm",
    "length": 70,
    "priceCents": 16500,
    "category": "corrente",
    "image": "NP-047.webp"
  },
  {
    "id": "NP-048",
    "name": "Corrente Masculina Grume 3 mm",
    "length": 70,
    "priceCents": 28000,
    "category": "corrente",
    "image": "NP-048.webp"
  },
  {
    "id": "NP-049",
    "name": "Corrente Masculina Grume 4 mm",
    "length": 70,
    "priceCents": 36200,
    "category": "corrente",
    "image": "NP-049.webp"
  },
  {
    "id": "NP-050",
    "name": "Corrente Masculina Veneziana 2 × 5 mm",
    "length": 70,
    "priceCents": 21400,
    "category": "corrente",
    "image": "NP-050.webp"
  },
  {
    "id": "NP-051",
    "name": "Corrente Piastrine F. 2 mm",
    "length": 70,
    "priceCents": 12200,
    "category": "corrente",
    "image": "NP-051.webp"
  },
  {
    "id": "NP-052",
    "name": "Corrente Masculina Cartier 3,5 × 7 mm",
    "length": 70,
    "priceCents": 51000,
    "category": "corrente",
    "image": "NP-052.webp"
  },
  {
    "id": "NP-053",
    "name": "Corrente Masculina 3 × 1 5 mm",
    "length": 70,
    "priceCents": 52900,
    "category": "corrente",
    "image": "NP-053.webp"
  },
  {
    "id": "NP-054",
    "name": "Corrente Masculina 3 × 1 4 mm",
    "length": 70,
    "priceCents": 36200,
    "category": "corrente",
    "image": "NP-054.webp"
  },
  {
    "id": "NP-055",
    "name": "Pulseira Grume Dupla 5 mm",
    "length": 0,
    "priceCents": 28000,
    "category": "pulseira",
    "image": "NP-055.webp"
  },
  {
    "id": "NP-056",
    "name": "Pulseira Cartie 3 × 5 mm",
    "length": 0,
    "priceCents": 16800,
    "category": "pulseira",
    "image": "NP-056.webp"
  },
  {
    "id": "NP-057",
    "name": "Pulseira Cartie 2 × 3 mm",
    "length": 0,
    "priceCents": 7900,
    "category": "pulseira",
    "image": "NP-057.webp"
  },
  {
    "id": "NP-058",
    "name": "Pulseira Veneziana 2 × 7 mm",
    "length": 0,
    "priceCents": 5800,
    "category": "pulseira",
    "image": "NP-058.webp"
  },
  {
    "id": "NP-059",
    "name": "Pulseira Bracelete Bali Esteira",
    "length": 0,
    "priceCents": 91500,
    "category": "pulseira",
    "image": "NP-059.webp"
  },
  {
    "id": "NP-060",
    "name": "Pulseira Piastrine 2 mm",
    "length": 0,
    "priceCents": 4600,
    "category": "pulseira",
    "image": "NP-060.webp"
  },
  {
    "id": "NP-061",
    "name": "Pulseira Grume Dupla 3 mm",
    "length": 0,
    "priceCents": 9600,
    "category": "pulseira",
    "image": "NP-061.webp"
  },
  {
    "id": "NP-062",
    "name": "Pulseira Masculina 3 × 1 Chapa 7 mm",
    "length": 0,
    "priceCents": 36500,
    "category": "pulseira",
    "image": "NP-062.webp"
  },
  {
    "id": "NP-063",
    "name": "Pulseira Masculina Grume Chapa 5 mm",
    "length": 0,
    "priceCents": 25300,
    "category": "pulseira",
    "image": "NP-063.webp"
  },
  {
    "id": "NP-064",
    "name": "Brinco Zircônia Redonda 2 mm",
    "length": 0,
    "category": "brinco",
    "originalPriceCents": 477,
    "priceCents": 800,
    "image": "NP-064.webp"
  },
  {
    "id": "NP-065",
    "name": "Brinco Zircônia Redonda 3 mm",
    "length": 0,
    "category": "brinco",
    "originalPriceCents": 600,
    "priceCents": 1000,
    "image": "NP-065.webp"
  },
  {
    "id": "NP-066",
    "name": "Brinco Zircônia Redonda 4 mm",
    "length": 0,
    "category": "brinco",
    "originalPriceCents": 665,
    "priceCents": 1100,
    "image": "NP-066.webp"
  },
  {
    "id": "NP-067",
    "name": "Brinco Zircônia Redonda 5 mm",
    "length": 0,
    "category": "brinco",
    "originalPriceCents": 908,
    "priceCents": 1500,
    "image": "NP-067.webp"
  },
  {
    "id": "NP-068",
    "name": "Brinco Zircônia Redonda 6 mm",
    "length": 0,
    "category": "brinco",
    "originalPriceCents": 999,
    "priceCents": 1600,
    "image": "NP-068.webp"
  },
  {
    "id": "NP-069",
    "name": "Brinco Zircônia Redonda 7 mm",
    "length": 0,
    "category": "brinco",
    "originalPriceCents": 1330,
    "priceCents": 2200,
    "image": "NP-069.webp"
  },
  {
    "id": "NP-070",
    "name": "Brinco Zircônia Redonda 8 mm",
    "length": 0,
    "category": "brinco",
    "originalPriceCents": 1480,
    "priceCents": 2400,
    "image": "NP-070.webp"
  },
  {
    "id": "NP-071",
    "name": "Brinco Zircônia Redonda 9 mm",
    "length": 0,
    "category": "brinco",
    "originalPriceCents": 1978,
    "priceCents": 3200,
    "image": "NP-071.webp"
  },
  {
    "id": "NP-072",
    "name": "Brinco Zircônia Redonda 10 mm",
    "length": 0,
    "category": "brinco",
    "originalPriceCents": 2109,
    "priceCents": 3400,
    "image": "NP-072.webp"
  },
  {
    "id": "NP-073",
    "name": "Brinco Zircônia Redonda 12 mm",
    "length": 0,
    "category": "brinco",
    "originalPriceCents": 3952,
    "priceCents": 6400,
    "image": "NP-073.webp"
  },
  {
    "id": "NP-074",
    "name": "Pingente Crucifixo Trabalhado 2x1 cm",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 1883,
    "priceCents": 3100,
    "image": "NP-074.webp"
  },
  {
    "id": "NP-075",
    "name": "Pingente Crucifixo Grande INRI",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 2152,
    "priceCents": 3500,
    "image": "NP-075.webp"
  },
  {
    "id": "NP-076",
    "name": "Pingente Cruz Pequena INRI",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 807,
    "priceCents": 1300,
    "image": "NP-076.webp"
  },
  {
    "id": "NP-077",
    "name": "Pingente Cruz Borda Trabalhada 2x1 cm",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 807,
    "priceCents": 1300,
    "image": "NP-077.webp"
  },
  {
    "id": "NP-078",
    "name": "Pingente Estrela de Davi 6 Pontas 1,6 cm",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 1076,
    "priceCents": 1800,
    "image": "NP-078.webp"
  },
  {
    "id": "NP-079",
    "name": "Pingente Medalha Oval São Jorge 1,5 cm",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 4573,
    "priceCents": 7400,
    "image": "NP-079.webp"
  },
  {
    "id": "NP-080",
    "name": "Pingente Medalha Oval São Miguel Arcanjo 1,5 cm",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 5111,
    "priceCents": 8200,
    "image": "NP-080.webp"
  },
  {
    "id": "NP-081",
    "name": "Pingente Medalha Redonda São Bento Frente e Verso 2,5 cm",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 12374,
    "priceCents": 19800,
    "image": "NP-081.webp"
  },
  {
    "id": "NP-082",
    "name": "Pingente Medalha Redonda São Bento Frente e Verso 2 cm",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 7532,
    "priceCents": 12100,
    "image": "NP-082.webp"
  },
  {
    "id": "NP-083",
    "name": "Pingente Medalha Redonda São Bento Frente e Verso 1,5 cm",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 2690,
    "priceCents": 4400,
    "image": "NP-083.webp"
  },
  {
    "id": "NP-084",
    "name": "Pingente Medalha Redonda São Bento Frente e Verso 1 cm",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 1614,
    "priceCents": 2600,
    "image": "NP-084.webp"
  },
  {
    "id": "NP-085",
    "name": "Pingente Placa Redonda São Jorge Vazada 1,5 cm",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 2152,
    "priceCents": 3500,
    "image": "NP-085.webp"
  },
  {
    "id": "NP-086",
    "name": "Pingente Cruz Palito 2 cm #PIN-J-45",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 753,
    "priceCents": 1300,
    "image": "NP-086.webp"
  },
  {
    "id": "NP-087",
    "name": "Pingente Crucifixo Borda Quadrada #MC82",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 7000,
    "priceCents": 11200,
    "image": "NP-087.webp"
  },
  {
    "id": "NP-088",
    "name": "Pingente Cruz Média Fios Meio #MC81",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 10850,
    "priceCents": 17400,
    "image": "NP-088.webp"
  },
  {
    "id": "NP-089",
    "name": "Pingente Crucifixo Borda Vazada #MC85",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 5775,
    "priceCents": 9300,
    "image": "NP-089.webp"
  },
  {
    "id": "NP-090",
    "name": "Pingente Cruz Grande Fios Meio #MC80",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 14000,
    "priceCents": 22400,
    "image": "NP-090.webp"
  },
  {
    "id": "NP-091",
    "name": "Pingente Cruz Borda Fosca #MC86",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 4200,
    "priceCents": 6800,
    "image": "NP-091.webp"
  },
  {
    "id": "NP-092",
    "name": "Pingente Cruz Média Vazada #MC84",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 5425,
    "priceCents": 8700,
    "image": "NP-092.webp"
  },
  {
    "id": "NP-093",
    "name": "Pingente Placa Bandeja M #PIN-A02",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 6456,
    "priceCents": 10400,
    "image": "NP-093.webp"
  },
  {
    "id": "NP-094",
    "name": "Pingente Placa 1,4x1 #PIN-A06",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 2152,
    "priceCents": 3500,
    "image": "NP-094.webp"
  },
  {
    "id": "NP-095",
    "name": "Pingente Placa Oval Borda Cartier #PIN-A03",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 3497,
    "priceCents": 5600,
    "image": "NP-095.webp"
  },
  {
    "id": "NP-096",
    "name": "Pingente Cruz Cubo 3 cm",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 3497,
    "priceCents": 5600,
    "image": "NP-096.webp"
  },
  {
    "id": "NP-097",
    "name": "Pingente Pergaminho #PIN-A01",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 3228,
    "priceCents": 5200,
    "image": "NP-097.webp"
  },
  {
    "id": "NP-098",
    "name": "Pingente Cruz Grande INRI",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 3497,
    "priceCents": 5600,
    "image": "NP-098.webp"
  },
  {
    "id": "NP-099",
    "name": "Pingente Cruz Palito 3 cm",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 1883,
    "priceCents": 3100,
    "image": "NP-099.webp"
  },
  {
    "id": "NP-100",
    "name": "Pingente Estrela de Davi Vazada com Aro",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 1883,
    "priceCents": 3100,
    "image": "NP-100.webp"
  },
  {
    "id": "NP-101",
    "name": "Pingente Cifrão P #MC52",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 1925,
    "priceCents": 3100,
    "image": "NP-101.webp"
  },
  {
    "id": "NP-102",
    "name": "Pingente São Jorge Aro Oval M #MC44",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 5425,
    "priceCents": 8700,
    "image": "NP-102.webp"
  },
  {
    "id": "NP-103",
    "name": "Pingente Face de Cristo G #MC32",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 18375,
    "priceCents": 29400,
    "image": "NP-103.webp"
  },
  {
    "id": "NP-104",
    "name": "Pingente Santos G #MC65",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 10675,
    "priceCents": 17100,
    "image": "NP-104.webp"
  },
  {
    "id": "NP-105",
    "name": "Pingente Cruz Pontas Vazadas G #MC50",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 13475,
    "priceCents": 21600,
    "image": "NP-105.webp"
  },
  {
    "id": "NP-106",
    "name": "Pingente Oakley P #MC37",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 1575,
    "priceCents": 2600,
    "image": "NP-106.webp"
  },
  {
    "id": "NP-107",
    "name": "Pingente Quiksilver #MC38",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 3325,
    "priceCents": 5400,
    "image": "NP-107.webp"
  },
  {
    "id": "NP-108",
    "name": "Pingente Face de Cristo (verso) #MC39",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 2975,
    "priceCents": 4800,
    "image": "NP-108.webp"
  },
  {
    "id": "NP-109",
    "name": "Pingente Oakley M #MC42",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 4025,
    "priceCents": 6500,
    "image": "NP-109.webp"
  },
  {
    "id": "NP-110",
    "name": "Pingente Medalha São Jorge Oval M #MC43",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 5425,
    "priceCents": 8700,
    "image": "NP-110.webp"
  },
  {
    "id": "NP-111",
    "name": "Pingente Fé G #MC45",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 4900,
    "priceCents": 7900,
    "image": "NP-111.webp"
  },
  {
    "id": "NP-112",
    "name": "Pingente São Jorge Aro GG #MC48",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 19775,
    "priceCents": 31700,
    "image": "NP-112.webp"
  },
  {
    "id": "NP-113",
    "name": "Pingente Estrela de Davi Aro GG #MC47",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 15575,
    "priceCents": 25000,
    "image": "NP-113.webp"
  },
  {
    "id": "NP-114",
    "name": "Pingente Cristo Redentor #MC53",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 3850,
    "priceCents": 6200,
    "image": "NP-114.webp"
  },
  {
    "id": "NP-115",
    "name": "Pingente Manuscrito Jesus #MC57",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 2275,
    "priceCents": 3700,
    "image": "NP-115.webp"
  },
  {
    "id": "NP-116",
    "name": "Pingente Santos Envelhecido M #MC22",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 4725,
    "priceCents": 7600,
    "image": "NP-116.webp"
  },
  {
    "id": "NP-117",
    "name": "Pingente São Jorge Aro Trabalhado M #MC19",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 6125,
    "priceCents": 9800,
    "image": "NP-117.webp"
  },
  {
    "id": "NP-118",
    "name": "Pingente Cruz da Vida #MC21",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 2975,
    "priceCents": 4800,
    "image": "NP-118.webp"
  },
  {
    "id": "NP-119",
    "name": "Pingente Face de Cristo II G #MC14",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 9800,
    "priceCents": 15700,
    "image": "NP-119.webp"
  },
  {
    "id": "NP-120",
    "name": "Pingente Tio Patinhas M #MC12",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 7875,
    "priceCents": 12600,
    "image": "NP-120.webp"
  },
  {
    "id": "NP-121",
    "name": "Pingente Cruz Roseira #MC09",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 2450,
    "priceCents": 4000,
    "image": "NP-121.webp"
  },
  {
    "id": "NP-122",
    "name": "Pingente Palmeiras M #MC05",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 6475,
    "priceCents": 10400,
    "image": "NP-122.webp"
  },
  {
    "id": "NP-123",
    "name": "Pingente Cifrão M #MC03",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 3150,
    "priceCents": 5100,
    "image": "NP-123.webp"
  },
  {
    "id": "NP-124",
    "name": "Pingente São Jorge Grande #MC18",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 10850,
    "priceCents": 17400,
    "image": "NP-124.webp"
  }
];
