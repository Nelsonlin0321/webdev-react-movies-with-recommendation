import { useQuery } from "@tanstack/react-query";
import { Movie, recommendationInputs } from "../types/movie";
import recommendationService from "../services/recommendationService";

const recommendMovies = (data: recommendationInputs) => {
  const recommend = () => recommendationService.recommend(data);

  return useQuery<Movie[]>({
    queryKey: ["recommendation"],
    queryFn: recommend,
    enabled: false,
    initialData: initialData,
  });
};

const initialData = [
  {
    movie_id: 750,
    title:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    genres: ["Sci-Fi", "War"],
    rating: 4.4,
    release_year: 1963,
    image_url:
      "http://d2gewc5xha837s.cloudfront.net/ml-1m-cover-images/750/000001.jpg",
  },
  {
    movie_id: 922,
    title: "Sunset Blvd. (a.k.a. Sunset Boulevard)",
    genres: ["Film-Noir"],
    rating: 4.5,
    release_year: 1950,
    image_url:
      "http://d2gewc5xha837s.cloudfront.net/ml-1m-cover-images/922/000001.jpg",
  },
  {
    movie_id: 2028,
    title: "Saving Private Ryan",
    genres: ["Action", "Drama", "War"],
    rating: 4.3,
    release_year: 1998,
    image_url:
      "http://d2gewc5xha837s.cloudfront.net/ml-1m-cover-images/2028/000001.jpg",
  },
  {
    movie_id: 3307,
    title: "City Lights",
    genres: ["Comedy", "Drama", "Romance"],
    rating: 4.4,
    release_year: 1931,
    image_url:
      "http://d2gewc5xha837s.cloudfront.net/ml-1m-cover-images/3307/000001.jpg",
  },
  {
    movie_id: 2324,
    title: "Life Is Beautiful (La Vita è bella)",
    genres: ["Comedy", "Drama"],
    rating: 4.3,
    release_year: 1997,
    image_url:
      "http://d2gewc5xha837s.cloudfront.net/ml-1m-cover-images/2324/000001.jpg",
  },
  {
    movie_id: 1197,
    title: "Princess Bride, The",
    genres: ["Action", "Adventure", "Comedy", "Romance"],
    rating: 4.3,
    release_year: 1987,
    image_url:
      "http://d2gewc5xha837s.cloudfront.net/ml-1m-cover-images/1197/000001.jpg",
  },
  {
    movie_id: 1267,
    title: "Manchurian Candidate, The",
    genres: ["Film-Noir", "Thriller"],
    rating: 4.3,
    release_year: 1962,
    image_url:
      "http://d2gewc5xha837s.cloudfront.net/ml-1m-cover-images/1267/000001.jpg",
  },
  {
    movie_id: 1210,
    title: "Star Wars: Episode VI - Return of the Jedi",
    genres: ["Action", "Adventure", "Romance", "Sci-Fi", "War"],
    rating: 4.0,
    release_year: 1983,
    image_url:
      "http://d2gewc5xha837s.cloudfront.net/ml-1m-cover-images/1210/000001.jpg",
  },
  {
    movie_id: 1237,
    title: "Seventh Seal, The (Sjunde inseglet, Det)",
    genres: ["Drama"],
    rating: 4.2,
    release_year: 1957,
    image_url:
      "http://d2gewc5xha837s.cloudfront.net/ml-1m-cover-images/1237/000001.jpg",
  },
  {
    movie_id: 3245,
    title: "I Am Cuba (Soy Cuba/Ya Kuba)",
    genres: ["Drama"],
    rating: 4.8,
    release_year: 1964,
    image_url:
      "http://d2gewc5xha837s.cloudfront.net/ml-1m-cover-images/3245/000001.jpg",
  },
];

export default recommendMovies;
