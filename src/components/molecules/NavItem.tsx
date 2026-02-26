import * as React from "react"
import type { LucideIcon } from "lucide-react"
import { cn } from "../../lib/utils"

export interface NavItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  icon?: LucideIcon
  active?: boolean
  label: string
}

const NavItem = React.forwardRef<HTMLAnchorElement, NavItemProps>(
  ({ className, icon: Icon, active, label, ...props }, ref) => {
    return (
      <a
        className={cn(
          "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors",
          active
            ? "bg-primary/10 text-primary font-semibold"
            : "text-slate-600 dark:text-slate-300 hover:bg-primary/5",
          className
        )}
        ref={ref}
        {...props}
      >
        {Icon && <Icon className="h-5 w-5" />}
        <span className="text-sm">{label}</span>
      </a>
    )
  }
)
NavItem.displayName = "NavItem"

export { NavItem }
