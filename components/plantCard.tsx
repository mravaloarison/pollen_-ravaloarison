import * as React from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import Divider from "@mui/joy/Divider";
import { Grass } from "@mui/icons-material";

export default function PlantCard({
	plantName,
	plantInSeason,
	plantDescription,
	plantLink,
}: {
	plantName: string;
	plantInSeason: string;
	plantDescription: string;
	plantLink: string;
}) {
	return (
		<Card sx={{ minHeight: "280px" }}>
			<CardCover>
				<img src={plantLink} loading="lazy" alt={plantName} />
			</CardCover>
			<CardCover
				sx={{
					background:
						"linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
				}}
			/>
			<CardContent sx={{ justifyContent: "flex-end" }}>
				<Typography level="title-lg" textColor="#fff">
					{plantName}
				</Typography>
				<Typography startDecorator={<Grass />} textColor="neutral.300">
					{plantInSeason}
				</Typography>
				<Divider />
				<Typography level="body-md" textColor="neutral.300">
					{plantDescription}
				</Typography>
			</CardContent>
		</Card>
	);
}
