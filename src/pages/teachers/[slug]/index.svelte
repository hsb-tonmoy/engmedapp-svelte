<script>
  import { metatags } from "@roxi/routify";

  import { user } from "../../../components/Auth/store.js";

  import {
    birthday,
    gender,
    location,
    clock,
    phone,
    mail,
    website,
    facebook,
    twitter,
    instagram,
    whatsapp,
    linkedin,
  } from "../../../components/svg/teachers.js";

  import TeacherData from "../../../components/Teachers/TeacherData.svelte";

  export let scoped;

  $: teacher = scoped.teacher;

  metatags.title = `EngMedApp - ${scoped.teacher.first_name} ${scoped.teacher.last_name}`;

  let tab = 1;

  const genders = {
    1: "Male",
    2: "Female",
    3: "Other",
    4: "Prefer Not to Answer",
  };

  const date_of_birth = () => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    const date = new Date(scoped.teacher.date_of_birth);
    return date.toLocaleDateString("en-US", options);
  };
</script>

<main class="flex justify-center">
  <div class="flex flex-col justify-center items-center w-full lg:w-5/6">
    <div
      class="flex flex-col md:flex-row items-center w-full  md:gap-x-6 font-mulish"
    >
      <div class="profile_pic flex w-2/4 md:w-[15%]">
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
              <span
                class="self-start px-3 py-1 rounded-full text-white text-xs mt-2"
                style="background-color: #3AC9D1">{teacher.institute}</span
              >
            </div>
            <div class="edit flex gap-x-4">
              {#if teacher.social_media.facebook}
                <span class="text-ematext"> {@html facebook} </span>
              {/if}
              {#if teacher.social_media.twitter}
                <span class="text-ematext"> {@html twitter} </span>
              {/if}
              {#if teacher.social_media.instagram}
                <span class="text-ematext"> {@html instagram} </span>
              {/if}
              {#if teacher.social_media.linkedin}
                <span class="text-ematext"> {@html linkedin} </span>
              {/if}
              {#if teacher.social_media.whatsapp}
                <span class="text-ematext"> {@html whatsapp} </span>
              {/if}
            </div>
          </div>
          <div class="flex">
            <div class="flex flex-col w-2/4">
              <span
                class="flex items-center gap-x-1 mt-8 text-ematextgray font-medium text-sm"
                >{@html birthday}
                {date_of_birth()}</span
              >
              <span
                class="flex items-center gap-x-1 mt-2 text-ematextgray font-medium text-sm"
                >{@html gender} {genders[1]}</span
              >
              <span
                class="flex items-center gap-x-1 mt-2 text-ematextgray font-medium text-sm"
                >{@html location} {teacher.location}</span
              >
              <span
                class="flex items-center gap-x-1 mt-2 text-ematextgray font-medium text-sm"
                >{@html clock} {teacher.time_zone}</span
              >
            </div>
            <div class="flex flex-col justify-center items-end w-2/4">
              {#if teacher.phone_no}
                <span
                  class="flex items-center gap-x-1 mt-8 text-ematextgray font-medium text-sm"
                  >{@html phone}
                  <a class="hover:text-ematext" href="tel:{teacher.phone_no}"
                    >{teacher.phone_no}</a
                  ></span
                >
              {/if}
              {#if teacher.email_address}
                <span
                  class="flex items-center gap-x-1 mt-2 text-ematextgray font-medium text-sm"
                  >{@html mail}
                  <a
                    class="hover:text-ematext"
                    href="mailto:{teacher.email_address}"
                    >{teacher.email_address}</a
                  ></span
                >
              {/if}
              {#if teacher.website}
                <span
                  class="flex items-center gap-x-1 mt-2 text-ematextgray font-medium text-sm"
                  >{@html website}
                  <a
                    class="hover:text-ematext"
                    target="_blank"
                    href={teacher.website}>{teacher.website}</a
                  ></span
                >
              {/if}
            </div>
          </div>
        </div>
      </div>
    </div>
    <section
      class="flex items-center rounded-md px-6 py-4 gap-x-3 mt-14 bg-white w-full font-mulish"
    >
      <button
        on:click={() => {
          tab = 1;
        }}
        class:active={tab === 1}
        class="border border-[#F6F6F6] bg-[#F6F6F6] text-ematext px-8 lg:px-11 py-2 lg:py-3 rounded text-xs lg:text-sm"
        >About Teacher</button
      >
      <button
        on:click={() => {
          tab = 2;
        }}
        class:active={tab === 2}
        class="border border-[#F6F6F6] bg-[#F6F6F6] px-9 lg:px-11 py-2 lg:py-3 rounded text-xs lg:text-sm"
        >Flyers</button
      >
    </section>
    <section
      class="flex items-center rounded-md px-6 lg:px-10 py-4 lg:py-8 gap-x-3 mt-4 bg-white w-full font-mulish font-medium text-ematext text-sm lg:text-base"
    >
      {#if tab === 1}
        <TeacherData {teacher} />
      {/if}
    </section>
  </div>
</main>

<style lang="postcss">
  :global(.active) {
    @apply border-primary bg-primary text-white;
  }
</style>
