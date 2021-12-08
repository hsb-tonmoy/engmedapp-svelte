const API_URL = import.meta.env.VITE_API_URL + "questions/";

export const fetchBoards = async () => {
  const res = await fetch(API_URL + "board/");
  const data = await res.json();

  let boards = data;
  return boards;
};

export const fetchLevels = async () => {
  const res = await fetch(API_URL + "level/");
  const data = await res.json();

  let levels = data;
  return levels;
};
export const fetchPapers = async () => {
  const res = await fetch(API_URL + "paper/");
  const data = await res.json();

  let papers = data;
  return papers;
};
export const fetchBYears = async () => {
  const res = await fetch(API_URL + "year/");
  const data = await res.json();

  let years = data;
  return years;
};
export const fetchSessions = async () => {
  const res = await fetch(API_URL + "session/");
  const data = await res.json();

  let sessions = data;
  return sessions;
};
