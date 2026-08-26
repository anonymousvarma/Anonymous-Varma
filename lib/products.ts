export type CategorySlug = 'vegetables' | 'fruits-melons' | 'field-crops'

export type Product = {
  slug: string
  variety: string
  crop: string
  category: CategorySlug
  image: string
  tagline: string
  description: string
  highlights: string[]
  specs: { label: string; value: string }[]
  packing: string
}

export const categories: {
  slug: CategorySlug
  name: string
  blurb: string
}[] = [
  {
    slug: 'vegetables',
    name: 'Vegetables',
    blurb:
      'Okra, tomato, chilli, brinjal, gourds and cucurbits bred for yield, uniformity and long harvest windows.',
  },
  {
    slug: 'fruits-melons',
    name: 'Fruits & Melons',
    blurb:
      'Watermelon and muskmelon hybrids selected for sweetness, flesh firmness and transport strength.',
  },
  {
    slug: 'field-crops',
    name: 'Field Crops',
    blurb:
      'Maize, paddy, bajra and cotton varieties suited to rainfed and irrigated conditions across India.',
  },
]

export const products: Product[] = [
  {
    slug: 'cygnus-vijay-okra',
    variety: 'Cygnus Vijay',
    crop: 'Okra (Bhendi)',
    category: 'vegetables',
    image: '/images/products/okra.png',
    tagline: 'Dark green five-ridged pods with an extended picking window',
    description:
      'Cygnus Vijay is a vigorous okra hybrid producing dark green, tender, five-ridged pods with excellent shelf life. Its upright plant habit with short internodes allows dense planting and easy picking, while good tolerance to yellow vein mosaic virus keeps the crop productive through the season.',
    highlights: [
      'First picking in 42-45 days after sowing',
      'Dark green, smooth, tender pods of 12-14 cm',
      'Good field tolerance to yellow vein mosaic virus',
      'Suitable for distant market transport',
    ],
    specs: [
      { label: 'Maturity', value: '42-45 days to first picking' },
      { label: 'Pod colour', value: 'Dark green, 5-ridged' },
      { label: 'Pod length', value: '12-14 cm' },
      { label: 'Plant habit', value: 'Erect, short internodes' },
      { label: 'Season', value: 'Kharif and summer' },
      { label: 'Seed rate', value: '4-5 kg per acre' },
    ],
    packing: '100 g, 250 g, 500 g pouches',
  },
  {
    slug: 'cygnus-rakshak-tomato',
    variety: 'Cygnus Rakshak',
    crop: 'Tomato',
    category: 'vegetables',
    image: '/images/products/tomato.png',
    tagline: 'Firm, deep red fruits with strong keeping quality',
    description:
      'Cygnus Rakshak is a semi-determinate tomato hybrid bearing high fruit numbers of uniform, deep red, flattish-round fruits. Thick flesh and firm skin give it strong keeping quality and low transit damage, making it a preferred choice for long-distance markets.',
    highlights: [
      'Uniform, flattish-round fruits of 90-110 g',
      'Very firm flesh, excellent transportability',
      'Continuous fruit setting under warm conditions',
      'Good tolerance to leaf curl virus',
    ],
    specs: [
      { label: 'Maturity', value: '65-70 days after transplanting' },
      { label: 'Fruit weight', value: '90-110 g' },
      { label: 'Fruit colour', value: 'Deep red' },
      { label: 'Plant habit', value: 'Semi-determinate' },
      { label: 'Season', value: 'Kharif, rabi and summer' },
      { label: 'Seed rate', value: '60-80 g per acre' },
    ],
    packing: '10 g, 25 g, 50 g pouches',
  },
  {
    slug: 'cygnus-agni-chilli',
    variety: 'Cygnus Agni',
    crop: 'Chilli',
    category: 'vegetables',
    image: '/images/products/chilli.png',
    tagline: 'High-pungency hybrid for both green and dry harvest',
    description:
      'Cygnus Agni is a dual-purpose chilli hybrid with long, slightly wrinkled fruits that mature to a glossy deep red. High capsaicin content and good dry recovery make it suitable for both green picking and dry chilli production.',
    highlights: [
      'Fruit length of 10-12 cm with high pungency',
      'Attractive glossy red colour on drying',
      'Good dry recovery ratio',
      'Tolerant to thrips and mite damage',
    ],
    specs: [
      { label: 'Maturity', value: '60-65 days to first green picking' },
      { label: 'Fruit length', value: '10-12 cm' },
      { label: 'Pungency', value: 'High' },
      { label: 'Use', value: 'Green and dry' },
      { label: 'Season', value: 'Kharif and rabi' },
      { label: 'Seed rate', value: '80-100 g per acre' },
    ],
    packing: '10 g, 25 g, 100 g pouches',
  },
  {
    slug: 'cygnus-neelam-brinjal',
    variety: 'Cygnus Neelam',
    crop: 'Brinjal',
    category: 'vegetables',
    image: '/images/products/brinjal.png',
    tagline: 'Glossy purple oval fruits with a long bearing period',
    description:
      'Cygnus Neelam produces attractive glossy purple oval fruits with a light green calyx and few spines. The plant continues to bear over a long period, giving growers multiple pickings from a single crop.',
    highlights: [
      'Attractive glossy purple oval fruits',
      'Few spines, easy and safe picking',
      'Long bearing period with multiple pickings',
      'Wide adaptability across seasons',
    ],
    specs: [
      { label: 'Maturity', value: '55-60 days after transplanting' },
      { label: 'Fruit weight', value: '150-200 g' },
      { label: 'Fruit shape', value: 'Oval, glossy purple' },
      { label: 'Plant habit', value: 'Semi-spreading, vigorous' },
      { label: 'Season', value: 'All seasons' },
      { label: 'Seed rate', value: '80-100 g per acre' },
    ],
    packing: '10 g, 50 g pouches',
  },
  {
    slug: 'cygnus-harit-bitter-gourd',
    variety: 'Cygnus Harit',
    crop: 'Bitter Gourd',
    category: 'vegetables',
    image: '/images/products/bitter-gourd.png',
    tagline: 'Uniform spindle-shaped fruits with deep green ridges',
    description:
      'Cygnus Harit is an early bitter gourd hybrid with uniform spindle-shaped fruits, deep green colour and prominent ridges. Strong vine vigour and continuous flowering support high total yield per acre.',
    highlights: [
      'Early first harvest from 45-50 days',
      'Uniform fruits of 14-16 cm, 90-110 g',
      'Deep green colour with prominent ridges',
      'Vigorous vine with continuous flowering',
    ],
    specs: [
      { label: 'Maturity', value: '45-50 days to first harvest' },
      { label: 'Fruit length', value: '14-16 cm' },
      { label: 'Fruit weight', value: '90-110 g' },
      { label: 'Fruit colour', value: 'Deep green' },
      { label: 'Season', value: 'Kharif and summer' },
      { label: 'Seed rate', value: '800 g - 1 kg per acre' },
    ],
    packing: '50 g, 100 g, 500 g pouches',
  },
  {
    slug: 'cygnus-sheetal-cucumber',
    variety: 'Cygnus Sheetal',
    crop: 'Cucumber',
    category: 'vegetables',
    image: '/images/products/cucumber.png',
    tagline: 'Crisp, straight fruits with uniform green colour',
    description:
      'Cygnus Sheetal is an early cucumber hybrid producing straight, uniform, medium-green fruits with crisp white flesh and a non-bitter taste. It performs well in open field as well as protected cultivation.',
    highlights: [
      'Straight, uniform fruits of 16-18 cm',
      'Crisp, non-bitter white flesh',
      'Early and concentrated first flush',
      'Suited to open field and protected culture',
    ],
    specs: [
      { label: 'Maturity', value: '40-45 days to first harvest' },
      { label: 'Fruit length', value: '16-18 cm' },
      { label: 'Fruit colour', value: 'Uniform medium green' },
      { label: 'Flesh', value: 'Crisp, white, non-bitter' },
      { label: 'Season', value: 'Summer and kharif' },
      { label: 'Seed rate', value: '400-500 g per acre' },
    ],
    packing: '50 g, 100 g, 500 g pouches',
  },
  {
    slug: 'cygnus-madhu-watermelon',
    variety: 'Cygnus Madhu',
    crop: 'Watermelon',
    category: 'fruits-melons',
    image: '/images/products/watermelon.png',
    tagline: 'High-TSS crimson flesh with a tough rind for long haul',
    description:
      'Cygnus Madhu is an oblong watermelon hybrid with dark green stripes over a light green rind, deep crimson flesh and small seeds. High total soluble solids and a tough rind combine sweetness with excellent transport strength.',
    highlights: [
      'Average fruit weight of 6-8 kg',
      'Deep crimson flesh with TSS of 12-13%',
      'Tough rind for long-distance transport',
      'Uniform fruit shape and size at harvest',
    ],
    specs: [
      { label: 'Maturity', value: '80-85 days after sowing' },
      { label: 'Fruit weight', value: '6-8 kg' },
      { label: 'Flesh colour', value: 'Deep crimson red' },
      { label: 'TSS', value: '12-13%' },
      { label: 'Season', value: 'Summer' },
      { label: 'Seed rate', value: '300-400 g per acre' },
    ],
    packing: '50 g, 100 g tins',
  },
  {
    slug: 'cygnus-kesar-muskmelon',
    variety: 'Cygnus Kesar',
    crop: 'Muskmelon',
    category: 'fruits-melons',
    image: '/images/products/muskmelon.png',
    tagline: 'Well-netted fruits with thick saffron flesh',
    description:
      'Cygnus Kesar is a netted muskmelon hybrid with round to slightly oval fruits, dense netting and thick saffron-orange flesh. A small seed cavity and firm flesh give good edible recovery and shelf life.',
    highlights: [
      'Dense, attractive netting on rind',
      'Thick saffron-orange flesh, small cavity',
      'TSS of 12-14% with strong aroma',
      'Firm flesh for extended shelf life',
    ],
    specs: [
      { label: 'Maturity', value: '70-75 days after sowing' },
      { label: 'Fruit weight', value: '900 g - 1.2 kg' },
      { label: 'Flesh colour', value: 'Saffron orange' },
      { label: 'TSS', value: '12-14%' },
      { label: 'Season', value: 'Summer' },
      { label: 'Seed rate', value: '250-300 g per acre' },
    ],
    packing: '50 g, 100 g tins',
  },
  {
    slug: 'cygnus-shakti-maize',
    variety: 'Cygnus Shakti',
    crop: 'Maize',
    category: 'field-crops',
    image: '/images/products/maize.png',
    tagline: 'Full-season hybrid with well-filled orange-yellow cobs',
    description:
      'Cygnus Shakti is a single-cross maize hybrid with a strong stem, semi-erect leaves and long, well-filled cobs. Deep orange-yellow flint-dent grains with high test weight suit both grain and feed markets.',
    highlights: [
      'Long cobs with tip-to-tip grain filling',
      'Strong stem with good lodging resistance',
      'Deep orange-yellow flint-dent grain',
      'Tolerant to turcicum leaf blight',
    ],
    specs: [
      { label: 'Maturity', value: '110-115 days' },
      { label: 'Grain colour', value: 'Deep orange yellow' },
      { label: 'Cob length', value: '18-20 cm' },
      { label: 'Plant height', value: '210-230 cm' },
      { label: 'Season', value: 'Kharif and rabi' },
      { label: 'Seed rate', value: '8-10 kg per acre' },
    ],
    packing: '5 kg bags',
  },
  {
    slug: 'cygnus-swarna-paddy',
    variety: 'Cygnus Swarna',
    crop: 'Paddy',
    category: 'field-crops',
    image: '/images/products/paddy.png',
    tagline: 'Medium-slender grain with low chaffiness',
    description:
      'Cygnus Swarna is a medium-duration paddy hybrid with heavy, compact panicles and medium-slender translucent grain. Low chaffiness and a semi-dwarf plant type give reliable yields with minimal lodging.',
    highlights: [
      'Heavy compact panicles, low chaffiness',
      'Medium-slender translucent grain',
      'Semi-dwarf plant with lodging resistance',
      'Good milling and head rice recovery',
    ],
    specs: [
      { label: 'Maturity', value: '125-130 days' },
      { label: 'Grain type', value: 'Medium slender' },
      { label: 'Plant height', value: '105-115 cm' },
      { label: 'Milling', value: 'High head rice recovery' },
      { label: 'Season', value: 'Kharif and rabi' },
      { label: 'Seed rate', value: '6-8 kg per acre' },
    ],
    packing: '5 kg bags',
  },
  {
    slug: 'cygnus-bala-bajra',
    variety: 'Cygnus Bala',
    crop: 'Bajra (Pearl Millet)',
    category: 'field-crops',
    image: '/images/products/bajra.png',
    tagline: 'Drought-hardy pearl millet with compact earheads',
    description:
      'Cygnus Bala is a pearl millet hybrid bred for rainfed and low-input conditions. Good tillering, compact cylindrical earheads and bold grey grain deliver dependable yield with limited moisture, while the crop also gives useful fodder.',
    highlights: [
      'Performs under low moisture and light soils',
      'Compact cylindrical earheads of 24-28 cm',
      'Bold grey grain with high test weight',
      'Good downy mildew resistance',
    ],
    specs: [
      { label: 'Maturity', value: '78-82 days' },
      { label: 'Earhead length', value: '24-28 cm' },
      { label: 'Grain colour', value: 'Bold grey' },
      { label: 'Plant height', value: '190-210 cm' },
      { label: 'Season', value: 'Kharif and summer' },
      { label: 'Seed rate', value: '1.5-2 kg per acre' },
    ],
    packing: '1.5 kg packets' ,
  },
  {
    slug: 'cygnus-kapas-cotton',
    variety: 'Cygnus Kapas',
    crop: 'Cotton',
    category: 'field-crops',
    image: '/images/products/cotton.png',
    tagline: 'Compact plant with good boll retention and staple length',
    description:
      'Cygnus Kapas is a medium-duration cotton hybrid with a compact plant frame, sympodial branching and good boll retention. Easy picking, clean lint and a staple length of 28-29 mm make it suited to both rainfed and irrigated tracts.',
    highlights: [
      'Boll weight of 5.0-5.5 g with good retention',
      'Staple length of 28-29 mm, clean lint',
      'Compact frame suited to closer spacing',
      'Tolerant to sucking pest pressure',
    ],
    specs: [
      { label: 'Maturity', value: '150-160 days' },
      { label: 'Boll weight', value: '5.0-5.5 g' },
      { label: 'Staple length', value: '28-29 mm' },
      { label: 'Plant habit', value: 'Compact, sympodial' },
      { label: 'Season', value: 'Kharif' },
      { label: 'Seed rate', value: '450 g per acre' },
    ],
    packing: '450 g packets',
  },
]

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug)
}

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug)
}

export function productsByCategory(slug: CategorySlug) {
  return products.filter((product) => product.category === slug)
}

export const featuredProducts = [
  'cygnus-vijay-okra',
  'cygnus-agni-chilli',
  'cygnus-rakshak-tomato',
  'cygnus-madhu-watermelon',
].map((slug) => getProduct(slug)!)
