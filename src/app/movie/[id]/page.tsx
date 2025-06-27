import MovieDetails from '@/components/movie-details/movie-details';
import Movie from '@/models/movie.model';
import MovieService from '@/services/movie.service';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  const ids = ['574475', '1311844', '552524'];
  return ids.map((id) => ({ id }));
}

export const dynamicParams = true;
export const revalidate = 3600;

export default async function MoviePage({ params }: Props) {
  const request = await MovieService.getMovieDetails(params.id);
  const movie: Movie = request.data;
  if (!movie) return notFound();

  return <MovieDetails movie={movie} />;
}
