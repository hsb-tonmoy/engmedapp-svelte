<script>
  import { onMount } from "svelte";
  const API_URL = "http://localhost:8000/";
  const convertDate = (string_date) => {
    let date = new Date(string_date);
    return date.toLocaleDateString();
  };

  let questions = [];
  let boards = [];
  let levels = [];
  let papers = [];
  let years = [];
  let sessions = [];

  const fetchQuestions = async () => {
    const res = await fetch(API_URL + "questions/list/");
    const data = await res.json();

    questions = data;
  };

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
    fetchQuestions();
    fetchBoards();
    fetchLevels();
    fetchPapers();
    fetchBYears();
    fetchSessions();
  });
</script>

<section class="section">
  <div class="container">
    <div class="columns">
      <!-- Sidebar Start -->
      <div class="column is-3 is-offset-1">
        <!-- Search Panel -->
        <nav class="panel">
          <p class="panel-heading">Search</p>
          <div class="panel-block">
            <p class="control has-icons-left">
              <input class="input" type="text" placeholder="Search" />
              <span class="icon is-left">
                <i class="fas fa-search" aria-hidden="true" />
              </span>
            </p>
          </div>
        </nav>
        <!-- Boards Panel -->
        <nav class="panel">
          <p class="panel-heading">Boards</p>
          <div
            class="panel-block is-flex-direction-column is-align-items-flex-start"
          >
            {#each boards as board}
              <div class="field">
                <div class="control">
                  <label class="checkbox">
                    <input type="checkbox" />
                    {board.name}
                  </label>
                </div>
              </div>
            {/each}
          </div>
        </nav>
        <!-- Levels Panel -->
        <nav class="panel">
          <p class="panel-heading">Levels</p>
          <div
            class="panel-block is-flex-direction-column is-align-items-flex-start"
          >
            {#each levels as level}
              <label class="checkbox">
                <input type="checkbox" />
                {level.name}
              </label>
            {/each}
          </div>
        </nav>
        <!-- Papers Panel -->
        <nav class="panel">
          <p class="panel-heading">Papers</p>
          <div
            class="panel-block is-flex-direction-column is-align-items-flex-start"
          >
            {#each papers as paper}
              <label class="checkbox">
                <input type="checkbox" />
                {paper.name}
              </label>
            {/each}
          </div>
        </nav>
        <!-- Years Panel -->
        <nav class="panel">
          <p class="panel-heading">Years</p>
          <div
            class="panel-block is-flex-direction-column is-align-items-flex-start"
          >
            {#each years as year}
              <label class="checkbox">
                <input type="checkbox" />
                {year.name}
              </label>
            {/each}
          </div>
        </nav>
        <!-- Sessions Panel -->
        <nav class="panel">
          <p class="panel-heading">Sessions</p>
          <div
            class="panel-block is-flex-direction-column is-align-items-flex-start"
          >
            {#each sessions as session}
              <label class="checkbox">
                <input type="checkbox" />
                {session.name}
              </label>
            {/each}
          </div>
        </nav>
      </div>
      <!-- Sidebar End -->
      <div class="column is-9">
        {#each questions as question (question.slug)}
          <div class="card">
            <div class="card-content">
              <div class="content">
                <div class="columns is-vcentered">
                  <div class="column">
                    <nav
                      class="breadcrumb has-arrow-separator has-text-left"
                      aria-label="breadcrumbs"
                    >
                      <ul>
                        <li class="my-0">
                          <!-- svelte-ignore a11y-missing-attribute -->
                          <a href="#">{question.board.name}</a>
                        </li>
                        <li class="my-0">
                          <!-- svelte-ignore a11y-missing-attribute -->
                          <a href="#">{question.level.name}</a>
                        </li>
                        <li class="my-0">
                          <!-- svelte-ignore a11y-missing-attribute -->
                          <a href="#">{question.paper.name}</a>
                        </li>
                        <li class="my-0">
                          <!-- svelte-ignore a11y-missing-attribute -->
                          <a href="#">{question.year.name}</a>
                        </li>
                        <li class="my-0">
                          <!-- svelte-ignore a11y-missing-attribute -->
                          <a href="#">{question.session.name}</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div class="column has-text-right">
                    <span class="tag is-link is-light"
                      >Published: {convertDate(question.published)}</span
                    >
                  </div>
                </div>
                <!-- svelte-ignore a11y-missing-attribute -->
                <a href="/questions/{question.slug}">{question.title}</a>
              </div>
            </div>
            <footer class="card-footer">
              <!-- svelte-ignore a11y-missing-attribute -->
              <a href="#" class="card-footer-item">Explanations (20)</a>
              <!-- svelte-ignore a11y-missing-attribute -->
              <a href="#" class="card-footer-item">Add Explanation</a>
              <!-- svelte-ignore a11y-missing-attribute -->
              <a href="#" class="card-footer-item"
                ><span class="icon-text">
                  <span class="icon">
                    <i class="far fa-bookmark" />
                  </span>
                  <span>Bookmark</span>
                </span></a
              >
            </footer>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
