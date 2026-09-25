export function SigninStats4() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">By the numbers</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">Trusted by developers around the world.</p>
        </div>
        
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4 ring-1 ring-slate-200">
              <div className="flex flex-col bg-slate-50 p-8 hover:bg-indigo-50 transition-colors duration-300">
                <dt className="text-sm font-semibold leading-6 text-slate-600">Developers</dt>
                <dd className="order-first text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">100K+</dd>
              </div>
              <div className="flex flex-col bg-slate-50 p-8 hover:bg-indigo-50 transition-colors duration-300">
                <dt className="text-sm font-semibold leading-6 text-slate-600">Builds per day</dt>
                <dd className="order-first text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">50M+</dd>
              </div>
              <div className="flex flex-col bg-slate-50 p-8 hover:bg-indigo-50 transition-colors duration-300">
                <dt className="text-sm font-semibold leading-6 text-slate-600">Uptime</dt>
                <dd className="order-first text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">99.99%</dd>
              </div>
              <div className="flex flex-col bg-slate-50 p-8 hover:bg-indigo-50 transition-colors duration-300">
                <dt className="text-sm font-semibold leading-6 text-slate-600">Countries</dt>
                <dd className="order-first text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">150+</dd>
              </div>
          </dl>
      </div>
    </section>
  );
}
