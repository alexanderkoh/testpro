"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function NavBar() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center">
          <div className="mr-8 flex items-center">
            <Link href="/" className="text-xl font-bold">
              Hoops Finance
            </Link>
          </div>
          <div className="flex space-x-8">
            <Link
              href="/pro-dashboard"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === "/pro-dashboard" ? "text-primary" : "text-muted-foreground"
              )}
            >
              Pro Dashboard
            </Link>
            <Link
              href="/explore"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === "/explore" ? "text-primary" : "text-muted-foreground"
              )}
            >
              Explore
            </Link>
            <Link
              href="/tokens"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === "/tokens" ? "text-primary" : "text-muted-foreground"
              )}
            >
              Tokens
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

