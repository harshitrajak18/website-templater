export function HomeCta6() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-900 py-20 sm:py-24 lg:py-32">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-600 to-indigo-800 opacity-90"></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to get started?
          </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-100">
              Join thousands of developers building the future.
            </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="/contact/" className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors">
                Get Started Now
              </a>
              <a href="/pricing/" className="text-sm font-semibold leading-6 text-white hover:text-indigo-100 transition-colors">
                View Pricing <span aria-hidden="true">→</span>
              </a>
          </div>
        </div>
      </div>
    </section>
  );
}
