import { useState, useRef } from 'react';
import {
  Calculator,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  ShieldCheck,
  TrendingDown,
  Globe,
  Clock,
  Zap,
  ArrowRight,
  DollarSign,
  Percent,
  AlertTriangle,
  Activity,
  Car,
  Navigation,
  Send,
  X
} from 'lucide-react';

const App = () => {
  // State for calculator
  const [monthlyVolume, setMonthlyVolume] = useState(20000);
  const [currentFee, setCurrentFee] = useState(30);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('traffic'); // 'traffic' | 'incidents'
  const [selectedEntity, setSelectedEntity] = useState<string | null>(null); // null | 'driver' | 'traffic'
  const [messageSent, setMessageSent] = useState(false);

  // Ref for scrolling
  const networkSectionRef = useRef<HTMLElement>(null);

  // Calculated values
  const newFee = currentFee / 2;
  const serviceFeePercent = 5;
  const netSavingsPercent = (currentFee - newFee) - serviceFeePercent;
  const monthlySavings = monthlyVolume * (netSavingsPercent / 100);
  const annualSavings = monthlySavings * 12;

  // Scroll handler
  const scrollToNetwork = () => {
    networkSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Handle message send simulation
  const handleSendMessage = () => {
    setMessageSent(true);
    setTimeout(() => setMessageSent(false), 3000);
  };

  // FAQ Data
  const faqs = [
    {
      question: "How long have you been in this business?",
      answer: "Food Business Group has been operating for nearly 13 years, serving over 2,000 restaurants across the US, Canada, Dubai, and beyond. We’ve been featured in Forbes and received the 2023 Fast-Growing Business Award presented by the Mayor of Las Vegas."
    },
    {
      question: "What happens if a driver never shows up?",
      answer: "We use direct API integrations with the existing networks of DoorDash, Uber Eats, and Grubhub. While we maintain industry-leading reliability, if a driver issue occurs, our system monitors it in real-time. In the rare event of a failure, we offer a 100% refund of the food cost to protect your margins."
    },
    {
      question: "Do I have to stop using my current platforms?",
      answer: "Absolutely not. That’s the core of our model. You keep your current tablets, POS, and driver networks. Customers order the same way they do now. The only difference is the significantly lower commission fee you pay at the end of the month."
    },
    {
      question: "How quickly will I see results?",
      answer: "Most partners begin seeing the impact on their bottom line within the first week of activation. Since our commission only comes from the money we save you, the service is effectively risk-free."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <TrendingDown className="text-white w-6 h-6" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-800">Food Business Group</span>
          </div>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors hidden md:block shadow-md hover:shadow-lg transform active:scale-95 duration-200">
            Get Your Audit
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-12 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute top-1/2 -left-24 w-72 h-72 bg-indigo-50 rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-blue-100 shadow-sm">
              <Zap size={16} fill="currentColor" />
              <span className="tracking-wide uppercase text-xs">13 Years of Proven Savings</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-slate-900">
              Lower Your Delivery Commissions by <span className="text-blue-600 bg-blue-50 px-2 rounded-lg italic inline-block transform -skew-x-6">50%</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
              Keep your tablets. Keep your drivers. Keep your workflow.
              We plug the "commission leak" in your business without changing a single thing on your end.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-2 transform hover:-translate-y-1">
                Request Free Savings Audit <ArrowRight size={20} />
              </button>
              <button
                onClick={scrollToNetwork}
                className="px-8 py-4 rounded-xl font-bold text-lg text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all border border-slate-200 hover:border-blue-100 flex items-center justify-center gap-2"
              >
                <Activity size={20} /> View Live Network
              </button>
            </div>
          </div>

          {/* Calculator Card */}
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-2xl opacity-20 blur-lg"></div>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl border border-slate-100 relative">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold flex items-center gap-2 text-slate-800">
                  <Calculator className="text-blue-600" />
                  Profit Calculator
                </h3>
                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full uppercase tracking-wider">Live Estimate</span>
              </div>

              <div className="space-y-6">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-bold text-slate-700">Monthly Delivery Volume</label>
                    <div className="relative">
                      <DollarSign size={14} className="absolute left-2 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="number"
                        value={monthlyVolume}
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          if (val >= 0) setMonthlyVolume(val);
                        }}
                        className="w-28 pl-6 pr-2 py-1 text-right text-sm font-bold text-slate-900 bg-white border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <input
                    type="range"
                    min="5000"
                    max="200000"
                    step="1000"
                    value={monthlyVolume}
                    onChange={(e) => setMonthlyVolume(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-xs text-slate-400 mt-1 font-medium">
                    <span>$5k</span>
                    <span>$200k+</span>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-bold text-slate-700">Current Commission Fee</label>
                    <div className="relative">
                      <input
                        type="number"
                        value={currentFee}
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          if (val >= 0 && val <= 100) setCurrentFee(val);
                        }}
                        className="w-20 pl-2 pr-6 py-1 text-right text-sm font-bold text-slate-900 bg-white border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <Percent size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400" />
                    </div>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="45"
                    step="1"
                    value={currentFee}
                    onChange={(e) => setCurrentFee(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-xs text-slate-400 mt-1 font-medium">
                    <span>15%</span>
                    <span>45%</span>
                  </div>
                </div>

                <div className="pt-4 grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-center">
                    <p className="text-xs text-blue-600 font-bold uppercase tracking-wider mb-1">Monthly Savings</p>
                    <p className="text-2xl md:text-3xl font-black text-blue-700">${Math.round(monthlySavings).toLocaleString()}</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl border border-green-100 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-green-200 w-8 h-8 rounded-bl-2xl"></div>
                    <p className="text-xs text-green-600 font-bold uppercase tracking-wider mb-1">Yearly Boost</p>
                    <p className="text-2xl md:text-3xl font-black text-green-700">${Math.round(annualSavings).toLocaleString()}</p>
                  </div>
                </div>

                <p className="text-xs text-slate-400 text-center italic">
                  *Based on typical 50% commission reduction minus 5% service fee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Local Intelligence Dashboard (Spokane) */}
      <section ref={networkSectionRef} className="bg-slate-900 text-white py-16 overflow-hidden relative transition-colors duration-500">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-slate-700 pb-4">
            <div>
              <div className="flex items-center gap-2 text-green-400 mb-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-xs font-mono font-bold tracking-widest uppercase">System Online • Live Feed</span>
              </div>
              <h2 className="text-3xl font-bold">Local Network Intelligence</h2>
              <p className="text-slate-400 mt-1">Real-time driver & logistics data for <span className="text-white font-semibold">Spokane, WA Metro Area</span></p>
            </div>

            <div className="flex gap-2 mt-4 md:mt-0">
               <button
                onClick={() => { setActiveTab('traffic'); setSelectedEntity(null); }}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${activeTab === 'traffic' ? 'bg-blue-600 text-white shadow-lg shadow-blue-900' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
               >
                 <Car size={16} /> Traffic Heatmap
               </button>
               <button
                onClick={() => { setActiveTab('incidents'); setSelectedEntity(null); }}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${activeTab === 'incidents' ? 'bg-amber-600 text-white shadow-lg shadow-amber-900' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
               >
                 <AlertTriangle size={16} /> Incident Reports
               </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left Column: Stats & Lists */}
            <div className="space-y-4">
              {/* Conditional List Content */}
              {activeTab === 'traffic' ? (
                <>
                  <div className="bg-slate-800/50 backdrop-blur border border-slate-700 p-5 rounded-xl animate-fadeIn">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Active Drivers (Spokane)</p>
                        <p className="text-3xl font-mono font-bold mt-1">142</p>
                      </div>
                      <Car className="text-blue-500" />
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 w-[75%]"></div>
                    </div>
                    <p className="text-xs text-slate-400 mt-2">Network saturation at 75% capacity</p>
                  </div>

                  <div className="bg-slate-800/50 backdrop-blur border border-slate-700 p-5 rounded-xl">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Avg. Delivery Time</p>
                        <p className="text-3xl font-mono font-bold mt-1 text-green-400">28m <span className="text-base text-slate-500 font-normal">12s</span></p>
                      </div>
                      <Clock className="text-green-500" />
                    </div>
                    <div className="flex gap-2 text-xs font-medium">
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded">South Hill: 32m</span>
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded">Valley: 24m</span>
                    </div>
                  </div>
                </>
              ) : (
                <div className="bg-slate-800/50 backdrop-blur border border-slate-700 p-5 rounded-xl flex-grow h-full animate-fadeIn">
                   <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                     <AlertTriangle size={14} className="text-amber-500" /> Live Traffic Incidents
                   </p>
                   <div className="space-y-3">
                     <div className="cursor-pointer hover:bg-slate-700/50 transition-colors flex gap-3 items-start p-3 bg-slate-800 rounded-lg border-l-2 border-red-500" onClick={() => setSelectedEntity('traffic')}>
                       <AlertTriangle size={16} className="text-red-500 shrink-0 mt-0.5" />
                       <div>
                         <p className="text-sm font-bold text-slate-200">Accident on I-90 Eastbound</p>
                         <p className="text-xs text-slate-400">Near Altamont St exit. Expect +15m delays.</p>
                       </div>
                     </div>
                     <div className="flex gap-3 items-start p-3 bg-slate-800 rounded-lg border-l-2 border-amber-500">
                       <Navigation size={16} className="text-amber-500 shrink-0 mt-0.5" />
                       <div>
                         <p className="text-sm font-bold text-slate-200">Heavy Congestion: Division St</p>
                         <p className="text-xs text-slate-400">Northbound from Riverfront to Francis.</p>
                       </div>
                     </div>
                   </div>
                </div>
              )}
            </div>

            {/* Right Column: Visual Map Representation */}
            <div className="lg:col-span-2 bg-slate-800 border border-slate-700 rounded-xl p-6 relative min-h-[450px] flex items-center justify-center overflow-hidden">
               {/* Decorative Map Layer */}
               <div className="absolute inset-0 opacity-20 pointer-events-none">
                 <svg viewBox="0 0 400 300" className="w-full h-full text-blue-400 fill-current">
                    <path d="M0,150 Q100,100 200,150 T400,150" stroke="currentColor" strokeWidth="4" fill="none" />
                 </svg>
                 <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-500 transform -rotate-12 origin-left"></div>
                 <div className="absolute top-0 left-1/2 h-full w-1 bg-slate-500"></div>
               </div>

               {/* Map Content */}
               <div className="relative z-10 w-full h-full flex flex-col justify-between">
                 <div className="absolute top-4 right-4 bg-slate-900/90 border border-slate-600 px-3 py-1 rounded text-xs font-mono text-slate-300 pointer-events-none">
                   REGION: WA-99201<br/>
                   LAT: 47.6588 N<br/>
                   LONG: 117.4260 W
                 </div>

                 {/* Interactive Markers */}

                 {/* Traffic Incident Marker */}
                 <button
                    onClick={() => { setSelectedEntity('traffic'); setActiveTab('incidents'); }}
                    className={`absolute top-[30%] left-[45%] group transition-all duration-300 ${selectedEntity === 'traffic' ? 'scale-125 z-30' : 'scale-100 z-10'}`}
                 >
                    <div className="w-6 h-6 bg-red-500/20 rounded-full animate-ping absolute inset-0"></div>
                    <div className="w-6 h-6 bg-red-500 rounded-full shadow-lg shadow-red-500/50 flex items-center justify-center border-2 border-white">
                        <AlertTriangle size={12} className="text-white" />
                    </div>
                    {/* Tooltip */}
                    <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 pointer-events-none">
                      Accident (Click details)
                    </div>
                 </button>

                 {/* Driver Marker */}
                 <button
                    onClick={() => { setSelectedEntity('driver'); setActiveTab('traffic'); }}
                    className={`absolute top-[60%] left-[60%] group transition-all duration-300 ${selectedEntity === 'driver' ? 'scale-125 z-30' : 'scale-100 z-10'}`}
                 >
                    <div className="w-4 h-4 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50 border-2 border-white flex items-center justify-center">
                        <Car size={8} className="text-white" />
                    </div>
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 pointer-events-none">
                      Driver #492 (Click to Chat)
                    </div>
                 </button>

                 {/* Other Drivers (Non-interactive) */}
                 <div className="absolute top-[40%] left-[20%] opacity-50"><div className="w-3 h-3 bg-blue-500 rounded-full"></div></div>
                 <div className="absolute bottom-[20%] right-[30%] opacity-50"><div className="w-3 h-3 bg-blue-500 rounded-full"></div></div>

                 {/* Central Hub Animation */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <div className="w-32 h-32 border border-blue-500/30 rounded-full flex items-center justify-center animate-spin" style={{ animationDuration: '10s' }}>
                      <div className="w-24 h-24 border border-blue-400/50 rounded-full"></div>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_15px_white]"></div>
                 </div>

                 {/* DYNAMIC BOTTOM PANEL */}
                 <div className="mt-auto self-start w-full max-w-sm transition-all duration-500 ease-in-out">
                   {selectedEntity === 'driver' ? (
                     // DRIVER COMMS PANEL
                     <div className="bg-slate-900/90 backdrop-blur-md border border-blue-500/50 p-0 rounded-lg overflow-hidden shadow-2xl animate-fadeInUp">
                       <div className="bg-blue-600/20 p-3 border-b border-blue-500/30 flex justify-between items-center">
                         <div className="flex items-center gap-2">
                           <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                           <p className="text-xs font-bold text-blue-100">LIVE COMM LINK: DRIVER #492</p>
                         </div>
                         <button onClick={() => setSelectedEntity(null)}><X size={14} className="text-blue-300 hover:text-white"/></button>
                       </div>

                       <div className="p-4 space-y-3 h-40 overflow-y-auto text-xs">
                         <div className="flex gap-2 opacity-60">
                           <span className="font-mono text-slate-500">12:42</span>
                           <span className="text-slate-300"><span className="text-amber-400 font-bold">SYSTEM:</span> Traffic Alert I-90. Rerouting.</span>
                         </div>
                         <div className="flex gap-2">
                           <span className="font-mono text-slate-500">12:43</span>
                           <span className="text-slate-300"><span className="text-blue-400 font-bold">DRIVER:</span> Copy. Taking Sprague Ave.</span>
                         </div>
                         <div className="flex gap-2">
                            <span className="font-mono text-slate-500">12:44</span>
                            <span className="text-slate-300"><span className="text-green-400 font-bold">CUSTOMER:</span> Thanks for the update!</span>
                         </div>
                         {messageSent && (
                           <div className="flex gap-2 animate-fadeIn">
                              <span className="font-mono text-slate-500">12:45</span>
                              <span className="text-slate-300"><span className="text-purple-400 font-bold">DISPATCH:</span> Priority Update Sent.</span>
                           </div>
                         )}
                       </div>

                       <div className="p-3 bg-slate-800 border-t border-slate-700 flex gap-2">
                         <input disabled placeholder="Type to driver..." className="bg-slate-900 border border-slate-700 rounded px-2 py-1 text-xs w-full text-slate-400 cursor-not-allowed" />
                         <button
                            onClick={handleSendMessage}
                            className={`px-3 py-1 rounded text-xs font-bold flex items-center gap-1 transition-all ${messageSent ? 'bg-green-600 text-white' : 'bg-blue-600 hover:bg-blue-500 text-white'}`}
                         >
                           {messageSent ? <CheckCircle size={12}/> : <Send size={12}/>}
                           {messageSent ? 'Sent' : 'Send'}
                         </button>
                       </div>
                     </div>
                   ) : selectedEntity === 'traffic' ? (
                     // TRAFFIC INCIDENT PANEL
                     <div className="bg-slate-900/90 backdrop-blur-md border border-red-500/50 p-4 rounded-lg shadow-2xl animate-fadeInUp">
                        <div className="flex justify-between items-start mb-2">
                            <h4 className="text-red-400 font-bold text-sm flex items-center gap-2">
                                <AlertTriangle size={16} /> COLLISION DETECTED
                            </h4>
                            <button onClick={() => setSelectedEntity(null)}><X size={14} className="text-slate-400 hover:text-white"/></button>
                        </div>
                        <p className="text-xs text-slate-300 mb-3">
                            Vehicular accident reported on I-90 EB. Lane closure affecting delivery routes to Liberty Lake.
                        </p>
                        <div className="bg-slate-800 rounded p-2 text-xs font-mono text-green-400 border border-slate-700">
                            SYSTEM ACTION: Auto-rerouted 3 drivers. +4m delay added to ETA.
                        </div>
                     </div>
                   ) : (
                     // DEFAULT PANEL
                     <div className="bg-slate-900/80 backdrop-blur border border-slate-600 p-4 rounded-lg">
                       <p className="text-xs font-bold text-slate-300 mb-1">LOGISTICS INSIGHT</p>
                       <p className="text-sm text-white">
                         Due to heavy congestion on Division St, our API is currently rerouting 14% of drivers via Ash St to maintain &lt; 30min delivery times.
                       </p>
                       <p className="text-xs text-blue-400 mt-2 flex items-center gap-1 animate-pulse">
                         <Activity size={12} /> Click markers for live details
                       </p>
                     </div>
                   )}
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-slate-900 py-12 text-white overflow-hidden border-b-4 border-blue-600">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-slate-400 text-xs font-bold uppercase tracking-[0.3em] mb-10">Trusted by 2,000+ Restaurants Globally</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {['UberEats', 'DoorDash', 'GrubHub', 'Toast', 'ShipDay', 'EZCater'].map(brand => (
              <span key={brand} className="text-2xl font-black italic tracking-tighter cursor-default hover:text-white transition-colors">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900">Zero Friction. <span className="text-blue-600">Maximum Profit.</span></h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">We integrate directly with your existing POS and tablet systems so your workflow remains identical.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "100% Familiar Workflow",
              desc: "Customers track orders and drivers deliver exactly as they do now. No new training for your staff, no new tablets on the counter.",
              icon: <Clock className="text-white" size={24} />,
              color: "bg-blue-600"
            },
            {
              title: "Pure Performance Model",
              desc: "We only get paid if you save money. Our fee comes directly from your recaptured margins. If we don't save you money, you don't pay.",
              icon: <ShieldCheck className="text-white" size={24} />,
              color: "bg-indigo-600"
            },
            {
              title: "Global Enterprise Reach",
              desc: "Powering restaurants in the USA, Canada, Dubai, New Zealand, and Australia. We handle scale and complexity with ease.",
              icon: <Globe className="text-white" size={24} />,
              color: "bg-violet-600"
            }
          ].map((feature, i) => (
            <div key={i} className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className={`mb-6 ${feature.color} w-14 h-14 flex items-center justify-center rounded-2xl shadow-lg group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive FAQ Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-slate-900">Frequently Asked Questions</h2>
          <p className="text-center text-slate-500 mb-12">Everything you need to know about the integration.</p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl overflow-hidden border transition-all duration-300 ${openFaq === index ? 'border-blue-200 shadow-lg ring-4 ring-blue-50' : 'border-slate-200 shadow-sm'}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left font-bold text-slate-800 hover:bg-slate-50 transition-colors"
                >
                  <span className="text-lg">{faq.question}</span>
                  {openFaq === index ? <ChevronUp className="text-blue-600" size={20} /> : <ChevronDown className="text-slate-400" size={20} />}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-br from-blue-700 to-indigo-800 rounded-[2.5rem] p-12 md:p-16 text-white shadow-2xl shadow-blue-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 opacity-10 rounded-full blur-2xl transform -translate-x-1/3 translate-y-1/3"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Ready to verify your savings?</h2>
              <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium">
                Schedule a 10-minute discovery call. We'll analyze your last 30 days of delivery statements and provide a custom audit showing your net profit increase.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg flex items-center justify-center gap-2">
                  <CheckCircle size={20} /> Book Your Free Audit
                </button>
                <button className="border-2 border-blue-400/30 bg-blue-800/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-800/40 transition-colors">
                  View Success Stories
                </button>
              </div>
              <p className="mt-6 text-sm text-blue-300 font-medium">
                No credit card required • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t py-12">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
            <div className="bg-slate-800 p-1.5 rounded-lg">
              <TrendingDown className="text-white w-5 h-5" />
            </div>
            <span className="font-bold text-lg text-slate-800">Food Business Group</span>
          </div>
          <div className="flex gap-8 text-slate-500 text-sm font-medium">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Partner Support</a>
          </div>
          <p className="text-slate-400 text-sm">© 2024 Food Business Group. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
