import { writable } from "svelte/store";

export const filters = writable({
  boards: null,
  levels: null,
  papers: null,
  years: null,
  sessions: null,
});

export const sort = writable("title");
