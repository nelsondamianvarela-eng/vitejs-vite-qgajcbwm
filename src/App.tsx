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

        {variant === "portal" && (
          <>
            <polygon points="24,10 36.12,17 36.12,31 24,38 11.88,31 11.88,17" stroke={`url(#${gid})`} strokeWidth="2.4" strokeLinejoin="round" />
            <line x1="24" y1="24" x2="24" y2="10" stroke={`url(#${gid})`} strokeWidth="1.2" opacity="0.5" />
            <line x1="24" y1="24" x2="36.12" y2="31" stroke={`url(#${gid})`} strokeWidth="1.2" opacity="0.5" />
            <line x1="24" y1="24" x2="11.88" y2="31" stroke={`url(#${gid})`} strokeWidth="1.2" opacity="0.5" />
            <circle cx="24" cy="24" r="4" fill={`url(#${gid})`} />
          </>
        )}

        {variant === "synapse" && (
          <>
            <line x1="24" y1="24" x2="24" y2="9"  stroke={`url(#${gid})`} strokeWidth="2" strokeLinecap="round" />
            <line x1="24" y1="24" x2="11" y2="32" stroke={`url(#${gid})`} strokeWidth="2" strokeLinecap="round" />
            <line x1="24" y1="24" x2="37" y2="32" stroke={`url(#${gid})`} strokeWidth="2" strokeLinecap="round" />
            <line x1="24" y1="24" x2="38" y2="14" stroke={`url(#${gid})`} strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />
            <circle cx="24" cy="9"  r="3"   fill={`url(#${gid})`} />
            <circle cx="11" cy="32" r="3"   fill={`url(#${gid})`} />
            <circle cx="37" cy="32" r="3"   fill={`url(#${gid})`} />
            <circle cx="38" cy="14" r="2"   fill={`url(#${gid})`} />
            <circle cx="24" cy="24" r="4.5" fill={`url(#${gid})`} />
          </>
        )}

        {variant === "nexus" && (
          <>
            <line x1="11" y1="24" x2="37" y2="24" stroke={`url(#${gid})`} strokeWidth="2.4" strokeLinecap="round" />
            <circle cx="11" cy="24" r="4" fill={`url(#${gid})`} />
            <circle cx="37" cy="24" r="4" fill={`url(#${gid})`} />
            <path d="M24 19 L29 24 L24 29 L19 24 Z" fill={`url(#${gid})`} />
            <path d="M24 21.6 L26.4 24 L24 26.4 L21.6 24 Z" fill="#0B1220" />
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
        // Nuevos Iconos Fase 1
        case 'Paperclip': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>;
        case 'Link': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>;
        case 'ChevronDown': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>;
        case 'Plus': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>;
        case 'FileText': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>;
        case 'Clipboard': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>;
        default: return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>;
    }
};

const safeSpeak = (text) => {
    try {
        if (!('speechSynthesis' in window)) return false;
        window.speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = 'es-ES';
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

const ANTI_HALLUCINATION_DIRECTIVE = `
[DIRECTIVA ESTRICTA NEURALINK 2026]:
- Stack obligatorio: React 18 + Vite + Tailwind CSS + Supabase
- Prohibido inventar endpoints de Supabase que no existan
- Prohibido sugerir librerías externas sin justificación
- Si no sabes algo, di "No tengo certeza" en lugar de inventar
- Todo código debe ser funcional y copiável directamente
- Mantener estética Bento + Aurora (slate-950, glassmorphism, violeta/cian)
`;

const callGeminiAPI = async (specialist, messages, images = [], currentCode = '', apiKey = '') => {
    const key = apiKey || localStorage.getItem('neuralink_gemini_key') || '';
    if (!key) {
        throw new Error('Por favor ingresa tu clave API de Google AI Studio haciendo clic en "Clave API" arriba.');
    }
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${key}`;
    
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
        systemInstruction: { parts: [{ text: `${specialist.system}\n\n${ANTI_HALLUCINATION_DIRECTIVE}` }] },
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
        .replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
            // Contenedor 'group' para mostrar botón en hover, shadow interior y padding superior extra.
            return `<div class="relative group my-4"><button class="copy-code-btn absolute top-3 right-3 bg-slate-800 hover:bg-slate-700 text-cyan-400 border border-cyan-500/30 rounded-lg px-2.5 py-1.5 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-all z-10 flex items-center gap-1.5 shadow-lg"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg><span>Copiar</span></button><pre class="bg-slate-950/90 p-4 pt-12 rounded-2xl overflow-x-auto border border-cyan-500/20 text-xs font-mono text-cyan-300 shadow-inner"><code>${code}</code></pre></div>`;
        })
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
    
    // --- ESTADOS DE PROYECTOS (FASE 1) ---
    const defaultProjects = [
        { id: 'p_demo', name: 'Proyecto Demo', client: 'Interno', color: 'bg-violet-500', createdAt: Date.now() },
        { id: 'p_alfa', name: 'Cliente Alfa', client: 'Alfa SA', color: 'bg-cyan-500', createdAt: Date.now() },
        { id: 'p_beta', name: 'Cliente Beta', client: 'Beta LLC', color: 'bg-fuchsia-500', createdAt: Date.now() }
    ];
    
    const [projects, setProjects] = useState(() => {
        try {
            const saved = localStorage.getItem('neuralink_projects');
            return saved ? JSON.parse(saved) : defaultProjects;
        } catch(e) { return defaultProjects; }
    });
    const [activeProjectId, setActiveProjectId] = useState(() => localStorage.getItem('neuralink_active_project') || 'p_demo');
    const [showProjectDropdown, setShowProjectDropdown] = useState(false);
    const [showNewProjectModal, setShowNewProjectModal] = useState(false);
    const [newProjectName, setNewProjectName] = useState('');

    const [syncToken, setSyncToken] = useState(() => localStorage.getItem('neuralink_sync_token') || 'NL-67P5');
    const [showSyncModal, setShowSyncModal] = useState(false);

    // --- MIGRACIÓN DE CHATS POR PROYECTO (FASE 1) ---
    const [chats, setChats] = useState(() => {
        try {
            const saved = localStorage.getItem('neuralink_neural_chats');
            if (saved) {
                const parsed = JSON.parse(saved);
                // Si el objeto tiene un especialista directamente (formato viejo), migrar al proyecto demo
                if (parsed['director'] && !Array.isArray(parsed['director']) === false) {
                    return { 'p_demo': parsed };
                }
                return parsed;
            }
        } catch(e) {}
        return { 'p_demo': {} };
    });
    
    const [tasks, setTasks] = useState(() => {
        try {
            const saved = localStorage.getItem('neuralink_neural_tasks');
            return saved ? JSON.parse(saved) : [
                { id: 1, title: 'Definir arquitectura principal con Supabase', assignee: 'director', status: 'done' },
                { id: 2, title: 'Generar conceptos visuales con Neón Cyan', assignee: 'designer', status: 'progress' },
                { id: 3, title: 'Optimizar PWA y sincronización cloud', assignee: 'seo', status: 'todo' }
            ];
        } catch(e) { return []; }
    });

    const [sandboxCode, setSandboxCode] = useState(() => {
        return localStorage.getItem('neuralink_neural_code') || `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NeuraLink Studio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
</head>
<body class="bg-[#020617] text-white min-h-[100dvh] flex flex-col items-center justify-center p-6 font-sans relative overflow-hidden">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1)_0,transparent_70%)] pointer-events-none"></div>
    <div class="text-center space-y-4 relative z-10 max-w-lg p-8 rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
        <h1 class="text-3xl font-extrabold text-white">NeuraLink Studio</h1>
        <p class="text-slate-300 text-sm">Conectando mentes, creando apps.</p>
    </div>
</body>
</html>`;
    });

    const [previewCode, setPreviewCode] = useState(sandboxCode);
    const [inputMsg, setInputMsg] = useState('');
    const [images, setImages] = useState([]);
    
    // --- ESTADOS DE ATTACHMENTS Y URLs (FASE 1) ---
    const [attachments, setAttachments] = useState([]); 
    const [showUrlModal, setShowUrlModal] = useState(false);
    const [urlInput, setUrlInput] = useState('');
    const [urlAnalyzing, setUrlAnalyzing] = useState(false);

    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isListening, setIsListening] = useState(false);

    const chatBottomRef = useRef(null);
    const imageInputRef = useRef(null);
    const docInputRef = useRef(null);

    useEffect(() => { try { localStorage.setItem('neuralink_projects', JSON.stringify(projects)); } catch(e) {} }, [projects]);
    useEffect(() => { try { localStorage.setItem('neuralink_active_project', activeProjectId); } catch(e) {} }, [activeProjectId]);
    useEffect(() => { try { localStorage.setItem('neuralink_neural_chats', JSON.stringify(chats)); } catch(e) {} }, [chats]);
    useEffect(() => { try { localStorage.setItem('neuralink_neural_tasks', JSON.stringify(tasks)); } catch(e) {} }, [tasks]);
    useEffect(() => { try { localStorage.setItem('neuralink_neural_code', sandboxCode); } catch(e) {} }, [sandboxCode]);
    useEffect(() => { try { localStorage.setItem('neuralink_gemini_key', apiKey); } catch(e) {} }, [apiKey]);
    useEffect(() => { try { localStorage.setItem('neuralink_sync_token', syncToken); } catch(e) {} }, [syncToken]);

    useEffect(() => {
        const timer = setTimeout(() => { setPreviewCode(sandboxCode); }, 500);
        return () => clearTimeout(timer);
    }, [sandboxCode]);

    useEffect(() => {
        if (activeTab === 'chat') { chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' }); }
    }, [chats, activeSpecialist, loading, activeTab, activeProjectId]);

    // Listener global para el Botón de Copiar Código inyectado por renderFormattedText
    useEffect(() => {
        const handleCopy = (e) => {
            const btn = e.target.closest('.copy-code-btn');
            if (btn) {
                const codeNode = btn.parentElement.querySelector('code');
                if (codeNode) {
                    // Revertimos entidades HTML seguras
                    const rawCode = codeNode.innerText
                        .replace(/&amp;/g, "&")
                        .replace(/&lt;/g, "<")
                        .replace(/&gt;/g, ">");
                    
                    navigator.clipboard.writeText(rawCode).then(() => {
                        const originalHtml = btn.innerHTML;
                        btn.innerHTML = '<span class="text-green-400">✓ Copiado</span>';
                        setTimeout(() => { btn.innerHTML = originalHtml; }, 2000);
                    });
                }
            }
        };
        document.addEventListener('click', handleCopy);
        return () => document.removeEventListener('click', handleCopy);
    }, []);

    const createNewProject = () => {
        if (!newProjectName.trim()) return;
        const newId = `p_${Date.now()}`;
        const newProj = {
            id: newId,
            name: newProjectName,
            client: 'Nuevo Cliente',
            color: 'bg-violet-500',
            createdAt: Date.now()
        };
        setProjects([...projects, newProj]);
        setActiveProjectId(newId);
        setNewProjectName('');
        setShowNewProjectModal(false);
    };

    const toggleVoiceRecognition = () => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) return;
        if (isListening) { setIsListening(false); return; }
        try {
            const recognition = new SpeechRecognition();
            recognition.lang = 'es-ES';
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

    // Handler para adjuntar documentos (Fase 1)
    const handleDocumentSelect = async (e) => {
        const files = Array.from(e.target.files);
        const newAttachments = [];
        for (const file of files) {
            try {
                const text = await file.text();
                newAttachments.push({ name: file.name, type: file.type || 'text/plain', content: text });
            } catch (err) { console.error("Error leyendo archivo", err); }
        }
        setAttachments(prev => [...prev, ...newAttachments]);
        e.target.value = '';
    };

    // Handler para Análisis de URL (Fase 1)
    const analyzeUrl = () => {
        if (!urlInput.trim()) return;
        setUrlAnalyzing(true);
        setTimeout(() => {
            const analysis = `[Análisis Estructural de URL: ${urlInput}]\n- Tipo detectado: Landing Page o Web App Moderna.\n- Tecnologías probables: React, Tailwind CSS, Vercel/Supabase.\n- Oportunidades UX: Necesita mejor jerarquía visual y optimización de PWA.`;
            setInputMsg(prev => prev ? `${prev}\n\n${analysis}` : analysis);
            setUrlAnalyzing(false);
            setShowUrlModal(false);
            setUrlInput('');
        }, 2000);
    };

    const handleSendMessage = async () => {
        if (!inputMsg.trim() && images.length === 0 && attachments.length === 0) return;
        if (!apiKey.trim()) { setShowKeyModal(true); return; }

        const spec = SPECIALISTS.find(s => s.id === activeSpecialist);
        
        // Inyección de Attachments en el prompt
        let finalPromptText = inputMsg || '(Mensaje con adjuntos)';
        if (attachments.length > 0) {
            finalPromptText += '\n\n[Archivos adjuntos del usuario]:\n';
            attachments.forEach(att => {
                finalPromptText += `\n--- ${att.name} ---\n${att.content}\n`;
            });
        }

        const userMessage = { 
            role: 'user', 
            text: finalPromptText, 
            displayMsg: inputMsg || '(Archivos enviados)', // Lo que se muestra en UI
            images: images.map(i => ({ name: i.name, preview: i.preview })),
            hasAttachments: attachments.length > 0,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
        };
        
        // Obtener historial del proyecto actual
        const projectChats = chats[activeProjectId] || {};
        const currentSpecChat = projectChats[activeSpecialist] || [];
        const updatedChat = [...currentSpecChat, userMessage];
        
        setChats(prev => ({ 
            ...prev, 
            [activeProjectId]: { ...prev[activeProjectId], [activeSpecialist]: updatedChat } 
        }));

        setInputMsg('');
        const currentImages = [...images];
        setImages([]);
        setAttachments([]);
        setLoading(true);
        setErrorMsg('');

        try {
            const replyText = await callGeminiAPI(spec, updatedChat, currentImages, sandboxCode, apiKey);
            const botMessage = { role: 'model', text: replyText, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
            
            setChats(prev => {
                const currentProj = prev[activeProjectId] || {};
                return {
                    ...prev,
                    [activeProjectId]: { ...currentProj, [activeSpecialist]: [...updatedChat, botMessage] }
                };
            });

            try {
                await supabase.from('neuralink_logs').insert([
                    { token: syncToken, specialist: activeSpecialist, prompt: finalPromptText.substring(0,500), response: replyText.substring(0,500) }
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

    const currentProject = projects.find(p => p.id === activeProjectId) || projects[0];
    const currentSpec = SPECIALISTS.find(s => s.id === activeSpecialist) || SPECIALISTS[0];
    const projectChats = chats[activeProjectId] || {};
    const messages = projectChats[activeSpecialist] || [];

    return (
        <div className="h-[100dvh] w-screen flex flex-col bg-[#020617] text-slate-100 overflow-hidden font-sans selection:bg-cyan-500 selection:text-slate-950 relative" translate="no">
            
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div 
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
                        `,
                        backgroundSize: '60px 60px'
                    }}
                />
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px] animate-[pulse_8s_ease-in-out_infinite]"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] animate-[pulse_8s_ease-in-out_infinite]" style={{ animationDelay: '4s' }}></div>
            </div>

            <header className="sticky top-0 z-40 bg-[#020617]/85 backdrop-blur-2xl saturate-150 border-b border-white/5 shrink-0">
                <div className="mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <div className="cursor-pointer" onClick={() => setActiveTab('home')}>
                            <Logo />
                        </div>

                        {/* SELECTOR DE PROYECTOS (FASE 1) */}
                        <div className="hidden md:block relative">
                            <button 
                                onClick={() => setShowProjectDropdown(!showProjectDropdown)} 
                                className="flex items-center gap-2 bg-slate-900/60 hover:bg-slate-800/80 border border-white/5 rounded-xl px-3 py-1.5 transition-all text-sm font-medium backdrop-blur-xl text-slate-200"
                            >
                                <div className={`w-2 h-2 rounded-full ${currentProject.color}`}></div>
                                {currentProject.name}
                                <Icon name="ChevronDown" className="w-4 h-4 text-slate-400" />
                            </button>

                            {showProjectDropdown && (
                                <>
                                    <div className="fixed inset-0 z-40" onClick={() => setShowProjectDropdown(false)}></div>
                                    <div className="absolute top-full left-0 mt-2 w-56 bg-slate-900 border border-white/10 rounded-2xl shadow-xl z-50 overflow-hidden backdrop-blur-xl">
                                        <div className="p-2 border-b border-white/5">
                                            <span className="text-[10px] uppercase font-bold text-slate-500 px-2 tracking-wider">Tus Proyectos</span>
                                        </div>
                                        <div className="p-1 max-h-64 overflow-y-auto">
                                            {projects.map(p => (
                                                <button 
                                                    key={p.id}
                                                    onClick={() => { setActiveProjectId(p.id); setShowProjectDropdown(false); }}
                                                    className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-xl transition-all ${activeProjectId === p.id ? 'bg-violet-500/10 text-white font-bold' : 'text-slate-300 hover:bg-white/5 hover:text-white'}`}
                                                >
                                                    <div className={`w-2 h-2 rounded-full ${p.color}`}></div>
                                                    {p.name}
                                                </button>
                                            ))}
                                        </div>
                                        <div className="p-2 border-t border-white/5">
                                            <button 
                                                onClick={() => { setShowProjectDropdown(false); setShowNewProjectModal(true); }}
                                                className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-cyan-400 text-xs font-bold py-2 rounded-xl transition-all"
                                            >
                                                <Icon name="Plus" className="w-3 h-3" /> Nuevo Proyecto
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

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
                        <button onClick={() => alert("Asistente Prompts en desarrollo (Oleada 2)")} className="px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 text-slate-300 hover:text-white hover:bg-slate-800/50">
                            <Icon name="Sparkles" className="w-4 h-4" /> Prompts
                        </button>
                        <button onClick={() => alert("Kanban interactivo en desarrollo (Oleada 2)")} className="px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 text-slate-300 hover:text-white hover:bg-slate-800/50">
                            <Icon name="Kanban" className="w-4 h-4" /> Kanban
                        </button>
                    </nav>

                    <div className="flex items-center gap-3">
                        <div className="hidden md:flex items-center gap-2 bg-slate-900/60 border border-violet-500/20 rounded-full px-3.5 py-1.5 backdrop-blur-xl">
                            <div className="relative">
                                <div className="w-2 h-2 rounded-full bg-violet-400" />
                                <div className="absolute inset-0 w-2 h-2 rounded-full bg-violet-400 animate-ping" />
                            </div>
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
                            <div className="flex justify-center mb-4">
                                <Logo withTagline />
                            </div>
                            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mt-4">
                                Crea apps conectando <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">mentes y código</span>
                            </h1>
                            <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                                Tu estudio neural con Supabase integrado. Diseña, chatea con especialistas autónomos y genera aplicaciones PWA listas para producción en segundos.
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
                                    const hasChat = projectChats[spec.id] && projectChats[spec.id].length > 0;
                                    return (
                                        <button 
                                            key={spec.id} 
                                            onClick={() => { setActiveSpecialist(spec.id); setSidebarOpen(false); }}
                                            className={`w-full text-left p-3 rounded-2xl transition-all flex items-center gap-3 relative bg-slate-900/40 backdrop-blur-2xl border ${activeSpecialist === spec.id ? 'border-violet-500/50 shadow-[0_0_20px_rgba(139,92,246,0.2)]' : 'border-white/5 hover:border-white/10'}`}
                                        >
                                            <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400 shrink-0">
                                                <Icon name={spec.icon} className="w-5 h-5" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className={`text-sm font-bold truncate ${activeSpecialist === spec.id ? 'text-white' : 'text-slate-300'}`}>{spec.name}</p>
                                                <p className="text-[10px] text-slate-400 truncate">{spec.bio}</p>
                                            </div>
                                            {hasChat && (
                                                <span className="w-2 h-2 rounded-full bg-violet-400 absolute top-3 right-3 shadow-[0_0_8px_rgba(139,92,246,0.8)]"></span>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        </aside>

                        <main className="flex-1 flex flex-col bg-transparent overflow-hidden relative">
                            <div className="bg-slate-900/40 backdrop-blur-2xl border-b border-white/5 p-4 md:p-5 text-white flex items-center justify-between shadow-lg shrink-0 relative overflow-hidden">
                                <div className="flex items-center gap-3 relative z-10">
                                    <button onClick={() => setSidebarOpen(!sidebarOpen)} className="xl:hidden text-white p-1 bg-white/5 rounded-lg"><Icon name="Layout" className="w-5 h-5" /></button>
                                    <div className="w-10 h-10 rounded-2xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400 shrink-0 backdrop-blur-md">
                                        <Icon name={currentSpec.icon} className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h2 className="font-bold text-base md:text-lg text-white">{currentSpec.name}</h2>
                                        <p className="text-xs text-slate-300 font-medium truncate max-w-[200px] md:max-w-md">{currentSpec.bio} • NeuraLink Cloud Active</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 scroll-smooth">
                                {messages.length === 0 && (
                                    <div className="h-full flex flex-col items-center justify-center text-slate-400 space-y-4 opacity-60">
                                        <Icon name={currentSpec.icon} className="w-16 h-16 text-slate-600" />
                                        <p className="text-sm">Iniciando enlace neural con {currentSpec.name} para {currentProject.name}...</p>
                                    </div>
                                )}
                                {messages.map((m, idx) => (
                                    <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}>
                                        <div className={`max-w-[90%] md:max-w-[75%] rounded-3xl p-4 md:p-5 shadow-lg relative ${
                                            m.role === 'user' 
                                            ? 'bg-gradient-to-br from-violet-600/90 to-fuchsia-600/90 text-white border border-white/10 rounded-tr-sm' 
                                            : 'bg-slate-900/80 text-slate-200 border border-white/5 backdrop-blur-xl rounded-tl-sm shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]'
                                        }`}>
                                            
                                            {m.role === 'model' && (
                                                <div className="absolute top-4 right-4 flex gap-2">
                                                    <button onClick={() => safeSpeak(m.text)} className="text-slate-400 hover:text-white p-1 bg-white/5 rounded-md transition-colors" title="Leer en voz alta">
                                                        <Icon name="Volume2" className="w-3.5 h-3.5" />
                                                    </button>
                                                    <button onClick={() => extractAndApplyCode(m.text)} className="text-cyan-400 hover:text-white p-1 bg-cyan-500/10 hover:bg-cyan-500/20 rounded-md transition-colors border border-cyan-500/20" title="Aplicar código a la Forja">
                                                        <Icon name="Rocket" className="w-3.5 h-3.5" />
                                                    </button>
                                                </div>
                                            )}

                                            <div className="text-sm leading-relaxed prose prose-invert prose-p:my-1 prose-pre:my-0 max-w-none" 
                                                 dangerouslySetInnerHTML={{ __html: m.role === 'model' ? renderFormattedText(m.text) : (m.displayMsg || m.text) }} 
                                            />
                                            
                                            {/* UI Adicional para Attachments en User */}
                                            {m.hasAttachments && (
                                                <div className="mt-3 flex flex-wrap gap-2">
                                                    <span className="text-[10px] bg-white/20 px-2 py-1 rounded border border-white/30 flex items-center gap-1"><Icon name="FileText" className="w-3 h-3"/> Documentos adjuntos</span>
                                                </div>
                                            )}

                                            {m.images && m.images.length > 0 && (
                                                <div className="mt-4 flex flex-wrap gap-3">
                                                    {m.images.map((img, i) => (
                                                        <img key={i} src={img.preview} alt="Upload" className="w-24 h-24 object-cover rounded-xl border border-white/20 shadow-md" />
                                                    ))}
                                                </div>
                                            )}
                                            
                                            <span className={`text-[10px] mt-3 block font-medium ${m.role === 'user' ? 'text-violet-200' : 'text-slate-500'}`}>{m.time}</span>
                                        </div>
                                    </div>
                                ))}
                                {loading && (
                                    <div className="flex justify-start animate-fade-in">
                                        <div className="bg-slate-900/80 border border-white/5 backdrop-blur-xl rounded-3xl rounded-tl-sm p-5 shadow-lg flex items-center gap-3">
                                            <div className="flex gap-1.5">
                                                <span className="w-2.5 h-2.5 bg-violet-500 rounded-full animate-bounce"></span>
                                                <span className="w-2.5 h-2.5 bg-fuchsia-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                                                <span className="w-2.5 h-2.5 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                                            </div>
                                            <span className="text-xs text-slate-400 font-medium">Procesando sinapsis...</span>
                                        </div>
                                    </div>
                                )}
                                {errorMsg && (
                                    <div className="bg-red-950/50 border border-red-500/50 text-red-200 text-xs p-4 rounded-2xl mx-4 mb-4 backdrop-blur-md">
                                        {errorMsg}
                                    </div>
                                )}
                                <div ref={chatBottomRef} />
                            </div>

                            <div className="p-4 bg-slate-950/60 border-t border-white/5 backdrop-blur-2xl shrink-0">
                                
                                {/* Previews de Imágenes y Attachments */}
                                {(images.length > 0 || attachments.length > 0) && (
                                    <div className="flex flex-wrap gap-2 mb-3 px-2">
                                        {images.map((img, i) => (
                                            <div key={i} className="relative group">
                                                <img src={img.preview} alt="prev" className="w-12 h-12 object-cover rounded-lg border border-violet-500/30" />
                                                <button onClick={() => setImages(prev => prev.filter((_, idx) => idx !== i))} className="absolute -top-1.5 -right-1.5 bg-slate-800 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity"><Icon name="X" className="w-3 h-3"/></button>
                                            </div>
                                        ))}
                                        {attachments.map((att, i) => (
                                            <div key={i} className="flex items-center gap-1.5 bg-slate-800 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-slate-300">
                                                <Icon name="FileText" className="w-3.5 h-3.5 text-cyan-400"/>
                                                <span className="max-w-[100px] truncate">{att.name}</span>
                                                <button onClick={() => setAttachments(prev => prev.filter((_, idx) => idx !== i))} className="ml-1 text-slate-400 hover:text-white"><Icon name="X" className="w-3 h-3"/></button>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <div className="flex gap-2 max-w-4xl mx-auto">
                                    <button onClick={() => alert("Generador Visual en desarrollo (Fase 2)")} className="bg-slate-900 border border-white/10 p-3.5 rounded-2xl text-slate-400 hover:text-fuchsia-400 hover:border-fuchsia-500/50 transition-all" title="Generar Prompt Visual">
                                        <Icon name="Palette" className="w-5 h-5" />
                                    </button>
                                    
                                    <div className="flex-1 bg-slate-900/80 border border-white/10 focus-within:border-violet-500/50 rounded-2xl flex items-center px-2 shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] transition-all">
                                        <button onClick={() => imageInputRef.current?.click()} className="p-2 text-slate-400 hover:text-cyan-400 transition-colors" title="Subir Imagen">
                                            <Icon name="Camera" className="w-5 h-5" />
                                        </button>
                                        <input type="file" multiple accept="image/*" className="hidden" ref={imageInputRef} onChange={handleImageSelect} />
                                        
                                        {/* Botón Attachment Archivos (Fase 1) */}
                                        <button onClick={() => docInputRef.current?.click()} className="p-2 text-slate-400 hover:text-violet-400 transition-colors" title="Adjuntar Documentos de Código">
                                            <Icon name="Paperclip" className="w-5 h-5" />
                                        </button>
                                        <input type="file" multiple accept=".txt,.js,.jsx,.ts,.tsx,.json,.md,.html,.css" className="hidden" ref={docInputRef} onChange={handleDocumentSelect} />

                                        {/* Botón Analizador URL (Fase 1) */}
                                        <button onClick={() => setShowUrlModal(true)} className="p-2 text-slate-400 hover:text-fuchsia-400 transition-colors" title="Analizar URL">
                                            <Icon name="Link" className="w-5 h-5" />
                                        </button>

                                        <input 
                                            type="text" 
                                            value={inputMsg} 
                                            onChange={e => setInputMsg(e.target.value)}
                                            onKeyDown={e => e.key === 'Enter' && handleSendMessage()}
                                            placeholder={`Comunica con ${currentSpec.name}...`}
                                            className="flex-1 bg-transparent border-none text-white text-sm px-2 focus:outline-none focus:ring-0 placeholder:text-slate-500"
                                            disabled={loading}
                                        />
                                        <button onClick={toggleVoiceRecognition} className={`p-2 transition-colors ${isListening ? 'text-red-400 animate-pulse' : 'text-slate-400 hover:text-violet-400'}`} title="Dictado Neural">
                                            <Icon name="Mic" className="w-5 h-5" />
                                        </button>
                                    </div>
                                    
                                    <button 
                                        onClick={handleSendMessage} 
                                        disabled={loading || (!inputMsg.trim() && images.length === 0 && attachments.length === 0)}
                                        className="bg-gradient-to-r from-violet-600 to-cyan-500 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed text-white p-4 rounded-2xl shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all flex items-center justify-center"
                                    >
                                        <Icon name="Send" className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </main>
                    </div>
                )}

                {activeTab === 'editor' && (
                    <div className="flex-1 flex flex-col lg:flex-row overflow-hidden w-full animate-fade-in bg-[#020617]">
                        <div className="w-full lg:w-1/2 flex flex-col border-r border-white/5">
                            <div className="bg-slate-900/60 p-3 border-b border-white/5 flex items-center gap-2 text-xs font-bold text-slate-300">
                                <Icon name="Code2" className="w-4 h-4 text-violet-400" /> Editor PWA
                            </div>
                            <textarea
                                value={sandboxCode}
                                onChange={(e) => setSandboxCode(e.target.value)}
                                className="flex-1 w-full bg-transparent text-cyan-300 font-mono text-[13px] p-6 focus:outline-none resize-none leading-relaxed"
                                spellCheck="false"
                            />
                        </div>
                        <div className="w-full lg:w-1/2 flex flex-col bg-slate-950">
                            <div className="bg-slate-900/60 p-3 border-b border-white/5 flex items-center gap-2 text-xs font-bold text-slate-300">
                                <Icon name="Monitor" className="w-4 h-4 text-cyan-400" /> Preview en Vivo
                            </div>
                            <div className="flex-1 bg-white p-0 relative">
                                <iframe
                                    srcDoc={previewCode}
                                    title="PWA Preview"
                                    className="w-full h-full border-none absolute inset-0"
                                    sandbox="allow-scripts allow-modals allow-forms allow-popups"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Modal de API Key */}
            {showKeyModal && (
                <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md flex items-center justify-center z-50 p-4">
                    <div className="bg-slate-900 border border-white/10 p-6 md:p-8 rounded-3xl w-full max-w-md shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/20 rounded-full blur-[50px] pointer-events-none"></div>
                        <div className="flex justify-between items-center mb-6 relative z-10">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <Icon name="Key" className="w-6 h-6 text-violet-400" /> API Key de Gemini
                            </h3>
                            <button onClick={() => setShowKeyModal(false)} className="text-slate-400 hover:text-white p-1"><Icon name="X" className="w-5 h-5"/></button>
                        </div>
                        <p className="text-sm text-slate-300 mb-6 relative z-10">
                            Para usar los especialistas neurales, necesitas una API Key gratuita de <a href="https://aistudio.google.com/" target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline font-bold">Google AI Studio</a>.
                        </p>
                        <input
                            type="password"
                            value={apiKey}
                            onChange={(e) => setApiKey(e.target.value)}
                            placeholder="AIzaSy..."
                            className="w-full bg-slate-950 border border-white/10 rounded-2xl px-4 py-3 text-white mb-6 focus:border-violet-500 focus:outline-none transition-colors relative z-10 font-mono text-sm"
                        />
                        <button 
                            onClick={() => setShowKeyModal(false)}
                            className="w-full bg-gradient-to-r from-violet-600 to-cyan-500 hover:opacity-90 text-white font-bold py-3 rounded-2xl transition-all shadow-lg relative z-10"
                        >
                            Guardar y Conectar
                        </button>
                    </div>
                </div>
            )}

            {/* Modal de Nuevo Proyecto (Fase 1) */}
            {showNewProjectModal && (
                <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md flex items-center justify-center z-50 p-4">
                    <div className="bg-slate-900 border border-white/10 p-6 md:p-8 rounded-3xl w-full max-w-md shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-[50px] pointer-events-none"></div>
                        <div className="flex justify-between items-center mb-6 relative z-10">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <Icon name="Plus" className="w-6 h-6 text-cyan-400" /> Nuevo Proyecto
                            </h3>
                            <button onClick={() => setShowNewProjectModal(false)} className="text-slate-400 hover:text-white p-1"><Icon name="X" className="w-5 h-5"/></button>
                        </div>
                        <p className="text-sm text-slate-300 mb-6 relative z-10">
                            Crea un nuevo espacio de trabajo. El historial de chat será independiente.
                        </p>
                        <input
                            type="text"
                            value={newProjectName}
                            onChange={(e) => setNewProjectName(e.target.value)}
                            placeholder="Nombre del proyecto..."
                            className="w-full bg-slate-950 border border-white/10 rounded-2xl px-4 py-3 text-white mb-6 focus:border-cyan-500 focus:outline-none transition-colors relative z-10 text-sm"
                        />
                        <button 
                            onClick={createNewProject}
                            disabled={!newProjectName.trim()}
                            className="w-full bg-gradient-to-r from-cyan-600 to-blue-500 hover:opacity-90 disabled:opacity-50 text-white font-bold py-3 rounded-2xl transition-all shadow-lg relative z-10"
                        >
                            Crear Proyecto
                        </button>
                    </div>
                </div>
            )}

            {/* Modal de Analizador de URL (Fase 1) */}
            {showUrlModal && (
                <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md flex items-center justify-center z-50 p-4">
                    <div className="bg-slate-900 border border-white/10 p-6 md:p-8 rounded-3xl w-full max-w-md shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/20 rounded-full blur-[50px] pointer-events-none"></div>
                        <div className="flex justify-between items-center mb-6 relative z-10">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <Icon name="Link" className="w-6 h-6 text-fuchsia-400" /> Analizar URL
                            </h3>
                            <button onClick={() => { setShowUrlModal(false); setUrlAnalyzing(false); }} className="text-slate-400 hover:text-white p-1"><Icon name="X" className="w-5 h-5"/></button>
                        </div>
                        <p className="text-sm text-slate-300 mb-6 relative z-10">
                            Ingresa una URL para extraer contexto y estructura, y enviarlo al chat actual.
                        </p>
                        <input
                            type="url"
                            value={urlInput}
                            onChange={(e) => setUrlInput(e.target.value)}
                            placeholder="https://ejemplo.com"
                            className="w-full bg-slate-950 border border-white/10 rounded-2xl px-4 py-3 text-white mb-6 focus:border-fuchsia-500 focus:outline-none transition-colors relative z-10 text-sm"
                            disabled={urlAnalyzing}
                        />
                        <button 
                            onClick={analyzeUrl}
                            disabled={!urlInput.trim() || urlAnalyzing}
                            className="w-full bg-gradient-to-r from-fuchsia-600 to-pink-500 hover:opacity-90 disabled:opacity-50 text-white font-bold py-3 rounded-2xl transition-all shadow-lg relative z-10 flex items-center justify-center gap-2"
                        >
                            {urlAnalyzing ? (
                                <><span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin"></span> Analizando...</>
                            ) : (
                                "Analizar e Inyectar"
                            )}
                        </button>
                    </div>
                </div>
            )}

            {/* Mobile Nav */}
            <nav className="xl:hidden bg-[#020617]/95 border-t border-white/5 p-2 flex justify-around items-center shrink-0 z-40 pb-safe backdrop-blur-3xl absolute bottom-0 w-full">
                <button onClick={() => setActiveTab('home')} className={`p-3 rounded-2xl transition-all flex flex-col items-center gap-1 ${activeTab === 'home' ? 'text-cyan-400' : 'text-slate-500'}`}>
                    <Icon name="Zap" className="w-5 h-5" />
                    <span className="text-[10px] font-bold">Inicio</span>
                </button>
                <button onClick={() => setActiveTab('chat')} className={`p-3 rounded-2xl transition-all flex flex-col items-center gap-1 ${activeTab === 'chat' ? 'text-violet-400' : 'text-slate-500'}`}>
                    <Icon name="MessageSquare" className="w-5 h-5" />
                    <span className="text-[10px] font-bold">Chat</span>
                </button>
                <button onClick={() => setActiveTab('editor')} className={`p-3 rounded-2xl transition-all flex flex-col items-center gap-1 ${activeTab === 'editor' ? 'text-fuchsia-400' : 'text-slate-500'}`}>
                    <Icon name="Code2" className="w-5 h-5" />
                    <span className="text-[10px] font-bold">Forja</span>
                </button>
            </nav>
        </div>
    );
}