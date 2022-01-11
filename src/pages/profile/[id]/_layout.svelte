<script>
  const API_URL = import.meta.env.VITE_API_URL;

  import { params } from "@roxi/routify";

  import authAxios from "../../../components/Auth/authAxios.js";

  let id = $params.id;

  let profile;
  let questions = [];

  $: questions_url = `questions/questions/?explanations__author__username=${scoped.profile.user.username}`;

  async function fetchprofile(id) {
    await authAxios
      .get(`${API_URL}accounts/profile/${id}`)
      .then((res) => {
        profile = res.data;
      })
      .catch((err) => console.log(err));
  }

  const fetchQuestions = async (page = 1) => {
    await authAxios
      .get(API_URL + questions_url + `&page=${page}`)
      .then((res) => {
        questions = res.data;
      })
      .catch((err) => console.log(err))
      .finally(() => (loading = false));
  };

  $: if (id) {
    fetchprofile(id);
    fetchQuestions();
  }
</script>

{#if profile}
  <slot scoped={{ profile, questions }}>Loading...</slot>
{/if}
