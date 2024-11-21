import API_ENDPOINT from "../globals/api-endpoint";

class RestoDbSource {
    static async getRestaurantList() {
        try {
            const response = await fetch(API_ENDPOINT.MAIN);
            const responseJson = await response.json();
            if (!response.ok) {
                throw new Error(responseJson.message);
            }
            return responseJson.restaurants;
        } catch (error) {
            console.error(error.message);
            throw new Error("Failed to fetch restaurant list.");
        }
    }

    static async getRestaurantDetail(id) {
        try {
            const response = await fetch(API_ENDPOINT.DETAIL(id));
            const responseJson = await response.json();
            if (!response.ok) {
                throw new Error(responseJson.message);
            }
            return responseJson.restaurant;
        } catch (error) {
            console.error(error.message);
            throw new Error(`Failed to fetch details for restaurant with id: ${id}`);
        }
    }
}

export default RestoDbSource;
