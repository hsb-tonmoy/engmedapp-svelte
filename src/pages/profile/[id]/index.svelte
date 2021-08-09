<script>
  import dateDiffer from "date-differ";

  export let scoped;

  $: profile = scoped.profile;

  console.log(scoped.profile);

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
            <button
              class="border border-primary bg-primary px-3 py-1 rounded text-white text-xs"
              >Edit</button
            >
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
          <span class="text-ematext font-bold text-base lg:text-lg">6</span> Answers
        </div>
        <div
          class="flex flex-col items-center bg-secondaryLight text-primary text-xs rounded-sm p-2 lg:p-3"
        >
          <span class="text-ematext font-bold text-base lg:text-lg">4</span> Questions
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
      <button class="bg-primary rounded py-3 px-5 text-white text-xs"
        >My explanations</button
      >
      <button
        class="rounded py-3 px-5 text-black text-xs"
        style="background-color: #F9F9F9">My bookmarks</button
      >
      <button
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
      <div class="flex justify-center md:justify-end gap-x-2">
        <button
          class="text-xs text-primary rounded px-3 py-2"
          style="background-color: #F9F9F9">Board</button
        >
        <button
          class="text-xs text-primary rounded px-3 py-2"
          style="background-color: #F9F9F9">Level</button
        >
        <button
          class="text-xs text-primary rounded px-3 py-2"
          style="background-color: #F9F9F9">Paper</button
        >
        <button
          class="text-xs text-primary rounded px-3 py-2"
          style="background-color: #F9F9F9">Year</button
        >
        <button
          class="text-xs text-primary rounded px-3 py-2"
          style="background-color: #F9F9F9">Session</button
        >
      </div>
      <div class="border rounded-md py-5 px-6" style="border-color: #CCD9E9">
        <article class="flex flex-col">
          <div class="flex">
            <div class="flex flex-col w-11/12">
              <span
                class="breadcrumbs font-mulish text-xs text-ematextgray mb-4"
                >Edexcel > O > Computer Science > 2010 > February</span
              >
              <div
                class="question-title flex justify-between font-mulish text-base md:text-md text-black font-medium"
              >
                <a href="/questions/"
                  >Question 1: The net horizontal force on a box F as a function
                  of the horizontal position x is shown below.
                </a>
              </div>
              <div class="question-details mt-4 ml-3 pr-5">
                <span class="font-mulish text-sm text-black">
                  What is the work done on the box from x = 0m to 2.0m? Round
                  answer to two significant digits. What is the work done on the
                  box from x = 0m to 2.0m? Round answer to two significant
                  digits.
                </span>
              </div>
              <hr class="my-4" style="border-color: #CCD9E9" />
            </div>
            <div class="flex justify-end items-start w-1/12">
              <button class="text-white bg-primary p-1"
                ><svg
                  class="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg></button
              >
            </div>
          </div>
          <h4 class="font-mulish text-black font-bold mb-3">Answer</h4>
          <span class="font-mulish text-sm text-black">
            Lorem ipsunnm dognlor svfbit amet, consectetur adipiscing elit. Ut
            cras interdum elit cursus. Hac snged feugiat maecenas ultricies.
            Fermentum metus, sed vitae c sdphanlor svfbit scretra convallis.
            Quam mattis dapibus vitae vivamus non volutpat est tellus.
          </span>
        </article>
      </div>
    </div>
  </div>
</section>
