import axios from 'axios';
import { useEffect, useState } from 'react';
import { requests } from '../utils/requests';
import { Movie } from '../utils/types';
import Row from './Row';

const Home = () => {
  const [netflixPopular, setNetflixPopular] = useState<Movie[]>([]);
  const [netflixTopRated, setNetflixTopRated] = useState<Movie[]>([]);
  const [netflixTrending, setNetflixTrending] = useState<Movie[]>([]);
  const [netflixHorror, setNetflixHorror] = useState<Movie[]>([]);
  const [netflixUpcoming, setNetflixUpcoming] = useState<Movie[]>([]);

  const setAllMovies = async () => {
    await Promise.all([
      axios.get(requests.requestPopular).then((res) => {
        setNetflixPopular(res.data.results);
      }),
      axios.get(requests.requestTopRated).then((res) => {
        setNetflixTopRated(res.data.results);
      }),
      axios.get(requests.requestTrending).then((res) => {
        setNetflixTrending(res.data.results);
      }),
      axios.get(requests.requestHorror).then((res) => {
        setNetflixHorror(res.data.results);
      }),
      axios.get(requests.requestUpcoming).then((res) => {
        setNetflixUpcoming(res.data.results);
      }),
    ]);

    // await axios
    //   .get(requests.requestPopular)
    //   .then((res) => setNetflixPopular(res.data.results));
  };

  useEffect(() => {
    setAllMovies();
  }, []);

  const movie = netflixUpcoming[0];

  // const truncateString = (str: string, num: number): string => {
  //   if (str.length > num) {
  //     return str.slice(0, num) + '...';
  //   } else {
  //     return str;
  //   }
  // };

  return (
    <div>
      <div className="w-full h-[550px] text-white">
        <div className="w-full h-full">
          <div className="absolute w-full h-[550px] bg-gradient-to-r from-black" />
          <img
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt={movie?.title}
          />

          <div className="absolute w-full top-[20%] p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
            <div className="my-4">
              <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
                Play
              </button>
              <button className="border text-white border-gray-300 py-2 px-5 ml-4">
                Watch Later
              </button>
            </div>

            <p className="text-gray-400 text-sm">
              Released: {movie?.release_date}
            </p>

            <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
              {/* {truncateString(movie?.overview, 150)} */}
            </p>
          </div>
        </div>
      </div>
      <Row rowId="1" movies={netflixPopular} title="Popular" />
      <Row rowId="2" movies={netflixTopRated} title="Top Rated" />
      <Row rowId="3" movies={netflixTrending} title="Trending" />
      <Row rowId="4" movies={netflixHorror} title="Horror" />
      <Row rowId="5" movies={netflixUpcoming} title="Up coming" />
    </div>
  );
};

export default Home;
