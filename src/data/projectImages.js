// Comprehensive Image Asset Mapping for Uploaded Portfolio Design Work
// Properly encoded web paths handling special characters like '#' (%23), spaces, and emojis

const safePath = (path) => path.split('/').map(segment => encodeURIComponent(segment)).join('/');

export const ASSET_PATHS = {
  // AD CAMPAIGN
  AIR_INDIA_01: safePath('/assets/Ad Campaign/Air india-01.webp'),
  AIR_INDIA_02: safePath('/assets/Ad Campaign/Air india-02.webp'),
  INDIGO_01: safePath('/assets/Ad Campaign/indigo1.png'),

  // BRANDING - INNOFUSION
  INNOFUSION_1: safePath('/assets/Branding/Innofusion/in1.png'),

  // BRANDING - PHOENIX
  PHOENIX_LOGO: safePath('/assets/Branding/Phoenix/4.webp'),

  // BRANDING - WELD
  WELD_1: safePath('/assets/Branding/Weld/braand identity-01.webp'),
  WELD_2: safePath('/assets/Branding/Weld/weld 2.png'),
  WELD_3: safePath('/assets/Branding/Weld/weld 3.png'),
  WELD_G: safePath('/assets/Branding/Weld/g.png'),
  WELD_SVG: safePath('/assets/Branding/Weld/weld.svg'),
  WELD_ASSET_3: safePath('/assets/Branding/Weld/Asset 3.svg'),
  WELD_ASSET_5: safePath('/assets/Branding/Weld/Asset 5.webp'),
  WELD_ASSET_7: safePath('/assets/Branding/Weld/Asset 7.webp'),
  WELD_ASSET_8: safePath('/assets/Branding/Weld/Asset 8.webp'),
  WELD_ASSET_9: safePath('/assets/Branding/Weld/Asset 9.webp'),
  WELD_ASSET_10: safePath('/assets/Branding/Weld/Asset 10.webp'),
  WELD_ASSET_12: safePath('/assets/Branding/Weld/Asset 12.webp'),
  WELD_ASSET_13: safePath('/assets/Branding/Weld/Asset 13.webp'),
  WELD_ASSET_14: safePath('/assets/Branding/Weld/Asset 14.webp'),
  WELD_MASTER_BENTO: safePath('/assets/Branding/Weld/weld_master_bento.jpg'),

  // CONCEPT DRIVEN DESIGN
  CONCEPT_WORDSWORTH: safePath('/assets/Concept-driven design/wordsworth.webp'),
  CONCEPT_HOLI: safePath('/assets/Concept-driven design/holi_concept.webp'),
  CONCEPT_BENGAL_BUSINESS: safePath('/assets/Concept-driven design/bengal_business.webp'),
  CONCEPT_BHASHA_DIVAS: safePath('/assets/Concept-driven design/bhasha_divas.webp'),
  CONCEPT_WOMEN_RESPECT: safePath('/assets/Concept-driven design/women_respect.webp'),

  // SOCIAL MEDIA POSTERS - NAHOUM'S SERIES
  NAHOUM_1: safePath('/assets/Social Media Poster/From rich fruit cakes to almond pastries and fudgy delights, Nahoum’s iconic treats areflying o (1).webp'),
  NAHOUM_2: safePath('/assets/Social Media Poster/From rich fruit cakes to almond pastries and fudgy delights, Nahoum’s iconic treats areflying o (2).webp'),
  NAHOUM_3: safePath('/assets/Social Media Poster/From rich fruit cakes to almond pastries and fudgy delights, Nahoum’s iconic treats areflying o (3).webp'),
  NAHOUM_4: safePath('/assets/Social Media Poster/From rich fruit cakes to almond pastries and fudgy delights, Nahoum’s iconic treats areflying o (4).webp'),
  NAHOUM_5: safePath('/assets/Social Media Poster/From rich fruit cakes to almond pastries and fudgy delights, Nahoum’s iconic treats areflying o (5).webp'),

  // SOCIAL MEDIA POSTERS - BENGAL SWEETS SERIES
  SWEETS_MAIN: safePath('/assets/Social Media Poster/From the timeless charm of Hindusthan Sweets to the iconic flavours of Ganguram andBachharam’s,.webp'),
  SWEETS_1: safePath('/assets/Social Media Poster/From the timeless charm of Hindusthan Sweets to the iconic flavours of Ganguram andBachharam’s, (1).webp'),
  SWEETS_2: safePath('/assets/Social Media Poster/From the timeless charm of Hindusthan Sweets to the iconic flavours of Ganguram andBachharam’s, (2).webp'),
  SWEETS_3: safePath('/assets/Social Media Poster/From the timeless charm of Hindusthan Sweets to the iconic flavours of Ganguram andBachharam’s, (3).webp'),
  SWEETS_4: safePath('/assets/Social Media Poster/From the timeless charm of Hindusthan Sweets to the iconic flavours of Ganguram andBachharam’s, (4).webp'),
  SWEETS_5: safePath('/assets/Social Media Poster/From the timeless charm of Hindusthan Sweets to the iconic flavours of Ganguram andBachharam’s, (5).webp'),
  SWEETS_6: safePath('/assets/Social Media Poster/From the timeless charm of Hindusthan Sweets to the iconic flavours of Ganguram andBachharam’s, (6).webp'),

  // SOCIAL MEDIA POSTERS - URECKON TECH FEST SERIES
  URECKON_1: safePath('/assets/Social Media Poster/ureckon 1.jpg'),
  URECKON_2: safePath('/assets/Social Media Poster/ureckon 2.jpg'),
  URECKON_3: safePath('/assets/Social Media Poster/ureckon 3.jpg'),
  URECKON_4: safePath('/assets/Social Media Poster/ureckon 4.jpg'),
  URECKON_5: safePath('/assets/Social Media Poster/ureckon 5.jpg'),

  // SOCIAL MEDIA POSTERS - STANDALONE
  WORLD_CUP_2024: safePath('/assets/Social Media Poster/India Reigns Supreme at T20 World Cup 2024! 🏏✨Victory Celebrated in My Design . 🏆🇮🇳Congratul.jpg'),
  BANGLA_KONNECTION_HOLI: safePath('/assets/Social Media Poster/Bangla Konnection wishes you Happy Holi! Rong a Rongin Hok tomar holi! 💛#ShubhoDol #HoliHai #R.webp'),
  HAPPY_HOLI: safePath('/assets/Social Media Poster/Bangla Konnection wishes you Happy Holi! Rong a Rongin Hok tomar holi! 💛#ShubhoDol #HoliHai #R.webp'),
  EID_MUBARAK: safePath('/assets/Social Media Poster/Eid Mubarak! 🌙✨Shanti, bhalobasha, ar mishtir shubhechha janai sobai ke! Eid-er anondo hok mis.webp'),
  WORLD_DESIGN_DAY: safePath('/assets/Social Media Poster/Embrace the mesmerizing allure of design, where creativity reigns supreme. Celebrate World Desig.jpg'),
  SUNITA_WILLIAMS: safePath('/assets/Social Media Poster/Welcome back, Sunita Williams! 🌍 Your journey beyond the stars inspires us all. Heres to touc.webp'),
  NOLEN_GUR: safePath('/assets/Social Media Poster/Winters in Bengal bring back the aroma of nostalgia! The sweetness of nolen gur,with the softne.webp'),
  PONJIKA_POSTER: safePath('/assets/Social Media Poster/Pujo, parbon, biye-baari, ba notun kichu shuru—shob thik somoy-e korte hole, ekta Ponjika lagbe.webp'),
  HOLI_SPLASH_FEST: safePath('/assets/Social Media Poster/Splash colors, spread joy—Holi is where art meets festivity! Let the vibrant shades tell a stor.webp'),
};

// Aliases for compatibility
export const AIR_INDIA_FAMILY_THUMB = ASSET_PATHS.AIR_INDIA_01;
export const AIR_INDIA_DESTINATION_THUMB = ASSET_PATHS.AIR_INDIA_02;
export const INDIGO_GATEWAY_THUMB = ASSET_PATHS.INDIGO_01;
