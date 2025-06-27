'use client';

import ArrowRight from '@mui/icons-material/ArrowRight';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import Movie from '@/models/movie.model';
import { Button, Rating } from '@mui/material';
import { useRouter } from 'next/navigation';

type MovieCardProps = {
  movie: Movie;
};

export default function MovieCard({ movie }: MovieCardProps) {
  const router = useRouter();

  return (
    <Card>
      <CardMedia
        component="img"
        image={`https://image.tmdb.org/t/p/w154${movie.poster_path}`}
        alt={movie.title}
        sx={{ minHeight: 300 }}
      />
      <CardContent sx={{ textAlign: 'center' }}>
        <Rating
          name="read-only"
          value={movie.vote_average / 2}
          precision={0.5}
          readOnly
        />
        <Typography gutterBottom variant="body2" component="div" noWrap>
          {movie.title}
        </Typography>
        <Button size="small" onClick={() => router.push(`/movie/${movie.id}`)}>
          See Details
          <ArrowRight />
        </Button>
      </CardContent>
    </Card>
  );
}
