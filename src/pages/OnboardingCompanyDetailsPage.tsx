import { ArrowLeft, ArrowRight, Check, CheckCircle } from "lucide-react"
import { PageTemplate } from "../components/templates/PageTemplate"
import { Input } from "../components/atoms/Input"
import { Button } from "../components/atoms/Button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/atoms/Select"

export default function OnboardingCompanyDetailsPage() {
  return (
    <PageTemplate>
      <div className="w-full max-w-5xl mx-auto flex flex-col gap-8">
        {/* Page Header */}
        <div className="flex flex-col gap-1">
          <h1 className="text-slate-900 dark:text-white text-3xl font-black leading-tight tracking-tight">
            Onboarding Wizard
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-base font-normal">
            Set up new employee profile and details.
          </p>
        </div>

        {/* Stepper */}
        <div className="w-full bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative">
            {/* Progress Bar Background (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 dark:bg-slate-800 -z-10 -translate-y-1/2 rounded-full"></div>
            {/* Progress Bar Active (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-[38%] h-1 bg-primary -z-10 -translate-y-1/2 rounded-full transition-all duration-500"></div>

            {/* Step 1: Personal Info */}
            <div className="flex items-center gap-3 bg-white dark:bg-slate-900 pr-4 z-10">
              <div className="flex items-center justify-center size-8 rounded-full bg-primary text-white font-bold text-sm shrink-0">
                <Check className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  Step 1
                </span>
                <span className="text-sm font-medium text-slate-900 dark:text-white">
                  Personal Info
                </span>
              </div>
            </div>

            {/* Step 2: Company Details (Current) */}
            <div className="flex items-center gap-3 bg-white dark:bg-slate-900 px-2 z-10">
              <div className="flex items-center justify-center size-8 rounded-full ring-4 ring-primary/20 bg-primary text-white font-bold text-sm shrink-0">
                2
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  Step 2
                </span>
                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  Company Details
                </span>
              </div>
            </div>

            {/* Step 3: Documents */}
            <div className="flex items-center gap-3 bg-white dark:bg-slate-900 px-2 z-10 opacity-60">
              <div className="flex items-center justify-center size-8 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400 font-bold text-sm shrink-0">
                3
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Step 3
                </span>
                <span className="text-sm font-medium text-slate-900 dark:text-white">
                  Documents
                </span>
              </div>
            </div>

            {/* Step 4: Review */}
            <div className="flex items-center gap-3 bg-white dark:bg-slate-900 pl-4 z-10 opacity-60">
              <div className="flex items-center justify-center size-8 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400 font-bold text-sm shrink-0">
                4
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Step 4
                </span>
                <span className="text-sm font-medium text-slate-900 dark:text-white">
                  Review
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Employment Information
            </h3>
            <span className="text-xs font-medium px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-primary rounded">
              Draft saved 2m ago
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Employee ID */}
            <div className="flex flex-col gap-2">
              <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold">
                Employee ID
              </label>
              <div className="relative">
                <Input
                  type="text"
                  placeholder="e.g. EMP-2024-001"
                  defaultValue="EMP-2024-1056"
                  className="pr-10"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-green-500">
                  <CheckCircle className="text-lg" />
                </div>
              </div>
              <p className="text-xs text-slate-500">
                Auto-generated based on company policy.
              </p>
            </div>

            {/* Office / Branch */}
            <div className="flex flex-col gap-2">
              <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold">
                Office / Branch
              </label>
              <Select defaultValue="hq">
                <SelectTrigger>
                  <SelectValue placeholder="Select Office Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hq">Headquarters - New York</SelectItem>
                  <SelectItem value="lon">London Branch</SelectItem>
                  <SelectItem value="sf">San Francisco Hub</SelectItem>
                  <SelectItem value="sg">Singapore Office</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Department */}
            <div className="flex flex-col gap-2">
              <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold">
                Department
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="eng">Engineering</SelectItem>
                  <SelectItem value="hr">Human Resources</SelectItem>
                  <SelectItem value="mkt">Marketing</SelectItem>
                  <SelectItem value="sales">Sales</SelectItem>
                  <SelectItem value="fin">Finance</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Designation */}
            <div className="flex flex-col gap-2">
              <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold">
                Designation
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Job Title" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="se1">Software Engineer I</SelectItem>
                  <SelectItem value="se2">Software Engineer II</SelectItem>
                  <SelectItem value="sse">Senior Software Engineer</SelectItem>
                  <SelectItem value="em">Engineering Manager</SelectItem>
                  <SelectItem value="pm">Product Manager</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Joining Date */}
            <div className="flex flex-col gap-2">
              <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold">
                Joining Date
              </label>
              <div className="relative">
                <Input type="date" />
              </div>
            </div>

            {/* Employment Type */}
            <div className="flex flex-col gap-2">
              <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold">
                Employment Type
              </label>
              <div className="flex gap-4 pt-1">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="radio"
                    name="empType"
                    defaultChecked
                    className="size-4 text-primary focus:ring-primary border-slate-300 bg-slate-100"
                  />
                  <span className="text-slate-700 dark:text-slate-300 text-sm font-medium group-hover:text-primary transition-colors">
                    Permanent
                  </span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="radio"
                    name="empType"
                    className="size-4 text-primary focus:ring-primary border-slate-300 bg-slate-100"
                  />
                  <span className="text-slate-700 dark:text-slate-300 text-sm font-medium group-hover:text-primary transition-colors">
                    Contract
                  </span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="radio"
                    name="empType"
                    className="size-4 text-primary focus:ring-primary border-slate-300 bg-slate-100"
                  />
                  <span className="text-slate-700 dark:text-slate-300 text-sm font-medium group-hover:text-primary transition-colors">
                    Intern
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between mt-12 pt-6 border-t border-slate-100 dark:border-slate-800">
            <Button
              variant="outline"
              className="flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors h-auto"
            >
              <ArrowLeft className="text-lg" />
              Previous
            </Button>
            <Button
              className="flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-white font-bold text-sm hover:bg-primary/90 shadow-md shadow-primary/20 transition-all transform hover:-translate-y-0.5 h-auto"
            >
              Save & Continue
              <ArrowRight className="text-lg" />
            </Button>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}
