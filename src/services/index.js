import { API_KEY } from '../config/index.js';

const threeMonthsAgo = () => {
  const date = new Date();
  date.setMonth(date.getMonth() - 3);

  const [ formatDate ] = date.toISOString().split('T');

  return formatDate;
}

/**
 * Get Movies or Series released at the last 3 months
 * @param {*} type movie || tv
 * @returns
 */
export const getNews = async (type) => {
  const releaseDate = threeMonthsAgo();
  const url = `https://api.themoviedb.org/3/discover/${type}?api_key=${API_KEY}&language=es-ES&sort_by=popularity.desc&primary_release_date.gte=${releaseDate}&include_adult=false&page=1`;

  try {
    const media = await fetch(url).then((data) => data.json());
    return media;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    return { page: 0, results: [], total_pages: 0, total_results: 0, error: true };
  }
};

const parseResults = (results) => (
  results.map((result) => {
    const media = result;
    media.name = result.name || result.title;
    return media;
  })
);

export const search = async (query) => {
  const url = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=es-ES&page=1&include_adult=false&query=${query}`;

  try {
    const media = await fetch(url).then((data) => data.json());
    media.results = parseResults(media.results);
    return media;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    return { page: 0, results: [], total_pages: 0, total_results: 0, error: true };
  }
};
