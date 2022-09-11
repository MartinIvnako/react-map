export interface IShopOpeningHours {
    delta: number;
    label: string;
    value: string;
    comments: string;
}

export interface IShopCategory {
    category_of_units_color: string;
    image: string;
    intro_image: string;
    name: string;
}

export interface IShopMediaImage {
    media_image: string;
}

export interface IShop {
    title?: string;
    body?: string;
    nid?: string;
    field_shop_category?: string;
    view_node?: string;
    field_shop_logo?: string;
    field_shop_location_on_map?: string;
    field_floor?: string;
    field_shop_tags_export?: string[];
    field_contact_email_export?: string[];
    field_contact_phone_export?: string[];
    field_contact_url_export?: string[];
    field_opening_hours_export?: IShopOpeningHours[];
    field_shop_category_export?: IShopCategory[];
    field_shop_gallery_export?: IShopMediaImage[];
    [key: string]: any;
}
