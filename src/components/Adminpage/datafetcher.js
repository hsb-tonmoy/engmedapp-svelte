const API_URL = "https://api.engmedapp.com/questions/";

export const fetchBoards = async () => {
  const res = await fetch(API_URL + "boards/");
  const data = await res.json();

  let boards = data;
  return boards;
};

export const fetchLevels = async () => {
  const res = await fetch(API_URL + "levels/");
  const data = await res.json();

  let levels = data;
  return levels;
};
export const fetchPapers = async () => {
  const res = await fetch(API_URL + "papers/");
  const data = await res.json();

  let papers = data;
  return papers;
};
export const fetchBYears = async () => {
  const res = await fetch(API_URL + "years/");
  const data = await res.json();

  let years = data;
  return years;
};
export const fetchSessions = async () => {
  const res = await fetch(API_URL + "sessions/");
  const data = await res.json();

  let sessions = data;
  return sessions;
};
