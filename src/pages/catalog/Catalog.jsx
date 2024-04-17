import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCatalog, selectIsLoading } from "../../redux/catalog/selectors";
import { OneCar } from "../../components/oneCar/OneCar";
import { fetchCampersThunk } from "../../redux/catalog/operations";
import {
  CatalogList,
  CatalogWrapper,
  LoadMoreButton,
  LoaderWrapper,
} from "./Catalog.styled";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";

export const Catalog = () => {
  const catalog = useSelector(selectCatalog);
  const isLoading = useSelector(selectIsLoading);

  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampersThunk({ page: page, limit: 4 }))
      .unwrap()
      .catch((e) =>
        toast.error("Oops, something went wrong. Try to reload page")
      );
  }, [dispatch, page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <CatalogWrapper>
      {isLoading && (
        <LoaderWrapper>
          <ClipLoader color="#3470ff" />
        </LoaderWrapper>
      )}
      <CatalogList>
        {catalog?.map((car) => {
          return <OneCar key={car._id} car={car} />;
        })}
      </CatalogList>

      {page < 3 && !isLoading && (
        <LoadMoreButton
          type="button"
          onClick={handleLoadMore}
          disabled={isLoading}
        >
          Load more
        </LoadMoreButton>
      )}
    </CatalogWrapper>
  );
};
