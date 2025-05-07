"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Home, ShoppingCart, BookOpen, FlaskRoundIcon as Flask, Newspaper, Bell, User, Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const routes = [
  {
    href: "/",
    label: "Home",
    icon: Home,
  },
  {
    href: "/marketplace",
    label: "Marketplace",
    icon: ShoppingCart,
  },
  {
    href: "/education",
    label: "Education",
    icon: BookOpen,
  },
  {
    href: "/honey-checker",
    label: "HoneyChecker",
    icon: Flask,
  },
  {
    href: "/news",
    label: "News & Research",
    icon: Newspaper,
  },
]

export function MobileNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)

  return (
    <>
      {/* Top Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 h-14 bg-background border-b z-50 flex items-center justify-between px-4">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72">
            <div className="flex flex-col gap-6 mt-8">
              <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                  
                  <span className="font-bold text-2xl text-primary">BeeLink</span>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <div className="flex flex-col gap-2">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted transition-colors",
                      pathname === route.href ? "bg-muted font-medium" : "",
                    )}
                  >
                    <route.icon className="h-5 w-5" />
                    <span>{route.label}</span>
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <Link
                  href="/profile"
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted transition-colors",
                    pathname === "/profile" ? "bg-muted font-medium" : "",
                  )}
                >
                  <User className="h-5 w-5" />
                  <span>Business Profile</span>
                </Link>
                <div className="px-3 py-2">
                  <ModeToggle />
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <Link href="/" className="flex items-center gap-2">
          <span className="font-bold text-xl text-primary">BeeLink</span>
        </Link>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => setShowNotifications(!showNotifications)}>
            <Bell className="h-5 w-5" />
          </Button>
          <Link href="/profile">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 h-16 bg-background border-t z-50 flex items-center justify-around">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "flex flex-col items-center justify-center gap-1 w-full h-full",
              pathname === route.href ? "text-primary" : "text-muted-foreground",
            )}
          >
            <route.icon className="h-5 w-5" />
            <span className="text-xs">{route.label}</span>
          </Link>
        ))}
      </div>

      {/* Main Content Padding */}
      <div className="pb-16 pt-14" />
    </>
  )
}
