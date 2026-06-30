import { Product, BlogPost, PRDSection } from './types';

export const products: Product[] = [
  {
    id: 'noor-corset-kurti',
    name: 'Noor Corset Kurti',
    price: 340,
    category: 'Modern Maharani',
    headline: 'Structure meets heritage.',
    description: 'An architectural corset bodice crafted from handloomed Chanderi silk, cascading into an asymmetric, flowing hemline.',
    fabric: '70% Chanderi Silk, 30% Pure Cotton Lining',
    construction: 'Symmetric vertical boning for structure, finished with a subtle side-zipper closure and delicate hand-rolled hems.',
    silhouette: 'Tailored architectural bodice with an asymmetric cowl flare.',
    sleeves: 'Sleeveless with optional attachment fabric included.',
    occasion: 'Festive / Premium Intimate Occasions',
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80'
    ],
    careInstructions: 'Dry clean only. Store wrapped in soft muslin cloth to protect the silk fibers.',
    shipping: 'Ships in 7-10 business days. Custom tailored to order.',
    returnPolicy: 'Due to the bespoke nature of this collection, returns are accepted for store credit or sizing alterations within 7 days of delivery.',
    availability: true,
    rating: 4.9,
    reviews: [
      { id: '1', author: 'Aishwarya R.', rating: 5, date: 'June 12, 2026', comment: 'The structural fit is absolutely stunning. It holds shape perfectly while remaining incredibly light and comfortable.' }
    ],
    details: [
      'Hand-woven Chanderi silk bodice',
      'Soft boning for structured support',
      'Asymmetric fluid drape',
      'Concealed premium YKK side zipper',
      'Includes complementary raw silk sleeve fabric'
    ]
  },
  {
    id: 'devika-cape-kurti',
    name: 'Devika Cape Kurti',
    price: 410,
    category: 'Modern Maharani',
    headline: 'Elegance, draped in light.',
    description: 'A matcha green high-cowl inner tunic layered with an exquisite, sheer hand-embroidered organza cape.',
    fabric: 'Premium Habotai Silk inner, Sheer Organza outer cape',
    construction: 'Draped collar detailing, handmade fabric loops, and delicate bullion embroidery.',
    silhouette: 'Relaxed draped cowl paired with a structured, flowing cape.',
    sleeves: 'Extended cape sleeves.',
    occasion: 'High Tea / Festive Soiree',
    images: [
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80'
    ],
    careInstructions: 'Dry clean only. Iron on ultra-low setting with a protective cotton cloth overlay.',
    shipping: 'Ships in 5-7 business days.',
    returnPolicy: 'Complimentary returns and exchanges within 14 days.',
    availability: true,
    rating: 4.8,
    reviews: [
      { id: '2', author: 'Meera S.', rating: 5, date: 'May 28, 2026', comment: 'The cape has a beautiful architectural movement. It got so many compliments at a recent festive dinner!' }
    ],
    details: [
      'Set includes Cowl Tunic and Detachable Cape',
      'Delicate hand-done silk embroidery',
      'Matches perfectly with the Sand Straight Trousers',
      'Breathable, premium lining throughout'
    ]
  },
  {
    id: 'zaara-bustier-set',
    name: 'Zaara Bustier Set',
    price: 490,
    category: 'Modern Maharani',
    headline: 'Modern royalty.',
    description: 'A midnight blue modal-satin structured bustier featuring a geometric sweetheart neckline, paired with tailored, wide-leg silk trousers.',
    fabric: 'Modal Satin, Premium Cotton Silk Lining',
    construction: 'Fully lined bodice with supportive internal cups, neat concealed back-hook panel, and flat-front trousers.',
    silhouette: 'Bustier tailored crop paired with clean-cut wide trousers.',
    sleeves: 'Sleeveless',
    occasion: 'Sangeet / Evening Gala',
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80'
    ],
    careInstructions: 'Professional dry clean only. Steam iron low.',
    shipping: 'Ships in 10 business days.',
    returnPolicy: 'Size exchange available within 7 days.',
    availability: true,
    rating: 5.0,
    reviews: [],
    details: [
      'Geometric sweetheart neckline',
      'Tailored flat-front trousers with side pockets',
      'Hand-crafted metallic hook fasteners',
      'Stitching margins included for easy custom sizing'
    ]
  },
  {
    id: 'resham-straight-kurti',
    name: 'Resham Straight Kurti',
    price: 260,
    category: 'Heritage Romantic',
    headline: 'Tradition, softened.',
    description: 'A gentle, everyday luxury blush pink straight tunic featuring fine, hand-guided resham embroidery across the collar.',
    fabric: 'Pure Cotton-Silk Blend',
    construction: 'Straight tailored structure with high side-slits, detailed with tiny mother-of-pearl buttons.',
    silhouette: 'Classic straight editorial cut.',
    sleeves: 'Three-quarter sleeves with embroidered cuffs.',
    occasion: 'Elevated Daytime Wear / Artistic Gatherings',
    images: [
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80'
    ],
    careInstructions: 'Handwash gently with mild liquid detergent in cold water. Dry flat in shade.',
    shipping: 'Ships in 3-5 business days.',
    returnPolicy: 'Complimentary returns and exchanges within 14 days.',
    availability: true,
    rating: 4.7,
    reviews: [
      { id: '3', author: 'Kriti G.', rating: 4, date: 'April 15, 2026', comment: 'Extremely soft fabric that feels breathable. The blush pink color is very calming and elegant.' }
    ],
    details: [
      'Exquisite hand-guided resham thread embroidery',
      'Genuine mother-of-pearl front buttons',
      'Ultra-breathable linen-cotton blended weave',
      'Premium french seam finishes'
    ]
  },
  {
    id: 'tara-embroidered-kurti',
    name: 'Tara Embroidered Kurti',
    price: 280,
    category: 'Heritage Romantic',
    headline: 'The romance of hand-craft.',
    description: 'An ivory-white soft mulmul tunic adorned with genuine silver zari motifs and delicate hand-carved wooden block prints.',
    fabric: '100% Super-Fine Mulmul Cotton',
    construction: 'Double-layered fine mulmul to eliminate transparency while maintaining cloud-like lightness.',
    silhouette: 'Relaxed, softly flared A-line silhouette.',
    sleeves: 'Long flared sleeves.',
    occasion: 'Daytime Festive / Mehendi',
    images: [
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80'
    ],
    careInstructions: 'Dry clean recommended first. Gentle handwash cold subsequently.',
    shipping: 'Ships in 3-5 business days.',
    returnPolicy: 'Complimentary 14-day returns.',
    availability: true,
    rating: 4.9,
    reviews: [],
    details: [
      'Genuine silver zari threads (zardozi)',
      'Double layered feather-light mulmul cotton',
      'Hand-stamped using generational wood-blocks',
      'Generous side seam margins'
    ]
  },
  {
    id: 'mira-coord-set',
    name: 'Mira Coord Set',
    price: 310,
    category: 'Effortless Edit',
    headline: 'Quiet luxury for every day.',
    description: 'A stone-colored pure heavy linen tunic button-down paired with crisp, high-slit architectural trousers.',
    fabric: '100% Belgian Organic Linen',
    construction: 'Pre-washed for ultimate softness. Clean collarless design, side slit openings, and deep trousers pockets.',
    silhouette: 'Relaxed-fit editorial co-ord.',
    sleeves: 'Full sleeves with roll-up tab options.',
    occasion: 'Art Expositions / Travel Luxe',
    images: [
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80'
    ],
    careInstructions: 'Machine wash cold on gentle cycle. Warm iron while slightly damp for that crisp luxury look.',
    shipping: 'Ships in 4-6 business days.',
    returnPolicy: 'Complimentary 14-day returns.',
    availability: true,
    rating: 4.6,
    reviews: [
      { id: '4', author: 'Anjali D.', rating: 5, date: 'June 05, 2026', comment: 'The cut of the pants is brilliant! It has this architectural slit at the ankle that shows off your sandals. Simply beautiful.' }
    ],
    details: [
      'Premium European flax organic linen',
      'Deep functional side-slit trouser pockets',
      'Clean minimalist button-less front placket',
      'Rich, natural beige-stone dye'
    ]
  },
  {
    id: 'sahar-flare-suit',
    name: 'Sahar Flare Suit',
    price: 450,
    category: 'Drama Architect',
    headline: 'Movement is the message.',
    description: 'A turf-green layered bias-cut suit utilizing over twelve meters of premium flowy silk-georgette for dramatic motion.',
    fabric: 'Bemberg Silk Georgette, Mulmul Cotton Lining',
    construction: 'Precision bias cuts layered to prevent bulky waistlines while maximizing flare at the bottom hem.',
    silhouette: 'Extreme bias-cut architectural flare.',
    sleeves: 'Tight fitted full-length sleeves.',
    occasion: 'Cocktail Festivities / Festive Receptions',
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80'
    ],
    careInstructions: 'Dry clean only. Hang on padded hangers only.',
    shipping: 'Ships in 8-12 business days.',
    returnPolicy: 'Exchange within 7 days only.',
    availability: true,
    rating: 4.9,
    reviews: [],
    details: [
      'Twelve-meter sweeping bias circle hem',
      'Fitted corset-mimicking torso',
      'Invisible side zipper',
      'Gold foil border detailing underneath'
    ]
  },
  {
    id: 'veda-convertible-kurti',
    name: 'Veda Convertible Kurti',
    price: 380,
    category: 'Rule Breaker',
    headline: 'One garment. Infinite states.',
    description: 'An architectural breakthrough in premium ethnic wear. This sage green tunic can be transformed into three distinct looks with hidden modular buttons and wraps.',
    fabric: 'Fine Cotton Silk & Satin Lycra trim',
    construction: 'Built with interior flat buttons, secure hooks, and modular seams designed to drape perfectly in multiple configurations.',
    silhouette: 'Transformative from straight silhouette to a draped wrap or short crop overlay.',
    sleeves: 'Three-way convertible sleeves (Full, 3/4th, or sleeveless via hidden zippers).',
    occasion: 'Versatile / Festive Travels',
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80'
    ],
    careInstructions: 'Handwash cold, dry flat. Fasten all buttons before cleaning.',
    shipping: 'Ships in 5-7 business days.',
    returnPolicy: 'Complimentary 14-day returns.',
    availability: true,
    rating: 4.95,
    reviews: [
      { id: '5', author: 'Nalini K.', rating: 5, date: 'June 20, 2026', comment: 'I wore this as a straight kurti to a meeting and immediately transformed it into a draped cowl wrap for a dinner. Absolute genius engineering.' }
    ],
    isConvertible: true,
    convertibleOptions: {
      label: 'Garment Transformation Mode',
      description: 'Interact with the options below to see how the Veda Kurti transforms visually and structurally.',
      states: [
        { id: 'straight', name: 'Classic Straight Kurta', imageIndex: 0, desc: 'A sleek, knee-length minimalist straight kurta with clean architectural side lines.' },
        { id: 'wrap', name: 'Draped Asymmetric Wrap', imageIndex: 1, desc: 'Utilizes hidden button loops to secure the side panels across the chest, creating a romantic asymmetric draped look.' },
        { id: 'crop', name: 'Cropped Editorial Vest', imageIndex: 2, desc: 'Unbutton the lower tiers completely to create a cropped tailored vest, perfect for layering over slip dresses.' }
      ]
    },
    details: [
      'Hidden modular buttons for easy state changes',
      'Zipper-detachable modular sleeves',
      'Sleek modern collarless neckline',
      'Beautiful sage green earthy palette'
    ]
  },
  {
    id: 'cutout-corset-kurti',
    name: 'Cutout Corset Kurti',
    price: 360,
    category: 'Refined Edge',
    headline: 'Elegance through construction.',
    description: 'An avant-garde interpretation of festive wear. Stone-beige structured kurti featuring clean side cutouts that balance negative space.',
    fabric: 'Structured Linen-Cotton Canvas',
    construction: 'Reinforced waist seam, blind stitching on hems, geometric clean side-cuts lined with silk piping.',
    silhouette: 'Tailored sheath with geometric negative space cutouts.',
    sleeves: 'Cap sleeves',
    occasion: 'Art Gallery Opening / Modern Sangeet',
    images: [
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80'
    ],
    careInstructions: 'Dry clean only. Steam iron medium.',
    shipping: 'Ships in 7-9 business days.',
    returnPolicy: 'Complimentary exchanges.',
    availability: true,
    rating: 4.8,
    reviews: [],
    details: [
      'Tailored side cutout panels',
      'Clean geometric collar line',
      'Lined in soft pure mulmul cotton',
      'Concealed double metal-clasp hook closure'
    ]
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 'heritage-75-years',
    title: 'The Legacy of Chandni Chowk: 75 Years in the Making',
    category: 'Heritage',
    readTime: '6 min read',
    date: 'June 18, 2026',
    summary: 'A look back at our family roots, starting in the year 1951 amidst the rich textiles and vibrant craftsmen of Chandni Chowk.',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80',
    content: `Every great brand begins with a story, and ANANTAमाँ is no exception. Rooted in a family legacy spanning more than 75 years, our journey began in the vibrant textile markets of Chandni Chowk, where generations of expertise in fabrics, craftsmanship, and fashion laid the foundation for everything ANANTAमाँ represents today.

For decades, our family has devoted itself to understanding textiles, craftsmanship, and timeless dressing. We have seen patterns shift, borders adapt, and modern fabrics enter the landscape, but one thing remains absolutely immortal: the soul of a garment crafted with genuine quality and love.

ANANTAमाँ was born to carry this family lineage into the modern hemisphere, creating garments that represent quiet luxury and sophisticated architectural cuts for today's global woman.`
  },
  {
    id: 'curating-quiet-luxury',
    title: 'Curating Quiet Luxury: The Shift from Loud Graphics to Soft Silhouettes',
    category: 'Design Philosophy',
    readTime: '4 min read',
    date: 'May 10, 2026',
    summary: 'Why contemporary Indian luxury is choosing muted sage greens, ivory linens, and architectural cuts over loud patterns and heavy gold.',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80',
    content: `True luxury does not shout; it whispers. In a world saturated with fleeting fast-fashion trends and loud ethnic prints, contemporary Indian women are seeking comfort in quiet elegance.

This shift prioritizes the feel of pure natural linen on skin, the breathability of layered Chanderi silk, and the architectural geometry of a perfectly calculated drape. Sage green, matcha, ivory, and soft blush form our signature calm canvas—evoking a sense of serenity that lets the woman be remembered before the outfit.`
  },
  {
    id: 'mastering-the-convertible',
    title: 'The Modular Wardrobe: How to Style a Convertible Kurti',
    category: 'Education',
    readTime: '5 min read',
    date: 'April 22, 2026',
    summary: 'A masterclass in slow fashion. Discover how a single garment like the Veda Kurti transitions from morning boardroom to evening cocktail.',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80',
    content: `Slow fashion is about maximizing options while minimizing waste. The Veda Convertible Kurti represents our design philosophy at its peak: one beautifully engineered garment offering three completely distinct states.

By using hidden buttons nestled into flat-faced interior seams and modular sleeves, you can wear this as a clean corporate tunic by morning, unbutton and drape it into an asymmetric wrap by afternoon, and detach the hem to wear as a sharp cropped vest over silk slip dresses by evening.`
  }
];

export const prdSections: PRDSection[] = [
  {
    id: 'exec-summary',
    chapter: 1,
    title: 'Executive Summary',
    content: `ANANTAमाँ is a pioneering luxury fashion e-commerce brand celebrating 75 years of rich heritage. Originating from Chandni Chowk in 1951, ANANTAमाँ is transitioning into a world-class digital storefront that positions Indian ethnic wear as "Quiet Luxury". 

This master PRD outlines the digital architecture of the ANANTAमाँ e-commerce application. The platform merges emotional editorial storytelling with frictionless modern commerce. Every element represents slow fashion, soft femininity, and architectural silhouettes.`
  },
  {
    id: 'brand-strategy',
    chapter: 2,
    title: 'Brand Strategy & Positioning',
    content: `ANANTAमाँ positions itself as a luxury heritage house. Unlike traditional loud, gold-and-red Indian wear websites, ANANTAमाँ prioritizes:
- Soft Femininity over flashy aesthetics.
- Architectural Silhouettes featuring asymmetric lines, structural boning, and modular structures.
- Muted Palette (Sage Green, Ivory, Soft Blush, Stone, Sand).
- Quiet Luxury: Fine detailing, organic materials (Belgian Linen, Chanderi Silk, fine Mulmul), and premium craftsmanship.`
  },
  {
    id: 'user-personas',
    chapter: 3,
    title: 'User Personas',
    content: `1. **The Connoisseur (Meera, 34, Architect)**: Appreciates structural silhouettes, organic fabrics, and architectural cuts. Looks for minimal but emotionally resonant styling.
2. **The Modern Bride/Bridesmaid (Kriti, 28, Brand Director)**: Wants festive wear that isn't excessively loud. Values versatility and wearable comfort.
3. **The Sustainable Global Citizen (Priya, 42, Executive)**: Invests in slow fashion and appreciates multi-way convertible garments (Rule Breakers).`
  },
  {
    id: 'info-architecture',
    chapter: 4,
    title: 'Information Architecture',
    content: `The platform organizes navigation to put emotion and storytelling before transactional grids. Content is prioritized as:
- **Heritage & Narrative Core**: Accessible from the homepage banner, featuring "About Us" and "The Journal".
- **Collection-First Shopping**: Grouped into six semantic editorial categories (Modern Maharani, Heritage Romantic, Effortless Edit, Drama Architect, Rule Breaker, Refined Edge) rather than simple material filters.
- **AI Styling & Modular Engine**: Interwoven into product detail pages and navigation to assist customers seamlessly.`
  },
  {
    id: 'complete-sitemap',
    chapter: 5,
    title: 'Complete Sitemap',
    content: `The site hierarchy is structured as follows:
1. **Home**: Cinematic Editorial Banner Slider, New Arrivals, Heritage Core, Journal Preview.
2. **The Collections (6 Landing Pages)**: Modern Maharani, Heritage Romantic, Effortless Edit, Drama Architect, Rule Breaker, Refined Edge.
3. **Shop**: Fully filterable product listing by fabric, color, size, silhoutte, and availability.
4. **Interactive PDP**: Luxury Image Gallery, 360 viewer, Fabric details, AI Styling recommendation, Transformation Simulator (for Rule Breakers).
5. **The Journal**: Minimalist blog layout featuring fabric education, styling guides, and legacy chronicles.
6. **Our Story**: Founder legacy, Chandni Chowk chronicles, design philosophy, slow-fashion pledge.
7. **Contact & Concierge**: Chat support, boutique address, VIP appointments.
8. **Checkout & Customer Portal**: Secure bag, payment options, order-tracking dashboard, rewards cabinet.`
  },
  {
    id: 'user-flows',
    chapter: 6,
    title: 'User Flows',
    content: `The primary user journeys designed for conversion and engagement are:
- **Discover & Immerse Flow**: Home -> Read Heritage Story -> Read Journal Article -> Click Tagged Product -> View in interactive PDP -> Simulate Convertible Options -> Add to Bag.
- **Frictionless Shopping Flow**: Search or filter -> PDP -> Size Guide verification -> One-Page checkout -> Purchase.
- **AI Stylist Consultation Flow**: Enter styling requests -> Receive tailored outfit suggestions -> Single-click bundle checkout.`
  },
  {
    id: 'navigation-structure',
    chapter: 7,
    title: 'Navigation Structure',
    content: `The navigation emphasizes breathable whitespace and minimal visual weight:
- **Header**: Left-aligned minimalist logo (ANANTAमाँ), centered category lists, right-aligned icons (Search, Stylist, Wishlist, Cart, Client Portal).
- **Sticky Sub-navigation**: Appears dynamically on PDPs, allowing immediate jumping between Fabric Details, Sizing, Care, and Reviews.
- **Footer**: Focuses on trust, showing customer service links, care guidelines, WhatsApp concierge, and newsletter enrollment.`
  },
  {
    id: 'ux-principles',
    chapter: 8,
    title: 'UX Principles',
    content: `ANANTAमाँ adheres to five fundamental design directives:
1. **Zero Clutter**: Minimize UI borders, shadows, and neon badges. Use spacing and negative space for grouping.
2. **Typography as Art**: Elevate serif headings (Playfair Display) paired with spacious modern body copy (Inter).
3. **Organic Interaction**: Subtle transitions and fade-ins during page loads, preventing abrupt flashing.
4. **Literal Branding**: No larping or over-dramatic tags. Clean, professional and respectful tone.
5. **Slow Scrolling Feel**: Slower smooth scroll physics combined with large photographic layouts.`
  },
  {
    id: 'ui-design-system',
    chapter: 9,
    title: 'UI Design System Specification',
    content: `Detailed specifications for developers:
- **Palette**: Sage Green (#5F6F52), Matcha Green (#A9B388), Warm White (#FEFAF6), Ivory (#F9F5F6), Blush Pink (#F3D7CA), Midnight Blue (#1D2B53), Stone Charcoal (#222831).
- **Typography**: Display Headings set in Playfair Display (font weight light/medium, tracking-tight). Body text set in Inter (tracking-normal). Font scales range from 48px (Hero titles) to 12px (data tags).
- **Grids**: 12-column layouts for desktop with wide margins (64px), collapsing gracefully to single-column full-width phone cards.`
  },
  {
    id: 'homepage-wireframe',
    chapter: 10,
    title: 'Homepage Wireframe & Breakdown',
    content: `The homepage serves as an interactive editorial magazine:
- **Section 1**: Immersive Cinematic Slider featuring rotation of the 6 design categories, styled with full-screen editorial graphics.
- **Section 2**: "The Philosophy" - A centered, wide typographic quote block explaining the legacy.
- **Section 3**: "New Masterpieces" - A horizontal bento grid of new arrivals with high-fidelity hover interactions.
- **Section 4**: "The Legacy Series" - Split layout detailing the 75-year history alongside hand-woven texture animations.
- **Section 5**: "Curated Edits" - Journal previews and minimalist email newsletter catcher.`
  },
  {
    id: 'category-specs',
    chapter: 11,
    title: 'Category Page Specifications',
    content: `Each collection category features an artistic heading banner:
- **Modern Maharani**: Heavy architectural styling, structured bold headings.
- **Heritage Romantic**: Soft pink/cream canvas, focusing on detailed craftsmanship.
- **Effortless Edit**: Utterly minimal beige canvas, relaxed sizing showcases.
- **Drama Architect**: Large full-width moving images emphasizing pleats, volume, and movement.
- **Rule Breaker**: Live state toggle simulator, demonstrating garment transformations instantly.
- **Refined Edge**: Close-up crop shots emphasizing darts, origami folds, and geometric cuts.`
  },
  {
    id: 'plp-specs',
    chapter: 12,
    title: 'Product Listing Page Specifications',
    content: `Grid-based display designed to resemble a high-fashion portfolio:
- **Layout**: 3-column grid (desktop), 2-column (tablet), 1-column (mobile).
- **Frictionless Filters**: Sidebar with collapsible filters (Sizing, Fabric, Occasion, Price).
- **Hover Transitions**: Image switches to an alternative close-up fabric detail on cursor hover.
- **Quick-Add Drawer**: Smoothly slide up size selections from the bottom without leaving the grid.`
  },
  {
    id: 'pdp-specs',
    chapter: 13,
    title: 'Product Detail Page Specifications',
    content: `The ultimate canvas of craftsmanship:
- **Interactive Gallery**: Horizontal paging or masonry layouts with hover-zoom.
- **Modular Specification Rails**: Side-aligned columns detailing Silhouette, Fabric Origin, Darts & Construction, Sizing, and Care.
- **Transformation Tool**: Exclusively for Rule Breakers—customers can change the garment's configuration in real-time, observing size, drape, and styling changes.
- **AI Stylist Widget**: Dedicated section for complete outfit matching.`
  },
  {
    id: 'cart-checkout-flows',
    chapter: 14,
    title: 'Shopping Cart & Checkout Flows',
    content: `A seamless, single-page transaction process:
- **Cart slide-out**: Slides in from the right with high contrast, displaying products, selected configurations, and complimentary shipping notices.
- **Checkout Sheet**: Flat one-column input field layout to minimize checkout friction. Includes guest checkout, address lookup integration, and local payment tabs.
- **Post-purchase**: Minimalist elegant order confirmation screen containing live delivery timelines.`
  },
  {
    id: 'customer-portal',
    chapter: 15,
    title: 'Customer Account Features',
    content: `Provides post-purchase security and concierge management:
- **Order Dashboard**: Interactive map tracking processing, shipping, and delivery milestones.
- **Wishlist**: Beautiful grid to save personal edits, shareable via unique URLs.
- **Draping Consultation**: Booking panel for VIP virtual concierge styling sessions.
- **Rewards Ledger**: Tracks loyalty points, historical orders, and exclusive early access tokens.`
  },
  {
    id: 'admin-dashboard',
    chapter: 16,
    title: 'Admin Dashboard Requirements',
    content: `Built for internal operations:
- **Performance Feed**: Real-time sales charts, average order values (AOV), and conversion tracking.
- **Catalog Manager**: Full CRUD capability for products, supporting fabric tags and multi-state configurations.
- **Order Desk**: View and modify delivery statuses, shipping manifests, and return claims.`
  },
  {
    id: 'cms-requirements',
    chapter: 17,
    title: 'CMS & Content Management',
    content: `Enables the PR team to manage the journal and homepage lookbooks:
- **Journal Editor**: Full rich-text support for posting styling guides, heritage articles, and video embeds.
- **Lookbook Planner**: Easily map specific products to lookbook slider slots, scheduling automatically with seasonal campaign launches.`
  },
  {
    id: 'functional-reqs',
    chapter: 18,
    title: 'Functional Requirements',
    content: `Core system behaviors:
- **Persistent Cart**: Keep item states synced in client browser storage across sessions.
- **AI-Driven Personal Stylist**: Connect to the server-side Gemini endpoint to supply detailed, descriptive answers to fashion styling questions.
- **Interactive State Simulator**: Dynamically update images, prices, and fabric specifics based on convertible state selections.`
  },
  {
    id: 'non-functional-reqs',
    chapter: 19,
    title: 'Non-Functional Requirements',
    content: `Technical quality benchmarks:
- **Speed**: Page load speeds under 1.5 seconds.
- **Security**: Complete separation of secrets, serving server-side API requests exclusively.
- **Consistency**: 99.9% uptime for checking stock and catalog availability.`
  },
  {
    id: 'ai-personalization',
    chapter: 20,
    title: 'AI & Personalization Features',
    content: `Leveraging artificial intelligence:
- **AI-Powered Styling Assistant**: A virtual Indian wardrobe consultant trained in cuts, colors, and drapes.
- **Frequently Viewed Intelligence**: Highlight products that align with the visitor's curated preferences.`
  },
  {
    id: 'seo-strategy',
    chapter: 21,
    title: 'SEO Strategy',
    content: `Ensures prominent brand discoverability:
- **Schema Markups**: Schema JSON-LD for Product, Article, and local business entities.
- **Semantics**: Clean semantic HTML structure, optimizing canonical headers, and ensuring image alt descriptions are descriptive (e.g., 'noor-corset-kurti-front-detail').`
  },
  {
    id: 'accessibility',
    chapter: 22,
    title: 'Accessibility Standards (WCAG)',
    content: `Designed to WCAG 2.1 AA standards:
- **Contrast**: All typography has a contrast ratio of 4.5:1 against sand/warm white backdrops.
- **Inputs**: Aria labels provided on all interactive filters, buttons, and simulation sliders.`
  },
  {
    id: 'analytics-tracking',
    chapter: 23,
    title: 'Analytics & Event Tracking Plan',
    content: `Telemetry metrics to optimize retail flows:
- **Conversions**: Track complete checkout funnel milestones.
- **Feature Use**: Measure customer engagement with the convertible garment state toggles and AI Styling conversations.`
  },
  {
    id: 'security-privacy',
    chapter: 24,
    title: 'Security & Privacy Requirements',
    content: `Rigorous security directives:
- **Secrets Management**: Absolutely zero API keys or server secrets exposed to client browser networks.
- **Compliance**: GDPR & CCPA compliant cookie banners and private account deletion workflows.`
  },
  {
    id: 'performance-opt',
    chapter: 25,
    title: 'Performance Optimization Strategy',
    content: `Ensuring ultra-fast performance:
- **Lazy Loading**: Native lazy loading for all photographic thumbnails below the fold.
- **Bundle Splitting**: Code-split route packages to accelerate initial screen painting times.`
  },
  {
    id: 'tech-architecture',
    chapter: 26,
    title: 'Technical Architecture & Tech Stack',
    content: `High-performance modern software stack:
- **Frontend**: React with Vite and Tailwind CSS.
- **Backend**: Express server facilitating routing, static asset serving, and secure Gemini API requests.
- **State management**: Pure, lightweight React context and reactive local stores.`
  },
  {
    id: 'api-requirements',
    chapter: 27,
    title: 'API Requirements',
    content: `Core system endpoints:
- **/api/stylist (POST)**: Connects to Gemini-3.5-flash to act as the luxury styling assistant.
- **/api/checkout (POST)**: Completes the transaction workflow and generates tracking credentials.`
  },
  {
    id: 'db-schema',
    chapter: 28,
    title: 'Database Schema Overview',
    content: `Relational model designed for low latency:
- **Product**: ID, Name, Price, Category, Fabric, Sizing, Care, Stock.
- **User**: ID, Email, Address, Points.
- **Order**: ID, UserID, Total, Date, Status, Tracking.`
  },
  {
    id: 'responsive-design',
    chapter: 29,
    title: 'Mobile-First Responsive Design Guidelines',
    content: `Ensuring comfortable shopping across all devices:
- **Sizing**: Touch targets kept at a minimum of 44x44px for buttons.
- **Layouts**: Shift 3-column desktop product listings gracefully to single-column cards on smaller viewports.`
  },
  {
    id: 'animation-specs',
    chapter: 30,
    title: 'Animation & Micro-Interaction Specifications',
    content: `Reinforcing luxury feel through movement:
- **Rotations**: Hero sliders use gentle cross-fades rather than fast slides.
- **Hover States**: Text indicators slide up 2 pixels and buttons dim slightly, indicating interactive capability without aggressive color flashing.`
  },
  {
    id: 'visual-design-dir',
    chapter: 31,
    title: 'Visual Design Direction',
    content: `Our visual language references high-end editorial magazines like Vogue and architectural digests:
- **Mood**: Calm, airy, spacious, beige and matcha tones, soft warm light overlays.
- **Grids**: Asymmetric typography placements resembling luxury lookbooks.`
  },
  {
    id: 'development-roadmap',
    chapter: 32,
    title: 'Development Roadmap & Milestones',
    content: `Structured development cycles:
- **Sprint 1 (Foundations)**: Theme set up, types definition, full-stack server skeleton.
- **Sprint 2 (Commerce Core)**: Search, catalog listing, checkout flow.
- **Sprint 3 (Story & Narrative)**: Legacy showcase, Editorial journal, modular simulator.
- **Sprint 4 (Personalization & Release)**: AI Stylist proxy, SEO optimization, analytics audit.`
  },
  {
    id: 'qa-strategy',
    chapter: 33,
    title: 'QA & Testing Strategy',
    content: `Comprehensive checks to ensure flawless operation:
- **Integration Tests**: Verify item state persistence across browser reload events.
- **Linguistic Quality**: Audit AI styling prompts to ensure the language remains respectful and premium.`
  },
  {
    id: 'future-scalability',
    chapter: 34,
    title: 'Future Scalability Roadmap',
    content: `Future features planned for Year 2:
- **Global reach**: Multi-currency conversion tables and localized courier integrations.
- **Marketplace expansion**: Allowing curated hand-loom weave master artisan partnerships.`
  },
  {
    id: 'success-metrics',
    chapter: 35,
    title: 'Success Metrics & KPIs',
    content: `KPI targets to measure platform maturity:
- **Conversion Rate**: Target of 2.2% on standard e-commerce traffic.
- **Customer Lifetime Value (LTV)**: Target 30% retention rate driven by the legacy membership rewards.`
  },
  {
    id: 'launch-checklist',
    chapter: 36,
    title: 'Launch Checklist',
    content: `Final checks prior to live release:
- **Security Check**: Confirm all API secret variables are verified in environment locks.
- **Typography Check**: Ensure elegant custom fonts load correctly with backup system serifs.`
  },
  {
    id: 'post-launch-opt',
    chapter: 37,
    title: 'Post-Launch Optimization Strategy',
    content: `Continuous growth plan:
- **A/B Testing**: Contrast matching various sage green shades for conversion buttons.
- **AI Refinement**: Update prompt guides based on the most common styling questions submitted by users.`
  }
];
