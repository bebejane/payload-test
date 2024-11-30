import Link from "next/link";

export default async function EmailVerifiedPage() {
	return (
		<div>
			<h1>
				Email Verified!
			</h1>
			<p className="mb-4 text-gray-600">
				Your email has been successfully verified.
			</p>
			<Link href="/">
				Go to home
			</Link>
		</div>
	);
}
