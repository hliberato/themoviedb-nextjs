import MovieDetails from '@/components/movie-details/movie-details';
import Movie from '@/models/movie.model';
import MovieService from '@/services/movie.service';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const ids = ['574475', '1311844', '552524'];
  return ids.map((id) => ({ id }));
}

export const dynamicParams = true;
export const revalidate = 3600;

export default async function MoviePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const request = await MovieService.getMovieDetails(id);
  const movie: Movie = request.data;
  if (!movie) return notFound();

  return <MovieDetails movie={movie} />;
}
