import * as React from "react"
import { Header } from "../organisms/Header"

interface PageTemplateProps {
  children: React.ReactNode
}

export function PageTemplate({ children }: PageTemplateProps) {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col font-display">
      <Header />
      <main className="flex-1 flex flex-col">
        <section className="flex-1 p-8 bg-background-light dark:bg-background-dark relative overflow-hidden">
          <div className="max-w-7xl mx-auto w-full">{children}</div>
        </section>
      </main>
    </div>
  )
}
