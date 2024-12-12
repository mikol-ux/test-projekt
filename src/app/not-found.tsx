import Link from 'next/link'

export default function NotFound() {
	return (
		<main className="grid h-full place-items-center bg-black px-6 py-24 sm:py-32 lg:px-8">
			<div className="text-center">
				<p className="text-base font-semibold text-white-600">404</p>
				<h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
					Page not found
				</h1>
				<p className="mt-6 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
					Sorry, we couldn’t find the page you’re looking for.
				</p>
				<div className="mt-10 flex items-center justify-center gap-x-6">
					<a
						href="/"
						className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						Go back home
					</a>
					<a href="#" className="text-sm font-semibold text-gray-200">
						Contact support <span aria-hidden="true">&rarr;</span>
					</a>
				</div>
			</div>
		</main>
	)
}