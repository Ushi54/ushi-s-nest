'use client';

import { Box, Card, CardActionArea, CardContent, CardMedia, Stack, Typography, Grid } from '@mui/material';

interface ContentsCardProps {
  title: string;
  description: string;
  image: string;
}

export default function ContentsCard({ title, description, image }: ContentsCardProps) {
  return (
    <Grid item xs={6} sm={6}>
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
    </Grid>
  );
}

