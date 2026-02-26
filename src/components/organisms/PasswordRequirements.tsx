import { Shield, Check } from "lucide-react"

export function PasswordRequirements() {
  return (
    <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-6 md:p-8 border border-border-light dark:border-border-dark shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-primary">
          <Shield className="h-6 w-6" />
        </div>
        <h3 className="text-slate-900 dark:text-white font-bold text-lg">
          Password Requirements
        </h3>
      </div>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
        To ensure your account security, please follow these password guidelines. A
        strong password helps protect your personal data.
      </p>
      <div className="flex flex-col gap-4">
        {/* Rule 1: Met */}
        <div className="flex items-center gap-3 group">
          <div className="flex-shrink-0 size-5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <Check className="h-3 w-3 font-bold" />
          </div>
          <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">
            At least 8 characters long
          </span>
        </div>
        {/* Rule 2: Unmet */}
        <div className="flex items-center gap-3 group">
          <div className="flex-shrink-0 size-5 rounded-full border border-slate-300 dark:border-slate-600 text-transparent flex items-center justify-center">
            <Check className="h-3 w-3 font-bold" />
          </div>
          <span className="text-slate-500 dark:text-slate-500 text-sm">
            Contains at least 1 uppercase letter
          </span>
        </div>
        {/* Rule 3: Met */}
        <div className="flex items-center gap-3 group">
          <div className="flex-shrink-0 size-5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <Check className="h-3 w-3 font-bold" />
          </div>
          <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">
            Contains at least 1 number
          </span>
        </div>
        {/* Rule 4: Unmet */}
        <div className="flex items-center gap-3 group">
          <div className="flex-shrink-0 size-5 rounded-full border border-slate-300 dark:border-slate-600 text-transparent flex items-center justify-center">
            <Check className="h-3 w-3 font-bold" />
          </div>
          <span className="text-slate-500 dark:text-slate-500 text-sm">
            Contains at least 1 special character
          </span>
        </div>
      </div>
    </div>
  )
}
