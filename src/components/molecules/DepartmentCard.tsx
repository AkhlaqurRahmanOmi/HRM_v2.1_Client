import * as React from "react"
import type { LucideIcon } from "lucide-react"
import { Card, CardContent, CardTitle, CardDescription } from "../atoms/Card"
import { cn } from "../../lib/utils"

export interface DepartmentCardProps {
  icon: LucideIcon
  name: string
  description: string
  employeeCount: number
  className?: string
}

const DepartmentCard = React.forwardRef<HTMLDivElement, DepartmentCardProps>(
  ({ className, icon: Icon, name, description, employeeCount, ...props }, ref) => {
    return (
      <Card
        className={cn(
          "bg-white dark:bg-background-dark p-6 rounded-xl border border-primary/10 shadow-sm transition-all hover:shadow-md",
          className
        )}
        ref={ref}
        {...props}
      >
        <CardContent className="p-0">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <span className="text-xs font-medium text-slate-400">
              {employeeCount} Employees
            </span>
          </div>
          <CardTitle className="font-bold text-lg mb-1">{name}</CardTitle>
          <CardDescription className="text-sm text-slate-500">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    )
  }
)
DepartmentCard.displayName = "DepartmentCard"

export { DepartmentCard }
