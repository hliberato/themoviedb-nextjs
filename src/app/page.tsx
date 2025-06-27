'use client';

import MovieCardSkeleton from '@/components/movie-card-skeleton/movie-card-skeleton';
import MovieCard from '@/components/movie-card/movie-card';
import MoviesPagination from '@/components/movies-pagination/movies-pagination';
import Movie from '@/models/movie.model';
import { Pagination as PaginationType } from '@/models/pagination.model';
import MovieService from '@/services/movie.service';
import { queryStore } from '@/store';
import { Box, Grid, Typography } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import Styles from './page.module.scss';

const MAX_PAGES = 500; // The maximum number of pages for the TMDB API

export default function Home() {
  const { query } = queryStore((state) => state);

  const [page, setPage] = useState<number>(1);
  const [moviesPagination, setMoviesPagination] =
    useState<PaginationType<Movie> | null>(null);

  const loadMovies = useCallback(() => {
    window.scrollTo(0, 0);
    setMoviesPagination(null);
    if (query) {
      MovieService.geMoviesByquery(query, page)
        .then((response) => {
          setMoviesPagination(response.data as PaginationType<Movie>);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      MovieService.getPopularMovies(page)
        .then((response) => {
          setMoviesPagination(response.data as PaginationType<Movie>);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [page, query]);

  useEffect(() => {
    loadMovies();
  }, [loadMovies]);

  const buildMovieCards = () => {
    const totalPages =
      (moviesPagination?.total_pages ?? 0) > MAX_PAGES
        ? MAX_PAGES
        : moviesPagination?.total_pages ?? 0;
    const moviesCount = (
      <>
        <Grid size={6}>
          {query && (
            <>
              Filtered by: <strong>{query}</strong>
            </>
          )}
        </Grid>
        <Grid size={6}>
          <Typography variant="body2" align="right">
            Showing {page * 20 - 19}-{page * 20} of {totalPages * 20} results
          </Typography>
        </Grid>
      </>
    );

    return (
      <>
        {moviesCount}
        {moviesPagination?.results.map((movie: Movie) => (
          <Grid key={movie.id} size={3}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
        <MoviesPagination
          page={page}
          maxPages={MAX_PAGES}
          handlePaginationChange={handlePaginationChange}
        />
      </>
    );
  };

  const handlePaginationChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const buildSkeletons = () => {
    return [...Array(20)].map((_, index) => (
      <Grid key={index} size={3} sx={{ marginTop: 4.5 }}>
        <MovieCardSkeleton />
      </Grid>
    ));
  };

  return (
    <Box sx={{ flexGrow: 1 }} className={Styles.moviesPage}>
      <Typography variant="h4">Popular Movies</Typography>
      <Typography variant="body1" gutterBottom>
        Discover the most popular movies right now.
      </Typography>
      <Grid container spacing={2}>
        {!!moviesPagination?.results ? buildMovieCards() : buildSkeletons()}
      </Grid>
    </Box>
  );
}
