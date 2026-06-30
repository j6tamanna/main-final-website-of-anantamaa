import { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, User, Bot, HelpCircle, X, Loader2 } from 'lucide-react';

interface Message {
  sender: 'user' | 'stylist';
  text: string;
}

interface AiStylistProps {
  onClose?: () => void;
  onSelectProduct?: (productId: string) => void;
}

export default function AiStylist({ onClose, onSelectProduct }: AiStylistProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'stylist',
      text: `Welcome to the **ANANTAमाँ Atelier & Heritage Concierge**. 

I am your Senior Styling Consultant. Together, we shall explore timeless silhouettes, drape guidelines, and curated edits tailored to your personal aesthetic. 

How can I assist you in weaving your next unforgettable statement today?`
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Suggested questions based on luxury collections
  const suggestions = [
    "How can I style the Veda Convertible Kurti for day and night?",
    "Recommend a structured outfit for a grand wedding reception",
    "What makes the Noor Corset Kurti construction so unique?",
    "Suggest a minimal look utilizing organic Belgian linen"
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim() || loading) return;

    const userMsg = textToSend.trim();
    setInput('');
    setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const response = await fetch('/api/stylist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMsg,
          history: messages.slice(-6).map(m => ({
            sender: m.sender,
            text: m.text
          }))
        })
      });

      const data = await response.json();
      if (data.error) {
        setMessages(prev => [...prev, {
          sender: 'stylist',
          text: `I apologize, but my connections with the style database are momentarily resting. Please allow me a moment. Error: ${data.error}`
        }]);
      } else {
        setMessages(prev => [...prev, { sender: 'stylist', text: data.response }]);
      }
    } catch (err: any) {
      setMessages(prev => [...prev, {
        sender: 'stylist',
        text: `The atelier is currently offline. Please configure your \`GEMINI_API_KEY\` in your secrets or check your network connection to enable live responses.`
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#FEFAF6] border border-brand-blue/10 rounded-lg shadow-xl overflow-hidden flex flex-col h-[600px] max-w-lg w-full mx-auto">
      {/* Header */}
      <div className="bg-brand-blue p-4 flex justify-between items-center text-white">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-brand-green/20 border border-brand-green/30 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-brand-green" />
          </div>
          <div>
            <h4 className="font-serif text-sm uppercase tracking-[0.15em]">Heritage Stylist</h4>
            <p className="text-[9px] text-[#FEFAF6]/60 tracking-wider">AI Concierge • Powered by Gemini</p>
          </div>
        </div>
        {onClose && (
          <button onClick={onClose} className="text-[#FEFAF6]/80 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Messages Feed */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F5F2ED]">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`flex gap-2.5 max-w-[85%] ${
              m.sender === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'
            }`}
          >
            <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-[10px] ${
              m.sender === 'user' 
                ? 'bg-brand-green text-white font-mono' 
                : 'bg-brand-blue text-white font-serif'
            }`}>
              {m.sender === 'user' ? <User className="w-3 h-3" /> : 'AM'}
            </div>
            
            <div className={`p-3 rounded-lg text-xs leading-relaxed font-sans ${
              m.sender === 'user'
                ? 'bg-brand-blue text-white rounded-tr-none'
                : 'bg-white text-neutral-800 border border-brand-blue/5 rounded-tl-none shadow-sm'
            }`}>
              {/* Basic Markdown Parser for bold text */}
              {m.text.split('\n\n').map((para, pIdx) => (
                <p key={pIdx} className="mb-2 last:mb-0">
                  {para.split('**').map((chunk, cIdx) => {
                    if (cIdx % 2 === 1) {
                      return <strong key={cIdx} className="font-semibold text-brand-green">{chunk}</strong>;
                    }
                    // Handle list style tags
                    if (chunk.trim().startsWith('-')) {
                      return <span key={cIdx} className="block pl-2 border-l border-brand-blue/20 italic mt-1">{chunk}</span>;
                    }
                    return chunk;
                  })}
                </p>
              ))}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex gap-2.5 mr-auto max-w-[85%] items-center">
            <div className="w-6 h-6 rounded-full bg-brand-blue text-white font-serif flex items-center justify-center text-[10px]">
              AM
            </div>
            <div className="p-3 bg-white border border-brand-blue/5 rounded-lg rounded-tl-none shadow-sm flex items-center gap-2 text-xs text-neutral-500 font-sans italic">
              <Loader2 className="w-3.5 h-3.5 animate-spin text-brand-green" />
              Weaving recommendations from our archives...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Questions */}
      <div className="px-4 py-2 bg-[#FEFAF6] border-t border-brand-blue/5 flex gap-2 overflow-x-auto no-scrollbar py-2">
        {suggestions.map((s, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(s)}
            className="shrink-0 px-3 py-1 bg-brand-blue/5 border border-brand-blue/10 hover:bg-brand-blue/10 hover:border-brand-blue/20 rounded-full text-[10px] text-brand-blue font-sans font-medium transition-all flex items-center gap-1"
          >
            <HelpCircle className="w-3 h-3 text-brand-green" />
            {s}
          </button>
        ))}
      </div>

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend(input);
        }}
        className="p-3 bg-white border-t border-brand-blue/10 flex gap-2"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about materials, styling drapes, care, or sizes..."
          className="flex-1 px-3 py-2 bg-[#F5F2ED] border border-brand-blue/10 rounded focus:outline-none focus:border-brand-green text-xs text-neutral-800"
        />
        <button
          type="submit"
          disabled={!input.trim() || loading}
          className="p-2 bg-brand-blue hover:bg-brand-green disabled:bg-neutral-200 text-white rounded transition-colors"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
