import Link from "next/link"
import { Calculator, FileText, TrendingUp, Shield, Users, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AccountingPage() {
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
              <Link href="/accounting" className="text-blue-600 font-medium text-sm">
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
            <span className="text-gray-600">會計/審計</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">會計及審計服務</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              專業的財務管理解決方案，確保您的企業財務合規，助力業務穩健發展。
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">我們的服務範圍</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              提供全方位的會計及審計服務，滿足不同規模企業的需求
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Calculator className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>記帳服務</CardTitle>
                <CardDescription>日常財務記錄及管理</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 日常交易記錄</li>
                  <li>• 銀行對帳</li>
                  <li>• 應收應付管理</li>
                  <li>• 月度財務報表</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>審計服務</CardTitle>
                <CardDescription>獨立專業的審計意見</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 年度審計</li>
                  <li>• 內部審計</li>
                  <li>• 合規審查</li>
                  <li>• 風險評估</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>稅務規劃</CardTitle>
                <CardDescription>合法節稅及稅務優化</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 稅務申報</li>
                  <li>• 稅務規劃</li>
                  <li>• 稅務諮詢</li>
                  <li>• 稅務合規</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>財務諮詢</CardTitle>
                <CardDescription>專業財務管理建議</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 財務分析</li>
                  <li>• 預算規劃</li>
                  <li>• 現金流管理</li>
                  <li>• 投資建議</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>薪酬管理</CardTitle>
                <CardDescription>員工薪酬及福利管理</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 薪資計算</li>
                  <li>• MPF管理</li>
                  <li>• 稅務申報</li>
                  <li>• 員工福利</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>公司秘書</CardTitle>
                <CardDescription>公司合規及行政支援</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 年報提交</li>
                  <li>• 董事會支援</li>
                  <li>• 合規監察</li>
                  <li>• 文件管理</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">為什麼選擇我們</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">專業資格</h3>
              <p className="text-gray-600 text-sm">持牌會計師及審計師團隊</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">及時服務</h3>
              <p className="text-gray-600 text-sm">準時完成各項財務工作</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">增值服務</h3>
              <p className="text-gray-600 text-sm">提供業務發展建議</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">客戶支援</h3>
              <p className="text-gray-600 text-sm">專責客戶經理跟進</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">讓我們為您的財務把關</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">聯絡我們的專業會計團隊，獲得免費財務諮詢</p>
          <div className="space-x-4">
            <Button size="lg" variant="secondary">
              免費諮詢
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              服務報價
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
