import Link from "next/link"
import { CheckCircle, Globe, Shield, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TrademarkPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header - Same as homepage */}
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
              <Link href="/trademark" className="text-blue-600 font-medium text-sm">
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
            <span className="text-gray-600">商標註冊</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">商標註冊服務</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              保護您的品牌，建立市場優勢。我們提供全球商標註冊服務，助您在國際市場建立強勢品牌形象。
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">我們的商標註冊服務</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">專業團隊為您提供全方位商標保護方案</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Globe className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>QM107 大中華區</CardTitle>
                <CardDescription>中國＋香港＋澳門＋台灣</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    一次申請，四地保護
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    專業法律團隊跟進
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    快速審批流程
                  </li>
                </ul>
                <Button className="w-full mt-6">了解詳情</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>QM107 國際版</CardTitle>
                <CardDescription>中國＋香港＋歐盟＋美國</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    覆蓋主要國際市場
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    多語言申請支援
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    全程專業指導
                  </li>
                </ul>
                <Button className="w-full mt-6">了解詳情</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>QM107 東盟</CardTitle>
                <CardDescription>東南亞市場保護</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    東盟十國覆蓋
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    新興市場機遇
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    本地化服務支援
                  </li>
                </ul>
                <Button className="w-full mt-6">了解詳情</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">註冊流程</h2>
            <p className="text-lg text-gray-600">簡單四步，完成商標註冊</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">諮詢評估</h3>
              <p className="text-gray-600 text-sm">免費商標查詢及可註冊性評估</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">準備文件</h3>
              <p className="text-gray-600 text-sm">協助準備申請所需文件資料</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">提交申請</h3>
              <p className="text-gray-600 text-sm">向相關機構提交商標註冊申請</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">獲得證書</h3>
              <p className="text-gray-600 text-sm">成功註冊，獲得商標證書</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">立即開始保護您的品牌</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">聯絡我們的專業團隊，獲得免費商標查詢及註冊建議</p>
          <div className="space-x-4">
            <Button size="lg" variant="secondary">
              免費諮詢
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              下載資料
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
