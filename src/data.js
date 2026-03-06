export const fetchCharacters = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzk2MDcxODFkYzU5YjA1NDlmODljNjQxYmFiYTg3MiIsIm5iZiI6MTc3Mjc0ODIyMi43OTQsInN1YiI6IjY5YTlmZGJlYmJjMjNhZGIyM2U4Y2NiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KeIGY6UMMd4WZNpq_7ICnXC_26bg5-3KwJeazdMy0hI',
    },
  };

  const response = await fetch(
    'https://api.themoviedb.org/3/tv/1396/credits',
    options,
  );
  const data = await response.json();
  return data.cast;
};
