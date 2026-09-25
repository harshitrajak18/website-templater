export function Footer() {
  return (
    <footer className="bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">

        <div className="xl:grid xl:grid-cols-3 xl:gap-8">

          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">
              Acme
            </h3>

            <p className="max-w-xs text-sm leading-6 text-slate-400">
              Building the future of team productivity.
            </p>
          </div>

          {/* Link Groups */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">

            <div>
              <h4 className="text-sm font-semibold leading-6 text-white">
                Product
              </h4>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="/features"
                    className="text-sm leading-6 text-slate-400 transition-colors hover:text-white"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="/pricing"
                    className="text-sm leading-6 text-slate-400 transition-colors hover:text-white"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="/changelog"
                    className="text-sm leading-6 text-slate-400 transition-colors hover:text-white"
                  >
                    Changelog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold leading-6 text-white">
                Company
              </h4>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="/about"
                    className="text-sm leading-6 text-slate-400 transition-colors hover:text-white"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="text-sm leading-6 text-slate-400 transition-colors hover:text-white"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/careers"
                    className="text-sm leading-6 text-slate-400 transition-colors hover:text-white"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-slate-800 pt-8">
          <p className="text-center text-sm leading-5 text-slate-500">
            © 2026 Acme Inc. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
