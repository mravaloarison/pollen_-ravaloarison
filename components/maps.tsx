import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import dotenv from "dotenv";

export default function Maps({ lat, lng }: { lat: number; lng: number }) {
	dotenv.config();

	return (
		<APIProvider apiKey={process.env.GOOGLE_MAPS_API_KEY!}>
			<Map
				style={{ width: "100%", height: "100%" }}
				center={{ lat: lat, lng: lng }}
				defaultZoom={6}
				disableDefaultUI={true}
			>
				<Marker position={{ lat: lat, lng: lng }} />
			</Map>
		</APIProvider>
	);
}
