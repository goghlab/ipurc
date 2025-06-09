import Link from "next/link"
import { Building2, FileCheck, Globe, Zap, Shield, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HKCompanyPage() {
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
              <Link href="/about" className="text-gray-700 hover:text-blue-600 text-sm">
                關於
              </Link>
              <Link href="/trademark" className="text-gray-700 hover:text-blue-600 text-sm">
                商標註冊
              </Link>
              <Link href="/accounting" className="text-gray-700 hover:text-blue-600 text-sm">
                會計/審計
              </Link>
              <Link href="/hk-company" className="text-blue-600 font-medium text-sm">
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
            <span className="text-gray-600">註冊香港公司</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">註冊香港公司</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              香港作為國際金融中心，為您的業務提供優越的營商環境。我們提供一站式香港公司註冊服務。
            </p>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">香港公司優勢</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">選擇香港註冊公司的多重優勢</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Globe className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>國際認可</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">香港公司享有國際聲譽，便於開展國際業務及貿易往來。</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>稅制優惠</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">簡單稅制，利得稅率低，海外收入免稅，有利企業發展。</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>註冊快速</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">註冊程序簡便，一般7-10個工作天即可完成註冊。</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Building2 className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>營商自由</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">營商環境自由，外匯管制少，資金進出便利。</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileCheck className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>法制健全</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">完善的法律制度，保障投資者權益及商業機密。</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>人才薈萃</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">匯聚國際人才，便於招聘優秀員工發展業務。</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Registration Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">註冊流程</h2>
            <p className="text-lg text-gray-600">簡單五步，完成香港公司註冊</p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">公司查名</h3>
              <p className="text-gray-600 text-sm">確認公司名稱可用性</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">準備文件</h3>
              <p className="text-gray-600 text-sm">準備註冊所需文件</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">提交申請</h3>
              <p className="text-gray-600 text-sm">向公司註冊處提交</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">政府審批</h3>
              <p className="text-gray-600 text-sm">等待政府部門審批</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                5
              </div>
              <h3 className="text-lg font-semibold mb-2">完成註冊</h3>
              <p className="text-gray-600 text-sm">獲得註冊證書</p>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">所需文件</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FileCheck className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">股東及董事資料</h3>
                    <p className="text-gray-600 text-sm">身份證明文件副本及地址證明</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FileCheck className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">公司名稱</h3>
                    <p className="text-gray-600 text-sm">中英文公司名稱（可選）</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FileCheck className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">註冊地址</h3>
                    <p className="text-gray-600 text-sm">香港境內註冊地址</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FileCheck className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">業務性質</h3>
                    <p className="text-gray-600 text-sm">公司主要業務範圍</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">服務包含</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-green-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">公司註冊證書</h3>
                    <p className="text-gray-600 text-sm">政府簽發的正式註冊證書</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-green-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">商業登記證</h3>
                    <p className="text-gray-600 text-sm">一年期商業登記證</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-green-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">公司章程</h3>
                    <p className="text-gray-600 text-sm">公司組織章程大綱及細則</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-green-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">公司印章</h3>
                    <p className="text-gray-600 text-sm">公司印章及鋼印</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">立即開始您的香港業務</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">聯絡我們的專業團隊，獲得免費註冊諮詢及報價</p>
          <div className="space-x-4">
            <Button size="lg" variant="secondary">
              免費諮詢
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              獲取報價
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
