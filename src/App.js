// import logo from './logo.svg';
import "./App.css";

function App() {
  return (
    <body>
      <header>
        <nav class="mb-10 bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
          <div class="container flex flex-wrap items-center justify-between mx-auto">
            <a href="https://flowbite.com/" class="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                class="h-6 mr-3 sm:h-9"
                alt="Flowbite Logo"
              />
              <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                All Out
              </span>
            </a>
            <div class="w-full md:block md:w-auto text-sm" id="navbar-default">
              <div class="flex items-center space-x-4">
                <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
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
                <div class="font-medium dark:text-white">
                  <div>Username</div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">
                    Joined in August 2014
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="grid grid-cols-5 gap-4 px-5">
        <div>
          <form className="">
            <div class="flex">
              <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <i class="fa-solid fa-magnifying-glass"></i>
              </span>
              <input
                type="text"
                id="website-admin"
                class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Jardin d'Andy"
              ></input>
            </div>
            <select
              id="stars"
              class="mt-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>1 étoile</option>
              <option>2 étoiles</option>
              <option>3 étoiles</option>
              <option>4 étoiles</option>
              <option>5 étoiles</option>
            </select>
            <button
              type="submit"
              class="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
        <section className="border-l-4 col-start-2 col-end-6">
          {/* <div className="mt-5">ptit espace lo</div> */}
          <a
            href="#"
            class="ml-5 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src="logo512.png"
              alt=""
            ></img>
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                React café
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>

              <div class="flex items-center mb-5">
                <p class="bg-blue-100 text-blue-800 text-sm font-semibold inline-flex items-center p-1.5 rounded dark:bg-blue-200 dark:text-blue-800">
                  8.7
                </p>
                <p class="ml-2 font-medium text-gray-900 dark:text-white">
                  Excellent
                </p>
                <span class="w-1 h-1 mx-2 bg-gray-900 rounded-full dark:bg-gray-500"></span>
                <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
                  376 reviews
                </p>
                <a
                  href="#"
                  class="ml-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Read all reviews
                </a>
              </div>
              <div class="gap-8 sm:grid sm:grid-cols-2">
                <div>
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Staff
                    </dt>
                    <dd class="flex items-center mb-3">
                      <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                        <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500 w-[88%]"></div>
                      </div>
                      <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
                        8.8
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Comfort
                    </dt>
                    <dd class="flex items-center mb-3">
                      <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                        <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500 w-[89%]"></div>
                      </div>
                      <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
                        8.9
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Free WiFi
                    </dt>
                    <dd class="flex items-center mb-3">
                      <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                        <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500 w-[88%]"></div>
                      </div>
                      <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
                        8.8
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Facilities
                    </dt>
                    <dd class="flex items-center">
                      <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                        <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500 w-[54%]"></div>
                      </div>
                      <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
                        5.4
                      </span>
                    </dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Value for money
                    </dt>
                    <dd class="flex items-center mb-3">
                      <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                        <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500 w-[89%]"></div>
                      </div>
                      <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
                        8.9
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Cleanliness
                    </dt>
                    <dd class="flex items-center mb-3">
                      <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                        <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500 w-[70%]"></div>
                      </div>
                      <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
                        7.0
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Location
                    </dt>
                    <dd class="flex items-center">
                      <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                        <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500 w-[89%]"></div>
                      </div>
                      <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
                        8.9
                      </span>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </a>
        </section>{" "}
        <section className="border-l-4 col-start-2 col-end-6">
          {/* <div className="mt-5">ptit espace lo</div> */}
          <a
            href="#"
            class="ml-5 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src="logo512.png"
              alt=""
            ></img>
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                React café
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>

              <div class="flex items-center mb-5">
                <p class="bg-blue-100 text-blue-800 text-sm font-semibold inline-flex items-center p-1.5 rounded dark:bg-blue-200 dark:text-blue-800">
                  8.7
                </p>
                <p class="ml-2 font-medium text-gray-900 dark:text-white">
                  Excellent
                </p>
                <span class="w-1 h-1 mx-2 bg-gray-900 rounded-full dark:bg-gray-500"></span>
                <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
                  376 reviews
                </p>
                <a
                  href="#"
                  class="ml-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Read all reviews
                </a>
              </div>
              <div class="gap-8 sm:grid sm:grid-cols-2">
                <div>
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Staff
                    </dt>
                    <dd class="flex items-center mb-3">
                      <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                        <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500 w-[88%]"></div>
                      </div>
                      <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
                        8.8
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Comfort
                    </dt>
                    <dd class="flex items-center mb-3">
                      <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                        <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500 w-[89%]"></div>
                      </div>
                      <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
                        8.9
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Free WiFi
                    </dt>
                    <dd class="flex items-center mb-3">
                      <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                        <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500 w-[88%]"></div>
                      </div>
                      <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
                        8.8
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Facilities
                    </dt>
                    <dd class="flex items-center">
                      <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                        <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500 w-[54%]"></div>
                      </div>
                      <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
                        5.4
                      </span>
                    </dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Value for money
                    </dt>
                    <dd class="flex items-center mb-3">
                      <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                        <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500 w-[89%]"></div>
                      </div>
                      <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
                        8.9
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Cleanliness
                    </dt>
                    <dd class="flex items-center mb-3">
                      <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                        <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500 w-[70%]"></div>
                      </div>
                      <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
                        7.0
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Location
                    </dt>
                    <dd class="flex items-center">
                      <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                        <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500 w-[89%]"></div>
                      </div>
                      <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
                        8.9
                      </span>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </a>
        </section>{" "}
        <section className="border-l-4 col-start-2 col-end-6">
          {/* <div className="mt-5">ptit espace lo</div> */}
          <a
            href="#"
            class="ml-5 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src="logo512.png"
              alt=""
            ></img>
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                React café
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>

              <div class="flex items-center mb-5">
                <p class="bg-blue-100 text-blue-800 text-sm font-semibold inline-flex items-center p-1.5 rounded dark:bg-blue-200 dark:text-blue-800">
                  8.7
                </p>
                <p class="ml-2 font-medium text-gray-900 dark:text-white">
                  Excellent
                </p>
                <span class="w-1 h-1 mx-2 bg-gray-900 rounded-full dark:bg-gray-500"></span>
                <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
                  376 reviews
                </p>
                <a
                  href="#"
                  class="ml-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Read all reviews
                </a>
              </div>
              <div class="gap-8 sm:grid sm:grid-cols-2">
                <div>
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Staff
                    </dt>
                    <dd class="flex items-center mb-3">
                      <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                        <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500 w-[88%]"></div>
                      </div>
                      <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
                        8.8
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Comfort
                    </dt>
                    <dd class="flex items-center mb-3">
                      <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                        <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500 w-[89%]"></div>
                      </div>
                      <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
                        8.9
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Free WiFi
                    </dt>
                    <dd class="flex items-center mb-3">
                      <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                        <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500 w-[88%]"></div>
                      </div>
                      <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
                        8.8
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Facilities
                    </dt>
                    <dd class="flex items-center">
                      <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                        <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500 w-[54%]"></div>
                      </div>
                      <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
                        5.4
                      </span>
                    </dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Value for money
                    </dt>
                    <dd class="flex items-center mb-3">
                      <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                        <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500 w-[89%]"></div>
                      </div>
                      <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
                        8.9
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Cleanliness
                    </dt>
                    <dd class="flex items-center mb-3">
                      <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                        <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500 w-[70%]"></div>
                      </div>
                      <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
                        7.0
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Location
                    </dt>
                    <dd class="flex items-center">
                      <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                        <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500 w-[89%]"></div>
                      </div>
                      <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
                        8.9
                      </span>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </a>
        </section>
      </div>
    </body>
  );
}

export default App;
