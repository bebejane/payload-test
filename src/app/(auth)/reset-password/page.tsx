"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { resetPasswordSchema } from "@/lib/zod";
import { authClient } from "@/auth-client";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

function ResetPasswordContent() {
	const router = useRouter();
	const { toast } = useToast();
	const searchParams = useSearchParams();
	const error = searchParams.get("error");
	const [isPending, setIsPending] = useState(false);

	const form = useForm<z.infer<typeof resetPasswordSchema>>({
		resolver: zodResolver(resetPasswordSchema),
		defaultValues: {
			password: "",
			confirmPassword: "",
		},
	});

	const onSubmit = async (data: z.infer<typeof resetPasswordSchema>) => {
		setIsPending(true);
		const { error } = await authClient.resetPassword({
			newPassword: data.password,
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
				description: "Password reset successful. Login to continue.",
			});
			router.push("/sign-in");
		}
		setIsPending(false);
	};

	if (error === "invalid_token") {
		return (
			<div >
				<p className="text-center text-gray-600">
					This password reset link is invalid or has expired.
				</p>
			</div>
		);
	}


	return (
		<div className="grow flex items-center justify-center p-4">
			<h1>Reset Password</h1>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<input
					type="password"
					name="password"
					placeholder="Enter your new password"
					{...form.register("password")}
				/>

				<input
					type="password"
					name="confirmPassword"
					placeholder="Enter your new password"
					{...form.register("confirmPassword")}
				/>
				<button data-pending={isPending}>Reset Password</button>
			</form>
		</div >
	);
}

export default function ResetPassword() {
	return (
		<Suspense>
			<ResetPasswordContent />
		</Suspense>
	);
}
