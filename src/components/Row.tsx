import { Movie } from '../utils/types';
import MovieComponent from './movie-component.component';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

interface Props {
  movies: Movie[];
  title: string;
  rowId: string;
}

const Row: React.FC<Props> = ({ movies, title, rowId }) => {
  const slideLeft = () => {
    let slider = document.getElementById('slider' + rowId);
    slider!.scrollLeft -= 500;
  };

  const slideRight = () => {
    let slider = document.getElementById('slider' + rowId);
    slider!.scrollLeft += 500;
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4kk">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={() => slideLeft()}
          size={40}
          className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block left-0"
        />
        <div
          id={'slider' + rowId}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((movie, index) => (
            <MovieComponent movie={movie} key={index} />
          ))}
        </div>
        <MdChevronRight
          onClick={() => slideRight()}
          className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block right-0"
          size={40}
        />
      </div>
    </>
  );
};

export default Row;
