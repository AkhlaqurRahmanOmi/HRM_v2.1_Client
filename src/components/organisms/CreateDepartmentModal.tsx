import { useForm, Controller } from "react-hook-form"
import { useMutation } from "@tanstack/react-query"
import { X, Search, Info } from "lucide-react"
import { Input } from "../atoms/Input"
import { Button } from "../atoms/Button"
import { Label } from "../atoms/Label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../atoms/Select"
import { FormField } from "../molecules/FormField"
import { Avatar, AvatarImage, AvatarFallback } from "../atoms/Avatar"

// Mock API
const createDepartment = async (data: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, ...data })
    }, 1000)
  })
}

interface CreateDepartmentModalProps {
  isOpen: boolean
  onClose: () => void
}

export function CreateDepartmentModal({
  isOpen,
  onClose,
}: CreateDepartmentModalProps) {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const mutation = useMutation({
    mutationFn: createDepartment,
    onSuccess: (data) => {
      console.log("Department created:", data)
      onClose()
      alert("Department created successfully!")
    },
  })

  const onSubmit = (data: any) => {
    mutation.mutate(data)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex justify-end">
      <div className="w-full max-w-md bg-white dark:bg-background-dark h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        <div className="flex items-center justify-between px-6 py-5 border-b border-primary/10">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              Create Department
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Define a new organizational unit
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-slate-400 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <form
            id="create-department-form"
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <FormField
              label="Department Name"
              htmlFor="dept-name"
              error={errors.departmentName?.message as string}
            >
              <Input
                id="dept-name"
                placeholder="e.g. Quality Assurance"
                {...register("departmentName", {
                  required: "Department name is required",
                })}
              />
            </FormField>

            <FormField
              label="Parent Department"
              htmlFor="parent-dept"
              error={errors.parentDepartment?.message as string}
            >
              <Controller
                name="parentDepartment"
                control={control}
                defaultValue="None (Top Level)"
                render={({ field }) => (
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select parent department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="None (Top Level)">
                        None (Top Level)
                      </SelectItem>
                      <SelectItem value="Engineering">Engineering</SelectItem>
                      <SelectItem value="Marketing">Marketing</SelectItem>
                      <SelectItem value="Human Resources">
                        Human Resources
                      </SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </FormField>

            <div className="space-y-2">
              <Label variant="custom">Department Head</Label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                <Input
                  className="pl-10"
                  placeholder="Search employee..."
                  {...register("departmentHeadSearch")}
                />
              </div>
              {/* Mock selected user */}
              <div className="flex items-center gap-2 p-2 bg-primary/5 rounded-lg border border-primary/10 mt-2">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuDv6tLFkSOyNDJ3E94_WDRshmpq4ZZNjEZx98R-H2X7v1MXi76mh6PudpmnhCQansCWz3BrUvYYKb-_rtPKBon51RgpHYQnpqJil2EUhZSdke3tStPxL0QjMmgnvJeQ0pVDcyCzOjTasmmmKix5sAeCoZSGAU61pCDZKRTZYDwhaQySLtVavZs_ETOuWlOmYenNHGDlDUhTn2nMpN-Dgmf6FcboCJ-VpA93iUPcZOXsVYH8KZL1UTaoIL8QMpHcyUjmQ43xMjVWDSSn" />
                  <AvatarFallback>RF</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-xs font-semibold">Robert Fox</p>
                  <p className="text-[10px] text-slate-500">
                    Sr. Engineering Manager
                  </p>
                </div>
                <button
                  type="button"
                  className="text-slate-400 hover:text-red-500 p-1"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <FormField
              label="Description"
              htmlFor="description"
              error={errors.description?.message as string}
            >
              <textarea
                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary focus:ring-primary/20 transition-all resize-none"
                placeholder="Briefly describe the purpose of this department..."
                rows={4}
                {...register("description")}
              />
            </FormField>

            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800/30 rounded-lg flex gap-3">
              <Info className="h-5 w-5 text-amber-500 flex-shrink-0" />
              <p className="text-xs text-amber-800 dark:text-amber-200 leading-relaxed">
                Creating a new department will automatically create a
                corresponding team channel in the internal communication hub.
              </p>
            </div>
          </form>
        </div>

        <div className="p-6 border-t border-primary/10 flex items-center gap-3 bg-slate-50 dark:bg-slate-900/50">
          <Button
            type="button"
            variant="outline"
            className="flex-1 h-auto py-2.5 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            form="create-department-form"
            className="flex-1 h-auto py-2.5 bg-primary text-white font-semibold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Saving..." : "Save Department"}
          </Button>
        </div>
      </div>
    </div>
  )
}
