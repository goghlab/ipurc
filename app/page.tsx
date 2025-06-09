"use client"
import Link from "next/link"
import { Facebook, ArrowRight, Globe, Users, Award, Sparkles, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-sans">
      {/* Top Banner */}
      <div className="fixed top-0 w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-sm z-50">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-4 h-4" />
          <span className="font-medium">限時優惠：商標註冊服務 8 折起</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>

      {/* Enhanced Header with Glass Effect */}
      <header className="fixed top-12 w-full z-40 bg-white border-b border-gray-100/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Enhanced Logo */}
            <Link href="/" className="flex items-center group">
              <div className="relative w-20 h-20 mr-4">
                <img
                  src="/111-1.png"
                  alt="IPURC Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                <div className="font-semibold text-base">Universal Regional</div>
                <div className="text-xs text-gray-500">Consultants Limited</div>
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { href: "/", label: "主頁" },
                { href: "/about", label: "關於" },
                { href: "/trademark", label: "商標註冊" },
                { href: "/accounting", label: "會計/審計" },
                { href: "/hk-company", label: "註冊香港公司" },
                { href: "/blog", label: "BLOG" },
                { href: "/contact", label: "聯絡我們" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative text-gray-700 hover:text-blue-600 text-sm font-medium transition-all duration-300 group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
              <Link
                href="#"
                className="text-gray-700 hover:text-blue-600 p-2 rounded-full hover:bg-blue-50 transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </Link>
            </nav>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`md:hidden fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="pt-32 pb-6 px-4">
              <div className="flex flex-col space-y-4">
                {[
                  { href: "/", label: "主頁" },
                  { href: "/about", label: "關於" },
                  { href: "/trademark", label: "商標註冊" },
                  { href: "/accounting", label: "會計/審計" },
                  { href: "/hk-company", label: "註冊香港公司" },
                  { href: "/blog", label: "BLOG" },
                  { href: "/contact", label: "聯絡我們" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-700 hover:text-blue-600 text-lg font-medium py-2 transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-100">
                  <Link
                    href="#"
                    className="flex items-center text-gray-700 hover:text-blue-600 text-lg font-medium py-2 transition-colors duration-300"
                  >
                    <Facebook className="w-5 h-5 mr-2" />
                    Facebook
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stunning Hero Section with 3D Effects */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900">
          {/* Floating Particles */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`,
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* 3D Grid Background */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            transform: `translateY(${scrollY * 0.5}px) perspective(1000px) rotateX(60deg)`,
          }}
        ></div>

        {/* World Map with Parallax */}
        <div className="absolute inset-0 opacity-10" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
          <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwMCIgaGVpZ2h0PSI1MDAiIHZpZXdCb3g9IjAgMCAxMDAwIDUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMTAwIDEwMEw5MDAgMTAwTDkwMCA0MDBMMTAwIDQwMFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBvcGFjaXR5PSIwLjMiLz4KICA8Y2lyY2xlIGN4PSIyMDAiIGN5PSIyMDAiIHI9IjUiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuNSIvPgogIDxjaXJjbGUgY3g9IjgwMCIgY3k9IjE1MCIgcj0iMyIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iMC40Ii8+CiAgPGNpcmNsZSBjeD0iNTAwIiBjeT0iMzAwIiByPSI0IiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjYiLz4KPC9zdmc+')] bg-center bg-no-repeat bg-cover"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Animated Title */}
          <div className="mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              <span className="inline-block animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                環球商標註冊
              </span>
              <br />
              <span
                className="inline-block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                限時優惠
              </span>
            </h1>
            <p
              className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto animate-fade-in-up font-medium"
              style={{ animationDelay: "0.6s" }}
            >
              保護您的品牌，建立市場優勢。專業團隊為您提供全球商標註冊服務。
            </p>
          </div>

          {/* Enhanced Service Cards */}
          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              {
                title: "QM107 大中華區",
                subtitle: "中國＋香港＋澳門＋台灣",
                icon: "🌏",
                delay: "0.8s",
              },
              {
                title: "QM107 國際版",
                subtitle: "中國＋香港＋歐盟＋美國",
                icon: "🌍",
                delay: "1.0s",
              },
              {
                title: "QM107 東盟",
                subtitle: "東南亞市場保護",
                icon: "🌎",
                delay: "1.2s",
              },
            ].map((service, index) => (
              <div key={index} className="group animate-fade-in-up" style={{ animationDelay: service.delay }}>
                <Button
                  variant="outline"
                  className="w-full h-20 text-lg bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl relative overflow-hidden"
                >
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>

                  <div className="relative flex items-center justify-between w-full">
                    <div className="flex items-center">
                      <span className="text-2xl mr-4 group-hover:scale-125 transition-transform duration-300">
                        {service.icon}
                      </span>
                      <div className="text-left">
                        <div className="font-semibold text-lg">{service.title}</div>
                        <div className="text-sm text-blue-200">{service.subtitle}</div>
                      </div>
                    </div>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </Button>
              </div>
            ))}
          </div>

          {/* Floating Action Button */}
          <div className="mt-12 animate-fade-in-up" style={{ animationDelay: "1.4s" }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold px-8 py-4 rounded-full shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-110 group"
            >
              <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-medium">立即免費諮詢</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-900/5 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">我們的專業服務</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              提供全方位的商業諮詢服務，助您在全球市場建立競爭優勢
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-12 h-12" />,
                title: "商標註冊",
                description: "專業的商標註冊服務，保護您的品牌權益",
                color: "from-blue-500 to-blue-600",
                hoverColor: "group-hover:from-blue-600 group-hover:to-blue-700",
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "公司註冊",
                description: "快速便捷的公司註冊服務，助您開展業務",
                color: "from-green-500 to-green-600",
                hoverColor: "group-hover:from-green-600 group-hover:to-green-700",
              },
              {
                icon: <Award className="w-12 h-12" />,
                title: "會計審計",
                description: "專業的會計和審計服務，確保財務合規",
                color: "from-purple-500 to-purple-600",
                hoverColor: "group-hover:from-purple-600 group-hover:to-purple-700",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm overflow-hidden relative"
              >
                {/* Card Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${service.color} ${service.hoverColor} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 text-lg leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Button
                    variant="outline"
                    className="mt-6 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300"
                  >
                    了解更多
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-800 text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div
            className="absolute top-32 right-20 w-16 h-16 bg-white/5 rounded-full animate-bounce"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">值得信賴的數據</h2>
            <p className="text-xl text-blue-100">多年來服務客戶的成果展示</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "1000+", label: "服務客戶", icon: "👥" },
              { number: "14年", label: "行業經驗", icon: "🏆" },
              { number: "50+", label: "專業團隊", icon: "👨‍💼" },
              { number: "98%", label: "客戶滿意度", icon: "⭐" },
            ].map((stat, index) => (
              <div key={index} className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-blue-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPGcgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjEiPgogICAgICA8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4=')] bg-repeat"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mr-3 flex items-center justify-center">
                  <span className="text-white font-bold">IP</span>
                </div>
                <span className="font-bold text-xl">IPURC</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Universal Regional Consultants Limited - 您值得信賴的商業夥伴
              </p>
            </div>

            {[
              {
                title: "服務",
                links: ["商標註冊", "公司註冊", "會計審計", "稅務規劃"],
              },
              {
                title: "關於我們",
                links: ["公司簡介", "團隊介紹", "聯絡我們", "客戶案例"],
              },
              {
                title: "聯絡資訊",
                links: ["電話: +852 1234 5678", "電郵: info@ipurc.com", "地址: 香港中環", "工作時間: 9:00-18:00"],
              },
            ].map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-6 text-lg">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              &copy; 2024 Universal Regional Consultants Limited. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}
