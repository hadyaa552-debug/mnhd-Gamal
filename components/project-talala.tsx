"use client"

export default function ProjectTalala() {
  const phone = "+201155487545"
  const waLink = `https://wa.me/${phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("مرحباً، أنا مهتم بمشروع تلالا من مدينة مصر وأريد معرفة المزيد")}`

  return (
    <section id="talala" className="bg-muted/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-2 mb-4 border border-primary/20">هليوبوليس الجديدة – شرق القاهرة</span>
          <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-3">تلالا</h2>
          <p className="text-xl text-muted-foreground">Talala – مدينة مصر – ٥٠٠ فدان في هليوبوليس الجديدة</p>
        </div>

        <div className="relative aspect-[16/7] overflow-hidden shadow-2xl mb-12">
          <img src="https://prod-images.nawy.com/processed/compound_image/image/13764/default.webp" alt="تلالا" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-8 right-8 text-right text-white">
            <p className="text-3xl font-black">تلالا</p>
            <p className="text-white/75">هليوبوليس الجديدة – شرق القاهرة</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="text-right space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              تلالا هو أحدث مشاريع مدينة مصر العملاقة في هليوبوليس الجديدة على ٥٠٠ فدان. استثمارات بـ ٩٠ مليار جنيه. يجمع بين الشقق الفاخرة والفيلات والمساحات الخضراء الواسعة. موقع استراتيجي بين طريق القاهرة السويس وطريق القاهرة الإسماعيلية.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4 text-center">
              {[{ v: "500", l: "فدان" }, { v: "90B", l: "جنيه استثمارات" }, { v: "4%", l: "مقدم فقط" }].map((s, i) => (
                <div key={i} className="bg-muted/30 p-5 border border-border">
                  <div className="text-3xl font-black text-primary mb-1">{s.v}</div>
                  <div className="text-xs text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-0">
            {[
              { label: "الموقع", value: "هليوبوليس الجديدة – بين طريق السويس والإسماعيلية" },
              { label: "الوحدات", value: "شقق • S-Villa • تاون هاوس • فيلات مستقلة" },
              { label: "المساحات", value: "من ٣٥م² حتى ٢٤٧م²" },
              { label: "السداد", value: "٤٪ مقدم | تقسيط ١٥ سنة" },
              { label: "قريب من", value: "العاصمة الإدارية • New Giza • SODIC" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-border">
                <span className="text-primary font-semibold">{item.value}</span>
                <span className="text-muted-foreground text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {["مساحات خضراء واسعة", "مسارات ركض وسايكل", "Wellness Hub", "روضة أطفال", "مناطق تجمع خارجية", "حمامات سباحة", "أمن ٢٤/٧", "تشطيب كامل"].map((f, i) => (
            <div key={i} className="bg-background p-4 text-center text-sm text-muted-foreground font-medium border border-border">{f}</div>
          ))}
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">معرض الصور</h3>
          <div className="grid grid-cols-3 gap-3">
            {[13765, 13766, 13767, 13768, 13757, 13758].map((id, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden">
                <img src={`https://prod-images.nawy.com/processed/compound_image/image/${id}/default.webp`}
                  alt={`تلالا ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary p-8 lg:p-10 text-center text-primary-foreground">
          <h3 className="text-2xl font-bold mb-2">احجز وحدتك في تلالا</h3>
          <p className="text-primary-foreground/80 mb-6">تواصل معنا للحصول على العروض الحصرية والأسعار</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="bg-white text-primary px-8 py-3 font-bold hover:bg-gray-100 transition-colors">واتساب</a>
            <a href={`tel:${phone}`} className="border-2 border-primary-foreground text-primary-foreground px-8 py-3 font-bold hover:bg-primary-foreground/10 transition-colors">اتصل الآن</a>
          </div>
        </div>
      </div>
    </section>
  )
}
