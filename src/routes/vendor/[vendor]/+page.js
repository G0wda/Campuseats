import { vendorItems } from "$lib/data/vendorItems";

export const load = ({params}) => {
    const category = params.vendor;
    const categoryData = vendorItems[category];

    return {
        category,
        categoryData
    };
}