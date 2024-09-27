"use client";

import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import Autocomplete from "@mui/joy/Autocomplete";
import { Button } from "@mui/joy";
import { TravelExplore } from "@mui/icons-material";
import CircularProgress from "@mui/joy/CircularProgress";

import { useState } from "react";
import { AutoCompleteAPI } from "./func1";

export default function Search({
	changeLocation,
}: {
	changeLocation: (location: string) => void;
}) {
	const [autoCompleteOpt, setAutoCompleteOpt] = useState<string[]>([]);
	const [loading, setLoading] = useState(false);
	const [loadPrediction, setLoadPrediction] = useState(false);
	const [selectedLocation, setSelectedLocation] = useState<string | null>(
		null
	);

	const handleInputChange = async (input: string) => {
		if (input.length < 3) {
			setAutoCompleteOpt([]);
			return;
		}

		AutoCompleteAPI(input, setAutoCompleteOpt, setLoadPrediction);
	};

	const searchTriggered = async () => {
		setLoading(true);

		if (!selectedLocation) {
			setLoading(false);
			return;
		}

		changeLocation(selectedLocation);

		setLoading(false);
	};

	return (
		<div>
			<Stack
				spacing={2}
				direction={{ sm: "row", xs: "column" }}
				sx={{ mb: 2 }}
			>
				<Autocomplete
					sx={{ flex: 1 }}
					size="lg"
					value={selectedLocation}
					onChange={(
						event: React.SyntheticEvent,
						newValue: string | null
					) => setSelectedLocation(newValue ?? "")}
					options={autoCompleteOpt}
					onInputChange={(
						event: React.SyntheticEvent<Element, Event>,
						value: string
					) => handleInputChange(value)}
					disabled={loading}
					loading={loadPrediction}
					endDecorator={
						loadPrediction ? (
							<CircularProgress
								size="sm"
								sx={{ bgcolor: "background.surface" }}
							/>
						) : null
					}
				/>
				<Button
					variant="outlined"
					disabled={loading || !selectedLocation}
					size="lg"
					loading={loading}
					loadingPosition="start"
					startDecorator={<TravelExplore />}
					onClick={searchTriggered}
				>
					search
				</Button>
			</Stack>
			<Typography
				level="body-sm"
				startDecorator={loading && <CircularProgress size="sm" />}
			>
				{loading ? (
					"loading ..."
				) : (
					<>
						{selectedLocation
							? "Potential plants Found"
							: "Potential plants results from your place search will be shown below"}
					</>
				)}
			</Typography>
		</div>
	);
}
