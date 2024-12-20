'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { authClient } from '@/auth/auth-client'
import { useToast } from '@/lib/hooks/use-toast'
import { forgotPasswordSchema } from 'lib/zod'
import Link from 'next/link'

export default function ForgotPassword() {
  const { toast } = useToast()
  const [isPending, setIsPending] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  })

  const onSubmit = async (data: z.infer<typeof forgotPasswordSchema>) => {
    setIsPending(true)
    setIsSuccess(false)

    const { error } = await authClient.forgetPassword({
      email: data.email,
      redirectTo: '/reset-password',
    })

    if (error) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      })
    } else {
      toast({
        title: 'Success',
        description: 'If an account exists with this email, you will receive a password reset link.',
      })
    }
    setIsSuccess(error === null)
    setIsPending(false)
  }

  return (
    <div>
      <h1>Forgot Password</h1>
      {isSuccess ? (
        <p>Check your email for a password reset link. If you don&apos;t see it, check your spam folder.</p>
      ) : (
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <input type="email" placeholder="Enter your email" {...form.register('email')} />
          <button type="submit" data-pending={isPending}>
            Send Reset Link
          </button>
        </form>
      )}
      <div>
        Already have an account? <Link href="/sign-in">Sign in</Link>
      </div>
    </div>
  )
}
