<script>
  import { metatags } from "@roxi/routify";
  import { convertDate } from "../../../components/utils/convertDate.js";
  import { fade, scale } from "svelte/transition";
  export let scoped;
  $: question = scoped.question;

  let numOfAnswers = scoped.question.explanations.length;

  if (scoped.question.verified_explanation.length > 1) {
    numOfAnswers = numOfAnswers + 1;
  }

  const user_roles = {
    1: "Student",
    2: "Teacher",
    3: "Content Creator",
    4: "Manager",
    5: "Admin",
  };

  metatags.title = `EngMedApp - ${scoped.question.title}`;
  metatags.description = scoped.question.excerpt;

  function onFilter(attr, prop) {
    window.location.href = `/questions?${attr}=${encodeURIComponent(prop)}`;
  }

  let authorBox = false;
</script>

<svelte:head>
  <script
    src="https://www.wiris.net/demo/plugins/app/WIRISplugins.js?viewer=image"></script>
</svelte:head>

<section>
  <!-- Questions Body -->
  <div
    class="flex flex-col flex-wrap gap-y-2 xl:flex-row xl:flex-nowrap xl:gap-y-0 xl:gap-x-4 px-4 md:px-8 lg:px-12 xl:px-48 3xl:px-100 py-4 xl:py-8"
  >
    <article
      class="flex flex-col w-full xl:w-3/4 bg-white py-8 md:pl-5 xl:pl-7 md:pr-12 xl:pr-16"
    >
      <!-- Questions Details -->
      <div class="flex flex-col md:pl-4">
        <span class="breadcrumbs font-mulish text-xs text-ematextgray mb-4"
          ><a
            href="#"
            on:click={() => {
              onFilter("board", question.board.name);
            }}>{question.board.name}</a
          >
          >
          <a
            href="#"
            on:click={() => {
              onFilter("level", question.level.name);
            }}>{question.level.name}</a
          >
          >
          <a
            href="#"
            on:click={() => {
              onFilter("paper", question.paper.name);
            }}>{question.paper.name}</a
          >
          >
          <a
            href="#"
            on:click={() => {
              onFilter("year", question.year.name);
            }}>{question.year.name}</a
          >
          >
          <a
            href="#"
            on:click={() => {
              onFilter("session", question.session.name);
            }}>{question.session.name}</a
          ></span
        >
        <span
          class="question-title font-mulish text-lg md:text-xl text-black font-semibold"
          >{question.title}
        </span>
        <div class="question-details mt-4 ml-4">
          <span class="font-mulish text-sm text-black leading-relaxed mt-2">
            {@html question.content}
          </span>
        </div>
        <div
          class="flex flex-col gap-y-4 md:gap-y-0 md:flex-row flex-wrap md:flex-nowrap justify-between items-center gap-x-1 mt-10"
        >
          <div class="tags">
            <span class="font-mulish text-xs font-medium mr-2"
              >Related Tags:</span
            >
            {#each question.tags as tag}
              <button
                on:click={() => {
                  onFilter("tag", tag);
                }}
                class="px-3 py-1 text-primary text-xs rounded-full"
                style="background-color: #E9FDFF">{tag}</button
              >
            {/each}
          </div>
          <div class="builder">
            <button
              class="flex items-center px-3 py-2 text-prmary hover:text-white bg-white hover:bg-primary duration-300 border border-primary text-xs rounded-full"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>&nbsp; Add to builder</button
            >
          </div>
        </div>
      </div>
      <!-- Explanations -->
      <div class="flex flex-col mt-12">
        <span class="font-mulish text-base font-bold"
          >{numOfAnswers}
          {numOfAnswers === 1 || numOfAnswers === 0
            ? "Answer"
            : "Answers"}</span
        >
        {#if question.verified_explanation}
          <!-- Verified Explanation -->
          <div
            class="flex flex-col mt-4 py-4 md:py-8 px-3 md:px-8 rounded-lg font-medium"
            style="background-color: #F9F9F9"
          >
            <span class="font-mulish text-sm text-black leading-relaxed"
              >{@html question.verified_explanation}
            </span>
            <div
              class="flex flex-col gap-y-4 md:gap-y-0 md:flex-row items-center md:justify-between mt-4 md:mt-12"
            >
              <div
                class="flex gap-x-4 text-xs font-mulish font-bold"
                style="color: #5E666D"
              >
                <button>Share</button>
                <button>Report</button>
                <button>Comment</button>
                <button>Edit</button>
              </div>
              <div class="flex flex-col gap-y-2 font-bold font-mulish text-xs">
                <span
                  class="flex self-center items-center text-white pl-2 pr-3 rounded-md"
                  style="background-color: #DCB323"
                  ><img
                    class="mt-1"
                    src="/images/icons/verified.svg"
                    alt="verified"
                  />Explanation Verified</span
                >
                <span class="text-primary"
                  >Answered {convertDate(question.published)}</span
                >
              </div>
            </div>
          </div>
          <hr class="mt-8 mb-2" style="border-color: #A1A5B1" />
        {/if}
        {#each question.explanations as explanation}
          <div
            class="explanations flex flex-col-reverse w-full md:flex-row gap-x-8 py-4 md:py-8 px-3"
          >
            <div class="votes flex flex-col gap-y-4 mt-4 md:mt-0">
              <button
                class="upvote flex flex-col justify-center items-center gap-y-2 text-xs py-3 px-4 rounded bg-secondaryLight text-primary text-bold"
              >
                <svg
                  class="w-5 h-5 text-primary"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512.171 512.171"
                  xml:space="preserve"
                >
                  <g>
                    <g>
                      <path
                        d="M476.723,216.64L263.305,3.115C261.299,1.109,258.59,0,255.753,0c-2.837,0-5.547,1.131-7.552,3.136L35.422,216.64
                    c-3.051,3.051-3.947,7.637-2.304,11.627c1.664,3.989,5.547,6.571,9.856,6.571h117.333v266.667c0,5.888,4.779,10.667,10.667,10.667
                    h170.667c5.888,0,10.667-4.779,10.667-10.667V234.837h116.885c4.309,0,8.192-2.603,9.856-6.592
                    C480.713,224.256,479.774,219.691,476.723,216.64z"
                      />
                    </g>
                  </g>
                </svg>
                140 Upvotes</button
              >
              <button
                class="upvote flex flex-col justify-center items-center gap-y-2 text-xs py-3 px-4 rounded bg-primary text-white"
              >
                <svg
                  class="w-5 h-5 text-white"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512.171 512.171"
                  xml:space="preserve"
                >
                  <g>
                    <g>
                      <path
                        d="M479.046,283.925c-1.664-3.989-5.547-6.592-9.856-6.592H352.305V10.667C352.305,4.779,347.526,0,341.638,0H170.971
			c-5.888,0-10.667,4.779-10.667,10.667v266.667H42.971c-4.309,0-8.192,2.603-9.856,6.571c-1.643,3.989-0.747,8.576,2.304,11.627
			l212.8,213.504c2.005,2.005,4.715,3.136,7.552,3.136s5.547-1.131,7.552-3.115l213.419-213.504
			C479.793,292.501,480.71,287.915,479.046,283.925z"
                      />
                    </g>
                  </g>
                </svg>

                2 Downvotes</button
              >
            </div>
            <div class="flex flex-col w-full">
              <span class="font-mulish text-sm text-black leading-relaxed"
                >{@html explanation.content}
              </span>
              <div
                class="flex flex-col gap-y-4 md:gap-y-0 md:flex-row md:items-center md:justify-between mt-4 md:mt-12"
              >
                <div
                  class="flex gap-x-4 text-xs font-mulish font-bold text-ematextblue"
                >
                  <button>Share</button>
                  <button>Report</button>
                  <button>Comment</button>
                  <button>Edit</button>
                </div>

                <div
                  class="author-box relative flex flex-col gap-y-2 font-bold font-mulish text-xs"
                >
                  <div class="flex gap-x-3 justify-center items-center">
                    <img
                      on:mouseover={() => {
                        authorBox = !authorBox;
                      }}
                      on:mouseout={() => {
                        authorBox = !authorBox;
                      }}
                      class="w-11 h-11 rounded-full"
                      src={explanation.author.profile_pic}
                      alt="teacher"
                    />
                    <div class="flex flex-col gap-y-1">
                      <span
                        class="flex gap-x-1 font-normal"
                        style="color: #46789C"
                        >{explanation.author.username}
                        {#if explanation.author.is_verified}
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.5001 0C4.23941 0 1.58664 2.65274 1.58664 5.91346C1.58664 7.94558 2.61707 9.74145 4.18278 10.8064V14.5673C4.18278 14.7141 4.25723 14.8509 4.38054 14.9306C4.50379 15.0103 4.65912 15.0221 4.79304 14.9619L7.5001 13.7437L10.2072 14.9619C10.2638 14.9874 10.3243 15 10.3847 15C10.4668 15 10.5486 14.9766 10.6197 14.9307C10.7429 14.8509 10.8174 14.7141 10.8174 14.5673V10.8064C12.3831 9.74148 13.4136 7.94561 13.4136 5.91349C13.4136 2.65274 10.7608 0 7.5001 0ZM9.95201 13.8981L7.67764 12.8747C7.62118 12.8493 7.56062 12.8365 7.5001 12.8365C7.43957 12.8365 7.37901 12.8492 7.32256 12.8747L5.04818 13.8981V11.2955C5.26565 11.3947 5.48887 11.4799 5.7163 11.5517C5.72919 11.5558 5.74205 11.56 5.755 11.564C5.78403 11.5729 5.81315 11.5816 5.8423 11.59C5.8639 11.5963 5.88549 11.6026 5.90714 11.6087C5.93066 11.6153 5.95428 11.6216 5.97789 11.6279C6.00543 11.6353 6.03303 11.6424 6.06071 11.6494C6.08028 11.6543 6.09988 11.6591 6.11951 11.6638C6.15136 11.6714 6.18329 11.6788 6.21534 11.6859C6.23195 11.6896 6.24859 11.6933 6.26523 11.6968C6.30033 11.7043 6.33555 11.7114 6.37091 11.7183C6.38529 11.7211 6.39968 11.7239 6.41409 11.7266C6.45153 11.7336 6.48912 11.7401 6.52679 11.7464C6.53972 11.7485 6.55264 11.7508 6.56558 11.7528C6.60446 11.759 6.64351 11.7647 6.68268 11.7702C6.69481 11.7718 6.70691 11.7737 6.71904 11.7753C6.75868 11.7805 6.79849 11.7852 6.83834 11.7897C6.85023 11.791 6.86207 11.7925 6.87396 11.7938C6.91372 11.798 6.95362 11.8016 6.99361 11.805C7.00574 11.806 7.01781 11.8073 7.02997 11.8082C7.06937 11.8113 7.10895 11.8138 7.14859 11.8162C7.16131 11.8169 7.17396 11.8179 7.18674 11.8186C7.22679 11.8207 7.26698 11.8221 7.30723 11.8234C7.31936 11.8238 7.33141 11.8245 7.34353 11.8248C7.39557 11.8262 7.44777 11.8269 7.50016 11.8269C7.55251 11.8269 7.60471 11.8262 7.65675 11.8248C7.66888 11.8245 7.68092 11.8238 7.69305 11.8234C7.7333 11.8221 7.77349 11.8207 7.81354 11.8186C7.82626 11.8179 7.83894 11.8169 7.85169 11.8162C7.89133 11.8138 7.93091 11.8114 7.97031 11.8082C7.98247 11.8073 7.99454 11.806 8.00667 11.805C8.04666 11.8016 8.08656 11.798 8.12632 11.7938C8.13821 11.7925 8.15005 11.791 8.16194 11.7897C8.20182 11.7852 8.2416 11.7805 8.28124 11.7753C8.2934 11.7737 8.30547 11.7719 8.3176 11.7702C8.35674 11.7647 8.39579 11.759 8.4347 11.7528C8.44765 11.7507 8.46054 11.7485 8.47348 11.7464C8.51116 11.7401 8.54875 11.7336 8.58619 11.7266C8.6006 11.7239 8.61499 11.7211 8.62937 11.7183C8.66471 11.7114 8.69992 11.7043 8.73505 11.6968C8.75172 11.6933 8.76833 11.6896 8.78494 11.6859C8.81699 11.6788 8.84892 11.6714 8.88077 11.6638C8.90037 11.6591 8.91997 11.6543 8.93957 11.6494C8.96725 11.6425 8.99482 11.6353 9.02239 11.6279C9.046 11.6216 9.06962 11.6153 9.09314 11.6087C9.11479 11.6026 9.13641 11.5963 9.15798 11.59C9.18713 11.5815 9.21628 11.5729 9.24528 11.564C9.25823 11.56 9.27109 11.5558 9.28398 11.5517C9.51142 11.4799 9.73463 11.3947 9.9521 11.2956V13.8981H9.95201ZM9.14743 10.6853C9.13017 10.6912 9.11292 10.6972 9.0956 10.703C9.0693 10.7118 9.04287 10.7204 9.01636 10.7288C8.98551 10.7384 8.95457 10.7478 8.92354 10.7569C8.90166 10.7633 8.87974 10.7697 8.85774 10.7759C8.8167 10.7873 8.77551 10.7983 8.73417 10.8087C8.71876 10.8126 8.70329 10.8163 8.68785 10.82C8.64739 10.8298 8.60676 10.8391 8.56603 10.8479C8.55578 10.8502 8.54561 10.8525 8.53536 10.8546C8.4828 10.8656 8.43007 10.8758 8.37713 10.8851C8.37174 10.886 8.36632 10.8869 8.3609 10.8878C8.3132 10.8961 8.26536 10.9035 8.21743 10.9104C8.20662 10.9119 8.19581 10.9134 8.18494 10.9149C8.13382 10.9219 8.08261 10.9283 8.03122 10.9337C8.02929 10.9339 8.02735 10.9341 8.02542 10.9343C7.97163 10.9399 7.91764 10.9445 7.86358 10.9484C7.85186 10.9492 7.84009 10.9498 7.82834 10.9506C7.7863 10.9533 7.74426 10.9555 7.7021 10.9572C7.68777 10.9578 7.67345 10.9584 7.65912 10.9588C7.60618 10.9604 7.55318 10.9615 7.5001 10.9615C7.44701 10.9615 7.39401 10.9605 7.34107 10.9588C7.32672 10.9583 7.31239 10.9577 7.29809 10.9571C7.25594 10.9554 7.21389 10.9533 7.17185 10.9506C7.16011 10.9498 7.14836 10.9492 7.13661 10.9483C7.08256 10.9444 7.02859 10.9398 6.97477 10.9343C6.97284 10.9341 6.97091 10.9338 6.96897 10.9336C6.91759 10.9282 6.86638 10.9218 6.81525 10.9149C6.80444 10.9134 6.79363 10.9119 6.78279 10.9103C6.73483 10.9034 6.68699 10.896 6.6393 10.8878C6.6339 10.8869 6.62848 10.886 6.62306 10.885C6.57013 10.8758 6.51736 10.8655 6.46483 10.8546C6.45461 10.8524 6.44441 10.85 6.43416 10.8479C6.39344 10.8391 6.3528 10.8298 6.31234 10.82C6.29687 10.8162 6.2814 10.8125 6.26602 10.8086C6.22469 10.7983 6.18349 10.7873 6.14245 10.7758C6.12045 10.7697 6.09853 10.7633 6.07665 10.7568C6.04565 10.7477 6.01469 10.7384 5.98381 10.7287C5.95729 10.7203 5.9309 10.7117 5.90456 10.7029C5.88722 10.6971 5.86996 10.6912 5.85273 10.6852C3.87566 10.0008 2.45201 8.12036 2.45201 5.91346C2.45201 3.12996 4.71657 0.865371 7.5001 0.865371C10.2836 0.865371 12.5482 3.12993 12.5482 5.91346C12.5482 8.12036 11.1245 10.0008 9.14743 10.6853Z"
                              fill="#DCB323"
                            />
                            <path
                              d="M10.0668 5.91349L10.8795 4.38595C10.9497 4.2542 10.9469 4.09561 10.8723 3.96639C10.7977 3.83716 10.6617 3.75545 10.5125 3.75029L8.7833 3.69038L7.86677 2.22278C7.7877 2.09622 7.64901 2.01929 7.49977 2.01929C7.35053 2.01929 7.21184 2.09622 7.13277 2.22278L6.21627 3.69038L4.48702 3.75029C4.33787 3.75545 4.20191 3.83716 4.12729 3.96639C4.05267 4.09561 4.04988 4.2542 4.12002 4.38595L4.93275 5.91349L4.12002 7.44102C4.04988 7.57277 4.05267 7.73136 4.12729 7.86059C4.20191 7.98981 4.33787 8.07152 4.48702 8.07668L6.21627 8.13659L7.13277 9.60419C7.21181 9.73075 7.35053 9.80769 7.49977 9.80769C7.64901 9.80769 7.7877 9.73075 7.86677 9.60419L8.78327 8.13659L10.5125 8.07668C10.6617 8.07152 10.7976 7.98981 10.8723 7.86059C10.9469 7.73136 10.9497 7.57277 10.8795 7.44102L10.0668 5.91349ZM8.52326 7.27969C8.37944 7.28467 8.24746 7.36087 8.17125 7.48295L7.49977 8.55817L6.82831 7.48298C6.75208 7.3609 6.62013 7.28473 6.47631 7.27972L5.20946 7.2358L5.80486 6.11672C5.87247 5.98966 5.87247 5.83731 5.80486 5.71025L5.20946 4.59117L6.47631 4.54726C6.62013 4.54228 6.75211 4.46607 6.82831 4.34399L7.49977 3.26883L8.17122 4.34402C8.24746 4.4661 8.37941 4.54228 8.52323 4.54729L9.79008 4.5912L9.19468 5.71028C9.12709 5.83734 9.12709 5.98972 9.19471 6.11675L9.79011 7.23583L8.52326 7.27969Z"
                              fill="#DCB323"
                            />
                          </svg>
                        {/if}
                      </span><span class="font-normal" style="color: #274C67"
                        >{user_roles[explanation.author.account_type]}</span
                      >
                      {#if authorBox}
                        <div
                          in:scale={{ duration: 500 }}
                          out:fade
                          class="absolute flex rounded bg-white drop-shadow py-2 px-4"
                        >
                          Author
                        </div>
                      {/if}
                    </div>
                  </div>

                  <span class="text-ematextblue font-semibold"
                    >Answered {convertDate(explanation.published)}</span
                  >
                </div>
              </div>
            </div>
          </div>
          <hr class="exp mt-8 mb-2" style="border-color: #A1A5B1" />
        {/each}
      </div>
    </article>
    <!-- Sidebar -->
    <aside class="flex flex-col items-start w-full xl:w-1/4">
      <div
        class="viewed-questions flex flex-col w-full items-start bg-white rounded-lg px-4 md:px-7 pt-8 pb-6"
      >
        <h3 class="text-sm text-lg lg:text-base 2xl:text-lg font-semibold">
          Most viewed questions
        </h3>
        <ul class="list-none mt-5">
          <li class="font-mulish text-sm" style="color: #274C67">
            How do I prove conservation of momentum from Newton’s Laws?
            <hr class="my-4 w-full" style="border-color: #CCD9E9" />
          </li>
          <li class="font-mulish text-sm" style="color: #274C67">
            How do I prove conservation?
            <hr class="my-4 w-full" style="border-color: #CCD9E9" />
          </li>
          <li class="font-mulish text-sm" style="color: #274C67">
            How do I prove conservation of momentum from Newton’s Laws?
            <hr class="my-4 w-full" style="border-color: #CCD9E9" />
          </li>
          <li class="font-mulish text-sm" style="color: #274C67">
            How do I prove conservation of momentum from Newton’s Laws?
            <hr class="my-4 w-full" style="border-color: #CCD9E9" />
          </li>
          <li class="font-mulish text-sm" style="color: #274C67">
            How do I prove conservation?
            <hr class="my-4 w-full" style="border-color: #CCD9E9" />
          </li>
        </ul>
      </div>
      <div
        class="teachers flex flex-col items-start bg-white w-full rounded-lg px-4 mt-4 md:px-7 pt-8 pb-6"
      >
        <h3 class="text-sm text-lg lg:text-base 2xl:text-lg font-semibold">
          Recommended Teachers
        </h3>
        <hr class="mt-3 mb-7 border-2 w-16" style="border-color: #80BFC2" />
        <!-- Teachers -->
        <div class="flex items-center gap-x-4 w-full">
          <img src="/images/Ellipse 5.png" class="w-10 h-10" alt="andrey" />
          <span class="flex flex-col w-full">
            <p class="text-ematextblue text-sm font-mulish">Andrey Popov</p>
            <p class="text-ematextblue text-xs font-light font-mulish">
              School name
            </p>
          </span>
        </div>
        <hr class="my-4 w-full" style="border-color: #CCD9E9" />
        <div class="flex items-center gap-x-4 w-full">
          <img src="/images/Ellipse 6.png" class="w-10 h-10" alt="andrey" />
          <span class="flex flex-col w-full">
            <p class="text-ematextblue text-sm font-mulish">Andrey Popov</p>
            <p class="text-ematextblue text-xs font-light font-mulish">
              School name
            </p>
          </span>
        </div>
        <hr class="my-4 w-full" style="border-color: #CCD9E9" />
        <div class="flex items-center gap-x-4 w-full">
          <img src="/images/Ellipse 7.png" class="w-10 h-10" alt="andrey" />
          <span class="flex flex-col w-full">
            <p class="text-ematextblue text-sm font-mulish">Andrey Popov</p>
            <p class="text-ematextblue text-xs font-light font-mulish">
              School name
            </p>
          </span>
        </div>
        <hr class="my-4 w-full" style="border-color: #CCD9E9" />
      </div>
      <div class="ads w-full">
        <img class="w-16 h-16" src="/images/ad.png" alt="ad" />
      </div>
    </aside>
  </div>
</section>

<style>
  .viewed-questions > ul > li:last-of-type > hr,
  .teachers > hr:last-of-type,
  article > hr:last-of-type,
  .exp:last-of-type {
    display: none;
  }

  .viewed-questions {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  }
</style>
