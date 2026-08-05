// Comprehensive Image Asset Mapping for Uploaded Portfolio Design Work
// Properly encoded web paths handling special characters like '#' (%23), spaces, and emojis

const safePath = (path) => path.split('/').map(segment => encodeURIComponent(segment)).join('/');

export const ASSET_PATHS = {
  // AD CAMPAIGN
  AIR_INDIA_01: safePath('/assets/Ad Campaign/Air india-01.webp'),
  AIR_INDIA_02: safePath('/assets/Ad Campaign/Air india-02.webp'),
  INDIGO_01: safePath('/assets/Ad Campaign/indigo1.png'),

  // TESTIMONIALS
  SOURODEEP_GHOSH: safePath('/assets/Testimonials/Sourodeep Ghosh.png'),

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

  // SOCIAL MEDIA POSTERS - FEATURED LAUNCH SERIES
  COMING_SOON: safePath('/assets/Social Media Poster/coming soon.png'),
  INTRO_POST: safePath('/assets/Social Media Poster/intro post.png'),
  WEBSITE_IS_LIVE: safePath('/assets/Social Media Poster/website is live.png'),
  MY_APP: safePath('/assets/Social Media Poster/my app.png'),
  MY_WEBSITE: safePath('/assets/Social Media Poster/my website.png'),

  // SOCIAL MEDIA POSTERS - NAHOUM'S SERIES
  NAHOUM_1: safePath('/assets/Social Media Poster/nahoum1.webp'),
  NAHOUM_2: safePath('/assets/Social Media Poster/nahoum2.webp'),
  NAHOUM_3: safePath('/assets/Social Media Poster/nahoum3.webp'),
  NAHOUM_4: safePath('/assets/Social Media Poster/nahoum4.webp'),
  NAHOUM_5: safePath('/assets/Social Media Poster/nahoum5.webp'),

  // SOCIAL MEDIA POSTERS - BENGAL SWEETS SERIES
  SWEETS_MAIN: safePath('/assets/Social Media Poster/sweets_main.webp'),
  SWEETS_1: safePath('/assets/Social Media Poster/sweets1.webp'),
  SWEETS_2: safePath('/assets/Social Media Poster/sweets2.webp'),
  SWEETS_3: safePath('/assets/Social Media Poster/sweets3.webp'),
  SWEETS_4: safePath('/assets/Social Media Poster/sweets4.webp'),
  SWEETS_5: safePath('/assets/Social Media Poster/sweets5.webp'),
  SWEETS_6: safePath('/assets/Social Media Poster/sweets6.webp'),

  // SOCIAL MEDIA POSTERS - URECKON TECH FEST SERIES
  URECKON_1: safePath('/assets/Social Media Poster/ureckon 1.jpg'),
  URECKON_2: safePath('/assets/Social Media Poster/ureckon 2.jpg'),
  URECKON_3: safePath('/assets/Social Media Poster/ureckon 3.jpg'),
  URECKON_4: safePath('/assets/Social Media Poster/ureckon 4.jpg'),
  URECKON_5: safePath('/assets/Social Media Poster/ureckon 5.jpg'),

  // SOCIAL MEDIA POSTERS - STANDALONE
  WORLD_CUP_2024: safePath('/assets/Social Media Poster/t20_world_cup.jpg'),
  BANGLA_KONNECTION_HOLI: safePath('/assets/Social Media Poster/happy_holi.webp'),
  HAPPY_HOLI: safePath('/assets/Social Media Poster/happy_holi.webp'),
  EID_MUBARAK: safePath('/assets/Social Media Poster/eid_mubarak.webp'),
  WORLD_DESIGN_DAY: safePath('/assets/Social Media Poster/world_design_day.jpg'),
  SUNITA_WILLIAMS: safePath('/assets/Social Media Poster/sunita_williams.webp'),
  NOLEN_GUR: safePath('/assets/Social Media Poster/nolen_gur.webp'),
  PONJIKA_POSTER: safePath('/assets/Social Media Poster/ponjika.webp'),
  HOLI_SPLASH_FEST: safePath('/assets/Social Media Poster/holi_splash.webp'),
};

// Aliases for compatibility
export const AIR_INDIA_FAMILY_THUMB = ASSET_PATHS.AIR_INDIA_01;
export const AIR_INDIA_DESTINATION_THUMB = ASSET_PATHS.AIR_INDIA_02;
export const INDIGO_GATEWAY_THUMB = ASSET_PATHS.INDIGO_01;
