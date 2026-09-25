export function Testimonials() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">

          <h2
            className="
              text-3xl
              font-bold
              tracking-tight
              text-slate-900
              sm:text-4xl
            "
          >
            Loved by our customers Harshit
          </h2>

          <p
            className="
              mt-4
              text-base
              leading-7
              text-slate-600
              sm:text-lg
            "
          >
            See what teams around the world are saying about Acme.
          </p>

        </div>


        {/* Testimonials */}
        <div
          className="
            mx-auto
            mt-12
            grid
            max-w-2xl
            grid-cols-1
            gap-6
            lg:mt-16
            lg:max-w-none
            lg:grid-cols-3
          "
        >


          <figure
            className="
              flex
              flex-col
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-6
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-lg
              sm:p-8
            "
          >

            {/* Quote */}
            <blockquote
              className="
                flex-1
                text-base
                leading-7
                text-slate-700
                sm:text-lg
                sm:leading-8
              "
            >
              <span className="mr-1 text-2xl font-bold text-indigo-600">
                "
              </span>

              Acme has transformed how our team collaborates. We shipped 3x faster in the first month.

              <span className="ml-1 text-2xl font-bold text-indigo-600">
                "
              </span>
            </blockquote>


            {/* Person */}
            <figcaption className="mt-8 border-t border-slate-100 pt-6">

              <div className="flex items-center gap-4">

                {/* Avatar */}
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-indigo-100
                    text-sm
                    font-bold
                    text-indigo-700
                  "
                >
                  S
                </div>


                <div className="min-w-0">

                  <div className="truncate text-sm font-semibold text-slate-900">
                    Sarah Johnson
                  </div>

                  <div className="truncate text-sm text-slate-500">
                    Product Manager
                      · TechCorp
                  </div>

                </div>

              </div>

            </figcaption>

          </figure>


          <figure
            className="
              flex
              flex-col
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-6
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-lg
              sm:p-8
            "
          >

            {/* Quote */}
            <blockquote
              className="
                flex-1
                text-base
                leading-7
                text-slate-700
                sm:text-lg
                sm:leading-8
              "
            >
              <span className="mr-1 text-2xl font-bold text-indigo-600">
                "
              </span>

              The best developer experience I've ever had. Everything just works out of the box.

              <span className="ml-1 text-2xl font-bold text-indigo-600">
                "
              </span>
            </blockquote>


            {/* Person */}
            <figcaption className="mt-8 border-t border-slate-100 pt-6">

              <div className="flex items-center gap-4">

                {/* Avatar */}
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-indigo-100
                    text-sm
                    font-bold
                    text-indigo-700
                  "
                >
                  M
                </div>


                <div className="min-w-0">

                  <div className="truncate text-sm font-semibold text-slate-900">
                    Michael Chen
                  </div>

                  <div className="truncate text-sm text-slate-500">
                    Senior Engineer
                      · StartupHQ
                  </div>

                </div>

              </div>

            </figcaption>

          </figure>


          <figure
            className="
              flex
              flex-col
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-6
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-lg
              sm:p-8
            "
          >

            {/* Quote */}
            <blockquote
              className="
                flex-1
                text-base
                leading-7
                text-slate-700
                sm:text-lg
                sm:leading-8
              "
            >
              <span className="mr-1 text-2xl font-bold text-indigo-600">
                "
              </span>

              We evaluated 10 tools and Acme was the clear winner. Incredible value for the price.

              <span className="ml-1 text-2xl font-bold text-indigo-600">
                "
              </span>
            </blockquote>


            {/* Person */}
            <figcaption className="mt-8 border-t border-slate-100 pt-6">

              <div className="flex items-center gap-4">

                {/* Avatar */}
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-indigo-100
                    text-sm
                    font-bold
                    text-indigo-700
                  "
                >
                  E
                </div>


                <div className="min-w-0">

                  <div className="truncate text-sm font-semibold text-slate-900">
                    Emily Rodriguez
                  </div>

                  <div className="truncate text-sm text-slate-500">
                    CTO
                      · ScaleUp Inc
                  </div>

                </div>

              </div>

            </figcaption>

          </figure>


        </div>

      </div>
    </section>
  );
}
