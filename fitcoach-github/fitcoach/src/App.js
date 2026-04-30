import { useState, useEffect } from "react";

// ─── TRANSLATIONS ─────────────────────────────────────────────────────────────
const T = {
  ar: {
    dir: "rtl",
    fontBody: "'Cairo', sans-serif",
    fontDisplay: "'Cairo', sans-serif",
    // Navbar
    home: "الرئيسية",
    join: "سجّل الآن",
    coachPanel: "لوحة الكوتش",
    startNow: "ابدأ الآن ←",
    // Ticker
    ticker: ["القوة • الانضباط • النتائج", "حوّل جسمك", "تدريب احترافي", "غيّر حياتك", "لا أعذار", "تجاوز حدودك"],
    // Home
    badge: "تدريب احترافي متخصص",
    heroLine1: "اصنع",
    heroLine2: "إرثك",
    heroLine3: "الرياضي",
    heroDesc: "لا مزيد من التخمين. ابدأ التحول الحقيقي. احصل على برنامج تمرين مخصص وخطة غذائية وإشراف مباشر من مدرب معتمد — مصمم لجسمك وأهدافك.",
    beginJourney: "ابدأ رحلتك ←",
    learnMore: "اعرف أكثر",
    // Stats
    stats: [
      { num: "+500", label: "عميل محوّل" },
      { num: "8 سنوات", label: "خبرة" },
      { num: "98%", label: "نسبة النجاح" },
      { num: "24/7", label: "دعم مستمر" },
    ],
    // Services
    whatYouGet: "ماذا ستحصل",
    systemTitle: "منظومتك",
    systemSub: "التدريبية الكاملة",
    services: [
      { icon: "🏋️", title: "برامج تمرين مخصصة", desc: "برامج مبنية علمياً تناسب جسمك وأهدافك وجدولك الزمني." },
      { icon: "🥗", title: "تغذية وحمية غذائية", desc: "خطط وجبات محسوبة الماكرو تعزز الأداء وتسرّع النتائج." },
      { icon: "📊", title: "متابعة التقدم", desc: "متابعة أسبوعية وتعديلات مستمرة لضمان أسرع وصول للهدف." },
      { icon: "💬", title: "تدريب فردي", desc: "تواصل مباشر مع كوتشك عبر واتساب للحصول على التوجيه الفوري." },
    ],
    // CTA
    readyQ: "جاهز للتحول؟",
    ctaDesc: "سجّل بياناتك وسيتواصل معك الكوتش بخطتك خلال 24 ساعة.",
    getMyPlan: "احصل على خطتي ←",
    // Client Form
    getStarted: "ابدأ الآن",
    joinProgram: "انضم للبرنامج",
    formDesc: "أدخل بياناتك أدناه وسيقوم الكوتش بإعداد خطة مخصصة لك بالكامل.",
    fullName: "الاسم الكامل",
    namePlaceholder: "مثال: أحمد الراشد",
    age: "العمر",
    gender: "الجنس",
    selectGender: "اختر الجنس",
    male: "ذكر",
    female: "أنثى",
    preferNot: "أفضل عدم التحديد",
    weight: "الوزن (كغ)",
    height: "الطول (سم)",
    fitnessGoal: "الهدف الرياضي",
    selectGoal: "اختر هدفك",
    goals: ["إنقاص الوزن", "بناء العضلات", "لياقة عامة", "أداء رياضي", "إعادة تشكيل الجسم"],
    activityLevel: "مستوى النشاط",
    levels: [
      { val: "مبتدئ", emoji: "🌱", sub: "جديد على التمرين" },
      { val: "متوسط", emoji: "⚡", sub: "تمرين 2-3 مرات/أسبوع" },
      { val: "متقدم", emoji: "🔥", sub: "تمرين +5 أيام/أسبوع" },
    ],
    bmiNote: "يُحسب مؤشر كتلة الجسم تلقائياً ويُضاف لملفك لدى الكوتش.",
    submit: "إرسال ملفي ←",
    submitting: "جاري الإرسال...",
    // Success
    youreIn: "أنت",
    youreInGreen: "مسجّل!",
    successMsg: "تم استلام معلوماتك. سيراجع الكوتش ملفك ويرسل لك خطتك الشخصية خلال",
    successHours: "24 ساعة.",
    successWhatsapp: "💬 سنتواصل معك عبر واتساب — تابع رسائلك.",
    submitAnother: "تسجيل آخر",
    // Errors
    errRequired: "مطلوب",
    errAge: "أدخل عمراً صحيحاً",
    errWeight: "أدخل وزناً صحيحاً",
    errHeight: "أدخل طولاً صحيحاً",
    // Coach Login
    coachLogin: "دخول الكوتش",
    restricted: "مخصص للمدربين المعتمدين فقط",
    email: "البريد الإلكتروني",
    password: "كلمة المرور",
    accessDashboard: "دخول اللوحة ←",
    signingIn: "جاري الدخول...",
    loginError: "بيانات غير صحيحة",
    demo: "",
    // Dashboard
    coachPortal: "بوابة الكوتش",
    clientDashboard: "لوحة العملاء",
    totalClients: "إجمالي العملاء",
    logout: "خروج",
    filterAll: "الكل",
    noClientsTitle: "لا يوجد عملاء بعد",
    noClientsDesc: "ستظهر بيانات العملاء هنا بمجرد تعبئة النموذج.",
    submittedOn: "تاريخ التسجيل",
    goalLabel: "الهدف:",
    statsLabels: ["العمر", "الجنس", "الوزن", "الطول", "مؤشر كتلة الجسم", "المستوى"],
    statsUnits: ["سنة", "", "كغ", "سم", "", ""],
    planFields: [
      { key: "workoutPlan", label: "💪 خطة التمرين", ph: "اكتب خطة التمرين التفصيلية هنا...\n\nاليوم 1 - دفع:\n• بنش بريس 4×8\n• ضغط الكتف 3×10..." },
      { key: "dietPlan", label: "🥗 الخطة الغذائية", ph: "اكتب خطة التغذية هنا...\n\nالماكرو: 2500 سعرة / 180غ بروتين / 250غ كارب...\n\nالفطور:\n• 4 بيضات..." },
      { key: "notes", label: "📝 ملاحظات الكوتش", ph: "ملاحظات خاصة عن تقدم العميل والتعديلات..." },
      { key: "progress", label: "📊 متابعة التقدم", ph: "الأسبوع 1: 80كغ\nالأسبوع 2: 79.2كغ\nالأسبوع 3: 78.5كغ..." },
    ],
    savePlan: "حفظ خطة العميل ←",
    saving: "جاري الحفظ في Google Sheets...",
    saved: "✓ تم الحفظ!",
    planReady: "الخطة جاهزة ✓",
    // Footer
    rights: "جميع الحقوق محفوظة.",
  },
  en: {
    dir: "ltr",
    fontBody: "'Barlow', sans-serif",
    fontDisplay: "'Barlow Condensed', sans-serif",
    badge: "Elite Performance Coaching",
    heroLine1: "FORGE",
    heroLine2: "YOUR",
    heroLine3: "LEGACY",
    heroDesc: "Stop guessing. Start transforming. Get a personalized workout plan, custom diet, and direct coaching from a certified trainer — built around your body and goals.",
    beginJourney: "Begin Your Journey →",
    learnMore: "Learn More",
    home: "Home",
    join: "Join Now",
    coachPanel: "Coach Panel",
    startNow: "Start Now →",
    ticker: ["STRENGTH • DISCIPLINE • RESULTS", "FORGE YOUR BODY", "ELITE COACHING", "TRANSFORM YOUR LIFE", "NO EXCUSES", "PUSH YOUR LIMITS"],
    stats: [
      { num: "500+", label: "Clients Transformed" },
      { num: "8 Yrs", label: "Experience" },
      { num: "98%", label: "Success Rate" },
      { num: "24/7", label: "Support" },
    ],
    whatYouGet: "What You Get",
    systemTitle: "Your Complete",
    systemSub: "Coaching System",
    services: [
      { icon: "🏋️", title: "Custom Workout Plans", desc: "Scientifically designed programs tailored to your body, goals, and schedule." },
      { icon: "🥗", title: "Nutrition & Diet", desc: "Macro-optimized meal plans that fuel performance and accelerate results." },
      { icon: "📊", title: "Progress Tracking", desc: "Weekly check-ins and adjustments to keep you on the fastest path." },
      { icon: "💬", title: "1-on-1 Coaching", desc: "Direct access to your coach via WhatsApp for real-time guidance." },
    ],
    readyQ: "Ready to transform?",
    ctaDesc: "Fill out the client form. Your coach will build your plan within 24 hours.",
    getMyPlan: "Get My Plan Now →",
    getStarted: "Get Started",
    joinProgram: "Join The Program",
    formDesc: "Fill in your details below. Your coach will create a fully personalized plan just for you.",
    fullName: "Full Name",
    namePlaceholder: "e.g. Ahmed Al-Rashid",
    age: "Age",
    gender: "Gender",
    selectGender: "Select gender",
    male: "Male",
    female: "Female",
    preferNot: "Prefer not to say",
    weight: "Weight (kg)",
    height: "Height (cm)",
    fitnessGoal: "Fitness Goal",
    selectGoal: "Select your goal",
    goals: ["Weight Loss", "Muscle Gain", "General Fitness", "Athletic Performance", "Body Recomposition"],
    activityLevel: "Activity Level",
    levels: [
      { val: "Beginner", emoji: "🌱", sub: "New to training" },
      { val: "Intermediate", emoji: "⚡", sub: "Training 2-3x/week" },
      { val: "Advanced", emoji: "🔥", sub: "Training 5+ days/week" },
    ],
    bmiNote: "BMI is automatically calculated and included in your profile for your coach.",
    submit: "Submit My Profile →",
    submitting: "Submitting...",
    youreIn: "You're",
    youreInGreen: "In!",
    successMsg: "Your information has been received. Your coach will review your profile and send your personalized plan within",
    successHours: "24 hours.",
    successWhatsapp: "💬 We'll reach out via WhatsApp — keep an eye on your messages.",
    submitAnother: "Submit Another",
    errRequired: "Required",
    errAge: "Enter valid age",
    errWeight: "Enter valid weight",
    errHeight: "Enter valid height",
    coachLogin: "Coach Login",
    restricted: "Restricted to authorized coaches only",
    email: "Email Address",
    password: "Password",
    accessDashboard: "Access Dashboard →",
    signingIn: "Signing In...",
    loginError: "Invalid credentials",
    demo: "",
    coachPortal: "Coach Portal",
    clientDashboard: "Client Dashboard",
    totalClients: "Total Clients",
    logout: "Logout",
    filterAll: "All",
    noClientsTitle: "No Clients Yet",
    noClientsDesc: "Client submissions will appear here once they fill out the form.",
    submittedOn: "Submitted",
    goalLabel: "Goal:",
    statsLabels: ["Age", "Gender", "Weight", "Height", "BMI", "Level"],
    statsUnits: ["y", "", "kg", "cm", "", ""],
    planFields: [
      { key: "workoutPlan", label: "💪 Workout Plan", ph: "Write detailed workout plan here...\n\nDay 1 - Push:\n• Bench Press 4x8..." },
      { key: "dietPlan", label: "🥗 Diet Plan", ph: "Write nutrition plan here...\n\nMacros: 2500 cal / 180g protein..." },
      { key: "notes", label: "📝 Coach Notes", ph: "Private notes about client progress..." },
      { key: "progress", label: "📊 Progress Tracking", ph: "Week 1: 80kg\nWeek 2: 79.2kg..." },
    ],
    savePlan: "Save Client Plan →",
    saving: "Saving to Google Sheets...",
    saved: "✓ Saved!",
    planReady: "Plan Ready ✓",
    rights: "All rights reserved.",
  },
};

// ─── GLOBAL STYLES ────────────────────────────────────────────────────────────
const GlobalStyle = ({ lang }) => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;800;900&family=Barlow+Condensed:wght@400;600;700;800;900&family=Barlow:wght@300;400;500;600&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg: #0a0a0a; --bg2: #111; --bg3: #1a1a1a; --card: #141414;
      --border: #222; --neon: #c8f041; --neon2: #a8d020;
      --neon-glow: rgba(200,240,65,0.18); --text: #f0f0f0;
      --muted: #666; --danger: #ff4444;
    }

    html { scroll-behavior: smooth; }

    body {
      background: var(--bg); color: var(--text);
      font-family: ${lang === "ar" ? "'Cairo'" : "'Barlow'"}, sans-serif;
      font-weight: 400; min-height: 100vh; overflow-x: hidden;
      direction: ${lang === "ar" ? "rtl" : "ltr"};
    }

    ::-webkit-scrollbar { width: 5px; }
    ::-webkit-scrollbar-track { background: var(--bg); }
    ::-webkit-scrollbar-thumb { background: var(--neon); border-radius: 3px; }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(28px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes glow-pulse {
      0%, 100% { box-shadow: 0 0 18px var(--neon-glow); }
      50%       { box-shadow: 0 0 38px rgba(200,240,65,0.35); }
    }
    @keyframes ticker {
      0%   { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    @keyframes spin { to { transform: rotate(360deg); } }
    @keyframes slideIn {
      from { opacity: 0; transform: translateX(-20px); }
      to   { opacity: 1; transform: translateX(0); }
    }
    @keyframes checkmark {
      0%   { transform: scale(0) rotate(-45deg); opacity: 0; }
      60%  { transform: scale(1.2) rotate(5deg); }
      100% { transform: scale(1) rotate(0); opacity: 1; }
    }
    @keyframes langSwitch {
      from { opacity: 0; transform: scale(0.96); }
      to   { opacity: 1; transform: scale(1); }
    }

    .page-wrap { animation: langSwitch 0.3s ease; }

    input, select, textarea {
      background: var(--bg3); border: 1.5px solid var(--border);
      color: var(--text); border-radius: 6px; padding: 12px 14px;
      font-family: ${lang === "ar" ? "'Cairo'" : "'Barlow'"}, sans-serif;
      font-size: 14px; width: 100%;
      transition: border-color 0.2s, box-shadow 0.2s;
      outline: none; resize: vertical;
      direction: ${lang === "ar" ? "rtl" : "ltr"};
      text-align: ${lang === "ar" ? "right" : "left"};
    }
    input:focus, select:focus, textarea:focus {
      border-color: var(--neon); box-shadow: 0 0 0 3px var(--neon-glow);
    }
    select option { background: #1a1a1a; }
    button { cursor: pointer; border: none; outline: none; }

    .neon-btn {
      background: var(--neon); color: #000;
      font-family: ${lang === "ar" ? "'Cairo'" : "'Barlow Condensed'"}, sans-serif;
      font-weight: 800; font-size: 15px;
      letter-spacing: ${lang === "ar" ? "0" : "1.5px"};
      text-transform: ${lang === "ar" ? "none" : "uppercase"};
      padding: 13px 28px; border-radius: 6px;
      transition: all 0.2s; position: relative; overflow: hidden;
    }
    .neon-btn:hover {
      background: var(--neon2); box-shadow: 0 0 24px var(--neon-glow);
      transform: translateY(-1px);
    }
    .neon-btn:active { transform: translateY(0); }
    .neon-btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }

    .ghost-btn {
      background: transparent; color: var(--neon);
      border: 1.5px solid var(--neon);
      font-family: ${lang === "ar" ? "'Cairo'" : "'Barlow Condensed'"}, sans-serif;
      font-weight: 700; font-size: 14px;
      letter-spacing: ${lang === "ar" ? "0" : "1px"};
      text-transform: ${lang === "ar" ? "none" : "uppercase"};
      padding: 10px 22px; border-radius: 6px; transition: all 0.2s;
    }
    .ghost-btn:hover { background: var(--neon-glow); box-shadow: 0 0 16px var(--neon-glow); }

    .lbl {
      font-family: ${lang === "ar" ? "'Cairo'" : "'Barlow Condensed'"}, sans-serif;
      font-weight: 700; font-size: ${lang === "ar" ? "13px" : "12px"};
      letter-spacing: ${lang === "ar" ? "0" : "1.5px"};
      text-transform: ${lang === "ar" ? "none" : "uppercase"};
      color: var(--muted); margin-bottom: 6px; display: block;
    }
    .field { margin-bottom: 18px; }
    .card {
      background: var(--card); border: 1px solid var(--border);
      border-radius: 10px; padding: 24px;
    }
    .tag {
      display: inline-block; padding: 3px 10px; border-radius: 4px;
      font-size: 11px; font-weight: 700;
      font-family: ${lang === "ar" ? "'Cairo'" : "'Barlow Condensed'"}, sans-serif;
      letter-spacing: ${lang === "ar" ? "0" : "1px"};
    }

    @media (max-width: 700px) {
      .desktop-nav { display: none !important; }
      .burger { display: block !important; }
    }
  `}</style>
);

// ─── LANG TOGGLE ──────────────────────────────────────────────────────────────
const LangToggle = ({ lang, setLang }) => (
  <button onClick={() => setLang(l => l === "ar" ? "en" : "ar")} style={{
    background: "var(--bg3)", border: "1px solid var(--border)",
    color: "var(--text)", borderRadius: 20, padding: "6px 14px",
    fontFamily: lang === "ar" ? "'Cairo'" : "'Barlow Condensed', sans-serif",
    fontWeight: 700, fontSize: 13, cursor: "pointer",
    display: "flex", alignItems: "center", gap: 6, transition: "all 0.2s",
  }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--neon)"; e.currentTarget.style.color = "var(--neon)"; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text)"; }}
  >
    <span style={{ fontSize: 16 }}>{lang === "ar" ? "🇺🇸" : "🇸🇦"}</span>
    {lang === "ar" ? "English" : "عربي"}
  </button>
);

// ─── TICKER ───────────────────────────────────────────────────────────────────
const Ticker = ({ t }) => {
  const doubled = [...t.ticker, ...t.ticker];
  return (
    <div style={{ background: "var(--neon)", padding: "9px 0", overflow: "hidden" }}>
      <div style={{ display: "flex", gap: 60, animation: "ticker 26s linear infinite", width: "max-content" }}>
        {doubled.map((item, i) => (
          <span key={i} style={{
            fontFamily: t === T.ar ? "'Cairo', sans-serif" : "'Barlow Condensed', sans-serif",
            fontWeight: 800, fontSize: 13, letterSpacing: t === T.ar ? 1 : 3,
            color: "#000", whiteSpace: "nowrap",
          }}>{item}</span>
        ))}
      </div>
    </div>
  );
};

// ─── NAVBAR ───────────────────────────────────────────────────────────────────
const Navbar = ({ page, setPage, lang, setLang, t }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isAr = lang === "ar";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { label: t.home, key: "home" },
    { label: t.join, key: "client" },
    { label: t.coachPanel, key: "coach" },
  ];

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      background: scrolled ? "rgba(10,10,10,0.97)" : "transparent",
      borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      backdropFilter: "blur(12px)", transition: "all 0.3s", padding: "0 5vw",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
        {/* Logo */}
        <div onClick={() => setPage("home")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 36, height: 36, background: "var(--neon)", borderRadius: 6,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 18, color: "#000",
          }}>FC</div>
          <span style={{
            fontFamily: isAr ? "'Cairo', sans-serif" : "'Barlow Condensed', sans-serif",
            fontWeight: 800, fontSize: isAr ? 18 : 20, letterSpacing: isAr ? 0 : 2,
            textTransform: isAr ? "none" : "uppercase",
          }}>
            فيت كوتش <span style={{ color: "var(--neon)" }}>برو</span>
          </span>
        </div>

        {/* Desktop */}
        <div className="desktop-nav" style={{ display: "flex", gap: 6, alignItems: "center" }}>
          {links.map(l => (
            <button key={l.key} onClick={() => setPage(l.key)} style={{
              background: "none", border: "none",
              color: page === l.key ? "var(--neon)" : "var(--muted)",
              fontFamily: isAr ? "'Cairo', sans-serif" : "'Barlow Condensed', sans-serif",
              fontWeight: 700, fontSize: isAr ? 15 : 14,
              letterSpacing: isAr ? 0 : 1.5,
              textTransform: isAr ? "none" : "uppercase",
              padding: "8px 16px", borderRadius: 6, cursor: "pointer",
              transition: "color 0.2s",
              borderBottom: page === l.key ? "2px solid var(--neon)" : "2px solid transparent",
            }}>{l.label}</button>
          ))}
          <LangToggle lang={lang} setLang={setLang} />
          <button className="neon-btn" style={{ marginLeft: isAr ? 0 : 8, marginRight: isAr ? 8 : 0 }} onClick={() => setPage("client")}>
            {t.startNow}
          </button>
        </div>

        {/* Mobile */}
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <div className="mobile-lang" style={{ display: "none" }}><LangToggle lang={lang} setLang={setLang} /></div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="burger" style={{
            background: "none", border: "1px solid var(--border)",
            color: "var(--text)", padding: "8px 12px", borderRadius: 6,
            display: "none", fontSize: 20, fontFamily: "sans-serif",
          }}>☰</button>
        </div>
      </div>

      {menuOpen && (
        <div style={{ borderTop: "1px solid var(--border)", padding: "16px 5vw", background: "var(--bg2)" }}>
          {links.map(l => (
            <button key={l.key} onClick={() => { setPage(l.key); setMenuOpen(false); }} style={{
              display: "block", width: "100%", textAlign: isAr ? "right" : "left",
              background: "none", border: "none",
              color: page === l.key ? "var(--neon)" : "var(--text)",
              fontFamily: isAr ? "'Cairo', sans-serif" : "'Barlow Condensed', sans-serif",
              fontWeight: 700, fontSize: 17,
              padding: "12px 0", borderBottom: "1px solid var(--border)", cursor: "pointer",
            }}>{l.label}</button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 700px) {
          .mobile-lang { display: block !important; }
          .burger { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

// ─── HOME PAGE ────────────────────────────────────────────────────────────────
const HomePage = ({ setPage, t, lang }) => {
  const isAr = lang === "ar";
  return (
    <div className="page-wrap">
      {/* Hero */}
      <section style={{ padding: "100px 5vw 80px", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: -100, right: -100,
          width: 600, height: 600,
          background: "radial-gradient(circle, rgba(200,240,65,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ animation: "fadeUp 0.7s ease forwards" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20, flexDirection: isAr ? "row-reverse" : "row", justifyContent: isAr ? "flex-end" : "flex-start" }}>
              <div style={{ width: 40, height: 2, background: "var(--neon)" }} />
              <span style={{
                fontFamily: isAr ? "'Cairo', sans-serif" : "'Barlow Condensed', sans-serif",
                fontSize: 13, letterSpacing: isAr ? 1 : 3, textTransform: isAr ? "none" : "uppercase",
                color: "var(--neon)",
              }}>{t.badge}</span>
            </div>

            <h1 style={{
              fontFamily: isAr ? "'Cairo', sans-serif" : "'Barlow Condensed', sans-serif",
              fontWeight: 900, lineHeight: isAr ? 1.2 : 0.92,
              fontSize: isAr ? "clamp(52px, 10vw, 110px)" : "clamp(60px, 11vw, 130px)",
              textTransform: isAr ? "none" : "uppercase",
              marginBottom: 28,
              textAlign: isAr ? "right" : "left",
            }}>
              {t.heroLine1}<br />
              {t.heroLine2}<br />
              <span style={{ color: "var(--neon)", WebkitTextStroke: "2px var(--neon)", WebkitTextFillColor: "transparent" }}>
                {t.heroLine3}
              </span>
            </h1>

            <p style={{ maxWidth: 520, color: "var(--muted)", fontSize: 16, lineHeight: 1.8, marginBottom: 40, textAlign: isAr ? "right" : "left" }}>
              {t.heroDesc}
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: isAr ? "flex-end" : "flex-start" }}>
              <button className="neon-btn" style={{ fontSize: 16 }} onClick={() => setPage("client")}>{t.beginJourney}</button>
              <button className="ghost-btn" style={{ fontSize: 15, padding: "13px 28px" }} onClick={() => setPage("client")}>{t.learnMore}</button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: "40px 5vw", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}>
          {t.stats.map((s, i) => (
            <div key={i} style={{ padding: "28px 24px", textAlign: "center", animation: `fadeUp 0.5s ease ${i * 0.1}s both` }}>
              <div style={{ fontFamily: isAr ? "'Cairo', sans-serif" : "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 42, color: "var(--neon)", lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: "80px 5vw" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 50, textAlign: isAr ? "right" : "left" }}>
            <span style={{ fontFamily: isAr ? "'Cairo', sans-serif" : "'Barlow Condensed', sans-serif", fontSize: 12, letterSpacing: isAr ? 1 : 3, color: "var(--neon)", textTransform: isAr ? "none" : "uppercase" }}>{t.whatYouGet}</span>
            <h2 style={{ fontFamily: isAr ? "'Cairo', sans-serif" : "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(30px, 5vw, 52px)", textTransform: isAr ? "none" : "uppercase", marginTop: 6, lineHeight: 1.2 }}>
              {t.systemTitle}<br /><span style={{ color: "var(--neon)" }}>{t.systemSub}</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
            {t.services.map((s, i) => (
              <div key={i} className="card" style={{ animation: `fadeUp 0.5s ease ${0.1 + i * 0.1}s both`, transition: "border-color 0.2s, transform 0.2s", cursor: "default" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--neon)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ fontSize: 36, marginBottom: 16 }}>{s.icon}</div>
                <h3 style={{ fontFamily: isAr ? "'Cairo', sans-serif" : "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 20, textTransform: isAr ? "none" : "uppercase", marginBottom: 10, textAlign: isAr ? "right" : "left" }}>{s.title}</h3>
                <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.8, textAlign: isAr ? "right" : "left" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ padding: "60px 5vw", margin: "0 5vw 80px", background: "var(--card)", border: "1px solid var(--border)", borderRadius: 16 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24, flexDirection: isAr ? "row-reverse" : "row" }}>
          <div style={{ textAlign: isAr ? "right" : "left" }}>
            <h2 style={{ fontFamily: isAr ? "'Cairo', sans-serif" : "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(26px, 4vw, 44px)", textTransform: isAr ? "none" : "uppercase" }}>
              {t.readyQ.split("?")[0]} <span style={{ color: "var(--neon)" }}>؟</span>
            </h2>
            <p style={{ color: "var(--muted)", marginTop: 8 }}>{t.ctaDesc}</p>
          </div>
          <button className="neon-btn" style={{ fontSize: 16, padding: "16px 40px", animation: "glow-pulse 2.5s ease infinite" }} onClick={() => setPage("client")}>
            {t.getMyPlan}
          </button>
        </div>
      </section>

      {/* WhatsApp */}
      <a href="https://wa.me/201063033247" target="_blank" rel="noreferrer" style={{
        position: "fixed", bottom: 28, left: isAr ? 28 : "auto", right: isAr ? "auto" : 28,
        zIndex: 200, background: "#25D366", color: "#fff",
        width: 56, height: 56, borderRadius: "50%",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 26, boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
        textDecoration: "none", transition: "transform 0.2s",
      }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.12)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
        title="تواصل عبر واتساب"
      >💬</a>
    </div>
  );
};

// ─── CLIENT FORM ──────────────────────────────────────────────────────────────
const ClientFormPage = ({ t, lang }) => {
  const isAr = lang === "ar";
  const [form, setForm] = useState({ fullName: "", age: "", weight: "", height: "", gender: "", fitnessGoal: "", activityLevel: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = t.errRequired;
    if (!form.age || form.age < 10 || form.age > 100) e.age = t.errAge;
    if (!form.weight || form.weight < 30 || form.weight > 300) e.weight = t.errWeight;
    if (!form.height || form.height < 100 || form.height > 250) e.height = t.errHeight;
    if (!form.gender) e.gender = t.errRequired;
    if (!form.fitnessGoal) e.fitnessGoal = t.errRequired;
    if (!form.activityLevel) e.activityLevel = t.errRequired;
    if (!form.phone.trim()) e.phone = t.errRequired;
    return e;
  };

  const handleSubmit = async () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    setLoading(true);
    const bmi = (form.weight / Math.pow(form.height / 100, 2)).toFixed(1);
    const clientData = { ...form, bmi, submittedAt: new Date().toISOString(), workoutPlan: "", dietPlan: "", notes: "", progress: "" };
    const existing = JSON.parse(localStorage.getItem("fitcoach_clients") || "[]");
    existing.push({ id: Date.now(), ...clientData });
    localStorage.setItem("fitcoach_clients", JSON.stringify(existing));
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setSuccess(true);
  };

  const f = (key, val) => { setForm(p => ({ ...p, [key]: val })); if (errors[key]) setErrors(p => ({ ...p, [key]: "" })); };

  if (success) return (
    <div className="page-wrap" style={{ maxWidth: 520, margin: "120px auto", textAlign: "center", padding: "0 5vw", animation: "fadeUp 0.5s ease" }}>
      <div style={{ width: 90, height: 90, borderRadius: "50%", background: "var(--neon-glow)", border: "2px solid var(--neon)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", fontSize: 40, animation: "checkmark 0.5s ease" }}>✓</div>
      <h2 style={{ fontFamily: isAr ? "'Cairo'" : "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 38, textTransform: isAr ? "none" : "uppercase", marginBottom: 12 }}>
        {t.youreIn} <span style={{ color: "var(--neon)" }}>{t.youreInGreen}</span>
      </h2>
      <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 28 }}>
        {t.successMsg} <strong style={{ color: "var(--text)" }}>{t.successHours}</strong>
      </p>
      <p style={{ color: "var(--muted)", fontSize: 13 }}>{t.successWhatsapp}</p>
      <button className="ghost-btn" style={{ marginTop: 32 }} onClick={() => setSuccess(false)}>{t.submitAnother}</button>
    </div>
  );

  return (
    <div className="page-wrap" style={{ maxWidth: 680, margin: "0 auto", padding: "60px 5vw 80px" }}>
      <div style={{ marginBottom: 40, animation: "fadeUp 0.5s ease", textAlign: isAr ? "right" : "left" }}>
        <span style={{ fontFamily: isAr ? "'Cairo'" : "'Barlow Condensed', sans-serif", fontSize: 12, letterSpacing: isAr ? 1 : 3, color: "var(--neon)", textTransform: isAr ? "none" : "uppercase" }}>{t.getStarted}</span>
        <h1 style={{ fontFamily: isAr ? "'Cairo'" : "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(32px, 6vw, 52px)", textTransform: isAr ? "none" : "uppercase", marginTop: 4 }}>
          {t.joinProgram.split(" ").slice(0, -1).join(" ")} <span style={{ color: "var(--neon)" }}>{t.joinProgram.split(" ").slice(-1)}</span>
        </h1>
        <p style={{ color: "var(--muted)", marginTop: 10, lineHeight: 1.7 }}>{t.formDesc}</p>
      </div>

      <div className="card" style={{ animation: "fadeUp 0.6s ease 0.1s both" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {/* Full Name */}
          <div className="field" style={{ gridColumn: "1 / -1" }}>
            <label className="lbl">{t.fullName}</label>
            <input placeholder={t.namePlaceholder} value={form.fullName} onChange={e => f("fullName", e.target.value)} />
            {errors.fullName && <span style={{ color: "var(--danger)", fontSize: 12, marginTop: 4, display: "block" }}>{errors.fullName}</span>}
          </div>
          {/* Phone / WhatsApp */}
          <div className="field" style={{ gridColumn: "1 / -1" }}>
            <label className="lbl">📱 {isAr ? "رقم الواتساب" : "WhatsApp Number"}</label>
            <input type="tel" placeholder={isAr ? "مثال: 01012345678" : "e.g. 01012345678"} value={form.phone} onChange={e => f("phone", e.target.value)} style={{ direction: "ltr" }} />
            {errors.phone && <span style={{ color: "var(--danger)", fontSize: 12, marginTop: 4, display: "block" }}>{errors.phone}</span>}
          </div>
          {/* Age */}
          <div className="field">
            <label className="lbl">{t.age}</label>
            <input type="number" placeholder="25" min={10} max={100} value={form.age} onChange={e => f("age", e.target.value)} />
            {errors.age && <span style={{ color: "var(--danger)", fontSize: 12, marginTop: 4, display: "block" }}>{errors.age}</span>}
          </div>
          {/* Gender */}
          <div className="field">
            <label className="lbl">{t.gender}</label>
            <select value={form.gender} onChange={e => f("gender", e.target.value)}>
              <option value="">{t.selectGender}</option>
              <option value="ذكر">{t.male}</option>
              <option value="أنثى">{t.female}</option>
              <option value="غير محدد">{t.preferNot}</option>
            </select>
            {errors.gender && <span style={{ color: "var(--danger)", fontSize: 12, marginTop: 4, display: "block" }}>{errors.gender}</span>}
          </div>
          {/* Weight */}
          <div className="field">
            <label className="lbl">{t.weight}</label>
            <input type="number" placeholder="75" min={30} max={300} value={form.weight} onChange={e => f("weight", e.target.value)} />
            {errors.weight && <span style={{ color: "var(--danger)", fontSize: 12, marginTop: 4, display: "block" }}>{errors.weight}</span>}
          </div>
          {/* Height */}
          <div className="field">
            <label className="lbl">{t.height}</label>
            <input type="number" placeholder="175" min={100} max={250} value={form.height} onChange={e => f("height", e.target.value)} />
            {errors.height && <span style={{ color: "var(--danger)", fontSize: 12, marginTop: 4, display: "block" }}>{errors.height}</span>}
          </div>
          {/* Goal */}
          <div className="field" style={{ gridColumn: "1 / -1" }}>
            <label className="lbl">{t.fitnessGoal}</label>
            <select value={form.fitnessGoal} onChange={e => f("fitnessGoal", e.target.value)}>
              <option value="">{t.selectGoal}</option>
              {t.goals.map(g => <option key={g} value={g}>{g}</option>)}
            </select>
            {errors.fitnessGoal && <span style={{ color: "var(--danger)", fontSize: 12, marginTop: 4, display: "block" }}>{errors.fitnessGoal}</span>}
          </div>
          {/* Activity Level */}
          <div className="field" style={{ gridColumn: "1 / -1" }}>
            <label className="lbl">{t.activityLevel}</label>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
              {t.levels.map(opt => (
                <div key={opt.val} onClick={() => f("activityLevel", opt.val)} style={{
                  padding: "14px 12px", borderRadius: 8, textAlign: "center",
                  border: `1.5px solid ${form.activityLevel === opt.val ? "var(--neon)" : "var(--border)"}`,
                  background: form.activityLevel === opt.val ? "var(--neon-glow)" : "var(--bg3)",
                  cursor: "pointer", transition: "all 0.2s",
                }}>
                  <div style={{ fontSize: 22 }}>{opt.emoji}</div>
                  <div style={{ fontFamily: isAr ? "'Cairo'" : "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 15, marginTop: 6, color: form.activityLevel === opt.val ? "var(--neon)" : "var(--text)" }}>{opt.val}</div>
                  <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 3 }}>{opt.sub}</div>
                </div>
              ))}
            </div>
            {errors.activityLevel && <span style={{ color: "var(--danger)", fontSize: 12, marginTop: 4, display: "block" }}>{errors.activityLevel}</span>}
          </div>
        </div>

        {/* BMI Preview */}
        {form.weight && form.height && (
          <div style={{ padding: "14px 16px", background: "var(--bg3)", border: "1px solid var(--border)", borderRadius: 8, marginBottom: 20, display: "flex", gap: 20, flexWrap: "wrap", flexDirection: isAr ? "row-reverse" : "row" }}>
            <div style={{ textAlign: isAr ? "right" : "left" }}>
              <span style={{ fontSize: 11, color: "var(--muted)", textTransform: "uppercase", letterSpacing: 1 }}>BMI</span>
              <div style={{ fontFamily: isAr ? "'Cairo'" : "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 24, color: "var(--neon)" }}>
                {(form.weight / Math.pow(form.height / 100, 2)).toFixed(1)}
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", color: "var(--muted)", fontSize: 13 }}>{t.bmiNote}</div>
          </div>
        )}

        <button className="neon-btn" style={{ width: "100%", fontSize: 16, padding: "15px" }} onClick={handleSubmit} disabled={loading}>
          {loading ? (
            <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
              <span style={{ width: 16, height: 16, border: "2px solid #000", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 0.7s linear infinite", display: "inline-block" }} />
              {t.submitting}
            </span>
          ) : t.submit}
        </button>
      </div>
    </div>
  );
};

// ─── COACH LOGIN ──────────────────────────────────────────────────────────────
const CoachLogin = ({ onLogin, t, lang }) => {
  const isAr = lang === "ar";
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !pass) { setError(t.errRequired); return; }
    setLoading(true);
    await new Promise(r => setTimeout(r, 800));
    if (email === "ehababshakour@gmail.com" && pass === "ehabelbalad") { onLogin(); }
    else { setError(t.loginError); }
    setLoading(false);
  };

  return (
    <div className="page-wrap" style={{ maxWidth: 400, margin: "100px auto", padding: "0 5vw", animation: "fadeUp 0.5s ease" }}>
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <div style={{ width: 64, height: 64, background: "var(--card)", border: "1px solid var(--border)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: 28 }}>🔒</div>
        <h2 style={{ fontFamily: isAr ? "'Cairo'" : "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 32, textTransform: isAr ? "none" : "uppercase" }}>
          {t.coachLogin.split(" ")[0]} <span style={{ color: "var(--neon)" }}>{t.coachLogin.split(" ").slice(1).join(" ")}</span>
        </h2>
        <p style={{ color: "var(--muted)", fontSize: 13, marginTop: 6 }}>{t.restricted}</p>
      </div>
      <div className="card">
        <div className="field">
          <label className="lbl">{t.email}</label>
          <input type="email" placeholder="coach@fitpro.com" value={email} onChange={e => setEmail(e.target.value)} onKeyDown={e => e.key === "Enter" && handleLogin()} style={{ direction: "ltr" }} />
        </div>
        <div className="field">
          <label className="lbl">{t.password}</label>
          <input type="password" placeholder="••••••••" value={pass} onChange={e => setPass(e.target.value)} onKeyDown={e => e.key === "Enter" && handleLogin()} style={{ direction: "ltr" }} />
        </div>
        {error && <div style={{ color: "var(--danger)", fontSize: 13, marginBottom: 16, padding: "10px 12px", background: "rgba(255,68,68,0.08)", borderRadius: 6, border: "1px solid rgba(255,68,68,0.2)" }}>{error}</div>}
        <button className="neon-btn" style={{ width: "100%", padding: 15 }} onClick={handleLogin} disabled={loading}>
          {loading ? t.signingIn : t.accessDashboard}
        </button>
        <p style={{ color: "var(--muted)", fontSize: 12, textAlign: "center", marginTop: 14 }}>{t.demo}</p>
      </div>
    </div>
  );
};

// ─── COACH DASHBOARD ──────────────────────────────────────────────────────────
const CoachDashboard = ({ onLogout, t, lang }) => {
  const isAr = lang === "ar";
  const [clients, setClients] = useState([]);
  const [selected, setSelected] = useState(null);
  const [plans, setPlans] = useState({});
  const [saving, setSaving] = useState(false);
  const [savedId, setSavedId] = useState(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("fitcoach_clients") || "[]");
    setClients(data);
    const p = {};
    data.forEach(c => { p[c.id] = { workoutPlan: c.workoutPlan || "", dietPlan: c.dietPlan || "", notes: c.notes || "", progress: c.progress || "" }; });
    setPlans(p);
  }, []);

  const deleteClient = (client) => {
    if (!window.confirm(isAr ? `هل أنت متأكد من حذف ${client.fullName}؟` : `Are you sure you want to delete ${client.fullName}?`)) return;
    const updated = clients.filter(c => c.id !== client.id);
    localStorage.setItem("fitcoach_clients", JSON.stringify(updated));
    setClients(updated);
    if (selected?.id === client.id) setSelected(null);
  };

  const savePlan = async (client) => {
    setSaving(true);
    const updated = clients.map(c => c.id === client.id ? { ...c, ...plans[client.id] } : c);
    localStorage.setItem("fitcoach_clients", JSON.stringify(updated));
    setClients(updated);
    await new Promise(r => setTimeout(r, 700));
    setSaving(false);
    setSavedId(client.id);
    setTimeout(() => setSavedId(null), 2500);

    // إشعار واتساب للعميل
    const phone = client.phone ? client.phone.replace(/[^0-9]/g, "") : "";
    if (phone) {
      const msg = encodeURIComponent(
        `مرحباً ${client.fullName} 💪\n\nتم إعداد خطتك الرياضية!\n\n` +
        `🏋️ خطة التمرين:\n${plans[client.id]?.workoutPlan || ""}\n\n` +
        `🥗 الخطة الغذائية:\n${plans[client.id]?.dietPlan || ""}\n\n` +
        `📝 ملاحظات الكوتش:\n${plans[client.id]?.notes || ""}\n\n` +
        `💪 وفقك الله في رحلتك! 🔥`
      );
      window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
    }
  };

  const goalColors = { "إنقاص الوزن": "#ff6b2b", "بناء العضلات": "#c8f041", "لياقة عامة": "#4ecdc4", "أداء رياضي": "#a78bfa", "إعادة تشكيل الجسم": "#fb923c", "Weight Loss": "#ff6b2b", "Muscle Gain": "#c8f041", "General Fitness": "#4ecdc4", "Athletic Performance": "#a78bfa", "Body Recomposition": "#fb923c" };

  const allGoals = [...new Set(clients.map(c => c.fitnessGoal))];
  const filtered = filter === "all" ? clients : clients.filter(c => c.fitnessGoal === filter);

  return (
    <div className="page-wrap" style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 5vw 80px" }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32, flexWrap: "wrap", gap: 16, flexDirection: isAr ? "row-reverse" : "row" }}>
        <div style={{ textAlign: isAr ? "right" : "left" }}>
          <span style={{ fontFamily: isAr ? "'Cairo'" : "'Barlow Condensed', sans-serif", fontSize: 12, letterSpacing: isAr ? 1 : 3, color: "var(--neon)", textTransform: isAr ? "none" : "uppercase" }}>{t.coachPortal}</span>
          <h1 style={{ fontFamily: isAr ? "'Cairo'" : "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(28px, 4vw, 42px)", textTransform: isAr ? "none" : "uppercase", marginTop: 2 }}>
            {t.clientDashboard.split(" ")[0]} <span style={{ color: "var(--neon)" }}>{t.clientDashboard.split(" ").slice(1).join(" ")}</span>
          </h1>
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center", flexDirection: isAr ? "row-reverse" : "row" }}>
          <div style={{ textAlign: isAr ? "right" : "left" }}>
            <div style={{ fontSize: 13, color: "var(--muted)" }}>{t.totalClients}</div>
            <div style={{ fontFamily: isAr ? "'Cairo'" : "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 28, color: "var(--neon)", lineHeight: 1 }}>{clients.length}</div>
          </div>
          <button className="ghost-btn" onClick={onLogout}>{t.logout}</button>
        </div>
      </div>

      {/* Filters */}
      <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap", justifyContent: isAr ? "flex-end" : "flex-start" }}>
        <button onClick={() => setFilter("all")} style={{
          padding: "7px 14px", borderRadius: 20,
          background: filter === "all" ? "var(--neon)" : "var(--card)",
          color: filter === "all" ? "#000" : "var(--muted)",
          border: `1px solid ${filter === "all" ? "var(--neon)" : "var(--border)"}`,
          fontFamily: isAr ? "'Cairo'" : "'Barlow Condensed', sans-serif",
          fontWeight: 700, fontSize: 13, cursor: "pointer", transition: "all 0.15s",
        }}>{t.filterAll}</button>
        {allGoals.map(g => (
          <button key={g} onClick={() => setFilter(g)} style={{
            padding: "7px 14px", borderRadius: 20,
            background: filter === g ? "var(--neon)" : "var(--card)",
            color: filter === g ? "#000" : "var(--muted)",
            border: `1px solid ${filter === g ? "var(--neon)" : "var(--border)"}`,
            fontFamily: isAr ? "'Cairo'" : "'Barlow Condensed', sans-serif",
            fontWeight: 700, fontSize: 13, cursor: "pointer", transition: "all 0.15s",
          }}>{g}</button>
        ))}
      </div>

      {clients.length === 0 ? (
        <div className="card" style={{ textAlign: "center", padding: "60px 24px" }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>📋</div>
          <h3 style={{ fontFamily: isAr ? "'Cairo'" : "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 22, textTransform: isAr ? "none" : "uppercase" }}>{t.noClientsTitle}</h3>
          <p style={{ color: "var(--muted)", marginTop: 8 }}>{t.noClientsDesc}</p>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: selected ? "320px 1fr" : "1fr", gap: 20 }}>
          {/* List */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {filtered.map((c, i) => (
              <div key={c.id} className="card" style={{
                animation: `slideIn 0.3s ease ${i * 0.05}s both`,
                border: `1px solid ${selected?.id === c.id ? "var(--neon)" : "var(--border)"}`,
                background: selected?.id === c.id ? "rgba(200,240,65,0.05)" : "var(--card)",
                transition: "all 0.2s", padding: "16px 20px", position: "relative",
              }}>
                {/* زر الحذف */}
                <button onClick={e => { e.stopPropagation(); deleteClient(c); }} style={{
                  position: "absolute", top: 10, left: isAr ? 10 : "auto", right: isAr ? "auto" : 10,
                  background: "rgba(255,68,68,0.1)", border: "1px solid rgba(255,68,68,0.3)",
                  color: "var(--danger)", borderRadius: 6, padding: "4px 10px",
                  fontSize: 13, cursor: "pointer", fontFamily: isAr ? "'Cairo'" : "'Barlow', sans-serif",
                  fontWeight: 700, transition: "all 0.2s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,68,68,0.25)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,68,68,0.1)"; }}
                >🗑 {isAr ? "حذف" : "Delete"}</button>

                <div onClick={() => setSelected(c)} style={{ cursor: "pointer" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexDirection: isAr ? "row-reverse" : "row" }}>
                    <div style={{ textAlign: isAr ? "right" : "left" }}>
                      <div style={{ fontFamily: isAr ? "'Cairo'" : "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 18 }}>{c.fullName}</div>
                      <div style={{ color: "var(--muted)", fontSize: 12, marginTop: 2 }}>{c.age} • {c.gender} • BMI {c.bmi}</div>
                    </div>
                    <span className="tag" style={{ background: `${goalColors[c.fitnessGoal] || "var(--neon)"}22`, color: goalColors[c.fitnessGoal] || "var(--neon)", border: `1px solid ${goalColors[c.fitnessGoal] || "var(--neon)"}44`, fontSize: 10, marginLeft: isAr ? 0 : 60, marginRight: isAr ? 60 : 0 }}>
                      {c.fitnessGoal}
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: 8, marginTop: 10, justifyContent: isAr ? "flex-end" : "flex-start" }}>
                    <span className="tag" style={{ background: "var(--bg3)", color: "var(--muted)", border: "1px solid var(--border)" }}>{c.activityLevel}</span>
                    {plans[c.id]?.workoutPlan && <span className="tag" style={{ background: "rgba(200,240,65,0.1)", color: "var(--neon)", border: "1px solid rgba(200,240,65,0.2)" }}>{t.planReady}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Detail */}
          {selected && (
            <div style={{ animation: "fadeUp 0.3s ease" }}>
              <div className="card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20, flexDirection: isAr ? "row-reverse" : "row" }}>
                  <div style={{ textAlign: isAr ? "right" : "left" }}>
                    <h2 style={{ fontFamily: isAr ? "'Cairo'" : "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 26 }}>{selected.fullName}</h2>
                    <p style={{ color: "var(--muted)", fontSize: 13, marginTop: 4 }}>
                      {t.submittedOn}: {new Date(selected.submittedAt).toLocaleDateString(isAr ? "ar-SA" : "en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </p>
                  </div>
                  <button onClick={() => setSelected(null)} style={{ background: "none", border: "1px solid var(--border)", color: "var(--muted)", padding: "6px 14px", borderRadius: 6, cursor: "pointer", fontSize: 18 }}>×</button>
                </div>

                {/* Stats */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(90px, 1fr))", gap: 10, marginBottom: 24 }}>
                  {t.statsLabels.map((label, i) => {
                    const vals = [selected.age, selected.gender, selected.weight, selected.height, selected.bmi, selected.activityLevel];
                    const units = t.statsUnits;
                    return (
                      <div key={label} style={{ padding: "12px", background: "var(--bg3)", borderRadius: 8, textAlign: "center" }}>
                        <div style={{ fontSize: 10, color: "var(--muted)", letterSpacing: 1 }}>{label}</div>
                        <div style={{ fontFamily: isAr ? "'Cairo'" : "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 17, color: "var(--neon)", marginTop: 4 }}>{vals[i]}{units[i]}</div>
                      </div>
                    );
                  })}
                </div>

                <div style={{ padding: "10px 14px", background: "rgba(200,240,65,0.07)", border: "1px solid rgba(200,240,65,0.2)", borderRadius: 8, marginBottom: 24, textAlign: isAr ? "right" : "left" }}>
                  <span style={{ fontFamily: isAr ? "'Cairo'" : "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 13, color: "var(--neon)" }}>{t.goalLabel} </span>
                  <span style={{ fontSize: 14 }}>{selected.fitnessGoal}</span>
                </div>

                {/* Plan fields */}
                {t.planFields.map(field => (
                  <div key={field.key} className="field">
                    <label className="lbl">{field.label}</label>
                    <textarea rows={5} placeholder={field.ph}
                      value={plans[selected.id]?.[field.key] || ""}
                      onChange={e => setPlans(p => ({ ...p, [selected.id]: { ...p[selected.id], [field.key]: e.target.value } }))}
                    />
                  </div>
                ))}

                <button className="neon-btn" style={{ width: "100%", padding: 14 }} onClick={() => savePlan(selected)} disabled={saving}>
                  {saving ? (
                    <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                      <span style={{ width: 14, height: 14, border: "2px solid #000", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 0.7s linear infinite", display: "inline-block" }} />
                      {t.saving}
                    </span>
                  ) : savedId === selected.id ? t.saved : t.savePlan}
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// ─── FOOTER ───────────────────────────────────────────────────────────────────
const Footer = ({ t, lang }) => (
  <footer style={{ borderTop: "1px solid var(--border)", padding: "32px 5vw", textAlign: "center" }}>
    <div style={{ fontFamily: lang === "ar" ? "'Cairo', sans-serif" : "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 20, letterSpacing: lang === "ar" ? 0 : 2, marginBottom: 16 }}>
      فيت كوتش <span style={{ color: "var(--neon)" }}>برو</span>
    </div>
    {/* Social Links */}
    <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 16, flexWrap: "wrap" }}>
      <a href="https://wa.me/201063033247" target="_blank" rel="noreferrer" style={{
        display: "flex", alignItems: "center", gap: 8,
        background: "#25D366", color: "#fff",
        padding: "8px 18px", borderRadius: 20,
        textDecoration: "none", fontSize: 13, fontWeight: 700,
        fontFamily: lang === "ar" ? "'Cairo', sans-serif" : "'Barlow', sans-serif",
        transition: "transform 0.2s, opacity 0.2s",
      }}
        onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
        onMouseLeave={e => e.currentTarget.style.opacity = "1"}
      >
        💬 {lang === "ar" ? "تواصل واتساب" : "WhatsApp"}
      </a>
      <a href="https://www.instagram.com/ehababshakour" target="_blank" rel="noreferrer" style={{
        display: "flex", alignItems: "center", gap: 8,
        background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
        color: "#fff",
        padding: "8px 18px", borderRadius: 20,
        textDecoration: "none", fontSize: 13, fontWeight: 700,
        fontFamily: lang === "ar" ? "'Cairo', sans-serif" : "'Barlow', sans-serif",
        transition: "opacity 0.2s",
      }}
        onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
        onMouseLeave={e => e.currentTarget.style.opacity = "1"}
      >
        📸 {lang === "ar" ? "انستغرام" : "Instagram"} @ehababshakour
      </a>
    </div>
    <p style={{ color: "var(--muted)", fontSize: 13 }}>© {new Date().getFullYear()} FitCoach Pro. {t.rights}</p>
  </footer>
);

// ─── ROOT APP ─────────────────────────────────────────────────────────────────
export default function App() {
  const [lang, setLang] = useState("ar"); // العربية لغة افتراضية
  const [page, setPage] = useState("home");
  const [coachLoggedIn, setCoachLoggedIn] = useState(false);
  const t = T[lang];

  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [page]);

  const renderPage = () => {
    if (page === "home") return <HomePage setPage={setPage} t={t} lang={lang} />;
    if (page === "client") return <ClientFormPage t={t} lang={lang} />;
    if (page === "coach") {
      if (!coachLoggedIn) return <CoachLogin onLogin={() => setCoachLoggedIn(true)} t={t} lang={lang} />;
      return <CoachDashboard onLogout={() => { setCoachLoggedIn(false); setPage("home"); }} t={t} lang={lang} />;
    }
  };

  return (
    <>
      <GlobalStyle lang={lang} />
      <Ticker t={t} />
      <Navbar page={page} setPage={setPage} lang={lang} setLang={setLang} t={t} />
      <main>{renderPage()}</main>
      <Footer t={t} lang={lang} />
    </>
  );
}
