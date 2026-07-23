import React, { useState, useEffect, useRef } from 'react';

const SUPABASE_URL = 'https://pkpyfpibdfpbxcabpyldj.supabase.co';
const SUPABASE_KEY = 'sb_publishable_uGFqmmyDqzAiEoUrnKZQbQ_6mwq8OB0';

export const supabase = {
    from: (table) => ({
        insert: async (data) => {
            try {
                const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
                    method: 'POST',
                    headers: {
                        'apikey': SUPABASE_KEY,
                        'Authorization': `Bearer ${SUPABASE_KEY}`,
                        'Content-Type': 'application/json',
                        'Prefer': 'return=minimal'
                    },
                    body: JSON.stringify(data)
                });
                if (!res.ok) throw new Error(`Supabase error: ${res.statusText}`);
                return { error: null };
            } catch (err) {
                console.warn('Supabase insert warning:', err);
                return { error: err };
            }
        }
    })
};

// --- LOGO INTEGRADO ---
export function LogoMark({ variant = "synapse", className = "w-10 h-10" }) {
    const gid = `nl-${variant}`;
    return (
        <div className={`${className} rounded-2xl bg-[#1E293B] ring-1 ring-white/10 p-1.5 flex items-center justify-center shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] shrink-0`}>
            <svg viewBox="0 0 48 48" fill="none" className="w-full h-full" aria-label="NeuraLink Studio">
                <defs>
                    <linearGradient id={gid} x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#8B5CF6" />
                        <stop offset="1" stopColor="#06B6D4" />
                    </linearGradient>
                </defs>
                {variant === "synapse" && (
                    <>
                        <line x1="24" y1="24" x2="24" y2="9" stroke={`url(#${gid})`} strokeWidth="2" strokeLinecap="round" />
                        <line x1="24" y1="24" x2="11" y2="32" stroke={`url(#${gid})`} strokeWidth="2" strokeLinecap="round" />
                        <line x1="24" y1="24" x2="37" y2="32" stroke={`url(#${gid})`} strokeWidth="2" strokeLinecap="round" />
                        <line x1="24" y1="24" x2="38" y2="14" stroke={`url(#${gid})`} strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />
                        <circle cx="24" cy="9" r="3" fill={`url(#${gid})`} />
                        <circle cx="11" cy="32" r="3" fill={`url(#${gid})`} />
                        <circle cx="37" cy="32" r="3" fill={`url(#${gid})`} />
                        <circle cx="38" cy="14" r="2" fill={`url(#${gid})`} />
                        <circle cx="24" cy="24" r="4.5" fill={`url(#${gid})`} />
                    </>
                )}
            </svg>
        </div>
    );
}

export function Logo({ withTagline = false }) {
    return (
        <div className="flex items-center gap-3 select-none">
            <LogoMark variant="synapse" className="w-10 h-10" />
            <div className="leading-tight">
                <div className="flex items-baseline gap-1.5">
                    <span className="font-extrabold text-base lg:text-lg tracking-tight bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                        NeuraLink
                    </span>
                    <span className="font-mono text-[11px] lg:text-xs text-slate-400 border border-white/10 rounded-md px-1.5 py-0.5">
                        Studio
                    </span>
                </div>
                {withTagline ? (
                    <p className="text-[10px] text-cyan-400/80 font-medium mt-0.5 tracking-wide">Conectando mentes, creando apps</p>
                ) : (
                    <p className="text-[10px] text-slate-500 flex items-center gap-1 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" /> Sincronización neural activa
                    </p>
                )}
            </div>
        </div>
    );
}

const Icon = ({ name, className = "w-5 h-5" }) => {
    switch (name) {
        case 'Zap': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>;
        case 'Cloud': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" /></svg>;
        case 'Key': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.778-7.778zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" /></svg>;
        case 'MessageSquare': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>;
        case 'Sparkles': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /></svg>;
        case 'Palette': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.504 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>;
        case 'Kanban': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 3v18M18 3v18M4 7h4M4 11h4M4 15h4M16 7h4M16 11h4M16 15h4"/></svg>;
        case 'Code2': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="m18 16 4-4-4-4M6 8l-4 4 4 4m10-12-4 16"/></svg>;
        case 'Brain': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/></svg>;
        case 'Building2': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>;
        case 'Shield': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
        case 'Search': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>;
        case 'TrendingUp': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>;
        case 'Camera': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>;
        case 'Mic': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v1a7 7 0 0 1-14 0v-1"/><line x1="12" x2="12" y1="19" y2="23"/><line x1="8" x2="16" y1="23" y2="23"/></svg>;
        case 'Send': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="22" x2="11" y1="2" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>;
        case 'Volume2': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>;
        case 'Rocket': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 3 0 3 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-3 0-3"/></svg>;
        case 'Monitor': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>;
        case 'X': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>;
        case 'Layout': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>;
        default: return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>;
    }
};

const safeSpeak = (text) => {
    try {
        if (!('speechSynthesis' in window)) return false;
        window.speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = 'es-419'; // Español latino
        utter.rate = 1.05;
        window.speechSynthesis.speak(utter);
        return true;
    } catch(e) { return false; }
};

const SPECIALISTS = [
    { id: 'director', name: 'Director Neural', icon: 'Brain', color: 'from-indigo-600 to-purple-600', bio: 'Liderazgo y estrategia autónoma', system: 'Eres el Director Neural de NeuraLink Studio. Lideras la arquitectura de software futurista, coordinas al equipo técnico y tomas decisiones ejecutivas. Responde en español con visión disruptiva, ejecutiva y precisa.' },
    { id: 'architect', name: 'Arquitecto Cuántico', icon: 'Building2', color: 'from-violet-600 to-purple-600', bio: 'Estructuras PWA y escalabilidad', system: 'Eres el Arquitecto Cuántico senior. Diseñas estructuras web ultraligeras, seguras y optimizadas para celulares. Responde en español con rigor técnico avanzado.' },
    { id: 'security', name: 'Ciberseguridad', icon: 'Shield', color: 'from-blue-600 to-cyan-600', bio: 'Protección y robustez frontend', system: 'Eres experto en ciberseguridad web y protección de datos. Aseguras que cada línea sea robusta y resistente a ataques.' },
    { id: 'backend', name: 'Nube de Backend', icon: 'Cloud', color: 'from-teal-600 to-green-600', bio: 'APIs, estado y persistencia Supabase', system: 'Eres experto en sincronización Supabase, persistencia neural cloud y optimización de rendimiento web. Responde en español técnico.' },
    { id: 'designer', name: 'Diseñador UI/UX', icon: 'Palette', color: 'from-pink-600 to-rose-600', bio: 'Estética neón y UX inmersiva', system: 'Eres Diseñador UI/UX experto en estética cyberpunk, gradientes cian/violeta y usabilidad móvil impecable. Responde en español.' },
    { id: 'seo', name: 'Especialista SEO y PWA', icon: 'Search', color: 'from-green-600 to-emerald-600', bio: 'Optimización y metadatos móviles', system: 'Eres experto en SEO técnico y conversión de webs en aplicaciones móviles nativas PWA. Responde en español.' },
    { id: 'marketing', name: 'Marketing Neuronal', icon: 'TrendingUp', color: 'from-orange-600 to-red-600', bio: 'Estrategia de impacto', system: 'Eres experto en Marketing Digital y propuestas de valor disruptivas. Responde en español.' }
];

// --- CORREGIDO: Modelo Gemini estable ---
const callGeminiAPI = async (specialist, messages, images = [], currentCode = '', apiKey = '') => {
    const key = apiKey || localStorage.getItem('neuralink_gemini_key') || '';
    if (!key) {
        throw new Error('Por favor ingresa tu clave API de Google AI Studio haciendo clic en "Clave API" arriba.');
    }
    
    // CORRECCIÓN PRINCIPAL: Usar gemini-1.5-flash (modelo estable)
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`;
    
    const contents = [];
    messages.forEach((m, idx) => {
        const parts = [];
        if (m.images && m.images.length > 0 && idx === messages.length - 1) {
            m.images.forEach(img => {
                parts.push({ inline_data: { mime_type: img.mime, data: img.data } });
            });
        }
        parts.push({ text: m.text });
        contents.push({ role: m.role === 'user' ? 'user' : 'model', parts });
    });

    if (currentCode) {
        contents.push({
            role: 'user',
            parts: [{ text: `[Contexto actual del código en NeuraLink Studio]\n\`\`\`html\n${currentCode}\n\`\`\`` }]
        });
    }

    const payload = {
        contents,
        systemInstruction: { parts: [{ text: specialist.system }] },
        generationConfig: { temperature: 0.4, maxOutputTokens: 8192 }
    };

    let response;
    let delay = 1000;
    for (let i = 0; i < 4; i++) {
        try {
            response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (response.ok) break;
        } catch (e) {}
        await new Promise(res => setTimeout(res, delay));
        delay *= 2;
    }

    if (!response || !response.ok) {
        const errData = await response?.json().catch(() => ({}));
        throw new Error(errData.error?.message || `Error HTTP ${response?.status || 500}. Verifica tu clave API o espera unos segundos.`);
    }

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || '(Sin respuesta del especialista)';
};

const fileToBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve({ data: reader.result.split(',')[1], mime: file.type });
    reader.onerror = reject;
    reader.readAsDataURL(file);
});

const renderFormattedText = (text) => {
    if (!text) return '';
    let safeText = text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    let formatted = safeText
        .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="bg-slate-950/90 p-3 rounded-2xl my-2 overflow-x-auto border border-cyan-500/20 text-xs font-mono text-cyan-300"><code>$2</code></pre>')
        .replace(/`([^`]+)`/g, '<code class="bg-slate-900 text-cyan-400 px-1.5 py-0.5 rounded text-xs font-mono border border-cyan-500/10">$1</code>')
        .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
        .replace(/\n\n/g, '</p><p class="mt-2">')
        .replace(/\n/g, '<br/>');
    return `<p>${formatted}</p>`;
};

export default function App() {
    const [apiKey, setApiKey] = useState(() => localStorage.getItem('neuralink_gemini_key') || '');
    const [showKeyModal, setShowKeyModal] = useState(false);
    const [activeTab, setActiveTab] = useState('home');
    const [activeSpecialist, setActiveSpecialist] = useState('director');
    const [syncToken, setSyncToken] = useState(() => localStorage.getItem('neuralink_sync_token') || 'NL-67P5');
    const [chats, setChats] = useState(() => {
        try {
            const saved = localStorage.getItem('neuralink_neural_chats');
            if (saved) {
                const parsed = JSON.parse(saved);
                if (typeof parsed === 'object' && parsed !== null) return parsed;
            }
        } catch(e) {}
        return {};
    });
    const [sandboxCode, setSandboxCode] = useState(() => {
        return localStorage.getItem('neuralink_neural_code') || `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NeuraLink Studio</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-[#020617] text-white min-h-[100dvh] flex flex-col items-center justify-center p-6 font-sans">
    <div class="text-center space-y-4">
        <h1 class="text-3xl font-extrabold text-white">NeuraLink Studio</h1>
        <p class="text-slate-300 text-sm">Conectando mentes, creando apps.</p>
    </div>
</body>
</html>`;
    });
    const [previewCode, setPreviewCode] = useState(sandboxCode);
    const [inputMsg, setInputMsg] = useState('');
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isListening, setIsListening] = useState(false);

    useEffect(() => {
        try { localStorage.setItem('neuralink_neural_chats', JSON.stringify(chats)); } catch(e) {}
    }, [chats]);
    useEffect(() => {
        try { localStorage.setItem('neuralink_neural_code', sandboxCode); } catch(e) {}
    }, [sandboxCode]);
    useEffect(() => {
        try { localStorage.setItem('neuralink_gemini_key', apiKey); } catch(e) {}
    }, [apiKey]);
    useEffect(() => {
        try { localStorage.setItem('neuralink_sync_token', syncToken); } catch(e) {}
    }, [syncToken]);

    useEffect(() => {
        const timer = setTimeout(() => { setPreviewCode(sandboxCode); }, 500);
        return () => clearTimeout(timer);
    }, [sandboxCode]);

    const chatBottomRef = useRef(null);
    const fileInputRef = useRef(null);

    useEffect(() => {
        if (activeTab === 'chat') {
            chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [chats, activeSpecialist, loading, activeTab]);

    const toggleVoiceRecognition = () => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) return;
        if (isListening) { setIsListening(false); return; }
        try {
            const recognition = new SpeechRecognition();
            recognition.lang = 'es-419';
            recognition.interimResults = false;
            recognition.maxAlternatives = 1;
            recognition.onstart = () => setIsListening(true);
            recognition.onresult = (event) => {
                const speechText = event.results[0][0].transcript;
                setInputMsg(prev => prev ? `${prev} ${speechText}` : speechText);
                setIsListening(false);
            };
            recognition.onerror = () => setIsListening(false);
            recognition.onend = () => setIsListening(false);
            recognition.start();
        } catch(e) { setIsListening(false); }
    };

    const handleImageSelect = async (e) => {
        const files = Array.from(e.target.files);
        const processed = await Promise.all(files.map(fileToBase64));
        setImages(prev => [...prev, ...processed.map((p, i) => ({ ...p, name: files[i].name, preview: URL.createObjectURL(files[i]) }))]);
        e.target.value = '';
    };

    const handleSendMessage = async () => {
        if (!inputMsg.trim() && images.length === 0) return;
        if (!apiKey.trim()) { setShowKeyModal(true); return; }

        const spec = SPECIALISTS.find(s => s.id === activeSpecialist);
        const promptText = inputMsg || '(Imagen adjunta)';
        const userMessage = { 
            role: 'user', 
            text: promptText, 
            images: images.map(i => ({ name: i.name, preview: i.preview })),
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
        };
        const currentSpecChat = chats[activeSpecialist] || [];
        const updatedChat = [...currentSpecChat, userMessage];
        setChats(prev => ({ ...prev, [activeSpecialist]: updatedChat }));
        setInputMsg('');
        const currentImages = [...images];
        setImages([]);
        setLoading(true);
        setErrorMsg('');

        try {
            const replyText = await callGeminiAPI(spec, updatedChat, currentImages, sandboxCode, apiKey);
            const botMessage = { role: 'model', text: replyText, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
            const finalChat = [...updatedChat, botMessage];
            setChats(prev => ({ ...prev, [activeSpecialist]: finalChat }));
            try {
                await supabase.from('neuralink_logs').insert([
                    { token: syncToken, specialist: activeSpecialist, prompt: promptText, response: replyText }
                ]);
            } catch(dbErr) {}
        } catch (err) {
            setErrorMsg(`Error: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    const extractAndApplyCode = (text) => {
        const codeMatch = text.match(/```(?:html|xml)?\n([\s\S]*?)```/);
        if (codeMatch && codeMatch[1]) {
            setSandboxCode(codeMatch[1]);
            setActiveTab('editor');
        }
    };

    const currentSpec = SPECIALISTS.find(s => s.id === activeSpecialist) || SPECIALISTS[0];
    const messages = chats[activeSpecialist] || [];

    return (
        <div className="h-[100dvh] w-screen flex flex-col bg-[#020617] text-slate-100 overflow-hidden font-sans selection:bg-cyan-500 selection:text-slate-950 relative" translate="no">
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px] animate-[pulse_8s_ease-in-out_infinite]"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] animate-[pulse_8s_ease-in-out_infinite]" style={{ animationDelay: '4s' }}></div>
            </div>

            <header className="sticky top-0 z-40 bg-[#020617]/85 backdrop-blur-2xl saturate-150 border-b border-white/5 shrink-0">
                <div className="mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
                    <div className="cursor-pointer" onClick={() => setActiveTab('home')}><Logo /></div>
                    <nav className="hidden xl:flex items-center gap-1.5 bg-slate-900/40 p-1.5 rounded-2xl border border-white/5 backdrop-blur-2xl">
                        <button onClick={() => setActiveTab('home')} className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${activeTab === 'home' ? 'bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]' : 'text-slate-300 hover:text-white hover:bg-slate-800/50'}`}>
                            <Icon name="Zap" className="w-4 h-4" /> Inicio
                        </button>
                        <button onClick={() => setActiveTab('chat')} className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${activeTab === 'chat' ? 'bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]' : 'text-slate-300 hover:text-white hover:bg-slate-800/50'}`}>
                            <Icon name="MessageSquare" className="w-4 h-4" /> Chat Neural
                        </button>
                        <button onClick={() => setActiveTab('editor')} className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${activeTab === 'editor' ? 'bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]' : 'text-slate-300 hover:text-white hover:bg-slate-800/50'}`}>
                            <Icon name="Code2" className="w-4 h-4" /> Forja & PWA
                        </button>
                    </nav>
                    <div className="flex items-center gap-3">
                        <div className="hidden md:flex items-center gap-2 bg-slate-900/60 border border-violet-500/20 rounded-full px-3.5 py-1.5 backdrop-blur-xl">
                            <div className="relative"><div className="w-2 h-2 rounded-full bg-violet-400" /><div className="absolute inset-0 w-2 h-2 rounded-full bg-violet-400 animate-ping" /></div>
                            <span className="text-xs text-violet-300 font-medium">Supabase Cloud</span>
                        </div>
                        <button onClick={() => setShowKeyModal(true)} className="bg-slate-900/40 hover:bg-slate-800/60 border border-white/5 text-xs px-3.5 py-2.5 rounded-xl font-bold text-slate-100 hover:text-white transition-all flex items-center gap-2 backdrop-blur-xl shadow-lg">
                            <Icon name="Key" className="w-4 h-4 text-cyan-400" /> Clave API
                        </button>
                    </div>
                </div>
            </header>

            <div className="flex-1 flex overflow-hidden relative w-full pb-16 xl:pb-0 z-10">
                {activeTab === 'home' && (
                    <div className="flex-1 overflow-y-auto scroll-smooth bg-transparent w-full animate-fade-in p-6">
                        <section className="max-w-5xl mx-auto pt-12 pb-8 text-center space-y-6">
                            <div className="flex justify-center mb-4"><Logo withTagline /></div>
                            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mt-4">
                                Crea apps conectando <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">mentes y código</span>
                            </h1>
                            <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                                Tu estudio neural con Supabase integrado. Diseña, chatea con especialistas autónomos y genera aplicaciones PWA.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4 pt-4">
                                <button onClick={() => setActiveTab('chat')} className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 hover:opacity-90 text-white font-bold px-8 py-4 rounded-2xl shadow-[0_0_30px_rgba(217,70,239,0.5)] transition-all flex items-center gap-2">
                                    <Icon name="MessageSquare" className="w-5 h-5" /> Entrar al Chat Neural
                                </button>
                                <button onClick={() => setActiveTab('editor')} className="bg-slate-900/60 hover:bg-slate-800/80 text-slate-200 border border-white/10 px-8 py-4 rounded-2xl font-bold transition-all flex items-center gap-2 backdrop-blur-2xl shadow-xl">
                                    <Icon name="Code2" className="w-5 h-5 text-violet-400" /> Abrir Forja PWA
                                </button>
                            </div>
                        </section>
                    </div>
                )}

                {activeTab === 'chat' && (
                    <div className="flex-1 flex overflow-hidden w-full animate-fade-in">
                        <aside className={`${sidebarOpen ? 'block absolute z-30 h-full' : 'hidden'} xl:block w-72 bg-[#020617]/90 backdrop-blur-2xl border-r border-white/5 flex flex-col shrink-0 overflow-y-auto`}>
                            <div className="p-4 border-b border-white/5 bg-slate-900/40 flex items-center justify-between sticky top-0 z-10 backdrop-blur-2xl">
                                <span className="text-xs font-bold text-violet-400 uppercase tracking-wider">Especialistas Neurales</span>
                                {sidebarOpen && <button onClick={() => setSidebarOpen(false)} className="text-xs text-slate-400 hover:text-white"><Icon name="X" className="w-4 h-4" /></button>}
                            </div>
                            <div className="p-3 space-y-2">
                                {SPECIALISTS.map(spec => {
                                    const hasChat = chats[spec.id] && chats[spec.id].length > 0;
                                    return (
                                        <button key={spec.id} onClick={() => { setActiveSpecialist(spec.id); setSidebarOpen(false); }} className={`w-full text-left p-3 rounded-2xl transition-all flex items-center gap-3 relative bg-slate-900/40 backdrop-blur-2xl border ${activeSpecialist === spec.id ? 'border-violet-500/50 shadow-[0_0_20px_rgba(139,92,246,0.2)]' : 'border-white/5 hover:border-white/10'}`}>
                                            <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400 shrink-0">
                                                <Icon name={spec.icon} className="w-5 h-5" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className={`text-sm font-bold truncate ${activeSpecialist === spec.id ? 'text-white' : 'text-slate-300'}`}>{spec.name}</p>
                                                <p className="text-[10px] text-slate-400 truncate">{spec.bio}</p>
                                            </div>
                                            {hasChat && <span className="w-2 h-2 rounded-full bg-violet-400 absolute top-3 right-3 shadow-[0_0_8px_rgba(139,92,246,0.8)]"></span>}
                                        </button>
                                    );
                                })}
                            </div>
                        </aside>

                        <main className="flex-1 flex flex-col bg-transparent overflow-hidden relative">
                            <div className="bg-slate-900/40 backdrop-blur-2xl border-b border-white/5 p-4 md:p-5 text-white flex items-center justify-between shadow-lg shrink-0">
                                <div className="flex items-center gap-3">
                                    <button onClick={() => setSidebarOpen(!sidebarOpen)} className="xl:hidden text-white p-1 bg-white/5 rounded-lg"><Icon name="Layout" className="w-5 h-5" /></button>
                                    <div className="w-10 h-10 rounded-2xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400 shrink-0 backdrop-blur-md">
                                        <Icon name={currentSpec.icon} className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h2 className="font-bold text-base md:text-lg text-white">{currentSpec.name}</h2>
                                        <p className="text-xs text-slate-300 font-medium">{currentSpec.bio}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 scroll-smooth">
                                {messages.length === 0 && (
                                    <div className="h-full flex flex-col items-center justify-center text-slate-400 space-y-4">
                                        <Icon name={currentSpec.icon} className="w-16 h-16 text-slate-600" />
                                        <p className="text-sm">Iniciando enlace neural con {currentSpec.name}...</p>
                                    </div>
                                )}
                                {messages.map((m, idx) => (
                                    <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                        <div className={`max-w-[85%] md:max-w-[75%] rounded-3xl p-4 md:p-5 shadow-lg ${m.role === 'user' ? 'bg-gradient-to-br from-violet-600/90 to-fuchsia-600/90 text-white' : 'bg-slate-900/80 text-slate-200 border border-white/5 backdrop-blur-xl'}`}>
                                            {m.images && m.images.length > 0 && (
                                                <div className="flex gap-2 mb-3 flex-wrap">
                                                    {m.images.map((img, i) => (<img key={i} src={img.preview} alt="" className="w-24 h-24 object-cover rounded-xl border border-white/20" />))}
                                                </div>
                                            )}
                                            <div className="text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: m.role === 'model' ? renderFormattedText(m.text) : m.text.replace(/\n/g, '<br/>') }} />
                                            <span className="text-[10px] mt-3 block opacity-60">{m.time}</span>
                                            {m.role === 'model' && (
                                                <div className="flex gap-2 mt-3 pt-3 border-t border-white/10">
                                                    <button onClick={() => safeSpeak(m.text)} className="text-xs bg-white/5 hover:bg-white/10 px-2 py-1 rounded flex items-center gap-1"><Icon name="Volume2" className="w-3 h-3" /> Leer</button>
                                                    {/```/.test(m.text) && (<button onClick={() => extractAndApplyCode(m.text)} className="text-xs bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 px-2 py-1 rounded flex items-center gap-1"><Icon name="Rocket" className="w-3 h-3" /> Aplicar</button>)}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                                {loading && (
                                    <div className="flex items-center gap-3 bg-slate-900/60 border border-white/5 p-4 rounded-2xl w-fit backdrop-blur-xl">
                                        <div className="flex gap-1"><span className="w-2 h-2 bg-violet-500 rounded-full animate-bounce"></span><span className="w-2 h-2 bg-fuchsia-500 rounded-full animate-bounce" style={{animationDelay:'0.1s'}}></span><span className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{animationDelay:'0.2s'}}></span></div>
                                        <span className="text-xs text-slate-400">Procesando...</span>
                                    </div>
                                )}
                                {errorMsg && <div className="bg-red-950/50 border border-red-500/50 text-red-200 text-xs p-4 rounded-2xl">{errorMsg}</div>}
                                <div ref={chatBottomRef} />
                            </div>

                            <div className="p-4 bg-slate-950/60 border-t border-white/5 backdrop-blur-2xl">
                                <div className="flex gap-2 max-w-4xl mx-auto">
                                    <input type="file" ref={fileInputRef} accept="image/*" multiple onChange={handleImageSelect} className="hidden" />
                                    <button onClick={() => fileInputRef.current?.click()} className="bg-slate-900 border border-white/10 p-3 rounded-2xl text-slate-400 hover:text-cyan-400 transition"><Icon name="Camera" className="w-5 h-5" /></button>
                                    <button onClick={toggleVoiceRecognition} className={`p-3 rounded-2xl transition ${isListening ? 'bg-red-600 text-white animate-pulse' : 'bg-slate-900 border border-white/10 text-slate-400 hover:text-violet-400'}`}><Icon name="Mic" className="w-5 h-5" /></button>
                                    <input type="text" value={inputMsg} onChange={e => setInputMsg(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSendMessage()} placeholder={`Comunica con ${currentSpec.name}...`} className="flex-1 bg-slate-900/80 border border-white/10 rounded-2xl px-4 text-sm text-white focus:outline-none focus:border-violet-500/50" disabled={loading} />
                                    <button onClick={handleSendMessage} disabled={loading || (!inputMsg.trim() && images.length === 0)} className="bg-gradient-to-r from-violet-600 to-cyan-500 hover:opacity-90 disabled:opacity-50 text-white p-4 rounded-2xl shadow-[0_0_15px_rgba(139,92,246,0.3)] transition"><Icon name="Send" className="w-5 h-5" /></button>
                                </div>
                            </div>
                        </main>
                    </div>
                )}

                {activeTab === 'editor' && (
                    <div className="flex-1 flex flex-col lg:flex-row overflow-hidden bg-[#020617]">
                        <div className="w-full lg:w-1/2 flex flex-col border-r border-white/5">
                            <div className="bg-slate-900/60 p-3 border-b border-white/5 text-xs font-bold text-slate-300"><Icon name="Code2" className="w-4 h-4 text-violet-400 inline mr-2" />Editor PWA</div>
                            <textarea value={sandboxCode} onChange={(e) => setSandboxCode(e.target.value)} className="flex-1 bg-transparent text-cyan-300 font-mono text-xs p-4 focus:outline-none resize-none" spellCheck="false" />
                        </div>
                        <div className="w-full lg:w-1/2 flex flex-col bg-slate-950">
                            <div className="bg-slate-900/60 p-3 border-b border-white/5 text-xs font-bold text-slate-300"><Icon name="Monitor" className="w-4 h-4 text-cyan-400 inline mr-2" />Preview</div>
                            <iframe srcDoc={previewCode} title="Preview" className="w-full h-full border-none bg-white" sandbox="allow-scripts" />
                        </div>
                    </div>
                )}
            </div>

            {showKeyModal && (
                <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md flex items-center justify-center z-50 p-4">
                    <div className="bg-slate-900 border border-white/10 p-6 md:p-8 rounded-3xl w-full max-w-md shadow-2xl">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Icon name="Key" className="w-6 h-6 text-violet-400" /> API Key de Gemini</h3>
                        <p className="text-sm text-slate-300 mb-4">Obtén tu clave gratuita en <a href="https://aistudio.google.com/" target="_blank" rel="noreferrer" className="text-cyan-400 underline">Google AI Studio</a></p>
                        <input type="password" value={apiKey} onChange={(e) => setApiKey(e.target.value)} placeholder="AIzaSy..." className="w-full bg-slate-950 border border-white/10 rounded-2xl px-4 py-3 text-white mb-4 focus:border-violet-500 focus:outline-none font-mono" />
                        <button onClick={() => setShowKeyModal(false)} className="w-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-bold py-3 rounded-2xl transition">Guardar Clave</button>
                    </div>
                </div>
            )}

            <nav className="xl:hidden bg-[#020617]/95 border-t border-white/5 p-2 flex justify-around items-center fixed bottom-0 w-full z-40 backdrop-blur-xl">
                <button onClick={() => setActiveTab('home')} className={`p-2 rounded-xl flex flex-col items-center ${activeTab === 'home' ? 'text-cyan-400' : 'text-slate-500'}`}><Icon name="Zap" className="w-5 h-5" /><span className="text-[10px]">Inicio</span></button>
                <button onClick={() => setActiveTab('chat')} className={`p-2 rounded-xl flex flex-col items-center ${activeTab === 'chat' ? 'text-violet-400' : 'text-slate-500'}`}><Icon name="MessageSquare" className="w-5 h-5" /><span className="text-[10px]">Chat</span></button>
                <button onClick={() => setActiveTab('editor')} className={`p-2 rounded-xl flex flex-col items-center ${activeTab === 'editor' ? 'text-fuchsia-400' : 'text-slate-500'}`}><Icon name="Code2" className="w-5 h-5" /><span className="text-[10px]">Forja</span></button>
            </nav>
        </div>
    );
}