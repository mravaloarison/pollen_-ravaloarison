export function AutoCompleteAPI(
	userInput: string,
	setAutoCompleteOpt: (options: string[]) => void,
	setLoadPrediction: (loading: boolean) => void
) {
	const service = new google.maps.places.AutocompleteService();

	var displaySuggestoins = (
		predictions: google.maps.places.QueryAutocompletePrediction[] | null,
		status: google.maps.places.PlacesServiceStatus
	) => {
		if (
			status !== google.maps.places.PlacesServiceStatus.OK ||
			!predictions
		) {
			return;
		}

		setAutoCompleteOpt(
			predictions.map((prediction) => prediction.description)
		);
		setLoadPrediction(false);
	};

	service.getQueryPredictions(
		{
			input: userInput,
		},
		displaySuggestoins
	);
}

export function GetPlantsFromPollenData(pollenData: any) {
	// return the name, picture, in Season, and description of the plants
	const plants = pollenData.dailyInfo[0].plantInfo;
	return plants.map((plant: any) => {
		return {
			name: plant.plantDescription?.family,
			picture: plant.plantDescription?.picture,
			type: plant.plantDescription?.type,
			description: plant.plantDescription?.specialShapes,
			inSeason: plant.inSeason,
			code: plant.code,
		};
	});
}


const pollenDataExample = {
    "regionCode": "US",
    "dailyInfo": [
        {
            "date": {
                "year": 2024,
                "month": 9,
                "day": 26
            },
            "pollenTypeInfo": [
                {
                    "code": "GRASS",
                    "displayName": "Grass",
                    "inSeason": false,
                    "indexInfo": {
                        "code": "UPI",
                        "displayName": "Universal Pollen Index",
                        "value": 1,
                        "category": "Very Low",
                        "indexDescription": "People with very high allergy to pollen are likely to experience symptoms",
                        "color": {
                            "green": 0.61960787,
                            "blue": 0.22745098
                        }
                    },
                    "healthRecommendations": [
                        "Pollen levels are very low right now. It's a great day to enjoy the outdoors!"
                    ]
                },
                {
                    "code": "TREE",
                    "displayName": "Tree"
                },
                {
                    "code": "WEED",
                    "displayName": "Weed",
                    "inSeason": true,
                    "indexInfo": {
                        "code": "UPI",
                        "displayName": "Universal Pollen Index",
                        "value": 1,
                        "category": "Very Low",
                        "indexDescription": "People with very high allergy to pollen are likely to experience symptoms",
                        "color": {
                            "green": 0.61960787,
                            "blue": 0.22745098
                        }
                    },
                    "healthRecommendations": [
                        "Pollen levels are very low right now. It's a great day to enjoy the outdoors!"
                    ]
                }
            ],
            "plantInfo": [
                {
                    "code": "MAPLE",
                    "displayName": "Maple"
                },
                {
                    "code": "ELM",
                    "displayName": "Elm"
                },
                {
                    "code": "COTTONWOOD",
                    "displayName": "Cottonwood"
                },
                {
                    "code": "ALDER",
                    "displayName": "Alder"
                },
                {
                    "code": "BIRCH",
                    "displayName": "Birch"
                },
                {
                    "code": "ASH",
                    "displayName": "Ash"
                },
                {
                    "code": "PINE",
                    "displayName": "Pine"
                },
                {
                    "code": "OAK",
                    "displayName": "Oak"
                },
                {
                    "code": "JUNIPER",
                    "displayName": "Juniper"
                },
                {
                    "code": "GRAMINALES",
                    "displayName": "Grasses",
                    "inSeason": false,
                    "indexInfo": {
                        "code": "UPI",
                        "displayName": "Universal Pollen Index",
                        "value": 1,
                        "category": "Very Low",
                        "indexDescription": "People with very high allergy to pollen are likely to experience symptoms",
                        "color": {
                            "green": 0.61960787,
                            "blue": 0.22745098
                        }
                    },
                    "plantDescription": {
                        "type": "GRASS",
                        "family": "Poaceae",
                        "season": "Late spring, summer",
                        "specialColors": "None",
                        "specialShapes": "The leaves are alternate, long and narrow and the leaf margin is smooth.",
                        "crossReaction": "Plantain (Plantago) pollen. In addition, there may be a higher risk for food allergies like melons, oranges, tomatoes, peanuts, soy, potato, and other legumes.",
                        "picture": "https://storage.googleapis.com/pollen-pictures/graminales_full.jpg",
                        "pictureCloseup": "https://storage.googleapis.com/pollen-pictures/graminales_closeup.jpg"
                    }
                },
                {
                    "code": "RAGWEED",
                    "displayName": "Ragweed",
                    "inSeason": true,
                    "indexInfo": {
                        "code": "UPI",
                        "displayName": "Universal Pollen Index",
                        "value": 1,
                        "category": "Very Low",
                        "indexDescription": "People with very high allergy to pollen are likely to experience symptoms",
                        "color": {
                            "green": 0.61960787,
                            "blue": 0.22745098
                        }
                    },
                    "plantDescription": {
                        "type": "WEED",
                        "family": "Asteraceae (the daisy family)",
                        "season": "Late summer, fall",
                        "specialColors": "None",
                        "specialShapes": "The leaves are alternate or opposite, divided and lobed. The leaf margin is smooth or serrated.",
                        "crossReaction": "Mugwort and Goldenrod as well as daisies such as Sunflower, Dandelion, and Chamomile.",
                        "picture": "https://storage.googleapis.com/pollen-pictures/ragweed_full.jpg",
                        "pictureCloseup": "https://storage.googleapis.com/pollen-pictures/ragweed_closeup.jpg"
                    }
                }
            ]
        }
    ]
}