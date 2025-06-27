import Movie from '@/models/movie.model';
import { Grid, Rating, Typography } from '@mui/material';
import Image from 'next/image';
import styles from './movie-details.module.scss';

type MovieDetailsProps = {
  movie: Movie;
};

export default function MovieDetails({ movie }: MovieDetailsProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.backdrop}>
        <div className={styles.backdrop}></div>
        <Image
          src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
          width={852}
          height={478}
          alt="Movie backdrop"
        />
      </div>
      <Grid container spacing={12} className={styles.details}>
        <Grid size={3}>
          <Image
            src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`}
            width={200}
            height={300}
            alt="Movie poster"
          />
        </Grid>
        <Grid size={9}>
          <Typography variant="h3" component="h3">
            {movie.title}
          </Typography>
          <Typography variant="h6" component="h6">
            {movie.tagline}
          </Typography>
          <Rating
            name="read-only"
            value={movie.vote_average / 2}
            precision={0.5}
            readOnly
            sx={{ margin: '.5rem 0' }}
          />
          <Typography variant="body1" component="p" gutterBottom>
            {movie.overview}
          </Typography>
          <Typography variant="subtitle2" component="p">
            Genres
          </Typography>
          <Typography variant="body2" component="p" gutterBottom>
            {movie.genres?.map((genre) => genre.name).join(', ')}
          </Typography>
          <Typography variant="subtitle2" component="p">
            Release date
          </Typography>
          <Typography variant="body2" component="p">
            {movie.release_date
              ? new Date(movie.release_date).toLocaleDateString('en-GB')
              : ''}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
