export function ContactFooter4() {
  return (
    <footer className="bg-slate-900 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <span className="text-2xl font-bold text-white">Acme</span>
              <p className="text-sm leading-6 text-slate-400">
                Building the future of team productivity.
              </p>
              <div className="flex space-x-6">
                  <a href="https://twitter.com/acme" className="text-slate-500 hover:text-slate-400">
                    <span className="sr-only">twitter</span>
                    {/* Fallback to text if icon is not provided */}
                    <span className="text-sm font-medium">twitter</span>
                  </a>
                  <a href="https://github.com/acme" className="text-slate-500 hover:text-slate-400">
                    <span className="sr-only">github</span>
                    {/* Fallback to text if icon is not provided */}
                    <span className="text-sm font-medium">github</span>
                  </a>
                  <a href="https://linkedin.com/company/acme" className="text-slate-500 hover:text-slate-400">
                    <span className="sr-only">linkedin</span>
                    {/* Fallback to text if icon is not provided */}
                    <span className="text-sm font-medium">linkedin</span>
                  </a>
              </div>
          </div>
          
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                <div className="md:grid md:grid-cols-1 md:gap-8">
                  <div>
                    <h3 className="text-sm font-semibold leading-6 text-white">Product</h3>
                    <ul role="list" className="mt-6 space-y-4">
                        <li>
                          <a href="/" className="text-sm leading-6 text-slate-400 hover:text-white">
                            Features
                          </a>
                        </li>
                        <li>
                          <a href="/pricing/" className="text-sm leading-6 text-slate-400 hover:text-white">
                            Pricing
                          </a>
                        </li>
                    </ul>
                  </div>
                </div>
                <div className="md:grid md:grid-cols-1 md:gap-8">
                  <div>
                    <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                    <ul role="list" className="mt-6 space-y-4">
                        <li>
                          <a href="/about/" className="text-sm leading-6 text-slate-400 hover:text-white">
                            About Us
                          </a>
                        </li>
                        <li>
                          <a href="/contact/" className="text-sm leading-6 text-slate-400 hover:text-white">
                            Contact
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-sm leading-6 text-slate-400 hover:text-white">
                            Careers
                          </a>
                        </li>
                    </ul>
                  </div>
                </div>
            </div>
        </div>
        
        <div className="mt-16 border-t border-slate-800 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-sm leading-5 text-slate-400">
            &copy; © 2026 Acme Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
