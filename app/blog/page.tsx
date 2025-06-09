import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "2024年香港商標註冊新政策解讀",
      excerpt: "了解最新的香港商標註冊政策變化，以及對企業的影響和應對策略。",
      author: "張律師",
      date: "2024年1月15日",
      category: "商標法律",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 2,
      title: "中小企業稅務規劃指南",
      excerpt: "為中小企業提供實用的稅務規劃建議，合法節稅，提升企業競爭力。",
      author: "李會計師",
      date: "2024年1月10日",
      category: "稅務規劃",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 3,
      title: "香港公司年審注意事項",
      excerpt: "詳細介紹香港公司年審的流程、時間要求及常見問題解答。",
      author: "王顧問",
      date: "2024年1月5日",
      category: "公司事務",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 4,
      title: "國際商標保護策略",
      excerpt: "探討企業如何制定有效的國際商標保護策略，拓展海外市場。",
      author: "陳律師",
      date: "2023年12月28日",
      category: "商標法律",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 5,
      title: "數字化時代的會計管理",
      excerpt: "分析數字化工具如何改變傳統會計工作，提升效率和準確性。",
      author: "劉會計師",
      date: "2023年12月20日",
      category: "會計技術",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 6,
      title: "跨境電商的稅務合規",
      excerpt: "跨境電商企業需要了解的稅務合規要求和最佳實踐。",
      author: "黃顧問",
      date: "2023年12月15日",
      category: "稅務規劃",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  const categories = ["全部", "商標法律", "稅務規劃", "公司事務", "會計技術"]

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
              <Link href="/blog" className="text-blue-600 font-medium text-sm">
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
            <span className="text-gray-600">BLOG</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">專業資訊分享</h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              獲取最新的商標、會計、稅務及公司事務資訊，助您做出明智的商業決策。
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button key={category} variant={category === "全部" ? "default" : "outline"} className="rounded-full">
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200 relative">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
                  <Badge className="absolute top-4 left-4 bg-blue-600">{post.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2 hover:text-blue-600 cursor-pointer">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group">
                    閱讀更多
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              載入更多文章
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">訂閱我們的資訊</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">定期接收最新的商業資訊和專業見解</p>
          <div className="max-w-md mx-auto flex gap-4">
            <input type="email" placeholder="輸入您的電郵地址" className="flex-1 px-4 py-3 rounded-lg text-gray-900" />
            <Button size="lg" variant="secondary">
              訂閱
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
