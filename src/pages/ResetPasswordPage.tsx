"use client";

import { AuthTemplate } from "../components/templates/AuthTemplate"
import { ResetPasswordForm } from "../components/organisms/ResetPasswordForm"
import { PasswordRequirements } from "../components/organisms/PasswordRequirements"
import { motion } from "framer-motion"

export default function ResetPasswordPage() {
  return (
    <AuthTemplate>
      {/* Left Column: Form */}
      <motion.div
        className="lg:col-span-7 flex flex-col gap-8"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="space-y-2">
          <h1 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black tracking-tight">
            Reset Password
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg">
            Please choose a new password to secure your HRM account.
          </p>
        </div>
        <ResetPasswordForm />
      </motion.div>

      {/* Right Column: Helper Box / Rules */}
      <motion.div
        className="lg:col-span-5 w-full"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <PasswordRequirements />
      </motion.div>
    </AuthTemplate>
  )
}
