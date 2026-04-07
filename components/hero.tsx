"use client"
import { useEffect, useState } from "react"
import ContactForm from "@/components/contact-form"

export default function Hero() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { setVisible(true) }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://prod-images.nawy.com/processed/compound_image/image/7185/default.webp"
          alt="سراي مدينة مصر" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-l from-white/85 via-white/40 to-white/10" />
        <div className="absolute inset-0 bg-white/15" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 w-full pt-20 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`text-right space-y-6 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div>
              <p className="text-primary font-bold tracking-widest text-sm uppercase mb-3">مدينة مصر للإسكان والتعمير</p>
              <h1 className="text-4xl lg:text-5xl font-black text-foreground leading-tight mb-3">
                سراي<br/>
                <span className="text-primary text-2xl lg:text-3xl font-bold">تاج سيتي • باترفلاي</span>
              </h1>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed max-w-lg mr-auto lg:mr-0">
              ثلاثة مشاريع استثنائية من أقدم وأكبر شركات التطوير العقاري في مصر — منذ ١٩٥٩ وحتى اليوم
            </p>
            <div className="flex flex-wrap gap-3 justify-end">
              {["القاهرة الجديدة", "مدينة المستقبل", "تسليم فوري متاح", "٦٥+ سنة خبرة"].map((tag, i) => (
                <span key={i} className="border border-primary/30 text-primary bg-primary/5 px-4 py-1.5 text-sm font-medium">{tag}</span>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-4 pt-2">
              {[{ value: "1959", label: "سنة التأسيس" }, { value: "3", label: "مشاريع نشطة" }, { value: "65+", label: "سنة خبرة" }].map((s, i) => (
                <div key={i} className="text-right border-r border-border pr-4 first:border-r-0 first:pr-0">
                  <div className="text-3xl font-black text-primary">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
