import React from "react";
import { 
  Sparkles, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Zap 
} from "lucide-react";

// ---------- DATA ----------
const events = [
  {
    id: 1,
    title: "Codex Nova",
    tagline: "Speed & Logic",
    description: "Brain Blitz, Dice of Destiny & Logic Bingo — speed, logic & adaptability.",
    location: "Electrical Seminar Hall",
    time: "09:30 AM — 1.00 PM",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSeEp7M1zxr13amrbA00H2pJNyTf7DaNNK8skmcSU41-U5Kv1w/viewform?usp=publish-editor",
  },
  {
    id: 2,
    title: "ElectroNova",
    tagline: "Circuit Mastery",
    description: "Memory, circuit mastery & teamwork — three-round tech battle.",
    location: "Mechanical Seminar Hall",
    time: "09:30 AM — 1.00 PM",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLScSQHJpEpI0xky5JvASKW9u6-fWAQfHKIo8DwT30hamlpugwg/viewform?usp=publish-editor",
  },
  {
    id: 3,
    title: "Intellecta",
    tagline: "Strategy & Pitch",
    description: "From ideas to scalable solutions — creativity, strategy & execution.",
    location: "NPT Hall - 12",
    time: "09:00 AM — 4:00 PM ",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSdD8-iGqR2-JMRQFlc1GDuWg_9KJAKecvrijL-2YfJ8_-8GSw/viewform?usp=dialog",
  },
  {
    id: 4,
    title: "Gen Studio",
    tagline: "AI Generation",
    description: "Prompt to product — recreate, generate & build AI landing pages.",
    location: "A-Block, 413",
    time: "2:00 PM — 4:30 PM",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSdyPlXLx-E4DnA68CwbQQ5qkGR5gxrIWjW6EF459R-XjXAaoA/viewform",
  },
];

// ---------- COMPONENTS ----------

const Header = () => (
  <header className="sticky top-0 z-50 bg-[#0b0f15]/80 backdrop-blur-xl border-b border-white/5">
    <div className="max-w-7xl mx-auto px-6 h-16 sm:h-24 flex items-center justify-between">
      <div className="flex items-center gap-4 group cursor-pointer">
        <div className="relative">
          <div className="absolute -inset-1 bg-indigo-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-[#161b22] rounded-xl border border-white/10 flex items-center justify-center overflow-hidden">
            <img 
              src="Spectrum-main-1.jpg" 
              alt="Logo" 
              className="w-8 h-8 object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <Sparkles className="hidden w-6 h-6 text-indigo-400" />
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xl sm:text-2xl font-bold font-heading tracking-tighter text-white leading-none">
            SPECTRUM
          </span>
          <span className="text-[10px] font-bold tracking-[0.2em] text-indigo-500/80 uppercase mt-1">
            ECE Association
          </span>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-2 text-[10px] tracking-[0.3em] text-indigo-400 font-black uppercase bg-indigo-500/5 px-4 py-2 rounded-full border border-indigo-500/10">
        Digital Pulse Summit
      </div>
    </div>
  </header>
);

const EventCard = ({ event }) => {
  const handleRegister = () => window.open(event.formLink, '_blank', 'noopener,noreferrer');

  return (
    <div className="group bg-white/[0.02] border border-white/10 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-indigo-500/40 hover:bg-white/[0.04] flex flex-col h-full shadow-2xl">
      <div className="relative h-44 sm:h-52 overflow-hidden">
        <img
          src={event.img}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f15] via-transparent to-transparent opacity-90" />
        <div className="absolute bottom-4 left-6">
           <span className="px-3 py-1 bg-indigo-600/20 backdrop-blur-md border border-indigo-400/30 rounded-full text-[10px] font-bold uppercase tracking-widest text-indigo-300">
             {event.tagline}
           </span>
        </div>
      </div>

      <div className="p-6 sm:p-8 flex flex-col flex-grow">
        <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-3 group-hover:text-indigo-400 transition-colors">
          {event.title}
        </h3>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 font-sans">
          {event.description}
        </p>

        <div className="space-y-3 mb-8">
          <div className="flex items-center gap-4 text-slate-300 group/item">
            <div className="p-2 bg-white/5 rounded-lg border border-white/5 group-hover/item:border-indigo-500/30 transition-colors">
              <MapPin className="w-4 h-4 text-indigo-400" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider font-sans">{event.location}</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300 group/item">
            <div className="p-2 bg-white/5 rounded-lg border border-white/5 group-hover/item:border-indigo-500/30 transition-colors">
              <Clock className="w-4 h-4 text-indigo-400" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider font-sans">{event.time}</span>
          </div>
        </div>

        <button
          onClick={handleRegister}
          className="mt-auto group/btn w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold font-heading text-sm transition-all active:scale-[0.98] flex items-center justify-center gap-3 shadow-lg shadow-indigo-600/20"
        >
          Register Now
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#06080c] text-slate-200 antialiased font-sans selection:bg-indigo-500/30 relative overflow-x-hidden">
      
      {/* Background Decor */}
      <div className="fixed top-[-10%] left-[-10%] w-[60%] h-[60%] bg-indigo-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[140px] rounded-full pointer-events-none" />

      <Header />

      <main className="max-w-7xl mx-auto px-6 py-12 lg:py-24 relative z-10">
        
        <div className="mb-16 lg:mb-28 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
            <Zap className="w-3 h-3 fill-current" /> Live Registration
          </div>
          
          <h1 className="text-6xl sm:text-8xl lg:text-9xl font-bold font-heading text-white tracking-tighter leading-[0.8] mb-8 italic">
            SPECTRA<span className="text-indigo-500">26</span>
          </h1>
          
          <p className="max-w-2xl text-slate-400 text-base sm:text-xl font-medium leading-relaxed font-sans">
            Push the boundaries of innovation. Join us for a high-intensity technical showcase from the ECE Association.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </main>

      <footer className="py-12 border-t border-white/5 bg-black/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="font-heading font-black text-white/20 tracking-widest uppercase text-xs">
            SPECTRUM ASSOCIATION © 2026
          </span>
        </div>
      </footer>
    </div>
  );
}