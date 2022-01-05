<script>
  import { metatags } from "@roxi/routify";

  import { user } from "../../../components/Auth/store.js";

  import { birthday } from "../../../components/svg/teachers.js";

  import dateDiffer from "date-differ";

  export let scoped;

  $: teacher = scoped.teacher;

  metatags.title = `EngMedApp - ${scoped.teacher.first_name} ${scoped.teacher.last_name}`;

  const user_roles = {
    1: "Student",
    2: "Teacher",
    3: "Content Creator",
    4: "Manager",
    5: "Admin",
  };

  const genders = {
    1: "Male",
    2: "Female",
    3: "Other",
    4: "Prefer Not to Answer",
  };
</script>

<main class="mx-auto">
  <div class="flex flex-col justify-center items-center w-5/6">
    <div
      class="flex flex-col md:flex-row items-center w-full  md:gap-x-6 font-mulish"
    >
      <div class="profile_pic flex justify-end w-2/4 md:w-1/5">
        <img
          class="rounded-full md:rounded-md"
          src={teacher.profile_pic}
          alt=""
        />
      </div>
      <div class="flex flex-col justify-between w-full p-6 rounded-md bg-white">
        <div class="info flex flex-col">
          <div
            class="flex justify-between items-center gap-x-6 lg:gap-x-10 xl:gap-x-20"
          >
            <div class="flex flex-col justify-start">
              <h2 class="font-bold text-lg xl:text-xl text-ematext">
                {teacher.first_name}
                {teacher.last_name}
              </h2>
              <span class="text-black text-xs font-poppins">@username</span>
              <span
                class="self-start px-3 py-1 rounded-full text-white text-xs mt-2"
                style="background-color: #3AC9D1">{user_roles[1]}</span
              >
            </div>
            <div class="edit flex gap-x-2">
              <span
                class="border border-primary bg-opacity-0 px-3 py-1 rounded text-ematext text-xs"
                >Imet</span
              >

              <button
                class="border border-primary bg-primary px-3 py-1 rounded text-white text-xs"
                >Edit</button
              >
            </div>
          </div>
          <span
            class="flex items-center gap-x-1 mt-8 text-ematextgray font-medium text-sm"
            >{@html birthday} date of birth</span
          >
          <span
            class="flex items-center gap-x-1 mt-2 text-ematextgray font-medium text-sm"
            ><svg
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>{genders[1]}</span
          >
          <span
            class="flex items-center gap-x-1 mt-2 text-ematextgray font-medium text-sm"
            ><svg
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>city, state, country</span
          >
        </div>
      </div>
    </div>
    <section class="flex p-4 gap-x-2 mt-14 bg-white w-full">
      <button
        class="border border-primary bg-primary px-3 py-1 rounded text-white text-xs"
        >About Teacher</button
      >
      <button>Templates</button>
    </section>
    <hr class="my-8 w-full md:w-11/12" style="border-color: #CCD9E9" />
  </div>
</main>
