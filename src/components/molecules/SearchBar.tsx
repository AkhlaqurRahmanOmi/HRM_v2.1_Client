import * as React from "react"
import { Search } from "lucide-react"
import { cn } from "../../lib/utils"

export interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn("relative", className)}>
        <label className="flex flex-col min-w-40 h-10 max-w-64">
          <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-primary/5 border border-primary/10">
            <div className="text-slate-500 flex items-center justify-center pl-4 rounded-l-lg">
              <Search className="h-5 w-5" />
            </div>
            <input
              className="flex w-full min-w-0 flex-1 border-none bg-transparent focus:outline-0 focus:ring-0 placeholder:text-slate-400 px-4 text-sm font-normal"
              placeholder="Search resources..."
              ref={ref}
              {...props}
            />
          </div>
        </label>
      </div>
    )
  }
)
SearchBar.displayName = "SearchBar"

export { SearchBar }
