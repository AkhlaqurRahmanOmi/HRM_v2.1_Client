"use client";

import { useState } from "react"
import { motion } from "framer-motion"
import { Plus, PenTool, Terminal, DollarSign } from "lucide-react"
import { DashboardTemplate } from "../components/templates/DashboardTemplate"
import { DepartmentCard } from "../components/molecules/DepartmentCard"
import { Button } from "../components/atoms/Button"
import { CreateDepartmentModal } from "../components/organisms/CreateDepartmentModal"

export default function DepartmentsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <DashboardTemplate>
      <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-slate-900 dark:text-slate-100 text-3xl font-bold tracking-tight"
          >
            Departments
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 mt-1"
          >
            Configure and manage your organization's structural units
          </motion.p>
        </div>
        <Button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg font-semibold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
        >
          <Plus className="h-5 w-5" />
          <span>New Department</span>
        </Button>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <motion.div variants={item}>
          <DepartmentCard
            icon={PenTool}
            name="Product Design"
            description="Core design and UX research"
            employeeCount={12}
            className="h-full"
          />
        </motion.div>
        <motion.div variants={item}>
          <DepartmentCard
            icon={Terminal}
            name="Engineering"
            description="Software development team"
            employeeCount={45}
            className="h-full"
          />
        </motion.div>
        <motion.div variants={item}>
          <DepartmentCard
            icon={DollarSign}
            name="Finance"
            description="Payroll and accounting"
            employeeCount={8}
            className="h-full"
          />
        </motion.div>
      </motion.div>

      <CreateDepartmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </DashboardTemplate>
  )
}
