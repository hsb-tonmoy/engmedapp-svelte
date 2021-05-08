<script>
  const bootstrap = "../assets/img/bootstrap.jpg";
  const angular = "../assets/img/angular.jpg";
  const sketch = "../assets/img/sketch.jpg";
  const react = "../assets/img/react.jpg";
  const vue = "../assets/img/react.jpg";

  const team1 = "../assets/img/team-1-800x800.jpg";
  const team2 = "../assets/img/team-2-800x800.jpg";
  const team3 = "../assets/img/team-3-800x800.jpg";
  const team4 = "../assets/img/team-4-470x470.png";

  // can be one of light or dark
  export let color = "light";
</script>

<div
  class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded {color ===
  'light'
    ? 'bg-white'
    : 'bg-red-800 text-white'}"
>
  <div class="rounded-t mb-0 px-4 py-3 border-0">
    <div class="flex flex-wrap items-center">
      <div class="relative w-full px-4 max-w-full flex-grow flex-1">
        <h3
          class="font-semibold text-lg {color === 'light'
            ? 'text-blueGray-700'
            : 'text-white'}"
        >
          Card Tables
        </h3>
      </div>
    </div>
  </div>
  <div class="block w-full overflow-x-auto">
    <!-- Projects table -->
    <table class="items-center w-full bg-transparent border-collapse">
      <thead>
        <tr>
          <th
            class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color ===
            'light'
              ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
              : 'bg-red-700 text-red-200 border-red-600'}"
          >
            Project
          </th>
          <th
            class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color ===
            'light'
              ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
              : 'bg-red-700 text-red-200 border-red-600'}"
          >
            Budget
          </th>
          <th
            class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color ===
            'light'
              ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
              : 'bg-red-700 text-red-200 border-red-600'}"
          >
            Status
          </th>
          <th
            class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color ===
            'light'
              ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
              : 'bg-red-700 text-red-200 border-red-600'}"
          >
            Users
          </th>
          <th
            class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color ===
            'light'
              ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
              : 'bg-red-700 text-red-200 border-red-600'}"
          >
            Completion
          </th>
          <th
            class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color ===
            'light'
              ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
              : 'bg-red-700 text-red-200 border-red-600'}"
          />
        </tr>
      </thead>
      <tbody>
        <tr>
          <th
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
          >
            <img
              src={bootstrap}
              class="h-12 w-12 bg-white rounded-full border"
              alt="..."
            />
            <span
              class="ml-3 font-bold {color === 'light'
                ? 'btext-blueGray-600'
                : 'text-whit'}"
            >
              Argon Design System
            </span>
          </th>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            $2,500 USD
          </td>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            <i class="fas fa-circle text-orange-500 mr-2" /> pending
          </td>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            <div class="flex">
              <img
                src={team1}
                alt="..."
                class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
              />
              <img
                src={team2}
                alt="..."
                class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
              />
              <img
                src={team3}
                alt="..."
                class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
              />
              <img
                src={team4}
                alt="..."
                class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
              />
            </div>
          </td>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            <div class="flex items-center">
              <span class="mr-2">60%</span>
              <div class="relative w-full">
                <div
                  class="overflow-hidden h-2 text-xs flex rounded bg-red-200"
                >
                  <div
                    style="width: 60%;"
                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                  />
                </div>
              </div>
            </div>
          </td>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
          />
        </tr>
        <tr>
          <th
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
          >
            <img
              src={angular}
              class="h-12 w-12 bg-white rounded-full border"
              alt="..."
            />
            <span
              class="ml-3 font-bold {color === 'light'
                ? 'btext-blueGray-600'
                : 'text-whit'}"
            >
              Angular Now UI Kit PRO
            </span>
          </th>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            $1,800 USD
          </td>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            <i class="fas fa-circle text-emerald-500 mr-2" />
            completed
          </td>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            <div class="flex">
              <img
                src={team1}
                alt="..."
                class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
              />
              <img
                src={team2}
                alt="..."
                class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
              />
              <img
                src={team3}
                alt="..."
                class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
              />
              <img
                src={team4}
                alt="..."
                class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
              />
            </div>
          </td>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            <div class="flex items-center">
              <span class="mr-2">100%</span>
              <div class="relative w-full">
                <div
                  class="overflow-hidden h-2 text-xs flex rounded bg-emerald-200"
                >
                  <div
                    style="width: 100%;"
                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                  />
                </div>
              </div>
            </div>
          </td>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
          />
        </tr>
        <tr>
          <th
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
          >
            <img
              src={sketch}
              class="h-12 w-12 bg-white rounded-full border"
              alt="..."
            />
            <span
              class="ml-3 font-bold {color === 'light'
                ? 'btext-blueGray-600'
                : 'text-whit'}"
            >
              Black Dashboard Sketch
            </span>
          </th>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            $3,150 USD
          </td>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            <i class="fas fa-circle text-red-500 mr-2" /> delayed
          </td>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            <div class="flex">
              <img
                src={team1}
                alt="..."
                class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
              />
              <img
                src={team2}
                alt="..."
                class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
              />
              <img
                src={team3}
                alt="..."
                class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
              />
              <img
                src={team4}
                alt="..."
                class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
              />
            </div>
          </td>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            <div class="flex items-center">
              <span class="mr-2">73%</span>
              <div class="relative w-full">
                <div
                  class="overflow-hidden h-2 text-xs flex rounded bg-red-200"
                >
                  <div
                    style="width: 73%;"
                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                  />
                </div>
              </div>
            </div>
          </td>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
          />
        </tr>
        <tr>
          <th
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
          >
            <img
              src={react}
              class="h-12 w-12 bg-white rounded-full border"
              alt="..."
            />
            <span
              class="ml-3 font-bold {color === 'light'
                ? 'btext-blueGray-600'
                : 'text-whit'}"
            >
              React Material Dashboard
            </span>
          </th>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            $4,400 USD
          </td>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            <i class="fas fa-circle text-teal-500 mr-2" /> on schedule
          </td>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            <div class="flex">
              <img
                src={team1}
                alt="..."
                class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
              />
              <img
                src={team2}
                alt="..."
                class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
              />
              <img
                src={team3}
                alt="..."
                class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
              />
              <img
                src={team4}
                alt="..."
                class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
              />
            </div>
          </td>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            <div class="flex items-center">
              <span class="mr-2">90%</span>
              <div class="relative w-full">
                <div
                  class="overflow-hidden h-2 text-xs flex rounded bg-teal-200"
                >
                  <div
                    style="width: 90%;"
                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"
                  />
                </div>
              </div>
            </div>
          </td>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
          />
        </tr>
        <tr>
          <th
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
          >
            <img
              src={vue}
              class="h-12 w-12 bg-white rounded-full border"
              alt="..."
            />
            <span
              class="ml-3 font-bold {color === 'light'
                ? 'btext-blueGray-600'
                : 'text-whit'}"
            >
              React Material Dashboard
            </span>
          </th>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            $2,200 USD
          </td>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            <i class="fas fa-circle text-emerald-500 mr-2" />
            completed
          </td>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            <div class="flex">
              <img
                src={team1}
                alt="..."
                class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
              />
              <img
                src={team2}
                alt="..."
                class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
              />
              <img
                src={team3}
                alt="..."
                class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
              />
              <img
                src={team4}
                alt="..."
                class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
              />
            </div>
          </td>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            <div class="flex items-center">
              <span class="mr-2">100%</span>
              <div class="relative w-full">
                <div
                  class="overflow-hidden h-2 text-xs flex rounded bg-emerald-200"
                >
                  <div
                    style="width: 100%;"
                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                  />
                </div>
              </div>
            </div>
          </td>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
          />
        </tr>
      </tbody>
    </table>
  </div>
</div>
<aside
  class="z-20 flex-shrink-0 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block"
>
  <div class="py-4 text-gray-500 dark:text-gray-400">
    <a class="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" href="#">
      Windmill
    </a>
    <ul class="mt-6">
      <li class="relative px-6 py-3">
        <a
          class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
          href="index.html"
        >
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span class="ml-4">Dashboard</span>
        </a>
      </li>
    </ul>
    <ul>
      <li class="relative px-6 py-3">
        <a
          class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
          href="forms.html"
        >
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
            />
          </svg>
          <span class="ml-4">Forms</span>
        </a>
      </li>
      <li class="relative px-6 py-3">
        <a
          class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
          href="cards.html"
        >
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
          <span class="ml-4">Cards</span>
        </a>
      </li>
      <li class="relative px-6 py-3">
        <a
          class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
          href="charts.html"
        >
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
            <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
          </svg>
          <span class="ml-4">Charts</span>
        </a>
      </li>
      <li class="relative px-6 py-3">
        <a
          class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
          href="buttons.html"
        >
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
            />
          </svg>
          <span class="ml-4">Buttons</span>
        </a>
      </li>
      <li class="relative px-6 py-3">
        <span
          class="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
          aria-hidden="true"
        />
        <a
          class="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
          href="modals.html"
        >
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
          <span class="ml-4">Modals</span>
        </a>
      </li>
      <li class="relative px-6 py-3">
        <a
          class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
          href="tables.html"
        >
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 10h16M4 14h16M4 18h16" />
          </svg>
          <span class="ml-4">Tables</span>
        </a>
      </li>
      <li class="relative px-6 py-3">
        <button
          class="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
          aria-haspopup="true"
        >
          <span class="inline-flex items-center">
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
              />
            </svg>
            <span class="ml-4">Pages</span>
          </span>
          <svg
            class="w-4 h-4"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <template x-if="isPagesMenuOpen">
          <ul
            x-transition:enter="transition-all ease-in-out duration-300"
            x-transition:enter-start="opacity-25 max-h-0"
            x-transition:enter-end="opacity-100 max-h-xl"
            x-transition:leave="transition-all ease-in-out duration-300"
            x-transition:leave-start="opacity-100 max-h-xl"
            x-transition:leave-end="opacity-0 max-h-0"
            class="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900"
            aria-label="submenu"
          >
            <li
              class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
            >
              <a class="w-full" href="pages/login.html">Login</a>
            </li>
            <li
              class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
            >
              <a class="w-full" href="pages/create-account.html">
                Create account
              </a>
            </li>
            <li
              class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
            >
              <a class="w-full" href="pages/forgot-password.html">
                Forgot password
              </a>
            </li>
            <li
              class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
            >
              <a class="w-full" href="pages/404.html">404</a>
            </li>
            <li
              class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
            >
              <a class="w-full" href="pages/blank.html">Blank</a>
            </li>
          </ul>
        </template>
      </li>
    </ul>
    <div class="px-6 my-6">
      <button
        class="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
      >
        Create account
        <span class="ml-2" aria-hidden="true">+</span>
      </button>
    </div>
  </div>
</aside>
