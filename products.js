"use strict";
// Brincos e pingentes: preço original Klaf + 60%, arredondado para cima ao real inteiro.
// Correntes e pulseiras preservadas. Atualização: 22/09/2026.
const PRODUCTS = [
  {
    "id": "NP-001",
    "name": "Corrente Italiana Pipoca 1,5 mm",
    "length": 40,
    "priceCents": 8300,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/07/IMG_20250709_181536-CORR-ESPE-PIPOCA-15MM-40CM-22G-scaled.jpg"
  },
  {
    "id": "NP-002",
    "name": "Corrente Elo Português 2 mm",
    "length": 40,
    "priceCents": 8300,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/02/IMG_20250205_173152-elo-portg-50cm-2mm-3g-scaled.jpg"
  },
  {
    "id": "NP-003",
    "name": "Corrente Veneziana V12",
    "length": 40,
    "priceCents": 3500,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2024/09/IMG_20240930_161012-scaled.jpg"
  },
  {
    "id": "NP-004",
    "name": "Corrente Grume Flat 2 mm",
    "length": 45,
    "priceCents": 9600,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/10/IMG_20251001_174851-corre-50cm-grume-flat-2mm-31g-masc-scaled.jpg"
  },
  {
    "id": "NP-005",
    "name": "Corrente Pipoca Envelhecida 3 mm",
    "length": 45,
    "priceCents": 23300,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/10/IMG_20251002_174310-corre-45cm-pipoca-envelhecida-3mm-62g-esp-scaled.jpg"
  },
  {
    "id": "NP-006",
    "name": "Corrente Nuvem Diamantada 3 mm",
    "length": 45,
    "priceCents": 6900,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/10/IMG_20251002_174157-corre-45cm-nuvem-diamantada-3mm-2g-esp-scaled.jpg"
  },
  {
    "id": "NP-007",
    "name": "Corrente 3 × 1 1,5 mm",
    "length": 45,
    "priceCents": 6600,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/10/IMG_20251001_175822-corre-45cm-3x1-15mm-2g-masc-scaled.jpg"
  },
  {
    "id": "NP-008",
    "name": "Corrente Cartie 2 × 5,5 mm",
    "length": 45,
    "priceCents": 8900,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/10/IMG_20251001_175413-corre-45cm-cartie-2x55mm-27g-masc-scaled.jpg"
  },
  {
    "id": "NP-009",
    "name": "Corrente Piastrine 2 mm",
    "length": 45,
    "priceCents": 7900,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/10/IMG_20251001_175119-corre-45cm-piastrine-2mm-24g-masc-scaled.jpg"
  },
  {
    "id": "NP-010",
    "name": "Corrente Italiana Elo Português 1,2 mm",
    "length": 45,
    "priceCents": 6400,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/07/IMG_20250709_181816-CORR-ESPE-ELO-PORT-12MM-45CM-17G-scaled.jpg"
  },
  {
    "id": "NP-011",
    "name": "Corrente Minhoca Italiana 1 mm",
    "length": 45,
    "priceCents": 10700,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/07/IMG_20250709_180425-CORR-FEM-MINHOCA-1MM-45CM-31G-scaled.jpg"
  },
  {
    "id": "NP-012",
    "name": "Corrente Italiana Cordão 1,5 mm",
    "length": 45,
    "priceCents": 15400,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/02/IMG_20250205_173810-cordao-ita-45cm-41g-scaled.jpg"
  },
  {
    "id": "NP-013",
    "name": "Corrente Piastrine 2,5 mm",
    "length": 45,
    "priceCents": 11300,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/02/IMG_20250205_173656-piastrine-45cm-2mm-3g-scaled.jpg"
  },
  {
    "id": "NP-014",
    "name": "Corrente Italiana Rabo de Rato 1 mm",
    "length": 45,
    "priceCents": 9400,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/02/IMG_20250205_173352-rabo-de-rato-ita-45cm-1mm-25g-scaled.jpg"
  },
  {
    "id": "NP-015",
    "name": "Corrente Elo Português 2 mm",
    "length": 45,
    "priceCents": 8600,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2024/08/elo-portugues-45cm-2mm-25g-1-scaled.jpg"
  },
  {
    "id": "NP-016",
    "name": "Corrente Veneziana V12",
    "length": 45,
    "priceCents": 4500,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2024/09/IMG_20240930_161012-scaled.jpg"
  },
  {
    "id": "NP-017",
    "name": "Corrente Veneziana V15",
    "length": 45,
    "priceCents": 6200,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2024/08/v15-45cm-18g-1-scaled.jpg"
  },
  {
    "id": "NP-018",
    "name": "Corrente Veneziana 1,8 × 3,8 mm",
    "length": 50,
    "priceCents": 13400,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2026/06/IMG_20260605_164925-veneziana-18x38-50cm-39g.jpg"
  },
  {
    "id": "NP-019",
    "name": "Corrente Veneziana V12",
    "length": 50,
    "priceCents": 5200,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2024/09/IMG_20240930_161012-scaled.jpg"
  },
  {
    "id": "NP-020",
    "name": "Corrente Elo Português F05 2 mm",
    "length": 50,
    "priceCents": 9700,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/03/IMG_20250318_154656-28g-f05-2mm-50cm-scaled.jpg"
  },
  {
    "id": "NP-021",
    "name": "Corrente Elo Português 1,9 mm",
    "length": 50,
    "priceCents": 9000,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/02/IMG_20250205_173152-elo-portg-50cm-2mm-3g-scaled.jpg"
  },
  {
    "id": "NP-022",
    "name": "Corrente Italiana Cordão Fino 1,5 mm",
    "length": 50,
    "priceCents": 18000,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/02/IMG_20250205_173058-cordao-ita-50cm-15mm-48g-scaled.jpg"
  },
  {
    "id": "NP-023",
    "name": "Corrente Veneziana V12",
    "length": 60,
    "priceCents": 5900,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/v2/ac9056fc-a9d7-50df-82bd-80f2d7be7716/produtos/0c096ebf-f477-42af-bef9-e9a896e6b23d/800.webp"
  },
  {
    "id": "NP-024",
    "name": "Corrente Elo Português F05 2 mm",
    "length": 60,
    "priceCents": 8900,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2026/06/IMG_20260605_163629-elo-portugues-f05-2mm-60cm-27g-mascu.jpg"
  },
  {
    "id": "NP-025",
    "name": "Corrente 3 × 1 2 mm",
    "length": 60,
    "priceCents": 14500,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2026/04/IMG_20260408_115946.jpg"
  },
  {
    "id": "NP-026",
    "name": "Corrente Grume 3 mm",
    "length": 60,
    "priceCents": 21700,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2026/04/IMG_20260408_115748.jpg"
  },
  {
    "id": "NP-027",
    "name": "Corrente Cordão Baiano 2 mm",
    "length": 60,
    "priceCents": 21800,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/10/IMG_20251002_174603-corre-60cm-cordao-bahiano-ita-2mm-58g-esp-scaled.jpg"
  },
  {
    "id": "NP-028",
    "name": "Corrente Minhoca 2 mm",
    "length": 60,
    "priceCents": 30400,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/10/IMG_20251002_174449-corre-60cm-ita-minhoca-2mm-81g-esp-scaled.jpg"
  },
  {
    "id": "NP-029",
    "name": "Corrente Grume Flat 4 mm",
    "length": 60,
    "priceCents": 34500,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/10/IMG_20251001_174530-corre-60cm-grume-flat-4mm-105g-masc-scaled.jpg"
  },
  {
    "id": "NP-030",
    "name": "Corrente Cartie F05 2 × 4 mm",
    "length": 60,
    "priceCents": 9700,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/03/IMG_20250318_154508-3g-f05-cartie-2x4mm-60cm-scaled.jpg"
  },
  {
    "id": "NP-031",
    "name": "Corrente Veneziana V22",
    "length": 60,
    "priceCents": 13800,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/02/IMG_20250205_172846-v19-60cm-4g-scaled.jpg"
  },
  {
    "id": "NP-032",
    "name": "Corrente Grume Dupla 3 mm",
    "length": 60,
    "priceCents": 28000,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/02/IMG_20250205_172745-grume-dupla-60cm-3mm-88g-scaled.jpg"
  },
  {
    "id": "NP-033",
    "name": "Corrente Veneziana 2 × 5 mm",
    "length": 60,
    "priceCents": 19100,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2024/08/70cm-veneziana-A.-2mmx5mm-66g-1-scaled.jpg"
  },
  {
    "id": "NP-034",
    "name": "Corrente Masculina 3 × 1 1,5 mm",
    "length": 60,
    "priceCents": 8300,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2024/09/IMG_20240923_121440-scaled.jpg"
  },
  {
    "id": "NP-035",
    "name": "Corrente Masculina Grume FA 3 mm",
    "length": 60,
    "priceCents": 19800,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2024/09/IMG_20240923_121108-66g-60cm-scaled.jpg"
  },
  {
    "id": "NP-036",
    "name": "Corrente Veneziana V30",
    "length": 70,
    "priceCents": 34200,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2026/06/IMG_20260605_164744-v30-70cm-10g.jpg"
  },
  {
    "id": "NP-037",
    "name": "Corrente Cartie 2 × 3 mm",
    "length": 70,
    "priceCents": 24000,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2026/06/IMG_20260605_163755-cartie-70cm-2x3mm-73g.jpg"
  },
  {
    "id": "NP-038",
    "name": "Corrente Cartie Elo Oval F05 2 × 4 mm",
    "length": 70,
    "priceCents": 10900,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2026/06/IMG_20260605_163908-Cartie-elo-oval-f05-2x4mm-70cm-33g-masc.jpg"
  },
  {
    "id": "NP-039",
    "name": "Corrente Masculina Cartie 4 × 7 mm",
    "length": 70,
    "priceCents": 53600,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2024/05/70CM-CARTIER-35MM-158G-A-scaled.jpg"
  },
  {
    "id": "NP-040",
    "name": "Corrente Elo Cadeado 2 mm",
    "length": 70,
    "priceCents": 19800,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/10/IMG_20251001_173921-corre-70cm-elo-cadeado-2mm-6g-masc-scaled.jpg"
  },
  {
    "id": "NP-041",
    "name": "Corrente V19",
    "length": 70,
    "priceCents": 11500,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/02/IMG_20250205_172846-v19-60cm-4g-scaled.jpg"
  },
  {
    "id": "NP-042",
    "name": "Corrente 3 × 1 3 mm",
    "length": 70,
    "priceCents": 19800,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/02/IMG_20250205_172607-3x1-70cm-3mm-62g-scaled.jpg"
  },
  {
    "id": "NP-043",
    "name": "Corrente Grume 6,5 mm",
    "length": 70,
    "priceCents": 97000,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/02/IMG_20250205_172518-grume-70cm-65mm-295g-scaled.jpg"
  },
  {
    "id": "NP-044",
    "name": "Corrente Grume Dupla 3 mm",
    "length": 70,
    "priceCents": 34500,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/02/IMG_20250205_172350-grume-dupla-70cm-4mm-105g-scaled.jpg"
  },
  {
    "id": "NP-045",
    "name": "Corrente Grume 1,5 mm",
    "length": 70,
    "priceCents": 10900,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/02/IMG_20250205_172210-grume-70cm-15mm-33g-scaled.jpg"
  },
  {
    "id": "NP-046",
    "name": "Corrente Masculina Grume 7 mm",
    "length": 70,
    "priceCents": 118600,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2024/10/IMG_20241002_135816-36.1g-7mm-70cm-scaled.jpg"
  },
  {
    "id": "NP-047",
    "name": "Corrente Masculina 3 × 1 2 mm",
    "length": 70,
    "priceCents": 16500,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2024/08/70C-3X1-2MM-61G-1-scaled.jpg"
  },
  {
    "id": "NP-048",
    "name": "Corrente Masculina Grume 3 mm",
    "length": 70,
    "priceCents": 28000,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2024/08/70cm-grume-3mm-10g-1-scaled.jpg"
  },
  {
    "id": "NP-049",
    "name": "Corrente Masculina Grume 4 mm",
    "length": 70,
    "priceCents": 36200,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2024/08/70cm-grume-4mm-125g-1-scaled.jpg"
  },
  {
    "id": "NP-050",
    "name": "Corrente Masculina Veneziana 2 × 5 mm",
    "length": 70,
    "priceCents": 21400,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2024/08/70cm-veneziana-A.-2mmx5mm-66g-1-scaled.jpg"
  },
  {
    "id": "NP-051",
    "name": "Corrente Piastrine F. 2 mm",
    "length": 70,
    "priceCents": 12200,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2024/05/70CM-PIASTRINE-F-2MM-46G-A-scaled.jpg"
  },
  {
    "id": "NP-052",
    "name": "Corrente Masculina Cartier 3,5 × 7 mm",
    "length": 70,
    "priceCents": 51000,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2024/05/70CM-CARTIER-35MM-158G-A-scaled.jpg"
  },
  {
    "id": "NP-053",
    "name": "Corrente Masculina 3 × 1 5 mm",
    "length": 70,
    "priceCents": 52900,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2024/05/70CM-3X1A-5MM-125G-A-scaled.jpg"
  },
  {
    "id": "NP-054",
    "name": "Corrente Masculina 3 × 1 4 mm",
    "length": 70,
    "priceCents": 36200,
    "category": "corrente",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2024/05/70CM-3X1-4MM-135G-A-scaled.jpg"
  },
  {
    "id": "NP-055",
    "name": "Pulseira Grume Dupla 5 mm",
    "length": 0,
    "priceCents": 28000,
    "category": "pulseira",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2026/06/IMG_20260605_162917-puls-grume-dupla-5mm-85g-masc.jpg"
  },
  {
    "id": "NP-056",
    "name": "Pulseira Cartie 3 × 5 mm",
    "length": 0,
    "priceCents": 16800,
    "category": "pulseira",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2026/06/IMG_20260605_163107-pulseira-cartie-3x5mm-51g-masc.jpg"
  },
  {
    "id": "NP-057",
    "name": "Pulseira Cartie 2 × 3 mm",
    "length": 0,
    "priceCents": 7900,
    "category": "pulseira",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2026/06/IMG_20260605_162747-puls-cartie-2x3mm-24g-mascu.jpg"
  },
  {
    "id": "NP-058",
    "name": "Pulseira Veneziana 2 × 7 mm",
    "length": 0,
    "priceCents": 5800,
    "category": "pulseira",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/10/IMG_20251007_172519-pul-mascul-veneziana-2x7mm-3g-masc-scaled.jpg"
  },
  {
    "id": "NP-059",
    "name": "Pulseira Bracelete Bali Esteira",
    "length": 0,
    "priceCents": 91500,
    "category": "pulseira",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/10/IMG_20251007_162229-bracelete-bali-masculino-244g-masc-scaled.jpg"
  },
  {
    "id": "NP-060",
    "name": "Pulseira Piastrine 2 mm",
    "length": 0,
    "priceCents": 4600,
    "category": "pulseira",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/02/IMG_20250206_161015-pul-piastrine-2mm-13g-scaled.jpg"
  },
  {
    "id": "NP-061",
    "name": "Pulseira Grume Dupla 3 mm",
    "length": 0,
    "priceCents": 9600,
    "category": "pulseira",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/02/IMG_20250206_160757-pul-grume-dupla-3mm-32g-scaled.jpg"
  },
  {
    "id": "NP-062",
    "name": "Pulseira Masculina 3 × 1 Chapa 7 mm",
    "length": 0,
    "priceCents": 36500,
    "category": "pulseira",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2024/10/IMG_20241018_152908-111g-chapa-7mm-scaled.jpg"
  },
  {
    "id": "NP-063",
    "name": "Pulseira Masculina Grume Chapa 5 mm",
    "length": 0,
    "priceCents": 25300,
    "category": "pulseira",
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2024/10/IMG_20241018_152720-123g-chapa-7mm-scaled.jpg"
  },
  {
    "id": "NP-064",
    "name": "Brinco Zircônia Redonda 2 mm",
    "length": 0,
    "category": "brinco",
    "originalPriceCents": 477,
    "priceCents": 800,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/12/IMG_20251125_084030-scaled.jpg"
  },
  {
    "id": "NP-065",
    "name": "Brinco Zircônia Redonda 3 mm",
    "length": 0,
    "category": "brinco",
    "originalPriceCents": 600,
    "priceCents": 1000,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/12/IMG_20251125_083831-scaled.jpg"
  },
  {
    "id": "NP-066",
    "name": "Brinco Zircônia Redonda 4 mm",
    "length": 0,
    "category": "brinco",
    "originalPriceCents": 665,
    "priceCents": 1100,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/12/IMG_20251125_083713-scaled.jpg"
  },
  {
    "id": "NP-067",
    "name": "Brinco Zircônia Redonda 5 mm",
    "length": 0,
    "category": "brinco",
    "originalPriceCents": 908,
    "priceCents": 1500,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/12/IMG_20251125_083541-scaled.jpg"
  },
  {
    "id": "NP-068",
    "name": "Brinco Zircônia Redonda 6 mm",
    "length": 0,
    "category": "brinco",
    "originalPriceCents": 999,
    "priceCents": 1600,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/12/IMG_20251125_083425-scaled.jpg"
  },
  {
    "id": "NP-069",
    "name": "Brinco Zircônia Redonda 7 mm",
    "length": 0,
    "category": "brinco",
    "originalPriceCents": 1330,
    "priceCents": 2200,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/12/IMG_20251125_083256-scaled.jpg"
  },
  {
    "id": "NP-070",
    "name": "Brinco Zircônia Redonda 8 mm",
    "length": 0,
    "category": "brinco",
    "originalPriceCents": 1480,
    "priceCents": 2400,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/12/IMG_20251125_083142-scaled.jpg"
  },
  {
    "id": "NP-071",
    "name": "Brinco Zircônia Redonda 9 mm",
    "length": 0,
    "category": "brinco",
    "originalPriceCents": 1978,
    "priceCents": 3200,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/12/IMG_20251125_083042-scaled.jpg"
  },
  {
    "id": "NP-072",
    "name": "Brinco Zircônia Redonda 10 mm",
    "length": 0,
    "category": "brinco",
    "originalPriceCents": 2109,
    "priceCents": 3400,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/12/IMG_20251125_082811-scaled.jpg"
  },
  {
    "id": "NP-073",
    "name": "Brinco Zircônia Redonda 12 mm",
    "length": 0,
    "category": "brinco",
    "originalPriceCents": 3952,
    "priceCents": 6400,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/12/IMG_20251125_082541-scaled.jpg"
  },
  {
    "id": "NP-074",
    "name": "Pingente Crucifixo Trabalhado 2x1 cm",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 1883,
    "priceCents": 3100,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2026/07/IMG_20260605_155626.jpg"
  },
  {
    "id": "NP-075",
    "name": "Pingente Crucifixo Grande INRI",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 2152,
    "priceCents": 3500,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2026/07/IMG_20260605_155747.jpg"
  },
  {
    "id": "NP-076",
    "name": "Pingente Cruz Pequena INRI",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 807,
    "priceCents": 1300,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2026/07/IMG_20260605_155712.jpg"
  },
  {
    "id": "NP-077",
    "name": "Pingente Cruz Borda Trabalhada 2x1 cm",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 807,
    "priceCents": 1300,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2026/07/IMG_20260605_155813.jpg"
  },
  {
    "id": "NP-078",
    "name": "Pingente Estrela de Davi 6 Pontas 1,6 cm",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 1076,
    "priceCents": 1800,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2026/06/IMG_20260605_155131.jpg"
  },
  {
    "id": "NP-079",
    "name": "Pingente Medalha Oval São Jorge 1,5 cm",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 4573,
    "priceCents": 7400,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2026/06/IMG_20260605_141220.jpg"
  },
  {
    "id": "NP-080",
    "name": "Pingente Medalha Oval São Miguel Arcanjo 1,5 cm",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 5111,
    "priceCents": 8200,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2026/06/IMG_20260605_140756.jpg"
  },
  {
    "id": "NP-081",
    "name": "Pingente Medalha Redonda São Bento Frente e Verso 2,5 cm",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 12374,
    "priceCents": 19800,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2026/06/IMG_20260605_140431.jpg"
  },
  {
    "id": "NP-082",
    "name": "Pingente Medalha Redonda São Bento Frente e Verso 2 cm",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 7532,
    "priceCents": 12100,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2026/06/IMG_20260605_140331.jpg"
  },
  {
    "id": "NP-083",
    "name": "Pingente Medalha Redonda São Bento Frente e Verso 1,5 cm",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 2690,
    "priceCents": 4400,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2026/06/IMG_20260605_140156.jpg"
  },
  {
    "id": "NP-084",
    "name": "Pingente Medalha Redonda São Bento Frente e Verso 1 cm",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 1614,
    "priceCents": 2600,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2026/06/IMG_20260605_140051.jpg"
  },
  {
    "id": "NP-085",
    "name": "Pingente Placa Redonda São Jorge Vazada 1,5 cm",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 2152,
    "priceCents": 3500,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2026/06/IMG_20260605_135924.jpg"
  },
  {
    "id": "NP-086",
    "name": "Pingente Cruz Palito 2 cm #PIN-J-45",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 753,
    "priceCents": 1300,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/09/IMG_20250819_130329-PING-CRUZ-PALITO-2CM-03G-scaled.jpg"
  },
  {
    "id": "NP-087",
    "name": "Pingente Crucifixo Borda Quadrada #MC82",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 7000,
    "priceCents": 11200,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/06/IMG_20250510_162502-scaled.jpg"
  },
  {
    "id": "NP-088",
    "name": "Pingente Cruz Média Fios Meio #MC81",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 10850,
    "priceCents": 17400,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/06/IMG_20250510_162414-62g-55cm-scaled.jpg"
  },
  {
    "id": "NP-089",
    "name": "Pingente Crucifixo Borda Vazada #MC85",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 5775,
    "priceCents": 9300,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/06/IMG_20250510_162310-33g-35cm-scaled.jpg"
  },
  {
    "id": "NP-090",
    "name": "Pingente Cruz Grande Fios Meio #MC80",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 14000,
    "priceCents": 22400,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/05/IMG_20250510_162211-8g-65cm-scaled.jpg"
  },
  {
    "id": "NP-091",
    "name": "Pingente Cruz Borda Fosca #MC86",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 4200,
    "priceCents": 6800,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/05/IMG_20250510_161929-24g-35cm-scaled.jpg"
  },
  {
    "id": "NP-092",
    "name": "Pingente Cruz Média Vazada #MC84",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 5425,
    "priceCents": 8700,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/05/IMG_20250510_161720-31g-35cm-scaled.jpg"
  },
  {
    "id": "NP-093",
    "name": "Pingente Placa Bandeja M #PIN-A02",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 6456,
    "priceCents": 10400,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/04/IMG_20250409_164540-scaled.jpg"
  },
  {
    "id": "NP-094",
    "name": "Pingente Placa 1,4x1 #PIN-A06",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 2152,
    "priceCents": 3500,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/04/IMG_20250409_164826-scaled.jpg"
  },
  {
    "id": "NP-095",
    "name": "Pingente Placa Oval Borda Cartier #PIN-A03",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 3497,
    "priceCents": 5600,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/04/IMG_20250409_165035-scaled.jpg"
  },
  {
    "id": "NP-096",
    "name": "Pingente Cruz Cubo 3 cm",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 3497,
    "priceCents": 5600,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/04/IMG_20250409_165148-scaled.jpg"
  },
  {
    "id": "NP-097",
    "name": "Pingente Pergaminho #PIN-A01",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 3228,
    "priceCents": 5200,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/04/IMG_20250409_165335-scaled.jpg"
  },
  {
    "id": "NP-098",
    "name": "Pingente Cruz Grande INRI",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 3497,
    "priceCents": 5600,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/04/IMG_20250409_165957-scaled.jpg"
  },
  {
    "id": "NP-099",
    "name": "Pingente Cruz Palito 3 cm",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 1883,
    "priceCents": 3100,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/04/IMG_20250409_170313-scaled.jpg"
  },
  {
    "id": "NP-100",
    "name": "Pingente Estrela de Davi Vazada com Aro",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 1883,
    "priceCents": 3100,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/04/IMG_20250409_170359-scaled.jpg"
  },
  {
    "id": "NP-101",
    "name": "Pingente Cifrão P #MC52",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 1925,
    "priceCents": 3100,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/02/IMG_20250208_155226-ping-cifrao-11g-scaled.jpg"
  },
  {
    "id": "NP-102",
    "name": "Pingente São Jorge Aro Oval M #MC44",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 5425,
    "priceCents": 8700,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/02/IMG_20250208_155159-Ping-sao-jorge-31g-scaled.jpg"
  },
  {
    "id": "NP-103",
    "name": "Pingente Face de Cristo G #MC32",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 18375,
    "priceCents": 29400,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/02/IMG_20250208_154721-ping-face-105g-scaled.jpg"
  },
  {
    "id": "NP-104",
    "name": "Pingente Santos G #MC65",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 10675,
    "priceCents": 17100,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/02/IMG_20250208_154541-ping-santos-61g-scaled.jpg"
  },
  {
    "id": "NP-105",
    "name": "Pingente Cruz Pontas Vazadas G #MC50",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 13475,
    "priceCents": 21600,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/02/IMG_20250208_154330-ping-cruz-77g-scaled.jpg"
  },
  {
    "id": "NP-106",
    "name": "Pingente Oakley P #MC37",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 1575,
    "priceCents": 2600,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/02/IMG_20250208_154250-ping-okley-09g-scaled.jpg"
  },
  {
    "id": "NP-107",
    "name": "Pingente Quiksilver #MC38",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 3325,
    "priceCents": 5400,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/02/IMG_20250208_154219-ping-quiksilver-19g-scaled.jpg"
  },
  {
    "id": "NP-108",
    "name": "Pingente Face de Cristo (verso) #MC39",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 2975,
    "priceCents": 4800,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/02/IMG_20250208_154119-ping-face-cristo-17g-scaled.jpg"
  },
  {
    "id": "NP-109",
    "name": "Pingente Oakley M #MC42",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 4025,
    "priceCents": 6500,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/02/IMG_20250208_154027-ping-okley-23g-scaled.jpg"
  },
  {
    "id": "NP-110",
    "name": "Pingente Medalha São Jorge Oval M #MC43",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 5425,
    "priceCents": 8700,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/02/IMG_20250208_153946-ping-medalha-sao-jorge-31g-scaled.jpg"
  },
  {
    "id": "NP-111",
    "name": "Pingente Fé G #MC45",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 4900,
    "priceCents": 7900,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/02/IMG_20250208_153846-ping-fe-28g-scaled.jpg"
  },
  {
    "id": "NP-112",
    "name": "Pingente São Jorge Aro GG #MC48",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 19775,
    "priceCents": 31700,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/02/IMG_20250208_153752-ping-sao-jorge-113g-scaled.jpg"
  },
  {
    "id": "NP-113",
    "name": "Pingente Estrela de Davi Aro GG #MC47",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 15575,
    "priceCents": 25000,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/02/IMG_20250208_153722-ping-estrela-davi-89g-scaled.jpg"
  },
  {
    "id": "NP-114",
    "name": "Pingente Cristo Redentor #MC53",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 3850,
    "priceCents": 6200,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/02/IMG_20250208_153100-ping-cristo-redentor-22g-scaled.jpg"
  },
  {
    "id": "NP-115",
    "name": "Pingente Manuscrito Jesus #MC57",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 2275,
    "priceCents": 3700,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/02/IMG_20250208_152933-ping-jesus-13g-scaled.jpg"
  },
  {
    "id": "NP-116",
    "name": "Pingente Santos Envelhecido M #MC22",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 4725,
    "priceCents": 7600,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/02/IMG_20250208_152756-ping-santos-27g-scaled.jpg"
  },
  {
    "id": "NP-117",
    "name": "Pingente São Jorge Aro Trabalhado M #MC19",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 6125,
    "priceCents": 9800,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/02/IMG_20250208_152648-ping-sao-jorge-35g-scaled.jpg"
  },
  {
    "id": "NP-118",
    "name": "Pingente Cruz da Vida #MC21",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 2975,
    "priceCents": 4800,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/02/IMG_20250208_152613-ping-cruz-da-vida-17g-scaled.jpg"
  },
  {
    "id": "NP-119",
    "name": "Pingente Face de Cristo II G #MC14",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 9800,
    "priceCents": 15700,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/02/IMG_20250208_152319-ping-face-de-cristo-56g-scaled.jpg"
  },
  {
    "id": "NP-120",
    "name": "Pingente Tio Patinhas M #MC12",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 7875,
    "priceCents": 12600,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/02/IMG_20250208_152136-ping-tio-patinhas-45g-scaled.jpg"
  },
  {
    "id": "NP-121",
    "name": "Pingente Cruz Roseira #MC09",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 2450,
    "priceCents": 4000,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/02/IMG_20250208_151847-ping-cruz-roseira-14g-scaled.jpg"
  },
  {
    "id": "NP-122",
    "name": "Pingente Palmeiras M #MC05",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 6475,
    "priceCents": 10400,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/02/IMG_20250208_151647-ping-palmeiras-37g-scaled.jpg"
  },
  {
    "id": "NP-123",
    "name": "Pingente Cifrão M #MC03",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 3150,
    "priceCents": 5100,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/02/IMG_20250208_151623-ping-cifrao-18g-scaled.jpg"
  },
  {
    "id": "NP-124",
    "name": "Pingente São Jorge Grande #MC18",
    "length": 0,
    "category": "pingente",
    "originalPriceCents": 10850,
    "priceCents": 17400,
    "image": "https://cdn.upcatalogo.com.br/img/sites/3947/2025/02/IMG_20250208_151449-ping-sao-jorge-62g-scaled.jpg"
  }
];
