<script>
  import Footer from "../../_footer.svelte";
  import Header from "../../_header.svelte";
  import { user } from "../../../../components/Auth/store.js";
  import authAxios from "../../../../components/Auth/authAxios.js";
  import { papers, triggerPapersfetch } from "../../fetcherStore.js";
  import { onMount } from "svelte";

  import { metatags } from "@roxi/routify";

  metatags.title = "EngMedApp - Papers";

  let user_account_type = $user.account_type;

  let addSuccess = true;

  let papers_list = [];

  let new_name;

  let editing = false;

  let paper_id;

  const dataLoader = async () => {
    papers_list = await $papers;
  };

  onMount(() => {
    dataLoader();
  });

  const updatePaper = (data) => {
    editing = true;
    paper_id = data[0];
    new_name = data[1];
  };

  const sendData = async () => {
    if (!editing) {
      await authAxios
        .post("questions/papers/", {
          name: new_name,
        })
        .then((res) => {
          if (res.status === 201) {
            new_name = "";
            addSuccess = false;
            triggerPapersfetch();
            dataLoader();
          }
        });
    } else {
      await authAxios
        .put(`questions/paper/${paper_id}`, {
          name: new_name,
        })
        .then((res) => {
          if (res.status === 200) {
            new_name = "";
            addSuccess = false;
            editing = false;
            triggerPapersfetch();
            dataLoader();
          }
        });
    }
  };

  const deletePaper = async (id) => {
    await authAxios.delete(`questions/paper/${id}`).then((res) => {
      if (res.status === 204) {
        triggerPapersfetch();
        dataLoader();
      }
    });
  };
</script>

<svelte:head>
  <title>EngMedApp - Papers</title>
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
                    <b
                      >{editing
                        ? "Successfully Updated!"
                        : "Successfully Added!"}</b
                    >
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
          <div class="notification is-info">
            <div class="level">
              <div class="level-left">
                <div class="level-item">
                  <div>
                    <span class="icon"
                      ><i class="mdi mdi-buffer default" /></span
                    >
                    <b>Papers List.</b> Add, View, Edit, Delete papers.
                  </div>
                </div>
              </div>
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
                        <th>Name</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      {#each papers_list as paper (paper.id)}
                        <tr>
                          <td class="is-checkbox-cell">
                            <label class="b-checkbox checkbox">
                              <input type="checkbox" value="false" />
                              <span class="check" />
                            </label>
                          </td>

                          <td data-label="ID"> {paper.id}</td>
                          <td data-label="Name">{paper.name} </td>
                          {#if user_account_type === 5 || user_account_type === 4}
                            <td class="is-actions-cell">
                              <div class="buttons is-right">
                                <a
                                  on:click={updatePaper([paper.id, paper.name])}
                                  class="button is-small is-primary"
                                >
                                  <span class="icon"
                                    ><i class="fas fa-pen" /></span
                                  >
                                </a>
                                <a
                                  class="button is-small is-danger jb-modal"
                                  on:click={() => deletePaper(paper.id)}
                                >
                                  <span class="icon"
                                    ><i class="fas fa-trash" /></span
                                  >
                                </a>
                              </div>
                            </td>
                          {/if}
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
      {#if user_account_type === 5 || user_account_type === 4}
        <section class="section is-main-section">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                <span class="icon"><i class="mdi mdi-ballot" /></span>
                Add a paper
              </p>
            </header>
            <div class="card-content">
              <form on:submit|preventDefault={sendData}>
                <div class="field is-horizontal">
                  <div class="field-label is-normal">
                    <label class="label">Name</label>
                  </div>
                  <div class="field-body">
                    <div class="field">
                      <div class="control">
                        <input
                          bind:value={new_name}
                          class="input"
                          type="text"
                          name="title"
                          placeholder="Title"
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
                            <span>{editing ? "Update" : "Submit"}</span>
                          </button>
                        </div>
                        {#if editing}
                          <div class="control">
                            <button
                              class="button is-primary is-outlined"
                              on:click={() => {
                                editing = false;
                                new_name = "";
                              }}
                            >
                              <span>Reset</span>
                            </button>
                          </div>
                        {/if}
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      {/if}
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
