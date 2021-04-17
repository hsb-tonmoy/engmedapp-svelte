<script>
  const API_URL = "http://localhost:8000/";
  import Header from "../_header.svelte";
  import Footer from "../_footer.svelte";
  import { onMount } from "svelte";

  let questions = [];

  const fetchQuestions = async () => {
    const res = await fetch(API_URL + "questions/list/");
    const data = await res.json();

    questions = data;
  };

  onMount(() => {
    fetchQuestions();
  });
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
      <Header title="Questions" />
      <section class="hero is-hero-bar">
        <div class="hero-body">
          <div class="notification is-info">
            <div class="level">
              <div class="level-left">
                <div class="level-item">
                  <div>
                    <span class="icon"
                      ><i class="mdi mdi-buffer default" /></span
                    >
                    <b>Questions List.</b> View, Edit, Delete Questions.
                  </div>
                </div>
              </div>
              <!-- <div class="level-right">
                <button
                  type="button"
                  class="button is-small is-white jb-notification-dismiss"
                  >Dismiss</button
                >
              </div> -->
            </div>
          </div>

          <div class="card has-table has-table-container-upper-radius">
            <div class="card-content">
              <div class="b-table has-pagination">
                <div class="table-wrapper has-mobile-cards">
                  <table
                    class="table is-fullwidth is-striped is-hoverable is-fullwidth"
                  >
                    <thead>
                      <tr>
                        <th class="is-checkbox-cell">
                          <label class="b-checkbox checkbox">
                            <input type="checkbox" value="false" />
                            <span class="check" />
                          </label>
                        </th>

                        <th>ID</th>
                        <th>Title</th>
                        <th>Board</th>
                        <th>Level</th>
                        <th>Paper</th>
                        <th>Year</th>
                        <th>Session</th>
                        <th>Status</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      {#each questions as question (question.slug)}
                        <tr>
                          <td class="is-checkbox-cell">
                            <label class="b-checkbox checkbox">
                              <input type="checkbox" value="false" />
                              <span class="check" />
                            </label>
                          </td>

                          <td data-label="ID"> {question.id}</td>
                          <td data-label="Title">
                            <a href={`/questions/${question.slug}`}
                              >{question.title}</a
                            >
                          </td>
                          <td data-label="Board">{question.board.name}</td>
                          <td data-label="Level">{question.level.name}</td>
                          <td data-label="Paper">{question.paper.name}</td>
                          <td data-label="Year">{question.year.name}</td>
                          <td data-label="Session">{question.session.name}</td>
                          <td class="is-capitalized" data-label="Status"
                            >{question.status}</td
                          >

                          <!-- <td data-label="Created">
                          <small
                            class="has-text-grey is-abbr-like"
                            title="Oct 25, 2020">Oct 25, 2020</small
                          >
                        </td> -->
                          <td class="is-actions-cell">
                            <div class="buttons is-right">
                              <button
                                class="button is-small is-primary"
                                type="button"
                              >
                                <span class="icon"
                                  ><i class="mdi mdi-eye" /></span
                                >
                              </button>
                              <button
                                class="button is-small is-danger jb-modal"
                                data-target="sample-modal"
                                type="button"
                              >
                                <span class="icon"
                                  ><i class="mdi mdi-trash-can" /></span
                                >
                              </button>
                            </div>
                          </td>
                        </tr>
                      {/each}
                    </tbody>
                  </table>
                </div>
                <div class="notification">
                  <div class="level">
                    <div class="level-left">
                      <div class="level-item">
                        <div class="buttons has-addons">
                          <button type="button" class="button is-active"
                            >1</button
                          >
                          <button type="button" class="button">2</button>
                          <button type="button" class="button">3</button>
                        </div>
                      </div>
                    </div>
                    <div class="level-right">
                      <div class="level-item">
                        <small>Page 1 of 3</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
