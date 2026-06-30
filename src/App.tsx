import React, { useState, useEffect } from 'react';
import { products as initialProducts, blogPosts } from './data';
import { Product, CartItem, BlogPost } from './types';
import PrdExplorer from './components/PrdExplorer';
import AiStylist from './components/AiStylist';
import AdminDeck from './components/AdminDeck';
import ClientPortal from './components/ClientPortal';
import {
  ShoppingBag,
  Heart,
  Search,
  Sparkles,
  Layers,
  Settings,
  ChevronRight,
  ChevronLeft,
  X,
  Plus,
  Minus,
  Check,
  ChevronDown,
  Info,
  Calendar,
  Phone,
  FileText,
  SlidersHorizontal,
  ArrowRight,
  RotateCw
} from 'lucide-react';

export default function App() {
  // Navigation & View States
  const [currentTab, setCurrentTab] = useState<'home' | 'shop' | 'story' | 'journal' | 'client' | 'admin' | 'prd'>('home');
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  
  // Shopping & State States
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filtering & Sorting
  const [selectedCollection, setSelectedCollection] = useState<string>('All');
  const [selectedFabric, setSelectedFabric] = useState<string>('All');
  const [sortOption, setSortOption] = useState<string>('featured');

  // Product Selection Customization
  const [activeSize, setActiveSize] = useState('S');
  const [activeColor, setActiveColor] = useState('Sage');
  const [activeStateId, setActiveStateId] = useState('straight'); // Rule Breaker State
  const [rotationAngle, setRotationAngle] = useState(0); // 360 Mockup rotation

  // UI Panels
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isStylistOpen, setIsStylistOpen] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  
  // Checkout process fields
  const [checkoutName, setCheckoutName] = useState('');
  const [checkoutEmail, setCheckoutEmail] = useState('jainaadiitamanna@gmail.com');
  const [checkoutPhone, setCheckoutPhone] = useState('+91 98100 29421');
  const [checkoutStreet, setCheckoutStreet] = useState('B-42, Amrita Shergil Marg');
  const [checkoutCity, setCheckoutCity] = useState('New Delhi');
  const [checkoutZip, setCheckoutZip] = useState('110003');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'cod'>('upi');
  const [isSubmittingOrder, setIsSubmittingOrder] = useState(false);
  const [orderReceipt, setOrderReceipt] = useState<any>(null);

  // Initialize Cart from storage
  useEffect(() => {
    const savedCart = localStorage.getItem('anantamaa_cart');
    if (savedCart) {
      try { setCart(JSON.parse(savedCart)); } catch (e) { console.error(e); }
    }
  }, []);

  // Save Cart to storage
  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem('anantamaa_cart', JSON.stringify(newCart));
  };

  // Hero Lookbook collections metadata
  const heroSlides = [
    {
      category: 'Modern Maharani',
      headline: 'Dress to be remembered.',
      tagline: 'A bold statement where structured silhouettes embrace royal Indian roots.',
      buttonText: 'Discover Modern Royalty',
      bgImg: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80',
      pieces: 'Noor Corset Kurti, Devika Cape Kurti, Zaara Bustier Set'
    },
    {
      category: 'Heritage Romantic',
      headline: 'Tradition, softened.',
      tagline: 'Feather-light drapes, hand-guided resham collars, and delicate ivory mulmuls.',
      buttonText: 'Explore Soft Legacy',
      bgImg: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=80',
      pieces: 'Resham Straight Kurti, Tara Embroidered Kurti, Meher Angrakha'
    },
    {
      category: 'Effortless Edit',
      headline: 'Luxury without trying.',
      tagline: 'Pre-washed Belgian linen co-ords engineered for sophisticated everyday breathing.',
      buttonText: 'Shop Relaxed Cuts',
      bgImg: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1200&q=80',
      pieces: 'Mira Co-ord, Iris Set, Sana Linen Tunic'
    },
    {
      category: 'Drama Architect',
      headline: 'Movement is the statement.',
      tagline: 'High volume, precision bias cuts, and sweeping georgette lines.',
      buttonText: 'View Voluminous Flares',
      bgImg: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1200&q=80',
      pieces: 'Sahar Flare Suit, Anaya Godet, Roohi Anarkali'
    },
    {
      category: 'Rule Breaker',
      headline: 'One garment. Endless possibilities.',
      tagline: 'Modular drapes, hidden loop fasteners, and detachable layers.',
      buttonText: 'Simulate Transformations',
      bgImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80',
      pieces: 'Veda Convertible Kurti, Kiran Layered Set'
    },
    {
      category: 'Refined Edge',
      headline: 'Elegance through construction.',
      tagline: 'Origami pleats, side cutouts, negative spaces, and clean tailoring.',
      buttonText: 'Inspect Architectural Darts',
      bgImg: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80',
      pieces: 'Cutout Corset Kurti, Origami Pleat Set'
    }
  ];

  // Rotate Hero
  useEffect(() => {
    const timer = setInterval(() => {
      if (currentTab === 'home') {
        setActiveHeroSlide(prev => (prev + 1) % heroSlides.length);
      }
    }, 8000);
    return () => clearInterval(timer);
  }, [currentTab]);

  // Handle Cart Operations
  const addToCart = (product: Product, size: string, color: string, stateId?: string) => {
    const existingIndex = cart.findIndex(item => 
      item.product.id === product.id && 
      item.selectedSize === size && 
      item.selectedColor === color &&
      item.selectedStateId === stateId
    );

    if (existingIndex > -1) {
      const updated = [...cart];
      updated[existingIndex].quantity += 1;
      saveCart(updated);
    } else {
      saveCart([...cart, { product, selectedSize: size, selectedColor: color, quantity: 1, selectedStateId: stateId }]);
    }
    setIsCartOpen(true);
  };

  const updateCartQty = (idx: number, delta: number) => {
    const updated = [...cart];
    updated[idx].quantity += delta;
    if (updated[idx].quantity <= 0) {
      updated.splice(idx, 1);
    }
    saveCart(updated);
  };

  const toggleWishlist = (product: Product) => {
    if (wishlist.some(p => p.id === product.id)) {
      setWishlist(wishlist.filter(p => p.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  // Filtered lists
  const filteredProducts = products.filter(p => {
    const matchesCategory = selectedCollection === 'All' || p.category === selectedCollection;
    const matchesFabric = selectedFabric === 'All' || p.fabric.toLowerCase().includes(selectedFabric.toLowerCase());
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.fabric.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesFabric && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'price-low') return a.price - b.price;
    if (sortOption === 'price-high') return b.price - a.price;
    if (sortOption === 'rating') return b.rating - a.rating;
    return 0; // default featured
  });

  const cartTotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  // Submit order via mock api
  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0 || isSubmittingOrder) return;

    setIsSubmittingOrder(true);
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cart,
          address: { fullName: checkoutName, street: checkoutStreet, city: checkoutCity, zipCode: checkoutZip },
          paymentMethod
        })
      });

      const data = await response.json();
      if (data.success) {
        setOrderReceipt(data);
        saveCart([]); // clear bag
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmittingOrder(false);
    }
  };

  // Find convertible configuration details if selected product has it
  const currentConvertibleState = selectedProduct?.convertibleOptions?.states.find(s => s.id === activeStateId);
  const displayedImage = selectedProduct?.isConvertible && currentConvertibleState
    ? selectedProduct.images[currentConvertibleState.imageIndex]
    : selectedProduct?.images[0];

  return (
    <div className="min-h-full flex flex-col font-sans bg-[#F5F2ED] text-[#1A1A1A]">
      
      {/* Editorial Luxury Header Banner */}
      <div className="bg-[#191970] text-[#FEFAF6] py-2 px-4 text-center text-[10px] tracking-[0.3em] uppercase font-mono border-b border-white/10 flex justify-between items-center">
        <span className="hidden md:inline">FREE WORLDWIDE EXPRESS DISPATCH OVER $250</span>
        <span className="mx-auto md:mx-0">FAMILY WEAVING LEGACY SINCE 1951 • CHANDNI CHOWK ATELIER</span>
        <span className="hidden md:inline font-bold text-[#8A9A5B]">75+ YEARS HERITAGE</span>
      </div>

      {/* Main Elegant Header Navigation */}
      <header className="sticky top-0 z-40 bg-[#F5F2ED]/95 backdrop-blur border-b border-brand-blue/10 px-4 md:px-8 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
          
          {/* Left: Collections & Heritage Tabs */}
          <nav className="hidden lg:flex gap-6 text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-blue/80">
            <button 
              onClick={() => { setCurrentTab('shop'); setSelectedCollection('All'); }} 
              className={`hover:text-brand-green transition-colors ${currentTab === 'shop' ? 'text-brand-green border-b border-brand-green pb-1' : ''}`}
            >
              Collections
            </button>
            <button 
              onClick={() => setCurrentTab('story')} 
              className={`hover:text-brand-green transition-colors ${currentTab === 'story' ? 'text-brand-green border-b border-brand-green pb-1' : ''}`}
            >
              Our Story
            </button>
            <button 
              onClick={() => setCurrentTab('journal')} 
              className={`hover:text-brand-green transition-colors ${currentTab === 'journal' ? 'text-brand-green border-b border-brand-green pb-1' : ''}`}
            >
              The Journal
            </button>
          </nav>

          {/* Center Brand Identity (Typographic Mastery) */}
          <div className="text-center cursor-pointer flex-1 lg:flex-initial" onClick={() => setCurrentTab('home')}>
            <h1 className="text-3xl md:text-4xl font-serif tracking-[0.1em] text-brand-blue font-light flex items-center justify-center gap-1">
              ANANTAमाँ
            </h1>
            <p className="text-[8px] uppercase tracking-[0.4em] text-neutral-400 mt-0.5">Timeless Indian Luxury</p>
          </div>

          {/* Right: Client Cabinet, Admin panel, Cart, Stylist */}
          <div className="flex items-center gap-4 md:gap-6 text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-blue/80">
            
            {/* Master PRD Explorer Tab */}
            <button 
              onClick={() => setCurrentTab('prd')}
              className={`flex items-center gap-1.5 px-3 py-1.5 border border-brand-blue/20 rounded-full hover:bg-brand-blue hover:text-white transition-all text-[10px] ${
                currentTab === 'prd' ? 'bg-brand-blue text-white' : 'text-brand-blue bg-white/50'
              }`}
            >
              <FileText className="w-3 h-3 text-brand-green" />
              <span className="hidden sm:inline">Master PRD</span>
            </button>

            {/* AI Stylist Assistant Trigger */}
            <button 
              onClick={() => setIsStylistOpen(true)}
              className="flex items-center gap-1 text-brand-blue hover:text-brand-green transition-colors"
              title="Speak with AI Stylist"
            >
              <Sparkles className="w-4 h-4 text-brand-green" />
              <span className="hidden xl:inline">AI Stylist</span>
            </button>

            <button 
              onClick={() => setCurrentTab('client')} 
              className={`hover:text-brand-green transition-colors flex items-center gap-1 ${currentTab === 'client' ? 'text-brand-green font-bold' : ''}`}
            >
              <Layers className="w-4 h-4" />
              <span className="hidden md:inline">Client Portal</span>
            </button>

            <button 
              onClick={() => setCurrentTab('admin')} 
              className={`hover:text-brand-green transition-colors flex items-center gap-1 ${currentTab === 'admin' ? 'text-brand-green font-bold' : ''}`}
              title="Atelier Admin Control Board"
            >
              <Settings className="w-4 h-4" />
              <span className="hidden md:inline">Admin</span>
            </button>

            {/* Cart Icon with badge */}
            <button 
              onClick={() => setIsCartOpen(true)} 
              className="relative flex items-center gap-1 text-brand-blue hover:text-brand-green transition-colors"
            >
              <ShoppingBag className="w-4.5 h-4.5" />
              <span className="hidden md:inline">Bag</span>
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-green text-white text-[8px] font-mono font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cart.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Floating Web UI notifications for responsive quick styling */}
      {isStylistOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative w-full max-w-lg">
            <AiStylist onClose={() => setIsStylistOpen(false)} />
          </div>
        </div>
      )}

      {/* Main Content Pane */}
      <main className="flex-1">

        {/* 1. HOME TAB */}
        {currentTab === 'home' && (
          <div className="space-y-16 pb-20">
            
            {/* Cinematic Hero lookbook Carousel */}
            <section className="relative h-[650px] overflow-hidden bg-brand-blue/10">
              {/* Active Image Background with crossfade */}
              <div className="absolute inset-0 transition-all duration-1000 ease-in-out">
                <img 
                  src={heroSlides[activeHeroSlide].bgImg} 
                  alt={heroSlides[activeHeroSlide].category} 
                  className="w-full h-full object-cover opacity-30 mix-blend-multiply scale-105 filter saturate-[0.85] contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#F5F2ED] via-[#F5F2ED]/70 to-transparent" />
              </div>

              {/* Slider content block */}
              <div className="absolute inset-0 flex items-center max-w-7xl mx-auto px-4 md:px-8">
                <div className="max-w-2xl space-y-6 pt-12 relative">
                  <span className="text-[11px] uppercase tracking-[0.5em] text-brand-green font-bold block mb-2 font-mono">
                    Editorial Collection {String(activeHeroSlide + 1).padStart(2, '0')}
                  </span>
                  
                  {/* Huge Bold Title */}
                  <h2 className="text-6xl md:text-8xl font-serif leading-[0.9] text-brand-blue tracking-tighter">
                    {heroSlides[activeHeroSlide].category.split(' ')[0]}<br/>
                    <span className="italic text-brand-green ml-16 md:ml-24">
                      {heroSlides[activeHeroSlide].category.split(' ')[1] || ''}
                    </span>
                  </h2>

                  <div className="mt-8 max-w-lg pl-6 border-l border-brand-green/30 space-y-4">
                    <p className="text-lg md:text-xl font-serif italic text-neutral-600 leading-relaxed">
                      "{heroSlides[activeHeroSlide].headline}"
                    </p>
                    <p className="text-xs text-neutral-500 font-sans tracking-wide leading-relaxed">
                      {heroSlides[activeHeroSlide].tagline}
                    </p>
                    <div className="text-[10px] text-brand-blue/60 font-mono tracking-wider pt-1 uppercase">
                      Featured pieces: <span className="text-[#1A1A1A] font-sans font-semibold italic">{heroSlides[activeHeroSlide].pieces}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <button 
                      onClick={() => {
                        setSelectedCollection(heroSlides[activeHeroSlide].category);
                        setCurrentTab('shop');
                      }}
                      className="px-8 py-3.5 bg-brand-blue text-white text-[11px] uppercase tracking-[0.2em] hover:bg-brand-green transition-all shadow-sm rounded-sm"
                    >
                      {heroSlides[activeHeroSlide].buttonText}
                    </button>
                    <button 
                      onClick={() => setCurrentTab('story')}
                      className="px-6 py-3.5 border border-brand-blue/30 text-brand-blue text-[11px] uppercase tracking-[0.2em] hover:bg-white transition-all rounded-sm"
                    >
                      Discover Story
                    </button>
                  </div>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="absolute bottom-10 right-4 md:right-8 flex items-center gap-3">
                <button 
                  onClick={() => setActiveHeroSlide(prev => (prev - 1 + heroSlides.length) % heroSlides.length)}
                  className="w-10 h-10 rounded-full border border-brand-blue/20 bg-[#F5F2ED]/80 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="font-mono text-xs text-brand-blue/60 font-bold">
                  {String(activeHeroSlide + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
                </span>
                <button 
                  onClick={() => setActiveHeroSlide(prev => (prev + 1) % heroSlides.length)}
                  className="w-10 h-10 rounded-full border border-brand-blue/20 bg-[#F5F2ED]/80 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </section>

            {/* Brand Philosophy Narrative Callout */}
            <section className="max-w-4xl mx-auto text-center px-4 space-y-4 py-8">
              <p className="text-[10px] uppercase tracking-[0.4em] text-brand-green font-mono font-bold">THE PHILOSOPHY</p>
              <h3 className="text-3xl md:text-5xl font-serif text-brand-blue tracking-tight leading-tight">
                "We craft garments that speak in quiet, timeless whispers, honoring a 75-year old generational legacy of texture."
              </h3>
              <div className="w-12 h-[1px] bg-brand-green mx-auto my-6" />
              <p className="text-xs text-neutral-500 max-w-xl mx-auto font-sans leading-relaxed">
                Born in the historic markets of Chandni Chowk, ANANTAमाँ rejects loud reds and golden embroidery. We represent structural silhouettes, delicate organic linens, and slow-fashion versatility engineered for the modern aesthetic.
              </p>
            </section>

            {/* New Arrivals Bento Grid with hover transitions */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 space-y-8">
              <div className="flex justify-between items-end border-b border-brand-blue/10 pb-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-brand-green font-mono font-bold">CURATED MASTERPIECES</span>
                  <h3 className="text-3xl font-serif text-brand-blue mt-1">The New Season</h3>
                </div>
                <button 
                  onClick={() => { setSelectedCollection('All'); setCurrentTab('shop'); }}
                  className="text-xs uppercase tracking-widest text-brand-blue font-semibold hover:text-brand-green transition-colors flex items-center gap-1 font-sans"
                >
                  View All Pieces <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.slice(0, 3).map((product) => (
                  <div 
                    key={product.id} 
                    className="group bg-white border border-brand-blue/10 rounded-sm overflow-hidden flex flex-col justify-between transition-all hover:shadow-md cursor-pointer"
                    onClick={() => { setSelectedProduct(product); setActiveStateId('straight'); }}
                  >
                    <div className="relative aspect-[3/4] bg-[#FEFAF6] overflow-hidden">
                      <img 
                        src={product.images[0]} 
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {product.isConvertible && (
                        <span className="absolute top-3 left-3 bg-[#191970] text-white text-[8px] font-mono font-bold uppercase tracking-widest px-2 py-1 rounded">
                          Convertible (3-Way)
                        </span>
                      )}
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-[#191970]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-5 py-2.5 bg-[#FEFAF6] text-brand-blue text-[10px] uppercase tracking-widest font-semibold font-sans shadow">
                          Inspect Craftsmanship
                        </span>
                      </div>
                    </div>

                    <div className="p-5 space-y-2">
                      <div className="flex justify-between items-start">
                        <span className="text-[9px] uppercase tracking-widest text-brand-green font-mono font-bold">{product.category}</span>
                        <span className="font-serif font-medium text-neutral-800">${product.price}</span>
                      </div>
                      <h4 className="font-serif text-lg text-brand-blue tracking-tight">{product.name}</h4>
                      <p className="text-xs text-neutral-500 italic line-clamp-2 leading-relaxed font-serif">"{product.headline}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Split Legacy Banner: Hand-woven Texture with 75-year family chronicle */}
            <section className="bg-brand-blue text-white py-16 px-4 md:px-8">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                <div className="lg:col-span-5 relative group">
                  <div className="absolute inset-0 bg-[#8A9A5B]/10 rounded-[100px_100px_0_0] overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[380px] bg-[#8A9A5B] rounded-[200px] opacity-20" />
                    <div className="absolute top-[10%] left-[10%] w-full h-full border-[0.5px] border-[#FEFAF6]/10 rounded-[100px_100px_0_0]" />
                    <div className="absolute bottom-12 left-12">
                      <p className="text-[10px] uppercase tracking-[0.3em] mb-2 opacity-60 font-mono">Generational Loom</p>
                      <h3 className="text-3xl font-serif text-white">Chanderi Silks</h3>
                      <p className="text-[11px] italic opacity-70 font-sans mt-1">Weaving legacy since 1951</p>
                    </div>
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80" 
                    alt="Loom Heritage"
                    className="w-full h-[450px] object-cover opacity-80 rounded-[80px_80px_0_0] filter saturate-[0.7] contrast-[1.1]"
                  />
                  {/* Floating labels */}
                  <div className="absolute -right-6 top-1/3 vertical-text text-[9px] uppercase tracking-[0.5em] text-[#FEFAF6]/60 rotate-90 hidden sm:block">
                    CHANDNI CHOWK EST. 1951
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-6 lg:pl-8">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-brand-green font-mono font-bold">FAMILY STORY</span>
                  <h3 className="text-4xl md:text-5xl font-serif tracking-tight leading-tight">
                    From Chandni Chowk to Modern Heritage
                  </h3>
                  <p className="text-sm text-neutral-300 leading-relaxed font-sans">
                    Every great brand begins with a story, and ANANTAमाँ is no exception. Rooted in a family legacy spanning more than 75 years, our journey began in the vibrant textile markets of Chandni Chowk, where generations of expertise in fabrics, craftsmanship, and fashion laid the foundation for everything ANANTAमाँ represents today.
                  </p>
                  <p className="text-sm text-neutral-300 leading-relaxed font-sans">
                    Through shifting trends and generations, one core principle remained unchanged: Quality, Authenticity, and Elegance. This heritage inspires every collection we create today.
                  </p>
                  <button 
                    onClick={() => setCurrentTab('story')}
                    className="mt-4 px-8 py-3 bg-[#8A9A5B] hover:bg-[#FEFAF6] hover:text-brand-blue text-[#FEFAF6] text-[11px] uppercase tracking-[0.2em] font-semibold transition-all rounded-sm shadow-sm"
                  >
                    Read the Legacy Chronicles
                  </button>
                </div>
              </div>
            </section>

            {/* Testimonials (Poetic & Emotional) */}
            <section className="max-w-4xl mx-auto text-center px-4 py-12 space-y-6">
              <span className="text-[10px] uppercase tracking-[0.4em] text-brand-green font-mono font-bold">CLIENT REFLECTIONS</span>
              <div className="text-xl md:text-2xl font-serif italic text-[#1A1A1A] leading-relaxed">
                "The Veda Convertible Kurti is an absolute masterpiece of design engineering. I wore it as a sleek corporate tunic to an afternoon panel, and with a simple unbuttoning of its hidden loops, transformed it into an asymmetric draped wrap for a gallery opening. It is slow fashion made sublime."
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-brand-blue font-semibold font-sans">Aishwarya S.</p>
                <p className="text-[10px] text-neutral-400 font-mono mt-0.5">New Delhi • Architecture Director</p>
              </div>
            </section>

            {/* Newsletter Subscription */}
            <section className="max-w-3xl mx-auto text-center px-4 py-16 border-t border-brand-blue/10 space-y-6">
              <h4 className="font-serif text-2xl text-brand-blue">Atelier Newsletter</h4>
              <p className="text-xs text-neutral-500 font-sans max-w-md mx-auto leading-relaxed">
                Enroll to receive exclusive access to our seasonal lookbook catalogs, artisan weaving stories, and early couture collection launches.
              </p>
              <form 
                onSubmit={(e) => { e.preventDefault(); alert("Welcome to the Soma Circle. We are delighted to have you."); }}
                className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto"
              >
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  className="px-4 py-2 bg-white border border-brand-blue/10 rounded-sm text-xs focus:outline-none focus:border-brand-green text-[#1A1A1A] flex-1"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-brand-blue hover:bg-brand-green text-white text-xs uppercase tracking-[0.2em] font-semibold transition-colors rounded-sm"
                >
                  Enroll
                </button>
              </form>
            </section>
          </div>
        )}

        {/* 2. SHOP CATALOG TAB */}
        {currentTab === 'shop' && (
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 space-y-10">
            
            {/* Page Header */}
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-brand-green font-mono font-bold">ANANTAमाँ CATALOG</span>
              <h2 className="text-4xl font-serif text-brand-blue tracking-tight mt-1">The Collection Showcase</h2>
              <p className="text-xs text-neutral-500 max-w-xl font-sans mt-2">
                Browse our curated silhouettes, ranging from structured Chanderi silk bodices to relaxed Belgian linen co-ords. Filter by fabric weight or collection series.
              </p>
            </div>

            {/* Filters Bar */}
            <div className="bg-white border border-brand-blue/10 p-4 rounded flex flex-col md:flex-row gap-4 justify-between items-center text-xs">
              
              {/* Left Filters */}
              <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
                <div>
                  <label className="block text-[9px] uppercase tracking-wider text-neutral-400 font-mono mb-1 font-bold">Collection Series</label>
                  <select
                    value={selectedCollection}
                    onChange={(e) => setSelectedCollection(e.target.value)}
                    className="px-2.5 py-1.5 bg-[#F5F2ED] border border-brand-blue/10 rounded focus:outline-none text-brand-blue font-sans font-medium"
                  >
                    <option value="All">All Collections ({products.length})</option>
                    <option value="Modern Maharani">Modern Maharani</option>
                    <option value="Heritage Romantic">Heritage Romantic</option>
                    <option value="Effortless Edit">Effortless Edit</option>
                    <option value="Drama Architect">Drama Architect</option>
                    <option value="Rule Breaker">Rule Breaker</option>
                    <option value="Refined Edge">Refined Edge</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[9px] uppercase tracking-wider text-neutral-400 font-mono mb-1 font-bold">Fabric Origin</label>
                  <select
                    value={selectedFabric}
                    onChange={(e) => setSelectedFabric(e.target.value)}
                    className="px-2.5 py-1.5 bg-[#F5F2ED] border border-brand-blue/10 rounded focus:outline-none text-brand-blue font-sans font-medium"
                  >
                    <option value="All">All Materials</option>
                    <option value="Silk">Chanderi / Habotai Silk</option>
                    <option value="Linen">Belgian Organic Linen</option>
                    <option value="Mulmul">Cloud Mulmul Cotton</option>
                  </select>
                </div>
              </div>

              {/* Right sorting */}
              <div className="flex items-center gap-4 w-full md:w-auto justify-end">
                <div className="relative w-full md:w-48">
                  <input
                    type="text"
                    placeholder="Search catalog..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-8 pr-3 py-1.5 bg-[#F5F2ED] border border-brand-blue/10 rounded focus:outline-none text-xs"
                  />
                  <Search className="w-3.5 h-3.5 text-neutral-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                </div>

                <div>
                  <label className="block text-[9px] uppercase tracking-wider text-neutral-400 font-mono mb-1 font-bold">Sort By</label>
                  <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="px-2.5 py-1.5 bg-[#F5F2ED] border border-brand-blue/10 rounded focus:outline-none text-brand-blue font-sans font-medium"
                  >
                    <option value="featured">Featured Picks</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Top Client Rated</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedProducts.map((product) => (
                  <div 
                    key={product.id} 
                    className="group bg-white border border-brand-blue/10 rounded-sm overflow-hidden flex flex-col justify-between transition-all hover:shadow-md cursor-pointer"
                    onClick={() => { setSelectedProduct(product); setActiveStateId('straight'); }}
                  >
                    <div className="relative aspect-[3/4] bg-[#FEFAF6] overflow-hidden">
                      <img 
                        src={product.images[0]} 
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {product.isConvertible && (
                        <span className="absolute top-3 left-3 bg-[#191970] text-white text-[8px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded">
                          Convertible
                        </span>
                      )}
                      
                      {/* Interactive Heart Wishlist */}
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleWishlist(product);
                        }}
                        className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#FEFAF6] border border-brand-blue/10 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all shadow-sm"
                      >
                        <Heart className={`w-4 h-4 ${wishlist.some(p => p.id === product.id) ? 'fill-red-500 text-red-500' : 'text-neutral-500'}`} />
                      </button>

                      {/* Quick Peek Hover */}
                      <div className="absolute inset-0 bg-[#191970]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-5 py-2.5 bg-[#FEFAF6] text-brand-blue text-[10px] uppercase tracking-widest font-semibold font-sans shadow">
                          Inspect & Customize
                        </span>
                      </div>
                    </div>

                    <div className="p-5 space-y-2">
                      <div className="flex justify-between items-start">
                        <span className="text-[9px] uppercase tracking-widest text-brand-green font-mono font-bold">{product.category}</span>
                        <span className="font-serif font-medium text-neutral-800">${product.price}</span>
                      </div>
                      <h4 className="font-serif text-lg text-brand-blue tracking-tight">{product.name}</h4>
                      <p className="text-xs text-neutral-500 italic font-serif leading-relaxed line-clamp-2">"{product.headline}"</p>
                      
                      {/* Materials meta badge */}
                      <div className="flex items-center gap-1.5 pt-1">
                        <span className="px-1.5 py-0.5 bg-brand-blue/5 text-brand-blue text-[8px] font-mono rounded uppercase">
                          {product.fabric.split(',')[0]}
                        </span>
                        <span className="text-[10px] text-neutral-400 font-sans">• {product.silhouette.split(' ')[0]} silhouette</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white border border-brand-blue/10 p-12 text-center rounded">
                <Info className="w-8 h-8 text-neutral-300 mx-auto mb-3" />
                <p className="font-serif text-lg text-brand-blue">No Masterpieces Found</p>
                <p className="text-xs text-neutral-400 font-sans mt-1">Try adjusting your fabric origin or collection series filter.</p>
                <button 
                  onClick={() => { setSelectedCollection('All'); setSelectedFabric('All'); setSearchQuery(''); }}
                  className="mt-4 px-5 py-2 bg-brand-blue text-white text-[10px] uppercase tracking-widest font-bold rounded"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* 3. OUR STORY / LEGACY TAB */}
        {currentTab === 'story' && (
          <div className="max-w-4xl mx-auto px-4 py-16 space-y-12">
            <div className="text-center space-y-3">
              <span className="text-[10px] uppercase tracking-[0.4em] text-brand-green font-mono font-bold">SINCE 1951</span>
              <h2 className="text-5xl font-serif text-brand-blue tracking-tight">Our Legacy & Narrative</h2>
              <div className="w-16 h-[1px] bg-brand-green mx-auto my-4" />
            </div>

            <div className="aspect-video bg-[#FEFAF6] border border-brand-blue/10 overflow-hidden rounded relative">
              <img 
                src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80" 
                alt="Vintage Chandni Chowk"
                className="w-full h-full object-cover filter saturate-[0.5] contrast-[1.1]"
              />
              <div className="absolute inset-0 bg-brand-blue/20" />
              <div className="absolute bottom-6 left-6 text-white text-xs font-mono uppercase tracking-widest bg-brand-blue/80 px-3 py-1.5 rounded">
                CHANDNI CHOWK ATELIER ORIGINAL LOOM ARCHIVE
              </div>
            </div>

            <div className="prose prose-neutral max-w-none space-y-6 text-[#1A1A1A] font-sans text-sm leading-relaxed">
              <h3 className="font-serif text-2xl text-brand-blue">ANANTAमाँ: A Journey of Heritage, Elegance, and Infinity</h3>
              <p>
                Every great brand begins with a story, and ANANTAमाँ is no exception. Rooted in a family legacy spanning more than <strong>75 years</strong>, our journey began in the vibrant textile markets of <strong>Chandni Chowk</strong>, where generations of expertise in fabrics, craftsmanship, and fashion laid the foundation for everything ANANTAमाँ represents today.
              </p>
              <p>
                For decades, our family has devoted itself to understanding textiles, craftsmanship, and timeless dressing. Through changing trends and evolving styles, one core principle remained absolutely unchanged: <strong>Quality, Authenticity, and Elegance</strong>. This heritage inspires every collection we create today.
              </p>

              <h3 className="font-serif text-2xl text-brand-blue pt-4">The Meaning Behind ANANTAमाँ</h3>
              <p>
                The name itself carries our philosophy.
              </p>
              <div className="p-6 bg-white border border-brand-blue/10 rounded italic space-y-4 font-serif text-base text-[#1A1A1A] max-w-2xl mx-auto">
                <div>
                  <strong className="text-brand-green font-sans not-italic text-xs font-bold tracking-wider block uppercase">ANANTA</strong>
                  represents infinity, timelessness, endless possibilities, and beauty that never fades.
                </div>
                <div>
                  <strong className="text-brand-green font-sans not-italic text-xs font-bold tracking-wider block uppercase">MÃ (माँ)</strong>
                  represents creation, grace, nurturing, strength, and feminine energy.
                </div>
              </div>
              <p>
                Together they embody timeless Indian elegance crafted for today’s woman. We invite you to experience slow luxury, where each garment tells its own tale of generational devotion.
              </p>
            </div>
          </div>
        )}

        {/* 4. THE JOURNAL TAB */}
        {currentTab === 'journal' && (
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 space-y-12">
            <div className="text-center space-y-2">
              <span className="text-[10px] uppercase tracking-[0.4em] text-brand-green font-mono font-bold">THE JOURNAL</span>
              <h2 className="text-4xl font-serif text-brand-blue tracking-tight">Atelier Chronicles & Essays</h2>
              <p className="text-xs text-neutral-500 font-sans max-w-md mx-auto leading-relaxed">
                Reading archives concerning slow luxury, fabric construction, and the geometry of architectural drapes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div key={post.id} className="bg-white border border-brand-blue/10 overflow-hidden flex flex-col justify-between rounded-sm shadow-sm">
                  <div>
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full aspect-video object-cover filter saturate-[0.8] contrast-[1.05]"
                    />
                    <div className="p-6 space-y-3">
                      <div className="flex justify-between text-[10px] text-neutral-400 font-mono">
                        <span className="uppercase tracking-widest text-brand-green font-bold">{post.category}</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="font-serif text-xl text-brand-blue tracking-tight leading-snug">{post.title}</h3>
                      <p className="text-xs text-neutral-500 font-sans leading-relaxed">{post.summary}</p>
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <button 
                      onClick={() => alert(`Journal Post: ${post.title}\n\n${post.content}`)}
                      className="text-xs uppercase tracking-widest text-brand-blue font-bold hover:text-brand-green transition-all flex items-center gap-1 font-sans underline"
                    >
                      Read Essay <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. CLIENT AREA TAB */}
        {currentTab === 'client' && <ClientPortal />}

        {/* 6. ADMIN CONTROL TAB */}
        {currentTab === 'admin' && <AdminDeck />}

        {/* 7. MASTER PRD EXPLORER TAB */}
        {currentTab === 'prd' && (
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 space-y-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-brand-green font-mono font-bold">PROJECT SPECIFICATION</span>
              <h2 className="text-4xl font-serif text-brand-blue tracking-tight mt-1">ANANTAमाँ Enterprise PRD</h2>
              <p className="text-xs text-neutral-500 max-w-xl font-sans mt-2">
                This interactive explorer hosts all 37 chapters of the Product Requirements Document (PRD) prepared for our luxury fashion e-commerce storefront.
              </p>
            </div>
            <PrdExplorer />
          </div>
        )}

      </main>

      {/* FOOTER */}
      <footer className="bg-brand-blue text-[#FEFAF6] border-t border-brand-green/20 py-16 px-4 md:px-8 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-xs">
          <div className="space-y-4">
            <h2 className="text-2xl font-serif tracking-[0.1em] text-white font-light">ANANTAमाँ</h2>
            <p className="text-[10px] text-neutral-400 font-sans leading-relaxed">
              Timeless Indian Luxury. Quiet Luxury. Soft Femininity. Heritage and architectural silhouette tailoring since 1951.
            </p>
            <div className="text-[9px] uppercase tracking-widest text-[#8A9A5B] font-mono">
              Chandni Chowk Atelier • Est. 1951
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-serif text-sm uppercase tracking-wider text-white">The Collections</h4>
            <ul className="space-y-2 text-neutral-400 font-sans">
              <li><button onClick={() => { setSelectedCollection('Modern Maharani'); setCurrentTab('shop'); }} className="hover:text-brand-green">Modern Maharani</button></li>
              <li><button onClick={() => { setSelectedCollection('Heritage Romantic'); setCurrentTab('shop'); }} className="hover:text-brand-green">Heritage Romantic</button></li>
              <li><button onClick={() => { setSelectedCollection('Effortless Edit'); setCurrentTab('shop'); }} className="hover:text-brand-green">Effortless Edit</button></li>
              <li><button onClick={() => { setSelectedCollection('Drama Architect'); setCurrentTab('shop'); }} className="hover:text-brand-green">Drama Architect</button></li>
              <li><button onClick={() => { setSelectedCollection('Rule Breaker'); setCurrentTab('shop'); }} className="hover:text-brand-green">Rule Breaker (Convertible)</button></li>
              <li><button onClick={() => { setSelectedCollection('Refined Edge'); setCurrentTab('shop'); }} className="hover:text-brand-green">Refined Edge</button></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-serif text-sm uppercase tracking-wider text-white">Client Concierge</h4>
            <ul className="space-y-2 text-neutral-400 font-sans">
              <li><button onClick={() => setCurrentTab('client')} className="hover:text-brand-green">Order Tracking</button></li>
              <li><button onClick={() => setIsStylistOpen(true)} className="hover:text-brand-green">AI Styling Chat</button></li>
              <li><button onClick={() => setCurrentTab('story')} className="hover:text-brand-green">Generational Legacy</button></li>
              <li><a href="mailto:concierge@anantamaa.luxury" className="hover:text-brand-green">concierge@anantamaa.luxury</a></li>
              <li className="text-brand-green font-semibold">WhatsApp Support: +91 98100 29421</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-sm uppercase tracking-wider text-white">Soma Circle Newsletter</h4>
            <p className="text-neutral-400 leading-relaxed font-sans">
              Join to experience modern Indian heritage first. Stay updated on catalog releases and special early bookings.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email"
                className="bg-white/10 text-white border border-white/20 px-3 py-1.5 rounded-sm text-[11px] focus:outline-none focus:border-brand-green w-full"
              />
              <button onClick={() => alert("Welcome to the Soma Circle.")} className="px-3 py-1.5 bg-[#8A9A5B] hover:bg-white hover:text-brand-blue text-white text-[10px] uppercase font-bold rounded-sm">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center text-[10px] text-neutral-400 font-mono gap-4">
          <div>© 2026 ANANTAमाँ luxury. All rights reserved. Made in India.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Heritage Service</a>
            <a href="#" className="hover:text-white">Sizing Grid</a>
          </div>
        </div>
      </footer>

      {/* --- SIDE DRAWER: PRODUCT DETAIL MODAL & transformation simulator --- */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#FEFAF6] border border-brand-blue/15 max-w-4xl w-full rounded-sm overflow-hidden shadow-2xl relative grid grid-cols-1 md:grid-cols-12 max-h-[90vh]">
            
            {/* Close */}
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full text-brand-blue hover:bg-brand-blue hover:text-white transition-all shadow-sm"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left: Dynamic Image Showcase & 360 viewer Mockup */}
            <div className="md:col-span-6 bg-[#F5F2ED] p-6 flex flex-col justify-between h-full min-h-[400px]">
              
              {/* Dynamic Image */}
              <div className="relative flex-1 flex items-center justify-center aspect-[3/4] overflow-hidden rounded border border-brand-blue/5 shadow-inner">
                <img 
                  src={displayedImage} 
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover transition-transform duration-500"
                  style={{ transform: `rotate(${rotationAngle}deg)` }}
                />
                
                {/* Rule Breaker active badge indicator */}
                {selectedProduct.isConvertible && (
                  <span className="absolute bottom-4 left-4 bg-brand-blue text-white text-[9px] font-mono font-bold uppercase tracking-widest px-3 py-1.5 rounded">
                    Active State: {currentConvertibleState?.name || 'Classic'}
                  </span>
                )}
              </div>

              {/* 360 Degree Viewer Interactive Slider Mockup */}
              <div className="mt-4 p-3 bg-white/70 border border-brand-blue/5 rounded text-xs space-y-2">
                <div className="flex justify-between items-center text-neutral-500 font-mono text-[10px]">
                  <span className="flex items-center gap-1"><RotateCw className="w-3.5 h-3.5 animate-spin-slow text-brand-green" /> 360° CRAFTSMANSHIP VIEWER</span>
                  <span>{rotationAngle}° Angle</span>
                </div>
                <input 
                  type="range" 
                  min="-180" 
                  max="180" 
                  value={rotationAngle} 
                  onChange={(e) => setRotationAngle(Number(e.target.value))}
                  className="w-full accent-brand-blue h-1 bg-brand-blue/10 rounded-lg cursor-pointer" 
                />
                <p className="text-[9px] text-neutral-400 font-sans italic text-center">Drag slider above to rotate and inspect tailoring darts under light.</p>
              </div>
            </div>

            {/* Right: Specifications & Transformation Simulation */}
            <div className="md:col-span-6 p-6 md:p-8 flex flex-col justify-between overflow-y-auto h-[90vh] md:h-auto max-h-[90vh]">
              <div className="space-y-6">
                
                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-brand-green font-mono font-bold">
                    {selectedProduct.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif text-brand-blue tracking-tight mt-1">{selectedProduct.name}</h3>
                  <p className="text-lg font-serif text-neutral-700 mt-1 font-medium">${selectedProduct.price}</p>
                </div>

                <div className="p-3 bg-white border-l-2 border-brand-green text-xs italic font-serif text-neutral-600 leading-relaxed shadow-sm">
                  "{selectedProduct.headline}"
                </div>

                {/* --- CHIP TRANSFORMATION SIMULATOR (Only for convertible / Rule Breakers) --- */}
                {selectedProduct.isConvertible && selectedProduct.convertibleOptions && (
                  <div className="p-4 bg-white border border-brand-blue/10 rounded space-y-3">
                    <span className="text-[9px] uppercase tracking-widest text-brand-green font-mono font-bold flex items-center gap-1">
                      <Layers className="w-3.5 h-3.5 text-brand-blue" />
                      {selectedProduct.convertibleOptions.label}
                    </span>
                    <p className="text-[10px] text-neutral-500 font-sans">{selectedProduct.convertibleOptions.description}</p>
                    
                    {/* States button selector */}
                    <div className="flex flex-col gap-2 pt-1">
                      {selectedProduct.convertibleOptions.states.map((state) => (
                        <button
                          key={state.id}
                          onClick={() => {
                            setActiveStateId(state.id);
                            // Adjust rotation angles slightly to simulate change
                            setRotationAngle(prev => (prev + 10) % 360);
                          }}
                          className={`w-full text-left p-2.5 rounded transition-all text-xs flex items-center justify-between border ${
                            activeStateId === state.id 
                              ? 'bg-brand-blue/5 border-brand-blue text-brand-blue' 
                              : 'bg-neutral-50 border-neutral-200 text-neutral-700 hover:bg-neutral-100'
                          }`}
                        >
                          <div>
                            <span className="font-mono text-[9px] font-bold block opacity-60">MODE MODE</span>
                            <span className="font-sans font-medium">{state.name}</span>
                          </div>
                          {activeStateId === state.id && (
                            <Check className="w-4 h-4 text-brand-green shrink-0" />
                          )}
                        </button>
                      ))}
                    </div>
                    {/* Simulated state description */}
                    <div className="p-2.5 bg-[#F5F2ED] rounded text-[10px] font-sans text-neutral-500 leading-relaxed italic">
                      {currentConvertibleState?.desc}
                    </div>
                  </div>
                )}

                {/* Sizing selection */}
                <div className="space-y-2">
                  <span className="text-[9px] uppercase tracking-widest text-neutral-400 font-mono font-bold block">SELECT CLIENT SIZING</span>
                  <div className="flex gap-2">
                    {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                      <button
                        key={size}
                        onClick={() => setActiveSize(size)}
                        className={`w-10 h-10 rounded border text-xs font-mono font-bold flex items-center justify-center transition-all ${
                          activeSize === size 
                            ? 'bg-brand-blue border-brand-blue text-white shadow' 
                            : 'bg-white border-neutral-200 text-neutral-600 hover:border-neutral-400'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Fabric and construction tabs */}
                <div className="space-y-3 pt-4 border-t border-brand-blue/10">
                  <span className="text-[9px] uppercase tracking-widest text-neutral-400 font-mono font-bold block">CRAFTSMANSHIP INDEX</span>
                  <div className="text-xs space-y-2 text-neutral-600 font-sans">
                    <p><strong className="text-brand-blue font-serif font-semibold">Fabric origin:</strong> {selectedProduct.fabric}</p>
                    <p><strong className="text-brand-blue font-serif font-semibold">Couture construction:</strong> {selectedProduct.construction}</p>
                    <p><strong className="text-brand-blue font-serif font-semibold">Recommended Care:</strong> {selectedProduct.careInstructions}</p>
                  </div>
                </div>

                {/* Complete Look recommendation */}
                <div className="p-3.5 bg-[#8A9A5B]/5 border border-[#8A9A5B]/20 rounded text-xs">
                  <span className="text-[9px] uppercase tracking-widest text-brand-green font-mono font-bold block">COMPLETE THE LOOK</span>
                  <p className="text-neutral-600 mt-1 font-serif italic">Stylist recommends layering this with the **Sand Raw Silk Trousers** and our delicate minimal **Antique Gold Hoop earrings**.</p>
                </div>

              </div>

              <div className="pt-6 border-t border-brand-blue/10 mt-6 flex gap-3">
                <button
                  onClick={() => addToCart(selectedProduct, activeSize, activeColor, selectedProduct.isConvertible ? activeStateId : undefined)}
                  className="flex-1 py-3 bg-brand-blue hover:bg-brand-green text-white text-xs uppercase tracking-[0.2em] font-bold transition-all rounded shadow-sm flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4.5 h-4.5" /> Add to Bespoke Bag
                </button>
                <button
                  onClick={() => toggleWishlist(selectedProduct)}
                  className="px-4 py-3 bg-white border border-brand-blue/20 hover:bg-[#FEFAF6] text-brand-blue rounded transition-all"
                  title="Save to Wishlist"
                >
                  <Heart className={`w-5 h-5 ${wishlist.some(p => p.id === selectedProduct.id) ? 'fill-red-500 text-red-500' : ''}`} />
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* --- SIDE DRAWER: LUXURY SHOPPING BAG & CHECKOUT SHEET --- */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex justify-end">
          <div className="bg-[#FEFAF6] w-full max-w-lg h-full shadow-2xl flex flex-col justify-between overflow-hidden">
            
            {/* Header */}
            <div className="p-5 border-b border-brand-blue/10 bg-brand-blue text-white flex justify-between items-center">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-brand-green" />
                <h3 className="font-serif text-lg uppercase tracking-wider">Your Atelier Bag</h3>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="text-[#FEFAF6] hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Cart Body */}
            <div className="flex-1 overflow-y-auto p-5 space-y-6">
              
              {showCheckout ? (
                // Checkout Sheet
                <form onSubmit={handlePlaceOrder} className="space-y-6">
                  <div>
                    <h4 className="font-serif text-lg text-brand-blue">One-Page Bespoke Checkout</h4>
                    <p className="text-[10px] text-neutral-400 font-sans">Fill in your coordinates below to finalize your bespoke dispatch.</p>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div>
                      <label className="block text-[9px] uppercase tracking-widest text-neutral-400 font-mono mb-1">Full Client Name</label>
                      <input
                        type="text"
                        required
                        value={checkoutName}
                        onChange={(e) => setCheckoutName(e.target.value)}
                        placeholder="e.g. Tamanna Jain"
                        className="w-full px-3 py-2 bg-[#F5F2ED] border border-brand-blue/10 rounded focus:outline-none text-[#1A1A1A]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[9px] uppercase tracking-widest text-neutral-400 font-mono mb-1">Email</label>
                        <input
                          type="email"
                          required
                          value={checkoutEmail}
                          onChange={(e) => setCheckoutEmail(e.target.value)}
                          className="w-full px-3 py-2 bg-[#F5F2ED] border border-brand-blue/10 rounded focus:outline-none text-[#1A1A1A]"
                        />
                      </div>
                      <div>
                        <label className="block text-[9px] uppercase tracking-widest text-neutral-400 font-mono mb-1">Phone</label>
                        <input
                          type="text"
                          required
                          value={checkoutPhone}
                          onChange={(e) => setCheckoutPhone(e.target.value)}
                          className="w-full px-3 py-2 bg-[#F5F2ED] border border-brand-blue/10 rounded focus:outline-none text-[#1A1A1A]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[9px] uppercase tracking-widest text-neutral-400 font-mono mb-1">Delivery Address</label>
                      <input
                        type="text"
                        required
                        value={checkoutStreet}
                        onChange={(e) => setCheckoutStreet(e.target.value)}
                        placeholder="Street Address"
                        className="w-full px-3 py-2 bg-[#F5F2ED] border border-brand-blue/10 rounded focus:outline-none text-[#1A1A1A] mb-2"
                      />
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          required
                          value={checkoutCity}
                          onChange={(e) => setCheckoutCity(e.target.value)}
                          placeholder="City"
                          className="w-full px-3 py-2 bg-[#F5F2ED] border border-brand-blue/10 rounded focus:outline-none text-[#1A1A1A]"
                        />
                        <input
                          type="text"
                          required
                          value={checkoutZip}
                          onChange={(e) => setCheckoutZip(e.target.value)}
                          placeholder="ZIP / Postal"
                          className="w-full px-3 py-2 bg-[#F5F2ED] border border-brand-blue/10 rounded focus:outline-none text-[#1A1A1A]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[9px] uppercase tracking-widest text-neutral-400 font-mono mb-1 block mb-2">Preferred Payment Gateway</label>
                      <div className="grid grid-cols-3 gap-2">
                        <button
                          type="button"
                          onClick={() => setPaymentMethod('upi')}
                          className={`p-2.5 rounded border text-center font-mono font-bold text-[10px] ${
                            paymentMethod === 'upi' ? 'bg-brand-blue border-brand-blue text-white' : 'bg-white border-neutral-200 text-neutral-600'
                          }`}
                        >
                          UPI (Instant)
                        </button>
                        <button
                          type="button"
                          onClick={() => setPaymentMethod('card')}
                          className={`p-2.5 rounded border text-center font-mono font-bold text-[10px] ${
                            paymentMethod === 'card' ? 'bg-brand-blue border-brand-blue text-white' : 'bg-white border-neutral-200 text-neutral-600'
                          }`}
                        >
                          Cards / Net
                        </button>
                        <button
                          type="button"
                          onClick={() => setPaymentMethod('cod')}
                          className={`p-2.5 rounded border text-center font-mono font-bold text-[10px] ${
                            paymentMethod === 'cod' ? 'bg-brand-blue border-brand-blue text-white' : 'bg-white border-neutral-200 text-neutral-600'
                          }`}
                        >
                          COD Luxury
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-brand-blue/10 space-y-3">
                    <div className="flex justify-between text-xs text-neutral-500 font-sans">
                      <span>Artisan subtotal</span>
                      <span className="font-serif font-medium">${cartTotal}</span>
                    </div>
                    <div className="flex justify-between text-xs text-neutral-500 font-sans">
                      <span>Express secure dispatch</span>
                      <span className="text-brand-green font-semibold uppercase tracking-wider">Free Complementary</span>
                    </div>
                    <div className="flex justify-between text-base font-serif text-brand-blue pt-1">
                      <span>Total Invoice</span>
                      <span>${cartTotal}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setShowCheckout(false)}
                      className="w-1/3 py-3 border border-brand-blue/20 hover:bg-neutral-50 text-[#1A1A1A] text-xs uppercase tracking-widest font-semibold transition-all rounded"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmittingOrder || !checkoutName}
                      className="flex-1 py-3 bg-brand-blue hover:bg-brand-green text-white text-xs uppercase tracking-[0.2em] font-bold transition-all rounded shadow-sm"
                    >
                      {isSubmittingOrder ? 'Verifying secure bank keys...' : 'Submit Bespoke Order'}
                    </button>
                  </div>
                </form>

              ) : orderReceipt ? (
                // Order Success Sheet
                <div className="p-6 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-brand-green/10 text-brand-green mx-auto flex items-center justify-center border border-brand-green/20">
                    <Check className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-serif text-2xl text-brand-blue tracking-tight">Order Received gracefully</h4>
                    <p className="text-xs text-brand-green font-mono uppercase tracking-widest mt-1">ID: {orderReceipt.orderId}</p>
                  </div>

                  <p className="text-xs text-neutral-500 font-sans leading-relaxed">
                    Thank you, your order has been sent to our generational master weavers at the Chandni Chowk atelier. You can track your garment status directly from the **Client Cabinet** using your tracking ID.
                  </p>

                  <div className="p-4 bg-[#F5F2ED] border border-brand-blue/5 rounded text-left text-xs space-y-2">
                    <p className="text-[#1A1A1A] font-sans"><strong>Bespoke tracking:</strong> <span className="font-mono text-brand-green">{orderReceipt.trackingNumber}</span></p>
                    <p className="text-[#1A1A1A] font-sans"><strong>Est. Arrival:</strong> {orderReceipt.deliveryDate || orderReceipt.deliveryTimeline}</p>
                    <p className="text-[#1A1A1A] font-sans"><strong>Address:</strong> {checkoutStreet}, {checkoutCity}</p>
                  </div>

                  <button
                    onClick={() => {
                      setOrderReceipt(null);
                      setIsCartOpen(false);
                      setCurrentTab('client'); // open client dashboard immediately to view order!
                    }}
                    className="w-full py-3 bg-brand-blue hover:bg-brand-green text-white text-xs uppercase tracking-widest font-bold rounded transition-colors"
                  >
                    Manage Order in Cabinet
                  </button>
                </div>

              ) : (
                // Cart Items Feed
                <div className="space-y-4">
                  {cart.length > 0 ? (
                    cart.map((item, idx) => (
                      <div key={idx} className="flex gap-4 p-3 bg-white border border-brand-blue/5 rounded">
                        <img 
                          src={item.product.isConvertible && item.selectedStateId 
                            ? item.product.images[item.product.convertibleOptions?.states.find(s => s.id === item.selectedStateId)?.imageIndex || 0]
                            : item.product.images[0]
                          } 
                          alt={item.product.name} 
                          className="w-20 h-24 object-cover rounded border border-brand-blue/5"
                        />
                        <div className="flex-1 flex flex-col justify-between text-xs">
                          <div>
                            <div className="flex justify-between font-serif font-medium text-brand-blue text-sm">
                              <span>{item.product.name}</span>
                              <span>${item.product.price * item.quantity}</span>
                            </div>
                            <p className="text-[10px] text-brand-green font-mono uppercase tracking-wider mt-0.5">{item.product.category}</p>
                            <div className="flex gap-3 text-[10px] text-neutral-400 font-sans mt-1">
                              <span>Size: <strong className="text-neutral-700">{item.selectedSize}</strong></span>
                              {item.selectedStateId && (
                                <span className="px-1 bg-brand-blue/5 text-brand-blue text-[9px] uppercase font-mono">
                                  State: {item.selectedStateId}
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2 border border-brand-blue/10 rounded px-1.5 py-0.5 bg-neutral-50">
                              <button onClick={() => updateCartQty(idx, -1)} className="p-0.5 hover:text-brand-green transition-colors">
                                <Minus className="w-3.5 h-3.5" />
                              </button>
                              <span className="font-mono text-xs font-semibold w-4 text-center">{item.quantity}</span>
                              <button onClick={() => updateCartQty(idx, 1)} className="p-0.5 hover:text-brand-green transition-colors">
                                <Plus className="w-3.5 h-3.5" />
                              </button>
                            </div>
                            <button 
                              onClick={() => updateCartQty(idx, -item.quantity)} 
                              className="text-[10px] text-red-500 font-semibold hover:underline"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="py-20 text-center text-neutral-400 font-sans">
                      <ShoppingBag className="w-12 h-12 text-neutral-200 mx-auto mb-4" />
                      <p className="font-serif text-lg text-brand-blue">Your bag is empty.</p>
                      <p className="text-xs text-neutral-400 mt-1">Weave beautiful statements from our new arrivals catalog.</p>
                      <button 
                        onClick={() => { setIsCartOpen(false); setCurrentTab('shop'); }}
                        className="mt-6 px-6 py-2.5 bg-brand-blue hover:bg-brand-green text-white text-[11px] uppercase tracking-[0.2em] font-bold rounded-sm"
                      >
                        Explore the Collections
                      </button>
                    </div>
                  )}
                </div>
              )}

            </div>

            {/* Cart Footer */}
            {!showCheckout && !orderReceipt && cart.length > 0 && (
              <div className="p-5 border-t border-brand-blue/10 bg-white space-y-4">
                <div className="flex justify-between items-end font-serif text-brand-blue text-lg">
                  <span>Invoiced Subtotal</span>
                  <span className="font-semibold">${cartTotal}</span>
                </div>
                <p className="text-[10px] text-neutral-400 font-sans leading-relaxed">
                  Shipping rates, taxes, and custom tailored measurement verification values are completely complementary for Soma Platinum tier guests.
                </p>
                <button
                  onClick={() => setShowCheckout(true)}
                  className="w-full py-3.5 bg-brand-blue hover:bg-brand-green text-white text-xs uppercase tracking-[0.2em] font-bold transition-all rounded shadow-sm text-center"
                >
                  Proceed to Atelier Checkout
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
