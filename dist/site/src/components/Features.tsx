export function Features() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">

          <span
            className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 sm:text-sm"
          >
            Features
          </span>

          <h2
            className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Everything you need
          </h2>

          <p
            className="mt-4 text-base leading-7 text-slate-600 sm:text-lg"
          >
            All the tools and integrations your team needs, out of the box.
          </p>

        </div>

        {/* Feature Grid */}
        <div
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >

          <div
            className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
          >

            <div
              className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-xl"
            >
              ⚡
            </div>

            <h3
              className="text-lg font-semibold text-slate-900"
            >
              Lightning Fast
            </h3>

            <p
              className="mt-2 flex-1 text-sm leading-6 text-slate-600"
            >
              Built for speed from the ground up. Sub-second response times on every interaction.
            </p>

          </div>
          <div
            className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
          >

            <div
              className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-xl"
            >
              🔒
            </div>

            <h3
              className="text-lg font-semibold text-slate-900"
            >
              Enterprise Security
            </h3>

            <p
              className="mt-2 flex-1 text-sm leading-6 text-slate-600"
            >
              SOC 2 compliant with end-to-end encryption. Your data is always safe.
            </p>

          </div>
          <div
            className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
          >

            <div
              className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-xl"
            >
              🔌
            </div>

            <h3
              className="text-lg font-semibold text-slate-900"
            >
              Seamless Integrations
            </h3>

            <p
              className="mt-2 flex-1 text-sm leading-6 text-slate-600"
            >
              Connect with 100+ tools your team already uses. No custom code required.
            </p>

          </div>
          <div
            className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
          >

            <div
              className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-xl"
            >
              📊
            </div>

            <h3
              className="text-lg font-semibold text-slate-900"
            >
              Advanced Analytics
            </h3>

            <p
              className="mt-2 flex-1 text-sm leading-6 text-slate-600"
            >
              Real-time dashboards and reports to help you make data-driven decisions.
            </p>

          </div>
          <div
            className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
          >

            <div
              className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-xl"
            >
              🤝
            </div>

            <h3
              className="text-lg font-semibold text-slate-900"
            >
              Team Collaboration
            </h3>

            <p
              className="mt-2 flex-1 text-sm leading-6 text-slate-600"
            >
              Built-in collaboration tools so your team can work together seamlessly.
            </p>

          </div>
          <div
            className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
          >

            <div
              className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-xl"
            >
              🌍
            </div>

            <h3
              className="text-lg font-semibold text-slate-900"
            >
              Global Scale
            </h3>

            <p
              className="mt-2 flex-1 text-sm leading-6 text-slate-600"
            >
              Deploy worldwide with edge computing. Fast for every user, everywhere.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
