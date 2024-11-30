"use client";

import { signInSchema } from "@/lib/zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import Link from "next/link";
import { useState } from "react";
import { authClient } from "@/auth-client";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

import { ErrorContext } from "@better-fetch/fetch";
import { GithubIcon } from "lucide-react";

export default function SignIn() {
	const router = useRouter();
	const { toast } = useToast();
	const [pendingCredentials, setPendingCredentials] = useState(false);
	const [pendingGithub, setPendingGithub] = useState(false);

	const form = useForm<z.infer<typeof signInSchema>>({
		resolver: zodResolver(signInSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const handleCredentialsSignIn = async (
		values: z.infer<typeof signInSchema>
	) => {
		await authClient.signIn.email(
			{
				email: values.email,
				password: values.password,
			},
			{
				onRequest: () => {
					setPendingCredentials(true);
				},
				onSuccess: async () => {
					router.push("/");
					router.refresh();
				},
				onError: (ctx: ErrorContext) => {
					console.log(ctx);
					toast({
						title: "Something went wrong",
						description: ctx.error.message ?? "Something went wrong.",
						variant: "destructive",
					});
				},
			}
		);
		setPendingCredentials(false);
	};

	const handleSignInWithGithub = async () => {
		await authClient.signIn.social(
			{
				provider: "github",
			},
			{
				onRequest: () => {
					setPendingGithub(true);
				},
				onSuccess: async () => {
					router.push("/");
					router.refresh();
				},
				onError: (ctx: ErrorContext) => {
					toast({
						title: "Something went wrong",
						description: ctx.error.message ?? "Something went wrong.",
						variant: "destructive",
					});
				},
			}
		);
		setPendingGithub(false);
	};

	return (
		<div >
			<h1>Sign In</h1>
			<form onSubmit={form.handleSubmit(handleCredentialsSignIn)}>
				{["email", "password"].map((field) => (
					<input
						key={field}
						name={field as keyof z.infer<typeof signInSchema>}
						placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
						type={field === "password" ? "password" : "email"}
						autoComplete={field === "password" ? "current-password" : "email"}
						{...form.register(field)}
					/>
				))}
				<button type="submit" data-pending={pendingCredentials}>Sign in</button>
			</form>

			<div className="mt-4 text-center text-sm">
				<Link
					href="/forgot-password"
					className="text-primary hover:underline"
				>
					Forgot password?
				</Link>
			</div>
		</div >
	);
}
