import type { Metadata } from "next";
import "@fontsource/inter";
import "./globals.css";

export const metadata: Metadata = {
	title: "Pollen apps",
	description: "",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<script
				async
				src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&libraries=places&callback=initMap`}
			></script>
			<body>{children}</body>
		</html>
	);
}
