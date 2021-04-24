import { writable } from "svelte/store";
import {
  fetchBoards,
  fetchLevels,
  fetchPapers,
  fetchBYears,
  fetchSessions,
} from "../../components/Adminpage/datafetcher.js";

export const boards = writable([]);
export const levels = writable([]);
export const papers = writable([]);
export const years = writable([]);
export const sessions = writable([]);

boards.set(fetchBoards());
levels.set(fetchLevels());
papers.set(fetchPapers());
years.set(fetchBYears());
sessions.set(fetchSessions());

export const triggerBoardsfetch = async () => {
  boards.set(fetchBoards());
};
export const triggerLevelsfetch = async () => {
  levels.set(fetchLevels());
};
export const triggerPapersfetch = async () => {
  papers.set(fetchPapers());
};
export const triggerYearsfetch = async () => {
  years.set(fetchBYears());
};
export const triggerSessionsfetch = async () => {
  sessions.set(fetchSessions());
};
