"use client"

export default function ProjectSarai() {
  const phone = "+201119770408"
  const waLink = `https://wa.me/${phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("مرحباً، أنا مهتم بمشروع سراي من مدينة مصر وأريد معرفة المزيد")}`

  const details = [
    { label: "الموقع", value: "القاهرة الجديدة – طريق القاهرة السويس" },
    { label: "الوحدات", value: "شقق • دوبلكس • فيلات • توين هاوس" },
    { label: "التصميم", value: "Benoy – مصمم حلبة F1" },
    { label: "قريب من", value: "٥ دقائق من العاصمة الإدارية" },
    { label: "السداد", value: "٥٪ مقدم | تقسيط ١٢ سنة" },
    { label: "اللاجون", value: "٥٠,٠٠٠ م² أكبر لاجون في القاهرة" },
  ]

  const features = ["لاجون ٥٠,٠٠٠ م²", "نادي رياضي", "فندق ٥ نجوم", "مدرسة دولية", "Arena Mall", "سبا ومركز صحي", "مسارات ركض", "أمن ٢٤/٧"]

  return (
    <section id="sarai" className="bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-2 mb-4 border border-primary/20">القاهرة الجديدة – طريق القاهرة السويس</span>
          <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-3">سراي</h2>
          <p className="text-lg text-muted-foreground">مدينة مصر – مشروع متكامل على ٥.٥ مليون م²</p>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-[16/7] overflow-hidden shadow-2xl mb-12">
          <img src="https://prod-images.nawy.com/processed/compound_image/image/7181/default.webp" alt="سراي"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-8 right-8 text-right text-white">
            <p className="text-3xl font-black">سراي</p>
            <p className="text-white/75">القاهرة الجديدة – طريق القاهرة السويس</p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
          {/* Left: Description + Stats */}
          <div className="text-right space-y-5">
            <p className="text-base text-muted-foreground leading-relaxed">
              سراي هو المشروع الرائد لمدينة مصر على ٥.٥ مليون م² في القاهرة الجديدة. صممه المكتب العالمي Benoy مصمم حلبة الفورمولا ١. يضم أكبر لاجون بلوري في القاهرة على مساحة ٥٠,٠٠٠ م²، ومتكامل بالكامل مع فندق ٥ نجوم، مدرسة دولية، ومول Arena Strip.
            </p>
            <div className="grid grid-cols-3 gap-3">
              {[{ v: "5.5M", l: "م² مساحة" }, { v: "13+", l: "مرحلة" }, { v: "50K", l: "م² لاجون" }].map((s, i) => (
                <div key={i} className="bg-muted/30 p-5 border border-border text-center">
                  <div className="text-2xl font-black text-primary mb-1">{s.v}</div>
                  <div className="text-xs text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Details List */}
          <div className="space-y-0">
            {details.map((item, i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-border">
                <span className="text-primary font-semibold text-sm">{item.value}</span>
                <span className="text-muted-foreground text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {features.map((f, i) => (
            <div key={i} className="bg-muted/30 p-4 text-center text-sm text-muted-foreground font-medium border border-border">{f}</div>
          ))}
        </div>

        {/* Gallery */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-foreground mb-5 text-center">معرض الصور</h3>
          <div className="grid grid-cols-3 gap-3">
            {[7185, 7184, 7179, 7180, 7178, 1422].map((id, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden">
                <img src={`https://prod-images.nawy.com/processed/compound_image/image/${id}/default.webp`}
                  alt={`سراي ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary p-8 lg:p-10 text-center text-primary-foreground">
          <h3 className="text-2xl font-bold mb-2">احجز وحدتك في سراي</h3>
          <p className="text-primary-foreground/80 mb-6 text-sm">تواصل معنا للحصول على العروض الحصرية والأسعار</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="bg-white text-primary px-8 py-3 font-bold hover:bg-gray-100 transition-colors">واتساب</a>
            <a href={`tel:${phone}`} className="border-2 border-primary-foreground text-primary-foreground px-8 py-3 font-bold hover:bg-primary-foreground/10 transition-colors">اتصل الآن</a>
          </div>
        </div>

      </div>
    </section>
  )
}
