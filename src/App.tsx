import React, { useState, useEffect, useRef } from 'react';

// --- COMPONENTE DE ICONOS VECTORIALES REUTILIZABLES ---
const Icon = ({ name, className = "w-5 h-5", strokeWidth = 1.5 }) => {
  switch (name) {
    case 'Zap': return <svg className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>;
    case 'Cloud': return <svg className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>;
    case 'Key': return <svg className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24"><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4l-4 4Z"></path><path d="m21 2-9.6 9.6"></path><circle cx="7.5" cy="15.5" r="5.5"></circle></svg>;
    case 'MessageSquare': return <svg className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>;
    case 'Sparkles': return <svg className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>;
    case 'Brain': return <svg className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path></svg>;
    case 'Building2': return <svg className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>;
    case 'Shield': return <svg className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>;
    case 'Palette': return <svg className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path></svg>;
    case 'Search': return <svg className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>;
    case 'TrendingUp': return <svg className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>;
    case 'FileText': return <svg className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>;
    case 'Compass': return <svg className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>;
    case 'Send': return <svg className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>;
    case 'Folder': return <svg className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg>;
    case 'Paperclip': return <svg className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>;
    case 'Globe': return <svg className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>;
    case 'X': return <svg className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>;
    case 'Copy': return <svg className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>;
    case 'Plus': return <svg className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>;
    case 'Image': return <svg className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>;
    case 'Settings': return <svg className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>;
    default: return <svg className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle></svg>;
  }
};

// --- ISOTIPO NEURAL SYNAPSE ---
const LogoMark = ({ className = "w-10 h-10" }) => (
  <div className={`${className} rounded-2xl bg-[#1E293B] ring-1 ring-white/10 p-1.5 flex items-center justify-center shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] shrink-0`}>
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="nl-synapse-grad" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <line x1="24" y1="24" x2="24" y2="9" stroke="url(#nl-synapse-grad)" strokeWidth="2" strokeLinecap="round" />
      <line x1="24" y1="24" x2="11" y2="32" stroke="url(#nl-synapse-grad)" strokeWidth="2" strokeLinecap="round" />
      <line x1="24" y1="24" x2="37" y2="32" stroke="url(#nl-synapse-grad)" strokeWidth="2" strokeLinecap="round" />
      <line x1="24" y1="24" x2="38" y2="14" stroke="url(#nl-synapse-grad)" strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />
      <circle cx="24" cy="9" r="3" fill="url(#nl-synapse-grad)" />
      <circle cx="11" cy="32" r="3" fill="url(#nl-synapse-grad)" />
      <circle cx="37" cy="32" r="3" fill="url(#nl-synapse-grad)" />
      <circle cx="38" cy="14" r="2" fill="url(#nl-synapse-grad)" />
      <circle cx="24" cy="24" r="4.5" fill="url(#nl-synapse-grad)" />
    </svg>
  </div>
);

const Logo = () => (
  <div className="flex items-center gap-3 select-none">
    <LogoMark className="w-10 h-10" />
    <div className="leading-tight">
      <div className="flex items-baseline gap-1.5">
        <span className="font-extrabold text-base lg:text-lg tracking-tight bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
          NeuraLink
        </span>
        <span className="font-mono text-[11px] lg:text-xs text-slate-400 border border-white/10 rounded-md px-1.5 py-0.5">
          Studio
        </span>
      </div>
      <p className="text-[10px] text-slate-500 flex items-center gap-1 mt-0.5">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" /> Sincronización activa
      </p>
    </div>
  </div>
);

// --- DIRECTIVAS DE ESPECIALISTAS Y REGULACIÓN TÉCNICA ---
const SYSTEM_DIRECTIVE = `
DIRECTIVA TÉCNICA DE PRODUCCIÓN: Eres parte del equipo de NeuraLink Studio.
1. Responde con el stack oficial: React 18+, Vite, Tailwind CSS, y Supabase.
2. Está estrictamente PROHIBIDO inventar funciones, sugerir paquetes no mantenidos o dar datos imprecisos.
3. Si el usuario te proporciona adjuntos o URLs de contexto, analízalos rigurosamente.
4. Entrega código limpio, moderno y estructurado en bloques de marcado.
`;

const SPECIALISTS = [
  { id: 'mentor', name: 'Mentor de Negocios', icon: 'Compass', color: 'from-emerald-600 to-teal-600', system: `${SYSTEM_DIRECTIVE} Eres el Mentor de Negocios y Operaciones del estudio. Tu labor es enseñarle al fundador a administrar la empresa, optimizar el uso de NeuraLink Studio, evitar que se desenfoque y guiarlo paso a paso para exprimir el máximo valor operativo y comercial de cada proyecto.` },
  { id: 'secretary', name: 'Secretario Neural', icon: 'FileText', color: 'from-amber-600 to-orange-600', system: `${SYSTEM_DIRECTIVE} Eres el Secretario Neural. Tu labor es llevar la bitácora, resumir avances, organizar tareas pendientes y redactar informes ejecutivos diarios sin alucinaciones, basándote puramente en el historial del proyecto.` },
  { id: 'director', name: 'Director Neural', icon: 'Brain', color: 'from-indigo-600 to-purple-600', system: `${SYSTEM_DIRECTIVE} Eres el Director Técnico. Ofreces visión estratégica y coordinación de producto.` },
  { id: 'designer', name: 'Diseñador UI/UX', icon: 'Palette', color: 'from-pink-600 to-rose-600', system: `${SYSTEM_DIRECTIVE} Experto en interfaces Bento UI, Glassmorphism, paletas neón y generación de maquetas visuales.` },
  { id: 'marketing', name: 'Marketing Neuronal', icon: 'TrendingUp', color: 'from-orange-600 to-rose-600', system: `${SYSTEM_DIRECTIVE} Experto en copys persuasivos, branding disruptivo y creación de prototipos visuales de campaña.` },
  { id: 'architect', name: 'Arquitecto Cuántico', icon: 'Building2', color: 'from-violet-600 to-purple-600', system: `${SYSTEM_DIRECTIVE} Eres el Arquitecto de Software. Diseñas la estructura de base de datos y componentes.` },
  { id: 'security', name: 'Ciberseguridad', icon: 'Shield', color: 'from-blue-600 to-cyan-600', system: `${SYSTEM_DIRECTIVE} Auditas la seguridad, evitando vulnerabilidades XSS, CORS y leaks de API keys.` },
  { id: 'backend', name: 'Nube de Backend', icon: 'Cloud', color: 'from-teal-600 to-green-600', system: `${SYSTEM_DIRECTIVE} Experto en Supabase (Auth, Row Level Security, Edge Functions y PostgreSQL).` },
  { id: 'seo', name: 'Especialista SEO y PWA', icon: 'Search', color: 'from-green-600 to-emerald-600', system: `${SYSTEM_DIRECTIVE} Encargado de PWA, manifiestos instalables, metas SEO y velocidad.` },
];

export default function App() {
  const [apiKey, setApiKey] = useState(localStorage.getItem('gemini_api_key') || '');
  const [showApiModal, setShowApiModal] = useState(!apiKey);
  const [activeSpec, setActiveSpec] = useState(SPECIALISTS[0]); // Arranca en el Mentor de Negocios
  
  // Proyectos y Estado
  const [projects, setProjects] = useState([{ id: 'proj_default', name: 'Proyecto Principal' }]);
  const [activeProjectId, setActiveProjectId] = useState('proj_default');
  const [showNewProjectModal, setShowNewProjectModal] = useState(false);
  const [newProjectName, setNewProjectName] = useState('');

  // URLs y Adjuntos
  const [showUrlModal, setShowUrlModal] = useState(false);
  const [urlInput, setUrlInput] = useState('');
  
  const [chats, setChats] = useState({});
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isGeneratingVisual, setIsGeneratingVisual] = useState(false);
  const [attachments, setAttachments] = useState([]);
  
  const chatEndRef = useRef(null);
  const fileInputRef = useRef(null);

  // Inicialización
  useEffect(() => {
    const savedProjects = localStorage.getItem('nl_projects');
    if (savedProjects) setProjects(JSON.parse(savedProjects));
    
    const savedChats = localStorage.getItem('nl_chats');
    if (savedChats) setChats(JSON.parse(savedChats));
  }, []);

  useEffect(() => {
    if (Object.keys(chats).length > 0) {
      localStorage.setItem('nl_chats', JSON.stringify(chats));
    }
  }, [chats]);

  const scrollToBottom = () => chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  useEffect(scrollToBottom, [chats, activeSpec, activeProjectId, isLoading, isGeneratingVisual]);

  // Manejo de eventos de copia global
  useEffect(() => {
    const handleCopyClick = (e) => {
      const btn = e.target.closest('.copy-code-btn');
      if (btn) {
        const codeBlock = btn.dataset.code;
        if (codeBlock) {
          navigator.clipboard.writeText(codeBlock);
          btn.innerText = '¡Copiado!';
          setTimeout(() => btn.innerText = 'Copiar Código', 2000);
        }
      }
    };
    document.addEventListener('click', handleCopyClick);
    return () => document.removeEventListener('click', handleCopyClick);
  }, []);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      setAttachments(prev => [...prev, { name: file.name, type: 'file', content: event.target.result }]);
    };
    reader.readAsText(file);
    e.target.value = null;
  };

  const handleAddUrl = () => {
    if (!urlInput.trim()) return;
    setAttachments(prev => [...prev, { name: urlInput, type: 'url', content: `[CONTEXTO DE URL EXTERNA: ${urlInput}]` }]);
    setUrlInput('');
    setShowUrlModal(false);
  };

  const removeAttachment = (index) => {
    setAttachments(prev => prev.filter((_, i) => i !== index));
  };

  const handleCreateProject = () => {
    if (!newProjectName.trim()) return;
    const newProj = { id: `proj_${Date.now()}`, name: newProjectName.trim() };
    const updatedProjects = [...projects, newProj];
    setProjects(updatedProjects);
    setActiveProjectId(newProj.id);
    localStorage.setItem('nl_projects', JSON.stringify(updatedProjects));
    setNewProjectName('');
    setShowNewProjectModal(false);
  };

  const handleGenerateDailyReport = async () => {
    if (!apiKey) { setShowApiModal(true); return; }

    let allProjectContext = "";
    Object.keys(chats).forEach(key => {
      if (key.startsWith(activeProjectId)) {
        const specName = key.split('_')[1];
        allProjectContext += `\n--- Conversación con ${specName} ---\n`;
        chats[key].forEach(m => {
          allProjectContext += `${m.role === 'user' ? 'Líder' : 'Especialista'}: ${m.content}\n`;
        });
      }
    });

    const promptText = `Genera un Informe Ejecutivo Diario profesional para el proyecto "${projects.find(p=>p.id === activeProjectId)?.name}".
Estructura obligatoria:
1. 📊 **Resumen Ejecutivo**
2. ✅ **Lo que ya se hizo**
3. ⏳ **Lo que falta por hacer**
4. 🛡️ **Alertas o Riesgos**
Historial analizado:\n${allProjectContext || "Sin interacciones previas registradas."}`;

    const chatId = `${activeProjectId}_secretary`;
    const userMsg = { role: 'user', content: '📋 Solicitar Informe Diario', displayInput: '📋 [Generar Informe Diario del Proyecto]', attachments: [] };
    
    setChats(prev => ({ ...prev, [chatId]: [...(prev[chatId] || []), userMsg] }));
    setIsLoading(true);

    try {
      const payload = {
        contents: [{ parts: [{ text: promptText }] }],
        systemInstruction: { parts: [{ text: SPECIALISTS[1].system }] }
      };

      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      const data = await res.json();
      if (data.error) throw new Error(data.error.message);
      
      const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "El secretario no pudo compilar el informe.";
      setChats(prev => ({ ...prev, [chatId]: [...(prev[chatId] || []), { role: 'model', content: reply }] }));
    } catch (error) {
      setChats(prev => ({ ...prev, [chatId]: [...(prev[chatId] || []), { role: 'model', content: `❌ Error al redactar la bitácora: ${error.message}` }] }));
    } finally {
      setIsLoading(false);
    }
  };

  const handleGenerateSampleVisual = async () => {
    if (!input.trim() && attachments.length === 0) {
      alert("Describe en el chat qué concepto visual o mockup deseas que el especialista te muestre.");
      return;
    }
    if (!apiKey) { setShowApiModal(true); return; }

    const promptText = input.trim() || `UI/UX Concept design mockup for project ${projects.find(p=>p.id === activeProjectId)?.name}, dark mode, bento style, futuristic glassmorphism, high quality 8k render.`;
    const chatId = `${activeProjectId}_${activeSpec.id}`;
    
    const userMsg = { role: 'user', content: `🎨 Request Sample Visual: ${promptText}`, displayInput: `[Solicitud de Muestra Visual]: ${promptText}`, attachments: [] };
    setChats(prev => ({ ...prev, [chatId]: [...(prev[chatId] || []), userMsg] }));
    
    setInput('');
    setIsGeneratingVisual(true);

    try {
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-generate-001:predict?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          instances: [{ prompt: `${promptText}, professional dark mode software dashboard, ultra detailed, modern bento UI, high resolution` }],
          parameters: { sampleCount: 1 }
        })
      });

      const data = await res.json();
      if (data.error) throw new Error(data.error.message);

      const base64Bytes = data.predictions?.[0]?.bytesBase64Encoded;
      if (base64Bytes) {
        const imageUrl = `data:image/png;base64,${base64Bytes}`;
        const visualReply = { 
          role: 'model', 
          type: 'visual',
          content: `Aquí tienes la muestra visual y concepto de diseño solicitado para **${projects.find(p=>p.id === activeProjectId)?.name}**:`,
          imageUrl: imageUrl
        };
        setChats(prev => ({ ...prev, [chatId]: [...(prev[chatId] || []), visualReply] }));
      } else {
        throw new Error("No se pudo obtener el render de la imagen.");
      }
    } catch (error) {
      setChats(prev => ({ ...prev, [chatId]: [...(prev[chatId] || []), { role: 'model', content: `❌ Error al renderizar la muestra visual: ${error.message}` }] }));
    } finally {
      setIsGeneratingVisual(false);
    }
  };

  const handleSend = async () => {
    if (!input.trim() && attachments.length === 0) return;
    if (!apiKey) { setShowApiModal(true); return; }

    let finalPrompt = input;
    if (attachments.length > 0) {
      const contextBlocks = attachments.map(a => `[ADJUNTO ${a.type.toUpperCase()}: ${a.name}]\n${a.content}\n`).join('\n');
      finalPrompt = `${contextBlocks}\n\nREQUERIMIENTO DEL USUARIO:\n${input}`;
    }

    const chatId = `${activeProjectId}_${activeSpec.id}`;
    const newMsg = { role: 'user', content: finalPrompt, displayInput: input, attachments: [...attachments] };
    
    setChats(prev => ({ ...prev, [chatId]: [...(prev[chatId] || []), newMsg] }));
    setInput('');
    setAttachments([]);
    setIsLoading(true);

    try {
      const chatHistory = chats[chatId] || [];
      const historyContext = chatHistory.slice(-6).map(m => `${m.role === 'user' ? 'Usuario' : activeSpec.name}: ${m.content}`).join('\n');
      
      const payload = {
        contents: [{ parts: [{ text: `Historial Reciente:\n${historyContext}\n\nUsuario: ${finalPrompt}` }] }],
        systemInstruction: { parts: [{ text: activeSpec.system }] }
      };

      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      const data = await res.json();
      if (data.error) throw new Error(data.error.message);
      
      const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sin respuesta del especialista.";
      setChats(prev => ({ ...prev, [chatId]: [...(prev[chatId] || []), { role: 'model', content: reply }] }));
    } catch (error) {
      setChats(prev => ({ ...prev, [chatId]: [...(prev[chatId] || []), { role: 'model', content: `❌ Error de Comunicación Neural: ${error.message}` }] }));
    } finally {
      setIsLoading(false);
    }
  };

  const renderFormattedText = (msg) => {
    if (msg.type === 'visual') {
      return (
        <div className="space-y-3">
          <p className="text-xs sm:text-sm text-slate-200">{msg.content}</p>
          <div className="rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl bg-slate-950/80 group relative">
            <img src={msg.imageUrl} alt="Muestra Visual NeuraLink" className="w-full h-auto max-h-[400px] object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex items-end justify-between">
              <span className="text-[10px] text-cyan-300 font-mono">Render de Concepto 8K</span>
              <a href={msg.imageUrl} download="neuralink-concept.png" className="text-xs bg-cyan-500 text-slate-950 px-3 py-1.5 rounded-lg font-bold hover:bg-cyan-400 transition-colors">
                Descargar PNG
              </a>
            </div>
          </div>
        </div>
      );
    }

    const text = msg.content;
    if (!text) return null;
    const parts = text.split(/(```[\s\S]*?```)/g);
    
    return parts.map((part, index) => {
      if (part.startsWith('```')) {
        const match = part.match(/```(\w*)\n([\s\S]*?)```/);
        const language = match ? match[1] : '';
        const code = match ? match[2] : part.replace(/```/g, '');
        
        return (
          <div key={index} className="relative my-4 rounded-2xl overflow-hidden border border-white/10 bg-[#080d1a] shadow-xl">
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-white/5">
              <span className="text-xs font-mono text-cyan-400/80 font-bold uppercase">{language || 'código'}</span>
              <button 
                data-code={code}
                className="copy-code-btn text-xs bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 px-3 py-1.5 rounded-lg border border-white/10 transition-all flex items-center gap-1.5"
              >
                <Icon name="Copy" className="w-3.5 h-3.5 pointer-events-none" /> Copiar Código
              </button>
            </div>
            <pre className="p-4 overflow-x-auto text-xs sm:text-sm font-mono text-slate-200 leading-relaxed whitespace-pre custom-scrollbar">
              {code}
            </pre>
          </div>
        );
      }
      return (
        <p key={index} className="mb-2 whitespace-pre-wrap leading-relaxed text-slate-300 text-sm" dangerouslySetInnerHTML={{ 
          __html: part.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>') 
        }} />
      );
    });
  };

  const currentChatId = `${activeProjectId}_${activeSpec.id}`;
  const currentChat = chats[currentChatId] || [];

  return (
    <div className="min-h-[100dvh] bg-[#020617] text-slate-200 font-sans flex flex-col md:flex-row overflow-hidden selection:bg-cyan-500/30">
      
      {/* SIDEBAR BENTO */}
      <aside className="w-full md:w-80 bg-slate-900/40 backdrop-blur-3xl border-r border-white/5 flex flex-col shrink-0 relative z-20">
        <div className="p-5 border-b border-white/5 flex items-center justify-between">
          <Logo />
          <button 
            onClick={() => setShowApiModal(true)} 
            className="p-2 rounded-xl bg-slate-800/40 hover:bg-slate-800 text-slate-500 hover:text-cyan-400 transition-colors"
            title="Ajustes de Conexión"
          >
            <Icon name="Settings" className="w-4 h-4" />
          </button>
        </div>
        
        {/* SELECTOR DE PROYECTO BENTO */}
        <div className="p-4 border-b border-white/5 bg-slate-900/30">
          <div className="flex items-center justify-between mb-2 px-1">
            <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500 flex items-center gap-1.5">
              <Icon name="Folder" className="w-3.5 h-3.5 text-cyan-400" /> Cliente / Proyecto
            </p>
          </div>
          <div className="flex gap-2">
            <select 
              value={activeProjectId} 
              onChange={(e) => setActiveProjectId(e.target.value)}
              className="flex-1 bg-slate-900/80 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500 appearance-none font-medium cursor-pointer"
            >
              {projects.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
            </select>
            <button 
              onClick={() => setShowNewProjectModal(true)} 
              className="bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-xl px-3 flex items-center justify-center transition-all text-cyan-400 hover:text-cyan-300" 
              title="Nuevo Proyecto"
            >
              <Icon name="Plus" className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* LISTA DE ESPECIALISTAS (MENTOR Y SECRETARIO ARRIBA) */}
        <div className="p-4 flex-1 overflow-y-auto space-y-2 custom-scrollbar">
          <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500 mb-3 px-1">Dirección & Mentoría</p>
          {SPECIALISTS.map(spec => (
            <button 
              key={spec.id} 
              onClick={() => setActiveSpec(spec)}
              className={`w-full text-left p-3 rounded-2xl flex items-center gap-3 transition-all group ${activeSpec.id === spec.id ? 'bg-slate-800/80 border border-white/10 shadow-lg shadow-cyan-500/5' : 'hover:bg-slate-800/30 border border-transparent'}`}
            >
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${spec.color} bg-opacity-20 border border-white/10 flex items-center justify-center shrink-0 transition-transform group-hover:scale-105`}>
                <Icon name={spec.icon} className={`w-5 h-5 ${activeSpec.id === spec.id ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-xs font-bold truncate ${activeSpec.id === spec.id ? 'text-white' : 'text-slate-300'}`}>{spec.name}</p>
                <p className="text-[10px] text-slate-500 truncate">{spec.id === 'mentor' ? 'Enfoque & Administración' : spec.id === 'secretary' ? 'Bitácora & Informes' : spec.id === 'designer' || spec.id === 'marketing' ? 'Generador Visual' : 'Agente Técnico'}</p>
              </div>
            </button>
          ))}
        </div>
      </aside>

      {/* PANEL PRINCIPAL DE INTERACCIÓN */}
      <main className="flex-1 flex flex-col h-screen relative overflow-hidden">
        
        {/* Fondo Aurora Minimalista */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] animate-[pulse_8s_ease-in-out_infinite]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[140px] animate-[pulse_8s_ease-in-out_infinite]" style={{ animationDelay: '4s' }} />
        </div>

        {/* HEADER TOP BENTO */}
        <header className="h-16 border-b border-white/5 bg-slate-900/40 backdrop-blur-xl flex items-center justify-between px-6 shrink-0 relative z-10">
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-lg bg-gradient-to-tr ${activeSpec.color} flex items-center justify-center`}>
              <Icon name={activeSpec.icon} className="w-4 h-4 text-white" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white flex items-center gap-2">
                {activeSpec.name}
              </h2>
              <p className="text-[10px] text-slate-400">Proyecto: <strong className="text-cyan-400 font-medium">{projects.find(p=>p.id === activeProjectId)?.name}</strong></p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {activeSpec.id === 'secretary' && (
              <button 
                onClick={handleGenerateDailyReport}
                disabled={isLoading}
                className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-extrabold text-xs px-4 py-2 rounded-xl flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)]"
              >
                <Icon name="FileText" className="w-4 h-4 text-slate-950" />
                <span>Generar Informe Diario</span>
              </button>
            )}
            <span className="text-[10px] bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full font-mono hidden sm:flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" /> Sincronizado
            </span>
          </div>
        </header>

        {/* CHAT BENTO AREA */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 relative z-10 custom-scrollbar">
          {currentChat.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center max-w-xl mx-auto text-center space-y-6 py-12">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${activeSpec.color} flex items-center justify-center opacity-90 shadow-lg shadow-cyan-500/10`}>
                <Icon name={activeSpec.icon} className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {activeSpec.id === 'mentor' ? 'Tu Mentor de Negocios y Operaciones' : activeSpec.id === 'secretary' ? 'Bitácora & Agenda del Proyecto' : `Canal con ${activeSpec.name}`}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {activeSpec.id === 'mentor' 
                    ? 'Pregúntame cómo organizar tu empresa, mantener el foco y exprimir el máximo valor operativo de NeuraLink Studio.'
                    : activeSpec.id === 'secretary' 
                    ? 'Mantén el control total. Pide al Secretario un reporte diario de lo hecho y lo pendiente.' 
                    : `Canal de trabajo aislado para el proyecto ${projects.find(p=>p.id === activeProjectId)?.name}.`}
                </p>
              </div>

              {/* Chips de Inicio Rápido */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full text-left">
                {activeSpec.id === 'mentor' ? (
                  <>
                    <button 
                      onClick={() => setInput('¿Cómo puedo organizar mi día y estructurar mis tareas para no desenfoque y sacar adelante este proyecto en tiempo récord?')}
                      className="bg-slate-900/60 hover:bg-slate-800/80 border border-white/5 p-3.5 rounded-2xl transition-all group col-span-2"
                    >
                      <p className="text-xs font-bold text-emerald-400 mb-1 group-hover:translate-x-0.5 transition-transform">🧭 Guía Anti-Desenfoque & Productividad</p>
                      <p className="text-[11px] text-slate-400">Establece un plan operativo diario claro y sin distracciones.</p>
                    </button>
                  </>
                ) : activeSpec.id === 'secretary' ? (
                  <>
                    <button 
                      onClick={handleGenerateDailyReport}
                      className="bg-slate-900/60 hover:bg-slate-800/80 border border-white/5 p-3.5 rounded-2xl transition-all group col-span-2"
                    >
                      <p className="text-xs font-bold text-amber-400 mb-1 group-hover:translate-x-0.5 transition-transform">📋 Compilar Informe Diario</p>
                      <p className="text-[11px] text-slate-400">Analiza todas las conversaciones y genera la agenda de pendientes.</p>
                    </button>
                  </>
                ) : (
                  <>
                    <button 
                      onClick={() => setInput('Genera la maqueta y código del Hero section para este proyecto.')}
                      className="bg-slate-900/60 hover:bg-slate-800/80 border border-white/5 p-3.5 rounded-2xl transition-all group"
                    >
                      <p className="text-xs font-bold text-cyan-400 mb-1 group-hover:translate-x-0.5 transition-transform">⚡ Prototipo de Código</p>
                      <p className="text-[11px] text-slate-400">Genera la estructura de componentes React + Tailwind.</p>
                    </button>
                    <button 
                      onClick={() => {
                        setInput('Dark mode luxury app UI mockup, glassmorphism bento card layout');
                        setTimeout(() => handleGenerateSampleVisual(), 100);
                      }}
                      className="bg-slate-900/60 hover:bg-slate-800/80 border border-pink-500/20 p-3.5 rounded-2xl transition-all group"
                    >
                      <p className="text-xs font-bold text-pink-400 mb-1 group-hover:translate-x-0.5 transition-transform">🎨 Generar Muestra Visual 8K</p>
                      <p className="text-[11px] text-slate-400">Crea una imagen de concepto UI para mostrar al cliente.</p>
                    </button>
                  </>
                )}
              </div>
            </div>
          ) : (
            currentChat.map((msg, i) => (
              <div key={i} className={`flex gap-3 sm:gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-9 h-9 rounded-xl shrink-0 flex items-center justify-center ${msg.role === 'user' ? 'bg-slate-800 border border-white/10' : `bg-gradient-to-tr ${activeSpec.color}`}`}>
                  {msg.role === 'user' ? <Icon name="Zap" className="w-4 h-4 text-cyan-400" /> : <Icon name={activeSpec.icon} className="w-4 h-4 text-white" />}
                </div>
                <div className={`max-w-[85%] rounded-2xl p-4 sm:p-5 ${msg.role === 'user' ? 'bg-slate-800/90 text-white border border-white/10' : 'bg-slate-900/60 border border-cyan-500/20 backdrop-blur-xl shadow-xl'}`}>
                  
                  {msg.role === 'user' && msg.attachments?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3 pb-2 border-b border-white/10">
                      {msg.attachments.map((att, idx) => (
                        <span key={idx} className="text-[10px] bg-slate-900/80 border border-white/10 px-2.5 py-1 rounded-lg text-cyan-300 flex items-center gap-1 font-mono">
                          <Icon name={att.type === 'url' ? 'Globe' : 'Paperclip'} className="w-3 h-3 text-cyan-400" /> {att.name}
                        </span>
                      ))}
                    </div>
                  )}

                  {msg.role === 'user' ? <p className="whitespace-pre-wrap text-xs sm:text-sm">{msg.displayInput || msg.content}</p> : renderFormattedText(msg)}
                </div>
              </div>
            ))
          )}

          {isLoading && (
            <div className="flex gap-4">
              <div className={`w-9 h-9 rounded-xl bg-gradient-to-tr ${activeSpec.color} flex items-center justify-center animate-pulse`}>
                <Icon name={activeSpec.icon} className="w-4 h-4 text-white" />
              </div>
              <div className="bg-slate-900/60 border border-cyan-500/20 rounded-2xl p-4 flex items-center gap-2 backdrop-blur-xl">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-75"></span>
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-150"></span>
              </div>
            </div>
          )}

          {isGeneratingVisual && (
            <div className="flex gap-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-pink-600 to-rose-600 flex items-center justify-center animate-pulse">
                <Icon name="Image" className="w-4 h-4 text-white" />
              </div>
              <div className="bg-slate-900/60 border border-pink-500/30 rounded-2xl p-5 flex flex-col gap-2 backdrop-blur-xl max-w-sm">
                <div className="flex items-center gap-2">
                  <Icon name="Sparkles" className="w-4 h-4 text-pink-400 animate-spin" />
                  <span className="text-xs font-bold text-pink-300">Renderizando Muestra Visual 8K...</span>
                </div>
                <p className="text-[11px] text-slate-400">Generando concepto de alta calidad para presentación.</p>
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* INPUT DE MANDO BENTO */}
        <div className="p-4 sm:p-6 bg-slate-900/80 backdrop-blur-2xl border-t border-white/5 relative z-10 shrink-0">
          <div className="max-w-4xl mx-auto">
            
            {attachments.length > 0 && (
              <div className="flex gap-2 mb-3 overflow-x-auto pb-1">
                {attachments.map((att, idx) => (
                  <div key={idx} className="bg-slate-800 border border-cyan-500/30 rounded-xl px-3 py-1.5 flex items-center gap-2 text-xs text-slate-200 shadow-sm">
                    <Icon name={att.type === 'url' ? 'Globe' : 'Paperclip'} className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="truncate max-w-[160px] font-mono text-[11px]">{att.name}</span>
                    <button onClick={() => removeAttachment(idx)} className="text-slate-400 hover:text-red-400"><Icon name="X" className="w-3.5 h-3.5" /></button>
                  </div>
                ))}
              </div>
            )}
            
            <div className="flex gap-2.5 items-end">
              <input type="file" ref={fileInputRef} onChange={handleFileUpload} className="hidden" accept=".txt,.json,.js,.jsx,.html,.css,.md" />
              
              <button 
                onClick={() => fileInputRef.current?.click()} 
                className="p-3.5 rounded-2xl bg-slate-800/80 border border-white/10 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-400 transition-all shrink-0" 
                title="Adjuntar archivo local"
              >
                <Icon name="Paperclip" className="w-4 h-4" />
              </button>

              <button 
                onClick={() => setShowUrlModal(true)} 
                className="p-3.5 rounded-2xl bg-slate-800/80 border border-white/10 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-400 transition-all shrink-0" 
                title="Ingresar enlace de cliente"
              >
                <Icon name="Globe" className="w-4 h-4" />
              </button>

              {activeSpec.id !== 'secretary' && activeSpec.id !== 'mentor' && (
                <button 
                  onClick={handleGenerateSampleVisual} 
                  disabled={isGeneratingVisual || isLoading}
                  className="p-3.5 rounded-2xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 hover:border-pink-500/60 text-pink-300 hover:text-white transition-all shrink-0 flex items-center gap-1.5 font-bold text-xs" 
                  title="Generar Muestra Visual 8K"
                >
                  <Icon name="Image" className="w-4 h-4 text-pink-400" />
                  <span className="hidden lg:inline">Visual 8K</span>
                </button>
              )}

              <div className="flex-1 relative">
                <textarea 
                  value={input} 
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
                  placeholder={activeSpec.id === 'mentor' ? "Consúltale al Mentor de Negocios cómo enfocar tu día..." : activeSpec.id === 'secretary' ? "Indícale al secretario qué registrar en la agenda..." : `Instrucción para ${activeSpec.name}...`}
                  className="w-full bg-slate-950/60 border border-white/10 rounded-2xl px-4 py-3.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 resize-none min-h-[48px] max-h-32 transition-colors custom-scrollbar"
                  rows={1}
                />
              </div>

              <button 
                onClick={handleSend} 
                disabled={isLoading || isGeneratingVisual || (!input.trim() && attachments.length === 0)}
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-5 py-3.5 rounded-2xl font-bold flex items-center gap-2 disabled:opacity-40 disabled:grayscale transition-all shadow-[0_0_20px_rgba(34,211,238,0.25)] hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] shrink-0"
              >
                <span className="hidden sm:inline text-xs uppercase tracking-wider font-extrabold">Enviar</span>
                <Icon name="Send" className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </main>

      {/* MODAL CONFIGURACIÓN API KEY */}
      {showApiModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-white/10 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative">
            <button onClick={() => setShowApiModal(false)} className="absolute top-5 right-5 text-slate-500 hover:text-white">
              <Icon name="X" className="w-5 h-5" />
            </button>
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-5">
              <Icon name="Key" className="w-6 h-6 text-cyan-400" />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Ajuste de Conexión Neural</h2>
            <p className="text-slate-400 text-xs mb-5 leading-relaxed">Configura la clave de Gemini API. Una vez guardada, no volverá a mostrarse públicamente en la interfaz.</p>
            <input 
              type="password" 
              value={apiKey} 
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Clave API de Gemini..."
              className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-white mb-4 focus:border-cyan-500 focus:outline-none font-mono"
            />
            <button 
              onClick={() => { localStorage.setItem('gemini_api_key', apiKey); setShowApiModal(false); }}
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3 rounded-xl transition-colors text-xs uppercase tracking-wider"
            >
              Guardar y Ocultar
            </button>
          </div>
        </div>
      )}

      {/* MODAL NUEVO PROYECTO */}
      {showNewProjectModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-white/10 rounded-3xl p-6 max-w-md w-full shadow-2xl relative">
            <button onClick={() => setShowNewProjectModal(false)} className="absolute top-5 right-5 text-slate-500 hover:text-white">
              <Icon name="X" className="w-5 h-5" />
            </button>
            <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4">
              <Icon name="Folder" className="w-6 h-6 text-violet-400" />
            </div>
            <h2 className="text-lg font-bold text-white mb-1">Nuevo Proyecto / Cliente</h2>
            <p className="text-slate-400 text-xs mb-4">Aísla los chats y la agenda para este cliente.</p>
            <input 
              type="text" 
              value={newProjectName} 
              onChange={(e) => setNewProjectName(e.target.value)}
              placeholder="Ej: Inmobiliaria Delta, E-commerce Z..."
              className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-white mb-4 focus:border-violet-500 focus:outline-none"
            />
            <button 
              onClick={handleCreateProject}
              className="w-full bg-violet-600 hover:bg-violet-500 text-white font-bold py-3 rounded-xl transition-colors text-xs uppercase tracking-wider"
            >
              Crear Proyecto
            </button>
          </div>
        </div>
      )}

      {/* MODAL INGRESAR URL */}
      {showUrlModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-white/10 rounded-3xl p-6 max-w-md w-full shadow-2xl relative">
            <button onClick={() => setShowUrlModal(false)} className="absolute top-5 right-5 text-slate-500 hover:text-white">
              <Icon name="X" className="w-5 h-5" />
            </button>
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4">
              <Icon name="Globe" className="w-6 h-6 text-cyan-400" />
            </div>
            <h2 className="text-lg font-bold text-white mb-1">Inyectar Contexto URL</h2>
            <p className="text-slate-400 text-xs mb-4">Pega el enlace de la web del cliente o competencia para auditar.</p>
            <input 
              type="url" 
              value={urlInput} 
              onChange={(e) => setUrlInput(e.target.value)}
              placeholder="https://ejemplo.com"
              className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-white mb-4 focus:border-cyan-500 focus:outline-none"
            />
            <button 
              onClick={handleAddUrl}
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3 rounded-xl transition-colors text-xs uppercase tracking-wider"
            >
              Vincular al Chat
            </button>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar { width: 5px; height: 5px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.18); }
      `}} />
    </div>
  );
}