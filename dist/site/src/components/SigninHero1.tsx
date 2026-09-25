export function SigninHero1() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      {/* Decorative gradient */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={ { clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" } }></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="">
              <div className=" mb-6 flex">
                <span className="rounded-full bg-indigo-50 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/20">
                  Now in public beta
                </span>
              </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              Build Better Software, Faster
            </h1>
            
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Acme is the platform for modern development teams to collaborate and ship software at scale.
              </p>

            <div className="mt-10 flex items-center  gap-x-6">
                <a href="/contact/" className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors">
                  Start for Free
                </a>
                <a href="/about/" className="text-sm font-semibold leading-6 text-slate-900 hover:text-indigo-600 transition-colors">
                  Learn More <span aria-hidden="true">→</span>
                </a>
            </div>
          </div>
          
            <div className="mt-16 sm:mt-24 lg:mt-0">
              <img src="https://placehold.co/800x500/e2e8f0/475569?text=Product+Dashboard" alt="Product Dashboard" className="rounded-2xl shadow-xl ring-1 ring-slate-900/10 object-cover w-full" />
            </div>
        </div>
      </div>
    </section>
  );
}
