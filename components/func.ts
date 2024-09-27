"use server";

import dotenv from 'dotenv';

export const GeoCode = async (placesName: string) => {
	const formatedPlaceName = encodeURIComponent(placesName);

    dotenv.config();

	const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${formatedPlaceName}&key=${process.env.GOOGLE_MAPS_API_KEY}`;

	const response = await fetch(url);
	const data = await response.json();

	if (!data.results) return [];

	return data.results[0];
};

export const GetPollenData = async (
	position: { lat: number; lng: number },
) => {
	dotenv.config();

	const url = `https://pollen.googleapis.com/v1/forecast:lookup?key=${process.env.GOOGLE_MAPS_API_KEY}&location.longitude=${position.lng}&location.latitude=${position.lat}&days=1`;
	const response = await fetch(url);

	const data = await response.json();

	if (!data) return [];

	return data;
};