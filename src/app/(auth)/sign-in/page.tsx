"use client";

import { signInSchema } from "@/lib/zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import Link from "next/link";
import { useEffect, useState } from "react";
import { authClient } from "@/auth-client";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

import { ErrorContext } from "@better-fetch/fetch";

export default function SignIn() {
	const router = useRouter();
	const { toast } = useToast();
	const [pendingCredentials, setPendingCredentials] = useState(false);

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

	useEffect(() => {
		toast({
			title: "Something went wrong",
			description: "Something went wrong.",
			variant: "destructive",
		});
	}, [router]);

	return (
		<div >
			<h1>Sign In</h1>
			<form onSubmit={form.handleSubmit(handleCredentialsSignIn)}>
				<input
					key={'email'}
					placeholder={'Please enter your email...'}
					type={"email"}
					autoComplete={"email"}
					{...form.register('email')}
				/>
				<input
					key={'password'}
					placeholder={'Password...'}
					type={"password"}
					autoComplete={"new-password"}
					{...form.register('password')}
				/>
				<button type="submit" data-pending={pendingCredentials}>Sign in</button>
			</form>
			<div>
				<Link href="/forgot-password">
					Forgot password?
				</Link>
			</div>
		</div >
	);
}
