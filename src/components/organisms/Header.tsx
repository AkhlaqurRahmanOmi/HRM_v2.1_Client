import { Bell, Settings } from "lucide-react"
import { SearchBar } from "../molecules/SearchBar"
import { Avatar, AvatarFallback, AvatarImage } from "../atoms/Avatar"
import { Button } from "../atoms/Button"

export function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/10 bg-white dark:bg-background-dark px-10 py-3 sticky top-0 z-40">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4 text-primary">
          <div className="size-8 bg-primary/10 rounded-lg flex items-center justify-center">
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              strokeWidth="2"
            >
               <path d="M3 21h18M5 21V7l8-4 8 4v14M8 21v-9a4 4 0 0 1 4-4v0a4 4 0 0 1 4 4v9" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight">
            HRM V2.1
          </h2>
        </div>
        <SearchBar />
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-6">
          <a
            className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors"
            href="#"
          >
            Dashboard
          </a>
          <a
            className="text-primary text-sm font-semibold border-b-2 border-primary py-1"
            href="#"
          >
            Organization
          </a>
          <a
            className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors"
            href="#"
          >
            Employees
          </a>
          <a
            className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors"
            href="#"
          >
            Payroll
          </a>
        </div>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-lg h-10 w-10 bg-primary/5 text-slate-700 dark:text-slate-200 hover:bg-primary/10 transition-colors"
          >
            <Bell className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-lg h-10 w-10 bg-primary/5 text-slate-700 dark:text-slate-200 hover:bg-primary/10 transition-colors"
          >
            <Settings className="h-5 w-5" />
          </Button>
        </div>
        <Avatar>
          <AvatarImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyKsjt6fXwvMiVJCD0GYM1ih7w_If6nRRvELS8DMQtyuWsVrITu9VIRFyzkVa7Rxf5OTW0Wu8DWI_Nx-8RuoV-dxJNZG3bqBvdCG4WkL_OaPEft1h-YHcCRFhS2q8FhbJh_v8qL8jN14lk_OPcYaNlm6JGS5KqGt6PvQEIN7fUTw_xQwBUo3JrMbANzHyNz0l4dWsPJ6d2kBriVou0J4746SIk3C0k36lr4hRgt1f7R7UuWEycQmTvjN-0KnVboRaQYxaOCf0UHfKz" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
