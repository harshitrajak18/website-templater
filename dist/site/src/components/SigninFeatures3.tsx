export function SigninFeatures3() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Everything you need to ship
          </p>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              A complete set of tools to power your entire development lifecycle.
            </p>
        </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3 md:grid-cols-2">
                <div className="flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition-shadow hover:shadow-md">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                      <span className="h-10 w-10 flex items-center justify-center rounded-lg bg-indigo-600 text-white shadow-sm text-xl">
                        ⚡
                      </span>
                    Lightning Fast
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                    <p className="flex-auto">Built for speed from the ground up. Sub-second response times on every interaction.</p>
                  </dd>
                </div>
                <div className="flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition-shadow hover:shadow-md">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                      <span className="h-10 w-10 flex items-center justify-center rounded-lg bg-indigo-600 text-white shadow-sm text-xl">
                        🔒
                      </span>
                    Enterprise Security
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                    <p className="flex-auto">SOC 2 compliant with end-to-end encryption. Your data is always safe.</p>
                  </dd>
                </div>
                <div className="flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition-shadow hover:shadow-md">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                      <span className="h-10 w-10 flex items-center justify-center rounded-lg bg-indigo-600 text-white shadow-sm text-xl">
                        🔌
                      </span>
                    Seamless Integrations
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                    <p className="flex-auto">Connect with 100+ tools your team already uses. No custom code required.</p>
                  </dd>
                </div>
                <div className="flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition-shadow hover:shadow-md">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                      <span className="h-10 w-10 flex items-center justify-center rounded-lg bg-indigo-600 text-white shadow-sm text-xl">
                        📊
                      </span>
                    Advanced Analytics
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                    <p className="flex-auto">Real-time dashboards and reports to help you make data-driven decisions.</p>
                  </dd>
                </div>
                <div className="flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition-shadow hover:shadow-md">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                      <span className="h-10 w-10 flex items-center justify-center rounded-lg bg-indigo-600 text-white shadow-sm text-xl">
                        🤝
                      </span>
                    Team Collaboration
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                    <p className="flex-auto">Built-in collaboration tools so your team can work together seamlessly.</p>
                  </dd>
                </div>
                <div className="flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition-shadow hover:shadow-md">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                      <span className="h-10 w-10 flex items-center justify-center rounded-lg bg-indigo-600 text-white shadow-sm text-xl">
                        🌍
                      </span>
                    Global Scale
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                    <p className="flex-auto">Deploy worldwide with edge computing. Fast for every user, everywhere.</p>
                  </dd>
                </div>
            </dl>
          </div>
      </div>
    </section>
  );
}
