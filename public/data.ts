export interface Item {
    name: string;
    description: string;
    price: number;
    image: string;
    is_available: boolean;
    is_featured: boolean;
}

export interface FeatureItem {
    id: string;
    type: "featured";
    value: {
        name: string;
        price: number;
        is_available: boolean;
        image: {
            id: number
            title: string;
            width: number;
            height: number;
            url: string;
        }
    }
}

export interface SubCategory {
    name: string;
    items: Item[];
}

export interface Header {
    logo: string;
    title: string;
    description: string;
}

export interface Footer {
    location: string;
    google_map: string;
    phone: string;
    social: {
        facebook: string;
        instagram: string;
    }
    credit: string;
}

export interface Category {
    id: string;
    type: string;
    value: {
        name: string;
        thumbnail: string | number;
        subcategories: SubCategory[];
    };
}

export type BlockDataMap = {
    category: Category[]
    header: Header
    footer: Footer
    featured_items: FeatureItem[]
}

export type BlockKey = keyof BlockDataMap