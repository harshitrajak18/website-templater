export function AboutImageText2() {
  return (
    <section className="bg-white py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
          <div className="lg:pr-8 lg:pt-4 order-first">
            <div className="lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Story</h2>
                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Founded in 2020, Acme started with a simple idea: developers shouldn't have to fight their tools. Today, we're building the foundation for the next generation of software.
                </p>
            </div>
          </div>
            <div className="lg:order-last">
              <img src="https://placehold.co/600x400/e2e8f0/475569?text=Our+Office" alt="Acme Office" className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-slate-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" width={2432} height={1442} />
            </div>
        </div>
      </div>
    </section>
  );
}
