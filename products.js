"use strict";

const CDN = "https://cdn.upcatalogo.com.br/";

// Código, nome, comprimento em cm, preço final em centavos, foto.
// Comprimento 0 identifica pulseira com medida a confirmar.
// Preços originais da Klaf acrescidos de 50%.
// Consulta realizada em 16/09/2026.

const PRODUCT_ROWS = [
  // CORRENTES — 40 CM
  [
    "NP-001",
    "Corrente Italiana Pipoca 1,5 mm",
    40,
    8300,
    "img/sites/3947/2025/07/IMG_20250709_181536-CORR-ESPE-PIPOCA-15MM-40CM-22G-scaled.jpg"
  ],
  [
    "NP-002",
    "Corrente Elo Português 2 mm",
    40,
    8300,
    "img/sites/3947/2025/02/IMG_20250205_173152-elo-portg-50cm-2mm-3g-scaled.jpg"
  ],
  [
    "NP-003",
    "Corrente Veneziana V12",
    40,
    3500,
    "img/sites/3947/2024/09/IMG_20240930_161012-scaled.jpg"
  ],

  // CORRENTES — 45 CM
  [
    "NP-004",
    "Corrente Grume Flat 2 mm",
    45,
    9600,
    "img/sites/3947/2025/10/IMG_20251001_174851-corre-50cm-grume-flat-2mm-31g-masc-scaled.jpg"
  ],
  [
    "NP-005",
    "Corrente Pipoca Envelhecida 3 mm",
    45,
    23300,
    "img/sites/3947/2025/10/IMG_20251002_174310-corre-45cm-pipoca-envelhecida-3mm-62g-esp-scaled.jpg"
  ],
  [
    "NP-006",
    "Corrente Nuvem Diamantada 3 mm",
    45,
    6900,
    "img/sites/3947/2025/10/IMG_20251002_174157-corre-45cm-nuvem-diamantada-3mm-2g-esp-scaled.jpg"
  ],
  [
    "NP-007",
    "Corrente 3 × 1 1,5 mm",
    45,
    6600,
    "img/sites/3947/2025/10/IMG_20251001_175822-corre-45cm-3x1-15mm-2g-masc-scaled.jpg"
  ],
  [
    "NP-008",
    "Corrente Cartie 2 × 5,5 mm",
    45,
    8900,
    "img/sites/3947/2025/10/IMG_20251001_175413-corre-45cm-cartie-2x55mm-27g-masc-scaled.jpg"
  ],
  [
    "NP-009",
    "Corrente Piastrine 2 mm",
    45,
    7900,
    "img/sites/3947/2025/10/IMG_20251001_175119-corre-45cm-piastrine-2mm-24g-masc-scaled.jpg"
  ],
  [
    "NP-010",
    "Corrente Italiana Elo Português 1,2 mm",
    45,
    6400,
    "img/sites/3947/2025/07/IMG_20250709_181816-CORR-ESPE-ELO-PORT-12MM-45CM-17G-scaled.jpg"
  ],
  [
    "NP-011",
    "Corrente Minhoca Italiana 1 mm",
    45,
    10700,
    "img/sites/3947/2025/07/IMG_20250709_180425-CORR-FEM-MINHOCA-1MM-45CM-31G-scaled.jpg"
  ],
  [
    "NP-012",
    "Corrente Italiana Cordão 1,5 mm",
    45,
    15400,
    "img/sites/3947/2025/02/IMG_20250205_173810-cordao-ita-45cm-41g-scaled.jpg"
  ],
  [
    "NP-013",
    "Corrente Piastrine 2,5 mm",
    45,
    11300,
    "img/sites/3947/2025/02/IMG_20250205_173656-piastrine-45cm-2mm-3g-scaled.jpg"
  ],
  [
    "NP-014",
    "Corrente Italiana Rabo de Rato 1 mm",
    45,
    9400,
    "img/sites/3947/2025/02/IMG_20250205_173352-rabo-de-rato-ita-45cm-1mm-25g-scaled.jpg"
  ],
  [
    "NP-015",
    "Corrente Elo Português 2 mm",
    45,
    8600,
    "img/sites/3947/2024/08/elo-portugues-45cm-2mm-25g-1-scaled.jpg"
  ],
  [
    "NP-016",
    "Corrente Veneziana V12",
    45,
    4500,
    "img/sites/3947/2024/09/IMG_20240930_161012-scaled.jpg"
  ],
  [
    "NP-017",
    "Corrente Veneziana V15",
    45,
    6200,
    "img/sites/3947/2024/08/v15-45cm-18g-1-scaled.jpg"
  ],

  // CORRENTES — 50 CM
  [
    "NP-018",
    "Corrente Veneziana 1,8 × 3,8 mm",
    50,
    13400,
    "img/sites/3947/2026/06/IMG_20260605_164925-veneziana-18x38-50cm-39g.jpg"
  ],
  [
    "NP-019",
    "Corrente Veneziana V12",
    50,
    5200,
    "img/sites/3947/2024/09/IMG_20240930_161012-scaled.jpg"
  ],
  [
    "NP-020",
    "Corrente Elo Português F05 2 mm",
    50,
    9700,
    "img/sites/3947/2025/03/IMG_20250318_154656-28g-f05-2mm-50cm-scaled.jpg"
  ],
  [
    "NP-021",
    "Corrente Elo Português 1,9 mm",
    50,
    9000,
    "img/sites/3947/2025/02/IMG_20250205_173152-elo-portg-50cm-2mm-3g-scaled.jpg"
  ],
  [
    "NP-022",
    "Corrente Italiana Cordão Fino 1,5 mm",
    50,
    18000,
    "img/sites/3947/2025/02/IMG_20250205_173058-cordao-ita-50cm-15mm-48g-scaled.jpg"
  ],

  // CORRENTES — 60 CM
  [
    "NP-023",
    "Corrente Veneziana V12",
    60,
    5900,
    "v2/ac9056fc-a9d7-50df-82bd-80f2d7be7716/produtos/0c096ebf-f477-42af-bef9-e9a896e6b23d/800.webp"
  ],
  [
    "NP-024",
    "Corrente Elo Português F05 2 mm",
    60,
    8900,
    "img/sites/3947/2026/06/IMG_20260605_163629-elo-portugues-f05-2mm-60cm-27g-mascu.jpg"
  ],
  [
    "NP-025",
    "Corrente 3 × 1 2 mm",
    60,
    14500,
    "img/sites/3947/2026/04/IMG_20260408_115946.jpg"
  ],
  [
    "NP-026",
    "Corrente Grume 3 mm",
    60,
    21700,
    "img/sites/3947/2026/04/IMG_20260408_115748.jpg"
  ],
  [
    "NP-027",
    "Corrente Cordão Baiano 2 mm",
    60,
    21800,
    "img/sites/3947/2025/10/IMG_20251002_174603-corre-60cm-cordao-bahiano-ita-2mm-58g-esp-scaled.jpg"
  ],
  [
    "NP-028",
    "Corrente Minhoca 2 mm",
    60,
    30400,
    "img/sites/3947/2025/10/IMG_20251002_174449-corre-60cm-ita-minhoca-2mm-81g-esp-scaled.jpg"
  ],
  [
    "NP-029",
    "Corrente Grume Flat 4 mm",
    60,
    34500,
    "img/sites/3947/2025/10/IMG_20251001_174530-corre-60cm-grume-flat-4mm-105g-masc-scaled.jpg"
  ],
  [
    "NP-030",
    "Corrente Cartie F05 2 × 4 mm",
    60,
    9700,
    "img/sites/3947/2025/03/IMG_20250318_154508-3g-f05-cartie-2x4mm-60cm-scaled.jpg"
  ],
  [
    "NP-031",
    "Corrente Veneziana V22",
    60,
    13800,
    "img/sites/3947/2025/02/IMG_20250205_172846-v19-60cm-4g-scaled.jpg"
  ],
  [
    "NP-032",
    "Corrente Grume Dupla 3 mm",
    60,
    28000,
    "img/sites/3947/2025/02/IMG_20250205_172745-grume-dupla-60cm-3mm-88g-scaled.jpg"
  ],
  [
    "NP-033",
    "Corrente Veneziana 2 × 5 mm",
    60,
    19100,
    "img/sites/3947/2024/08/70cm-veneziana-A.-2mmx5mm-66g-1-scaled.jpg"
  ],
  [
    "NP-034",
    "Corrente Masculina 3 × 1 1,5 mm",
    60,
    8300,
    "img/sites/3947/2024/09/IMG_20240923_121440-scaled.jpg"
  ],
  [
    "NP-035",
    "Corrente Masculina Grume FA 3 mm",
    60,
    19800,
    "img/sites/3947/2024/09/IMG_20240923_121108-66g-60cm-scaled.jpg"
  ],

  // CORRENTES — 70 CM
  [
    "NP-036",
    "Corrente Veneziana V30",
    70,
    34200,
    "img/sites/3947/2026/06/IMG_20260605_164744-v30-70cm-10g.jpg"
  ],
  [
    "NP-037",
    "Corrente Cartie 2 × 3 mm",
    70,
    24000,
    "img/sites/3947/2026/06/IMG_20260605_163755-cartie-70cm-2x3mm-73g.jpg"
  ],
  [
    "NP-038",
    "Corrente Cartie Elo Oval F05 2 × 4 mm",
    70,
    10900,
    "img/sites/3947/2026/06/IMG_20260605_163908-Cartie-elo-oval-f05-2x4mm-70cm-33g-masc.jpg"
  ],
  [
    "NP-039",
    "Corrente Masculina Cartie 4 × 7 mm",
    70,
    53600,
    "img/sites/3947/2024/05/70CM-CARTIER-35MM-158G-A-scaled.jpg"
  ],
  [
    "NP-040",
    "Corrente Elo Cadeado 2 mm",
    70,
    19800,
    "img/sites/3947/2025/10/IMG_20251001_173921-corre-70cm-elo-cadeado-2mm-6g-masc-scaled.jpg"
  ],
  [
    "NP-041",
    "Corrente V19",
    70,
    11500,
    "img/sites/3947/2025/02/IMG_20250205_172846-v19-60cm-4g-scaled.jpg"
  ],
  [
    "NP-042",
    "Corrente 3 × 1 3 mm",
    70,
    19800,
    "img/sites/3947/2025/02/IMG_20250205_172607-3x1-70cm-3mm-62g-scaled.jpg"
  ],
  [
    "NP-043",
    "Corrente Grume 6,5 mm",
    70,
    97000,
    "img/sites/3947/2025/02/IMG_20250205_172518-grume-70cm-65mm-295g-scaled.jpg"
  ],
  [
    "NP-044",
    "Corrente Grume Dupla 3 mm",
    70,
    34500,
    "img/sites/3947/2025/02/IMG_20250205_172350-grume-dupla-70cm-4mm-105g-scaled.jpg"
  ],
  [
    "NP-045",
    "Corrente Grume 1,5 mm",
    70,
    10900,
    "img/sites/3947/2025/02/IMG_20250205_172210-grume-70cm-15mm-33g-scaled.jpg"
  ],
  [
    "NP-046",
    "Corrente Masculina Grume 7 mm",
    70,
    118600,
    "img/sites/3947/2024/10/IMG_20241002_135816-36.1g-7mm-70cm-scaled.jpg"
  ],
  [
    "NP-047",
    "Corrente Masculina 3 × 1 2 mm",
    70,
    16500,
    "img/sites/3947/2024/08/70C-3X1-2MM-61G-1-scaled.jpg"
  ],
  [
    "NP-048",
    "Corrente Masculina Grume 3 mm",
    70,
    28000,
    "img/sites/3947/2024/08/70cm-grume-3mm-10g-1-scaled.jpg"
  ],
  [
    "NP-049",
    "Corrente Masculina Grume 4 mm",
    70,
    36200,
    "img/sites/3947/2024/08/70cm-grume-4mm-125g-1-scaled.jpg"
  ],
  [
    "NP-050",
    "Corrente Masculina Veneziana 2 × 5 mm",
    70,
    21400,
    "img/sites/3947/2024/08/70cm-veneziana-A.-2mmx5mm-66g-1-scaled.jpg"
  ],
  [
    "NP-051",
    "Corrente Piastrine F. 2 mm",
    70,
    12200,
    "img/sites/3947/2024/05/70CM-PIASTRINE-F-2MM-46G-A-scaled.jpg"
  ],
  [
    "NP-052",
    "Corrente Masculina Cartier 3,5 × 7 mm",
    70,
    51000,
    "img/sites/3947/2024/05/70CM-CARTIER-35MM-158G-A-scaled.jpg"
  ],
  [
    "NP-053",
    "Corrente Masculina 3 × 1 5 mm",
    70,
    52900,
    "img/sites/3947/2024/05/70CM-3X1A-5MM-125G-A-scaled.jpg"
  ],
  [
    "NP-054",
    "Corrente Masculina 3 × 1 4 mm",
    70,
    36200,
    "img/sites/3947/2024/05/70CM-3X1-4MM-135G-A-scaled.jpg"
  ],

  // PULSEIRAS MASCULINAS
  [
    "NP-055",
    "Pulseira Grume Dupla 5 mm",
    0,
    28000,
    "img/sites/3947/2026/06/IMG_20260605_162917-puls-grume-dupla-5mm-85g-masc.jpg"
  ],
  [
    "NP-056",
    "Pulseira Cartie 3 × 5 mm",
    0,
    16800,
    "img/sites/3947/2026/06/IMG_20260605_163107-pulseira-cartie-3x5mm-51g-masc.jpg"
  ],
  [
    "NP-057",
    "Pulseira Cartie 2 × 3 mm",
    0,
    7900,
    "img/sites/3947/2026/06/IMG_20260605_162747-puls-cartie-2x3mm-24g-mascu.jpg"
  ],
  [
    "NP-058",
    "Pulseira Veneziana 2 × 7 mm",
    0,
    5800,
    "img/sites/3947/2025/10/IMG_20251007_172519-pul-mascul-veneziana-2x7mm-3g-masc-scaled.jpg"
  ],
  [
    "NP-059",
    "Pulseira Bracelete Bali Esteira",
    0,
    91500,
    "img/sites/3947/2025/10/IMG_20251007_162229-bracelete-bali-masculino-244g-masc-scaled.jpg"
  ],
  [
    "NP-060",
    "Pulseira Piastrine 2 mm",
    0,
    4600,
    "img/sites/3947/2025/02/IMG_20250206_161015-pul-piastrine-2mm-13g-scaled.jpg"
  ],
  [
    "NP-061",
    "Pulseira Grume Dupla 3 mm",
    0,
    9600,
    "img/sites/3947/2025/02/IMG_20250206_160757-pul-grume-dupla-3mm-32g-scaled.jpg"
  ],
  [
    "NP-062",
    "Pulseira Masculina 3 × 1 Chapa 7 mm",
    0,
    36500,
    "img/sites/3947/2024/10/IMG_20241018_152908-111g-chapa-7mm-scaled.jpg"
  ],
  [
    "NP-063",
    "Pulseira Masculina Grume Chapa 5 mm",
    0,
    25300,
    "img/sites/3947/2024/10/IMG_20241018_152720-123g-chapa-7mm-scaled.jpg"
  ]
];

const PRODUCTS = PRODUCT_ROWS.map(
  ([id, name, length, priceCents, image]) => ({
    id,
    name,
    length,
    priceCents,
    category: length === 0 ? "pulseira" : "corrente",
    image: CDN + image
  })
);
