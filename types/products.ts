

export interface Product {
    _id: number; 
    productName: string;
    _type: "product";
    image? : {
        asset : {
            _ref : string;
            _type : "image";

        }
    }
    price : number;
    description? : string;
    // category : string;
    // inventory : number;
    // status : string;
    // colors? : string[];
    slug : {
        _type : "slug";
        current : string;
    };
    inventory : number;
}