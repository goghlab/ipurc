"use client"
import Link from "next/link"
import { Facebook, ArrowRight, Sparkles, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close mobile menu when navigating
  useEffect(() => {
    const handleRouteChange = () => setIsMenuOpen(false)
    // Add event listener for Next.js router changes if needed, or simply rely on onClick
    return () => {} // Cleanup function
  }, [])

  return (
    <>
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
    </>
  )
} 