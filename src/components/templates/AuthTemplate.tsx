import * as React from "react"
import { Button } from "../atoms/Button"

interface AuthTemplateProps {
  children: React.ReactNode
}

export function AuthTemplate({ children }: AuthTemplateProps) {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen flex flex-col">
      {/* Auth-specific Header */}
      <header className="w-full bg-white dark:bg-slate-900 border-b border-border-light dark:border-border-dark px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="size-8 text-primary flex items-center justify-center">
            <svg
              className="w-full h-full"
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <h2 className="text-slate-900 dark:text-white text-lg font-bold tracking-tight">
            HRM V2.1
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            className="hidden sm:flex items-center justify-center px-5 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            Login
          </Button>
          <Button
            variant="default"
            className="flex items-center justify-center px-5 py-2 rounded-full bg-primary text-white text-sm font-bold hover:bg-blue-600 transition-colors shadow-sm shadow-primary/30"
          >
            Sign Up
          </Button>
        </div>
      </header>
      {/* Main Content Area */}
      <main className="flex-grow flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-[1024px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {children}
        </div>
      </main>
    </div>
  )
}
