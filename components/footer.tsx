import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Twitter, Github, Linkedin, Instagram, Sparkles } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-indigo-800/30 bg-slate-950/80 backdrop-blur-sm">
      <div className="container mx-auto px-8 md:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-8 w-8 flex items-center justify-center bg-indigo-800 rounded-md overflow-hidden">
                <Sparkles className="h-5 w-5 text-blue-300" />
              </div>
              <span className="text-xl font-bold text-white">SolStake</span>
            </Link>
            <p className="text-blue-300">
              Helping you grow your investments. Put your assets to work and stay profitable.
            </p>
            <div className="flex gap-4">
              <SocialLink icon={<Twitter className="h-4 w-4" />} href="#" />
              <SocialLink icon={<Github className="h-4 w-4" />} href="#" />
              <SocialLink icon={<Linkedin className="h-4 w-4" />} href="#" />
              <SocialLink icon={<Instagram className="h-4 w-4" />} href="#" />
            </div>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="#" label="Home" />
              <FooterLink href="#" label="Stake" />
              <FooterLink href="#" label="Dashboard" />
              <FooterLink href="#" label="About Us" />
              <FooterLink href="#" label="Contact" />
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <FooterLink href="#" label="Documentation" />
              <FooterLink href="#" label="FAQs" />
              <FooterLink href="#" label="Tutorials" />
              <FooterLink href="#" label="Blog" />
              <FooterLink href="#" label="Support" />
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Subscribe</h3>
            <p className="text-blue-300 mb-4">Stay updated with our latest news and offers.</p>
            <div className="flex gap-2">
              <Input placeholder="Enter your email" className="bg-indigo-800/30 border-blue-500/30 text-white" />
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-indigo-800/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-400 text-sm">© {new Date().getFullYear()} SolStake. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-blue-400 hover:text-blue-300 text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-blue-400 hover:text-blue-300 text-sm">
              Terms of Service
            </Link>
            <Link href="#" className="text-blue-400 hover:text-blue-300 text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link href={href} className="text-blue-300 hover:text-blue-200 transition-colors">
        {label}
      </Link>
    </li>
  )
}

function SocialLink({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <Link
      href={href}
      className="h-8 w-8 rounded-full bg-indigo-800/50 flex items-center justify-center text-blue-300 hover:bg-indigo-700/50 hover:text-blue-200 transition-colors"
    >
      {icon}
    </Link>
  )
}
