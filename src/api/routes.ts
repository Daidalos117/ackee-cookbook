const baseUrl = 'https://cookbook.ack.ee/api/v1/'

const createRoute = (route: string) => `${baseUrl}${route}`;

// get all the recipes
export const RECIPES = createRoute('recipes');
