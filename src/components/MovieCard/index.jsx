import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function MovieCard({ tittle, description, image, id }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();
  const handleDetail = () => {
    navigate(`/detail?movie_id=${id}`);
  };
  const handleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={handleDetail}>
        <CardMedia
          component="img"
          height="300"
          image={`https://image.tmdb.org/t/p/w500${image}`}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {tittle}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              maxHeight: 150,
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton aria-label="delete" onClick={handleFavorite}>
          {isFavorite ? (
            <FavoriteIcon sx={{ color: "red" }} />
          ) : (
            <FavoriteIcon />
          )}
        </IconButton>
      </CardActions>
    </Card>
  );
}
