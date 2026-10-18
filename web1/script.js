const products = [
  {n:1,featured:true,cat:'honey',name:'Multi-Colour Multi-Nectar Honey',price:'£16',size:'215g',desc:'Our signature product. Pure, natural, and unpasteurised honey made from a variety of flowers. Rich in natural colour and flavour, and full of character.'},

  {n:2,cat:'honey',name:'Honeycomb of Multi-Colour Multi-Nectar Honey',price:'£16',size:'215g',desc:'Our pure, natural, and unpasteurised Multi-Colour Multi-Nectar honey. Presented with raw, hand-cut honeycomb. Raw comb keeps honey’s natural enzymes and pollen, and the wax is safe to chew.'},

  {n:3,cat:'blackseed',name:'Black Seed Infused Honey',price:'£16',size:'215g',desc:'Our Multi-Colour Multi-Nectar honey infused with Ethiopian black seed (Nigella sativa). A distinct combination of two treasured natural ingredients.'},

  {n:4,cat:'honey',name:'Spanish Acacia Honey',price:'£16',size:'215g',desc:'Delicate, naturally sweet, and unpasteurised Spanish Acacia honey. A delicious, natural alternative to refined sugar. Light and slow to crystallise, it offers natural energy and antioxidants in every spoonful.'},

  {n:5,cat:'honey',name:'Honeycomb in Spanish Acacia Honey',price:'£16',size:'215g',desc:'Our delicate, naturally sweet, and unpasteurised Spanish Acacia Honey. Beautifully presented with hand-cut honeycomb. A delicious, natural alternative to refined sugar with just that little bit extra.'},

  {n:6,cat:'honey',name:'Spanish Lavender Honey',price:'£16',size:'215g',desc:'Floral, fragrant and full of flavour. A distinct honey with lavender notes. Traditionally enjoyed in a warm drink in the evening, it provides natural energy along with the antioxidants found in honey.'},

  {n:7,cat:'honey',name:'Spanish Rosemary Honey',price:'£16',size:'215g',desc:'A delicately sweet gourmet honey with subtle herbal notes. Rosemary brings a unique undertone to our delicious honey. Like all honey, it contains natural antioxidants and makes a lovely alternative to refined sugar.'},

  {n:8,cat:'honey',name:'Spanish Wild Thyme Honey',price:'£16',size:'215g',desc:'Smooth and sweet honey with subtle herbal, floral, and distinct phenolic notes. A hint of thyme in every taste. Thyme has a long tradition in ancient medicine. Use a spoonful in warm water.'},

  {n:9,featured:true,cat:'blackseed',name:'Ethiopian Black Seed Oil',price:'£16',size:'100ml',desc:'Cold-pressed from Nigella sativa seeds, our black seed oil is sourced from Ethiopia. Natural and unfiltered, without additives or preservatives. Boosts immunity and promotes good health.'},

  {n:10,cat:'blackseed',name:'Ethiopian Black Seeds',price:'£10',size:'100g',offer:'2 for £16',desc:'Carefully selected whole black seeds (Nigella sativa) of the highest quality. Boost immunity with long-term use. Contain thymoquinone with anti-inflammatory, antioxidant and respiratory relief properties.'},

  {n:11,cat:'',name:'Honeybee Pollen',price:'£10',size:'100g',offer:'2 for £16',desc:'Pollen collected by local English honeybees. High in fibre. Full of vitamins, minerals, and antioxidants. A teaspoon everyday brings the natural power of pollen and propolis into your diet.'},

  {n:12,cat:'honey',name:'Hand-Cut Honeycomb',price:'£10',size:'185–227g',offer:'2 for £16',desc:'Natural and unpasteurised honeycomb. Enjoy real honey in its most natural form. Raw honeycomb keeps honey’s natural enzymes and pollen. Enjoy it with cheese or yoghurt, or chew the wax like a natural gum.'},

  {n:13,featured:true,cat:'dates',name:'Ajwa Dates',price:'£10',size:'500g',desc:'Delicious Ajwa dates sourced directly from Madinah Munawwarah, The Enlightened City. Decadent, soft, and renowned for their distinctive taste.'}
];

// product tiles: a pattern per product kind, with the origin where we know it
const THUMB_SPRITE = `<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
<linearGradient id="ptHoney" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFD667"/><stop offset="0.55" stop-color="#EDA920"/><stop offset="1" stop-color="#B8700A"/></linearGradient>
<radialGradient id="ptWax" cx="36%" cy="28%" r="85%"><stop offset="0" stop-color="#FFE9A0"/><stop offset="0.6" stop-color="#F2B233"/><stop offset="1" stop-color="#C7811A"/></radialGradient>
<linearGradient id="ptDate" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#C9803A"/><stop offset="0.55" stop-color="#8A431A"/><stop offset="1" stop-color="#4A1E08"/></linearGradient>
<linearGradient id="ptAmber" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#D98B2B"/><stop offset="0.5" stop-color="#8F4C12"/><stop offset="1" stop-color="#3A1A06"/></linearGradient>
<radialGradient id="ptSeed" cx="35%" cy="30%" r="75%"><stop offset="0" stop-color="#5A5650"/><stop offset="1" stop-color="#0B0A09"/></radialGradient>
<radialGradient id="ptPollen" cx="35%" cy="30%" r="80%"><stop offset="0" stop-color="#FFE48A"/><stop offset="0.6" stop-color="#F2B233"/><stop offset="1" stop-color="#D4851A"/></radialGradient>
<linearGradient id="ptLeaf" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#2E7A44"/><stop offset="1" stop-color="#6FBF73"/></linearGradient>
<linearGradient id="ptDome" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#47B377"/><stop offset="1" stop-color="#1E6B3E"/></linearGradient><radialGradient id="ptAura" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#7DDBA0" stop-opacity=".5"/><stop offset="1" stop-color="#7DDBA0" stop-opacity="0"/></radialGradient><clipPath id="ptJarClip"><path d="M30 62 C24 66 22 74 22 84 L22 100 C22 108 28 112 36 112 L80 112 C88 112 94 108 94 100 L94 84 C94 74 92 66 86 62 Z"/></clipPath><linearGradient id="ptOil" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#5A6068"/><stop offset="0.45" stop-color="#1C2025"/><stop offset="1" stop-color="#050607"/></linearGradient><linearGradient id="ptSteel" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F1F3F6"/><stop offset="1" stop-color="#9AA3AF"/></linearGradient><linearGradient id="ptWoodV" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E0B170"/><stop offset="0.5" stop-color="#A9703A"/><stop offset="1" stop-color="#6E4220"/></linearGradient><linearGradient id="ptWood" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#E2B97E"/><stop offset="0.55" stop-color="#B98245"/><stop offset="1" stop-color="#7A4A22"/></linearGradient></defs></svg>`;
const ICON = {
  honey: `<svg class="thumb-icon" viewBox="0 0 120 120" aria-hidden="true"><ellipse cx="58" cy="115" rx="38" ry="3.5" fill="#0A213E" opacity=".12"/><path d="M30 62 C24 66 22 74 22 84 L22 100 C22 108 28 112 36 112 L80 112 C88 112 94 108 94 100 L94 84 C94 74 92 66 86 62 Z" fill="url(#ptHoney)" stroke="#9A6410" stroke-width=".9" stroke-linejoin="round"/><ellipse cx="58" cy="60" rx="30" ry="7" fill="#E7B25A" stroke="#9A6410" stroke-width=".9"/><ellipse cx="58" cy="60.5" rx="26" ry="5" fill="#F6C443"/><ellipse class="pa-ripple" cx="58" cy="60.5" rx="8" ry="2" fill="none" stroke="#FFF3C4" stroke-width="1"/><rect x="38" y="80" width="40" height="22" rx="3" fill="#FFF6DC" opacity=".95"/><polygon points="58.0,84.0 64.1,87.5 64.1,94.5 58.0,98.0 51.9,94.5 51.9,87.5" fill="url(#ptWax)" stroke="#9A6410" stroke-width=".8"/><path d="M27 70 C24 82 24 98 27 108" stroke="#FFF3C4" stroke-width="3" stroke-linecap="round" opacity=".55" fill="none"/><g class="pa-strand"><path d="M56.2 48 C56.5 53.6 56.8 58.0 56.7 57.5 L59.3 57.5 C59.2 58.0 59.5 53.6 59.8 48 Z" fill="url(#ptHoney)"/><ellipse cx="58" cy="57.5" rx="3.6" ry="3.4" fill="url(#ptHoney)"/><ellipse cx="56.8" cy="56.3" rx=".9" ry="1.4" fill="#FFF6D2" opacity=".8"/></g><g class="pa-dipper"><polygon points="59.1,25.7 101.7,6.2 100.3,2.8 56.9,20.3" fill="url(#ptWoodV)" stroke="#5A3615" stroke-width=".6" stroke-linejoin="round"/><path d="M57.4 21.5 L100.6 3.6" stroke="#5A3615" stroke-width=".45" opacity=".5"/><path d="M58.0 23.0 L101.0 4.5" stroke="#5A3615" stroke-width=".45" opacity=".5"/><path d="M58.6 24.4 L101.4 5.4" stroke="#5A3615" stroke-width=".45" opacity=".5"/><path d="M57.1 21.0 L100.5 3.3" stroke="#F6D9A8" stroke-width="1" stroke-linecap="round" opacity=".75"/><ellipse cx="89.2" cy="9.6" rx="2.2" ry="3.6" transform="rotate(-23.3 89.2 9.6)" fill="#8A5A2B" stroke="#5A3615" stroke-width=".5"/><ellipse cx="102.4" cy="3.9" rx="2.6" ry="3.4" transform="rotate(-23.3 102.4 3.9)" fill="url(#ptWoodV)" stroke="#5A3615" stroke-width=".6"/><path d="M58 21 C52 21 49.5 27 49.5 33 C49.5 40 52.5 46 56 49 C57 50 59 50 60 49 C63.5 46 66.5 40 66.5 33 C66.5 27 64 21 58 21 Z" fill="url(#ptWood)" stroke="#5A3615" stroke-width=".9" stroke-linejoin="round"/><path d="M51.7 25 Q58 27.6 64.3 25" fill="none" stroke="#4E2E10" stroke-width="1.05" opacity=".8"/><path d="M52.3 26.2 Q58 28.8 63.7 26.2" fill="none" stroke="#EBC58A" stroke-width=".6" opacity=".55"/><path d="M50.3 29 Q58 31.6 65.7 29" fill="none" stroke="#4E2E10" stroke-width="1.05" opacity=".8"/><path d="M50.9 30.2 Q58 32.8 65.1 30.2" fill="none" stroke="#EBC58A" stroke-width=".6" opacity=".55"/><path d="M49.7 33 Q58 35.6 66.3 33" fill="none" stroke="#4E2E10" stroke-width="1.05" opacity=".8"/><path d="M50.3 34.2 Q58 36.8 65.7 34.2" fill="none" stroke="#EBC58A" stroke-width=".6" opacity=".55"/><path d="M49.9 37 Q58 39.6 66.1 37" fill="none" stroke="#4E2E10" stroke-width="1.05" opacity=".8"/><path d="M50.5 38.2 Q58 40.8 65.5 38.2" fill="none" stroke="#EBC58A" stroke-width=".6" opacity=".55"/><path d="M51.1 41 Q58 43.6 64.9 41" fill="none" stroke="#4E2E10" stroke-width="1.05" opacity=".8"/><path d="M51.7 42.2 Q58 44.8 64.3 42.2" fill="none" stroke="#EBC58A" stroke-width=".6" opacity=".55"/><path d="M52.2 25 C51 30 51 37 53.4 44" fill="none" stroke="#F6D9A8" stroke-width="1.8" stroke-linecap="round" opacity=".55"/><ellipse cx="58" cy="22.6" rx="5.4" ry="1.9" fill="#7A4A22" stroke="#5A3615" stroke-width=".6"/><path d="M50.3 37.5 C49.9 42.5 52.6 46.6 56 49.2 C57 50.2 59 50.2 60 49.2 C63.4 46.6 66.1 42.5 65.7 37.5 C64 39.6 62.6 38.8 61.2 40.6 C60 42 59 40.8 58 41.6 C57 40.8 56 42 54.8 40.6 C53.4 38.8 52 39.6 50.3 37.5 Z" fill="url(#ptHoney)" opacity=".96"/><path d="M52.6 42.5 C52.2 45.5 53.2 48 55 49.2" fill="none" stroke="#FFF1B8" stroke-width="1.5" stroke-linecap="round" opacity=".85"/><ellipse cx="62" cy="43.6" rx="1" ry="2.2" fill="#FFF6D2" opacity=".6"/></g></svg>`,
  honeyseed: `<svg class="thumb-icon" viewBox="0 0 120 120" aria-hidden="true"><ellipse cx="58" cy="115" rx="38" ry="3.5" fill="#0A213E" opacity=".12"/><path d="M30 62 C24 66 22 74 22 84 L22 100 C22 108 28 112 36 112 L80 112 C88 112 94 108 94 100 L94 84 C94 74 92 66 86 62 Z" fill="url(#ptHoney)" stroke="#9A6410" stroke-width=".9" stroke-linejoin="round"/><ellipse cx="58" cy="60" rx="30" ry="7" fill="#E7B25A" stroke="#9A6410" stroke-width=".9"/><ellipse cx="58" cy="60.5" rx="26" ry="5" fill="#F6C443"/><ellipse class="pa-ripple" cx="58" cy="60.5" rx="8" ry="2" fill="none" stroke="#FFF3C4" stroke-width="1"/><g clip-path="url(#ptJarClip)"><ellipse class="pa-speck" style="animation-delay:-0.00s" cx="30" cy="72" rx="1" ry="1.7" transform="rotate(78 30 72)" fill="#0B0A09"/><ellipse class="pa-speck" style="animation-delay:-0.55s" cx="40" cy="68" rx="1" ry="1.7" transform="rotate(166 40 68)" fill="#0B0A09"/><ellipse class="pa-speck" style="animation-delay:-1.10s" cx="52" cy="70" rx="1" ry="1.7" transform="rotate(50 52 70)" fill="#0B0A09"/><ellipse class="pa-speck" style="animation-delay:-1.65s" cx="66" cy="69" rx="1" ry="1.7" transform="rotate(29 66 69)" fill="#0B0A09"/><ellipse class="pa-speck" style="animation-delay:-2.20s" cx="78" cy="72" rx="1" ry="1.7" transform="rotate(116 78 72)" fill="#0B0A09"/><ellipse class="pa-speck" style="animation-delay:-2.75s" cx="86" cy="76" rx="1" ry="1.7" transform="rotate(51 86 76)" fill="#0B0A09"/><ellipse class="pa-speck" style="animation-delay:-3.30s" cx="30" cy="86" rx="1" ry="1.7" transform="rotate(85 30 86)" fill="#0B0A09"/><ellipse class="pa-speck" style="animation-delay:-3.85s" cx="34" cy="100" rx="1" ry="1.7" transform="rotate(113 34 100)" fill="#0B0A09"/><ellipse class="pa-speck" style="animation-delay:-4.40s" cx="84" cy="90" rx="1" ry="1.7" transform="rotate(103 84 90)" fill="#0B0A09"/><ellipse class="pa-speck" style="animation-delay:-4.95s" cx="86" cy="102" rx="1" ry="1.7" transform="rotate(12 86 102)" fill="#0B0A09"/><ellipse class="pa-speck" style="animation-delay:-5.50s" cx="72" cy="106" rx="1" ry="1.7" transform="rotate(143 72 106)" fill="#0B0A09"/><ellipse class="pa-speck" style="animation-delay:-6.05s" cx="46" cy="108" rx="1" ry="1.7" transform="rotate(30 46 108)" fill="#0B0A09"/><ellipse class="pa-speck" style="animation-delay:-6.60s" cx="60" cy="110" rx="1" ry="1.7" transform="rotate(68 60 110)" fill="#0B0A09"/><ellipse class="pa-speck" style="animation-delay:-7.15s" cx="26" cy="94" rx="1" ry="1.7" transform="rotate(25 26 94)" fill="#0B0A09"/><ellipse class="pa-speck" style="animation-delay:-7.70s" cx="88" cy="82" rx="1" ry="1.7" transform="rotate(163 88 82)" fill="#0B0A09"/></g><rect x="38" y="80" width="40" height="22" rx="3" fill="#FFF6DC" opacity=".95"/><polygon points="58.0,84.0 64.1,87.5 64.1,94.5 58.0,98.0 51.9,94.5 51.9,87.5" fill="url(#ptWax)" stroke="#9A6410" stroke-width=".8"/><path d="M27 70 C24 82 24 98 27 108" stroke="#FFF3C4" stroke-width="3" stroke-linecap="round" opacity=".55" fill="none"/><g class="pa-strand"><path d="M56.2 48 C56.5 53.6 56.8 58.0 56.7 57.5 L59.3 57.5 C59.2 58.0 59.5 53.6 59.8 48 Z" fill="url(#ptHoney)"/><ellipse cx="58" cy="57.5" rx="3.6" ry="3.4" fill="url(#ptHoney)"/><ellipse cx="56.8" cy="56.3" rx=".9" ry="1.4" fill="#FFF6D2" opacity=".8"/></g><g class="pa-dipper"><polygon points="59.1,25.7 101.7,6.2 100.3,2.8 56.9,20.3" fill="url(#ptWoodV)" stroke="#5A3615" stroke-width=".6" stroke-linejoin="round"/><path d="M57.4 21.5 L100.6 3.6" stroke="#5A3615" stroke-width=".45" opacity=".5"/><path d="M58.0 23.0 L101.0 4.5" stroke="#5A3615" stroke-width=".45" opacity=".5"/><path d="M58.6 24.4 L101.4 5.4" stroke="#5A3615" stroke-width=".45" opacity=".5"/><path d="M57.1 21.0 L100.5 3.3" stroke="#F6D9A8" stroke-width="1" stroke-linecap="round" opacity=".75"/><ellipse cx="89.2" cy="9.6" rx="2.2" ry="3.6" transform="rotate(-23.3 89.2 9.6)" fill="#8A5A2B" stroke="#5A3615" stroke-width=".5"/><ellipse cx="102.4" cy="3.9" rx="2.6" ry="3.4" transform="rotate(-23.3 102.4 3.9)" fill="url(#ptWoodV)" stroke="#5A3615" stroke-width=".6"/><path d="M58 21 C52 21 49.5 27 49.5 33 C49.5 40 52.5 46 56 49 C57 50 59 50 60 49 C63.5 46 66.5 40 66.5 33 C66.5 27 64 21 58 21 Z" fill="url(#ptWood)" stroke="#5A3615" stroke-width=".9" stroke-linejoin="round"/><path d="M51.7 25 Q58 27.6 64.3 25" fill="none" stroke="#4E2E10" stroke-width="1.05" opacity=".8"/><path d="M52.3 26.2 Q58 28.8 63.7 26.2" fill="none" stroke="#EBC58A" stroke-width=".6" opacity=".55"/><path d="M50.3 29 Q58 31.6 65.7 29" fill="none" stroke="#4E2E10" stroke-width="1.05" opacity=".8"/><path d="M50.9 30.2 Q58 32.8 65.1 30.2" fill="none" stroke="#EBC58A" stroke-width=".6" opacity=".55"/><path d="M49.7 33 Q58 35.6 66.3 33" fill="none" stroke="#4E2E10" stroke-width="1.05" opacity=".8"/><path d="M50.3 34.2 Q58 36.8 65.7 34.2" fill="none" stroke="#EBC58A" stroke-width=".6" opacity=".55"/><path d="M49.9 37 Q58 39.6 66.1 37" fill="none" stroke="#4E2E10" stroke-width="1.05" opacity=".8"/><path d="M50.5 38.2 Q58 40.8 65.5 38.2" fill="none" stroke="#EBC58A" stroke-width=".6" opacity=".55"/><path d="M51.1 41 Q58 43.6 64.9 41" fill="none" stroke="#4E2E10" stroke-width="1.05" opacity=".8"/><path d="M51.7 42.2 Q58 44.8 64.3 42.2" fill="none" stroke="#EBC58A" stroke-width=".6" opacity=".55"/><path d="M52.2 25 C51 30 51 37 53.4 44" fill="none" stroke="#F6D9A8" stroke-width="1.8" stroke-linecap="round" opacity=".55"/><ellipse cx="58" cy="22.6" rx="5.4" ry="1.9" fill="#7A4A22" stroke="#5A3615" stroke-width=".6"/><path d="M50.3 37.5 C49.9 42.5 52.6 46.6 56 49.2 C57 50.2 59 50.2 60 49.2 C63.4 46.6 66.1 42.5 65.7 37.5 C64 39.6 62.6 38.8 61.2 40.6 C60 42 59 40.8 58 41.6 C57 40.8 56 42 54.8 40.6 C53.4 38.8 52 39.6 50.3 37.5 Z" fill="url(#ptHoney)" opacity=".96"/><path d="M52.6 42.5 C52.2 45.5 53.2 48 55 49.2" fill="none" stroke="#FFF1B8" stroke-width="1.5" stroke-linecap="round" opacity=".85"/><ellipse cx="62" cy="43.6" rx="1" ry="2.2" fill="#FFF6D2" opacity=".6"/></g></svg>`,
  comb: `<svg class="thumb-icon" viewBox="0 0 120 120" aria-hidden="true"><ellipse cx="60" cy="116" rx="30" ry="3" fill="#0A213E" opacity=".12"/><polygon points="32.3,6.8 45.5,14.4 45.5,29.6 32.3,37.2 19.1,29.6 19.1,14.4" fill="url(#ptWax)" stroke="#8A560C" stroke-width="1" stroke-linejoin="round"/><polygon class="pa-glow" style="animation-delay:0.00s" points="32.3,6.8 45.5,14.4 45.5,29.6 32.3,37.2 19.1,29.6 19.1,14.4" fill="#FFF3C4"/><ellipse cx="27.7" cy="16.4" rx="3.8" ry="1.9" transform="rotate(-30 27.7 16.4)" fill="#FFF3C4" opacity=".6"/><polygon points="60.0,6.8 73.2,14.4 73.2,29.6 60.0,37.2 46.8,29.6 46.8,14.4" fill="url(#ptWax)" stroke="#8A560C" stroke-width="1" stroke-linejoin="round"/><polygon class="pa-glow" style="animation-delay:0.40s" points="60.0,6.8 73.2,14.4 73.2,29.6 60.0,37.2 46.8,29.6 46.8,14.4" fill="#FFF3C4"/><ellipse cx="55.4" cy="16.4" rx="3.8" ry="1.9" transform="rotate(-30 55.4 16.4)" fill="#FFF3C4" opacity=".6"/><polygon points="87.7,6.8 100.9,14.4 100.9,29.6 87.7,37.2 74.5,29.6 74.5,14.4" fill="url(#ptWax)" stroke="#8A560C" stroke-width="1" stroke-linejoin="round"/><polygon class="pa-glow" style="animation-delay:0.80s" points="87.7,6.8 100.9,14.4 100.9,29.6 87.7,37.2 74.5,29.6 74.5,14.4" fill="#FFF3C4"/><ellipse cx="83.1" cy="16.4" rx="3.8" ry="1.9" transform="rotate(-30 83.1 16.4)" fill="#FFF3C4" opacity=".6"/><polygon points="46.1,30.8 59.3,38.4 59.3,53.6 46.1,61.2 33.0,53.6 33.0,38.4" fill="url(#ptWax)" stroke="#8A560C" stroke-width="1" stroke-linejoin="round"/><polygon class="pa-glow" style="animation-delay:1.20s" points="46.1,30.8 59.3,38.4 59.3,53.6 46.1,61.2 33.0,53.6 33.0,38.4" fill="#FFF3C4"/><ellipse cx="41.5" cy="40.4" rx="3.8" ry="1.9" transform="rotate(-30 41.5 40.4)" fill="#FFF3C4" opacity=".6"/><polygon points="73.9,30.8 87.0,38.4 87.0,53.6 73.9,61.2 60.7,53.6 60.7,38.4" fill="url(#ptWax)" stroke="#8A560C" stroke-width="1" stroke-linejoin="round"/><polygon class="pa-glow" style="animation-delay:1.60s" points="73.9,30.8 87.0,38.4 87.0,53.6 73.9,61.2 60.7,53.6 60.7,38.4" fill="#FFF3C4"/><ellipse cx="69.3" cy="40.4" rx="3.8" ry="1.9" transform="rotate(-30 69.3 40.4)" fill="#FFF3C4" opacity=".6"/><polygon points="60.0,54.8 73.2,62.4 73.2,77.6 60.0,85.2 46.8,77.6 46.8,62.4" fill="url(#ptWax)" stroke="#8A560C" stroke-width="1" stroke-linejoin="round"/><polygon class="pa-glow" style="animation-delay:2.00s" points="60.0,54.8 73.2,62.4 73.2,77.6 60.0,85.2 46.8,77.6 46.8,62.4" fill="#FFF3C4"/><ellipse cx="55.4" cy="64.4" rx="3.8" ry="1.9" transform="rotate(-30 55.4 64.4)" fill="#FFF3C4" opacity=".6"/><g class="pa-cstrand"><path d="M58.2 86 C58.5 97.7 58.8 106.8 58.7 109.0 L61.3 109.0 C61.2 106.8 61.5 97.7 61.8 86 Z" fill="url(#ptHoney)"/><ellipse cx="60" cy="109.0" rx="3.6" ry="3.4" fill="url(#ptHoney)"/><ellipse cx="58.8" cy="107.8" rx=".9" ry="1.4" fill="#FFF6D2" opacity=".8"/></g></svg>`,
  seeds: `<svg class="thumb-icon" viewBox="0 0 120 120" aria-hidden="true"><g transform="translate(0 -28)"><ellipse cx="60" cy="110" rx="34" ry="3" fill="#0A213E" opacity=".12"/><g transform="translate(28.1 104.4) rotate(325) scale(1.4)"><path d="M0 -4.6 C2.2 -2.4 3 1 1.7 3.6 C.6 5 -1.5 4.8 -2.3 3.2 C-3 .8 -1.8 -2.4 0 -4.6 Z" fill="url(#ptSeed)"/><ellipse cx="-.6" cy="-1.4" rx=".6" ry="1.3" fill="#9A9792"/></g><g transform="translate(36.2 104.7) rotate(243) scale(1.4)"><path d="M0 -4.6 C2.2 -2.4 3 1 1.7 3.6 C.6 5 -1.5 4.8 -2.3 3.2 C-3 .8 -1.8 -2.4 0 -4.6 Z" fill="url(#ptSeed)"/><ellipse cx="-.6" cy="-1.4" rx=".6" ry="1.3" fill="#9A9792"/></g><g transform="translate(45.0 104.0) rotate(258) scale(1.4)"><path d="M0 -4.6 C2.2 -2.4 3 1 1.7 3.6 C.6 5 -1.5 4.8 -2.3 3.2 C-3 .8 -1.8 -2.4 0 -4.6 Z" fill="url(#ptSeed)"/><ellipse cx="-.6" cy="-1.4" rx=".6" ry="1.3" fill="#9A9792"/></g><g transform="translate(52.3 104.6) rotate(7) scale(1.4)"><path d="M0 -4.6 C2.2 -2.4 3 1 1.7 3.6 C.6 5 -1.5 4.8 -2.3 3.2 C-3 .8 -1.8 -2.4 0 -4.6 Z" fill="url(#ptSeed)"/><ellipse cx="-.6" cy="-1.4" rx=".6" ry="1.3" fill="#9A9792"/></g><g transform="translate(59.7 104.2) rotate(35) scale(1.4)"><path d="M0 -4.6 C2.2 -2.4 3 1 1.7 3.6 C.6 5 -1.5 4.8 -2.3 3.2 C-3 .8 -1.8 -2.4 0 -4.6 Z" fill="url(#ptSeed)"/><ellipse cx="-.6" cy="-1.4" rx=".6" ry="1.3" fill="#9A9792"/></g><g transform="translate(67.1 104.5) rotate(119) scale(1.4)"><path d="M0 -4.6 C2.2 -2.4 3 1 1.7 3.6 C.6 5 -1.5 4.8 -2.3 3.2 C-3 .8 -1.8 -2.4 0 -4.6 Z" fill="url(#ptSeed)"/><ellipse cx="-.6" cy="-1.4" rx=".6" ry="1.3" fill="#9A9792"/></g><g transform="translate(76.0 103.9) rotate(208) scale(1.4)"><path d="M0 -4.6 C2.2 -2.4 3 1 1.7 3.6 C.6 5 -1.5 4.8 -2.3 3.2 C-3 .8 -1.8 -2.4 0 -4.6 Z" fill="url(#ptSeed)"/><ellipse cx="-.6" cy="-1.4" rx=".6" ry="1.3" fill="#9A9792"/></g><g transform="translate(83.6 103.1) rotate(168) scale(1.4)"><path d="M0 -4.6 C2.2 -2.4 3 1 1.7 3.6 C.6 5 -1.5 4.8 -2.3 3.2 C-3 .8 -1.8 -2.4 0 -4.6 Z" fill="url(#ptSeed)"/><ellipse cx="-.6" cy="-1.4" rx=".6" ry="1.3" fill="#9A9792"/></g><g transform="translate(91.3 104.4) rotate(332) scale(1.4)"><path d="M0 -4.6 C2.2 -2.4 3 1 1.7 3.6 C.6 5 -1.5 4.8 -2.3 3.2 C-3 .8 -1.8 -2.4 0 -4.6 Z" fill="url(#ptSeed)"/><ellipse cx="-.6" cy="-1.4" rx=".6" ry="1.3" fill="#9A9792"/></g><g transform="translate(33.6 95.7) rotate(79) scale(1.4)"><path d="M0 -4.6 C2.2 -2.4 3 1 1.7 3.6 C.6 5 -1.5 4.8 -2.3 3.2 C-3 .8 -1.8 -2.4 0 -4.6 Z" fill="url(#ptSeed)"/><ellipse cx="-.6" cy="-1.4" rx=".6" ry="1.3" fill="#9A9792"/></g><g transform="translate(41.0 95.2) rotate(10) scale(1.4)"><path d="M0 -4.6 C2.2 -2.4 3 1 1.7 3.6 C.6 5 -1.5 4.8 -2.3 3.2 C-3 .8 -1.8 -2.4 0 -4.6 Z" fill="url(#ptSeed)"/><ellipse cx="-.6" cy="-1.4" rx=".6" ry="1.3" fill="#9A9792"/></g><g transform="translate(48.2 96.1) rotate(175) scale(1.4)"><path d="M0 -4.6 C2.2 -2.4 3 1 1.7 3.6 C.6 5 -1.5 4.8 -2.3 3.2 C-3 .8 -1.8 -2.4 0 -4.6 Z" fill="url(#ptSeed)"/><ellipse cx="-.6" cy="-1.4" rx=".6" ry="1.3" fill="#9A9792"/></g><g transform="translate(55.9 95.3) rotate(340) scale(1.4)"><path d="M0 -4.6 C2.2 -2.4 3 1 1.7 3.6 C.6 5 -1.5 4.8 -2.3 3.2 C-3 .8 -1.8 -2.4 0 -4.6 Z" fill="url(#ptSeed)"/><ellipse cx="-.6" cy="-1.4" rx=".6" ry="1.3" fill="#9A9792"/></g><g transform="translate(63.0 96.7) rotate(120) scale(1.4)"><path d="M0 -4.6 C2.2 -2.4 3 1 1.7 3.6 C.6 5 -1.5 4.8 -2.3 3.2 C-3 .8 -1.8 -2.4 0 -4.6 Z" fill="url(#ptSeed)"/><ellipse cx="-.6" cy="-1.4" rx=".6" ry="1.3" fill="#9A9792"/></g><g transform="translate(70.8 95.4) rotate(344) scale(1.4)"><path d="M0 -4.6 C2.2 -2.4 3 1 1.7 3.6 C.6 5 -1.5 4.8 -2.3 3.2 C-3 .8 -1.8 -2.4 0 -4.6 Z" fill="url(#ptSeed)"/><ellipse cx="-.6" cy="-1.4" rx=".6" ry="1.3" fill="#9A9792"/></g><g transform="translate(80.4 96.8) rotate(297) scale(1.4)"><path d="M0 -4.6 C2.2 -2.4 3 1 1.7 3.6 C.6 5 -1.5 4.8 -2.3 3.2 C-3 .8 -1.8 -2.4 0 -4.6 Z" fill="url(#ptSeed)"/><ellipse cx="-.6" cy="-1.4" rx=".6" ry="1.3" fill="#9A9792"/></g><g transform="translate(88.3 95.1) rotate(286) scale(1.4)"><path d="M0 -4.6 C2.2 -2.4 3 1 1.7 3.6 C.6 5 -1.5 4.8 -2.3 3.2 C-3 .8 -1.8 -2.4 0 -4.6 Z" fill="url(#ptSeed)"/><ellipse cx="-.6" cy="-1.4" rx=".6" ry="1.3" fill="#9A9792"/></g><g transform="translate(40.5 88.7) rotate(102) scale(1.4)"><path d="M0 -4.6 C2.2 -2.4 3 1 1.7 3.6 C.6 5 -1.5 4.8 -2.3 3.2 C-3 .8 -1.8 -2.4 0 -4.6 Z" fill="url(#ptSeed)"/><ellipse cx="-.6" cy="-1.4" rx=".6" ry="1.3" fill="#9A9792"/></g><g transform="translate(48.0 87.3) rotate(274) scale(1.4)"><path d="M0 -4.6 C2.2 -2.4 3 1 1.7 3.6 C.6 5 -1.5 4.8 -2.3 3.2 C-3 .8 -1.8 -2.4 0 -4.6 Z" fill="url(#ptSeed)"/><ellipse cx="-.6" cy="-1.4" rx=".6" ry="1.3" fill="#9A9792"/></g><g transform="translate(55.9 87.7) rotate(231) scale(1.4)"><path d="M0 -4.6 C2.2 -2.4 3 1 1.7 3.6 C.6 5 -1.5 4.8 -2.3 3.2 C-3 .8 -1.8 -2.4 0 -4.6 Z" fill="url(#ptSeed)"/><ellipse cx="-.6" cy="-1.4" rx=".6" ry="1.3" fill="#9A9792"/></g><g transform="translate(63.9 87.6) rotate(248) scale(1.4)"><path d="M0 -4.6 C2.2 -2.4 3 1 1.7 3.6 C.6 5 -1.5 4.8 -2.3 3.2 C-3 .8 -1.8 -2.4 0 -4.6 Z" fill="url(#ptSeed)"/><ellipse cx="-.6" cy="-1.4" rx=".6" ry="1.3" fill="#9A9792"/></g><g transform="translate(71.5 87.1) rotate(47) scale(1.4)"><path d="M0 -4.6 C2.2 -2.4 3 1 1.7 3.6 C.6 5 -1.5 4.8 -2.3 3.2 C-3 .8 -1.8 -2.4 0 -4.6 Z" fill="url(#ptSeed)"/><ellipse cx="-.6" cy="-1.4" rx=".6" ry="1.3" fill="#9A9792"/></g><g transform="translate(78.8 88.4) rotate(253) scale(1.4)"><path d="M0 -4.6 C2.2 -2.4 3 1 1.7 3.6 C.6 5 -1.5 4.8 -2.3 3.2 C-3 .8 -1.8 -2.4 0 -4.6 Z" fill="url(#ptSeed)"/><ellipse cx="-.6" cy="-1.4" rx=".6" ry="1.3" fill="#9A9792"/></g><g transform="translate(47.3 79.1) rotate(306) scale(1.4)"><path d="M0 -4.6 C2.2 -2.4 3 1 1.7 3.6 C.6 5 -1.5 4.8 -2.3 3.2 C-3 .8 -1.8 -2.4 0 -4.6 Z" fill="url(#ptSeed)"/><ellipse cx="-.6" cy="-1.4" rx=".6" ry="1.3" fill="#9A9792"/></g><g transform="translate(56.6 79.4) rotate(311) scale(1.4)"><path d="M0 -4.6 C2.2 -2.4 3 1 1.7 3.6 C.6 5 -1.5 4.8 -2.3 3.2 C-3 .8 -1.8 -2.4 0 -4.6 Z" fill="url(#ptSeed)"/><ellipse cx="-.6" cy="-1.4" rx=".6" ry="1.3" fill="#9A9792"/></g><g transform="translate(63.5 81.0) rotate(57) scale(1.4)"><path d="M0 -4.6 C2.2 -2.4 3 1 1.7 3.6 C.6 5 -1.5 4.8 -2.3 3.2 C-3 .8 -1.8 -2.4 0 -4.6 Z" fill="url(#ptSeed)"/><ellipse cx="-.6" cy="-1.4" rx=".6" ry="1.3" fill="#9A9792"/></g><g transform="translate(71.1 79.3) rotate(178) scale(1.4)"><path d="M0 -4.6 C2.2 -2.4 3 1 1.7 3.6 C.6 5 -1.5 4.8 -2.3 3.2 C-3 .8 -1.8 -2.4 0 -4.6 Z" fill="url(#ptSeed)"/><ellipse cx="-.6" cy="-1.4" rx=".6" ry="1.3" fill="#9A9792"/></g><g transform="translate(56.8 71.7) rotate(305) scale(1.4)"><path d="M0 -4.6 C2.2 -2.4 3 1 1.7 3.6 C.6 5 -1.5 4.8 -2.3 3.2 C-3 .8 -1.8 -2.4 0 -4.6 Z" fill="url(#ptSeed)"/><ellipse cx="-.6" cy="-1.4" rx=".6" ry="1.3" fill="#9A9792"/></g><g transform="translate(64.8 71.5) rotate(86) scale(1.4)"><path d="M0 -4.6 C2.2 -2.4 3 1 1.7 3.6 C.6 5 -1.5 4.8 -2.3 3.2 C-3 .8 -1.8 -2.4 0 -4.6 Z" fill="url(#ptSeed)"/><ellipse cx="-.6" cy="-1.4" rx=".6" ry="1.3" fill="#9A9792"/></g></g></svg>`,
  dates: `<svg class="thumb-icon" viewBox="0 0 160 120" aria-hidden="true"><ellipse cx="80" cy="115" rx="70" ry="3.5" fill="#0A213E" opacity=".1"/><g transform="translate(42 104)"><circle class="pa-aura" cx="0" cy="-22" r="38" fill="url(#ptAura)"/><g class="pa-domeg"><path d="M-24 0 A24 28 0 0 1 24 0 Z" fill="url(#ptDome)" stroke="#1B5E37" stroke-width="1"/><path d="M-17 -6 C-15 -20 -8 -26 0 -27" stroke="#9BE0B0" stroke-width="2.6" stroke-linecap="round" fill="none" opacity=".7"/><rect x="-26" y="0" width="52" height="4" rx="1" fill="#C79A3A"/><path d="M0 -28 V-40" stroke="#C79A3A" stroke-width="1.6"/><circle cx="0" cy="-42" r="2.4" fill="#C79A3A"/><path d="M-3.6 -46.5 a4.2 4.2 0 1 0 7.2 0 a3.4 3.4 0 1 1 -7.2 0 Z" fill="#C79A3A"/></g></g><g class="pa-palm"><path d="M134 113 C129 92 136 66 129 42" fill="none" stroke="#6B4A2B" stroke-width="6" stroke-linecap="round"/><path d="M134 113 C129 92 136 66 129 42" fill="none" stroke="#3E2A16" stroke-width="6" stroke-dasharray="1.2 4.2" opacity=".55"/><g transform="translate(129 42)"><g transform="rotate(-72) scale(0.8 .8)"><g class="pa-frond"><path d="M0 0 C13 -24 40 -30 64 -11" fill="none" stroke="#2E6B3E" stroke-width="2" stroke-linecap="round"/><path d="M3 -3 C14 -25 41 -29 64 -11" fill="none" stroke="#4E9F5B" stroke-width="12" stroke-dasharray="1 2.4" opacity=".92"/></g></g><g transform="rotate(-40) scale(0.8 .8)"><g class="pa-frond"><path d="M0 0 C13 -24 40 -30 64 -11" fill="none" stroke="#2E6B3E" stroke-width="2" stroke-linecap="round"/><path d="M3 -3 C14 -25 41 -29 64 -11" fill="none" stroke="#4E9F5B" stroke-width="12" stroke-dasharray="1 2.4" opacity=".92"/></g></g><g transform="rotate(-10) scale(0.8 .8)"><g class="pa-frond"><path d="M0 0 C13 -24 40 -30 64 -11" fill="none" stroke="#2E6B3E" stroke-width="2" stroke-linecap="round"/><path d="M3 -3 C14 -25 41 -29 64 -11" fill="none" stroke="#4E9F5B" stroke-width="12" stroke-dasharray="1 2.4" opacity=".92"/></g></g><g transform="rotate(18) scale(0.8 .8)"><g class="pa-frond"><path d="M0 0 C13 -24 40 -30 64 -11" fill="none" stroke="#2E6B3E" stroke-width="2" stroke-linecap="round"/><path d="M3 -3 C14 -25 41 -29 64 -11" fill="none" stroke="#4E9F5B" stroke-width="12" stroke-dasharray="1 2.4" opacity=".92"/></g></g><g transform="rotate(-72) scale(-0.8 .8)"><g class="pa-frond"><path d="M0 0 C13 -24 40 -30 64 -11" fill="none" stroke="#2E6B3E" stroke-width="2" stroke-linecap="round"/><path d="M3 -3 C14 -25 41 -29 64 -11" fill="none" stroke="#4E9F5B" stroke-width="12" stroke-dasharray="1 2.4" opacity=".92"/></g></g><g transform="rotate(-40) scale(-0.8 .8)"><g class="pa-frond"><path d="M0 0 C13 -24 40 -30 64 -11" fill="none" stroke="#2E6B3E" stroke-width="2" stroke-linecap="round"/><path d="M3 -3 C14 -25 41 -29 64 -11" fill="none" stroke="#4E9F5B" stroke-width="12" stroke-dasharray="1 2.4" opacity=".92"/></g></g><g transform="rotate(-10) scale(-0.8 .8)"><g class="pa-frond"><path d="M0 0 C13 -24 40 -30 64 -11" fill="none" stroke="#2E6B3E" stroke-width="2" stroke-linecap="round"/><path d="M3 -3 C14 -25 41 -29 64 -11" fill="none" stroke="#4E9F5B" stroke-width="12" stroke-dasharray="1 2.4" opacity=".92"/></g></g><g transform="rotate(18) scale(-0.8 .8)"><g class="pa-frond"><path d="M0 0 C13 -24 40 -30 64 -11" fill="none" stroke="#2E6B3E" stroke-width="2" stroke-linecap="round"/><path d="M3 -3 C14 -25 41 -29 64 -11" fill="none" stroke="#4E9F5B" stroke-width="12" stroke-dasharray="1 2.4" opacity=".92"/></g></g><g transform="rotate(-98) scale(0.8 .8)"><g class="pa-frond"><path d="M0 0 C13 -24 40 -30 64 -11" fill="none" stroke="#2E6B3E" stroke-width="2" stroke-linecap="round"/><path d="M3 -3 C14 -25 41 -29 64 -11" fill="none" stroke="#4E9F5B" stroke-width="12" stroke-dasharray="1 2.4" opacity=".92"/></g></g><g class="pa-bunch"><path d="M2 2 C5 8 7 13 6 18" fill="none" stroke="#A8742F" stroke-width="1.4"/><g transform="translate(5 18)"><ellipse cx="-4" cy="2" rx="2.9" ry="4.4" transform="rotate(-20 -4 2)" fill="url(#ptDate)"/><ellipse cx="2" cy="0" rx="2.9" ry="4.4" transform="rotate(10 2 0)" fill="url(#ptDate)"/><ellipse cx="6" cy="5" rx="2.9" ry="4.4" transform="rotate(-13 6 5)" fill="url(#ptDate)"/><ellipse cx="-2" cy="9" rx="2.9" ry="4.4" transform="rotate(5 -2 9)" fill="url(#ptDate)"/><ellipse cx="4" cy="12" rx="2.9" ry="4.4" transform="rotate(-11 4 12)" fill="url(#ptDate)"/><ellipse cx="-6" cy="14" rx="2.9" ry="4.4" transform="rotate(-18 -6 14)" fill="url(#ptDate)"/><ellipse cx="1" cy="17" rx="2.9" ry="4.4" transform="rotate(-12 1 17)" fill="url(#ptDate)"/><ellipse cx="7" cy="15" rx="2.9" ry="4.4" transform="rotate(-13 7 15)" fill="url(#ptDate)"/><ellipse cx="-3" cy="21" rx="2.9" ry="4.4" transform="rotate(14 -3 21)" fill="url(#ptDate)"/></g></g></g></g></svg>`,
  oil: `<svg class="thumb-icon" viewBox="0 0 150 120" aria-hidden="true"><ellipse cx="82" cy="116" rx="60" ry="3.2" fill="#0A213E" opacity=".12"/><g class="pa-spoon"><path d="M92 101 C108 98 128 93 147 89 C149 90 149.5 93 148 95 C128 100 108 106 92 109 Z" fill="url(#ptSteel)" stroke="#6C7480" stroke-width=".8" stroke-linejoin="round"/><path d="M96 101.6 C112 98.8 130 94.4 146 91" fill="none" stroke="#FFFFFF" stroke-width="1.4" stroke-linecap="round" opacity=".75"/><path d="M96 107 C112 104.4 130 99.6 146 95.6" fill="none" stroke="#7B8491" stroke-width=".8" stroke-linecap="round" opacity=".6"/><ellipse cx="70" cy="104" rx="27" ry="10.5" fill="url(#ptSteel)" stroke="#6C7480" stroke-width=".9"/><ellipse cx="70" cy="104.6" rx="23.5" ry="8.4" fill="#A3ABB6"/><ellipse cx="70" cy="105.2" rx="20.5" ry="7" fill="url(#ptOil)"/><ellipse cx="63" cy="103.2" rx="6" ry="1.5" fill="#FFFFFF" opacity=".22"/><ellipse class="pa-ripple2" cx="70" cy="104.6" rx="6" ry="2" fill="none" stroke="#9AA3AF" stroke-width=".9"/><ellipse class="pa-ripple2 pa-r2" cx="70" cy="104.6" rx="6" ry="2" fill="none" stroke="#9AA3AF" stroke-width=".9"/></g><path d="M68.2 40 C68.4 66 68.6 92 69 104 L71.3 104 C71.7 92 71.6 66 71.9 40 Z" fill="url(#ptOil)"/><path class="pa-flow" d="M70.4 46 L70.4 103" fill="none" stroke="#FFFFFF" stroke-width=".9" stroke-linecap="round" opacity=".45"/><g transform="translate(70 52) scale(.85)"><g transform="rotate(100 0 -2)"><path d="M-26 7 C-34 10 -36 16 -36 24 L-36 44 C-36 50 -32 53 -26 53 L-4 53 C2 53 6 50 6 44 L6 24 C6 16 4 10 -4 7 Z" fill="url(#ptAmber)" stroke="#2A1206" stroke-width=".9" stroke-linejoin="round"/><rect x="-27" y="-2" width="27" height="10" rx="2" fill="#6B3A10" stroke="#2A1206" stroke-width=".8"/><ellipse cx="-13.5" cy="-2" rx="13.5" ry="2" fill="url(#ptOil)"/><rect x="-31" y="27" width="32" height="18" rx="3" fill="#FFF6DC" opacity=".95"/><g transform="translate(-15 36) scale(.8)"><path d="M0 -4.6 C2.2 -2.4 3 1 1.7 3.6 C.6 5 -1.5 4.8 -2.3 3.2 C-3 .8 -1.8 -2.4 0 -4.6 Z" fill="url(#ptSeed)"/><ellipse cx="-.6" cy="-1.4" rx=".6" ry="1.3" fill="#9A9792"/></g><path d="M-32 14 C-34 26 -34 40 -31 50" stroke="#F3C27A" stroke-width="2.6" stroke-linecap="round" opacity=".5" fill="none"/></g></g></svg>`,
  pollen: `<svg class="thumb-icon" viewBox="0 0 120 120" aria-hidden="true"><ellipse cx="60" cy="104" rx="42" ry="4" fill="#0A213E" opacity=".12"/><circle cx="20.4" cy="96.8" r="7.9" fill="url(#ptPollen)" stroke="#C4761A" stroke-width=".5"/><ellipse cx="17.7" cy="93.6" rx="2.4" ry="1.4" fill="#FFF6D2" opacity=".7"/><circle cx="37.5" cy="96.5" r="7.9" fill="url(#ptPollen)" stroke="#C4761A" stroke-width=".5"/><ellipse cx="34.7" cy="93.3" rx="2.4" ry="1.4" fill="#FFF6D2" opacity=".7"/><circle cx="52.4" cy="95.8" r="8.4" fill="url(#ptPollen)" stroke="#C4761A" stroke-width=".5"/><ellipse cx="49.4" cy="92.5" rx="2.5" ry="1.5" fill="#FFF6D2" opacity=".7"/><circle cx="69.2" cy="94.8" r="7.7" fill="url(#ptPollen)" stroke="#C4761A" stroke-width=".5"/><ellipse cx="66.5" cy="91.7" rx="2.3" ry="1.4" fill="#FFF6D2" opacity=".7"/><circle cx="84.6" cy="95.7" r="8.0" fill="url(#ptPollen)" stroke="#C4761A" stroke-width=".5"/><ellipse cx="81.8" cy="92.5" rx="2.4" ry="1.4" fill="#FFF6D2" opacity=".7"/><circle cx="98.2" cy="95.6" r="9.2" fill="url(#ptPollen)" stroke="#C4761A" stroke-width=".5"/><ellipse cx="95.0" cy="91.9" rx="2.8" ry="1.7" fill="#FFF6D2" opacity=".7"/><circle cx="28.1" cy="79.2" r="8.6" fill="url(#ptPollen)" stroke="#C4761A" stroke-width=".5"/><ellipse cx="25.1" cy="75.7" rx="2.6" ry="1.6" fill="#FFF6D2" opacity=".7"/><circle cx="44.6" cy="81.4" r="9.0" fill="url(#ptPollen)" stroke="#C4761A" stroke-width=".5"/><ellipse cx="41.5" cy="77.7" rx="2.7" ry="1.6" fill="#FFF6D2" opacity=".7"/><circle cx="59.6" cy="79.1" r="9.0" fill="url(#ptPollen)" stroke="#C4761A" stroke-width=".5"/><ellipse cx="56.4" cy="75.5" rx="2.7" ry="1.6" fill="#FFF6D2" opacity=".7"/><circle cx="77.0" cy="78.6" r="8.9" fill="url(#ptPollen)" stroke="#C4761A" stroke-width=".5"/><ellipse cx="73.9" cy="75.0" rx="2.7" ry="1.6" fill="#FFF6D2" opacity=".7"/><circle cx="92.1" cy="80.5" r="8.0" fill="url(#ptPollen)" stroke="#C4761A" stroke-width=".5"/><ellipse cx="89.3" cy="77.2" rx="2.4" ry="1.4" fill="#FFF6D2" opacity=".7"/><circle cx="37.6" cy="65.7" r="8.0" fill="url(#ptPollen)" stroke="#C4761A" stroke-width=".5"/><ellipse cx="34.8" cy="62.5" rx="2.4" ry="1.4" fill="#FFF6D2" opacity=".7"/><circle cx="52.7" cy="64.2" r="7.8" fill="url(#ptPollen)" stroke="#C4761A" stroke-width=".5"/><ellipse cx="50.0" cy="61.1" rx="2.3" ry="1.4" fill="#FFF6D2" opacity=".7"/><circle cx="67.3" cy="64.5" r="8.3" fill="url(#ptPollen)" stroke="#C4761A" stroke-width=".5"/><ellipse cx="64.3" cy="61.2" rx="2.5" ry="1.5" fill="#FFF6D2" opacity=".7"/><circle cx="83.7" cy="66.0" r="9.2" fill="url(#ptPollen)" stroke="#C4761A" stroke-width=".5"/><ellipse cx="80.5" cy="62.3" rx="2.8" ry="1.7" fill="#FFF6D2" opacity=".7"/><circle cx="45.9" cy="52.5" r="9.0" fill="url(#ptPollen)" stroke="#C4761A" stroke-width=".5"/><ellipse cx="42.8" cy="48.9" rx="2.7" ry="1.6" fill="#FFF6D2" opacity=".7"/><circle cx="59.4" cy="50.0" r="8.7" fill="url(#ptPollen)" stroke="#C4761A" stroke-width=".5"/><ellipse cx="56.4" cy="46.5" rx="2.6" ry="1.6" fill="#FFF6D2" opacity=".7"/><circle cx="75.6" cy="51.5" r="7.8" fill="url(#ptPollen)" stroke="#C4761A" stroke-width=".5"/><ellipse cx="72.9" cy="48.4" rx="2.4" ry="1.4" fill="#FFF6D2" opacity=".7"/><circle cx="51.3" cy="39.3" r="8.7" fill="url(#ptPollen)" stroke="#C4761A" stroke-width=".5"/><ellipse cx="48.3" cy="35.8" rx="2.6" ry="1.6" fill="#FFF6D2" opacity=".7"/><circle cx="68.3" cy="36.8" r="8.3" fill="url(#ptPollen)" stroke="#C4761A" stroke-width=".5"/><ellipse cx="65.4" cy="33.5" rx="2.5" ry="1.5" fill="#FFF6D2" opacity=".7"/><path class="pa-spark" style="animation-delay:0s" d="M24 34 L25.8 38.2 L30 40 L25.8 41.8 L24 46 L22.2 41.8 L18 40 L22.2 38.2 Z" fill="#FFF3C4" stroke="#E8A020" stroke-width=".5"/><path class="pa-spark" style="animation-delay:0.9s" d="M98 51 L99.5 54.5 L103 56 L99.5 57.5 L98 61 L96.5 57.5 L93 56 L96.5 54.5 Z" fill="#FFF3C4" stroke="#E8A020" stroke-width=".5"/><path class="pa-spark" style="animation-delay:1.7s" d="M84 16 L85.2 18.8 L88 20 L85.2 21.2 L84 24 L82.8 21.2 L80 20 L82.8 18.8 Z" fill="#FFF3C4" stroke="#E8A020" stroke-width=".5"/></svg>`
};

const LOOK = {
  1: {k: 'honey'}, 2: {k: 'comb'}, 3: {k: 'honeyseed'},
  4: {k: 'honey', o: 'Spain'}, 5: {k: 'comb', o: 'Spain'}, 6: {k: 'honey', o: 'Spain'}, 7: {k: 'honey', o: 'Spain'}, 8: {k: 'honey', o: 'Spain'},
  9: {k: 'oil', o: 'Ethiopia'}, 10: {k: 'seeds', o: 'Ethiopia'}, 11: {k: 'pollen', o: 'England'},
  12: {k: 'comb'}, 13: {k: 'dates', o: 'Madinah'}
};
// source country -> flag class (Madinah is in Saudi Arabia)
const FLAG = {Spain: 'es', Ethiopia: 'et', England: 'gb', Madinah: 'sa'};
const PHOTO = {1: 'honeybase.png', 2: 'hc.png', 3: 'bshoney2.png', 4: 'acaciabase.jpg', 5: 'hc2.png', 6: 'lavender.png', 7: 'rosemary.png', 8: 'thyme.png', 9: 'seedoil.jpg', 10: 'seeds.png', 11: 'pollen.png', 12: 'combflowers.png', 13: 'ajwa.png'};
const FULL = new Set([12, 13]); // 4:3 photos with their own background fill the tile edge to edge
const lookFor = p => LOOK[p.n] || {k: {honey: 'honey', oil: 'oil', dates: 'dates'}[p.cat] || 'honey'};

const grid = document.getElementById('grid');
const esc = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;');
const list = grid && grid.dataset.featured ? products.filter(p => p.featured) : products;
if (grid) document.body.insertAdjacentHTML('afterbegin', THUMB_SPRITE);
if (grid) grid.innerHTML = list.map(p => `
  <article class="card" data-cat="${p.cat}">
    <div class="thumb thumb-${lookFor(p).k}${PHOTO[p.n] ? ' thumb-photo' + (FULL.has(p.n) ? ' thumb-full' : '') : ''}${FLAG[lookFor(p).o] ? ' flag-' + FLAG[lookFor(p).o] : ''}" role="img" aria-label="${esc(p.name)}">${PHOTO[p.n] ? `<img src="assets/${PHOTO[p.n]}" alt="" loading="lazy">` : ICON[lookFor(p).k]}${lookFor(p).o ? `<span class="thumb-origin">${lookFor(p).o}</span>` : ''}</div>
    <h3>${esc(p.name)}</h3>
    <p>${esc(p.desc)}</p>
    <div class="meta"><span class="price">${p.price}</span><span class="size">${p.size}</span></div>
    <p class="offer">${p.offer ? esc(p.offer) : ''}</p>
    <a class="more" href="mailto:hello@example.com?subject=${encodeURIComponent('Order: ' + p.name)}">Order Now →</a>
  </article>`).join('');

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
const SPRING = 'linear(0,.0509,.1621,.2926,.4206,.5357,.6341,.7154,.781,.8328,.8734,.9046,.9286,.9468,.9605,.9707,.9784,.9841,.9884,.9915,.9938,.9955,.9967,.9976,.9983,.9987,.9991,.9993,1)';

// category filter (products page): oil, honey, dates; click the active one again to show all
const filtersEl = document.getElementById('filters');
if (filtersEl) {
  const buttons = [...filtersEl.querySelectorAll('button')];
  let active = new URLSearchParams(location.search).get('filter');
  if (!['blackseed', 'honey', 'dates'].includes(active)) active = null;

  // one pill slides between the filters
  const pill = document.createElement('span');
  pill.className = 'pill';
  pill.setAttribute('aria-hidden', 'true');
  filtersEl.prepend(pill);
  filtersEl.classList.add('has-pill');
  const placePill = instant => {
    const b = buttons.find(x => x.dataset.filter === active);
    pill.classList.toggle('instant', !!instant);
    pill.classList.toggle('on', !!b);
    if (b) {
      pill.style.width = b.offsetWidth + 'px';
      pill.style.height = b.offsetHeight + 'px';
      pill.style.setProperty('--px', b.offsetLeft + 'px');
      pill.style.setProperty('--py', b.offsetTop + 'px');
    }
    if (instant) { pill.offsetWidth; pill.classList.remove('instant'); }
  };

  let run = 0;
  const show = c => !active || c.dataset.cat === active;
  const updateUrl = () => {
    const url = new URL(location.href);
    if (active) url.searchParams.set('filter', active); else url.searchParams.delete('filter');
    try { history.replaceState(null, '', url); } catch (e) { /* e.g. opened from file:// */ }
  };
  // FLIP: leaving cards fade out, the rest glide to their new places, entering cards fade in
  const applyFilter = animate => {
    const my = ++run;
    buttons.forEach(b => {
      const on = b.dataset.filter === active;
      b.classList.toggle('active', on);
      b.setAttribute('aria-pressed', on);
    });
    placePill(!animate);
    updateUrl();
    const cards = [...grid.querySelectorAll('.card')];
    cards.forEach(c => c.getAnimations().forEach(a => a.cancel()));
    if (!animate || reduceMotion.matches) {
      cards.forEach(c => c.classList.toggle('hide', !show(c)));
      return;
    }
    const leaving = cards.filter(c => !c.classList.contains('hide') && !show(c));
    const go = () => {
      if (my !== run) return;
      const first = new Map(cards.filter(c => !c.classList.contains('hide')).map(c => [c, c.getBoundingClientRect()]));
      cards.forEach(c => { c.getAnimations().forEach(a => a.cancel()); c.classList.toggle('hide', !show(c)); c.classList.add('in'); });
      cards.filter(show).forEach(c => {
        const f = first.get(c), l = c.getBoundingClientRect();
        if (!f) {
          c.animate([{opacity: 0, transform: 'scale(.96)'}, {opacity: 1, transform: 'none'}], {duration: 400, easing: SPRING});
        } else if (f.left !== l.left || f.top !== l.top) {
          c.animate([{transform: `translate(${f.left - l.left}px,${f.top - l.top}px)`}, {transform: 'none'}], {duration: 500, easing: SPRING});
        }
      });
    };
    if (!leaving.length) return go();
    Promise.all(leaving.map(c => c.animate(
      [{opacity: 1, transform: 'scale(1)'}, {opacity: 0, transform: 'scale(.96)'}],
      {duration: 140, easing: 'ease-out', fill: 'forwards'}).finished)).then(go, () => {});
  };
  buttons.forEach(b => b.addEventListener('click', () => {
    active = active === b.dataset.filter ? null : b.dataset.filter;
    applyFilter(true);
  }));
  applyFilter(false);
  window.addEventListener('resize', () => placePill(true));
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => placePill(true));
}

// mobile overlay menu: grows out of the burger, closes back into it, focus is contained while open
const burger = document.getElementById('burger');
const overlay = document.getElementById('overlay');
const menuLinks = [...overlay.querySelectorAll('a')];
menuLinks.forEach((a, i) => a.style.setProperty('--i', i));
const behindMenu = [...document.querySelectorAll('main, footer')];
overlay.inert = true;
function setMenu(open){
  if (open) {
    const r = burger.getBoundingClientRect();
    overlay.style.setProperty('--ox', (r.left + r.width / 2) + 'px');
    overlay.style.setProperty('--oy', (r.top + r.height / 2) + 'px');
  }
  burger.classList.toggle('open', open);
  overlay.classList.toggle('open', open);
  document.body.classList.toggle('locked', open);
  burger.setAttribute('aria-expanded', open);
  burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  overlay.setAttribute('aria-hidden', !open);
  overlay.inert = !open;
  behindMenu.forEach(el => { el.inert = open; });
  if (open) menuLinks[0].focus({preventScroll: true});
}
burger.addEventListener('click', () => setMenu(!overlay.classList.contains('open')));
menuLinks.forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && overlay.classList.contains('open')) { setMenu(false); burger.focus(); }
});
window.addEventListener('resize', () => { if (innerWidth > 768 && overlay.classList.contains('open')) setMenu(false); });

document.getElementById('year').textContent = new Date().getFullYear();

// the navbar logo shrinks from 100% to 50% over the hero. Only transforms change (logo, nav, glass layer), so scrolling never triggers layout
const hero = document.querySelector('.hero, .page-hero');
const header = document.querySelector('.site-header');
const logo = header.querySelector('.logo-nav');
const mobileNav = matchMedia('(max-width: 768px)');
let heroEnd = 1, logoFull = 150, pad = 10, gap = 18, ticking = false;
function measure(){
  heroEnd = Math.max(1, hero.offsetTop + hero.offsetHeight);
  const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
  logoFull = parseFloat(getComputedStyle(logo).width);
  pad = parseFloat(getComputedStyle(header).paddingTop);
  gap = 1.125 * rem;
}
function updateLogo(){
  // on mobile the logo stays at its small, scrolled size throughout
  const p = mobileNav.matches ? 1 : Math.min(1, Math.max(0, window.scrollY / heroEnd));
  const s = 1 - 0.5 * p;
  const fullH = pad + gap + logoFull, glassH = pad + gap + logoFull * s;
  const st = header.style;
  st.setProperty('--logo-scale', s.toFixed(4));
  st.setProperty('--dy', (-logoFull * (1 - s) / 2).toFixed(2) + 'px');
  st.setProperty('--glass-y', (glassH / fullH).toFixed(4));
  st.setProperty('--glass-h', glassH.toFixed(2) + 'px');
  ticking = false;
}
window.addEventListener('scroll', () => {
  if (!ticking) { ticking = true; requestAnimationFrame(updateLogo); }
}, { passive: true });
window.addEventListener('resize', () => { measure(); updateLogo(); });
window.addEventListener('load', () => { measure(); updateLogo(); });
measure();
updateLogo();

// hero animation: pause while it is off screen or the tab is hidden
(function () {
  const root = document.querySelector('.hero-anim');
  if (!root) return;
  let visible = true;
  const sync = () => root.classList.toggle('ts-paused', !visible || document.hidden);
  new IntersectionObserver(entries => { visible = entries[0].isIntersecting; sync(); }).observe(root);
  document.addEventListener('visibilitychange', sync);
})();

// scroll reveals: one-shot, staggered, skipped for reduced motion
(function () {
  const items = [...document.querySelectorAll('.feature, .products-grid .card, .steps .card, .benefit-list li, .narrow.center > :is(h2, p), .page-hero .container > *')];
  if (!items.length) return;
  if (reduceMotion.matches || !('IntersectionObserver' in window)) { items.forEach(el => el.classList.add('in')); return; }
  const io = new IntersectionObserver(entries => {
    entries.filter(e => e.isIntersecting).forEach((e, i) => {
      e.target.style.setProperty('--rd', Math.min(i, 6) * 0.05 + 's');
      e.target.classList.add('in');
      io.unobserve(e.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
  items.forEach(el => { el.classList.add('reveal'); io.observe(el); });
})();

// hero slideshow: auto-advances every 5.5s; pauses on hover, focus, off screen and hidden tab; still (first slide) for reduced motion
(function () {
  const root = document.querySelector('.slideshow');
  if (!root) return;
  const slides = [...root.querySelectorAll('.slide')];
  const dots = [...root.querySelectorAll('.slide-dots button')];
  let i = 0, timer = null, inView = true, held = false;
  const show = n => {
    i = (n + slides.length) % slides.length;
    slides.forEach((s, k) => s.classList.toggle('is-active', k === i));
    dots.forEach((d, k) => d.setAttribute('aria-current', k === i));
  };
  const stop = () => { clearInterval(timer); timer = null; };
  const play = () => {
    stop();
    if (reduceMotion.matches || held || !inView || document.hidden) return;
    timer = setInterval(() => show(i + 1), 5500);
  };
  dots.forEach((d, k) => d.addEventListener('click', () => { show(k); play(); }));
  root.addEventListener('mouseenter', () => { held = true; play(); });
  root.addEventListener('mouseleave', () => { held = false; play(); });
  root.addEventListener('focusin', () => { held = true; play(); });
  root.addEventListener('focusout', () => { held = false; play(); });
  document.addEventListener('visibilitychange', play);
  reduceMotion.addEventListener('change', play);
  new IntersectionObserver(e => { inView = e[0].isIntersecting; play(); }).observe(root);
  play();
})();
