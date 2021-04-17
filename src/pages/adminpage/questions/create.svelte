<script>
  import Header from "../_header.svelte";
  import Footer from "../_footer.svelte";
  import { onMount } from "svelte";

  const API_URL = "https://engmedapp.herokuapp.com/";

  String.prototype.slugify = function (separator = "-") {
    return this.toString()
      .normalize("NFD") // split an accented letter in the base letter and the acent
      .replace(/[\u0300-\u036f]/g, "") // remove all previously split accents
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9 ]/g, "") // remove all chars not letters, numbers and spaces (to be replaced)
      .replace(/\s+/g, separator);
  };

  let new_board, new_level, new_paper, new_year, new_session;
  let new_title = "";
  $: new_slug = new_title.slugify();
  let new_excerpt = "";

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
    new_board = boards[0].id;
  };
  const fetchLevels = async () => {
    const res = await fetch(API_URL + "questions/levels/");
    const data = await res.json();

    levels = data;
    new_level = levels[0].id;
  };
  const fetchPapers = async () => {
    const res = await fetch(API_URL + "questions/papers/");
    const data = await res.json();

    papers = data;
    new_paper = papers[0].id;
  };
  const fetchBYears = async () => {
    const res = await fetch(API_URL + "questions/years/");
    const data = await res.json();

    years = data;
    new_year = years[0].id;
  };
  const fetchSessions = async () => {
    const res = await fetch(API_URL + "questions/sessions/");
    const data = await res.json();

    sessions = data;
    new_session = sessions[0].id;
  };

  onMount(() => {
    fetchBoards();
    fetchLevels();
    fetchPapers();
    fetchBYears();
    fetchSessions();
    ClassicEditor.create(document.querySelector(".content_editor"), {
      toolbar: {
        items: [
          "heading",
          "|",
          "fontFamily",
          "bold",
          "italic",
          "underline",
          "strikethrough",
          "superscript",
          "subscript",
          "link",
          "fontSize",
          "highlight",
          "bulletedList",
          "numberedList",
          "|",
          "outdent",
          "indent",
          "|",
          "imageUpload",
          "imageInsert",
          "blockQuote",
          "MathType",
          "ChemType",
          "insertTable",
          "mediaEmbed",
          "undo",
          "redo",
        ],
      },
      language: "en",
      image: {
        toolbar: ["imageTextAlternative", "imageStyle:full", "imageStyle:side"],
      },
      table: {
        contentToolbar: [
          "tableColumn",
          "tableRow",
          "mergeTableCells",
          "tableCellProperties",
          "tableProperties",
        ],
      },
      licenseKey: "",
    })
      .then((editor) => {
        content_editor = editor;
      })
      .catch((error) => {
        console.error("Oops, something went wrong!");
        console.error(
          "Please, report the following error on https://github.com/ckeditor/ckeditor5/issues with the build id and the error stack trace:"
        );
        console.warn("Build id: 1xw2btaf0pb-8ua758h0wkmd");
        console.error(error);
      });

    ClassicEditor.create(document.querySelector(".explanation_editor"), {
      toolbar: {
        items: [
          "heading",
          "|",
          "fontFamily",
          "bold",
          "italic",
          "underline",
          "strikethrough",
          "superscript",
          "subscript",
          "link",
          "fontSize",
          "highlight",
          "bulletedList",
          "numberedList",
          "|",
          "outdent",
          "indent",
          "|",
          "imageUpload",
          "imageInsert",
          "blockQuote",
          "MathType",
          "ChemType",
          "insertTable",
          "mediaEmbed",
          "undo",
          "redo",
        ],
      },
      language: "en",
      image: {
        toolbar: ["imageTextAlternative", "imageStyle:full", "imageStyle:side"],
      },
      table: {
        contentToolbar: [
          "tableColumn",
          "tableRow",
          "mergeTableCells",
          "tableCellProperties",
          "tableProperties",
        ],
      },
      licenseKey: "",
    })
      .then((editor) => {
        explanation_editor = editor;
      })
      .catch((error) => {
        console.error("Oops, something went wrong!");
        console.error(
          "Please, report the following error on https://github.com/ckeditor/ckeditor5/issues with the build id and the error stack trace:"
        );
        console.warn("Build id: 1xw2btaf0pb-8ua758h0wkmd");
        console.error(error);
      });
  });

  const sendData = async () => {
    content_editorData = await content_editor.getData();
    explanation_editorData = await explanation_editor.getData();

    await fetch(API_URL + "questions/create/", {
      method: "POST",
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

    new_excerpt = "";
    content_editor.setData("");
    explanation_editor.setData("");

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

<svelte:head>
  <title>EngMedApp - Question Database</title>
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
                        class="textarea content_editor"
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
                    <div class="control">
                      <textarea
                        class="textarea explanation_editor"
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
