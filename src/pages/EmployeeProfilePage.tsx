import {
  Building,
  Calendar,
  ChevronRight,
  Clock,
  DollarSign,
  Edit,
  FileText,
  Flag,
  History,
  Home,
  LayoutDashboard,
  Mail,
  MapPin,
  MessageSquare,
  MoreHorizontal,
  Phone,
  Users,
  Wallet,
  Cake,
  User,
  Briefcase
} from "lucide-react"
import { PageTemplate } from "../components/templates/PageTemplate"
import { Button } from "../components/atoms/Button"
import { Avatar, AvatarImage, AvatarFallback } from "../components/atoms/Avatar"

export default function EmployeeProfilePage() {
  return (
    <PageTemplate>
      <div className="flex-1 px-4 py-8 md:px-8 lg:px-12 max-w-[1400px] mx-auto w-full">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
          <a className="hover:text-primary transition-colors" href="#">
            Employees
          </a>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-900 dark:text-white font-medium">
            Employee Profile
          </span>
        </div>

        {/* Profile Header */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 mb-6 shadow-sm">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
              <div className="relative">
                <div className="size-32 rounded-full border-4 border-white dark:border-slate-800 shadow-md overflow-hidden">
                  <Avatar className="w-full h-full rounded-none">
                    <AvatarImage
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpuccW1PiiX4H9MfVzuusha8JKY5CyjfxRgdBIgmZi18yyuNHRkJBbojnQ7GkfQg7iv4E5KrXcL8mXYvlC668u8x4HyRVCNC_ien2txnTFb7onMZwmC0jYkVYSVS3NE62DKbe84gq3cLGnPl5orJh9ifDMmQSdAssClS4ThtN1MeiXy2Bvq9LxNkw_aiRvXy63fav3n12HUcuYSjWOWWv-sWHfCg-MTXj6hLM74Trxguop5C68q0aMGLKOz0rmBVgVW_Lfng5CRCx7"
                      alt="Sarah Jenkins"
                      className="object-cover"
                    />
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                </div>
                <div
                  className="absolute bottom-1 right-1 bg-green-500 size-5 rounded-full border-2 border-white dark:border-slate-800"
                  title="Online"
                ></div>
              </div>
              <div className="flex flex-col gap-1 pt-2">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Sarah Jenkins
                </h1>
                <p className="text-slate-500 dark:text-slate-400 font-medium">
                  Senior UX Designer • ID: UXD-4092
                </p>
                <div className="flex items-center gap-2 mt-2 justify-center sm:justify-start">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    <span className="size-1.5 rounded-full bg-green-600"></span>
                    Active Employee
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                    Full-Time
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto">
              <Button
                variant="outline"
                className="flex-1 md:flex-none items-center justify-center gap-2 h-10 px-5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm"
              >
                <MoreHorizontal className="w-5 h-5" />
                Actions
              </Button>
              <Button
                className="flex-1 md:flex-none items-center justify-center gap-2 h-10 px-5 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors shadow-sm shadow-blue-200 dark:shadow-none"
              >
                <Edit className="w-4 h-4" />
                Edit Profile
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex overflow-x-auto pb-4 mb-2 gap-1 scrollbar-hide">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-slate-800 text-primary font-semibold text-sm shadow-sm ring-1 ring-slate-200 dark:ring-slate-700 whitespace-nowrap transition-colors">
            <LayoutDashboard className="w-5 h-5" />
            Overview
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 font-medium text-sm whitespace-nowrap transition-colors">
            <History className="w-5 h-5" />
            Employment History
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 font-medium text-sm whitespace-nowrap transition-colors">
            <FileText className="w-5 h-5" />
            Documents
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 font-medium text-sm whitespace-nowrap transition-colors">
            <Calendar className="w-5 h-5" />
            Attendance
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 font-medium text-sm whitespace-nowrap transition-colors">
            <Wallet className="w-5 h-5" />
            Leave Balances
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 font-medium text-sm whitespace-nowrap transition-colors">
            <DollarSign className="w-5 h-5" />
            Payroll Summary
          </button>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Personal Information Card */}
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm flex flex-col h-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="size-8 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center">
                  <User className="w-4 h-4" />
                </span>
                Personal Information
              </h3>
              <button className="text-primary text-sm font-semibold hover:underline">
                View All
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
              <div className="group">
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                  Email Address
                </p>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                  <p className="text-slate-900 dark:text-white font-medium">
                    sarah.j@company.com
                  </p>
                </div>
              </div>
              <div className="group">
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                  Phone Number
                </p>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                  <p className="text-slate-900 dark:text-white font-medium">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>
              <div className="group">
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                  Date of Birth
                </p>
                <div className="flex items-center gap-2">
                  <Cake className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                  <p className="text-slate-900 dark:text-white font-medium">
                    August 24, 1992
                  </p>
                </div>
              </div>
              <div className="group">
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                  Nationality
                </p>
                <div className="flex items-center gap-2">
                  <Flag className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                  <p className="text-slate-900 dark:text-white font-medium">
                    American
                  </p>
                </div>
              </div>
              <div className="group md:col-span-2">
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                  Current Address
                </p>
                <div className="flex items-center gap-2">
                  <Home className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                  <p className="text-slate-900 dark:text-white font-medium">
                    4528 Innovation Dr, Suite 200, San Francisco, CA 94107
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Job Stats / Quick Info */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            {/* Direct Manager Card */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="size-8 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 flex items-center justify-center">
                  <Users className="w-4 h-4" />
                </span>
                Reporting Manager
              </h3>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50">
                <Avatar className="size-12">
                  <AvatarImage
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEwMMfGGfK7cy3_DR9JUjAXFik5VG36LNVgfLrVj7hwGy_CeFZVQG3n98uwgN0Rsl-RxiomvBt_Z4oaCHVGI5fjeIuE281SSnCJVMWcBStpHN-pEfiRPdA7leo3oN0A2gdxZwCixAQ2BILnTVhmfpJzaF3H2y_-4BjpxOUvTq5AvFnZaR8cH2oNCxLfmYECM_uKUc20wpIMOBlZ5ztj0x-pO087uLf5Us7YZKQl68ir7ZbWI2cNnkzFYW2JZsbZ9evmkf9VXk7ar5u"
                    alt="Michael Scott"
                  />
                  <AvatarFallback>MS</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-bold text-slate-900 dark:text-white">
                    Michael Scott
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Head of Design
                  </p>
                </div>
                <button className="size-8 flex items-center justify-center rounded-full bg-white dark:bg-slate-700 text-slate-500 dark:text-slate-400 hover:text-primary shadow-sm border border-slate-200 dark:border-slate-600">
                  <MessageSquare className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Team Members Preview */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm flex-1">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="size-8 rounded-full bg-orange-50 dark:bg-orange-900/20 text-orange-600 flex items-center justify-center">
                    <Users className="w-4 h-4" />
                  </span>
                  Team Members
                </h3>
                <span className="text-xs font-bold bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-slate-500 dark:text-slate-400">
                  8 Total
                </span>
              </div>
              <div className="flex -space-x-3 overflow-hidden py-2 pl-2">
                <Avatar className="inline-block h-10 w-10 ring-2 ring-white dark:ring-slate-900">
                  <AvatarImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiBKlLW_fMPkiPexzzFaES4Lo6pTmttnzOql9xo8s-7zHwOPOZ8T8GqDkp759ZCww3TYOtCBaorwoAu5XLHkb2iOQIsut3TLuSM_jPs9hU7OvPEvN-9uWlcCQ6NdgOwEIkDfaMCapS6ZfHPwFMcMgQFYNSjpQ9tKJc1iWs4I0dqBdeE5nK96o8mdn6Wvkm4gZwqSeVIxq_ZygHmkR1hrlkhSvpMD5HV2Qoj0goyIy6EmUn-rfNMxT4qR_zx1aJZkOhOlAMUh2CGA50" />
                  <AvatarFallback>T1</AvatarFallback>
                </Avatar>
                <Avatar className="inline-block h-10 w-10 ring-2 ring-white dark:ring-slate-900">
                  <AvatarImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuCw04W2ebWt7gcj4oKtEzBA2qeaRzsbUVHK3qDbooK1aYHMzRrgSrIgVnR2qB83FPyPZzd9HX1w_fY48rgKQjNlszOhu-82yVyty61Yu4yCBqZj88YrvbsRaVY-rezDGFdpdUZZ39ArJJpgNcacIBNPVBZKendKCo9h89g-H8Q-HSKi3Yty2WwefJaMcTyJKZ46wht0iJjcimqaP2a4vQF-ZKuDdUQWVwpjMHoGZMCmKeNFTDI70KwPCwLw8vJiZteeq8YnPg-7XBtx" />
                  <AvatarFallback>T2</AvatarFallback>
                </Avatar>
                <Avatar className="inline-block h-10 w-10 ring-2 ring-white dark:ring-slate-900">
                  <AvatarImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7EGFUTm1d5zt3CodHdEx09K8PV0zb6Td4P8H7E1gGTM9LmQf-FiDlC1OZuuuIm7zh3FsFuwSgmckes4ag7zgM8WoOF86b_jvRpt645QTSefJdNAPAclueSgqyn5tsbHESkKpddCty6y0c0kk8YWGENtYgfRo9a_1umO79T8yOAlaWfmY7QppDd1mMcj55Sw7QUQC34JpfNXHi6mwFpyjaE6Gnfv_3p5mbYoiS4zle4LdZ-cwT9Lvpp71jTQN2lKo7mzM3tCddOZf8" />
                  <AvatarFallback>T3</AvatarFallback>
                </Avatar>
                <Avatar className="inline-block h-10 w-10 ring-2 ring-white dark:ring-slate-900">
                  <AvatarImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMBVZ6lsugbaLpHxI1XxaoYRkZeA5EWq-H-bYgr2xLKt-ZoFXoYipMwCTsbo5hztaX8URzaJqnzjlAHhHvlUosUIOzMUnXI5FmAL9rUxe2X2fbUFsT99Mz8sBvyhk3TJJz9Xx4zSc0R72d2LD5f6k5BkDHFGTX5XUmwxNaBkGtLcsDgiYU9j1sWkIhje4-NE3mSqKE9fGG6h-fK7TotfYCESEdYaCm5lvSNUiXVF5z4RKSPEMH3H-pBqFLPATdhxLx1CVmz-q6teh8" />
                  <AvatarFallback>T4</AvatarFallback>
                </Avatar>
                <div className="flex items-center justify-center h-10 w-10 rounded-full ring-2 ring-white dark:ring-slate-900 bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-500 dark:text-slate-400">
                  +4
                </div>
              </div>
            </div>
          </div>

          {/* Employment Details */}
          <div className="lg:col-span-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="size-8 rounded-full bg-teal-50 dark:bg-teal-900/20 text-teal-600 flex items-center justify-center">
                  <Briefcase className="w-4 h-4" />
                </span>
                Job Details
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50">
                <div className="flex items-center gap-3 mb-2">
                  <span className="p-2 bg-white dark:bg-slate-700 rounded-lg shadow-sm text-primary">
                    <Building className="w-5 h-5" />
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                    Department
                  </span>
                </div>
                <p className="text-slate-900 dark:text-white font-bold text-lg">
                  Product Design
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50">
                <div className="flex items-center gap-3 mb-2">
                  <span className="p-2 bg-white dark:bg-slate-700 rounded-lg shadow-sm text-primary">
                    <MapPin className="w-5 h-5" />
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                    Work Location
                  </span>
                </div>
                <p className="text-slate-900 dark:text-white font-bold text-lg">
                  San Francisco HQ
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50">
                <div className="flex items-center gap-3 mb-2">
                  <span className="p-2 bg-white dark:bg-slate-700 rounded-lg shadow-sm text-primary">
                    <Calendar className="w-5 h-5" />
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                    Join Date
                  </span>
                </div>
                <p className="text-slate-900 dark:text-white font-bold text-lg">
                  March 15, 2021
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50">
                <div className="flex items-center gap-3 mb-2">
                  <span className="p-2 bg-white dark:bg-slate-700 rounded-lg shadow-sm text-primary">
                    <Clock className="w-5 h-5" />
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                    Work Shift
                  </span>
                </div>
                <p className="text-slate-900 dark:text-white font-bold text-lg">
                  Standard (9AM - 5PM)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}
