"use client";

import Link from "next/link";

import { signUpSchema } from "lib/zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { authClient } from "@/auth-client";
import { useState } from "react";
import { useToast } from "@/lib/hooks/use-toast";

type SignUpFormData = z.infer<typeof signUpSchema>;

export default function SignUp() {
	const [pending, setPending] = useState(false);
	const { toast } = useToast();

	const form = useForm<SignUpFormData>({
		resolver: zodResolver(signUpSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
	});

	const onSubmit = async (values: SignUpFormData) => {
		await authClient.signUp.email(
			{
				email: values.email,
				password: values.password,
				name: values.name,
			},
			{
				onRequest: () => {
					setPending(true);
				},
				onSuccess: () => {
					toast({
						title: "Account created",
						description:
							"Your account has been created. Check your email for a verification link.",
					});
				},
				onError: (ctx: { error: { message?: string } }) => {
					toast({
						title: "Something went wrong",
						description: ctx.error.message ?? "Something went wrong.",
					});
				},
			}
		);
		setPending(false);
	};

	return (
		<div>
			<h1>Create Account</h1>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<input
					type="text"
					placeholder="Enter your name"
					autoComplete="off"
					{...form.register("name")}
				/>
				<input
					type="email"
					placeholder="Enter your email"
					autoComplete={"new-email"}
					{...form.register("email")}
				/>
				<input
					type="password"
					placeholder="Enter your password"
					autoComplete={"new-password"}
					{...form.register("password")}
				/>
				<input
					type="password"
					placeholder="Enter your confirm password"
					autoComplete="off"
					{...form.register("confirmPassword")}
				/>
				<button type="submit" data-pending={pending}>Sign up</button>
			</form>
			<div>
				<Link href="/sign-in">
					Already have an account? Sign in
				</Link>
			</div>
		</div>
	);
}
