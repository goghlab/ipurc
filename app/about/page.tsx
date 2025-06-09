import Link from "next/link"
import { Users, Award, Globe, Shield, Target, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                <div className="w-8 h-8 bg-white rounded transform rotate-45"></div>
              </div>
              <div className="text-sm text-gray-600">
                <div>Universal Regional Consultants Limited</div>
              </div>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 text-sm">
                主頁
              </Link>
              <Link href="/about" className="text-blue-600 font-medium text-sm">
                關於
              </Link>
              <Link href="/trademark" className="text-gray-700 hover:text-blue-600 text-sm">
                商標註冊
              </Link>
              <Link href="/accounting" className="text-gray-700 hover:text-blue-600 text-sm">
                會計/審計
              </Link>
              <Link href="/hk-company" className="text-gray-700 hover:text-blue-600 text-sm">
                註冊香港公司
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 text-sm">
                BLOG
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 text-sm">
                聯絡我們
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-blue-600 hover:underline">
              主頁
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">關於</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">關於我們</h1>
            <p className="text-xl text-slate-100 max-w-3xl mx-auto">
              Universal Regional Consultants Limited 致力為客戶提供專業、可靠的商業諮詢服務。
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">公司簡介</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Universal Regional Consultants Limited (IPURC) 成立於2010年，是一家專業的商業諮詢公司，
                  總部設於香港。我們專注於為中小企業及跨國公司提供全方位的商業服務。
                </p>
                <p>
                  憑藉多年的行業經驗和專業知識，我們已成功協助超過1000家企業完成商標註冊、
                  公司設立及財務管理等各項業務，贏得了客戶的信任和好評。
                </p>
                <p>
                  我們的團隊由資深律師、會計師及商業顧問組成，致力於為客戶提供最優質的服務，
                  助力企業在競爭激烈的市場中取得成功。
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                  <div className="text-gray-600">服務客戶</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">14年</div>
                  <div className="text-gray-600">行業經驗</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600">專業團隊</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                  <div className="text-gray-600">客戶滿意度</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Target className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>我們的使命</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  為客戶提供專業、高效的商業諮詢服務，協助企業在全球市場中建立競爭優勢， 實現可持續發展。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>我們的願景</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  成為亞太地區領先的商業諮詢服務提供商，以創新的解決方案和卓越的服務品質， 贏得客戶信賴。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Heart className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>我們的價值觀</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  誠信、專業、創新、客戶至上。我們堅持以客戶需求為導向， 提供量身定制的解決方案。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">專業團隊</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">我們的團隊由經驗豐富的專業人士組成</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">張律師</h3>
                <p className="text-gray-600 mb-4">商標法律部主管</p>
                <p className="text-sm text-gray-500">擁有15年商標法律經驗，專精國際商標註冊及知識產權保護。</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">李會計師</h3>
                <p className="text-gray-600 mb-4">財務部總監</p>
                <p className="text-sm text-gray-500">香港註冊會計師，擁有豐富的審計及稅務規劃經驗。</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Shield className="w-12 h-12 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">王顧問</h3>
                <p className="text-gray-600 mb-4">公司事務部經理</p>
                <p className="text-sm text-gray-500">專責公司註冊及企業合規事務，服務超過500家企業。</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">專業資格</h2>
            <p className="text-lg text-gray-600">我們的專業認證和資格</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">香港律師會</h3>
              <p className="text-sm text-gray-600">註冊律師資格</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">香港會計師公會</h3>
              <p className="text-sm text-gray-600">註冊會計師資格</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">國際商標協會</h3>
              <p className="text-sm text-gray-600">會員資格</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">香港公司秘書公會</h3>
              <p className="text-sm text-gray-600">註冊公司秘書</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">與我們合作</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            選擇IPURC，讓我們的專業團隊為您的業務發展保駕護航
          </p>
          <div className="space-x-4">
            <Button size="lg" variant="secondary">
              聯絡我們
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              了解服務
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
