import "../App.css";

function Header() {
  return (
    <header>
      <nav class="mt-5 mb-10 bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <a href="/" class="flex items-center">
            <img src="logo.png" class="h-10 mr-3 sm:h-20" alt="Logo" />
          </a>
          <div class="w-full md:block md:w-auto text-xs" id="navbar-default">
            <div class="flex items-center space-x-4">
              <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
                <svg
                  class="absolute w-12 h-12 text-gray-400 -left-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div class="font-medium">
                <div>Username</div>
                <div class="text-gray-500">
                  Lvl ? <br />
                  XP ?/1000
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
