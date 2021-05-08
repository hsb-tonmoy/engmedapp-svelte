<script>
  import Header from "../_header.svelte";
  import Footer from "../_footer.svelte";
  import { onMount } from "svelte";
  import { user } from "../../../components/Auth/store.js";
  import authAxios from "../../../components/Auth/authAxios.js";
  import Libloader from "../../../components/utils/libloader.svelte";
  import { boards, levels, papers, years, sessions } from "../fetcherStore.js";
  import AddMedia from "../../../components/Media/addMedia.svelte";
  import { metatags } from "@roxi/routify";

  metatags.title = "EngMedApp - Add Question";

  String.prototype.slugify = function (separator = "-") {
    return this.toString()
      .normalize("NFD") // split an accented letter in the base letter and the acent
      .replace(/[\u0300-\u036f]/g, "") // remove all previously split accents
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9 ]/g, "") // remove all chars not letters, numbers and spaces (to be replaced)
      .replace(/\s+/g, separator)
      .substring(0, 30);
  };

  let boards_list = [],
    levels_list = [],
    papers_list = [],
    years_list = [],
    sessions_list = [];

  const dataLoader = async () => {
    (boards_list = await $boards),
      (levels_list = await $levels),
      (papers_list = await $papers),
      (years_list = await $years),
      (sessions_list = await $sessions);

    new_board = boards_list[0].id;
    new_level = levels_list[0].id;
    new_paper = papers_list[0].id;
    new_year = years_list[0].id;
    new_session = sessions_list[0].id;
  };

  let new_board, new_level, new_paper, new_year, new_session, slug_id;
  let new_title = "";

  const gen_slug_id = () => {
    slug_id = Math.floor(Math.random() * 1000000).toString() + "-";
  };
  gen_slug_id();
  $: new_slug = slug_id + new_title.slugify();
  let new_excerpt = "";

  let question_editor, explanation_editor;

  let question_editorData = "";

  let explanation_editorData = "";

  let user_id = $user.id;

  let addSuccess = true;

  onMount(() => {
    dataLoader();
  });

  function onLoaded() {
    question_editor = CKEDITOR.replace("question_editor");
    explanation_editor = CKEDITOR.replace("explanation_editor");
  }

  const sendData = async () => {
    question_editorData = await question_editor.getData();
    explanation_editorData = await explanation_editor.getData();

    await authAxios
      .post("questions/create/", {
        board: new_board,
        level: new_level,
        paper: new_paper,
        year: new_year,
        session: new_session,
        author: user_id,
        title: new_title,
        excerpt: new_excerpt,
        content: question_editorData,
        verified_explanation: explanation_editorData,
        slug: new_slug,
      })
      .then((res) => {
        if (res.status === 201) {
          (new_title = ""), (new_excerpt = "");
          gen_slug_id();
          question_editor.setData("");
          explanation_editor.setData("");
          addSuccess = false;
        }
      });
  };
</script>

<Libloader url="/ckeditor/ckeditor.js" on:loaded={onLoaded} />

<svelte:head>
  <title>EngMedApp - Add a Question</title>
</svelte:head>

<html
  lang="en"
  class="has-aside-left has-aside-mobile-transition has-navbar-fixed-top has-aside-expanded"
>
  <body>
    <div id="app">
      <Header title="Add Questions" />
      <section class="hero is-hero-bar">
        <div class="hero-body">
          <div
            class="notification is-success"
            style={addSuccess ? "display: none" : ""}
          >
            <div class="level">
              <div class="level-left">
                <div class="level-item">
                  <div>
                    <span class="icon"
                      ><i class="mdi mdi-buffer default" /></span
                    >
                    <b>Successfully Added!</b>
                  </div>
                </div>
              </div>
              <div class="level-right">
                <button
                  type="button"
                  class="button is-small is-white jb-notification-dismiss"
                  >Dismiss</button
                >
              </div>
            </div>
          </div>
          <div class="level">
            <div class="level-left">
              <div class="level-item">
                <h1 class="title">Add a Question</h1>
              </div>
            </div>
            <div class="level-right" style="display: none;">
              <div class="level-item" />
            </div>
          </div>
        </div>
      </section>
      <section class="section is-main-section">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              <span class="icon"><i class="mdi mdi-ballot" /></span>
              Add a Question
            </p>
          </header>
          <div class="card-content">
            <form on:submit|preventDefault={sendData}>
              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Title</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <div class="control">
                      <input
                        bind:value={new_title}
                        class="input"
                        type="text"
                        name="title"
                        placeholder="Title"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Slug</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <div class="control">
                      <input
                        bind:value={new_slug}
                        class="input"
                        type="text"
                        placeholder="Slug"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Board</label>
                </div>
                <div class="field-body">
                  <div class="field is-narrow">
                    <div class="control">
                      <div class="select is-fullwidth">
                        <select bind:value={new_board}>
                          {#each boards_list as board}
                            <option value={board.id}>{board.name}</option>
                          {/each}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Level</label>
                </div>
                <div class="field-body">
                  <div class="field is-narrow">
                    <div class="control">
                      <div class="select is-fullwidth">
                        <select bind:value={new_level}>
                          {#each levels_list as level}
                            <option value={level.id}>{level.name}</option>
                          {/each}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Paper</label>
                </div>
                <div class="field-body">
                  <div class="field is-narrow">
                    <div class="control">
                      <div class="select is-fullwidth">
                        <select bind:value={new_paper}>
                          {#each papers_list as paper}
                            <option value={paper.id}>{paper.name}</option>
                          {/each}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Year</label>
                </div>
                <div class="field-body">
                  <div class="field is-narrow">
                    <div class="control">
                      <div class="select is-fullwidth">
                        <select bind:value={new_year}>
                          {#each years_list as year}
                            <option value={year.id}>{year.name}</option>
                          {/each}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Session</label>
                </div>
                <div class="field-body">
                  <div class="field is-narrow">
                    <div class="control">
                      <div class="select is-fullwidth">
                        <select bind:value={new_session}>
                          {#each sessions_list as session}
                            <option value={session.id}>{session.name}</option>
                          {/each}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Excerpt</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <div class="control">
                      <textarea
                        bind:value={new_excerpt}
                        class="textarea"
                        type="text"
                        placeholder="Excerpt"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Question</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <AddMedia editor_instance={question_editor} />
                    <div class="control">
                      <textarea
                        id="question_editor"
                        class="textarea"
                        placeholder="Question Details...."
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Explanation</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <AddMedia editor_instance={explanation_editor} />
                    <div class="control">
                      <textarea
                        id="explanation_editor"
                        class="textarea"
                        placeholder="Write Your Explanation Here...."
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div class="field is-horizontal">
                <div class="field-label">
                  <!-- Left empty for spacing -->
                </div>
                <div class="field-body">
                  <div class="field">
                    <div class="field is-grouped">
                      <div class="control">
                        <button type="submit" class="button is-primary">
                          <span>Submit</span>
                        </button>
                      </div>
                      <!-- <div class="control">
                        <button
                          on:click={() => createForm.validate()}
                          type="button"
                          class="button is-primary is-outlined"
                        >
                          <span>Validate</span>
                        </button>
                      </div> -->
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />

      <div id="sample-modal" class="modal">
        <div class="modal-background jb-modal-close" />
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Confirm action</p>
            <button class="delete jb-modal-close" aria-label="close" />
          </header>
          <section class="modal-card-body">
            <p>This will permanently delete <b>Some Object</b></p>
            <p>This is sample modal</p>
          </section>
          <footer class="modal-card-foot">
            <button class="button jb-modal-close">Cancel</button>
            <button class="button is-danger jb-modal-close">Delete</button>
          </footer>
        </div>
        <button
          class="modal-close is-large jb-modal-close"
          aria-label="close"
        />
      </div>
    </div>
  </body>
</html>
