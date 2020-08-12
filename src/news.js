const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=5b1cb3b6fb64434f9a20ff9c22d802bc";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}