"use client";

import Link from "next/link";

import { signUpSchema } from "@/lib/zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { authClient } from "@/auth-client";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function SignUp() {
	const [pending, setPending] = useState(false);
	const { toast } = useToast();

	const form = useForm<z.infer<typeof signUpSchema>>({
		resolver: zodResolver(signUpSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
	});

	const onSubmit = async (values: z.infer<typeof signUpSchema>) => {
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
					console.log('success');
					toast({
						title: "Account created",
						description:
							"Your account has been created. Check your email for a verification link.",
					});
				},
				onError: (ctx) => {
					console.log("error", ctx);
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
			<form onSubmit={form.handleSubmit(onSubmit)} >
				{["name", "email", "password", "confirmPassword"].map((field) =>
					<input
						control={form.control}
						key={field}
						name={field as keyof z.infer<typeof signUpSchema>}
						type={field.includes("password") ? "password" : field === "email" ? "email" : "text"}
						placeholder={`Enter your ${field}`}
						autoComplete="off"
						{...form.register(field)}
					/>
				)}
				<button type="submit" data-pending={pending}>Sign up</button>
			</form>
			<div >
				<Link href="/sign-in" >
					Already have an account? Sign in
				</Link>
			</div>
		</div >
	);
}
