import { PRODUCT_LIST, PRODUCT_ADD, PRODUCT_ADD_ERROR, PRODUCT_CLOSE_NOTIFICATION, PRODUCT_DELETE } from '../utils/constant';

const productList = {
        products: [],
        error: {},
        success: {
            display: 'false',
            message: ''
        }
};

export default function (state = [], action) {
    switch(action.type){
        case PRODUCT_LIST:
            return {
                    ...state,
                    productList: 
                        {
                            products: action.payload,
                            error: {},
                            success: {
                                display: 'false',
                                message: ''
                            }
                        }
                    };
        case PRODUCT_ADD:
            return {
                    ...state,
                    productList: 
                        {
                            products: [...state.productList.products, action.payload],
                            error: {},
                            success: {
                                display: 'true',
                                message: "Product Added!"
                            }
                        }
                    };
        case PRODUCT_ADD_ERROR:
        return {
            ...state,
            productList: 
                {
                    products: [...state.productList.products],
                    error: action.payload,
                    success: {
                        display: 'false',
                        message: ''
                    }
                }
            };
        case PRODUCT_CLOSE_NOTIFICATION:
            return {
                ...state,
                productList: 
                    {
                        products: [...state.productList.products],
                        error: {},
                        success: {
                            display: action.payload,
                            message: ''
                        }
                    }
                };
        case PRODUCT_DELETE:
                return {
                        ...state,
                        productList: 
                            {
                                products: [
                                        ...state.productList.products.slice(0, action.payload),
                                        ...state.productList.products.slice(action.payload + 1)
                                    ],
                                error: {},
                                success: {
                                    display: 'true',
                                    message: "Product Deleted!"
                                }
                            }
                        };
        default:
            return {state, productList}
    }
}