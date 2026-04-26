import { Link } from "react-router";
import { motion } from "motion/react";
import { Layers, ArrowRight, Quote, AlignLeft, CheckCircle2, ChevronRight, Check } from "lucide-react";
import { useEffect, useState } from "react";
// We need images from unsplash. 
const img1 = "https://images.unsplash.com/photo-1763718528755-4bca23f82ac3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwZGFzaGJvYXJkJTIwY2xlYXIlMjBwbGFufGVufDF8fHx8MTc3NzE2MDMwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const img2 = "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NzcxNjAzMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export function LandingPage() {
  const [sliderPosition, setSliderPosition] = useState(0);

  // Auto slider effect for Front Displayed Section
  useEffect(() => {
    const interval = setInterval(() => {
      setSliderPosition((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#1C2833] text-[#F4F6F6] font-['Inter'] selection:bg-[#AAB7B8]/30">
      
      {/* 1. Top Banner */}
      <header className="border-b border-[#AAB7B8]/20 sticky top-0 bg-[#1C2833]/90 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-[#AAB7B8] p-1.5 rounded-[1px] text-[#1C2833]">
              <Layers size={20} strokeWidth={2.5} />
            </div>
            <span className="font-semibold text-lg tracking-tight">Systemize</span>
          </div>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <Link 
              to="/demo" 
              className="text-[#AAB7B8] hover:text-[#F4F6F6] transition-colors uppercase tracking-widest text-xs"
            >
              Project Demo
            </Link>
            <Link 
              to="/login" 
              className="bg-[#F4F6F6] text-[#1C2833] px-5 py-2 hover:bg-[#D5DBDB] transition-colors rounded-[1px] uppercase tracking-widest text-xs border border-transparent hover:border-[#F4F6F6]"
            >
              Login
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Container - Swiss Grid System */}
      <main className="max-w-7xl mx-auto px-6 border-l border-r border-[#AAB7B8]/20 min-h-screen divide-y divide-[#AAB7B8]/20">
        
        {/* Work in Progress metadata */}
        <div className="py-4 flex justify-between items-center text-[#AAB7B8] font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest">
          <span>// STATUS: Systemize Platform v1.0.4</span>
          <span className="border border-[#AAB7B8]/30 px-2 py-0.5 rounded-[1px]">Work in Progress</span>
        </div>

        {/* 2. Front Displayed Section (Horizontal Slider) */}
        <section className="py-20 flex flex-col items-center justify-center overflow-hidden">
          <div className="w-full relative h-[400px] flex items-center justify-center">
            
            <div className="flex transition-transform duration-700 ease-in-out w-[300%] h-full" style={{ transform: `translateX(-${sliderPosition * (100 / 3)}%)` }}>
              
              {/* Card 1 */}
              <div className="w-1/3 h-full px-4 flex items-center justify-center shrink-0">
                <div className="w-full max-w-2xl bg-[#2E4053] border border-[#AAB7B8]/30 p-12 flex flex-col items-center justify-center text-center shadow-2xl h-full rounded-[1px]">
                  <AlignLeft size={48} className="text-[#AAB7B8] mb-8" strokeWidth={1} />
                  <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#F4F6F6] leading-tight mb-4">
                    70% of projects fail over mismanagement.
                  </h1>
                  <p className="text-xl text-[#AAB7B8] font-light tracking-wide">
                    ...but yours doesn't have to.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="w-1/3 h-full px-4 flex items-center justify-center shrink-0">
                <div className="w-full max-w-2xl h-full border border-[#AAB7B8]/30 overflow-hidden rounded-[1px] group relative">
                  <div className="absolute inset-0 bg-[#1C2833]/40 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                  <img src={img1} alt="Project Dashboard" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute bottom-6 left-6 z-20 bg-[#1C2833]/90 backdrop-blur px-4 py-2 border border-[#AAB7B8]/30 font-['JetBrains_Mono'] text-xs text-[#AAB7B8]">
                    DATA_VISUALIZATION_MOD.01
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="w-1/3 h-full px-4 flex items-center justify-center shrink-0">
                <div className="w-full max-w-2xl h-full border border-[#AAB7B8]/30 overflow-hidden rounded-[1px] group relative">
                  <div className="absolute inset-0 bg-[#1C2833]/40 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                  <img src={img2} alt="Team Collaboration" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute bottom-6 left-6 z-20 bg-[#1C2833]/90 backdrop-blur px-4 py-2 border border-[#AAB7B8]/30 font-['JetBrains_Mono'] text-xs text-[#AAB7B8]">
                    TEAM_SYNERGY_MOD.02
                  </div>
                </div>
              </div>

            </div>

            {/* Slider Dots */}
            <div className="absolute bottom-0 flex gap-2">
              {[0, 1, 2].map(idx => (
                <button 
                  key={idx} 
                  onClick={() => setSliderPosition(idx)}
                  className={`w-12 h-1 rounded-[1px] transition-colors ${sliderPosition === idx ? 'bg-[#F4F6F6]' : 'bg-[#2E4053] hover:bg-[#AAB7B8]'}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 3. The Transformation */}
        <section className="py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-[#F4F6F6] uppercase">The Transformation</h2>
            <div className="w-12 h-px bg-[#AAB7B8] mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-0 border border-[#AAB7B8]/20 bg-[#2E4053]/10">
            {/* Before (Messy) */}
            <div className="p-12 border-b md:border-b-0 md:border-r border-[#AAB7B8]/20 flex flex-col items-center justify-center min-h-[400px]">
              <div className="text-[#AAB7B8] text-sm uppercase tracking-widest mb-8 font-semibold">Before</div>
              <div className="w-full max-w-sm transform -rotate-2 bg-[#F4F6F6] text-[#1C2833] p-6 shadow-xl relative font-['Inter']">
                <div className="absolute top-2 right-4 text-gray-400 opacity-50 text-4xl">"</div>
                <h4 className="font-bold underline decoration-wavy decoration-red-400 mb-4 text-xl">TODO!!!</h4>
                <ul className="space-y-3 font-medium text-gray-700">
                  <li className="flex items-start gap-2"><span>-</span> finish the backend stuff maybe?</li>
                  <li className="flex items-start gap-2"><span>-</span> call Sarah about design</li>
                  <li className="flex items-start gap-2 text-red-600 line-through"><span>-</span> URGENT: fix bug in prod</li>
                  <li className="flex items-start gap-2"><span>-</span> what was the deadline for Q3?</li>
                </ul>
              </div>
            </div>

            {/* After (Clean) */}
            <div className="p-12 flex flex-col items-center justify-center min-h-[400px] bg-[#1C2833]">
              <div className="text-[#F4F6F6] text-sm uppercase tracking-widest mb-8 font-semibold flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#AAB7B8]" /> After
              </div>
              <div className="w-full max-w-sm border border-[#AAB7B8]/30 bg-[#2E4053] rounded-[1px] overflow-hidden shadow-2xl font-['Inter']">
                <div className="grid grid-cols-[auto_1fr_auto] gap-4 px-4 py-2 border-b border-[#AAB7B8]/20 text-[10px] font-semibold text-[#AAB7B8] uppercase tracking-widest bg-[#1C2833]">
                  <div>Pri</div>
                  <div>Task</div>
                  <div>Due</div>
                </div>
                <div className="divide-y divide-[#AAB7B8]/10">
                  <div className="grid grid-cols-[auto_1fr_auto] gap-4 px-4 py-3 items-center hover:bg-[#1C2833]/50 transition-colors cursor-default">
                    <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_5px_rgba(239,68,68,0.5)]"></div>
                    <div className="text-sm font-medium text-[#F4F6F6]">Patch Production Bug</div>
                    <div className="text-[10px] font-['JetBrains_Mono'] text-[#AAB7B8]">Today</div>
                  </div>
                  <div className="grid grid-cols-[auto_1fr_auto] gap-4 px-4 py-3 items-center hover:bg-[#1C2833]/50 transition-colors cursor-default">
                    <div className="w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_5px_rgba(234,179,8,0.5)]"></div>
                    <div className="text-sm font-medium text-[#F4F6F6]">Backend API Refactor</div>
                    <div className="text-[10px] font-['JetBrains_Mono'] text-[#AAB7B8]">Sep 24</div>
                  </div>
                  <div className="grid grid-cols-[auto_1fr_auto] gap-4 px-4 py-3 items-center hover:bg-[#1C2833]/50 transition-colors cursor-default">
                    <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
                    <div className="text-sm font-medium text-[#F4F6F6]">Design Sync w/ Sarah</div>
                    <div className="text-[10px] font-['JetBrains_Mono'] text-[#AAB7B8]">Oct 01</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Minimalist Blockquotes */}
        <section className="py-24 px-8 flex flex-col md:flex-row gap-12 justify-center bg-[#2E4053]/5">
          <div className="flex-1 max-w-lg border-l-2 border-[#AAB7B8] pl-6 py-2">
            <Quote size={24} className="text-[#AAB7B8]/30 mb-4" />
            <p className="text-lg md:text-xl font-light tracking-wide text-[#D5DBDB] leading-relaxed mb-6">
              "We replaced three different tools with Systemize. The clarity it brings to our execution pipeline is unmatched."
            </p>
            <div className="text-xs font-semibold uppercase tracking-widest text-[#AAB7B8]">
              — Director of Operations, TechCorp
            </div>
          </div>

          <div className="flex-1 max-w-lg border-l-2 border-[#AAB7B8] pl-6 py-2">
            <Quote size={24} className="text-[#AAB7B8]/30 mb-4" />
            <p className="text-lg md:text-xl font-light tracking-wide text-[#D5DBDB] leading-relaxed mb-6">
              "Finally, a project management tool that doesn't feel like a toy. It's built for serious teams who need structure."
            </p>
            <div className="text-xs font-semibold uppercase tracking-widest text-[#AAB7B8]">
              — Lead Engineer, StartupInc
            </div>
          </div>
        </section>

        {/* 5. Pricing */}
        <section className="py-24 flex flex-col items-center">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-[#F4F6F6] uppercase">Simple Tier Pricing</h2>
            <div className="w-12 h-px bg-[#AAB7B8] mx-auto mt-4 mb-4"></div>
            <p className="text-[#AAB7B8] text-sm tracking-wide">No hidden fees. Predictable costs for serious teams.</p>
          </div>

          <div className="w-full max-w-5xl grid md:grid-cols-3 gap-0 border border-[#AAB7B8]/30 bg-[#2E4053]">
            
            {/* Free */}
            <div className="p-10 border-b md:border-b-0 md:border-r border-[#AAB7B8]/30 flex flex-col bg-[#1C2833] hover:bg-[#2E4053]/10 transition-colors">
              <h3 className="text-xl font-semibold mb-2">Free</h3>
              <div className="text-3xl font-light mb-8 flex items-end gap-1">
                $0 <span className="text-sm text-[#AAB7B8] font-normal mb-1">/ forever</span>
              </div>
              <ul className="space-y-4 mb-auto">
                <li className="flex items-center gap-3 text-sm text-[#D5DBDB]">
                  <Check size={16} className="text-[#AAB7B8]" /> Up to 3 projects
                </li>
                <li className="flex items-center gap-3 text-sm text-[#D5DBDB]">
                  <Check size={16} className="text-[#AAB7B8]" /> 5 tasks per project
                </li>
              </ul>
              <button className="w-full mt-10 py-3 border border-[#AAB7B8]/50 text-[#F4F6F6] text-sm font-semibold uppercase tracking-widest hover:bg-[#F4F6F6] hover:text-[#1C2833] transition-colors rounded-[1px]">
                Start Free
              </button>
            </div>

            {/* Standard */}
            <div className="p-10 border-b md:border-b-0 md:border-r border-[#AAB7B8]/30 flex flex-col bg-[#1C2833] hover:bg-[#2E4053]/10 transition-colors">
              <h3 className="text-xl font-semibold mb-2 text-[#AAB7B8]">Standard</h3>
              <div className="text-3xl font-light mb-8 flex items-end gap-1">
                $10 <span className="text-sm text-[#AAB7B8] font-normal mb-1">/ month</span>
              </div>
              <ul className="space-y-4 mb-auto">
                <li className="flex items-center gap-3 text-sm text-[#D5DBDB]">
                  <Check size={16} className="text-[#AAB7B8]" /> Up to 10 projects
                </li>
                <li className="flex items-center gap-3 text-sm text-[#D5DBDB]">
                  <Check size={16} className="text-[#AAB7B8]" /> 20 tasks per project
                </li>
                <li className="flex items-center gap-3 text-sm text-[#D5DBDB]">
                  <Check size={16} className="text-[#AAB7B8]" /> Core metrics
                </li>
              </ul>
              <button className="w-full mt-10 py-3 bg-[#AAB7B8] text-[#1C2833] text-sm font-semibold uppercase tracking-widest hover:bg-[#F4F6F6] transition-colors rounded-[1px]">
                Upgrade
              </button>
            </div>

            {/* Unlimited */}
            <div className="p-10 flex flex-col bg-[#1C2833] hover:bg-[#2E4053]/10 transition-colors">
              <h3 className="text-xl font-semibold mb-2 text-[#AAB7B8]">Unlimited</h3>
              <div className="text-3xl font-light mb-8 flex items-end gap-1">
                $50 <span className="text-sm text-[#AAB7B8] font-normal mb-1">/ month</span>
              </div>
              <ul className="space-y-4 mb-auto">
                <li className="flex items-center gap-3 text-sm text-[#D5DBDB]">
                  <Check size={16} className="text-[#AAB7B8]" /> 100 projects
                </li>
                <li className="flex items-center gap-3 text-sm text-[#D5DBDB]">
                  <Check size={16} className="text-[#AAB7B8]" /> 200 tasks per project
                </li>
                <li className="flex items-center gap-3 text-sm text-[#D5DBDB]">
                  <Check size={16} className="text-[#AAB7B8]" /> Custom metrics dashboard
                </li>
              </ul>
              <button className="w-full mt-10 py-3 border border-[#AAB7B8]/50 text-[#F4F6F6] text-sm font-semibold uppercase tracking-widest hover:bg-[#F4F6F6] hover:text-[#1C2833] transition-colors rounded-[1px]">
                Contact Sales
              </button>
            </div>

          </div>
        </section>

      </main>

      <footer className="border-t border-[#AAB7B8]/20 bg-[#1C2833] py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-xs text-[#AAB7B8] font-['JetBrains_Mono']">
          <div>&copy; 2026 Systemize Inc.</div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#F4F6F6] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#F4F6F6] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#F4F6F6] transition-colors">Status</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
