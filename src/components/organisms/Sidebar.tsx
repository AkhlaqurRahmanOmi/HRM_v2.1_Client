import {
  Network,
  Briefcase,
  Users,
  MapPin,
  Workflow,
} from "lucide-react"
import { NavItem } from "../molecules/NavItem"

export function Sidebar() {
  return (
    <aside className="w-full lg:w-64 border-r border-primary/10 bg-white dark:bg-background-dark p-4 flex flex-col gap-6">
      <div className="space-y-1">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest px-3 mb-2">
          Management
        </p>
        <NavItem
          icon={Network}
          label="Departments"
          href="#"
          active
        />
        <NavItem
          icon={Briefcase}
          label="Job Titles"
          href="#"
        />
        <NavItem
          icon={Users}
          label="Teams"
          href="#"
        />
        <NavItem
          icon={MapPin}
          label="Locations"
          href="#"
        />
        <NavItem
          icon={Workflow}
          label="Org Chart"
          href="#"
        />
      </div>
    </aside>
  )
}
