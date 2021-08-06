<script>
  import dateDiffer from "date-differ";

  export let scoped;

  $: profile = scoped.profile;

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
  class="flex flex-col justify-center items-center w-3/4 mt-16"
  style="margin-left: auto; margin-right: auto"
>
  <div class="flex justify-center items-center gap-x-6 font-mulish">
    <div class="profile_pic w-1/5">
      <img
        class="rounded-md"
        src={profile.profile_pic}
        alt={profile.user.username}
      />
    </div>
    <div
      class="flex flex-col justify-between w-2/4 p-6 rounded-md"
      style="background-color: #F9F9F9"
    >
      <div class="info flex flex-col">
        <div class="flex items-center gap-x-20">
          <div class="flex flex-col justify-start gap-y-2">
            <h2 class="font-bold text-xl text-ematext">
              {profile.user.first_name}
              {profile.user.last_name}
            </h2>
            <span
              class="self-start px-3 py-1 rounded-full text-white text-xs"
              style="background-color: #3AC9D1"
              >{user_roles[profile.user.account_type]}</span
            >
          </div>
          <div class="edit flex gap-x-2">
            <span
              class="border border-primary bg-opacity-0 px-3 py-1 rounded text-ematext text-xs"
              >{profile.is_public ? "Public" : "Private"}</span
            >
            <button
              class="border border-primary bg-primary px-3 py-1 rounded text-white text-xs"
              >Edit</button
            >
          </div>
        </div>
        <span class="mt-8 text-ematextgray font-medium text-sm"
          >{profile.date_of_birth}</span
        >
        <span class="mt-2 text-ematextgray font-medium text-sm"
          >{genders[profile.gender]}</span
        >
        <span class="mt-2 text-ematextgray font-medium text-sm"
          >{profile.city}, {profile.city}, {profile.country}</span
        >
      </div>
    </div>
    <div class="flex flex-col justify-center" style="width: 30%">
      <div class="stats flex gap-x-4">
        <div
          class="flex flex-col items-center bg-secondaryLight text-primary text-xs rounded-sm p-3"
        >
          <span class="text-ematext font-bold text-lg">6</span> Answers
        </div>
        <div
          class="flex flex-col items-center bg-secondaryLight text-primary text-xs rounded-sm p-3"
        >
          <span class="text-ematext font-bold text-lg">4</span> Questions
        </div>
        <div
          class="flex flex-col items-center bg-secondaryLight text-primary text-xs rounded-sm p-3"
        >
          <span class="text-ematext font-bold text-lg">38K</span> Reached
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
          >Last seen 7 minutes ago</span
        >
      </div>
    </div>
  </div>
  <hr class="my-8 w-11/12" style="border-color: #CCD9E9" />
  <div class="flex w-full items-center gap-x-6 font-mulish">
    <div class="flex w-1/5 justify-start">17 Reputations</div>
    <div class="flex w-2/4 justify-start">17 Reputations</div>
    <div class="flex justify-start" style="width: 30%">17 Reputations</div>
  </div>
</section>
