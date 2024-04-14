export const saveSearchTermToLocalStorage = (term: string) => {
  if (term != "") {
    const searchTerms = JSON.parse(localStorage.getItem("searchTerms") || "[]");
    searchTerms.push(term);
    localStorage.setItem("searchTerms", JSON.stringify(searchTerms));
  }
};
