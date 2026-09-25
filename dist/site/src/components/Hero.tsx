export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white">

      {/* Background */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          className="
            relative
            left-[calc(50%-11rem)]
            aspect-[1155/678]
            w-[36rem]
            -translate-x-1/2
            rotate-[30deg]
            bg-gradient-to-tr
            from-indigo-400
            to-purple-400
            opacity-20
            sm:left-[calc(50%-30rem)]
            sm:w-[72rem]
          "
        />
      </div>


      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">


        
        
        

        <div
          className="
            mx-auto
            max-w-4xl
            py-20
            text-center
            sm:py-28
            lg:py-36
          "
        >

          <div className="mb-6 flex justify-center">
            <span
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-indigo-200
                bg-indigo-50
                px-3
                py-1
                text-xs
                font-semibold
                text-indigo-700
                sm:text-sm
              "
            >
              Build faster
            </span>
          </div>


          <h1
            className="
              text-balance
              text-4xl
              font-bold
              tracking-tight
              text-slate-900
              sm:text-5xl
              lg:text-6xl
              xl:text-7xl
            "
          >
            Create something amazing
          </h1>


          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-pretty
              text-base
              leading-7
              text-slate-600
              sm:text-lg
              sm:leading-8
            "
          >
            A modern platform for modern teams. Ship products faster with less complexity.
          </p>


          <div
            className="
              mt-10
              flex
              flex-col
              gap-3
              sm:flex-row
              sm:justify-center
            "
          >

            <a
              href="/signup"
              className="
                inline-flex
                items-center
                justify-center
                rounded-lg
                bg-slate-900
                px-5
                py-3
                text-sm
                font-semibold
                text-white
                shadow-sm
                transition-all
                hover:-translate-y-0.5
                hover:bg-slate-800
                hover:shadow-lg
                sm:px-6
                sm:py-3.5
              "
            >
              Get Started
            </a>


            <a
              href="/demo"
              className="
                inline-flex
                items-center
                justify-center
                rounded-lg
                border
                border-slate-200
                bg-white
                px-5
                py-3
                text-sm
                font-semibold
                text-slate-700
                shadow-sm
                transition-all
                hover:-translate-y-0.5
                hover:border-slate-300
                hover:bg-slate-50
                hover:shadow-md
                sm:px-6
                sm:py-3.5
              "
            >
              View Demo
            </a>

          </div>

        </div>


      </div>
    </section>
  );
}
