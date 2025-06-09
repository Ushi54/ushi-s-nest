'use client';

import { Box, Card, CardActionArea, CardContent, CardMedia, Stack, Typography, Grid } from '@mui/material';

interface ContentsCardProps {
  title: string;
  description: string;
  image: string;
}

export default function ContentsCard({ title, description, image }: ContentsCardProps) {
  return (
    <Grid item xs={12} sm={6}>
      <Card sx={{ height: '100%' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

