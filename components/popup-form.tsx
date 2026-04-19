"use client"
import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

export default function PopupForm() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({ name: "", phone: "", project: "" })
  const { toast } = useToast()

  useEffect(() => {
    // Show after 3 seconds, once per session
    if (sessionStorage.getItem("popup-shown")) return
    const id = setTimeout(() => {
      setOpen(true)
      sessionStorage.setItem("popup-shown", "1")
    }, 3000)
    return () => clearTimeout(id)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch("https://formsubmit.co/ajax/apkzoz85@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          "المشروع": formData.project || "لم يتم التحديد",
          _subject: "عميل محتمل – مدينة مصر (Popup)",
          _captcha: "false",
          _template: "table",
          _cc: "faroukabokhalil6@gmail.com,maryaam.sameeh223@gmail.com",
        }),
      })
      if (res.ok) {
        toast({ title: "تم الإرسال!", description: "سنتواصل معك في أقرب وقت" })
        setOpen(false)
      } else throw new Error()
    } catch {
      toast({ title: "خطأ", description: "يرجى المحاولة مرة أخرى", variant: "destructive" })
    } finally { setLoading(false) }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />

      {/* Modal */}
      <div className="relative bg-card border border-border shadow-2xl w-full max-w-md p-0 overflow-hidden" dir="rtl">
        {/* Header */}
        <div className="bg-primary text-primary-foreground px-6 py-5 text-center relative">
          <button onClick={() => setOpen(false)} className="absolute top-3 left-3 text-primary-foreground/60 hover:text-primary-foreground transition-colors">
            <X className="w-5 h-5" />
          </button>
          <div className="inline-block bg-primary-foreground/20 text-primary-foreground text-xs font-bold px-3 py-1 rounded-full mb-2">
            🔥 عرض لفترة محدودة
          </div>
          <h2 className="text-xl font-black mb-1">أسعار تبدأ من ٨ مليون جنيه</h2>
          <p className="text-primary-foreground/70 text-sm">سراي • تاج سيتي • باترفلاي • تلالا</p>
        </div>

        {/* Phone */}
        <div className="bg-muted/50 px-6 py-3 flex items-center justify-between border-b border-border">
          <span className="text-xs text-muted-foreground">للاستفسار والحجز الفوري</span>
          <a href="tel:+201155487545" className="text-base font-black text-primary hover:underline" dir="ltr">01155487545</a>
        </div>

        {/* Form */}
        <div className="px-6 py-5">
          <p className="text-sm text-muted-foreground mb-4 text-center">أو سجّل بياناتك وسنتواصل معك</p>
          <form onSubmit={handleSubmit} className="space-y-3">
            <Input placeholder="الاسم الكريم *" value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required className="text-right h-11" />
            <Input type="tel" placeholder="رقم الهاتف *" value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required className="h-11" dir="ltr" />
            <Select value={formData.project} onValueChange={(v) => setFormData({ ...formData, project: v })}>
              <SelectTrigger className="h-11 text-right w-full bg-white border border-input">
                <SelectValue placeholder="المشروع المهتم به" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sarai">سراي – القاهرة الجديدة</SelectItem>
                <SelectItem value="talala">تلالا – هليوبوليس الجديدة</SelectItem>
                <SelectItem value="tajcity">تاج سيتي – القاهرة الجديدة</SelectItem>
                <SelectItem value="butterfly">باترفلاي – مدينة المستقبل</SelectItem>
                <SelectItem value="all">أكثر من مشروع</SelectItem>
              </SelectContent>
            </Select>
            <Button type="submit" disabled={loading}
              className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base">
              {loading ? "جاري الإرسال..." : "احجز استشارة مجانية"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
