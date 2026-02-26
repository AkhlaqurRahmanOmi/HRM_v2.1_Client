import * as React from "react"
import { Header } from "../organisms/Header"
import { Sidebar } from "../organisms/Sidebar"

interface DashboardTemplateProps {
  children: React.ReactNode
}

export function DashboardTemplate({ children }: DashboardTemplateProps) {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col font-display">
      <Header />
      <main className="flex-1 flex flex-col lg:flex-row">
        <Sidebar />
        <section className="flex-1 p-8 bg-background-light dark:bg-background-dark relative overflow-hidden">
          <div className="max-w-5xl mx-auto">{children}</div>
        </section>
      </main>
    </div>
  )
}
