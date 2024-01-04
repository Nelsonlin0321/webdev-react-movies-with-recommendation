let genres = [
  "Drama",
  "Horror",
  "Western",
  "Fantasy",
  "Children's",
  "Romance",
  "Mystery",
  "Animation",
  "Thriller",
  "War",
  "Musical",
  "Sci-Fi",
  "Documentary",
  "Crime",
  "Comedy",
  "Adventure",
  "Film-Noir",
  "Action",
];

genres.sort((a, b) => a.localeCompare(b));

const all_genres = ["All", ...genres];

export default all_genres;
