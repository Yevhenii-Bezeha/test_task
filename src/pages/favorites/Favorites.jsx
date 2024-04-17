import React from "react";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favorites/selectors";
import { CatalogList, CatalogWrapper } from "../catalog/Catalog.styled";
import { OneCar } from "../../components/oneCar/OneCar";

export const Favorites = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <CatalogWrapper>
      <CatalogList>
        {favorites?.length ? (
          favorites?.map((favoriteCar) => {
            return <OneCar key={favoriteCar._id} car={favoriteCar} />;
          })
        ) : (
          <h3>
            There are no favorites cars yet😭 Tap on the "heart" symbol to add
            favorites cars to list!
          </h3>
        )}
      </CatalogList>
    </CatalogWrapper>
  );
};
