import { useForm } from "react-hook-form"
import { useMutation } from "@tanstack/react-query"
import { PasswordInput } from "../molecules/PasswordInput"
import { FormField } from "../molecules/FormField"
import { Button } from "../atoms/Button"

// Mock API function
const resetPassword = async (data: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, ...data })
    }, 1000)
  })
}

export function ResetPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const mutation = useMutation({
    mutationFn: resetPassword,
    onSuccess: (data) => {
      console.log("Password reset successful:", data)
      alert("Password reset successful!")
    },
  })

  const onSubmit = (data: any) => {
    mutation.mutate(data)
  }

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
      <FormField
        label="New Password"
        htmlFor="new-password"
        error={errors.newPassword?.message as string}
      >
        <PasswordInput
          id="new-password"
          placeholder="Enter new password"
          {...register("newPassword", {
            required: "New password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
        />
      </FormField>

      <FormField
        label="Confirm New Password"
        htmlFor="confirm-password"
        error={errors.confirmPassword?.message as string}
      >
        <PasswordInput
          id="confirm-password"
          placeholder="Re-enter new password"
          {...register("confirmPassword", {
            required: "Please confirm your password",
            // You would typically add a validate function here to match passwords
          })}
        />
      </FormField>

      <div className="pt-2">
        <Button
          type="submit"
          variant="customPrimary"
          size="custom"
          className="w-full md:w-auto"
          disabled={mutation.isPending}
        >
          {mutation.isPending ? "Resetting..." : "Reset Password"}
        </Button>
      </div>
    </form>
  )
}
