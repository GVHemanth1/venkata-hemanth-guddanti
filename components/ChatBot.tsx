import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Loader2, Bot, Sparkles } from 'lucide-react';
import { GoogleGenerativeAI, Content } from "@google/generative-ai";

// Portfolio Context Data for System Instruction
const PORTFOLIO_CONTEXT = `
You are an AI Assistant for Venkata Hemanth Guddanti's portfolio website. Your role is to professionally and politely answer questions about Hemanth's background, skills, and experience based STRICTLY on the information below.

**Profile Summary:**
Name: Venkata Hemanth Guddanti
Role: Integration Specialist / Software Engineer
Email: guddantivenkatahemanth@gmail.com
Phone: +91-8500508085
Location: India

**Professional Experience:**
1. **Software Engineer at CGI Inc.** (Oct 2022 - Present)
   - Specializes in IBM App Connect Enterprise (ACE) production support and development.
   - Handles critical integration flows for Cigna Healthcare.
   - Technologies: IBM ACE, MQ, ESQL, SOAP, REST.

2. **Intern - Data Warehouse & Azure at Tiger Analytics** (Mar 2022 - Aug 2022)
   - Trained on data engineering concepts, data warehousing, and business analytical tools.

**Technical Skills:**
- **Middleware:** IBM Integration Bus (IIB) 10, IBM App Connect Enterprise (ACE), WebSphere MQ.
- **Protocols:** SOAP-HTTP, REST API, XML/XMLNSC, JSON, DFDL, BLOB.
- **Development:** ESQL, Java Procedures, Stored Procedures, Message Flows (Routing, Transformation, Exception Handling).
- **OS:** Windows, Linux, Z/OS.
- **Domain:** Deep understanding of the Healthcare domain (Claims, Enrollment, HRA/FSA).
- Good grasp of Azure fundamentals and data engineering concepts.
- Good understanding of software development lifecycle, version control (Git), and CI/CD pipelines.
- Good knowledge in Mainframe concepts, Legacy applications and technologies.

**Key Projects:**
- **Project:** Cigna Healthcare (Health Services & Insurance).
- **Description:** Managed customer benefit preferences (HRA/FSA), enrollment, claim processing, validation, adjudication, and settlement.
- **Responsibilities:** Design/Dev of message flows, Generic Exception Handler implementation, creating BAR files, coordinating with SIT/UAT teams.

**Education:**
- Bachelor of Technology from NBKR Institute of Science & Technology (Autonomous) with 8.02 CGPA.
- Certified in Microsoft Azure Fundamentals (AZ-900).

**Insights & Achievements:**
- Celebrated 3+ years in software integration, designing critical flows for Fortune 500 healthcare companies.
- Published insights on error handling strategies in distributed systems.
- Awarded with Gold Award for excellence from Vice President at CGI Inc.
- Led successful migration of healthcare claims processing affecting 500K+ transactions monthly.
- Recognized for excellence in middleware support and development at CGI Inc.
- Actively contributes to knowledge sharing and mentoring within the team.
- Passionate about continuous learning and staying updated with emerging technologies in the integration space.
- Thrives in collaborative environments and enjoys solving complex problems that drive business value.

**Contact Information:**
- Email: guddantivenkatahemanth@gmail.com
- Phone: +91-8500508085
- GitHub: https://github.com/GVHemanth1
- LinkedIn: https://www.linkedin.com/in/venkata-hemanth-guddanti-249bb812a/
- Medium: https://medium.com/@venkatahemanth

**Disclaimer:**
- If asked about anything not in this data, politely say you don't have that information and suggest contacting Hemanth directly via email, GitHub, Medium or LinkedIn.

**Work location:** 
- India (Remote work experience with US-based companies) with a preference for remote or hybrid roles.
- Worked for CGI Inc. supporting US-based clients, demonstrating effective remote collaboration across time zones from India.
- Open to global opportunities, but currently based in India and seeking roles that allow remote work or hybrid arrangements.
- Currently relocated to Malaysia for global exposure, but remains open to remote opportunities with US-based companies given past successful remote work experience.
- Mostly looking for roles in Malaysia and India, but open to remote roles with US, Malaysia, Singapore, Australia, Europe, and Asia, Middle East, and Africa-based companies due to proven remote work success.
- Proven ability to collaborate effectively with global teams across different time zones, making remote work with US-based companies a viable option while being based in India or Malaysia.

**Tone:**
- Professional, enthusiastic, and helpful.
- Keep answers concise but informative.
- If asked about something not in this data, politely say you don't have that information and suggest contacting Hemanth directly via email.


`;

interface Message {
  role: 'user' | 'model';
  text: string;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hi there! I'm Hemanth's AI assistant. Ask me anything about his projects, skills, or experience!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessageText = input;
    const currentMessages = [...messages, { role: 'user', text: userMessageText }];
    setMessages(currentMessages);
    setInput('');
    setIsLoading(true);

    try {
        const genAI = new GoogleGenerativeAI(apiKey);
        // Use system instruction, which is the cleanest method for context.
        const model = genAI.getGenerativeModel({
            model: "gemini-2.5-flash",
            systemInstruction: PORTFOLIO_CONTEXT,
        });

        // The API requires a alternating user/model history.
        // Our initial message is from the model, which breaks this.
        // We filter out the initial welcome message from the history sent to the API.
        const historyForApi = messages.slice(1).map(msg => ({
            role: msg.role,
            parts: [{ text: msg.text }]
        }));

        const chat = model.startChat({
            history: historyForApi
        });

        const result = await chat.sendMessageStream(userMessageText);

        let fullResponse = "";
        // Add a placeholder for the streaming response
        setMessages(prev => [...prev, { role: 'model', text: "" }]);

        for await (const chunk of result.stream) {
            fullResponse += chunk.text();
            // Use functional update to edit the last message in the array
            setMessages(prev => {
                const newMessages = [...prev];
                newMessages[newMessages.length - 1].text = fullResponse;
                return newMessages;
            });
        }
    } catch (error) {
        console.error("Error generating response:", error);
        setMessages(prev => [...prev, { role: 'model', text: "Oops! I encountered an error. Please try again later." }]);
    } finally {
        setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Peeking Toggle Button */}
      <div className={`fixed right-0 bottom-6 z-50 flex items-center transition-all duration-300 ${isOpen ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'}`}>
        <div className="mr-4 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-l-md shadow-md text-sm font-medium animate-bounce hidden md:block">
            Ask me about Hemanth!
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-ibm-blue hover:bg-blue-600 text-white p-4 rounded-l-full shadow-lg transition-transform hover:scale-110 flex items-center gap-2 group border-y border-l border-white/20"
          aria-label="Open AI Chat"
        >
          <Bot className="w-6 h-6 animate-pulse" />
          <span className="pr-2 font-bold hidden group-hover:block transition-all">AI Assistant</span>
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 w-[90vw] md:w-96 h-[500px] max-h-[80vh] bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden animate-slide-in-right">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-ibm-blue to-blue-600 p-4 flex justify-between items-center text-white shrink-0">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-white/20 rounded-full">
                <Sparkles className="w-4 h-4 text-yellow-300" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Hemanth's Assistant</h3>
                <p className="text-xs text-blue-100 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                    Online
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${msg.role === 'user'
                      ? 'bg-ibm-blue text-white rounded-tr-none'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {msg.role === 'model' && msg.text === "" ? (
                      <span className="flex gap-1 items-center h-5">
                          <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                          <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-100"></span>
                          <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-200"></span>
                      </span>
                  ) : (
                    msg.text.split('\n').map((line, i) => <p key={i} className={i > 0 ? 'mt-2' : ''}>{line}</p>)
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-900 shrink-0">
            <div className="relative flex items-center">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about skills, projects..."
                className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-full py-3 pl-4 pr-12 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-ibm-blue dark:focus:ring-neon-cyan outline-none transition-all placeholder:text-slate-400"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="absolute right-1.5 p-2 bg-ibm-blue text-white rounded-full hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              </button>
            </div>
            <div className="text-center mt-2">
                <p className="text-[10px] text-slate-400 dark:text-slate-500">
                    Powered by Google Gemini
                </p>
            </div>
          </div>

        </div>
      )}
    </>
  );
};

export default ChatBot;
