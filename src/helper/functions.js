const convertToFa = (number) => {
  const persian = {
    0: "۰",
    1: "۱",
    2: "۲",
    3: "۳",
    4: "۴",
    5: "۵",
    6: "۶",
    7: "۷",
    8: "۸",
    9: "۹",
  };

  const numberWithCommas = number
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  let persianNumber = "";

  for (let i = 0; i < numberWithCommas.length; i++) {
    if (numberWithCommas[i] === ",") {
      persianNumber += numberWithCommas[i];
    } else {
      persianNumber += persian[numberWithCommas[i]];
    }
  }

  return persianNumber;
};

const enToFa = (number) => {
  const persian = {
    0: "۰",
    1: "۱",
    2: "۲",
    3: "۳",
    4: "۴",
    5: "۵",
    6: "۶",
    7: "۷",
    8: "۸",
    9: "۹",
  };

  const numberString = number.toString();
  let persianNumber = "";

  for (let i = 0; i < numberString.length; i++) {
    persianNumber += persian[numberString[i]];
  }

  return persianNumber;
};

const searchProducts = (products, search) => {
  if (!search) return products;

  const searchedProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search)
  );

  return searchedProducts;
};

const filterProducts = (products, category) => {
  if (!category) return products;
  const filteredProducts = products.filter(
    (product) => product.category === category
  );
  return filteredProducts;
};

const createQueryObject = (currentQuery, newQuery) => {
  if (newQuery.category === "همه") {
    const { category, ...rest } = currentQuery;
    return rest;
  }

  if (newQuery.search === "") {
    const { search, ...rest } = currentQuery;
    return rest;
  }
  return { ...currentQuery, ...newQuery };
};

const isInCart = (state, id) => {
  const result = !!state.selectedItems.find((item) => item.id === id);
  return result;
};

const isInFavorite = (state, id) => {
  const result = !!state.selectedItems.find((item) => item.id === id);
  return result;
};

const quantityCount = (state, id) => {
  const index = state.selectedItems.findIndex((item) => item.id === id);
  if (index === -1) {
    return false;
  } else {
    return state.selectedItems[index].quantity;
  }
};

const getInitialQuery = (searchParams) => {
  const query = {};
  const category = searchParams.get("category");
  const search = searchParams.get("search");

  if (category) query.category = category;
  if (search) query.search = search;
  return query;
};

const sumPrice = (products) => {
  return products.reduce(
    (total, product) => total + product.discountedPrice * product.quantity,
    0
  );
};

const sumDiscount = (products) => {
  return products.reduce(
    (total, product) =>
      total + (product.price - product.discountedPrice) * product.quantity,
    0
  );
};

const sumQuantity = (products) => {
  return products.reduce((total, product) => total + product.quantity, 0);
};

export {
  convertToFa,
  enToFa,
  searchProducts,
  filterProducts,
  createQueryObject,
  getInitialQuery,
  isInCart,
  isInFavorite,
  quantityCount,
  sumPrice,
  sumDiscount,
  sumQuantity,
};
