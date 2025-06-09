import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
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
              <Link href="/hk-company" className="text-gray-700 hover:text-blue-600 text-sm">
                註冊香港公司
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 text-sm">
                BLOG
              </Link>
              <Link href="/contact" className="text-blue-600 font-medium text-sm">
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
            <span className="text-gray-600">聯絡我們</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">聯絡我們</h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              我們的專業團隊隨時為您提供諮詢服務，歡迎聯絡我們了解更多詳情。
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">聯絡資訊</h2>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <MapPin className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-2">辦公地址</h3>
                        <p className="text-gray-600">
                          香港中環德輔道中19號
                          <br />
                          環球大廈15樓1501室
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Phone className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-2">電話</h3>
                        <p className="text-gray-600">
                          +852 2234 5678
                          <br />
                          +852 2234 5679 (傳真)
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Mail className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-2">電郵</h3>
                        <p className="text-gray-600">
                          info@ipurc.com
                          <br />
                          support@ipurc.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Clock className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-2">辦公時間</h3>
                        <p className="text-gray-600">
                          星期一至五：上午9:00 - 下午6:00
                          <br />
                          星期六：上午9:00 - 下午1:00
                          <br />
                          星期日及公眾假期：休息
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">發送訊息</h2>

              <Card>
                <CardHeader>
                  <CardTitle>免費諮詢</CardTitle>
                  <CardDescription>填寫以下表格，我們的專業顧問將盡快與您聯絡</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">姓名 *</Label>
                        <Input id="firstName" placeholder="請輸入您的姓名" required />
                      </div>
                      <div>
                        <Label htmlFor="company">公司名稱</Label>
                        <Input id="company" placeholder="請輸入公司名稱" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">電郵地址 *</Label>
                        <Input id="email" type="email" placeholder="請輸入電郵地址" required />
                      </div>
                      <div>
                        <Label htmlFor="phone">電話號碼</Label>
                        <Input id="phone" placeholder="請輸入電話號碼" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="service">服務類型</Label>
                      <select
                        id="service"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">請選擇服務類型</option>
                        <option value="trademark">商標註冊</option>
                        <option value="accounting">會計/審計</option>
                        <option value="company">註冊香港公司</option>
                        <option value="other">其他服務</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message">訊息內容 *</Label>
                      <Textarea id="message" placeholder="請詳細描述您的需求或問題" rows={5} required />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      <Send className="w-4 h-4 mr-2" />
                      發送訊息
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">辦公位置</h2>
            <p className="text-lg text-gray-600">歡迎親臨我們的辦公室</p>
          </div>

          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-600">地圖載入中...</p>
              <p className="text-sm text-gray-500 mt-2">香港中環德輔道中19號環球大廈15樓1501室</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">常見問題</h2>
            <p className="text-lg text-gray-600">快速了解我們的服務</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>商標註冊需要多長時間？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  一般而言，香港商標註冊需要6-9個月時間，國際商標註冊時間會因不同國家而異。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>註冊香港公司的最低要求是什麼？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">最少需要一名年滿18歲的股東及董事，可以是同一人，並需要香港註冊地址。</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>會計服務包括哪些內容？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">包括日常記帳、財務報表編制、稅務申報、審計服務及財務諮詢等。</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>如何選擇合適的服務套餐？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  我們會根據您的業務需求和預算，為您推薦最適合的服務方案。歡迎聯絡我們進行免費諮詢。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
