import {
  ArrowRight,
  Briefcase,
  Check,
  ChevronRight,
  Edit2,
  Eye,
  FileText,
  FolderOpen,
  Image as ImageIcon,
  Info,
  User,
} from "lucide-react"
import { PageTemplate } from "../components/templates/PageTemplate"
import { Button } from "../components/atoms/Button"

export default function OnboardingReviewPage() {
  return (
    <PageTemplate>
      <div className="max-w-[1080px] w-full mx-auto px-6 py-8">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <a className="hover:text-primary transition-colors" href="#">
            Home
          </a>
          <ChevronRight className="w-4 h-4" />
          <a className="hover:text-primary transition-colors" href="#">
            Employees
          </a>
          <ChevronRight className="w-4 h-4" />
          <a className="hover:text-primary transition-colors" href="#">
            Onboarding
          </a>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-900 dark:text-slate-200 font-medium">
            Review & Submit
          </span>
        </div>

        <div className="flex flex-col gap-2 mb-10">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            Review & Submit
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            Please review the employee details carefully before final submission.
            Click edit to make changes to any section.
          </p>
        </div>

        {/* Stepper */}
        <div className="mb-12">
          <div className="relative flex items-center justify-between w-full max-w-3xl">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-200 dark:bg-slate-700 -z-10 rounded-full"></div>
            {/* Step 1: Completed */}
            <div className="flex flex-col items-center gap-2 bg-background-light dark:bg-background-dark px-2">
              <div className="size-8 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/25">
                <Check className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-primary">
                Personal Info
              </span>
            </div>
            {/* Step 2: Completed */}
            <div className="flex flex-col items-center gap-2 bg-background-light dark:bg-background-dark px-2">
              <div className="size-8 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/25">
                <Check className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-primary">
                Job Details
              </span>
            </div>
            {/* Step 3: Completed */}
            <div className="flex flex-col items-center gap-2 bg-background-light dark:bg-background-dark px-2">
              <div className="size-8 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/25">
                <Check className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-primary">
                Documents
              </span>
            </div>
            {/* Step 4: Active */}
            <div className="flex flex-col items-center gap-2 bg-background-light dark:bg-background-dark px-2">
              <div className="size-8 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center border-4 border-slate-200 dark:border-slate-600">
                <span className="text-sm font-bold">4</span>
              </div>
              <span className="text-xs font-bold text-slate-900 dark:text-white">
                Review
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-20">
          {/* Left Column: Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Personal Information Section */}
            <section className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 dark:bg-blue-900/20 text-primary rounded-lg">
                    <User className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Personal Information
                  </h3>
                </div>
                <button className="text-sm font-semibold text-primary hover:text-blue-700 flex items-center gap-1">
                  <Edit2 className="w-4 h-4" />
                  Edit
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4">
                <div>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                    Full Name
                  </p>
                  <p className="text-slate-900 dark:text-white font-medium">
                    Sarah Jenkins
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                    Email Address
                  </p>
                  <p className="text-slate-900 dark:text-white font-medium">
                    sarah.jenkins@company.com
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                    Phone Number
                  </p>
                  <p className="text-slate-900 dark:text-white font-medium">
                    +1 (555) 012-3456
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                    Date of Birth
                  </p>
                  <p className="text-slate-900 dark:text-white font-medium">
                    Jan 15, 1990
                  </p>
                </div>
                <div className="col-span-1 md:col-span-2">
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                    Address
                  </p>
                  <p className="text-slate-900 dark:text-white font-medium">
                    4517 Washington Ave. Manchester, Kentucky 39495
                  </p>
                </div>
              </div>
            </section>

            {/* Job Details Section */}
            <section className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-50 dark:bg-purple-900/20 text-purple-600 rounded-lg">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Job Details
                  </h3>
                </div>
                <button className="text-sm font-semibold text-primary hover:text-blue-700 flex items-center gap-1">
                  <Edit2 className="w-4 h-4" />
                  Edit
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4">
                <div>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                    Department
                  </p>
                  <p className="text-slate-900 dark:text-white font-medium">
                    Design & Marketing
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                    Role
                  </p>
                  <p className="text-slate-900 dark:text-white font-medium">
                    Senior UI/UX Designer
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                    Employment Type
                  </p>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                    Full-time
                  </span>
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                    Start Date
                  </p>
                  <p className="text-slate-900 dark:text-white font-medium">
                    Oct 24, 2023
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                    Manager
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <div
                      className="size-6 rounded-full bg-slate-200 bg-cover"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAPLr6Tk-ASAUPsz2W1jbGLDDkf-FxaZo6WwHroGGj2QnZUYIYaGYi86x-lMTCiTEXwB6c7_sNaziDmsUjIHp1s_JPR57xMpu7bh_c5A3bOg_Z4NSu2w09rzn2Ct7PW56Db8Mv6tZauYg7pxL6Z39CgXlAIzkwqVeJ_C-RMfAGtv67OqRuH9bKf0Q-zjvyTDnW4j_hQYEBIhyd3s1cej7102z39PM_ih9RK7vmAd31QUdUI-sK2k6nCKUHl5vfLWYCjifDTwMSR682o')",
                      }}
                    ></div>
                    <span className="text-slate-900 dark:text-white font-medium text-sm">
                      Floyd Miles
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                    Office Location
                  </p>
                  <p className="text-slate-900 dark:text-white font-medium">
                    San Francisco, CA
                  </p>
                </div>
              </div>
            </section>

            {/* Documents Section */}
            <section className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-50 dark:bg-orange-900/20 text-orange-600 rounded-lg">
                    <FolderOpen className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Documents
                  </h3>
                </div>
                <button className="text-sm font-semibold text-primary hover:text-blue-700 flex items-center gap-1">
                  <Edit2 className="w-4 h-4" />
                  Edit
                </button>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-lg bg-red-100 dark:bg-red-900/20 text-red-600 flex items-center justify-center">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">
                        employment_contract.pdf
                      </p>
                      <p className="text-xs text-slate-500">
                        2.4 MB • Uploaded 2 mins ago
                      </p>
                    </div>
                  </div>
                  <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-lg bg-blue-100 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center">
                      <ImageIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">
                        id_proof_scan.png
                      </p>
                      <p className="text-xs text-slate-500">
                        1.8 MB • Uploaded 5 mins ago
                      </p>
                    </div>
                  </div>
                  <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Summary Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-lg shadow-slate-100 dark:shadow-none">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                  Onboarding Summary
                </h4>
                <div className="flex flex-col items-center mb-6">
                  <div className="size-20 rounded-full bg-slate-200 mb-3 overflow-hidden border-2 border-white dark:border-slate-700 shadow-md">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT-87_COwJRVYASww8A4O39VmolvX7PPWU3XryaPSpyg9J8nACqj0T5J55tKBba0ZoCCVMooYJGoL77u9RByFRJlVZ7O0irb3Md-1XMqJETIf5oOm9HKXLx5yMh5zxblgEpv6-mYISt1-ofRYGXEvjVxvlxbfnMsd69u4B2iymTR6SGjrI1uYUmaiGKaQD2IACrKTsY-1S02vFbAA0qdaH2cDfzX-Sp56KG15w8FMvm0bhe5OFcGbNeIczHYgW1yaLi_2N1xYj2BYC"
                      alt="New employee portrait"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xl font-bold text-slate-900 dark:text-white">
                    Sarah Jenkins
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Senior UI/UX Designer
                  </p>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500 dark:text-slate-400">
                      Sections Completed
                    </span>
                    <span className="font-medium text-slate-900 dark:text-white">
                      3/3
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full w-full"></div>
                  </div>
                  <div className="flex gap-2 text-xs text-slate-500 bg-slate-50 dark:bg-slate-800 p-3 rounded-lg border border-slate-100 dark:border-slate-700">
                    <Info className="w-4 h-4 text-primary shrink-0" />
                    <span>
                      Once submitted, an automated email with login credentials
                      will be sent to the employee.
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <Button className="w-full py-3 px-4 bg-primary hover:bg-blue-600 text-white font-bold rounded-xl shadow-md shadow-blue-500/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 h-auto">
                    <span>Submit & Activate Employee</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full py-3 px-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors h-auto"
                  >
                    Save as Draft
                  </Button>
                </div>
              </div>
              <div className="text-center">
                <a
                  className="text-sm text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                  href="#"
                >
                  Cancel Onboarding Process
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}
