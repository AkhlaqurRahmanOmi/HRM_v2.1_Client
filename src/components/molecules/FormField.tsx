import * as React from "react"
import { Label } from "../atoms/Label"
import { cn } from "../../lib/utils"

interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string
  error?: string
  children: React.ReactNode
  htmlFor?: string
}

const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  ({ className, label, error, children, htmlFor, ...props }, ref) => {
    return (
      <div className={cn("space-y-2", className)} ref={ref} {...props}>
        {label && (
          <Label htmlFor={htmlFor} variant="custom">
            {label}
          </Label>
        )}
        {children}
        {error && <p className="text-sm text-destructive">{error}</p>}
      </div>
    )
  }
)
FormField.displayName = "FormField"

export { FormField }
