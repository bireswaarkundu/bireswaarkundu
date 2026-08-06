import { ASSET_PATHS } from './projectImages.js';

export const DOMAIN_CATEGORIES = [
  { id: 'Ad Campaign', label: 'AD CAMPAIGN', count: 3 },
  { id: 'Branding', label: 'BRANDING IDENTITY', count: 3, subCategories: ['Innofusion', 'Phoenix', 'Weld'] },
  { id: 'Concept-driven design', label: 'CONCEPT-DRIVEN DESIGN', count: 5 },
  { id: 'Social Media Poster', label: 'SOCIAL MEDIA POSTERS', count: 16 },
];

export const TYPE_SPECIMENS = [
  {
    fontName: 'Air India Display Sans',
    category: 'Brand Display',
    pairingSuggestion: 'Paired with Plus Jakarta Sans Bold for High-Impact Headlines',
  },
  {
    fontName: 'IndiGo Display Sans',
    category: 'Aviation Corporate',
    pairingSuggestion: 'Paired with Playfair Cursive Script for Emotional Accents',
  },
  {
    fontName: 'Plus Jakarta Sans',
    category: 'Modern Grotesk',
    pairingSuggestion: 'Paired with JetBrains Mono for Precision Campaign Specs',
  },
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Brand Immersion & Strategic Brief',
    subtitle: 'Extracting core brand values & audience insights',
    iconName: 'Compass',
    description:
      'We begin by analyzing campaign objectives, key value propositions, and brand guidelines to establish a compelling creative narrative.',
    deliverables: [
      'Campaign Moodboards & Creative Direction',
      'Target Demographic Persona Alignment',
      'Competitor Ad Positioning Analysis',
      'Key Messaging Lockups',
    ],
  },
  {
    number: '02',
    title: 'Art Direction & Visual Compositing',
    subtitle: 'Crafting high-fidelity visual assets & photography',
    iconName: 'Layers',
    description:
      'Designing custom vector compositions, multi-figure character styling, and atmospheric lighting backgrounds tailored to media formats.',
    deliverables: [
      'High-Resolution Key Visual Composites',
      'Lighting & Perspective Match Drafts',
      'Color Palette & Palette Swatches',
      'Custom Illustration & Asset Rendering',
    ],
  },
  {
    number: '03',
    title: 'Typographic Layout & Media Scaling',
    subtitle: 'Multi-channel layout adaptation & hierarchy',
    iconName: 'PenTool',
    description:
      'Refining headlines, call-to-action lockups, and brand iconography across billboards, print spreads, terminal displays, and social ads.',
    deliverables: [
      'Multi-Format Print & OOH Billboards',
      'Airport Kiosk & Digital Display Ratios',
      'Social Media Ad Variants',
      'Vector Brand Logo & QR Integration',
    ],
  },
  {
    number: '04',
    title: 'Final Production & Pre-Press Delivery',
    subtitle: 'Color-calibrated print assets & digital export',
    iconName: 'CheckCircle2',
    description:
      'Preparing CMYK print-ready files, vector press proofs, and high-density RGB digital assets optimized for seamless rollout.',
    deliverables: [
      'CMYK Print-Ready PDF/X Packages',
      'Digital Display RGB Assets',
      'Brand Style Sheet & Typography Tokens',
      'Final Production Approval Package',
    ],
  },
];

export const TESTIMONIALS = [
  {
    author: 'Sourodeep Ghosh',
    role: 'Co-Founder',
    company: '@Agenc-E & Frikey',
    avatar: ASSET_PATHS.SOURODEEP_GHOSH,
    quote:
      'Working with Bireswaar Kundu was a very good and seamless experience. He is one of the most versatile people and a brilliant creative mind. I am very impressed by his work ethics and ability to deliver projects on a consistent level with most dedication. Highly recommend him for your design and marketing work. You will not just get an designer, you will get a reliable partner for your creative creations.',
  },
];

export const PROJECTS = [
  // =========================================================================
  // DOMAIN 1: AD CAMPAIGN
  // =========================================================================
  {
    id: 'air-india-family-travel',
    title: 'Air India — Family Travel, Made Effortless',
    category: 'Ad Campaign',
    domain: 'Ad Campaign',
    client: 'Air India',
    year: '2025',
    medium: 'OOH Billboard & Print Campaign',
    thumbnail: ASSET_PATHS.AIR_INDIA_01,
    bentoSize: 'hero', // 2 cols, 2 rows in bento
    bentoTag: '01 // AD CAMPAIGN',
    shortDescription:
      'Multi-generational family travel advertising campaign featuring vibrant character art direction, terminal window skylines, and warm hospitality branding.',
    deliverables: [
      'Key Visual Art Direction',
      'Multi-Figure Compositing',
      'OOH Billboard Layouts',
      'Airport Terminal Print Package',
    ],
    caseStudy: {
      brief:
        'Develop a warm, inclusive advertising campaign celebrating multi-generational family journeys with Air India across domestic and international routes.',
      constraint:
        'Harmonize tradition with contemporary aviation aesthetics while retaining high contrast legibility across large format billboard displays.',
      processSteps: [
        {
          title: '01. Character & Wardrobe Direction',
          description:
            'Styling distinct generations—children, working parents, and grandparents—in harmonious warm tones reflecting Indian heritage.',
        },
        {
          title: '02. Architectural Terminal Framing',
          description:
            'Integrating subtle line art of airport terminal arches and taking-off aircraft silhouettes to anchor the travel context.',
        },
        {
          title: '03. Typographic Hierarchy',
          description:
            'Bold geometric headlines paired with clean monospaced metadata for instant billboard impact and legibility.',
        },
      ],
      colorPalette: [
        { name: 'Air India Red', hex: '#D71921' },
        { name: 'Warm Alabaster', hex: '#FFF8F0' },
        { name: 'Terminal Gold', hex: '#D98A28' },
        { name: 'Deep Charcoal', hex: '#1A1A1A' },
      ],
      typographyUsed: ['Plus Jakarta Sans Black', 'Air India Display Sans', 'JetBrains Mono'],
      keyMetric: '+42% Brand Sentiment',
      outcome:
        'The campaign achieved nationwide acclaim across metro airport terminals, significantly boosting family booking interest.',
      gallery: [
        { url: ASSET_PATHS.AIR_INDIA_01, caption: 'Primary Campaign Key Visual (OOH Billboard Spec)' },
        { url: ASSET_PATHS.AIR_INDIA_02, caption: 'Secondary Variant — Dream Destination Aircraft Window View' },
      ],
    },
  },
  {
    id: 'air-india-dream-destination',
    title: 'Air India — Dream Destination (Paris & Dubai)',
    category: 'Ad Campaign',
    domain: 'Ad Campaign',
    client: 'Air India',
    year: '2025',
    medium: 'Digital Kiosk & Terminal Print',
    thumbnail: ASSET_PATHS.AIR_INDIA_02,
    bentoSize: 'tall',
    bentoTag: '02 // AD CAMPAIGN',
    shortDescription:
      'Framed airplane portal perspective showcasing iconic global landmarks (Eiffel Tower & Burj Khalifa) with warm golden hour sky gradient.',
    deliverables: [
      'Dual Portal Layout Architecture',
      'Vector Landmark Compositing',
      'Golden Hour Color Palette',
      'Digital Kiosk Ratios',
    ],
    caseStudy: {
      brief:
        'Promote global destination connectivity through a visual narrative that places the traveler right inside the aircraft looking out at world landmarks.',
      constraint:
        'Seamlessly unite two contrasting destinations (Paris & Dubai) into a single balanced visual narrative.',
      processSteps: [
        {
          title: '01. Window Portal Grid',
          description: 'Constructing dual aircraft window silhouettes with soft ambient rim lighting.',
        },
        {
          title: '02. Vector Architecture',
          description: 'Rendering precision vector silhouettes of the Eiffel Tower and Burj Khalifa.',
        },
      ],
      colorPalette: [
        { name: 'Golden Hour', hex: '#FCE1C2' },
        { name: 'Sunset Amber', hex: '#E8A76C' },
        { name: 'Air India Red', hex: '#D71921' },
      ],
      typographyUsed: ['Plus Jakarta Sans ExtraBold', 'JetBrains Mono'],
      keyMetric: 'Global Campaign Reach',
      outcome: 'Featured prominently across international airport lounges and digital booking portals.',
      gallery: [{ url: ASSET_PATHS.AIR_INDIA_02, caption: 'Aircraft Portal View Artwork' }],
    },
  },
  {
    id: 'indigo-where-you-belong',
    title: 'IndiGo — From Where You Are, To Where You Belong',
    category: 'Ad Campaign',
    domain: 'Ad Campaign',
    client: 'IndiGo Airlines',
    year: '2025',
    medium: 'Terminal Display & Print Ad',
    thumbnail: ASSET_PATHS.INDIGO_01,
    bentoSize: 'wide',
    bentoTag: '03 // AD CAMPAIGN',
    shortDescription:
      'Immersive night cabin perspective looking out over Mumbai Gateway of India, combining corporate navy precision with emotional cursive accents.',
    deliverables: [
      'Night Flight Ambient Compositing',
      'Landmark Vector Illustration',
      'Service Icon System',
      'QR Code Booking Integration',
    ],
    caseStudy: {
      brief:
        'Reinforce IndiGo as India’s preferred domestic carrier by evoking the emotional warmth of returning home.',
      constraint:
        'Balance dark cabin interior ambiance with bright sunset reflections off the Arabian Sea.',
      processSteps: [
        {
          title: '01. Cabin Ambiance',
          description: 'Using deep indigo gradients with subtle blue LED halo rings around the window frame.',
        },
        {
          title: '02. Heritage Landmark',
          description: 'Compositing Mumbai’s Gateway of India and Taj Palace Hotel against a warm sunset.',
        },
      ],
      colorPalette: [
        { name: 'IndiGo Navy', hex: '#001233' },
        { name: 'Electric Sky Blue', hex: '#58A6FF' },
        { name: 'Sunset Amber', hex: '#EAA855' },
      ],
      typographyUsed: ['Plus Jakarta Sans Black', 'Playfair Display Italic', 'JetBrains Mono'],
      keyMetric: '#GoingPlaces Campaign Success',
      outcome: 'High audience engagement across digital ad channels and inflight magazine spreads.',
      gallery: [{ url: ASSET_PATHS.INDIGO_01, caption: 'IndiGo Key Visual Poster' }],
    },
  },

  // =========================================================================
  // DOMAIN 2: BRANDING (INNOFUSION, PHOENIX, WELD)
  // =========================================================================
  {
    id: 'branding-innofusion',
    title: 'Innofusion — Corporate Brand Identity System',
    category: 'Brand Identity',
    domain: 'Branding',
    subDomain: 'Innofusion',
    client: 'Innofusion Corp',
    year: '2025',
    medium: 'Brand Guidelines & Identity Architecture',
    thumbnail: ASSET_PATHS.INNOFUSION_1,
    bentoSize: 'normal',
    bentoTag: '04 // BRANDING • INNOFUSION',
    shortDescription:
      'Comprehensive brand identity system featuring modern geometric logomarks, corporate identity applications, and brand collateral guidelines.',
    deliverables: [
      'Logo Mark Architecture',
      'Corporate Identity System',
      'Brand Style Guide',
      'Stationery & Digital Assets',
    ],
    caseStudy: {
      brief:
        'Craft a forward-looking corporate identity system for Innofusion that communicates innovation, structure, and reliability.',
      constraint:
        'Maintain absolute aesthetic clarity across both digital interfaces and high-grade print collateral.',
      processSteps: [
        {
          title: '01. Grid Geometry',
          description: 'Constructing a modular vector logomark based on golden ratio proportions.',
        },
        {
          title: '02. Collateral Mockups',
          description: 'Testing identity placement across business cards, digital banners, and brand apparel.',
        },
      ],
      colorPalette: [
        { name: 'Charcoal Black', hex: '#1A1A1A' },
        { name: 'Pure White', hex: '#FFFFFF' },
        { name: 'Electric Accent', hex: '#5D5CDE' },
      ],
      typographyUsed: ['Plus Jakarta Sans', 'JetBrains Mono'],
      keyMetric: 'Complete Brand Launch',
      outcome: 'Successfully deployed across all company assets, corporate headquarters, and digital platforms.',
      gallery: [
        { url: ASSET_PATHS.INNOFUSION_1, caption: 'Primary Identity Showcase 01' },
        { url: ASSET_PATHS.INNOFUSION_2, caption: 'Brand Collateral Layout 02' },
        { url: ASSET_PATHS.INNOFUSION_3, caption: 'Typography & Grid Architecture 03' },
        { url: ASSET_PATHS.INNOFUSION_4, caption: 'Digital Applications Mockup 04' },
      ],
    },
  },
  {
    id: 'branding-phoenix',
    title: 'Phoenix — Brand Identity & Product Packaging System',
    category: 'Brand Identity',
    domain: 'Branding',
    subDomain: 'Phoenix',
    client: 'Phoenix Studio',
    year: '2025',
    medium: 'Brand Experience & Packaging Architecture',
    thumbnail: ASSET_PATHS.PHOENIX_LOGO,
    bentoSize: 'hero',
    bentoTag: '05 // BRANDING • PHOENIX',
    shortDescription:
      'Expansive brand identity showcase encompassing 12 design assets including custom logomark variations, packaging layouts, and print identity guidelines.',
    deliverables: [
      'Brand Mark & Vector Assets',
      '12-Piece Asset Suite',
      'Physical Packaging Layouts',
      'Identity Architecture',
    ],
    caseStudy: {
      brief:
        'Design a high-end brand identity and packaging suite for Phoenix that captures elegance, power, and modern sophistication.',
      constraint:
        'Deliver a versatile visual system that scales effortlessly from tiny embossed foil seals to massive display banners.',
      processSteps: [
        {
          title: '01. Logo Symbol Evolution',
          description: 'Drafting vector emblem concepts synthesizing bird-in-flight geometry with minimal line weights.',
        },
        {
          title: '02. Packaging Architecture',
          description: 'Designing physical dylines, box sleeves, and tactile finish specifications.',
        },
      ],
      colorPalette: [
        { name: 'Deep Charcoal', hex: '#111111' },
        { name: 'Alabaster Canvas', hex: '#F5F5F0' },
        { name: 'Gold Foil Accent', hex: '#D4AF37' },
      ],
      typographyUsed: ['Syne Bold', 'Playfair Display', 'Plus Jakarta Sans'],
      keyMetric: '12 Identity Assets Created',
      outcome: 'Full brand rollout across luxury retail packaging and international e-commerce channels.',
      gallery: [
        { url: ASSET_PATHS.PHOENIX_LOGO, caption: 'Official Logo Mark Lockup' },
        { url: ASSET_PATHS.PHOENIX_1, caption: 'Brand Specimen 01' },
        { url: ASSET_PATHS.PHOENIX_2, caption: 'Brand Specimen 02' },
        { url: ASSET_PATHS.PHOENIX_3, caption: 'Brand Specimen 03' },
        { url: ASSET_PATHS.PHOENIX_4, caption: 'Brand Specimen 04' },
        { url: ASSET_PATHS.PHOENIX_5, caption: 'Brand Specimen 05' },
        { url: ASSET_PATHS.PHOENIX_6, caption: 'Brand Specimen 06' },
        { url: ASSET_PATHS.PHOENIX_7, caption: 'Brand Specimen 07' },
        { url: ASSET_PATHS.PHOENIX_8, caption: 'Brand Specimen 08' },
        { url: ASSET_PATHS.PHOENIX_9, caption: 'Brand Specimen 09' },
        { url: ASSET_PATHS.PHOENIX_10, caption: 'Brand Specimen 10' },
        { url: ASSET_PATHS.PHOENIX_ASSET2, caption: 'Vector Asset Emblem' },
      ],
    },
  },
  {
    id: 'branding-weld',
    title: 'Weld — Industrial Brand & Packaging Architecture',
    category: 'Brand Identity',
    domain: 'Branding',
    subDomain: 'Weld',
    client: 'Weld Industrial',
    year: '2025',
    medium: 'Industrial Brand System & Product Packaging',
    thumbnail: ASSET_PATHS.WELD_1,
    bentoSize: 'wide',
    bentoTag: '06 // BRANDING • WELD',
    shortDescription:
      'Industrial strength brand identity and packaging design system comprising 14 custom vector symbols, label specifications, and product wraps.',
    deliverables: [
      'Industrial Brand Identity',
      '14 Custom Design Assets',
      'Vector SVG Logos & Icons',
      'Product Packaging Wraps',
    ],
    caseStudy: {
      brief:
        'Create a bold, indestructible industrial brand identity system for Weld product lines across physical packaging and digital specs.',
      constraint:
        'Ensure legibility and instant brand recognition under harsh industrial environment conditions.',
      processSteps: [
        {
          title: '01. Heavy Duty Typography',
          description: 'Custom block lettering engineered with high structural stability and solid ink density.',
        },
        {
          title: '02. Packaging System',
          description: 'Developing high-contrast product labeling system for containers and machinery.',
        },
      ],
      colorPalette: [
        { name: 'Industrial Black', hex: '#121212' },
        { name: 'Steel White', hex: '#F9F9FB' },
        { name: 'Safety Orange', hex: '#FF6B00' },
      ],
      typographyUsed: ['Syne ExtraBold', 'JetBrains Mono'],
      keyMetric: '14 Industrial Assets Delivered',
      outcome: 'Streamlined entire product catalog packaging across international distributor network.',
      gallery: [
        { url: ASSET_PATHS.WELD_1, caption: 'Weld Packaging & Product Specimen 01' },
        { url: ASSET_PATHS.WELD_2, caption: 'Weld Product Specimen 02' },
        { url: ASSET_PATHS.WELD_3, caption: 'Weld Product Specimen 03' },
        { url: ASSET_PATHS.WELD_G, caption: 'Weld Graphic Brand Specimen' },
        { url: ASSET_PATHS.WELD_ASSET_7, caption: 'Industrial Vector Asset 07' },
        { url: ASSET_PATHS.WELD_ASSET_8, caption: 'Industrial Vector Asset 08' },
        { url: ASSET_PATHS.WELD_ASSET_9, caption: 'Industrial Vector Asset 09' },
        { url: ASSET_PATHS.WELD_ASSET_10, caption: 'Industrial Vector Asset 10' },
      ],
    },
  },

  // =========================================================================
  // DOMAIN 3: CONCEPT-DRIVEN DESIGN
  // =========================================================================
  {
    id: 'concept-wordsworth',
    title: 'Poetic Rest — William Wordsworth Typographic Poster',
    category: 'Concept-Driven Design',
    domain: 'Concept-driven design',
    client: 'Studio Exploration',
    year: '2025',
    medium: 'Editorial Typography & Fine Art Poster',
    thumbnail: ASSET_PATHS.CONCEPT_WORDSWORTH,
    bentoSize: 'tall',
    bentoTag: '07 // CONCEPT DESIGN',
    shortDescription:
      'Atmospheric editorial graphic design exploring themes of mortality and silence from William Wordsworth’s iconic poem.',
    deliverables: [
      'Poetic Text Layout',
      'Atmospheric Texture Compositing',
      'Editorial Type Hierarchy',
      'Limited Print Run Spec',
    ],
    caseStudy: {
      brief:
        'Translate classic Romantic poetry into a contemporary tactile editorial design through experimental typography.',
      constraint:
        'Evoke deep emotional stillness using minimal visual elements and subtle micro-textures.',
      processSteps: [
        {
          title: '01. Text Setting',
          description: 'Setting Wordsworth text with delicate tracking and precise negative space.',
        },
      ],
      colorPalette: [
        { name: 'Slate Grey', hex: '#2A2D34' },
        { name: 'Uncoated Paper', hex: '#F4F1EA' },
      ],
      typographyUsed: ['Playfair Display Italic', 'Syne Regular'],
      keyMetric: 'Exhibition Selection',
      outcome: 'Displayed in local design studio showcase and printed on 300gsm textured stock.',
      gallery: [{ url: ASSET_PATHS.CONCEPT_WORDSWORTH, caption: 'Wordsworth Typographic Poster' }],
    },
  },
  {
    id: 'concept-holi-colors',
    title: 'Splash Colors, Spread Joy — Holi Creative Concept',
    category: 'Concept-Driven Design',
    domain: 'Concept-driven design',
    client: 'Cultural Design Series',
    year: '2025',
    medium: 'Digital Fine Art & Cultural Graphic',
    thumbnail: ASSET_PATHS.CONCEPT_HOLI,
    bentoSize: 'normal',
    bentoTag: '08 // CONCEPT DESIGN',
    shortDescription:
      'Vibrant festival design concept celebrating Holi where art meets festivity, combining explosive pigment textures with refined typography.',
    deliverables: [
      'Pigment Texture Compositing',
      'Vibrant Color Calibration',
      'Festival Lockup Design',
      'Digital Media Ratios',
    ],
    caseStudy: {
      brief: 'Capture the chaotic energy and joy of Holi in a structured, high-fashion graphic poster.',
      constraint: 'Maintain crisp text legibility over complex multi-colored background textures.',
      processSteps: [
        {
          title: '01. Pigment Compositing',
          description: 'Layering organic powder splash textures with high contrast background masks.',
        },
      ],
      colorPalette: [
        { name: 'Gulal Pink', hex: '#FF007F' },
        { name: 'Sunshine Yellow', hex: '#FFD700' },
        { name: 'Royal Cyan', hex: '#00D2FF' },
      ],
      typographyUsed: ['Plus Jakarta Sans ExtraBold', 'Playfair Display Italic'],
      keyMetric: 'Viral Cultural Engagement',
      outcome: 'Shared widely across creative communities during Holi festivities.',
      gallery: [{ url: ASSET_PATHS.CONCEPT_HOLI, caption: 'Holi Festival Artwork' }],
    },
  },
  {
    id: 'concept-bengal-business',
    title: 'Bengal Means Business — April Fools Satire Poster',
    category: 'Concept-Driven Design',
    domain: 'Concept-driven design',
    client: 'Topical Satire Series',
    year: '2025',
    medium: 'Satirical Editorial Graphic',
    thumbnail: ASSET_PATHS.CONCEPT_BENGAL_BUSINESS,
    bentoSize: 'normal',
    bentoTag: '09 // CONCEPT DESIGN',
    shortDescription:
      'Topical satirical poster created for April 1st, blending sharp political commentary with high-end corporate poster styling.',
    deliverables: [
      'Satirical Concept Development',
      'Corporate Poster Framing',
      'Topical Copywriting Lockup',
    ],
    caseStudy: {
      brief: 'Construct a humorous satirical graphic for April Fools Day poking gentle fun at corporate summit slogans.',
      constraint: 'Disguise the joke inside a believable, ultra-polished corporate poster framework.',
      processSteps: [
        {
          title: '01. Visual Irony',
          description: 'Pairing formal corporate layout grids with tongue-in-cheek editorial punchlines.',
        },
      ],
      colorPalette: [
        { name: 'Corporate Blue', hex: '#0055FF' },
        { name: 'Crisp White', hex: '#FFFFFF' },
      ],
      typographyUsed: ['Syne Bold', 'JetBrains Mono'],
      keyMetric: 'High Shareability',
      outcome: 'Gained massive social interaction across design forums for clever topical execution.',
      gallery: [{ url: ASSET_PATHS.CONCEPT_BENGAL_BUSINESS, caption: 'Bengal Means Business Graphic' }],
    },
  },
  {
    id: 'concept-bhasha-divas',
    title: 'আন্তর্জাতিক মাতৃভাষা দিবস — Bengali Language Heritage',
    category: 'Concept-Driven Design',
    domain: 'Concept-driven design',
    client: 'Linguistic Heritage Series',
    year: '2025',
    medium: 'Multilingual Typography Poster',
    thumbnail: ASSET_PATHS.CONCEPT_BHASHA_DIVAS,
    bentoSize: 'normal',
    bentoTag: '10 // CONCEPT DESIGN',
    shortDescription:
      'Honoring International Mother Language Day with bespoke Bengali typography and traditional calligraphic lockups.',
    deliverables: [
      'Bengali Letterform Customization',
      'Heritage Lockup Composition',
      'Cultural Print Design',
    ],
    caseStudy: {
      brief: 'Pay tribute to Bengali language heritage through a modern typographic poster.',
      constraint: 'Respect classic Bengali letterform proportions while infusing modern minimalist spacing.',
      processSteps: [
        {
          title: '01. Bengali Type Geometry',
          description: 'Refining Bengali script curves for seamless integration with Latin metadata.',
        },
      ],
      colorPalette: [
        { name: 'Crimson Red', hex: '#C8102E' },
        { name: 'Deep Ink', hex: '#111111' },
      ],
      typographyUsed: ['Custom Bengali Sans', 'JetBrains Mono'],
      keyMetric: 'Cultural Preservation Award',
      outcome: 'Celebrated across regional culture portals as an exemplary tribute to language roots.',
      gallery: [{ url: ASSET_PATHS.CONCEPT_BHASHA_DIVAS, caption: 'Bhasha Divas Poster' }],
    },
  },
  {
    id: 'concept-women-respect',
    title: 'Women’s Dignity & Equality — Social Awareness Graphic',
    category: 'Concept-Driven Design',
    domain: 'Concept-driven design',
    client: 'Social Impact Series',
    year: '2025',
    medium: 'Public Awareness Campaign Artwork',
    thumbnail: ASSET_PATHS.CONCEPT_WOMEN_RESPECT,
    bentoSize: 'normal',
    bentoTag: '11 // CONCEPT DESIGN',
    shortDescription:
      'Poignant social advocacy design calling for respect, safety, and equal dignity for women through poetic Bengali text and rich visual symbolism.',
    deliverables: [
      'Social Advocacy Copywriting',
      'Symbolic Vector Illustration',
      'Public Awareness Layout',
    ],
    caseStudy: {
      brief: 'Design a high-impact social awareness poster advocating for gender equality and respect.',
      constraint: 'Convey a powerful, sensitive message with dignity, strength, and visual clarity.',
      processSteps: [
        {
          title: '01. Emotional Resonance',
          description: 'Harmonizing warm floral motif outlines with bold call-to-action typography.',
        },
      ],
      colorPalette: [
        { name: 'Magenta Rose', hex: '#D10056' },
        { name: 'Warm Cream', hex: '#FDFBF7' },
      ],
      typographyUsed: ['Custom Bengali Typography', 'Plus Jakarta Sans'],
      keyMetric: 'Non-Profit Media Feature',
      outcome: 'Used by community advocacy groups as a poster campaign for awareness rallies.',
      gallery: [{ url: ASSET_PATHS.CONCEPT_WOMEN_RESPECT, caption: 'Women Equality Campaign Poster' }],
    },
  },

  // =========================================================================
  // DOMAIN 4: SOCIAL MEDIA POSTER
  // =========================================================================
  {
    id: 'social-coming-soon',
    title: 'Coming Soon — Teaser Poster',
    category: 'Social Media Design',
    domain: 'Social Media Poster',
    client: 'Bireswaar Kundu Studio',
    year: '2026',
    medium: 'Teaser Poster Design',
    thumbnail: ASSET_PATHS.COMING_SOON,
    bentoSize: 'normal',
    bentoTag: '01 // SOCIAL POSTER • LAUNCH',
    shortDescription:
      'High-impact "Coming Soon" teaser poster designed for social media release and brand reveal.',
    deliverables: [
      'Social Media Teaser Poster',
      'High-Resolution Digital Asset',
      'Instagram Story & Feed Layouts',
    ],
    caseStudy: {
      brief: 'Create an engaging teaser poster to build anticipation for an upcoming project release.',
      constraint: 'Maintain high visual interest while withholding full details to pique curiosity.',
      processSteps: [
        {
          title: '01. Visual Lockup',
          description: 'Crafting bold typographic composition and dynamic lighting contrast.',
        },
      ],
      colorPalette: [
        { name: 'Studio Dark', hex: '#1A1A1A' },
        { name: 'Accent Blue', hex: '#5D5CDE' },
      ],
      typographyUsed: ['Syne ExtraBold', 'Plus Jakarta Sans'],
      keyMetric: 'Teaser Launch Campaign',
      outcome: 'Generated strong early engagement and audience anticipation.',
      gallery: [{ url: ASSET_PATHS.COMING_SOON, caption: 'Coming Soon Teaser Poster' }],
    },
  },
  {
    id: 'social-intro-post',
    title: 'Intro Post — Studio Launch Poster',
    category: 'Social Media Design',
    domain: 'Social Media Poster',
    client: 'Bireswaar Kundu Studio',
    year: '2026',
    medium: 'Announcement Poster',
    thumbnail: ASSET_PATHS.INTRO_POST,
    bentoSize: 'normal',
    bentoTag: '02 // SOCIAL POSTER • LAUNCH',
    shortDescription:
      'Bold introduction poster introducing the creative studio’s vision, services, and visual style.',
    deliverables: [
      'Introduction Social Poster',
      'Typography Hierarchy Layout',
      'Multi-Platform Ad Ratios',
    ],
    caseStudy: {
      brief: 'Establish brand identity and design philosophy through a introductory social post.',
      constraint: 'Balance clear messaging with expressive art direction.',
      processSteps: [
        {
          title: '01. Editorial Layout',
          description: 'Aligning high-contrast typography with modern layout grids.',
        },
      ],
      colorPalette: [
        { name: 'Obsidian Black', hex: '#0A0A0A' },
        { name: 'Vibrant Accent', hex: '#5D5CDE' },
      ],
      typographyUsed: ['Syne Mono', 'Plus Jakarta Sans'],
      keyMetric: 'Brand Announcement',
      outcome: 'Established brand positioning across digital channels.',
      gallery: [{ url: ASSET_PATHS.INTRO_POST, caption: 'Intro Post Graphic' }],
    },
  },
  {
    id: 'social-website-live',
    title: 'Website Is Live — Launch Poster',
    category: 'Social Media Design',
    domain: 'Social Media Poster',
    client: 'Bireswaar Kundu Studio',
    year: '2026',
    medium: 'Digital Launch Campaign',
    thumbnail: ASSET_PATHS.WEBSITE_IS_LIVE,
    bentoSize: 'normal',
    bentoTag: '03 // SOCIAL POSTER • LAUNCH',
    shortDescription:
      'Promotional launch poster announcing the official rollout of the new portfolio website.',
    deliverables: [
      'Website Launch Announcement Poster',
      'Digital Banner Asset',
      'Social Campaign Graphics',
    ],
    caseStudy: {
      brief: 'Drive social traffic to the newly launched interactive digital portfolio.',
      constraint: 'Highlight core digital features in a single striking poster format.',
      processSteps: [
        {
          title: '01. Launch Graphic System',
          description: 'Combining UI preview elements with bold announcement typography.',
        },
      ],
      colorPalette: [
        { name: 'Launch Blue', hex: '#5D5CDE' },
        { name: 'Cream Background', hex: '#F5F5F0' },
      ],
      typographyUsed: ['Playfair Display', 'Plus Jakarta Sans'],
      keyMetric: 'Direct Site Visitors',
      outcome: 'Drove massive opening day traffic to the live portfolio.',
      gallery: [{ url: ASSET_PATHS.WEBSITE_IS_LIVE, caption: 'Website is Live Poster' }],
    },
  },
  {
    id: 'social-my-app',
    title: 'My App — Product Feature Showcase',
    category: 'Social Media Design',
    domain: 'Social Media Poster',
    client: 'Product Showcase',
    year: '2026',
    medium: 'App Feature Social Poster',
    thumbnail: ASSET_PATHS.MY_APP,
    bentoSize: 'normal',
    bentoTag: '04 // SOCIAL POSTER • APP',
    shortDescription:
      'Sleek application promotional poster showcasing mobile UI features and user experience.',
    deliverables: [
      'Mobile App Promo Poster',
      'UI Screen Mockup Compositing',
      'Social Ad Assets',
    ],
    caseStudy: {
      brief: 'Highlight application features in an appealing social media promotional poster.',
      constraint: 'Render complex mobile screens clearly for social media mobile feeds.',
      processSteps: [
        {
          title: '01. Screen Compositing',
          description: 'Styling isometric and flat device frames with clean accent highlights.',
        },
      ],
      colorPalette: [
        { name: 'App Indigo', hex: '#5D5CDE' },
        { name: 'Pure White', hex: '#FFFFFF' },
      ],
      typographyUsed: ['Inter', 'Plus Jakarta Sans'],
      keyMetric: 'Mobile Engagement',
      outcome: 'Increased app showcase views and user signups.',
      gallery: [{ url: ASSET_PATHS.MY_APP, caption: 'My App Promotional Poster' }],
    },
  },
  {
    id: 'social-my-website',
    title: 'My Website — Digital Portfolio Showcase',
    category: 'Social Media Design',
    domain: 'Social Media Poster',
    client: 'Digital Portfolio',
    year: '2026',
    medium: 'Website Feature Poster',
    thumbnail: ASSET_PATHS.MY_WEBSITE,
    bentoSize: 'normal',
    bentoTag: '05 // SOCIAL POSTER • WEB',
    shortDescription:
      'Elegant showcase poster highlighting web design craft, layout structure, and aesthetic precision.',
    deliverables: [
      'Web Design Feature Poster',
      'Layout Breakdown Visuals',
      'Social Media Display Kit',
    ],
    caseStudy: {
      brief: 'Feature web design craftsmanship and responsive layout structure in a social graphic format.',
      constraint: 'Present web desktop layouts legized for portrait social screens.',
      processSteps: [
        {
          title: '01. Responsive Framing',
          description: 'Structuring browser UI mockups with high contrast background cards.',
        },
      ],
      colorPalette: [
        { name: 'Charcoal Noir', hex: '#1A1A1A' },
        { name: 'Vibrant Violet', hex: '#5D5CDE' },
      ],
      typographyUsed: ['Syne ExtraBold', 'JetBrains Mono'],
      keyMetric: 'Portfolio Feature Engagement',
      outcome: 'Widely praised for clean digital presentation.',
      gallery: [{ url: ASSET_PATHS.MY_WEBSITE, caption: 'My Website Showcase Poster' }],
    },
  },
  {
    id: 'social-weld-1',
    title: 'Weld Bakery — Layers of Happiness Poster',
    category: 'Social Media Design',
    domain: 'Social Media Poster',
    client: 'Weld Artisanal Bakery',
    year: '2025',
    medium: 'Bakery Social Campaign Poster',
    thumbnail: ASSET_PATHS.WELD_POSTER_1,
    bentoSize: 'normal',
    bentoTag: '06 // SOCIAL POSTER • BAKERY',
    shortDescription:
      'Appetizing social media poster for Weld Bakery featuring warm orange accents and "Layers of Happiness" headline typography.',
    deliverables: [
      'Social Media Bakery Graphic',
      'Food Art Direction',
      'Warm Pastel Background Compositing',
    ],
    caseStudy: {
      brief: 'Highlight fresh flaky pastry layers and pure ingredients for Weld Bakery.',
      constraint: 'Evoke warmth, quality, and mouth-watering freshness.',
      processSteps: [
        {
          title: '01. Food Art Direction',
          description: 'Focusing on golden flaky pastry textures and warm orange brand accents.',
        },
      ],
      colorPalette: [
        { name: 'Warm Bakery Orange', hex: '#E87A24' },
        { name: 'Cream Background', hex: '#FDFBF7' },
      ],
      typographyUsed: ['Syne ExtraBold', 'Playfair Display Italic'],
      keyMetric: 'High Social Engagement',
      outcome: 'Extensively appreciated across food enthusiast handles.',
      gallery: [{ url: ASSET_PATHS.WELD_POSTER_1, caption: 'Weld Bakery — Layers of Happiness Poster' }],
    },
  },
  {
    id: 'social-weld-2',
    title: 'Weld Bakery — Freshly Baked Option Poster',
    category: 'Social Media Design',
    domain: 'Social Media Poster',
    client: 'Weld Artisanal Bakery',
    year: '2025',
    medium: 'Interactive UI Social Poster',
    thumbnail: ASSET_PATHS.WELD_POSTER_2,
    bentoSize: 'normal',
    bentoTag: '07 // SOCIAL POSTER • BAKERY',
    shortDescription:
      'Creative social media poster blending steaming hot pastry photography with interactive order menu UI elements.',
    deliverables: [
      'Interactive Concept Graphic',
      'Steam Optics & Depth Effect',
      'Bakery UI Menu Overlay',
    ],
    caseStudy: {
      brief: 'Combine digital ordering menu UI with mouth-watering freshly baked savory roll photography.',
      constraint: 'Keep the UI dropdown overlay clean while accentuating the hot steam effect.',
      processSteps: [
        {
          title: '01. UI Menu Compositing',
          description: 'Overlaying pill selector UI directly onto depth-of-field food photography.',
        },
      ],
      colorPalette: [
        { name: 'Baking Sage Green', hex: '#6B8E78' },
        { name: 'Hot Orange Accent', hex: '#F27420' },
      ],
      typographyUsed: ['Plus Jakarta Sans', 'Inter'],
      keyMetric: 'Interactive Campaign Concept',
      outcome: 'Standout creative post praised for UI/food fusion.',
      gallery: [{ url: ASSET_PATHS.WELD_POSTER_2, caption: 'Weld Bakery — Freshly Baked Option Poster' }],
    },
  },
  {
    id: 'social-weld-3',
    title: 'Weld Bakery — Made With Love Poster',
    category: 'Social Media Design',
    domain: 'Social Media Poster',
    client: 'Weld Artisanal Bakery',
    year: '2025',
    medium: 'Brand Philosophy Poster',
    thumbnail: ASSET_PATHS.WELD_POSTER_3,
    bentoSize: 'normal',
    bentoTag: '08 // SOCIAL POSTER • BAKERY',
    shortDescription:
      'Warm brand philosophy poster showcasing 100% vegetarian savory puff pastry crafted fresh every day.',
    deliverables: [
      'Brand Quality Guarantee Poster',
      'Artisanal Flour & Herb Styling',
      'Vegetarian Badge Integration',
    ],
    caseStudy: {
      brief: 'Emphasize Weld Bakery’s commitment to pure ingredients and daily artisanal baking.',
      constraint: 'Balance bold typography lockup with organic ingredient styling.',
      processSteps: [
        {
          title: '01. Ingredient Framing',
          description: 'Arranging fresh spinach, mushrooms, and wheat stalks around golden puff pastry.',
        },
      ],
      colorPalette: [
        { name: 'Olive Green', hex: '#5A6B48' },
        { name: 'Terracotta Orange', hex: '#D95828' },
      ],
      typographyUsed: ['Syne ExtraBold', 'Plus Jakarta Sans'],
      keyMetric: 'Pure Ingredient Campaign',
      outcome: 'Strengthened brand trust and customer loyalty.',
      gallery: [{ url: ASSET_PATHS.WELD_POSTER_3, caption: 'Weld Bakery — Made With Love Poster' }],
    },
  },
  {
    id: 'social-nahoums-bakery',
    title: 'Nahoum & Sons — Heritage Confectionery Social Series',
    category: 'Social Media Design',
    domain: 'Social Media Poster',
    client: 'Nahoum & Sons Bakery',
    year: '2025',
    medium: '5-Part Social Campaign Series',
    thumbnail: ASSET_PATHS.NAHOUM_1,
    bentoSize: 'hero',
    bentoTag: '12 // SOCIAL POSTER • SERIES',
    shortDescription:
      'A 5-part social media campaign celebrating Kolkata’s iconic Jewish bakery, featuring mouth-watering product showcase layouts for rich fruit cakes, pastries, and fudges.',
    deliverables: [
      '5-Part Social Carousel Suite',
      'Food Photography Art Direction',
      'Heritage Bakery Branding',
      'Instagram & Meta Ad Ratios',
    ],
    caseStudy: {
      brief:
        'Re-engage nostalgic food lovers with Nahoum’s legendary baked treats through a 5-part appetizing social media series.',
      constraint:
        'Preserve the century-old vintage charm of the establishment while appealing to contemporary Instagram audiences.',
      processSteps: [
        {
          title: '01. Nostalgic Color Grading',
          description: 'Enhancing warm golden tones of baked goods against rich mahogany backdrop shadows.',
        },
        {
          title: '02. Carousel Framing',
          description: 'Constructing seamless layout continuity across 5 swipeable social cards.',
        },
      ],
      colorPalette: [
        { name: 'Golden Crust', hex: '#D48C46' },
        { name: 'Dark Chocolate', hex: '#3B1E08' },
        { name: 'Cream Velvet', hex: '#FFF5E6' },
      ],
      typographyUsed: ['Playfair Display', 'Plus Jakarta Sans'],
      keyMetric: '+180% Engagement Rate',
      outcome: 'Drove massive holiday ordering queues during festive bakery season.',
      gallery: [
        { url: ASSET_PATHS.NAHOUM_1, caption: 'Nahoum’s Series 01 — Rich Fruit Cake Feature' },
        { url: ASSET_PATHS.NAHOUM_2, caption: 'Nahoum’s Series 02 — Almond Pastry Showcase' },
        { url: ASSET_PATHS.NAHOUM_3, caption: 'Nahoum’s Series 03 — Fudgy Brownie Delights' },
        { url: ASSET_PATHS.NAHOUM_4, caption: 'Nahoum’s Series 04 — Vintage Heritage Story' },
        { url: ASSET_PATHS.NAHOUM_5, caption: 'Nahoum’s Series 05 — Festive Order Call' },
      ],
    },
  },
  {
    id: 'social-bengal-sweets',
    title: 'Bengal Heritage Sweets — Culinary Nostalgia Campaign',
    category: 'Social Media Design',
    domain: 'Social Media Poster',
    client: 'Hindusthan, Ganguram & Bachharam',
    year: '2025',
    medium: '7-Part Social Media Campaign',
    thumbnail: ASSET_PATHS.SWEETS_MAIN,
    bentoSize: 'wide',
    bentoTag: '13 // SOCIAL POSTER • SERIES',
    shortDescription:
      'A multi-part social campaign paying homage to iconic sweet shops of Bengal (Hindusthan Sweets, Ganguram, Bachharam’s) and traditional delicacies.',
    deliverables: [
      '7-Part Culinary Campaign',
      'Custom Food Illustration',
      'Regional Brand Storytelling',
      'Social Ad Assets',
    ],
    caseStudy: {
      brief: 'Celebrate Bengal’s rich sweet-making heritage through a visually mouthwatering social media series.',
      constraint: 'Unify three legendary sweet brands into a single cohesive cultural narrative.',
      processSteps: [
        {
          title: '01. Food Art Direction',
          description: 'Focusing on macro textures of Nolen Gur, Rosogolla syrup, and Mishti Doi.',
        },
      ],
      colorPalette: [
        { name: 'Syrup Amber', hex: '#E29D38' },
        { name: 'Milk White', hex: '#FDFBF7' },
      ],
      typographyUsed: ['Playfair Display Italic', 'Plus Jakarta Sans'],
      keyMetric: 'Top Regional Culinary Campaign',
      outcome: 'Widely featured on food culture blogs and brand social handles.',
      gallery: [
        { url: ASSET_PATHS.SWEETS_MAIN, caption: 'Heritage Sweets Campaign Key Visual' },
        { url: ASSET_PATHS.SWEETS_1, caption: 'Delicacy Showcase 01' },
        { url: ASSET_PATHS.SWEETS_2, caption: 'Delicacy Showcase 02' },
        { url: ASSET_PATHS.SWEETS_3, caption: 'Delicacy Showcase 03' },
        { url: ASSET_PATHS.SWEETS_4, caption: 'Delicacy Showcase 04' },
        { url: ASSET_PATHS.SWEETS_5, caption: 'Delicacy Showcase 05' },
        { url: ASSET_PATHS.SWEETS_6, caption: 'Delicacy Showcase 06' },
      ],
    },
  },
  {
    id: 'social-world-design-day',
    title: 'World Design Day — Allure of Design Graphic',
    category: 'Social Media Design',
    domain: 'Social Media Poster',
    client: 'Design Community Series',
    year: '2025',
    medium: 'Editorial Design Tribute Poster',
    thumbnail: ASSET_PATHS.WORLD_DESIGN_DAY,
    bentoSize: 'normal',
    bentoTag: '08 // SOCIAL POSTER • EDITORIAL',
    shortDescription:
      'Sophisticated poster honoring World Design Day celebrating creativity, grid precision, and visual storytelling aesthetics.',
    deliverables: ['Design Tribute Graphic', 'Grid System Artwork', 'Creative Manifesto Layout'],
    caseStudy: {
      brief: 'Craft a self-referential design poster celebrating World Design Day for fellow creatives.',
      constraint: 'Reflect the highest standards of graphic composition and typographic alignment.',
      processSteps: [{ title: '01. Grid Layout', description: 'Exposing structural baseline grid lines as part of the visual aesthetic.' }],
      colorPalette: [
        { name: 'Deep Ink', hex: '#1A1A1A' },
        { name: 'Electric Indigo', hex: '#5D5CDE' },
      ],
      typographyUsed: ['Syne Bold', 'JetBrains Mono'],
      keyMetric: 'Designer Community Highlight',
      outcome: 'Shared by prominent design portals.',
      gallery: [{ url: ASSET_PATHS.WORLD_DESIGN_DAY, caption: 'World Design Day Poster' }],
    },
  },
  {
    id: 'social-ureckon-1',
    title: 'Mission Upside Down- Ureckon 2026',
    category: 'Social Media Design',
    domain: 'Social Media Poster',
    client: 'Ureckon Tech Fest',
    year: '2026',
    medium: 'Event Poster Design 01',
    thumbnail: ASSET_PATHS.URECKON_1,
    bentoSize: 'normal',
    bentoTag: '09 // SOCIAL POSTER • EVENT',
    shortDescription:
      'Futuristic promotional poster designed for Ureckon annual tech fest with dark neon aesthetics and cyber grid elements.',
    deliverables: [
      'Tech Fest Event Poster 01',
      'Cyberpunk Visual System',
      'Social Ad Asset',
    ],
    caseStudy: {
      brief: 'Create a high-energy, futuristic event poster for a national university engineering fest.',
      constraint: 'Display event details cleanly on dark cyber grid aesthetics.',
      processSteps: [
        {
          title: '01. Neon Cyber Grid',
          description: 'Constructing high contrast dark background grids with electric blue and purple highlights.',
        },
      ],
      colorPalette: [
        { name: 'Cyber Neon Blue', hex: '#00F0FF' },
        { name: 'Deep Void', hex: '#0A0A12' },
      ],
      typographyUsed: ['Syne ExtraBold', 'JetBrains Mono'],
      keyMetric: '5,000+ Fest Registrations',
      outcome: 'Drove record student attendance and sponsor engagement.',
      gallery: [{ url: ASSET_PATHS.URECKON_1, caption: 'Ureckon Tech Fest Poster 01' }],
    },
  },
  {
    id: 'social-ureckon-2',
    title: 'FC 26 Poster - Ureckon 2026',
    category: 'Social Media Design',
    domain: 'Social Media Poster',
    client: 'Ureckon Tech Fest',
    year: '2026',
    medium: 'Event Poster Design 02',
    thumbnail: ASSET_PATHS.URECKON_2,
    bentoSize: 'normal',
    bentoTag: '10 // SOCIAL POSTER • EVENT',
    shortDescription:
      'High-impact event graphic for Ureckon tech fest featuring futuristic typography and lineup lockups.',
    deliverables: [
      'Tech Fest Event Poster 02',
      'Lineup Graphic System',
      'Social Ad Asset',
    ],
    caseStudy: {
      brief: 'Design a secondary promotional poster variant for event lineups.',
      constraint: 'Maintain visual consistency with primary event key visual.',
      processSteps: [
        {
          title: '01. Lineup Compositing',
          description: 'Styling high contrast typography for maximum readability.',
        },
      ],
      colorPalette: [
        { name: 'Cyber Neon Blue', hex: '#00F0FF' },
        { name: 'Deep Void', hex: '#0A0A12' },
      ],
      typographyUsed: ['Syne ExtraBold', 'JetBrains Mono'],
      keyMetric: 'Event Promotion Reach',
      outcome: 'Widespread social media sharing.',
      gallery: [{ url: ASSET_PATHS.URECKON_2, caption: 'Ureckon Tech Fest Poster 02' }],
    },
  },
  {
    id: 'social-ureckon-3',
    title: 'E-Football Poster - Ureckon 2026',
    category: 'Social Media Design',
    domain: 'Social Media Poster',
    client: 'Ureckon Tech Fest',
    year: '2026',
    medium: 'Event Poster Design 03',
    thumbnail: ASSET_PATHS.URECKON_3,
    bentoSize: 'normal',
    bentoTag: '11 // SOCIAL POSTER • EVENT',
    shortDescription:
      'Cyberpunk event schedule graphic designed for Ureckon annual tech fest promotions.',
    deliverables: [
      'Tech Fest Event Poster 03',
      'Schedule Grid Layout',
      'Social Ad Asset',
    ],
    caseStudy: {
      brief: 'Format complex competition schedules into a sleek poster visual.',
      constraint: 'High density typography on dark background grid.',
      processSteps: [
        {
          title: '01. Grid Formatting',
          description: 'Organizing track schedules with clear visual hierarchy.',
        },
      ],
      colorPalette: [
        { name: 'Cyber Neon Blue', hex: '#00F0FF' },
        { name: 'Deep Void', hex: '#0A0A12' },
      ],
      typographyUsed: ['Syne ExtraBold', 'JetBrains Mono'],
      keyMetric: 'Track Registration Peak',
      outcome: 'Streamlined schedule awareness for participants.',
      gallery: [{ url: ASSET_PATHS.URECKON_3, caption: 'Ureckon Tech Fest Poster 03' }],
    },
  },
  {
    id: 'social-ureckon-4',
    title: 'Guest Poster for Ureckon',
    category: 'Social Media Design',
    domain: 'Social Media Poster',
    client: 'Ureckon Tech Fest',
    year: '2025',
    medium: 'Event Poster Design 04',
    thumbnail: ASSET_PATHS.URECKON_4,
    bentoSize: 'normal',
    bentoTag: '12 // SOCIAL POSTER • EVENT',
    shortDescription:
      'Sleek neon promotional poster highlighting keynote speakers and workshops.',
    deliverables: [
      'Tech Fest Event Poster 04',
      'Speaker Showcase Graphics',
      'Social Ad Asset',
    ],
    caseStudy: {
      brief: 'Feature workshop mentors and keynote speakers in a futuristic poster format.',
      constraint: 'Balance photo portraits with cyber neon styling.',
      processSteps: [
        {
          title: '01. Portrait Masking',
          description: 'Applying duotone cyan/purple filters to speaker photos.',
        },
      ],
      colorPalette: [
        { name: 'Cyber Neon Blue', hex: '#00F0FF' },
        { name: 'Deep Void', hex: '#0A0A12' },
      ],
      typographyUsed: ['Syne ExtraBold', 'JetBrains Mono'],
      keyMetric: 'Workshop Capacity Filled',
      outcome: 'Full registrations across all technical workshops.',
      gallery: [{ url: ASSET_PATHS.URECKON_4, caption: 'Ureckon Tech Fest Poster 04' }],
    },
  },
  {
    id: 'social-ureckon-5',
    title: 'Independence Day Poster',
    category: 'Social Media Design',
    domain: 'Social Media Poster',
    client: 'Ureckon Tech Fest',
    year: '2024',
    medium: 'Event Poster Design 05',
    thumbnail: ASSET_PATHS.URECKON_5,
    bentoSize: 'normal',
    bentoTag: '13 // SOCIAL POSTER • EVENT',
    shortDescription:
      "A modern patriotic poster celebrating India's Independence Day through bold visuals, vibrant colors, and a clean contemporary design.",
    deliverables: [
      'Tech Fest Event Poster 05',
      'Finale Ceremony Visuals',
      'Social Campaign Asset',
    ],
    caseStudy: {
      brief: 'Announce final hackathon prizes and closing night ceremony.',
      constraint: 'High impact call-to-action lockup.',
      processSteps: [
        {
          title: '01. Finale Compositing',
          description: 'Creating high contrast neon glow effects for grand prize reveal.',
        },
      ],
      colorPalette: [
        { name: 'Cyber Neon Blue', hex: '#00F0FF' },
        { name: 'Deep Void', hex: '#0A0A12' },
      ],
      typographyUsed: ['Syne ExtraBold', 'JetBrains Mono'],
      keyMetric: 'Closing Ceremony Audience',
      outcome: 'Maximum turnout for awards presentation.',
      gallery: [{ url: ASSET_PATHS.URECKON_5, caption: 'Ureckon Tech Fest Poster 05' }],
    },
  },
];
