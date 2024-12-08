import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { Experience } from "shared";

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Card sx={{ maxWidth: 345, maxHeight: "80vh" }}>
      <CardActionArea sx={{ height: "100%" }}>
        {/* <CardMedia component="img" height="140" image="" alt="project image">
          <img src={urls.IMAGES(project.imageUrls[0])} />
        </CardMedia> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {experience.title} @ {experience.companyName}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {experience.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
