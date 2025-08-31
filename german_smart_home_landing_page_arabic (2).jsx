import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Lightbulb,
  Lock,
  Thermometer,
  Shield,
  Smartphone,
  Plug,
  Wifi,
  Zap,
  Home,
  Settings,
  Check,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Quote,
  Star,
  Building2,
  Ribbon,
} from "lucide-react";

/**
 * Official one-page site design (SPA) ready for publishing.
 * - Palette: Primary #FF6A00 (orange), Accent #00AEEF (light blue), neutrals light.
 * - Sections: Hero, Services, Products, Solutions, Process, Pricing, Projects, About, Partners, Testimonials, CTA, FAQ, Contact, Footer.
 * - SEO: JSON-LD (Organization + LocalBusiness), accessible landmarks, RTL.
 */

export default function SmartHomeSite() {
  const business = {
    name: "German Smart Home",
    slogan: "نحو منزل أذكى وأجمل",
    phone: "+963961102030",
    phoneNumbers: ["00963961102030", "00961984077258", "00961984077259"],
    whatsapp: "00491793477320".replace(/^00/, ""), // 491793477320
    email: "g.smarthome.sy@gmail.com",
    address: "دمشق – سوريا",
    logoUrl: "/logo.png", // ضع الشعار في public/logo.png عند النشر
    sameAs: [
      // أضف روابط صفحاتك الرسمية إن وجدت
    ],
  };

  // sanity checks (lightweight tests)
  useEffect(() => {
    console.assert(Array.isArray(business.phoneNumbers), "`business.phoneNumbers` must be an array");
    console.assert(business.phoneNumbers?.length >= 1, "`business.phoneNumbers` should have at least one phone number");
  }, []);

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`مرحبًا، أود استشارة لتركيب نظام سمارت هوم من ${business.name}.`);
    window.open(`https://wa.me/${business.whatsapp}?text=${text}`, "_blank");
  };

  const [form, setForm] = useState({ name: "", phone: "", message: "", agree: false });
  const [logoError, setLogoError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.agree) return alert("يرجى الموافقة على سياسة الخصوصية.");
    const body = encodeURIComponent(`الاسم: ${form.name}\nالهاتف: ${form.phone}\n\nالرسالة:\n${form.message}`);
    window.location.href = `mailto:${business.email}?subject=${encodeURIComponent("استشارة تركيب سمارت هوم")}&body=${body}`;
  };

  const services = [
    { title: "إضاءة ذكية", desc: "تحكم بالمشاهد والسطوع والجدولة من التطبيق أو بالأوامر الصوتية.", Icon: Lightbulb },
    { title: "أقفال وأبواب", desc: "دخول بلا مفاتيح، أكواد مؤقتة، وسجل وصول آمن.", Icon: Lock },
    { title: "تكييف وحرارة", desc: "ترموستات ذكي يوفر الطاقة ويحافظ على الراحة.", Icon: Thermometer },
    { title: "أمن ومراقبة", desc: "حساسات حركة، إنذارات، وتنبيهات فورية للهاتف.", Icon: Shield },
    { title: "تحكم عبر الجوال", desc: "كل المنزل في تطبيق واحد: داخل البيت وخارجه.", Icon: Smartphone },
    { title: "طاقة ومقابس", desc: "مقابس ومرحّلات ذكية، قياس استهلاك الطاقة وجدولتها.", Icon: Plug },
  ];

  const productFamilies = [
    { title: "Wi‑Fi Switches", note: "مفاتيح جدارية و Relay" },
    { title: "Zigbee Hubs", note: "بوابة تحكم وأتمتة" },
    { title: "Smart Plugs", note: "مقابس طاقة ذكية" },
    { title: "Sensors", note: "أبواب/حركة/حرارة" },
    { title: "Curtain & Blind", note: "ستائر وموتورات" },
    { title: "RF & Remote", note: "تحكم لاسلكي متعدد" },
  ];

  const solutions = [
    { title: "شقة سكنية", Icon: Home },
    { title: "فيلا وحديقة", Icon: Home },
    { title: "مكتب وشركات", Icon: Settings },
    { title: "مطاعم وكافيهات", Icon: Settings },
    { title: "فنادق وشقق فندقية", Icon: Settings },
    { title: "مشاريع قيد الإعمار", Icon: Settings },
  ];

  const faqs = [
    { q: "هل أستطيع التحكّم بدون إنترنت؟", a: "نعم—التحكم المحلي عبر شبكتك المنزلية متاح لبعض الأجهزة. الوصول من خارج المنزل يحتاج إنترنت." },
    { q: "هل النظام يعمل مع سونوف؟", a: "ندعم عائلة SONOFF رسميًا إضافةً إلى بروتوكولات مثل Zigbee وWi‑Fi حسب الحاجة." },
    { q: "هل يلزم تعديل التمديدات؟", a: "غالبًا لا. في العديد من الحالات نستبدل المفاتيح التقليدية بأخرى ذكية وتبقى التمديدات كما هي." },
    { q: "كم يستغرق التنفيذ؟", a: "من 1 إلى 5 أيام للمشاريع المنزلية الاعتيادية. المشاريع الكبيرة قد تحتاج مدة أطول وفق المخطط." },
    { q: "هل تقدمون ضمانًا؟", a: "نعم، ضمان على التركيب والبرمجة مع خدمة ما بعد البيع ودعم فني." },
  ];

  const testimonials = [
    { name: "م. أحمد", role: "مالك فيلا", text: "تم التنفيذ بسرعة وجودة عالية—التحكم بالمشاهد وفر علينا استهلاك الكهرباء.", stars: 5 },
    { name: "ليلى", role: "شقة سكنية", text: "الدعم ممتاز والتطبيق سهل جدًا لعائلتي.", stars: 5 },
    { name: "شركة النور", role: "مطعم", text: "تكامل الإضاءة مع مواعيد العمل رائع.", stars: 4 },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    image: business.logoUrl,
    url: typeof window !== "undefined" ? window.location.origin : "",
    telephone: business.phoneNumbers[0],
    address: { "@type": "PostalAddress", streetAddress: business.address },
    email: business.email,
    sameAs: business.sameAs,
    areaServed: "Syria",
    description: business.slogan,
  };

  return (
    <main dir="rtl" className="min-h-screen bg-gradient-to-b from-white via-white to-white text-slate-900">
      {/* JSON-LD for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-[#FF6A00]/30" role="banner">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between" aria-label="الرئيسية">
          <div className="flex items-center gap-3">
            {logoError || !business.logoUrl ? (
              <div className="h-10 w-10 rounded-xl bg-[#FF6A00] flex items-center justify-center text-white font-bold" aria-label="شعار الشركة">GS</div>
            ) : (
              <img src={business.logoUrl} alt="German Smart Home logo" className="h-10 w-10 rounded-xl object-cover ring-1 ring-[#FF6A00]/40 bg-white" onError={() => setLogoError(true)} />
            )}
            <div>
              <div className="text-lg font-semibold text-slate-900">{business.name}</div>
              <div className="text-xs text-slate-500">We make your home smarter</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-[#FF6A00]">خدماتنا</a>
            <a href="#products" className="hover:text-[#FF6A00]">المنتجات</a>
            <a href="#solutions" className="hover:text-[#FF6A00]">الحلول</a>
            <a href="#process" className="hover:text-[#FF6A00]">خطوات العمل</a>
            <a href="#pricing" className="hover:text-[#FF6A00]">الباقات</a>
            <a href="#projects" className="hover:text-[#FF6A00]">المشاريع</a>
            <a href="#about" className="hover:text-[#FF6A00]">من نحن</a>
            <a href="#partners" className="hover:text-[#FF6A00]">شركاؤنا</a>
            <a href="#faq" className="hover:text-[#FF6A00]">الأسئلة</a>
            <a href="#contact" className="hover:text-[#FF6A00]">تواصل</a>
          </div>
          <div className="flex items-center gap-2">
            <Badge className="rounded-xl bg-[#FF6A00] text-white" aria-label="وكيل SONOFF في سوريا">وكيل SONOFF في سوريا</Badge>
            <Button onClick={handleWhatsApp} className="rounded-2xl bg-[#FF6A00] text-white hover:bg-[#ff8533]">احجز زيارة مجانية</Button>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden" aria-label="بداية الصفحة">
        <div className="absolute inset-0 bg-[radial-gradient(40rem_40rem_at_80%_-10%,rgba(255,106,0,0.12),transparent)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.2] text-slate-900">
                حوِّل منزلك إلى <span className="text-[#FF6A00]">منزل ذكي</span>
              </motion.h1>
              <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                حلول متكاملة للإضاءة، الأقفال، التكييف، الأمان، والطاقة—بتجهيزات SONOFF وشركاء موثوقين.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Badge variant="secondary" className="rounded-xl">تصميم مجاني للمخطط الكهربائي</Badge>
                <Badge variant="secondary" className="rounded-xl">تركيب وبرمجة احترافية</Badge>
                <Badge variant="secondary" className="rounded-xl">دعم وخدمة ما بعد البيع</Badge>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" className="rounded-2xl bg-[#FF6A00] text-white hover:bg-[#ff8533]" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>ابدأ الآن</Button>
                <Button size="lg" variant="outline" className="rounded-2xl border-[#00AEEF] text-[#00AEEF] hover:bg-[#00AEEF]/5" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>شاهد مشاريعنا</Button>
              </div>
              <div className="mt-6 text-sm text-slate-500 flex items-center gap-2">
                <Wifi className="h-4 w-4" /> يعمل محليًا وعن بُعد | <Zap className="h-4 w-4" /> توفير للطاقة
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] w-full rounded-3xl bg-gradient-to-tr from-slate-100 to-[#FFF4EC] shadow-xl ring-1 ring-[#FF6A00]/30 p-4">
                <div className="grid grid-cols-3 gap-4 h-full">
                  {["إضاءة","أقفال","تكييف","كاميرات","ستائر","مقابس","حساسات","مشاهد","صوت"].map((t, i) => (
                    <div key={i} className="rounded-2xl bg-white/80 backdrop-blur border border-[#FF6A00]/20 flex flex-col items-center justify-center text-center p-3 shadow-sm">
                      <span className="text-2xl">🔹</span>
                      <span className="mt-2 text-sm font-medium text-slate-700">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-lg ring-1 ring-[#FF6A00]/30 px-4 py-3 text-sm">
                <div className="font-semibold text-[#FF6A00]">تكامل مع SONOFF</div>
                <div className="text-slate-500">Zigbee | Wi‑Fi | RF</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16" aria-label="الخدمات">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">خدماتنا</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ title, desc, Icon }, i) => (
            <Card key={i} className="rounded-2xl border-[#FF6A00]/20 hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <div className="h-11 w-11 rounded-xl bg-[#FF6A00]/10 ring-1 ring-[#FF6A00]/20 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-[#FF6A00]" />
                </div>
                <CardTitle className="text-lg">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed text-sm">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="products" className="bg-gradient-to-b from-[#FFF4EC] to-white py-16" aria-label="المنتجات">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">المنتجات الرئيسية (SONOFF)</h2>
            <Badge className="rounded-xl" variant="secondary">ضمان وتركيب</Badge>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productFamilies.map(({ title, note }, i) => (
              <Card key={i} className="rounded-2xl border-[#FF6A00]/20">
                <CardHeader>
                  <CardTitle className="text-base">{title}</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600 text-sm">{note}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16" aria-label="الحلول">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">حلولنا حسب نوع المشروع</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map(({ title, Icon }, i) => (
            <div key={i} className="rounded-2xl border border-[#FF6A00]/20 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-xl bg-[#FF6A00]/10 ring-1 ring-[#FF6A00]/20 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-[#FF6A00]" />
                </div>
                <div className="font-semibold">{title}</div>
              </div>
              <ul className="text-sm text-slate-600 space-y-2 list-disc pr-5">
                <li>سيناريوهات ذكية مخصصة</li>
                <li>مخططات كهربائية وتنظيم توزيع الأحمال</li>
                <li>لوحة تحكم واحدة للمستخدم</li>
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="bg-gradient-to-b from-white to-[#FFF4EC] py-16" aria-label="خطوات العمل">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-10">كيف نعمل؟</h2>
          <div className="grid lg:grid-cols-5 sm:grid-cols-2 gap-6">
            {[
              { title: "اتصال واستشارة", desc: "نفهم احتياجك ونقترح حلولًا مبدئية." },
              { title: "زيارة ومسح", desc: "معاينة الموقع وقياس النقاط والأحمال." },
              { title: "عرض فني ومالي", desc: "مخطط كهربائي + قائمة الأجهزة + التكلفة." },
              { title: "تنفيذ وبرمجة", desc: "تركيب محترف، ربط، اختبار، وتدريب." },
              { title: "تسليم وضمان", desc: "شرح استخدام وتفعيل الضمان والدعم." },
            ].map((s, i) => (
              <Card key={i} className="rounded-2xl border-[#FF6A00]/20">
                <CardHeader>
                  <Badge className="rounded-full w-fit bg-[#FF6A00]/10 text-[#FF6A00]">{i + 1}</Badge>
                  <CardTitle className="mt-2 text-base">{s.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">{s.desc}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16" aria-label="الباقات">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">باقات مبدئية (قابلة للتخصيص)</h2>
        <div className="grid lg:grid-cols-3 gap-6">
          {[
            {
              title: "Starter",
              price: "حسب المواصفات",
              features: ["منطقة/غرفة واحدة", "مفتاح ذكي + حساس", "ربط تطبيق ومشاهد أساسية", "زيارة فنية مجانية"],
            },
            {
              title: "Pro",
              price: "حسب المواصفات",
              features: ["شقة كاملة (2–3 غرف)", "مفاتيح + حساسات + ستائر", "لوحات أتمتة ومشاهد متقدمة", "ضمان 12 شهر"],
            },
            {
              title: "Elite",
              price: "حسب المواصفات",
              features: ["فيلا/مكتب كبير", "إدارة طاقة ومراقبة", "تكامل صوتي وتطبيق متعدد المستخدمين", "عقد صيانة ودعم دوري"],
            },
          ].map((pkg, i) => (
            <Card key={i} className={`rounded-2xl border-[#FF6A00]/20 ${i === 1 ? "ring-2 ring-[#FF6A00]/40" : ""}`}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{pkg.title}</CardTitle>
                  {i === 1 && <Badge className="rounded-xl bg-[#FF6A00]/10 text-[#FF6A00]">الأكثر طلبًا</Badge>}
                </div>
                <div className="text-[#FF6A00] font-semibold mt-1">{pkg.price}</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-700">
                  {pkg.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-4 w-4 mt-0.5 text-[#FF6A00]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full rounded-2xl bg-[#FF6A00] text-white hover:bg-[#ff8533]" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>اطلب تسعير</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects placeholder */}
      <section id="projects" className="bg-gradient-to-b from-[#FFF4EC] to-white py-16" aria-label="المشاريع">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">مشاريعنا</h2>
            <span className="text-sm text-slate-500">نماذج مصوّرة تُضاف لاحقًا</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-[4/3] rounded-2xl bg-white shadow-sm ring-1 ring-[#FF6A00]/20 flex items-center justify-center text-slate-400">
                قريبًا – صورة مشروع
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16" aria-label="عن الشركة">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">من نحن</h2>
            <p className="text-slate-600 leading-relaxed">
              {business.name} شركة متخصصة في حلول المنازل الذكية، نوفر أجهزة SONOFF وبروتوكولات Zigbee وWi‑Fi مع تصميم مخطط كهربائي مجاني، تركيب وبرمجة احترافية، وضمان ودعم ما بعد البيع.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li className="flex items-center gap-2"><Ribbon className="h-4 w-4 text-[#FF6A00]" /> ضمان على التركيب والبرمجة</li>
              <li className="flex items-center gap-2"><Building2 className="h-4 w-4 text-[#FF6A00]" /> حلول للشقق والفلل والمكاتب والمنشآت التجارية</li>
              <li className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#FF6A00]" /> أمان وتنبيهات فورية على جوالك</li>
            </ul>
          </div>
          <div className="rounded-3xl bg-white ring-1 ring-[#FF6A00]/20 p-6">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-4 rounded-2xl bg-[#FF6A00]/10">
                <div className="text-2xl font-bold text-[#FF6A00]">+100</div>
                <div className="text-sm text-slate-600">مشروع منفذ</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#FF6A00]/10">
                <div className="text-2xl font-bold text-[#FF6A00]">+6</div>
                <div className="text-sm text-slate-600">سنوات خبرة</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#FF6A00]/10">
                <div className="text-2xl font-bold text-[#FF6A00]">24/7</div>
                <div className="text-sm text-slate-600">دعم فني</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#FF6A00]/10">
                <div className="text-2xl font-bold text-[#FF6A00]">SONOFF</div>
                <div className="text-sm text-slate-600">شريك معتمد</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="bg-gradient-to-b from-[#FFF4EC] to-white py-16" aria-label="شركاؤنا">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">شركاؤنا</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {["SONOFF","Zigbee","Wi‑Fi","RF","Tuya","Matter"].map((b,i)=> (
              <div key={i} className="h-20 rounded-2xl bg-white ring-1 ring-[#FF6A00]/20 flex items-center justify-center text-slate-500">{b}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16" aria-label="آراء العملاء">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">ماذا يقول عملاؤنا؟</h2>
        <div className="grid lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Card key={i} className="rounded-2xl border-[#FF6A00]/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Quote className="h-5 w-5 text-[#FF6A00]" />
                  <CardTitle className="text-base">{t.name} – <span className="text-slate-500 text-sm">{t.role}</span></CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-slate-700 text-sm">
                <p className="leading-relaxed">{t.text}</p>
                <div className="mt-3 flex">
                  {Array.from({ length: t.stars }).map((_, idx) => <Star key={idx} className="h-4 w-4 text-[#FF6A00]" />)}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#FF6A00]/10 py-10" aria-label="دعوة لاتخاذ إجراء">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-lg font-semibold text-slate-900">جاهز تبدأ مشروعك الذكي؟ احجز زيارة مجانية الآن.</div>
          <div className="flex gap-3">
            <Button className="rounded-2xl bg-[#FF6A00] text-white" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>احجز الزيارة</Button>
            <Button variant="outline" className="rounded-2xl border-[#00AEEF] text-[#00AEEF]" onClick={handleWhatsApp}>راسلنا واتساب</Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16" aria-label="الأسئلة الشائعة">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">الأسئلة الشائعة</h2>
        <div className="grid lg:grid-cols-2 gap-6">
          {faqs.map((item, i) => (
            <div key={i} className="rounded-2xl border border-[#FF6A00]/20 bg-white p-6">
              <div className="font-semibold mb-2">{item.q}</div>
              <div className="text-sm text-slate-600 leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-[#FF6A00]/10 py-16" aria-label="التواصل">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">تواصل معنا</h2>
              <p className="mt-3 text-slate-600">استشارة مجانية لتقييم منزلك ووضع خطة ذكية مناسبة لميزانيتك.</p>
              <div className="mt-6 space-y-3 text-slate-700" aria-label="وسائل الاتصال">
                {(business.phoneNumbers?.length ? business.phoneNumbers : [business.phone]).map((p, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-[#FF6A00]" />
                    <a href={`tel:${p.replace(/\s/g, "")}`} className="underline decoration-[#00AEEF] underline-offset-4">
                      {p}
                    </a>
                  </div>
                ))}
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 text-[#FF6A00]" />
                  <button onClick={handleWhatsApp} className="underline decoration-[#00AEEF] underline-offset-4">واتساب مباشر</button>
                </div>
                <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-[#FF6A00]" /><span>{business.email}</span></div>
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#FF6A00]" /><span>{business.address}</span></div>
              </div>
            </div>

            <Card className="rounded-2xl border-[#FF6A00]/20">
              <CardHeader>
                <CardTitle className="text-lg">احجز زيارتك</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={onSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm mb-1 text-slate-700">الاسم</label>
                    <input required className="w-full rounded-xl border border-[#FF6A00]/30 bg-white p-3 outline-none focus:ring-2 focus:ring-[#FF6A00]" placeholder="اكتب اسمك" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-sm mb-1 text-slate-700">الهاتف</label>
                    <input required className="w-full rounded-xl border border-[#FF6A00]/30 bg-white p-3 outline-none focus:ring-2 focus:ring-[#FF6A00]" placeholder="09XXXXXXXX" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-sm mb-1 text-slate-700">الرسالة</label>
                    <textarea rows={4} className="w-full rounded-xl border border-[#FF6A00]/30 bg-white p-3 outline-none focus:ring-2 focus:ring-[#FF6A00]" placeholder="صف لنا مشروعك أو طلبك" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                  </div>
                  <label className="flex items-center gap-2 text-sm text-slate-600">
                    <input type="checkbox" checked={form.agree} onChange={(e) => setForm({ ...form, agree: e.target.checked })} />
                    أوافق على <a className="underline decoration-[#00AEEF] underline-offset-4" href="#privacy">سياسة الخصوصية</a>
                  </label>
                  <div className="flex gap-3">
                    <Button type="submit" className="rounded-2xl bg-[#FF6A00] text-white hover:bg-[#ff8533]">إرسال بالبريد</Button>
                    <Button type="button" variant="outline" className="rounded-2xl border-[#00AEEF] text-[#00AEEF] hover:bg-[#00AEEF]/5" onClick={handleWhatsApp}>إرسال واتساب</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#FF6A00]/20" role="contentinfo">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-4 items-center justify-between text-sm">
          <div className="text-slate-600">© {new Date().getFullYear()} {business.name}. جميع الحقوق محفوظة.</div>
          <div className="flex items-center gap-4 text-slate-500">
            <a id="privacy" className="hover:text-[#FF6A00]" href="#">سياسة الخصوصية</a>
            <a className="hover:text-[#FF6A00]" href="#">الشروط والأحكام</a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <button onClick={handleWhatsApp} className="fixed bottom-6 left-6 h-12 px-4 rounded-full bg-[#FF6A00] text-white shadow-lg flex items-center gap-2 hover:bg-[#ff8533]" aria-label="WhatsApp">
        <MessageCircle className="h-5 w-5" />
        تواصل واتساب
      </button>
    </main>
  );
}
