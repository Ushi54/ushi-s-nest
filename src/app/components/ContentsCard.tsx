'use client';

import { Box, Card, CardActionArea, CardContent, CardMedia, Stack, Typography, Grid } from '@mui/material';
import Link from 'next/link';

interface ContentsCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
}

export default function ContentsCard({ title, description, image, url }: ContentsCardProps) {
  return (
    <Grid item xs={6} sm={6}>
      <Link href={url} style={{ textDecoration: 'none' }}>
        <Card sx={{ height: '100%' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="100"
              image={image}
              alt={title}
            />
            <CardContent
              sx={{ height: '120px' }}
            >
              <Typography gutterBottom variant="h6" component="div">
                {title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
}

