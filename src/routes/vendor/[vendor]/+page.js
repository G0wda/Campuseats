import { vendorItems } from "$lib/data/vendorItems";

export const load = async ({ params }) => {
    const category = params.vendor; // Dynamically fetched from the URL params
    const categoryData = vendorItems[category]; // Use params to get data

    return {
        category,
        categoryData,
    };
};
