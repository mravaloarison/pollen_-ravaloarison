"use client";

import { useEffect, useState } from "react";
import { GeoCode, GetPollenData } from "./func";

import { CssVarsProvider } from "@mui/joy/styles";
import Box from "@mui/joy/Box";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";

import NavBar from "./navbar";

import HeaderSection from "./HeaderSection";
import Search from "./search";
import Maps from "./maps";
import PlantCard from "./plantCard";
import { CircularProgress, Grid } from "@mui/joy";
import { GetPlantsFromPollenData } from "./func1";

interface Plant {
	name: string;
	picture: string;
	inSeason: string;
	description: string;
	code: string;
	type: string;
}

interface Center {
	lat: number;
	lng: number;
}

export default function LoggedIn() {
	const [geoCodeFound, setGeoCodeFound] = useState<Array<string> | null>(
		null
	);
	const [locationSelected, setLocationSelected] = useState<string | null>(
		null
	);
	const [pollenFound, setPollenFound] = useState<Array<string> | null>(null);
	const [plantsFound, setPlantsFound] = useState<Plant[] | null>(null);
	const [loadingPlants, setLoadingPlants] = useState<Boolean>(false);
	const [defaultCenter, setDefaultCenter] = useState<Center>({
		lat: -20,
		lng: 47,
	});

	useEffect(() => {
		if (locationSelected) {
			GeoCode(locationSelected).then((data) => {
				const { lat, lng } = data.geometry.location;
				setGeoCodeFound([lat, lng]);
				setLoadingPlants(true);
			});
		}
	}, [locationSelected]);

	useEffect(() => {
		if (geoCodeFound) {
			GetPollenData({
				lat: parseFloat(geoCodeFound[0]),
				lng: parseFloat(geoCodeFound[1]),
			}).then((data) => {
				setPollenFound(data);
			});

			setDefaultCenter({
				lat: parseFloat(geoCodeFound[0]),
				lng: parseFloat(geoCodeFound[1]),
			});
		}
	}, [geoCodeFound]);

	useEffect(() => {
		if (pollenFound) {
			const plants = GetPlantsFromPollenData(pollenFound);
			setPlantsFound(plants);
			setLoadingPlants(false);
		}
	}, [pollenFound]);

	return (
		<CssVarsProvider disableTransitionOnChange>
			<NavBar />
			<Box
				component="main"
				sx={{
					height: "calc(100vh - 55px)",
					display: "grid",
					gridTemplateColumns: { xs: "auto", md: "50% 50%" },
					gridTemplateRows: "auto 1fr auto",
				}}
			>
				<Stack
					sx={{
						backgroundColor: "background.surface",
						px: { xs: 2, md: 4 },
						py: 2,
						borderBottom: "1px solid",
						borderColor: "divider",
					}}
				>
					<HeaderSection />
					<Search changeLocation={setLocationSelected} />
				</Stack>

				<Box
					sx={{
						gridRow: "span 3",
						display: { xs: "none", md: "flex" },
					}}
				>
					<Maps lat={defaultCenter.lat} lng={defaultCenter.lng} />
				</Box>

				<Grid
					container
					spacing={{ xs: 2, md: 4 }}
					sx={{
						px: { xs: 2, md: 4 },
						pt: { xs: 2, md: 4 },
						minHeight: 0,
						flexFlow: 1,
						justifyContent: "center",
						overflow: "auto",
					}}
				>
					{loadingPlants ? (
						<Grid
							minHeight="280px"
							justifyContent="center"
							alignContent="center"
							alignItems="center"
						>
							<CircularProgress color="success" />
						</Grid>
					) : (
						<>
							{plantsFound?.map((plant) => (
								<>
									{plant.picture && (
										<Grid xs={8} md={6} key={plant.code}>
											<PlantCard
												plantLink={plant.picture}
												plantName={plant.name}
												plantInSeason={plant.type}
												plantDescription={
													plant.description
												}
											/>
										</Grid>
									)}
								</>
							))}
						</>
					)}
				</Grid>
				<Box component="footer" sx={{ py: 3 }}>
					<Typography level="body-xs" sx={{ textAlign: "center" }}>
						© By Rava, {new Date().getFullYear()}
					</Typography>
				</Box>
			</Box>
		</CssVarsProvider>
	);
}
