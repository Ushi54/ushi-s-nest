'use client';

import { Box, Card, CardActionArea, CardContent, CardMedia, Typography, Grid, Dialog, DialogTitle, DialogContent, Button } from '@mui/material';
import { useState } from 'react';

interface ContentsCardProps {
  title: string;
  description: string;
  image: string;
  buttons: { name: string; url: string }[];
}

export default function ContentsCard({ title, description, image, buttons }: ContentsCardProps) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Grid
        item
        xs={12}
        sm={6}
        md={3}
        sx={{
          maxWidth: {
            xs: '300px',
            sm: '300px',
            md: '300px',
          },
          margin: 'auto',
        }}
      >
        <Card
          sx={{
            height: '350px',
            borderRadius: '20px',
          }}
        >
          <CardActionArea onClick={handleOpen}>
            <CardMedia
              component="img"
              height="180"
              image={image}
              alt={title}
              sx={{
                p: 1,
                borderRadius: '20px 20px 0 0',
              }}
            />
            <CardContent
              sx={{
                height: '150px',
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
      </Grid>

      {/* モーダル */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {description}
          </Typography>
          {buttons.map((button, index) => (
            <Button
              key={index}
              variant="contained"
              color="primary"
              href={button.url}
              target="_blank"
              sx={{ textTransform: 'none', mb: 1 }}
            >
              {button.name}
            </Button>
          ))}
        </DialogContent>
      </Dialog>
    </>
  );
}

