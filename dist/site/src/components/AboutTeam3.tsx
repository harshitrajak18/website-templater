export function AboutTeam3() {
  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Meet the Team</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">The people behind Acme.</p>
        </div>
        
          <ul role="list" className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <li>
                <div className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
                    <img className="mx-auto h-32 w-32 rounded-full object-cover shadow-sm ring-2 ring-indigo-50" src="https://placehold.co/200x200/e2e8f0/475569?text=AS" alt="Alice Smith" />
                  
                  <h3 className="mt-6 text-center text-lg font-semibold leading-7 tracking-tight text-slate-900">Alice Smith</h3>
                  <p className="text-center text-sm leading-6 text-indigo-600">CEO & Co-Founder</p>
                  
                    <p className="mt-4 text-center text-sm leading-6 text-slate-600 line-clamp-3">Former VP at BigTech. Passionate about developer experience.</p>
                  
                    <ul role="list" className="mt-6 flex justify-center gap-x-6">
                    </ul>
                </div>
              </li>
              <li>
                <div className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
                    <img className="mx-auto h-32 w-32 rounded-full object-cover shadow-sm ring-2 ring-indigo-50" src="https://placehold.co/200x200/e2e8f0/475569?text=BJ" alt="Bob Jones" />
                  
                  <h3 className="mt-6 text-center text-lg font-semibold leading-7 tracking-tight text-slate-900">Bob Jones</h3>
                  <p className="text-center text-sm leading-6 text-indigo-600">CTO & Co-Founder</p>
                  
                    <p className="mt-4 text-center text-sm leading-6 text-slate-600 line-clamp-3">Open source maintainer. Loves building developer tools.</p>
                  
                    <ul role="list" className="mt-6 flex justify-center gap-x-6">
                    </ul>
                </div>
              </li>
              <li>
                <div className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
                    <img className="mx-auto h-32 w-32 rounded-full object-cover shadow-sm ring-2 ring-indigo-50" src="https://placehold.co/200x200/e2e8f0/475569?text=CD" alt="Carol Davis" />
                  
                  <h3 className="mt-6 text-center text-lg font-semibold leading-7 tracking-tight text-slate-900">Carol Davis</h3>
                  <p className="text-center text-sm leading-6 text-indigo-600">Head of Design</p>
                  
                    <p className="mt-4 text-center text-sm leading-6 text-slate-600 line-clamp-3">Previously at DesignCo. Obsessed with beautiful interfaces.</p>
                  
                    <ul role="list" className="mt-6 flex justify-center gap-x-6">
                    </ul>
                </div>
              </li>
          </ul>
      </div>
    </section>
  );
}
