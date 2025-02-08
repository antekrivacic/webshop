const BASE_URL = 'http://localhost:5000';

export const ITEMS_URL = BASE_URL + '/api/items';
export const ITEMS_TAGS_URL = ITEMS_URL + '/tags';
export const ITEMS_BY_SEARCH_URL = ITEMS_URL + '/search/';
export const ITEMS_BY_TAG_URL = ITEMS_URL + '/tag/';
export const ITEM_BY_ID_URL = ITEMS_URL + '/';

export const USER_LOGIN_URL = BASE_URL + '/api/users/login';
export const USER_REGISTER_URL = BASE_URL + '/api/users/register';
export const USER_EDIT_URL = BASE_URL + '/api/users/edit';

export const ORDERS_URL = BASE_URL + '/api/orders';
export const ORDER_CREATE_URL = ORDERS_URL + '/create';
export const ORDER_NEW_FOR_CURRENT_USER = ORDERS_URL + '/newOrderForCurrentUser';
export const ORDER_PAY_URL = ORDERS_URL + '/pay';
export const ORDER_TRACK_URL = ORDERS_URL + '/track/';

export const ALL_ORDRES_URL = ORDERS_URL + '/all';
export const ORDERED_ITEMS_URL = ORDERS_URL + '/orderedItems';
export const ORDER_CANCEL_URL = ORDERS_URL + '/cancel';
export const ORDER_EDIT_URL = ORDERS_URL + '/edit';