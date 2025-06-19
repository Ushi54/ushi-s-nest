'use client';

import { Box, Card, CardActionArea, CardContent, CardMedia, Stack, Typography, Grid } from '@mui/material';
import Link from 'next/link';
import theme from '../theme';

interface ContentsCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
}

export default function ContentsCard({ title, description, image, url }: ContentsCardProps) {
  return (
    <Grid item xs={12} sm={6}>
      <Link href={url} style={{ textDecoration: 'none' }} target='_blank'>
        <Card sx={{
          height: '100%',
          borderRadius: '20px',
          [theme.breakpoints.down('sm')]: {
            height: '500'
          }
        }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image={image}
              alt={title}
              sx={{
                p: 1,
                borderRadius: '20px 20PX 0 0 ',
              }}
            />
            <CardContent
              sx={{
                height: '120px',
                [theme.breakpoints.down('sm')]: {
                  height: '250px'
                }
              }}
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

