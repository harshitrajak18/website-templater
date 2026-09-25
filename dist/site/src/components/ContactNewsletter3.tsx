export function ContactNewsletter3() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center rounded-3xl bg-indigo-50 px-6 py-16 sm:p-20 ring-1 ring-slate-200">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Subscribe to our newsletter</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Get the latest updates and product news directly to your inbox.
            </p>
          <div className="mt-10 flex max-w-md mx-auto items-center gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Email address"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Subscribe
            </button>
          </div>
          {/* Note: Static form - no backend connected */}
        </div>
      </div>
    </section>
  );
}
