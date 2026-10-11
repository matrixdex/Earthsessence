const products = [
  {n:1,featured:true,cat:'honey',name:'Multi-Colour Multi-Nectar Honey',price:'£16',size:'215g',desc:'Our signature product. Pure, natural, and unpasteurised honey made from a variety of flowers. Rich in natural colour and flavour, and full of character.'},

  {n:2,cat:'honey',name:'Honeycomb of Multi-Colour Multi-Nectar Honey',price:'£16',size:'215g',desc:'Our pure, natural, and unpasteurised Multi-Colour Multi-Nectar honey. Presented with raw, hand-cut honeycomb.'},

  {n:3,cat:'honey',name:'Black Seed Infused Honey',price:'£16',size:'215g',desc:'Our Multi-Colour Multi-Nectar honey infused with Ethiopian black seed (Nigella sativa). A distinct combination of two treasured natural ingredients.'},

  {n:4,cat:'honey',name:'Spanish Acacia Honey',price:'£16',size:'215g',desc:'Delicate, naturally sweet, and unpasteurised Spanish Acacia honey. A delicious, natural alternative to refined sugar.'},

  {n:5,cat:'honey',name:'Honeycomb in Spanish Acacia Honey',price:'£16',size:'215g',desc:'Our delicate, naturally sweet, and unpasteurised Spanish Acacia Honey. Beautifully presented with hand-cut honeycomb. A delicious, natural alternative to refined sugar with just that little bit extra.'},

  {n:6,cat:'honey',name:'Spanish Lavender Honey',price:'£16',size:'215g',desc:'Floral, fragrant and full of flavour. A distinct honey with lavender notes.'},

  {n:7,cat:'honey',name:'Spanish Rosemary Honey',price:'£16',size:'215g',desc:'A delicately sweet gourmet honey with subtle herbal notes. Rosemary brings a unique undertone to our delicious honey.'},

  {n:8,cat:'honey',name:'Spanish Wild Thyme Honey',price:'£16',size:'215g',desc:'Smooth and sweet honey with subtle herbal, floral, and distinct phenolic notes. A hint of thyme in every taste.'},

  {n:9,featured:true,cat:'oil',name:'Ethiopian Black Seed Oil',price:'£16',size:'100ml',desc:'Cold-pressed from Nigella sativa seeds, our black seed oil is sourced from Ethiopia. Natural and unfiltered, without additives or preservatives. Boosts immunity and promotes good health.'},

  {n:10,cat:'',name:'Ethiopian Black Seeds',price:'£10',size:'100g',offer:'2 for £16',desc:'Carefully selected whole black seeds (Nigella sativa) of the highest quality. Boosts immunity with long-term use.'},

  {n:11,cat:'',name:'Honeybee Pollen',price:'£10',size:'100g',offer:'2 for £16',desc:'Pollen collected by local English honeybees. High in fibre. Full of vitamins, minerals, and antioxidants. A teaspoon everyday brings the natural power of pollen and propolis into your diet.'},

  {n:12,cat:'honey',name:'Hand-Cut Honeycomb',price:'£10',size:'185–227g',offer:'2 for £16',desc:'Natural and unpasteurised honeycomb. Enjoy real honey in its most natural form.'},

  {n:13,featured:true,cat:'dates',name:'Ajwa Dates',price:'£10',size:'500g',desc:'Delicious Ajwa dates sourced directly from Madinah Munawwarah, The Enlightened City. Decadent, soft, and renowned for their distinctive taste.'}
];

// product thumbnails: a category icon on a patterned tint, with the origin where we know it
const THUMB_SPRITE = `<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
<linearGradient id="ptHoney" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFD667"/><stop offset="0.55" stop-color="#EDA920"/><stop offset="1" stop-color="#B8700A"/></linearGradient>
<radialGradient id="ptWax" cx="36%" cy="28%" r="85%"><stop offset="0" stop-color="#FFE9A0"/><stop offset="0.6" stop-color="#F2B233"/><stop offset="1" stop-color="#C7811A"/></radialGradient>
<linearGradient id="ptDate" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#C9803A"/><stop offset="0.55" stop-color="#8A431A"/><stop offset="1" stop-color="#4A1E08"/></linearGradient>
<linearGradient id="ptAmber" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#D98B2B"/><stop offset="0.5" stop-color="#8F4C12"/><stop offset="1" stop-color="#3A1A06"/></linearGradient>
<radialGradient id="ptSeed" cx="35%" cy="30%" r="75%"><stop offset="0" stop-color="#5A5650"/><stop offset="1" stop-color="#0B0A09"/></radialGradient>
<radialGradient id="ptPollen" cx="35%" cy="30%" r="80%"><stop offset="0" stop-color="#FFE48A"/><stop offset="0.6" stop-color="#F2B233"/><stop offset="1" stop-color="#D4851A"/></radialGradient>
<linearGradient id="ptLeaf" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#2E7A44"/><stop offset="1" stop-color="#6FBF73"/></linearGradient>
</defs><symbol id="pt-honey" viewBox="0 0 120 120"><ellipse cx="58" cy="110" rx="36" ry="4" fill="#0A213E" opacity=".12"/><path d="M34 46 C26 50 24 60 24 72 L24 96 C24 104 30 108 38 108 L78 108 C86 108 92 104 92 96 L92 72 C92 60 90 50 82 46 Z" fill="url(#ptHoney)" stroke="#9A6410" stroke-width=".9" stroke-linejoin="round"/><rect x="36" y="38" width="44" height="10" rx="3" fill="#E7B25A" stroke="#9A6410" stroke-width=".8"/><rect x="33" y="26" width="50" height="14" rx="4" fill="#8A5A2B" stroke="#5E3C1C" stroke-width=".8"/><path d="M38 30 H78" stroke="#C99A5E" stroke-width="1.6" stroke-linecap="round" opacity=".7"/><rect x="36" y="68" width="44" height="26" rx="3" fill="#FFF6DC" opacity=".95"/><polygon points="58.0,73.0 64.9,77.0 64.9,85.0 58.0,89.0 51.1,85.0 51.1,77.0" fill="url(#ptWax)" stroke="#9A6410" stroke-width=".8"/><path d="M30 54 C27 66 27 84 30 98" stroke="#FFF3C4" stroke-width="3" stroke-linecap="round" opacity=".6" fill="none"/><path d="M106 38 L106 98" stroke="#8A5A2B" stroke-width="3" stroke-linecap="round"/><ellipse cx="106" cy="30" rx="8" ry="11" fill="#C98A3A" stroke="#8A5A2B" stroke-width=".8"/><path d="M99 25 H113 M99 30 H113 M99 35 H113" stroke="#8A5A2B" stroke-width="1.2" opacity=".7"/></symbol><symbol id="pt-comb" viewBox="0 0 120 120"><ellipse cx="60" cy="112" rx="26" ry="4" fill="#0A213E" opacity=".12"/><polygon points="45.3,19.8 59.3,27.9 59.3,44.1 45.3,52.2 31.2,44.1 31.2,27.9" fill="url(#ptWax)" stroke="#8A560C" stroke-width="1" stroke-linejoin="round"/><ellipse cx="40.3" cy="30.0" rx="4" ry="2" transform="rotate(-30 40.3 30.0)" fill="#FFF3C4" opacity=".65"/><polygon points="74.7,19.8 88.8,27.9 88.8,44.1 74.7,52.2 60.7,44.1 60.7,27.9" fill="url(#ptWax)" stroke="#8A560C" stroke-width="1" stroke-linejoin="round"/><ellipse cx="69.7" cy="30.0" rx="4" ry="2" transform="rotate(-30 69.7 30.0)" fill="#FFF3C4" opacity=".65"/><polygon points="30.6,45.3 44.6,53.4 44.6,69.6 30.6,77.7 16.5,69.6 16.5,53.4" fill="url(#ptWax)" stroke="#8A560C" stroke-width="1" stroke-linejoin="round"/><ellipse cx="25.6" cy="55.5" rx="4" ry="2" transform="rotate(-30 25.6 55.5)" fill="#FFF3C4" opacity=".65"/><polygon points="60.0,45.3 74.0,53.4 74.0,69.6 60.0,77.7 46.0,69.6 46.0,53.4" fill="url(#ptWax)" stroke="#8A560C" stroke-width="1" stroke-linejoin="round"/><ellipse cx="55.0" cy="55.5" rx="4" ry="2" transform="rotate(-30 55.0 55.5)" fill="#FFF3C4" opacity=".65"/><polygon points="89.4,45.3 103.5,53.4 103.5,69.6 89.4,77.7 75.4,69.6 75.4,53.4" fill="url(#ptWax)" stroke="#8A560C" stroke-width="1" stroke-linejoin="round"/><ellipse cx="84.4" cy="55.5" rx="4" ry="2" transform="rotate(-30 84.4 55.5)" fill="#FFF3C4" opacity=".65"/><path d="M52 92 C52 92 46 100 46 105 C46 109 49 112 52 112 C55 112 58 109 58 105 C58 100 52 92 52 92 Z" fill="url(#ptHoney)" stroke="#B8700A" stroke-width=".6" transform="translate(8 -2)"/><ellipse cx="57" cy="104" rx="1.6" ry="3.4" fill="#FFF6D2" opacity=".75"/></symbol><symbol id="pt-dates" viewBox="0 0 120 120"><ellipse cx="60" cy="108" rx="38" ry="4" fill="#0A213E" opacity=".12"/><path d="M60 52 C46 28 24 22 8 32 C22 44 42 50 60 52 Z" fill="url(#ptLeaf)"/><path d="M60 52 C74 28 96 22 112 32 C98 44 78 50 60 52 Z" fill="url(#ptLeaf)" opacity=".92"/><path d="M60 52 C54 30 56 14 62 6 C68 16 68 36 60 52 Z" fill="url(#ptLeaf)" opacity=".85"/><ellipse cx="42" cy="78" rx="15" ry="27" transform="rotate(-20 42 78)" fill="url(#ptDate)" stroke="#2E1507" stroke-width=".8"/><ellipse cx="37" cy="70" rx="3" ry="11" transform="rotate(-20 37 70)" fill="#F0C58A" opacity=".55"/><path d="M35 68 C37 80 37 88 39 96" stroke="#2A1105" stroke-width=".9" fill="none" opacity=".35" stroke-linecap="round"/><ellipse cx="38.7" cy="52" rx="5" ry="2.4" fill="#2B1608"/><ellipse cx="78" cy="80" rx="15" ry="27" transform="rotate(20 78 80)" fill="url(#ptDate)" stroke="#2E1507" stroke-width=".8"/><ellipse cx="73" cy="72" rx="3" ry="11" transform="rotate(20 73 72)" fill="#F0C58A" opacity=".55"/><path d="M71 70 C73 82 73 90 75 98" stroke="#2A1105" stroke-width=".9" fill="none" opacity=".35" stroke-linecap="round"/><ellipse cx="81.3" cy="54" rx="5" ry="2.4" fill="#2B1608"/><ellipse cx="60" cy="86" rx="16" ry="26" transform="rotate(0 60 86)" fill="url(#ptDate)" stroke="#2E1507" stroke-width=".8"/><ellipse cx="55" cy="78" rx="3" ry="11" transform="rotate(0 55 78)" fill="#F0C58A" opacity=".55"/><path d="M53 76 C55 88 55 96 57 104" stroke="#2A1105" stroke-width=".9" fill="none" opacity=".35" stroke-linecap="round"/><ellipse cx="60.0" cy="61" rx="5" ry="2.4" fill="#2B1608"/></symbol><symbol id="pt-oil" viewBox="0 0 120 120"><ellipse cx="60" cy="112" rx="32" ry="4" fill="#0A213E" opacity=".14"/><rect x="32" y="54" width="56" height="56" rx="11" fill="url(#ptAmber)" stroke="#2A1206" stroke-width=".9"/><rect x="48" y="40" width="24" height="16" rx="3" fill="#8F4C12" stroke="#2A1206" stroke-width=".8"/><rect x="45" y="36" width="30" height="8" rx="3" fill="#26303F"/><rect x="51" y="12" width="18" height="28" rx="9" fill="#1A1A1A"/><path d="M56 18 V34" stroke="#7A7A7A" stroke-width="2" stroke-linecap="round" opacity=".7"/><rect x="38" y="72" width="44" height="24" rx="3" fill="#FFF6DC" opacity=".95"/><g transform="translate(60 84) scale(.75)"><path d="M0 -6 C3 -3 4 2 2 6 C0 8 -3 8 -4 5 C-5 1 -3 -3 0 -6 Z" fill="#0B0A09"/><path d="M-12 -2 C-14 2 -12 6 -9 7 C-8 3 -9 -1 -12 -2 Z M12 -2 C14 2 12 6 9 7 C8 3 9 -1 12 -2 Z" fill="#0B0A09" opacity=".75"/></g><path d="M37 60 C35 74 35 92 38 106" stroke="#F3C27A" stroke-width="3" stroke-linecap="round" opacity=".5" fill="none"/></symbol><symbol id="pt-seeds" viewBox="0 0 120 120"><ellipse cx="60" cy="102" rx="44" ry="5" fill="#0A213E" opacity=".12"/><g transform="translate(22.9 95.8) rotate(64) scale(2.3)"><path d="M0 -4.6 C2.2 -2.4 3 1 1.7 3.6 C.6 5 -1.5 4.8 -2.3 3.2 C-3 .8 -1.8 -2.4 0 -4.6 Z" fill="url(#ptSeed)"/><ellipse cx="-.6" cy="-1.4" rx=".6" ry="1.3" fill="#8A8782"/></g><g transform="translate(40.8 92.2) rotate(70) scale(2.3)"><path d="M0 -4.6 C2.2 -2.4 3 1 1.7 3.6 C.6 5 -1.5 4.8 -2.3 3.2 C-3 .8 -1.8 -2.4 0 -4.6 Z" fill="url(#ptSeed)"/><ellipse cx="-.6" cy="-1.4" rx=".6" ry="1.3" fill="#8A8782"/></g><g transform="translate(59.0 96.0) rotate(107) scale(2.3)"><path d="M0 -4.6 C2.2 -2.4 3 1 1.7 3.6 C.6 5 -1.5 4.8 -2.3 3.2 C-3 .8 -1.8 -2.4 0 -4.6 Z" fill="url(#ptSeed)"/><ellipse cx="-.6" cy="-1.4" rx=".6" ry="1.3" fill="#8A8782"/></g><g transform="translate(77.6 92.1) rotate(249) scale(2.3)"><path d="M0 -4.6 C2.2 -2.4 3 1 1.7 3.6 C.6 5 -1.5 4.8 -2.3 3.2 C-3 .8 -1.8 -2.4 0 -4.6 Z" fill="url(#ptSeed)"/><ellipse cx="-.6" cy="-1.4" rx=".6" ry="1.3" fill="#8A8782"/></g><g transform="translate(95.8 94.0) rotate(98) scale(2.3)"><path d="M0 -4.6 C2.2 -2.4 3 1 1.7 3.6 C.6 5 -1.5 4.8 -2.3 3.2 C-3 .8 -1.8 -2.4 0 -4.6 Z" fill="url(#ptSeed)"/><ellipse cx="-.6" cy="-1.4" rx=".6" ry="1.3" fill="#8A8782"/></g><g transform="translate(34.6 79.6) rotate(248) scale(2.3)"><path d="M0 -4.6 C2.2 -2.4 3 1 1.7 3.6 C.6 5 -1.5 4.8 -2.3 3.2 C-3 .8 -1.8 -2.4 0 -4.6 Z" fill="url(#ptSeed)"/><ellipse cx="-.6" cy="-1.4" rx=".6" ry="1.3" fill="#8A8782"/></g><g transform="translate(49.9 78.1) rotate(136) scale(2.3)"><path d="M0 -4.6 C2.2 -2.4 3 1 1.7 3.6 C.6 5 -1.5 4.8 -2.3 3.2 C-3 .8 -1.8 -2.4 0 -4.6 Z" fill="url(#ptSeed)"/><ellipse cx="-.6" cy="-1.4" rx=".6" ry="1.3" fill="#8A8782"/></g><g transform="translate(69.1 79.9) rotate(194) scale(2.3)"><path d="M0 -4.6 C2.2 -2.4 3 1 1.7 3.6 C.6 5 -1.5 4.8 -2.3 3.2 C-3 .8 -1.8 -2.4 0 -4.6 Z" fill="url(#ptSeed)"/><ellipse cx="-.6" cy="-1.4" rx=".6" ry="1.3" fill="#8A8782"/></g><g transform="translate(87.9 80.7) rotate(49) scale(2.3)"><path d="M0 -4.6 C2.2 -2.4 3 1 1.7 3.6 C.6 5 -1.5 4.8 -2.3 3.2 C-3 .8 -1.8 -2.4 0 -4.6 Z" fill="url(#ptSeed)"/><ellipse cx="-.6" cy="-1.4" rx=".6" ry="1.3" fill="#8A8782"/></g><g transform="translate(44.0 64.3) rotate(317) scale(2.3)"><path d="M0 -4.6 C2.2 -2.4 3 1 1.7 3.6 C.6 5 -1.5 4.8 -2.3 3.2 C-3 .8 -1.8 -2.4 0 -4.6 Z" fill="url(#ptSeed)"/><ellipse cx="-.6" cy="-1.4" rx=".6" ry="1.3" fill="#8A8782"/></g><g transform="translate(61.3 64.4) rotate(29) scale(2.3)"><path d="M0 -4.6 C2.2 -2.4 3 1 1.7 3.6 C.6 5 -1.5 4.8 -2.3 3.2 C-3 .8 -1.8 -2.4 0 -4.6 Z" fill="url(#ptSeed)"/><ellipse cx="-.6" cy="-1.4" rx=".6" ry="1.3" fill="#8A8782"/></g><g transform="translate(77.4 66.8) rotate(254) scale(2.3)"><path d="M0 -4.6 C2.2 -2.4 3 1 1.7 3.6 C.6 5 -1.5 4.8 -2.3 3.2 C-3 .8 -1.8 -2.4 0 -4.6 Z" fill="url(#ptSeed)"/><ellipse cx="-.6" cy="-1.4" rx=".6" ry="1.3" fill="#8A8782"/></g><g transform="translate(52.6 52.1) rotate(106) scale(2.3)"><path d="M0 -4.6 C2.2 -2.4 3 1 1.7 3.6 C.6 5 -1.5 4.8 -2.3 3.2 C-3 .8 -1.8 -2.4 0 -4.6 Z" fill="url(#ptSeed)"/><ellipse cx="-.6" cy="-1.4" rx=".6" ry="1.3" fill="#8A8782"/></g><g transform="translate(69.3 50.6) rotate(32) scale(2.3)"><path d="M0 -4.6 C2.2 -2.4 3 1 1.7 3.6 C.6 5 -1.5 4.8 -2.3 3.2 C-3 .8 -1.8 -2.4 0 -4.6 Z" fill="url(#ptSeed)"/><ellipse cx="-.6" cy="-1.4" rx=".6" ry="1.3" fill="#8A8782"/></g></symbol><symbol id="pt-pollen" viewBox="0 0 120 120"><ellipse cx="60" cy="104" rx="42" ry="5" fill="#0A213E" opacity=".12"/><circle cx="21.4" cy="94.6" r="8.8" fill="url(#ptPollen)" stroke="#C4761A" stroke-width=".5"/><ellipse cx="18.3" cy="91.1" rx="2.6" ry="1.6" fill="#FFF6D2" opacity=".7"/><circle cx="35.7" cy="97.1" r="8.4" fill="url(#ptPollen)" stroke="#C4761A" stroke-width=".5"/><ellipse cx="32.7" cy="93.7" rx="2.5" ry="1.5" fill="#FFF6D2" opacity=".7"/><circle cx="52.5" cy="95.8" r="8.6" fill="url(#ptPollen)" stroke="#C4761A" stroke-width=".5"/><ellipse cx="49.5" cy="92.4" rx="2.6" ry="1.5" fill="#FFF6D2" opacity=".7"/><circle cx="68.8" cy="95.8" r="8.0" fill="url(#ptPollen)" stroke="#C4761A" stroke-width=".5"/><ellipse cx="66.0" cy="92.6" rx="2.4" ry="1.4" fill="#FFF6D2" opacity=".7"/><circle cx="83.6" cy="96.1" r="8.2" fill="url(#ptPollen)" stroke="#C4761A" stroke-width=".5"/><ellipse cx="80.7" cy="92.8" rx="2.5" ry="1.5" fill="#FFF6D2" opacity=".7"/><circle cx="98.3" cy="96.4" r="8.5" fill="url(#ptPollen)" stroke="#C4761A" stroke-width=".5"/><ellipse cx="95.3" cy="93.0" rx="2.5" ry="1.5" fill="#FFF6D2" opacity=".7"/><circle cx="29.4" cy="79.4" r="8.3" fill="url(#ptPollen)" stroke="#C4761A" stroke-width=".5"/><ellipse cx="26.5" cy="76.1" rx="2.5" ry="1.5" fill="#FFF6D2" opacity=".7"/><circle cx="43.9" cy="80.5" r="9.0" fill="url(#ptPollen)" stroke="#C4761A" stroke-width=".5"/><ellipse cx="40.7" cy="76.9" rx="2.7" ry="1.6" fill="#FFF6D2" opacity=".7"/><circle cx="61.1" cy="81.2" r="8.6" fill="url(#ptPollen)" stroke="#C4761A" stroke-width=".5"/><ellipse cx="58.1" cy="77.8" rx="2.6" ry="1.5" fill="#FFF6D2" opacity=".7"/><circle cx="75.0" cy="81.2" r="8.2" fill="url(#ptPollen)" stroke="#C4761A" stroke-width=".5"/><ellipse cx="72.2" cy="78.0" rx="2.5" ry="1.5" fill="#FFF6D2" opacity=".7"/><circle cx="90.2" cy="78.6" r="8.1" fill="url(#ptPollen)" stroke="#C4761A" stroke-width=".5"/><ellipse cx="87.3" cy="75.4" rx="2.4" ry="1.5" fill="#FFF6D2" opacity=".7"/><circle cx="36.1" cy="65.6" r="8.4" fill="url(#ptPollen)" stroke="#C4761A" stroke-width=".5"/><ellipse cx="33.2" cy="62.3" rx="2.5" ry="1.5" fill="#FFF6D2" opacity=".7"/><circle cx="52.7" cy="63.8" r="9.2" fill="url(#ptPollen)" stroke="#C4761A" stroke-width=".5"/><ellipse cx="49.5" cy="60.2" rx="2.8" ry="1.7" fill="#FFF6D2" opacity=".7"/><circle cx="68.8" cy="63.6" r="9.3" fill="url(#ptPollen)" stroke="#C4761A" stroke-width=".5"/><ellipse cx="65.6" cy="59.9" rx="2.8" ry="1.7" fill="#FFF6D2" opacity=".7"/><circle cx="82.2" cy="63.8" r="9.0" fill="url(#ptPollen)" stroke="#C4761A" stroke-width=".5"/><ellipse cx="79.1" cy="60.3" rx="2.7" ry="1.6" fill="#FFF6D2" opacity=".7"/><circle cx="44.1" cy="52.0" r="8.6" fill="url(#ptPollen)" stroke="#C4761A" stroke-width=".5"/><ellipse cx="41.1" cy="48.6" rx="2.6" ry="1.5" fill="#FFF6D2" opacity=".7"/><circle cx="61.2" cy="49.9" r="8.6" fill="url(#ptPollen)" stroke="#C4761A" stroke-width=".5"/><ellipse cx="58.2" cy="46.5" rx="2.6" ry="1.5" fill="#FFF6D2" opacity=".7"/><circle cx="75.2" cy="49.7" r="7.8" fill="url(#ptPollen)" stroke="#C4761A" stroke-width=".5"/><ellipse cx="72.5" cy="46.6" rx="2.3" ry="1.4" fill="#FFF6D2" opacity=".7"/><circle cx="52.9" cy="36.6" r="8.8" fill="url(#ptPollen)" stroke="#C4761A" stroke-width=".5"/><ellipse cx="49.8" cy="33.1" rx="2.6" ry="1.6" fill="#FFF6D2" opacity=".7"/><circle cx="68.5" cy="38.1" r="7.9" fill="url(#ptPollen)" stroke="#C4761A" stroke-width=".5"/><ellipse cx="65.8" cy="34.9" rx="2.4" ry="1.4" fill="#FFF6D2" opacity=".7"/></symbol></svg>`;
const LOOK = {
  1: {k: 'honey'}, 2: {k: 'comb'}, 3: {k: 'honey'},
  4: {k: 'honey', o: 'Spain'}, 5: {k: 'comb', o: 'Spain'}, 6: {k: 'honey', o: 'Spain'}, 7: {k: 'honey', o: 'Spain'}, 8: {k: 'honey', o: 'Spain'},
  9: {k: 'oil', o: 'Ethiopia'}, 10: {k: 'seeds', o: 'Ethiopia'}, 11: {k: 'pollen', o: 'England'},
  12: {k: 'comb'}, 13: {k: 'dates', o: 'Madinah'}
};
const lookFor = p => LOOK[p.n] || {k: {honey: 'honey', oil: 'oil', dates: 'dates'}[p.cat] || 'honey'};

const grid = document.getElementById('grid');
const esc = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;');
const list = grid && grid.dataset.featured ? products.filter(p => p.featured) : products;
if (grid) document.body.insertAdjacentHTML('afterbegin', THUMB_SPRITE);
if (grid) grid.innerHTML = list.map(p => `
  <article class="card" data-cat="${p.cat}">
    <div class="thumb thumb-${lookFor(p).k}" role="img" aria-label="${esc(p.name)}"><svg class="thumb-icon" viewBox="0 0 120 120" aria-hidden="true"><use href="#pt-${lookFor(p).k}"></use></svg>${lookFor(p).o ? `<span class="thumb-origin">${lookFor(p).o}</span>` : ''}</div>
    <h3>${esc(p.name)}</h3>
    <p>${esc(p.desc)}</p>
    <div class="meta"><span class="price">${p.price}</span><span class="size">${p.size}</span></div>
    <p class="offer">${p.offer ? esc(p.offer) : ''}</p>
    <a class="more" href="mailto:hello@example.com?subject=${encodeURIComponent('Enquiry: ' + p.name)}">Enquire →</a>
  </article>`).join('');

// category filter (products page): oil, honey, dates; click the active one again to show all
const filtersEl = document.getElementById('filters');
if (filtersEl) {
  const buttons = filtersEl.querySelectorAll('button');
  let active = new URLSearchParams(location.search).get('filter');
  if (!['oil', 'honey', 'dates'].includes(active)) active = null;
  const applyFilter = () => {
    buttons.forEach(b => {
      const on = b.dataset.filter === active;
      b.classList.toggle('active', on);
      b.setAttribute('aria-pressed', on);
    });
    grid.querySelectorAll('.card').forEach(c => c.classList.toggle('hide', !!active && c.dataset.cat !== active));
    const url = new URL(location.href);
    if (active) url.searchParams.set('filter', active); else url.searchParams.delete('filter');
    try { history.replaceState(null, '', url); } catch (e) { /* e.g. opened from file:// */ }
  };
  buttons.forEach(b => b.addEventListener('click', () => {
    active = active === b.dataset.filter ? null : b.dataset.filter;
    applyFilter();
  }));
  applyFilter();
}

// mobile overlay menu
const burger = document.getElementById('burger');
const overlay = document.getElementById('overlay');
function setMenu(open){
  burger.classList.toggle('open', open);
  overlay.classList.toggle('open', open);
  document.body.classList.toggle('locked', open);
  burger.setAttribute('aria-expanded', open);
  burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  overlay.setAttribute('aria-hidden', !open);
}
burger.addEventListener('click', () => setMenu(!overlay.classList.contains('open')));
overlay.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
window.addEventListener('resize', () => { if (innerWidth > 768) setMenu(false); });

document.getElementById('year').textContent = new Date().getFullYear();

// shrink the navbar logo smoothly from 100% to 50% over the hero section
const hero = document.querySelector('.hero, .page-hero');
let heroEnd = 1, ticking = false;
function measureHero(){ heroEnd = Math.max(1, hero.offsetTop + hero.offsetHeight); }
function updateLogo(){
  const p = Math.min(1, Math.max(0, window.scrollY / heroEnd));
  document.documentElement.style.setProperty('--logo-scale', (1 - 0.5 * p).toFixed(4));
  ticking = false;
}
window.addEventListener('scroll', () => {
  if (!ticking) { ticking = true; requestAnimationFrame(updateLogo); }
}, { passive: true });
window.addEventListener('resize', () => { measureHero(); updateLogo(); });
window.addEventListener('load', () => { measureHero(); updateLogo(); });
measureHero();
updateLogo();
// hero animation: pause while it is off screen
(function () {
  const root = document.querySelector('.hero-anim');
  if (!root) return;
  new IntersectionObserver(entries => {
    root.classList.toggle('ts-paused', !entries[0].isIntersecting);
  }).observe(root);
})();
