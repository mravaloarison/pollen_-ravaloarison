import * as React from "react";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";

export default function HeaderSection() {
	return (
		<Stack sx={{ mb: 2 }}>
			<Typography level="body-md" color="neutral">
				Start by typing a location of your choice
			</Typography>
		</Stack>
	);
}
