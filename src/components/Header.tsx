export default function Header() {
  return (
    <header className="shadow-sm">
      <div className="mx-auto max-w-screen-xl px-4 py-5 md:px-6 lg:px-8">
        <div className="flex items-center">
          <a href="/">
            <img src="/assets/mf_logo.svg" alt="무비파이 로고" />
          </a>

          {/* lg+: input */}
          <div className="relative mx-auto hidden lg:block">
            <input
              className="h-10 w-[320px] rounded-md border border-gray-300 pl-5 pr-10 focus:outline-none focus:ring-2 focus:ring-primary/40"
              type="text"
              placeholder="검색"
            />
            <img
              src="/assets/search_icon.svg"
              alt=""
              className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2"
            />
          </div>

          {/* mobile: icons */}
          <div className="ml-auto flex items-center lg:gap-3">
            <button type="button" className="inline-flex h-10 w-10 items-center justify-center lg:hidden" aria-label="검색">
              <img src="/assets/search_icon.svg" alt="검색 아이콘" className="h-5 w-5" />
            </button>

            <a href="https://github.com/Yuna-Kim98/moviefy" className="inline-flex h-10 w-10 items-center justify-center">
              <img src="/assets/github_logo.svg" alt="깃허브 로고" className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
