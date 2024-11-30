"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { authClient } from "@/auth-client";
import { useToast } from "@/hooks/use-toast";
import { forgotPasswordSchema } from "@/lib/zod";

export default function ForgotPassword() {
	const { toast } = useToast();
	const [isPending, setIsPending] = useState(false);

	const form = useForm<z.infer<typeof forgotPasswordSchema>>({
		resolver: zodResolver(forgotPasswordSchema),
		defaultValues: {
			email: "",
		},
	});

	const onSubmit = async (data: z.infer<typeof forgotPasswordSchema>) => {
		setIsPending(true);
		const { error } = await authClient.forgetPassword({
			email: data.email,
			redirectTo: "/reset-password",
		});

		if (error) {
			toast({
				title: "Error",
				description: error.message,
				variant: "destructive",
			});
		} else {
			toast({
				title: "Success",
				description:
					"If an account exists with this email, you will receive a password reset link.",
			});
		}
		setIsPending(false);
	};
	console.log(form)

	return (
		<div>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<input type="email" placeholder="Enter your email" {...form.register("email")} />
				<button type="submit" data-pending={isPending}>Send Reset Link</button>
			</form>
		</div>
	);
}
