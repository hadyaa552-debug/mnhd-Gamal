import { Building2, Award, MapPin, Users } from "lucide-react"

export default function AboutDeveloper() {
  const stats = [
    { icon: Building2, number: "1959", label: "سنة التأسيس" },
    { icon: MapPin, number: "3+", label: "مشاريع نشطة" },
    { icon: Award, number: "65+", label: "سنة خبرة" },
    { icon: Users, number: "32K", label: "عائلة مستهدفة" },
  ]
  return (
    <section id="about" className="py-20 lg:py-32 bg-muted/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6">مدينة مصر للإسكان والتعمير</h2>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              تأسست عام ١٩٥٩ وساهمت في بناء مدينة نصر. اليوم تطور سراي وتاج سيتي في القاهرة الجديدة وباترفلاي في مدينة المستقبل — مشاريع متكاملة تضم أكثر من ٣٢,٠٠٠ عائلة.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-primary/10 border border-primary/20">
                  <stat.icon className="w-8 h-8 lg:w-10 lg:h-10 text-primary" />
                </div>
                <div className="text-3xl lg:text-4xl font-black text-foreground">{stat.number}</div>
                <div className="text-sm lg:text-base text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
