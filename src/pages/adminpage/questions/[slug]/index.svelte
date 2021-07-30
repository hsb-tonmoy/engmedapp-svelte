<script>
  import Header from "../../_header.svelte";
  import Footer from "../../_footer.svelte";
  import { params } from "@roxi/routify";
  $: slug = $params.slug;
  import { onMount } from "svelte";
  import Libloader from "../../../../components/utils/libloader.svelte";
  const API_URL = "https://api.engmedapp.com/";
  export let scoped;
  $: question = scoped.question;

  let new_title = "";
  $: new_slug = "";
  let new_excerpt = "";

  let updateSuccess = true;

  let content_editorData = "";
  let explanation_editorData = "";
  let content_editor, explanation_editor;

  let boards = [];
  let levels = [];
  let papers = [];
  let years = [];
  let sessions = [];

  const fetchBoards = async () => {
    const res = await fetch(API_URL + "questions/boards/");
    const data = await res.json();

    boards = data;
  };
  const fetchLevels = async () => {
    const res = await fetch(API_URL + "questions/levels/");
    const data = await res.json();

    levels = data;
  };
  const fetchPapers = async () => {
    const res = await fetch(API_URL + "questions/papers/");
    const data = await res.json();

    papers = data;
  };
  const fetchBYears = async () => {
    const res = await fetch(API_URL + "questions/years/");
    const data = await res.json();

    years = data;
  };
  const fetchSessions = async () => {
    const res = await fetch(API_URL + "questions/sessions/");
    const data = await res.json();

    sessions = data;
  };

  onMount(() => {
    fetchBoards();
    fetchLevels();
    fetchPapers();
    fetchBYears();
    fetchSessions();
    populateform();
  });

  function onLoaded() {
    content_editor = CKEDITOR.replace("content_editor");
    explanation_editor = CKEDITOR.replace("explanation_editor");
  }

  $: new_board = 1;
  $: new_level = 1;
  $: new_paper = 1;
  $: new_year = 1;
  $: new_session = 1;

  const populateform = async () => {
    await question;

    new_board = question.board.id;
    new_level = question.level.id;
    new_paper = question.paper.id;
    new_year = question.year.id;
    new_session = question.session.id;
    new_title = question.title;
    new_slug = question.slug;
    new_excerpt = question.excerpt;

    // content_editor.setData(question.content);
    // explanation_editor.setData(question.verified_explanation);
  };

  const updateData = async () => {
    content_editorData = await content_editor.getData();
    explanation_editorData = await explanation_editor.getData();

    const res = await fetch(`${API_URL}questions/update/${slug}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        board: new_board,
        level: new_level,
        paper: new_paper,
        year: new_year,
        session: new_session,
        author: 1,
        title: new_title,
        excerpt: new_excerpt,
        content: content_editorData,
        verified_explanation: explanation_editorData,
        slug: new_slug,
      }),
    }).catch(function (error) {
      console.log("ERROR:", error);
    });

    if (res.ok) {
      updateSuccess = false;
      window.scrollTo(0, 0);
    }

    // console.log(
    //   new_board +
    //     new_level +
    //     new_paper +
    //     new_year +
    //     new_session +
    //     new_title +
    //     new_excerpt +
    //     content_editorData +
    //     explanation_editorData +
    //     new_slug
    // );
  };
</script>

<Libloader url="/ckeditor/ckeditor.js" on:loaded={onLoaded} />

<svelte:head>
  <title>EngMedApp - Question Database</title>
</svelte:head>

<html
  lang="en"
  class="has-aside-left has-aside-mobile-transition has-navbar-fixed-top has-aside-expanded"
>
  <body>
    <div id="app">
      <Header title="Update Question" />
      <section class="hero is-hero-bar">
        <div class="hero-body">
          <div class="level">
            <div class="level-left">
              <div class="level-item">
                <h1 class="title">Update a Question</h1>
              </div>
            </div>
            <div class="level-right" style="display: none;">
              <div class="level-item" />
            </div>
          </div>
        </div>
      </section>
      <section class="section is-main-section">
        <div
          class="notification is-success"
          style={updateSuccess ? "display: none" : ""}
        >
          <div class="level">
            <div class="level-left">
              <div class="level-item">
                <div>
                  <span class="icon"><i class="mdi mdi-buffer default" /></span>
                  <b>Successfully Updated!</b>
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
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              <span class="icon"><i class="mdi mdi-ballot" /></span>
              Add a Question
            </p>
          </header>
          <div class="card-content">
            <form on:submit|preventDefault={updateData}>
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
                          {#each boards as board}
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
                          {#each levels as level}
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
                          {#each papers as paper}
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
                          {#each years as year}
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
                          {#each sessions as session}
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
                    <div class="control">
                      <textarea
                        id="content_editor"
                        class="textarea"
                        placeholder="Question Details...."
                      >
                        {question.content}
                      </textarea>
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
                    <div class="control">
                      <textarea
                        id="explanation_editor"
                        class="textarea"
                        placeholder="Write Your Explanation Here...."
                        >{question.verified_explanation}
                      </textarea>
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
                          <span>Update</span>
                        </button>
                      </div>
                      <!-- <div class="control">
                        <button
                          type="button"
                          class="button is-primary is-outlined"
                        >
                          <span>Reset</span>
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
