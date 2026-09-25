export function AboutSteps4() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">How We Work</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">Our process is simple and effective.</p>
        </div>

          <div className="mx-auto max-w-2xl mt-12">
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-indigo-100 hidden sm:block"></div>
              
              <ul role="list" className="space-y-12">
                  <li className="relative flex flex-col sm:flex-row gap-x-8 gap-y-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50 ring-4 ring-white z-10 mx-auto sm:mx-0 shrink-0">
                      <span className="text-xl font-bold text-indigo-600">1</span>
                    </div>
                    <div className="flex flex-col flex-auto pt-2 text-center sm:text-left">
                      <h3 className="text-xl font-semibold leading-8 text-slate-900">Listen</h3>
                      <p className="mt-2 text-base leading-7 text-slate-600">We talk to users every day to understand real problems.</p>
                    </div>
                  </li>
                  <li className="relative flex flex-col sm:flex-row gap-x-8 gap-y-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50 ring-4 ring-white z-10 mx-auto sm:mx-0 shrink-0">
                      <span className="text-xl font-bold text-indigo-600">2</span>
                    </div>
                    <div className="flex flex-col flex-auto pt-2 text-center sm:text-left">
                      <h3 className="text-xl font-semibold leading-8 text-slate-900">Build</h3>
                      <p className="mt-2 text-base leading-7 text-slate-600">We iterate quickly with small, focused teams.</p>
                    </div>
                  </li>
                  <li className="relative flex flex-col sm:flex-row gap-x-8 gap-y-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50 ring-4 ring-white z-10 mx-auto sm:mx-0 shrink-0">
                      <span className="text-xl font-bold text-indigo-600">3</span>
                    </div>
                    <div className="flex flex-col flex-auto pt-2 text-center sm:text-left">
                      <h3 className="text-xl font-semibold leading-8 text-slate-900">Ship</h3>
                      <p className="mt-2 text-base leading-7 text-slate-600">We deliver value continuously with rapid deployments.</p>
                    </div>
                  </li>
                  <li className="relative flex flex-col sm:flex-row gap-x-8 gap-y-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50 ring-4 ring-white z-10 mx-auto sm:mx-0 shrink-0">
                      <span className="text-xl font-bold text-indigo-600">4</span>
                    </div>
                    <div className="flex flex-col flex-auto pt-2 text-center sm:text-left">
                      <h3 className="text-xl font-semibold leading-8 text-slate-900">Measure</h3>
                      <p className="mt-2 text-base leading-7 text-slate-600">We use data to validate and improve everything we build.</p>
                    </div>
                  </li>
              </ul>
            </div>
          </div>
      </div>
    </section>
  );
}
