"use client"

import Image from "next/image"
import PortraitCarousel from "../components/portrait-carousel"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AppShowcase() {
  const portraitScreenshots = [
    "/signup.jpg",
    "/signin.jpg",
    "/detailscreen.jpg",
    "/upload.jpg",
    "/storyview.jpg",
    "/upload.jpg",
    "/profile.jpg"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-lg bg-white/80 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-medium text-lg">AppStore</span>
          </div>
          <nav>
            <ul className="flex gap-6"></ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Instagram Clone
            </h1>
            <div className="flex items-center gap-1 mb-4">
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              <span className="ml-2 text-sm text-gray-600">5.0 (1.2k Reviews)</span>
            </div>
            <p className="text-lg text-gray-600 mb-8">
              Experience the next generation of mobile applications with our innovative solution.
              Designed with user experience in mind, our app delivers exceptional performance and
              stunning visuals similar to Instagram.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://drive.google.com/file/d/1GchVWLKhy0mD9YWjFwUV9K6ypXEj44Hp/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                  Download for Android
                </Button>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/homescreen.jpg"
              alt="App Screenshot"
              width={300}
              height={600}
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Portrait Screenshot Carousel */}
      <PortraitCarousel screenshots={portraitScreenshots} />

      {/* Download Section */}
      <section className="bg-gradient-to-r from-gray-100 to-gray-200 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="h-24 w-24 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-4xl shadow-lg">
              A
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the App?</h2>
          <h2 className="text-3xl font-bold mb-4">Note : This is not a real Instagram app it is a Flutter clone</h2>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-xl overflow-hidden bg-white"></div>
                <span className="font-medium text-lg text-gray-800">AppStore</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
