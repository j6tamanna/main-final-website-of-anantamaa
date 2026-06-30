import React, { useState } from 'react';
import { Truck, Calendar, MapPin, Award, ArrowRight, Check, Compass } from 'lucide-react';

interface TrackingOrder {
  id: string;
  item: string;
  status: 'Processing' | 'Shipped' | 'Out for Delivery' | 'Delivered';
  step: number; // 1 to 4
  carrier: string;
  trackingId: string;
  deliveryDate: string;
}

export default function ClientPortal() {
  const [orders, setOrders] = useState<TrackingOrder[]>([
    {
      id: 'ANANTA-389421',
      item: 'Noor Corset Kurti',
      status: 'Processing',
      step: 1,
      carrier: 'Delhivery Luxury Express',
      trackingId: 'DLV-92301934-IN',
      deliveryDate: 'Tuesday, July 7, 2026'
    }
  ]);

  const [addresses, setAddresses] = useState([
    { id: '1', name: 'Tamanna Jain', type: 'Primary Residence', street: 'B-42, Amrita Shergil Marg', city: 'New Delhi', zip: '110003' }
  ]);

  // Address Form state
  const [newStreet, setNewStreet] = useState('');
  const [newCity, setNewCity] = useState('');
  const [newZip, setNewZip] = useState('');
  const [showAddressForm, setShowAddressForm] = useState(false);

  // VIP Booking state
  const [selectedDate, setSelectedDate] = useState('2026-07-02');
  const [selectedTime, setSelectedTime] = useState('11:00 AM');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleAddAddress = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStreet || !newCity || !newZip) return;

    setAddresses([
      ...addresses,
      {
        id: Math.random().toString(),
        name: 'Tamanna Jain',
        type: 'Holiday Home',
        street: newStreet,
        city: newCity,
        zip: newZip
      }
    ]);
    setNewStreet('');
    setNewCity('');
    setNewZip('');
    setShowAddressForm(false);
  };

  return (
    <div className="space-y-12 max-w-7xl mx-auto p-4 md:p-8">
      {/* Header Profile Title */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-brand-blue/10">
        <div>
          <span className="text-[10px] uppercase tracking-widest text-brand-green font-mono font-bold">SOMA CIRCLE PLATINUM MEMBERSHIP</span>
          <h2 className="text-3xl font-serif text-brand-blue tracking-tight mt-1">Namaste, Tamanna</h2>
        </div>
        <div className="flex items-center gap-3 bg-white p-3 border border-brand-blue/10 rounded">
          <Award className="w-5 h-5 text-brand-green" />
          <div className="text-xs">
            <span className="font-mono text-[9px] text-neutral-400 block font-bold">SAVED LOYALTY BALANCE</span>
            <span className="font-serif text-base font-semibold text-brand-blue">480 Amrita Points</span>
          </div>
        </div>
      </div>

      {/* Grid: Order Tracker & Concierge Bookings */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Active Order Tracking Feed */}
        <div className="lg:col-span-7 bg-white border border-brand-blue/10 p-6 rounded shadow-sm space-y-8">
          <div>
            <h3 className="font-serif text-xl text-brand-blue font-medium flex items-center gap-2">
              <Truck className="w-5 h-5 text-brand-green" /> Bespoke Order Tracker
            </h3>
            <p className="text-xs text-neutral-500 font-sans mt-1">Review live tailoring and shipping progress of your signature garments.</p>
          </div>

          <div className="space-y-8">
            {orders.map((o) => (
              <div key={o.id} className="space-y-6">
                <div className="flex flex-col sm:flex-row justify-between gap-2 bg-[#F5F2ED]/50 p-4 border border-brand-blue/5 rounded text-xs">
                  <div>
                    <p className="font-mono text-neutral-400 text-[10px]">ORDER ID</p>
                    <p className="font-semibold text-brand-blue">{o.id}</p>
                    <p className="text-[10px] text-neutral-500 font-sans mt-1">{o.item}</p>
                  </div>
                  <div>
                    <p className="font-mono text-neutral-400 text-[10px]">CARRIER SERVICES</p>
                    <p className="text-[#1A1A1A] font-sans">{o.carrier}</p>
                    <p className="font-mono text-[10px] text-brand-green mt-0.5">{o.trackingId}</p>
                  </div>
                  <div>
                    <p className="font-mono text-neutral-400 text-[10px]">ESTIMATED ARRIVAL</p>
                    <p className="font-semibold text-brand-blue">{o.deliveryDate}</p>
                  </div>
                </div>

                {/* Tracking Progress bar */}
                <div className="relative">
                  {/* Line */}
                  <div className="absolute top-4 left-4 right-4 h-[1px] bg-neutral-200 -z-10" />
                  <div 
                    className="absolute top-4 left-4 h-[1px] bg-brand-green -z-10 transition-all duration-500" 
                    style={{ width: `${(o.step - 1) * 33}%` }} 
                  />

                  {/* Steps */}
                  <div className="flex justify-between">
                    {[
                      { s: 1, label: 'Atelier Tailoring' },
                      { s: 2, label: 'Quality Verification' },
                      { s: 3, label: 'In Transit' },
                      { s: 4, label: 'Delivered' }
                    ].map((stepObj) => (
                      <div key={stepObj.s} className="flex flex-col items-center text-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all text-xs font-mono font-bold ${
                          o.step >= stepObj.s 
                            ? 'bg-brand-blue border-brand-blue text-white' 
                            : 'bg-white border-neutral-200 text-neutral-400'
                        }`}>
                          {o.step > stepObj.s ? <Check className="w-3 h-3" /> : stepObj.s}
                        </div>
                        <span className="text-[10px] font-medium font-sans text-neutral-600 mt-2 max-w-[80px]">
                          {stepObj.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Points Ledger history */}
          <div className="pt-8 border-t border-brand-blue/10 space-y-4">
            <h4 className="font-serif text-sm text-brand-blue uppercase tracking-wider">Points Ledger Activity</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-center py-2 border-b border-brand-blue/5">
                <div>
                  <p className="font-medium text-neutral-800">Noor Corset Kurti Purchase</p>
                  <p className="text-[10px] text-neutral-400 font-sans">Order #ANANTA-389421 • Tailoring Stage</p>
                </div>
                <span className="text-brand-green font-semibold font-mono">+340 points</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-brand-blue/5">
                <div>
                  <p className="font-medium text-neutral-800">Loyalty Club Welcome Token</p>
                  <p className="text-[10px] text-neutral-400 font-sans">System Registration Benefit</p>
                </div>
                <span className="text-brand-green font-semibold font-mono">+140 points</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: VIP Bookings & Saved Addresses */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Virtual Concierge Booking Panel */}
          <div className="bg-white border border-brand-blue/10 p-6 rounded shadow-sm space-y-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-brand-green" />
              <div>
                <h3 className="font-serif text-lg text-brand-blue font-medium">VIP Digital Consultations</h3>
                <p className="text-[10px] text-neutral-500 font-sans mt-0.5">Schedule a video pairing or custom measurement call with a stylist.</p>
              </div>
            </div>

            {bookingConfirmed ? (
              <div className="p-4 bg-brand-green/10 border border-brand-green/20 rounded text-xs text-center space-y-3">
                <p className="font-semibold text-brand-blue">Consulation Confirmed!</p>
                <p className="text-neutral-600">Your live video measurement session is scheduled for <strong className="text-brand-blue">{selectedDate}</strong> at <strong className="text-brand-blue">{selectedTime}</strong>.</p>
                <p className="text-[10px] text-neutral-400 font-mono">A private Google Meet link has been sent to jainaadiitamanna@gmail.com.</p>
                <button 
                  onClick={() => setBookingConfirmed(false)}
                  className="px-4 py-1.5 bg-brand-blue hover:bg-brand-green text-white text-[10px] uppercase tracking-wider rounded transition-colors"
                >
                  Reschedule
                </button>
              </div>
            ) : (
              <div className="space-y-4 text-xs">
                <div>
                  <label className="block text-[9px] uppercase tracking-widest text-neutral-400 font-mono font-bold mb-1">Select Date</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-2.5 py-1.5 bg-[#F5F2ED] border border-brand-blue/10 rounded focus:outline-none focus:border-brand-green text-[#1A1A1A]"
                  />
                </div>

                <div>
                  <label className="block text-[9px] uppercase tracking-widest text-neutral-400 font-mono font-bold mb-1">Select Time Slot</label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full px-2.5 py-1.5 bg-[#F5F2ED] border border-brand-blue/10 rounded focus:outline-none focus:border-brand-green text-[#1A1A1A]"
                  >
                    <option value="10:00 AM">10:00 AM — Morning Quiet Showcase</option>
                    <option value="11:30 AM">11:30 AM — Midday Measurement pairing</option>
                    <option value="3:00 PM">3:00 PM — Editorial Review</option>
                    <option value="5:30 PM">5:30 PM — Evening Soiree Showcase</option>
                  </select>
                </div>

                <button
                  onClick={() => setBookingConfirmed(true)}
                  className="w-full py-2 bg-brand-blue hover:bg-brand-green text-white text-[10px] uppercase tracking-widest transition-all font-semibold rounded"
                >
                  Reserve Atelier Stylist
                </button>
              </div>
            )}
          </div>

          {/* Saved Addresses Panel */}
          <div className="bg-white border border-brand-blue/10 p-6 rounded shadow-sm space-y-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-green" />
                <h3 className="font-serif text-lg text-brand-blue font-medium">Saved Addresses</h3>
              </div>
              <button 
                onClick={() => setShowAddressForm(!showAddressForm)}
                className="text-[10px] uppercase tracking-widest text-brand-blue font-semibold underline hover:text-brand-green transition-colors"
              >
                {showAddressForm ? 'Cancel' : 'Add New'}
              </button>
            </div>

            {showAddressForm ? (
              <form onSubmit={handleAddAddress} className="space-y-3 text-xs">
                <div>
                  <label className="block text-[9px] uppercase tracking-widest text-neutral-400 mb-1">Street Address</label>
                  <input
                    type="text"
                    required
                    value={newStreet}
                    onChange={(e) => setNewStreet(e.target.value)}
                    placeholder="e.g. 10 Marina Blvd"
                    className="w-full px-2 py-1.5 bg-[#F5F2ED] border border-brand-blue/10 rounded focus:outline-none text-[#1A1A1A]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[9px] uppercase tracking-widest text-neutral-400 mb-1">City</label>
                    <input
                      type="text"
                      required
                      value={newCity}
                      onChange={(e) => setNewCity(e.target.value)}
                      placeholder="e.g. Mumbai"
                      className="w-full px-2 py-1.5 bg-[#F5F2ED] border border-brand-blue/10 rounded focus:outline-none text-[#1A1A1A]"
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] uppercase tracking-widest text-neutral-400 mb-1">ZIP Code</label>
                    <input
                      type="text"
                      required
                      value={newZip}
                      onChange={(e) => setNewZip(e.target.value)}
                      placeholder="e.g. 400001"
                      className="w-full px-2 py-1.5 bg-[#F5F2ED] border border-brand-blue/10 rounded focus:outline-none text-[#1A1A1A]"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-1.5 bg-brand-blue hover:bg-brand-green text-white text-[10px] uppercase tracking-widest rounded transition-colors"
                >
                  Save Address
                </button>
              </form>
            ) : (
              <div className="space-y-4">
                {addresses.map((a) => (
                  <div key={a.id} className="p-3 border border-brand-blue/10 bg-brand-blue/[0.01] rounded text-xs relative">
                    <span className="absolute top-2.5 right-2.5 px-1.5 py-0.5 bg-brand-green/10 text-brand-green text-[8px] font-bold uppercase tracking-widest rounded">
                      {a.type}
                    </span>
                    <p className="font-semibold text-brand-blue">{a.name}</p>
                    <p className="text-neutral-500 mt-1">{a.street}</p>
                    <p className="text-neutral-400 text-[10px] mt-0.5">{a.city}, {a.zip}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
