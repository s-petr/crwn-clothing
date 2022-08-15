import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocumetns } from "../utils/firebase/firebase.utils";
// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils";
// import SHOP_DATA from "../shop-database.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
  setCategoriesMap: () => null,
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocumetns();
      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  // This code needs to run only once to seed the Firestore database
  // useEffect(() => {
  //   console.log(SHOP_DATA);
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
