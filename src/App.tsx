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
        case 'Copy': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>;
        case 'Trash2': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>;
        case 'Smartphone': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><line x1="12" x2="12.01" y1="18" y2="18"/></svg>;
        case 'Download': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>;
        case 'Monitor': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>;
        case 'X': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>;
        case 'Check': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>;
        case 'Clock': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
        case 'Plus': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></svg>;
        case 'ArrowRight': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>;
        case 'ArrowLeft': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="19" x2="5" y1="12" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>;
        case 'UserCog': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><circle cx="19" cy="11" r="2"/><path d="M19 8v1"/><path d="M19 13v1"/><path d="M21.5 9.5h-1"/><path d="M17.5 12.5h-1"/></svg>;
        case 'ImageIcon': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>;
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
    { id: 'director', name: 'Director Neural', icon: 'Brain', color: 'from-indigo-600 to-purple-600', bio: 'Liderazgo y estrategia autónoma', system: 'Eres el Director Neural de WebForge OS. Lideras la arquitectura de software futurista, coordinas al equipo técnico y tomas decisiones ejecutivas. Responde en español con visión disruptiva, ejecutiva y precisa.' },
    { id: 'architect', name: 'Arquitecto Cuántico', icon: 'Building2', color: 'from-violet-600 to-purple-600', bio: 'Estructuras PWA y escalabilidad', system: 'Eres el Arquitecto Cuántico senior. Diseñas estructuras web ultraligeras, seguras y optimizadas para celulares. Responde en español con rigor técnico avanzado.' },
    { id: 'security', name: 'Ciberseguridad', icon: 'Shield', color: 'from-blue-600 to-cyan-600', bio: 'Protección y robustez frontend', system: 'Eres experto en ciberseguridad web y protección de datos. Aseguras que cada línea sea robusta y resistente a ataques.' },
    { id: 'backend', name: 'Nube de Backend', icon: 'Cloud', color: 'from-teal-600 to-green-600', bio: 'APIs, estado y persistencia Supabase', system: 'Eres experto en sincronización Supabase, persistencia neural cloud y optimización de rendimiento web. Responde en español técnico.' },
    { id: 'designer', name: 'Diseñador UI/UX', icon: 'Palette', color: 'from-pink-600 to-rose-600', bio: 'Estética neón y UX inmersiva', system: 'Eres Diseñador UI/UX experto en estética cyberpunk, gradientes cian/violeta y usabilidad móvil impecable. Responde en español.' },
    { id: 'seo', name: 'Especialista SEO y PWA', icon: 'Search', color: 'from-green-600 to-emerald-600', bio: 'Optimización y metadatos móviles', system: 'Eres experto en SEO técnico y conversión de webs en aplicaciones móviles nativas PWA. Responde en español.' },
    { id: 'marketing', name: 'Marketing Neuronal', icon: 'TrendingUp', color: 'from-orange-600 to-red-600', bio: 'Estrategia de impacto', system: 'Eres experto en Marketing Digital y propuestas de valor disruptivas. Responde en español.' }
];

const callGeminiAPI = async (specialist, messages, images = [], currentCode = '', apiKey = '') => {
    const key = apiKey || localStorage.getItem('webforge_gemini_key') || '';
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
            parts: [{ text: `[Contexto actual del código en la Forja Web]\n\`\`\`html\n${currentCode}\n\`\`\`` }]
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

const generateConceptImage = async (promptText, apiKey = '') => {
    const key = apiKey || localStorage.getItem('webforge_gemini_key') || '';
    if (!key) throw new Error('Se requiere API Key para generar imágenes.');
    const url = `https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-generate-001:predict?key=${key}`;
    const payload = {
        instances: { prompt: `Futuristic cyberpunk sci-fi UI design concept, glowing cyan and violet neon accents, extreme glassmorphism: ${promptText}` },
        parameters: { sampleCount: 1 }
    };
    const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });
    const result = await res.json();
    if (result.predictions && result.predictions[0]?.bytesBase64Encoded) {
        return `data:image/png;base64,${result.predictions[0].bytesBase64Encoded}`;
    }
    throw new Error('No se pudo generar la imagen conceptual.');
};

const fileToBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve({ data: reader.result.split(',')[1], mime: file.type });
    reader.onerror = reject;
    reader.readAsDataURL(file);
});

const renderFormattedText = (text) => {
    if (!text) return '';
    let formatted = text
        .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="bg-slate-950/90 p-3 rounded-2xl my-2 overflow-x-auto border border-cyan-500/20 text-xs font-mono text-cyan-300"><code>$2</code></pre>')
        .replace(/`([^`]+)`/g, '<code class="bg-slate-900 text-cyan-400 px-1.5 py-0.5 rounded text-xs font-mono border border-cyan-500/10">$1</code>')
        .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
        .replace(/\n\n/g, '</p><p class="mt-2">')
        .replace(/\n/g, '<br/>');
    return `<p>${formatted}</p>`;
};

export default function App() {
    const [apiKey, setApiKey] = useState(() => localStorage.getItem('webforge_gemini_key') || '');
    const [showKeyModal, setShowKeyModal] = useState(false);
    const [activeTab, setActiveTab] = useState('home');
    const [activeSpecialist, setActiveSpecialist] = useState('director');
    
    const [syncToken, setSyncToken] = useState(() => localStorage.getItem('webforge_sync_token') || '67P515');
    const [showSyncModal, setShowSyncModal] = useState(false);

    const [chats, setChats] = useState(() => {
        try {
            const saved = localStorage.getItem('webforge_neural_chats');
            if (saved) {
                const parsed = JSON.parse(saved);
                if (typeof parsed === 'object' && parsed !== null) return parsed;
            }
        } catch(e) {}
        return {};
    });
    
    const [tasks, setTasks] = useState(() => {
        try {
            const saved = localStorage.getItem('webforge_neural_tasks');
            return saved ? JSON.parse(saved) : [
                { id: 1, title: 'Definir arquitectura principal con Supabase', assignee: 'director', status: 'done' },
                { id: 2, title: 'Generar conceptos visuales con Neón Cyan', assignee: 'designer', status: 'progress' },
                { id: 3, title: 'Optimizar PWA y sincronización cloud', assignee: 'seo', status: 'todo' }
            ];
        } catch(e) { return []; }
    });
    
    const [generatedConcepts, setGeneratedConcepts] = useState(() => {
        try {
            const saved = localStorage.getItem('webforge_neural_concepts');
            return saved ? JSON.parse(saved) : [];
        } catch(e) { return []; }
    });

    const [sandboxCode, setSandboxCode] = useState(() => {
        return localStorage.getItem('webforge_neural_code') || `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WebForge Neural OS + Supabase App</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
    <link rel="manifest" href="data:application/manifest+json;charset=utf-8,%7B%22name%22%3A%22WebForgeSupabase%22%2C%22short_name%22%3A%22App%22%2C%22start_url%22%3A%22.%22%2C%22display%22%3A%22standalone%22%2C%22background_color%22%3A%22%23020617%22%2C%22theme_color%22%3A%22%2322d3ee%22%7D">
</head>
<body class="bg-[#020617] text-white min-h-[100dvh] flex flex-col items-center justify-center p-6 font-sans relative overflow-hidden">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.1)_0,transparent_70%)] pointer-events-none"></div>
    <div class="text-center space-y-4 relative z-10 max-w-lg p-8 rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
        <div class="w-16 h-16 bg-cyan-500/20 text-cyan-400 rounded-2xl mx-auto flex items-center justify-center text-3xl">⚡</div>
        <h1 class="text-3xl font-extrabold text-white">WebForge + Supabase</h1>
        <p class="text-slate-300 text-sm">Tu PWA conectada a Supabase (pkpyfpibdfpbxcabpyldj.supabase.co) está lista y operativa.</p>
        <button onclick="alert('¡Conexión a Supabase establecida exitosamente!')" class="w-full py-3 px-6 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all">Probar Supabase</button>
    </div>
</body>
</html>`;
    });

    const [previewCode, setPreviewCode] = useState(sandboxCode);

    const [wizardStep, setWizardStep] = useState(1);
    const [wizardData, setWizardData] = useState({ business: '', action: '', style: '', features: '' });
    const [masterPromptResult, setMasterPromptResult] = useState('');

    const [inputMsg, setInputMsg] = useState('');
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [customModalText, setCustomModalText] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [editorMobileView, setEditorMobileView] = useState('preview');
    const [isListening, setIsListening] = useState(false);
    const [isGeneratingImage, setIsGeneratingImage] = useState(false);

    useEffect(() => {
        try { localStorage.setItem('webforge_neural_chats', JSON.stringify(chats)); } catch(e) {}
    }, [chats]);

    useEffect(() => {
        try { localStorage.setItem('webforge_neural_tasks', JSON.stringify(tasks)); } catch(e) {}
    }, [tasks]);

    useEffect(() => {
        try { localStorage.setItem('webforge_neural_concepts', JSON.stringify(generatedConcepts)); } catch(e) {}
    }, [generatedConcepts]);

    useEffect(() => {
        try { localStorage.setItem('webforge_neural_code', sandboxCode); } catch(e) {}
    }, [sandboxCode]);

    useEffect(() => {
        try { localStorage.setItem('webforge_gemini_key', apiKey); } catch(e) {}
    }, [apiKey]);

    useEffect(() => {
        try { localStorage.setItem('webforge_sync_token', syncToken); } catch(e) {}
    }, [syncToken]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setPreviewCode(sandboxCode);
        }, 500);
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
        if (!SpeechRecognition) {
            setCustomModalText('Tu navegador no soporta reconocimiento de voz nativo.');
            return;
        }
        if (isListening) {
            setIsListening(false);
            return;
        }
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
        } catch(e) {
            setIsListening(false);
            setCustomModalText('No se pudo iniciar el reconocimiento de voz.');
        }
    };

    const handleImageSelect = async (e) => {
        const files = Array.from(e.target.files);
        const processed = await Promise.all(files.map(fileToBase64));
        setImages(prev => [...prev, ...processed.map((p, i) => ({ ...p, name: files[i].name, preview: URL.createObjectURL(files[i]) }))]);
        e.target.value = '';
    };

    const removeImage = (idx) => setImages(prev => prev.filter((_, i) => i !== idx));

    const handleSendMessage = async () => {
        if (!inputMsg.trim() && images.length === 0) return;
        if (!apiKey.trim()) {
            setShowKeyModal(true);
            return;
        }

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
                await supabase.from('webforge_logs').insert([
                    { token: syncToken, specialist: activeSpecialist, prompt: promptText, response: replyText }
                ]);
            } catch(dbErr) {}

        } catch (err) {
            setErrorMsg(`Error: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    const handleGenerateVisualConcept = async () => {
        if (!apiKey.trim()) {
            setShowKeyModal(true);
            return;
        }
        setIsGeneratingImage(true);
        try {
            const prompt = inputMsg || "Futuristic cyberpunk sci-fi web application dashboard with glowing neon cyan and violet accents, high tech HUD interface";
            const imgUrl = await generateConceptImage(prompt, apiKey);
            
            const newConcept = { id: Date.now(), prompt, url: imgUrl, time: new Date().toLocaleTimeString() };
            setGeneratedConcepts(prev => [newConcept, ...prev]);
            
            const injectionSnippet = `\n<!-- Concepto Visual Generado: ${prompt} -->\n<div class="my-6 p-4 rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] text-center">\n    <img src="${imgUrl}" alt="Concepto" class="w-full h-64 object-cover rounded-2xl mb-3 border border-white/10">\n    <p class="text-xs text-cyan-400 font-mono italic">"${prompt}"</p>\n</div>\n`;
            setSandboxCode(prev => prev.replace('</body>', `${injectionSnippet}\n</body>`));

            setActiveTab('editor');
            setCustomModalText('¡Concepto visual generado e inyectado automáticamente en la Forja Web!');
        } catch(e) {
            setCustomModalText(`Error al generar imagen: ${e.message}`);
        } finally {
            setIsGeneratingImage(false);
        }
    };

    const injectSpecificConcept = (imgUrl, prompt) => {
        const injectionSnippet = `\n<!-- Concepto Visual: ${prompt} -->\n<div class="my-6 p-4 rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] text-center">\n    <img src="${imgUrl}" alt="Concepto" class="w-full h-64 object-cover rounded-2xl mb-3 border border-white/10">\n    <p class="text-xs text-cyan-400 font-mono italic">"${prompt}"</p>\n</div>\n`;
        setSandboxCode(prev => prev.replace('</body>', `${injectionSnippet}\n</body>`));
        setActiveTab('editor');
        setCustomModalText('¡Concepto inyectado en la Forja Web con éxito!');
    };

    const extractAndApplyCode = (text) => {
        const codeMatch = text.match(/```(?:html|xml)?\n([\s\S]*?)```/);
        if (codeMatch && codeMatch[1]) {
            setSandboxCode(codeMatch[1]);
            setActiveTab('editor');
            setCustomModalText('¡Código aplicado exitosamente a la Forja Web!');
        } else {
            setCustomModalText('No se encontró bloque de código HTML ejecutable en este mensaje.');
        }
    };

    const downloadHTMLFile = () => {
        const blob = new Blob([sandboxCode], { type: 'text/html;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `webforge_supabase_${Date.now()}.html`;
        a.click();
        URL.revokeObjectURL(url);
    };

    const generateMasterPrompt = () => {
        const structured = `Actúa como un Arquitecto de Software Senior y Desarrollador Frontend experto. Tu único objetivo es generar una aplicación web interactiva completa, autocontenida y funcional (usando HTML5, JavaScript moderno, Supabase y Tailwind CSS vía CDN) basada en los siguientes requerimientos del cliente:\n\n1. Negocio o Proyecto: ${wizardData.business || 'No especificado'}\n2. Acción Principal del Usuario: ${wizardData.action || 'No especificado'}\n3. Estilo Visual y Colores: ${wizardData.style || 'Cibernético / Neón'}\n4. Secciones o Funciones Requeridas: ${wizardData.features || 'No especificado'}\n\nRequerimientos técnicos:\n- Todo el código debe estar en un único archivo ejecutable.\n- Diseño moderno, oscuro, estético y responsivo optimizado para móviles.\n- Sin placeholders ni código incompleto.`;
        setMasterPromptResult(structured);
        setWizardStep(5);
    };

    const copyMasterPrompt = () => {
        navigator.clipboard.writeText(masterPromptResult);
        setCustomModalText('¡Prompt Maestro copiado al portapapeles!');
    };

    const sendPromptToDirector = () => {
        setInputMsg(masterPromptResult);
        setActiveSpecialist('director');
        setActiveTab('chat');
        setCustomModalText('¡Prompt Maestro enviado al chat con el Director Neural!');
    };

    const currentSpec = SPECIALISTS.find(s => s.id === activeSpecialist) || SPECIALISTS[0];
    const messages = chats[activeSpecialist] || [];

    return (
        <div className="h-[100dvh] w-screen flex flex-col bg-[#020617] text-slate-100 overflow-hidden font-sans selection:bg-cyan-500 selection:text-slate-950 relative" translate="no">
            
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div 
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(34, 211, 238, 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(34, 211, 238, 0.3) 1px, transparent 1px)
                        `,
                        backgroundSize: '60px 60px'
                    }}
                />
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] animate-[pulse_8s_ease-in-out_infinite]"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px] animate-[pulse_8s_ease-in-out_infinite]" style={{ animationDelay: '4s' }}></div>
            </div>

            <header className="sticky top-0 z-40 bg-[#020617]/80 backdrop-blur-2xl saturate-150 border-b border-white/5 shrink-0">
                <div className="mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
                    
                    <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('home')}>
                        <div className="bg-gradient-to-tr from-cyan-500 to-violet-600 p-2.5 rounded-2xl border border-white/5 text-white shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                            <Icon name="Zap" className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <span className="font-extrabold text-base lg:text-xl bg-gradient-to-r from-cyan-300 via-indigo-300 to-pink-400 bg-clip-text text-transparent">
                                WebForge + Supabase
                            </span>
                            <span className="text-[10px] text-cyan-400 font-medium flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span> Supabase Cloud Conectado
                            </span>
                        </div>
                    </div>

                    <nav className="hidden xl:flex items-center gap-2 bg-slate-900/40 p-1.5 rounded-2xl border border-white/5 backdrop-blur-2xl">
                        <button onClick={() => setActiveTab('home')} className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${activeTab === 'home' ? 'bg-cyan-500 text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.4)]' : 'text-slate-300 hover:text-white hover:bg-slate-800/50'}`}>
                            <Icon name="Zap" className="w-4 h-4" /> Inicio
                        </button>
                        <button onClick={() => setActiveTab('chat')} className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${activeTab === 'chat' ? 'bg-cyan-500 text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.4)]' : 'text-slate-300 hover:text-white hover:bg-slate-800/50'}`}>
                            <Icon name="MessageSquare" className="w-4 h-4" /> Chat Neural
                        </button>
                        <button onClick={() => setActiveTab('prompts')} className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${activeTab === 'prompts' ? 'bg-cyan-500 text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.4)]' : 'text-slate-300 hover:text-white hover:bg-slate-800/50'}`}>
                            <Icon name="Sparkles" className="w-4 h-4" /> Asistente Prompts
                        </button>
                        <button onClick={() => setActiveTab('visuals')} className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${activeTab === 'visuals' ? 'bg-cyan-500 text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.4)]' : 'text-slate-300 hover:text-white hover:bg-slate-800/50'}`}>
                            <Icon name="Palette" className="w-4 h-4" /> Visuales IA
                        </button>
                        <button onClick={() => setActiveTab('kanban')} className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${activeTab === 'kanban' ? 'bg-cyan-500 text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.4)]' : 'text-slate-300 hover:text-white hover:bg-slate-800/50'}`}>
                            <Icon name="Kanban" className="w-4 h-4" /> Kanban
                        </button>
                        <button onClick={() => setActiveTab('editor')} className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${activeTab === 'editor' ? 'bg-cyan-500 text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.4)]' : 'text-slate-300 hover:text-white hover:bg-slate-800/50'}`}>
                            <Icon name="Code2" className="w-4 h-4" /> Forja & PWA
                        </button>
                    </nav>

                    <div className="flex items-center gap-3">
                        <div className="hidden md:flex items-center gap-2 bg-slate-900/60 border border-cyan-500/20 rounded-full px-3.5 py-1.5 backdrop-blur-xl">
                            <div className="relative">
                                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                                <div className="absolute inset-0 w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                            </div>
                            <span className="text-xs text-cyan-400 font-medium">Supabase Conectado</span>
                        </div>

                        <button onClick={() => setShowSyncModal(true)} className="bg-slate-900/40 hover:bg-slate-800/60 border border-white/5 text-xs px-3 py-2.5 rounded-xl font-mono text-cyan-400 transition-all flex items-center gap-1.5 backdrop-blur-xl">
                            <Icon name="Cloud" className="w-4 h-4" /> <span className="hidden sm:inline">Token:</span> <strong className="text-white">{syncToken}</strong>
                        </button>
                        <button onClick={() => setShowKeyModal(true)} className="bg-slate-900/40 hover:bg-slate-800/60 border border-white/5 text-xs px-3 py-2.5 rounded-xl font-medium text-slate-300 hover:text-white transition-all flex items-center gap-1.5 backdrop-blur-xl">
                            <Icon name="Key" className="w-4 h-4" /> <span className="hidden sm:inline">Clave API</span>
                        </button>
                    </div>
                </div>
            </header>

            <div className="flex-1 flex overflow-hidden relative w-full pb-16 xl:pb-0 z-10">
                {activeTab === 'home' && (
                    <div className="flex-1 overflow-y-auto scroll-smooth bg-transparent w-full animate-fade-in p-6">
                        <section className="max-w-5xl mx-auto pt-12 pb-8 text-center space-y-6">
                            <div className="inline-flex items-center gap-2 bg-slate-900/40 border border-white/5 px-4 py-1.5 rounded-full text-cyan-400 text-xs font-bold backdrop-blur-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
                                <Icon name="Sparkles" className="w-3 h-3 text-cyan-400" /> Supabase Integrado • pkpyfpibdfpbxcabpyldj.supabase.co
                            </div>
                            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
                                Forja con <span className="text-cyan-400">Supabase & IA</span>
                            </h1>
                            <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                                Tu base de datos en Supabase está conectada. Los especialistas neurales guardan tus registros en la nube y puedes crear aplicaciones PWA instalables en tu celular.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4 pt-4">
                                <button onClick={() => setActiveTab('chat')} className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-8 py-4 rounded-2xl hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all flex items-center gap-2">
                                    <Icon name="MessageSquare" className="w-5 h-5" /> Entrar al Chat Neural
                                </button>
                                <button onClick={() => setActiveTab('editor')} className="bg-slate-900/40 hover:bg-slate-800/60 text-slate-300 border border-white/5 px-8 py-4 rounded-2xl font-bold transition-all flex items-center gap-2 backdrop-blur-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
                                    <Icon name="Code2" className="w-5 h-5 text-cyan-400" /> Ver Forja PWA
                                </button>
                            </div>
                        </section>
                    </div>
                )}

                {activeTab === 'chat' && (
                    <div className="flex-1 flex overflow-hidden w-full animate-fade-in">
                        <aside className={`${sidebarOpen ? 'block absolute z-30 h-full' : 'hidden'} xl:block w-72 bg-[#020617]/90 backdrop-blur-2xl border-r border-white/5 flex flex-col shrink-0 overflow-y-auto`}>
                            <div className="p-4 border-b border-white/5 bg-slate-900/40 flex items-center justify-between sticky top-0 z-10 backdrop-blur-2xl">
                                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Especialistas Neurales</span>
                                {sidebarOpen && <button onClick={() => setSidebarOpen(false)} className="text-xs text-slate-400 hover:text-white"><Icon name="X" className="w-4 h-4" /></button>}
                            </div>
                            <div className="p-3 space-y-2">
                                {SPECIALISTS.map(spec => {
                                    const hasChat = chats[spec.id] && chats[spec.id].length > 0;
                                    return (
                                        <button 
                                            key={spec.id} 
                                            onClick={() => { setActiveSpecialist(spec.id); setSidebarOpen(false); }}
                                            className={`w-full text-left p-3 rounded-2xl transition-all flex items-center gap-3 relative bg-slate-900/40 backdrop-blur-2xl border ${activeSpecialist === spec.id ? 'border-cyan-500/50 shadow-[0_0_15px_rgba(34,211,238,0.15)]' : 'border-white/5 hover:border-white/10'}`}
                                        >
                                            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                                                <Icon name={spec.icon} className="w-5 h-5" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className={`text-sm font-bold truncate ${activeSpecialist === spec.id ? 'text-white' : 'text-slate-300'}`}>{spec.name}</p>
                                                <p className="text-[10px] text-slate-400 truncate">{spec.bio}</p>
                                            </div>
                                            {hasChat && (
                                                <span className="w-2 h-2 rounded-full bg-cyan-400 absolute top-3 right-3 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
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
                                    <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 backdrop-blur-md">
                                        <Icon name={currentSpec.icon} className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h2 className="font-bold text-base md:text-lg text-white">{currentSpec.name}</h2>
                                        <p className="text-xs text-slate-300 font-medium truncate max-w-[200px] md:max-w-md">{currentSpec.bio} • Supabase Cloud Active</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 scroll-smooth bg-transparent">
                                {messages.length === 0 && (
                                    <div className="h-full flex flex-col items-center justify-center text-center max-w-md mx-auto text-slate-300">
                                        <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 mx-auto">
                                            <Icon name={currentSpec.icon} className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">Inicia conversación con {currentSpec.name}</h3>
                                        <p className="text-sm text-slate-300 mb-6 leading-relaxed">{currentSpec.system}</p>
                                    </div>
                                )}

                                {messages.map((m, idx) => (
                                    <div key={idx} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                                        <div className={`max-w-3xl rounded-3xl p-4 md:p-5 transition-all duration-300 bg-slate-900/40 backdrop-blur-2xl border ${
                                            m.role === 'user' 
                                                ? 'border-cyan-500/40 text-white shadow-[0_0_20px_rgba(34,211,238,0.15)] rounded-br-sm' 
                                                : 'border-white/5 text-slate-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] rounded-bl-sm'
                                        }`}>
                                            {m.images && m.images.length > 0 && (
                                                <div className="flex gap-2 mb-3 flex-wrap">
                                                    {m.images.map((img, i) => (
                                                        <img key={i} src={img.preview} alt="Adjunta" className="w-32 h-32 object-cover rounded-xl border border-white/10 shadow" />
                                                    ))}
                                                </div>
                                            )}
                                            {m.role === 'model' ? (
                                                <div className="markdown-content text-sm leading-relaxed relative z-10" dangerouslySetInnerHTML={{ __html: renderFormattedText(m.text) }} />
                                            ) : (
                                                <p className="text-sm whitespace-pre-wrap leading-relaxed text-white">{m.text}</p>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-2 mt-2 px-2">
                                            <span className="text-[10px] font-medium text-slate-400">{m.time}</span>
                                            {m.role === 'model' && (
                                                <>
                                                    <button onClick={() => safeSpeak(m.text.replace(/```[\s\S]*?```/g, 'bloque de código').replace(/[*#`]/g, ''))} className="text-[10px] bg-slate-900/60 hover:bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md border border-white/5 transition flex items-center gap-1" title="Escuchar respuesta">
                                                        <Icon name="Volume2" className="w-3 h-3" /> Leer
                                                    </button>
                                                    {/```(?:html|xml)?\n([\s\S]*?)```/.test(m.text) && (
                                                        <button onClick={() => extractAndApplyCode(m.text)} className="text-[10px] bg-slate-900/60 hover:bg-slate-800 text-cyan-400 px-2.5 py-1 rounded-md border border-cyan-500/30 transition flex items-center gap-1 shadow-inner">
                                                            <Icon name="Rocket" className="w-3 h-3" /> Aplicar Código
                                                        </button>
                                                    )}
                                                </>
                                            )}
                                        </div>
                                    </div>
                                ))}

                                {loading && (
                                    <div className="flex items-center gap-4 bg-slate-900/40 border border-white/5 p-4 rounded-3xl w-fit backdrop-blur-2xl animate-pulse shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
                                        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                                            <Icon name={currentSpec.icon} className="w-5 h-5" />
                                        </div>
                                        <p className="text-sm text-cyan-400 font-medium">Sintetizando y guardando en Supabase...</p>
                                    </div>
                                )}

                                {errorMsg && (
                                    <div className="bg-red-950/40 border border-red-500/30 p-4 rounded-2xl text-sm text-red-300 backdrop-blur-xl">
                                        {errorMsg}
                                    </div>
                                )}

                                <div ref={chatBottomRef} className="h-2" />
                            </div>

                            <div className="p-3 md:p-4 bg-slate-900/40 border-t border-white/5 shrink-0 backdrop-blur-2xl">
                                <div className="flex gap-2 max-w-5xl mx-auto items-center">
                                    <input type="file" ref={fileInputRef} accept="image/*" multiple onChange={handleImageSelect} className="hidden" />
                                    <button onClick={() => fileInputRef.current?.click()} className="bg-slate-900/60 hover:bg-slate-800 border border-white/5 text-slate-300 p-3 md:p-3.5 rounded-2xl text-sm transition-all flex items-center justify-center">
                                        <Icon name="Camera" className="w-4 h-4 text-slate-300" />
                                    </button>
                                    <button 
                                        onClick={toggleVoiceRecognition} 
                                        className={`p-3 md:p-3.5 rounded-2xl text-sm border transition-all flex items-center justify-center ${isListening ? 'bg-red-600 text-white border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.5)] animate-pulse' : 'bg-slate-900/60 hover:bg-slate-800 text-slate-300 border-white/5'}`} 
                                    >
                                        <Icon name="Mic" className="w-4 h-4" />
                                    </button>
                                    <input 
                                        type="text" 
                                        value={inputMsg} 
                                        onChange={e => setInputMsg(e.target.value)} 
                                        onKeyDown={e => e.key === 'Enter' && handleSendMessage()}
                                        placeholder={isListening ? 'Escuchando voz neural...' : `Escribe a ${currentSpec.name}...`} 
                                        className="flex-1 bg-slate-950/60 border border-white/5 rounded-2xl px-4 md:px-5 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-all shadow-inner"
                                    />
                                    <button 
                                        onClick={handleSendMessage} 
                                        disabled={loading || (!inputMsg.trim() && images.length === 0)}
                                        className="bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-950 px-5 md:px-6 py-3.5 rounded-2xl text-sm font-bold hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all flex items-center gap-2 shrink-0"
                                    >
                                        <span>Enviar</span> <Icon name="Send" className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </main>
                    </div>
                )}

                {activeTab === 'editor' && (
                    <div className="flex-1 flex flex-col bg-[#020617] overflow-hidden w-full animate-fade-in">
                        <div className="bg-slate-900/40 backdrop-blur-2xl border-b border-white/5 p-3 md:p-4 flex items-center justify-between shrink-0 flex-wrap gap-3">
                            <div className="flex items-center gap-3">
                                <div className="bg-slate-900 p-2 rounded-xl text-cyan-400 border border-white/5"><Icon name="Monitor" className="w-5 h-5" /></div>
                                <div>
                                    <h2 className="font-bold text-sm text-white">Editor Neural con Supabase & Resaltado HTML</h2>
                                    <p className="text-[10px] text-cyan-400">Actualización en tiempo real</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 grid grid-cols-1 xl:grid-cols-2 overflow-hidden">
                            <div className="flex flex-col border-r border-white/5 bg-[#020617] relative">
                                <textarea
                                    value={sandboxCode}
                                    onChange={e => setSandboxCode(e.target.value)}
                                    className="flex-1 bg-[#020617] text-cyan-300 font-mono text-xs p-4 pt-12 resize-none focus:outline-none leading-relaxed selection:bg-cyan-950 selection:text-cyan-100"
                                    spellCheck={false}
                                />
                            </div>

                            <div className="flex flex-col bg-slate-900 relative">
                                <iframe
                                    srcDoc={previewCode}
                                    title="Vista Previa Supabase"
                                    className="w-full h-full border-none"
                                    sandbox="allow-scripts"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {showKeyModal && (
                <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 z-50">
                    <div className="bg-slate-900 border border-white/5 rounded-3xl p-6 md:p-8 max-w-md w-full backdrop-blur-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] space-y-5">
                        <div className="flex items-center justify-between border-b border-white/5 pb-4">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2"><Icon name="Key" className="w-5 h-5 text-cyan-400" /> Configurar Clave API</h3>
                            <button onClick={() => setShowKeyModal(false)} className="text-slate-400 hover:text-white bg-slate-800 p-1.5 rounded-xl"><Icon name="X" className="w-4 h-4" /></button>
                        </div>
                        <input 
                            type="password"
                            value={apiKey}
                            onChange={e => setApiKey(e.target.value)}
                            placeholder="Pega tu Clave API aquí"
                            className="w-full bg-slate-950 border border-white/5 rounded-2xl px-4 py-3 text-sm text-cyan-300 focus:outline-none focus:border-cyan-400 font-mono shadow-inner"
                        />
                        <button onClick={() => setShowKeyModal(false)} className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 py-3 rounded-2xl text-sm font-bold shadow-[0_0_20px_rgba(34,211,238,0.4)] transition">Guardar Clave</button>
                    </div>
                </div>
            )}
        </div>
    );
}