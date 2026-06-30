import { useState } from 'react';
import { prdSections } from '../data';
import { FileText, ChevronRight, Search, BookOpen } from 'lucide-react';

export default function PrdExplorer() {
  const [selectedChapterId, setSelectedChapterId] = useState(prdSections[0].id);
  const [searchTerm, setSearchTerm] = useState('');

  const selectedSection = prdSections.find(s => s.id === selectedChapterId) || prdSections[0];

  const filteredSections = prdSections.filter(s =>
    s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#FEFAF6] border border-brand-blue/10 rounded-lg overflow-hidden flex flex-col md:flex-row h-[750px] shadow-sm">
      {/* Left Sidebar: Chapters List */}
      <div className="w-full md:w-80 border-r border-brand-blue/10 bg-[#F9F5F6] flex flex-col h-1/2 md:h-full">
        <div className="p-4 border-b border-brand-blue/10">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-5 h-5 text-brand-blue" />
            <h3 className="font-serif text-lg text-brand-blue font-medium uppercase tracking-wide">PRD Chapters</h3>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search specifications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 bg-[#FEFAF6] border border-brand-blue/20 rounded text-xs focus:outline-none focus:border-brand-blue/50 text-[#1A1A1A]"
            />
            <Search className="w-3.5 h-3.5 text-brand-blue/40 absolute left-2.5 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {filteredSections.map((section) => (
            <button
              key={section.id}
              onClick={() => setSelectedChapterId(section.id)}
              className={`w-full text-left px-3 py-2.5 rounded transition-all text-xs flex items-center justify-between group ${
                selectedChapterId === section.id
                  ? 'bg-brand-blue text-white'
                  : 'hover:bg-brand-blue/5 text-neutral-700'
              }`}
            >
              <div className="truncate pr-2">
                <span className="font-mono opacity-50 mr-2 text-[10px]">
                  CH.{section.chapter.toString().padStart(2, '0')}
                </span>
                <span className="font-sans font-medium">{section.title}</span>
              </div>
              <ChevronRight className={`w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity ${
                selectedChapterId === section.id ? 'text-white' : 'text-brand-blue'
              }`} />
            </button>
          ))}
          {filteredSections.length === 0 && (
            <div className="text-center py-8 text-xs text-neutral-400 font-sans">
              No matching specifications found.
            </div>
          )}
        </div>
        
        <div className="p-3 bg-brand-blue/5 border-t border-brand-blue/10 text-center">
          <p className="text-[10px] uppercase tracking-wider text-brand-blue/60 font-mono font-bold">
            CONFIDENTIAL • ANANTAमाँ ENTERPRISE
          </p>
        </div>
      </div>

      {/* Right Pane: Chapter Content Viewer */}
      <div className="flex-1 overflow-y-auto p-6 md:p-10 flex flex-col justify-between bg-[#FEFAF6]">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="px-2.5 py-1 bg-[#8A9A5B]/10 text-brand-green text-[10px] font-mono rounded font-bold uppercase tracking-widest">
              Chapter {selectedSection.chapter.toString().padStart(2, '0')}
            </span>
            <span className="text-neutral-300">|</span>
            <span className="text-[10px] text-neutral-400 font-mono uppercase tracking-wider flex items-center gap-1">
              <FileText className="w-3.5 h-3.5" /> SPEC-DOC-V1.0
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-serif text-brand-blue tracking-tight mb-8">
            {selectedSection.title}
          </h2>

          <div className="prose prose-neutral max-w-none text-[#1A1A1A]">
            {selectedSection.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('- ')) {
                const bulletLines = paragraph.split('\n');
                return (
                  <ul key={idx} className="list-disc pl-5 my-4 space-y-2 text-sm leading-relaxed text-neutral-600 font-sans">
                    {bulletLines.map((line, bIdx) => (
                      <li key={bIdx} className="pl-1">
                        {line.replace('- ', '')}
                      </li>
                    ))}
                  </ul>
                );
              }
              
              if (paragraph.includes('**')) {
                // Render with bold support
                const parts = paragraph.split('**');
                return (
                  <p key={idx} className="text-sm leading-relaxed text-neutral-600 mb-6 font-sans">
                    {parts.map((part, pIdx) => pIdx % 2 === 1 ? <strong key={pIdx} className="font-semibold text-brand-blue">{part}</strong> : part)}
                  </p>
                );
              }

              return (
                <p key={idx} className="text-sm leading-relaxed text-neutral-600 mb-6 font-sans">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-brand-blue/5 flex flex-col sm:flex-row justify-between items-center text-[10px] text-neutral-400 font-mono gap-4">
          <div>ANANTAमाँ Digital System Architecture — Project Alpha</div>
          <div>Page {selectedSection.chapter} of 37</div>
        </div>
      </div>
    </div>
  );
}
