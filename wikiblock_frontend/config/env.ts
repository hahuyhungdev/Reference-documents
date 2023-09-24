export const BASE_PATH = process.env.BASE_PATH;
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL as string;
export const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "https://cms.wikiblock.vn";
export const HOME_PAGE = process.env.NEXT_PUBLIC_HOME_PAGE;
export const FRONTEND_HOME_PAGE = process.env.NEXT_PUBLIC_FRONTEND_HOME_PAGE;
export const GOOGLE_MAP_KEY = process.env.GOOGLE_MAP_KEY;
export const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbx94ZFhTGsUzstEXJ7ArAHSkptxi1UKJvOroxYlziC0UI8fHcSbHnR5WOziIAeZzvB8/exec";
export const MAP_BOX_ACCESS_TOKEN = "pk.eyJ1Ijoidm92YW50cm9uZyIsImEiOiJjbDZ6NnkybnowMW1mM3ZvcWYzZHJqZ2x1In0.aL0RfVkr_carTY8KI0V2ig";
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL as string;

export const MAP_BOX_SEARCH_URL = "https://api.mapbox.com/geocoding/v5/mapbox.places";

export const SEO = {
	title: "wikiblock.vn",
	description: "wikiblock.vn",
	url: "https://wikiblock.vn",
	image: "/",
	favicon: BASE_PATH + "/favicon/favicon.png",
};
