"use client"

export default function ProjectSarai() {
  const phone = "+201119770408"
  const waLink = `https://wa.me/${phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("مرحباً، أنا مهتم بمشروع سراي من مدينة مصر وأريد معرفة المزيد")}`

  return (
    <section id="sarai" className="bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-20 lg:py-32">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-2 mb-4 border border-primary/20">القاهرة الجديدة – طريق القاهرة السويس</span>
          <h2 className="text-4xl lg:text-6xl font-black text-foreground mb-3">سراي</h2>
          <p className="text-xl text-muted-foreground">مدينة مصر – مشروع متكامل على ٥.٥ مليون م²</p>
        </div>

        <div className="relative aspect-[16/7] overflow-hidden shadow-2xl mb-12">
          <img src="https://prod-images.nawy.com/processed/compound_image/image/7181/default.webp" alt="سراي" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-8 right-8 text-right text-white">
            <p className="text-3xl font-black">سراي</p>
            <p className="text-white/75">القاهرة الجديدة – طريق القاهرة السويس</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="text-right space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">سراي هو المشروع الرائد لمدينة مصر على ٥.٥ مليون م² في القاهرة الجديدة. صممه المكتب العالمي Benoy مصمم حلبة الفورمولا ١. يضم أكبر لاجون بلوري في القاهرة على مساحة ٥٠,٠٠٠ م²، ومتكامل بالكامل مع فندق ٥ نجوم، مدرسة دولية، ومول Arena Strip.</p>
            <div className="grid grid-cols-3 gap-4 pt-4 text-center">
              <div className="bg-muted/30 p-5 border border-border"><div className="text-3xl font-black text-primary mb-1">5.5M</div><div className="text-xs text-muted-foreground">م² مساحة</div></div><div className="bg-muted/30 p-5 border border-border"><div className="text-3xl font-black text-primary mb-1">13+</div><div className="text-xs text-muted-foreground">مرحلة</div></div><div className="bg-muted/30 p-5 border border-border"><div className="text-3xl font-black text-primary mb-1">50K</div><div className="text-xs text-muted-foreground">م² لاجون</div></div>
            </div>
          </div>
          <div className="space-y-0">
            sarai0
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          sarai1
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">معرض الصور</h3>
          <div className="grid grid-cols-3 gap-3">
            sarai2
          </div>
        </div>

        <div className="bg-primary p-8 lg:p-10 text-center text-primary-foreground">
          <h3 className="text-2xl font-bold mb-2">احجز وحدتك في سراي</h3>
          <p className="text-primary-foreground/80 mb-6">تواصل معنا للحصول على العروض الحصرية والأسعار</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`${waLink}`} target="_blank" rel="noopener noreferrer" className="bg-white text-primary px-8 py-3 font-bold hover:bg-gray-100 transition-colors">واتساب</a>
            <a href={`tel:${phone}`} className="border-2 border-primary-foreground text-primary-foreground px-8 py-3 font-bold hover:bg-primary-foreground/10 transition-colors">اتصل الآن</a>
          </div>
        </div>
      </div>
    </section>
  )
}
