'use client';

import { Box, Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from '@mui/material';

interface ContentsCardProps {
  title: string;
  description: string;
  image: string;
}

export default function ContentsCard({ title, description, image }: ContentsCardProps) {
  return (
    <Box sx={{ p: 4 }}>
    <Card sx={{ maxWidth: 345 }}>
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
    </Box>
  );
}

