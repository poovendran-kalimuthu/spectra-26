import React, { useState, useRef } from "react";
import { 
  Sparkles, Trophy, Medal, Star, Zap, Users, 
  Search, Download, Share2, Award, ChevronRight 
} from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// ---------- DATA FROM DOCUMENT ----------
const resultsData = [
  {
    event: "Codex Nova",
    winners: [
      { rank: 1, team: "COMPILE KINGS", members: "Sarath Praba S, Vishwanathan G", dept: "II ACT" },
      { rank: 2, team: "WHO AM I", members: "Vikraanth N, Santhosh R", dept: "II CYS" },
      { rank: 3, team: "DOUBLE SLASH", members: "Navya S, Dharshana S", dept: "II AIML" },
    ],
    color: "from-emerald-500/20 to-teal-500/20",
    accent: "text-emerald-400"
  },
  {
    event: "Electro Nova",
    winners: [
      { rank: 1, team: "RED DRAGON", members: "Anandakrishnan R, Santhosh G, Harish Kumar G", dept: "II EEE" },
      { rank: 2, team: "COMET", members: "Mithlesh R, Vishal T, Prannith E Y", dept: "II ECE" },
      { rank: 3, team: "ERROR", members: "Venugeethan, Aravind Balaji L, Gladwin Mano", dept: "II ACT" },
    ],
    color: "from-orange-500/20 to-red-500/20",
    accent: "text-orange-400"
  },
  {
    event: "Intellecta",
    winners: [
      { rank: 1, team: "CODEZILLA", members: "Venkat Hari V S, Rahul Krishna R", dept: "II IT" },
      { rank: 2, team: "THE ONE", members: "Mohammed Yaseer N", dept: "II ECE" },
      { rank: 3, team: "DORJE", members: "Dharaneesh M, Ezhil Vendan S, Monish", dept: "II ECE" },
    ],
    color: "from-purple-500/20 to-pink-500/20",
    accent: "text-purple-400"
  },
  {
    event: "Gen Studio",
    winners: [
      { rank: 1, team: "BRO CODE", members: "Kamalesh Waran, Sudarsanam", dept: "II ACT" },
      { rank: 2, team: "DYNAMIC DUO", members: "Deepa, Harshika", dept: "II CSE" },
      { rank: 3, team: "404 ERROR", members: "Sudheesh V, Parthasarathy", dept: "II ACT" },
    ],
    color: "from-blue-500/20 to-indigo-500/20",
    accent: "text-indigo-400"
  }
];

// ---------- COMPONENTS ----------

const ResultCard = ({ result }) => (
  <div className={`group bg-gradient-to-br ${result.color} border border-white/10 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden backdrop-blur-md transition-all duration-500 hover:border-white/20 flex flex-col h-full shadow-2xl`}>
    <div className="p-6 sm:p-8">
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <div className="space-y-1">
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">{result.event}</h3>
            <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${result.color.replace('/20', '')}`} />
        </div>
        <Trophy className={`w-6 h-6 sm:w-8 sm:h-8 ${result.accent} opacity-80`} />
      </div>

      <div className="space-y-4 sm:space-y-6">
        {result.winners.map((winner) => (
          <div key={winner.rank} 
               className={`relative p-4 sm:p-5 rounded-2xl sm:rounded-3xl border transition-all duration-300 ${
                 winner.rank === 1 
                 ? "bg-white/10 border-yellow-500/30 shadow-[0_0_20px_rgba(234,179,8,0.1)]" 
                 : "bg-black/30 border-white/5 hover:bg-black/40"
               }`}>
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="mt-1 flex flex-col items-center">
                {winner.rank === 1 && <Medal className="w-6 h-6 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" />}
                {winner.rank === 2 && <Medal className="w-6 h-6 text-slate-300" />}
                {winner.rank === 3 && <Medal className="w-6 h-6 text-orange-400" />}
                <span className="text-[10px] font-black mt-1 text-white/40 uppercase tracking-tighter">Pos {winner.rank}</span>
              </div>
              
              <div className="flex-grow">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 mb-2">
                  <span className="text-base sm:text-lg font-bold font-heading text-white tracking-tight leading-tight">
                    {winner.team}
                  </span>
                  <span className="inline-block w-fit text-[9px] font-black text-indigo-300 bg-indigo-500/20 px-2 py-0.5 rounded-full border border-indigo-500/30 uppercase tracking-widest">
                    {winner.dept}
                  </span>
                </div>
                <div className="flex items-start gap-2 text-slate-400 group-hover:text-slate-300 transition-colors">
                  <Users className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                  <p className="text-xs font-medium leading-relaxed italic">{winner.members}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function Results() {
  const [searchTerm, setSearchTerm] = useState("");
  const printRef = useRef();

  // Functional PDF Export
  const downloadResults = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element, {
      backgroundColor: "#06080c",
      scale: 2,
    });
    const data = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const imgProps = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("Spectra26_Results.pdf");
  };

  const filteredResults = resultsData.map(result => ({
    ...result,
    winners: result.winners.filter(w => 
      w.team.toLowerCase().includes(searchTerm.toLowerCase()) ||
      w.members.toLowerCase().includes(searchTerm.toLowerCase()) ||
      w.dept.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(result => result.winners.length > 0);

  return (
    <div className="min-h-screen bg-[#06080c] text-slate-200 antialiased font-sans selection:bg-indigo-500/30 relative overflow-x-hidden">
      
      {/* Background Decor */}
      <div className="fixed top-[-10%] left-[-10%] w-[60%] h-[60%] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Optimized Header */}
      <header className="sticky top-0 z-50 bg-[#0b0f15]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="p-2 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
                <Sparkles className="w-5 h-5 text-indigo-400" />
             </div>
             <span className="text-lg sm:text-xl font-bold font-heading tracking-tighter text-white">SPECTRUM</span>
          </div>
          
    
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16 relative z-10" ref={printRef}>
        
        {/* Responsive Hero Section */}
        <div className="mb-10 sm:mb-20 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] mb-6 sm:mb-8 animate-pulse">
            <Award className="w-3 h-3" /> Hall of Fame
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-9xl font-bold font-heading text-white tracking-tighter leading-none mb-4 italic">
            SPECTRA<span className="text-indigo-500">'26</span>
          </h1>

          <p className="max-w-xl text-slate-400 text-xs sm:text-lg font-medium uppercase tracking-[0.1em] px-4">
           Inspire - Innovate - Interact
          </p>
          
          {/* Functional Search Bar */}
          <div className="mt-10 w-full max-w-md px-4 relative group">
            <Search className="absolute left-8 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
            <input 
              type="text"
              placeholder="Search team, department or name..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all placeholder:text-slate-600"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Results Grid - Responsive Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {filteredResults.length > 0 ? (
            filteredResults.map((result, idx) => (
              <ResultCard key={idx} result={result} />
            ))
          ) : (
            <div className="col-span-full py-20 text-center text-slate-500 font-heading italic tracking-wider">
              No participants found matching "{searchTerm}"
            </div>
          )}
        </div>

        {/* Closing Note */}
        <div className="mt-16 sm:mt-24 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 px-6 py-4 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-yellow-500/20 border border-yellow-500/50 flex items-center justify-center text-[10px]">🥇</div>
                <div className="w-6 h-6 rounded-full bg-slate-400/20 border border-slate-400/50 flex items-center justify-center text-[10px]">🥈</div>
                <div className="w-6 h-6 rounded-full bg-orange-500/20 border border-orange-500/50 flex items-center justify-center text-[10px]">🥉</div>
            </div>
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.1em] text-slate-300 uppercase">
              Congratulations to all Winners and Participants!
            </span>
          </div>
        </div>
      </main>

      <footer className="py-10 sm:py-16 border-t border-white/5 bg-black/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
          <span className="font-heading font-black text-white/20 tracking-[0.3em] uppercase text-[9px] sm:text-[11px] block">
            Department of ECE · Spectrum Association
          </span>
        </div>
      </footer>
    </div>
  );
}