<script>
  import { metatags } from "@roxi/routify";
  import { user } from "../../../components/Auth/store.js";
  import dateDiffer from "date-differ";

  import Posts from "../../../components/Profile/Posts.svelte";

  export let scoped;

  let tab = 1;

  $: profile = scoped.profile;

  metatags.title = `EngMedApp - ${scoped.profile.user.username}`;

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

<section
  class="flex flex-col justify-center items-center w-11/12 xl:w-3/4 mt-8 md:mt-16"
  style="margin-left: auto; margin-right: auto"
>
  <div
    class="flex flex-col md:flex-row justify-center items-center gap-y-4 md:gap-x-6 font-mulish"
  >
    <div class="profile_pic w-full w-2/4 md:w-1/5">
      <img
        class="rounded-full md:rounded-md"
        src={profile.profile_pic}
        alt={profile.user.username}
      />
    </div>
    <div
      class="flex flex-col justify-between w-full md:w-2/4 p-6 rounded-md"
      style="background-color: #F9F9F9"
    >
      <div class="info flex flex-col">
        <div
          class="flex justify-between items-center gap-x-6 lg:gap-x-10 xl:gap-x-20"
        >
          <div class="flex flex-col justify-start">
            <h2 class="font-bold text-lg xl:text-xl text-ematext">
              {profile.user.first_name}
              {profile.user.last_name}
            </h2>
            <span class="text-black text-xs font-poppins"
              >@{profile.user.username}</span
            >
            <span
              class="self-start px-3 py-1 rounded-full text-white text-xs mt-2"
              style="background-color: #3AC9D1"
              >{user_roles[profile.user.account_type]}</span
            >
          </div>
          <div class="edit flex gap-x-2">
            <span
              class="border border-primary bg-opacity-0 px-3 py-1 rounded text-ematext text-xs"
              >{profile.is_public ? "Public" : "Private"}</span
            >
            {#if $user.id === profile.id}
              <button
                class="border border-primary bg-primary px-3 py-1 rounded text-white text-xs"
                >Edit</button
              >
            {/if}
          </div>
        </div>
        <span
          class="flex items-center gap-x-1 mt-8 text-ematextgray font-medium text-sm"
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
              d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
            />
          </svg>{profile.date_of_birth}</span
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
          </svg>{genders[profile.gender]}</span
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
          </svg>{profile.city}, {profile.state}, {profile.country}</span
        >
      </div>
    </div>
    <div class="flex flex-col justify-center w-full md:w-30p">
      <div class="stats flex gap-x-2 lg:gap-x-4">
        <div
          class="flex flex-col items-center bg-secondaryLight text-primary text-xs rounded-sm p-2 lg:p-3"
        >
          <span class="text-ematext font-bold text-base lg:text-lg"
            >{profile.user.explanations_count}</span
          > Answers
        </div>
        <div
          class="flex flex-col items-center bg-secondaryLight text-primary text-xs rounded-sm p-2 lg:p-3"
        >
          <span class="text-ematext font-bold text-base lg:text-lg">4</span> Comments
        </div>
        <div
          class="flex flex-col items-center bg-secondaryLight text-primary text-xs rounded-sm p-2 lg:p-3"
        >
          <span class="text-ematext font-bold text-base lg:text-lg">38K</span> Reached
        </div>
      </div>
      <div class="stats2 flex flex-col gap-y-1 mt-4 text-sm">
        <span cass="font-semibold text-ematext"
          >Member for {dateDiffer({
            from: profile.date_joined,
            to: Date.now(),
          })}
        </span>
        <span class="text-primary font-semibold">16 profile views</span>
        <span class="text-ematextgray font-semibold"
          >Last seen {dateDiffer({
            from: profile.last_login,
            to: Date.now(),
          })} ago</span
        >
      </div>
    </div>
  </div>
  <hr class="my-8 w-full md:w-11/12" style="border-color: #CCD9E9" />
  <div
    class="flex flex-wrap md:flex-nowrap w-full md:w-11/12 justify-start items-center gap-x-6 font-mulish"
  >
    <div class="flex xl:w-1/5 justify-start font-bold text-base mb-8 md:mb-0">
      {profile.user_rep} Reputations
    </div>
    <div class="flex xl:w-2/4 justify-start gap-x-2">
      <button
        on:click={() => (tab = 1)}
        class="bg-primary rounded py-3 px-5 text-white text-xs"
        >My explanations</button
      >
      <button
        on:click={() => (tab = 2)}
        class="rounded py-3 px-5 text-black text-xs"
        style="background-color: #F9F9F9">My bookmarks</button
      >
      <button
        on:click={() => (tab = 3)}
        class="rounded py-3 px-5 text-black text-xs"
        style="background-color: #F9F9F9">About me</button
      >
    </div>
  </div>
  <div
    class="flex w-full xl:w-11/12 justify-start items-center font-mulish mt-8 mb-12"
  >
    <div class="w-1/5 hidden xl:flex" />
    <div class="flex flex-col gap-y-2 w-full xl:w-4/5 md:ml-6">
      <div class="">
        {#if tab === 1}
          <Posts username={profile.user.username} />
        {/if}
      </div>
    </div>
  </div>
</section>
