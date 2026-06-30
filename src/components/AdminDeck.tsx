import React, { useState } from 'react';
import { Product } from '../types';
import { products as initialProducts } from '../data';
import { BarChart2, Plus, Trash2, Edit2, CheckCircle2, ShieldAlert, Tag, LayoutGrid, FileSearch } from 'lucide-react';

interface OrderMock {
  id: string;
  customer: string;
  date: string;
  items: string;
  total: number;
  status: 'Pending' | 'Shipped' | 'Delivered';
}

export default function AdminDeck() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [orders, setOrders] = useState<OrderMock[]>([
    { id: 'ANANTA-389421', customer: 'jainaadiitamanna@gmail.com', date: '2026-06-30', items: 'Noor Corset Kurti (x1)', total: 340, status: 'Pending' },
    { id: 'ANANTA-108342', customer: 'aishwarya.rai@bollywood.in', date: '2026-06-29', items: 'Veda Convertible Kurti (x1), Sand Straight Trousers (x1)', total: 490, status: 'Shipped' },
    { id: 'ANANTA-882103', customer: 'meera.s@architects.co', date: '2026-06-28', items: 'Mira Coord Set (x1)', total: 310, status: 'Delivered' }
  ]);

  // Product Form states
  const [name, setName] = useState('');
  const [price, setPrice] = useState(300);
  const [category, setCategory] = useState<'Modern Maharani' | 'Heritage Romantic' | 'Effortless Edit' | 'Drama Architect' | 'Rule Breaker' | 'Refined Edge'>('Modern Maharani');
  const [fabric, setFabric] = useState('Chanderi Silk');
  const [desc, setDesc] = useState('');

  // SEO states
  const [seoTitle, setSeoTitle] = useState('ANANTAमाँ | Timeless Indian Luxury & Quiet Heritage');
  const [seoDesc, setSeoDesc] = useState('Explore the 75-year legacy of luxury Indian drapes, modern silhouettes, and architectural cuts.');

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !desc) return;

    const newProd: Product = {
      id: name.toLowerCase().replace(/\s+/g, '-'),
      name,
      price: Number(price),
      category,
      headline: 'A bespoke architectural masterpiece.',
      description: desc,
      fabric,
      construction: 'Hand-sewn finished seams, bias reinforcement, fully tailored.',
      silhouette: 'Modern luxury cut.',
      sleeves: 'Sleeveless / Convertible',
      occasion: 'Festive Ceremonies',
      images: ['https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80'],
      careInstructions: 'Dry clean only.',
      shipping: 'Bespotly tailored to order. Ships in 10-14 days.',
      returnPolicy: 'Tailor altered or returned for store credit.',
      availability: true,
      rating: 5.0,
      reviews: [],
      details: ['Handloomed silk structure', 'Finished margins', 'Signature luxury detailing']
    };

    setProducts([newProd, ...products]);
    setName('');
    setDesc('');
    setFabric('Chanderi Silk');
    setPrice(300);
  };

  const handleDeleteProduct = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const handleToggleStatus = (id: string) => {
    setOrders(orders.map(o => {
      if (o.id === id) {
        const nextStatus = o.status === 'Pending' ? 'Shipped' : o.status === 'Shipped' ? 'Delivered' : 'Pending';
        return { ...o, status: nextStatus };
      }
      return o;
    }));
  };

  return (
    <div className="space-y-12 max-w-7xl mx-auto p-4 md:p-8">
      {/* Top Banner Warning: Dev Environment */}
      <div className="bg-brand-blue/5 border border-brand-blue/10 p-4 rounded flex items-center gap-3">
        <ShieldAlert className="w-5 h-5 text-brand-green shrink-0" />
        <div className="text-xs">
          <span className="font-semibold text-brand-blue">Operational Sandbox:</span> All changes in this administrative deck run in active preview memory. Product edits and order updates immediately synchronize to your local store.
        </div>
      </div>

      {/* Analytics Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white border border-brand-blue/10 p-6 rounded shadow-sm flex justify-between items-center">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono font-bold">Total Revenue</p>
            <p className="text-3xl font-serif text-brand-blue mt-1">${orders.reduce((sum, o) => sum + o.total, 0) + 1240}</p>
          </div>
          <div className="w-10 h-10 rounded bg-[#8A9A5B]/10 flex items-center justify-center">
            <BarChart2 className="w-5 h-5 text-brand-green" />
          </div>
        </div>

        <div className="bg-white border border-brand-blue/10 p-6 rounded shadow-sm flex justify-between items-center">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono font-bold">Active Orders</p>
            <p className="text-3xl font-serif text-brand-blue mt-1">{orders.length}</p>
          </div>
          <div className="w-10 h-10 rounded bg-brand-blue/10 flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5 text-brand-blue" />
          </div>
        </div>

        <div className="bg-white border border-brand-blue/10 p-6 rounded shadow-sm flex justify-between items-center">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono font-bold">AOV (Avg Ticket)</p>
            <p className="text-3xl font-serif text-brand-blue mt-1">$380</p>
          </div>
          <div className="w-10 h-10 rounded bg-brand-blue/10 flex items-center justify-center">
            <Tag className="w-5 h-5 text-brand-blue" />
          </div>
        </div>

        <div className="bg-white border border-brand-blue/10 p-6 rounded shadow-sm flex justify-between items-center">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono font-bold">Conversion Rate</p>
            <p className="text-3xl font-serif text-brand-blue mt-1">2.41%</p>
          </div>
          <div className="w-10 h-10 rounded bg-[#8A9A5B]/10 flex items-center justify-center">
            <LayoutGrid className="w-5 h-5 text-brand-green" />
          </div>
        </div>
      </div>

      {/* Lower Section: Product Builder & Orders Live List */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Col: Add & Manage Products */}
        <div className="lg:col-span-7 bg-white border border-brand-blue/10 p-6 rounded shadow-sm space-y-8">
          <div>
            <h3 className="font-serif text-xl text-brand-blue font-medium">Couture Catalog Editor</h3>
            <p className="text-xs text-neutral-500 font-sans mt-1">Draft new architectural items directly into the ANANTAमाँ storefront database.</p>
          </div>

          <form onSubmit={handleAddProduct} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-neutral-500 font-sans font-bold mb-1">Product Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tara Silk Coord"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 bg-[#F5F2ED] border border-brand-blue/10 rounded text-xs focus:outline-none focus:border-brand-green text-[#1A1A1A]"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-neutral-500 font-sans font-bold mb-1">Price (USD)</label>
                <input
                  type="number"
                  required
                  min="50"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="w-full px-3 py-2 bg-[#F5F2ED] border border-brand-blue/10 rounded text-xs focus:outline-none focus:border-brand-green text-[#1A1A1A]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-neutral-500 font-sans font-bold mb-1">Collection Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as any)}
                  className="w-full px-3 py-2 bg-[#F5F2ED] border border-brand-blue/10 rounded text-xs focus:outline-none focus:border-brand-green text-[#1A1A1A]"
                >
                  <option value="Modern Maharani">Modern Maharani</option>
                  <option value="Heritage Romantic">Heritage Romantic</option>
                  <option value="Effortless Edit">Effortless Edit</option>
                  <option value="Drama Architect">Drama Architect</option>
                  <option value="Rule Breaker">Rule Breaker</option>
                  <option value="Refined Edge">Refined Edge</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-neutral-500 font-sans font-bold mb-1">Fabric Composition</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 100% Belgian Organic Linen"
                  value={fabric}
                  onChange={(e) => setFabric(e.target.value)}
                  className="w-full px-3 py-2 bg-[#F5F2ED] border border-brand-blue/10 rounded text-xs focus:outline-none focus:border-brand-green text-[#1A1A1A]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest text-neutral-500 font-sans font-bold mb-1">Editorial Description</label>
              <textarea
                required
                rows={3}
                placeholder="Write an elegant storytelling narrative for this product..."
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="w-full px-3 py-2 bg-[#F5F2ED] border border-brand-blue/10 rounded text-xs focus:outline-none focus:border-brand-green text-[#1A1A1A]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-brand-blue hover:bg-brand-green text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors rounded flex items-center justify-center gap-1.5"
            >
              <Plus className="w-4 h-4" /> Add Bespoke Piece
            </button>
          </form>

          {/* Active List */}
          <div className="space-y-3 pt-6 border-t border-brand-blue/10">
            <h4 className="font-serif text-sm text-brand-blue uppercase tracking-wider">Active Inventory List ({products.length})</h4>
            <div className="divide-y divide-brand-blue/5 max-h-80 overflow-y-auto pr-1">
              {products.map((p) => (
                <div key={p.id} className="py-2.5 flex justify-between items-center gap-4 text-xs">
                  <div className="truncate">
                    <span className="font-semibold text-brand-blue">{p.name}</span>
                    <span className="mx-2 text-neutral-300">|</span>
                    <span className="text-[10px] text-brand-green font-mono uppercase tracking-wider">{p.category}</span>
                    <p className="text-[10px] text-neutral-400 font-mono mt-0.5">{p.fabric}</p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="font-serif font-medium text-neutral-700">${p.price}</span>
                    <button
                      onClick={() => handleDeleteProduct(p.id)}
                      className="p-1.5 text-red-500 hover:bg-red-50 rounded transition-colors"
                      title="Remove product"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Col: Live Orders & SEO schemas */}
        <div className="lg:col-span-5 space-y-8">
          {/* Simulated Order Desk */}
          <div className="bg-white border border-brand-blue/10 p-6 rounded shadow-sm space-y-6">
            <div>
              <h3 className="font-serif text-lg text-brand-blue font-medium">Concierge Order Desk</h3>
              <p className="text-[10px] text-neutral-500 font-sans mt-0.5">Real-time simulated transactions and bespoke tailors' logs.</p>
            </div>

            <div className="space-y-4">
              {orders.map((o) => (
                <div key={o.id} className="p-3 bg-[#F5F2ED]/60 border border-brand-blue/5 rounded text-xs space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-mono font-bold text-brand-blue">{o.id}</span>
                    <button
                      onClick={() => handleToggleStatus(o.id)}
                      className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                        o.status === 'Pending' 
                          ? 'bg-amber-100 text-amber-800' 
                          : o.status === 'Shipped' 
                            ? 'bg-blue-100 text-blue-800' 
                            : 'bg-emerald-100 text-emerald-800'
                      }`}
                    >
                      {o.status}
                    </button>
                  </div>
                  <div>
                    <p className="text-neutral-500 font-sans">Client: <span className="font-semibold text-[#1A1A1A]">{o.customer}</span></p>
                    <p className="text-neutral-400 font-sans mt-0.5 text-[10px]">Items: {o.items}</p>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-brand-blue/5 text-[10px] text-neutral-400">
                    <span>Placed {o.date}</span>
                    <span className="font-serif text-xs font-semibold text-brand-blue">${o.total}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SEO Control Board */}
          <div className="bg-white border border-brand-blue/10 p-6 rounded shadow-sm space-y-6">
            <div className="flex items-center gap-2">
              <FileSearch className="w-5 h-5 text-brand-green" />
              <div>
                <h3 className="font-serif text-lg text-brand-blue font-medium">SEO & Brand Metadata</h3>
                <p className="text-[10px] text-neutral-500 font-sans mt-0.5">Edit Google Search Preview settings in real-time.</p>
              </div>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block text-[9px] uppercase tracking-widest text-neutral-400 font-mono font-bold mb-1">Search Engine Title</label>
                <input
                  type="text"
                  value={seoTitle}
                  onChange={(e) => setSeoTitle(e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-[#F5F2ED] border border-brand-blue/10 rounded focus:outline-none focus:border-brand-green text-neutral-800"
                />
              </div>

              <div>
                <label className="block text-[9px] uppercase tracking-widest text-neutral-400 font-mono font-bold mb-1">Search Engine Description</label>
                <textarea
                  rows={2}
                  value={seoDesc}
                  onChange={(e) => setSeoDesc(e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-[#F5F2ED] border border-brand-blue/10 rounded focus:outline-none focus:border-brand-green text-neutral-800"
                />
              </div>

              {/* Live Preview mock */}
              <div className="p-3 bg-neutral-50 border border-neutral-200 rounded font-sans">
                <span className="text-[9px] text-neutral-400 font-mono">GOOGLE SEARCH PREVIEW</span>
                <p className="text-blue-700 font-medium text-sm hover:underline cursor-pointer mt-1">{seoTitle}</p>
                <p className="text-emerald-700 text-[10px] mt-0.5">https://www.anantamaa.luxury</p>
                <p className="text-neutral-600 text-[11px] mt-1 leading-relaxed">{seoDesc}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
