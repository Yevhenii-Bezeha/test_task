import ReactDOM from "react-dom";
import React, { useEffect } from "react";
import {
  CloseModalButton,
  ItemDescrModalP,
  ItemHeaderModalWrapper,
  ModalWrapper,
  WrapperOverlay,
  ItemSubHeaderWrapper,
  ItemPrice,
  ImgList,
} from "./Modal.styled";
import { Tabs } from "../tabs/Tabs";
import { SvgWrapper } from "../svgWrapper/SvgWrapper";
import { ItemRating } from "../itemRating/ItemRating";

const rootModal = document.querySelector("#modal");

export const Modal = ({ car, closeModal }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "visible";
    };
  }, [closeModal]);

  const handleClickOut = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      closeModal();
    }
  };

  return ReactDOM.createPortal(
    <WrapperOverlay onClick={handleClickOut}>
      <ModalWrapper>
        <div>
          <ItemHeaderModalWrapper>
            <h1>{car.name}</h1>
            <CloseModalButton type="button" onClick={closeModal}>
              <SvgWrapper id="icon-close" />
            </CloseModalButton>
          </ItemHeaderModalWrapper>
          <ItemSubHeaderWrapper>
            <ItemRating
              rating={car.rating}
              reviewsCount={car.reviews.length}
            ></ItemRating>
            <div>
              <SvgWrapper id="icon-location" />
              <p>{car.location}</p>
            </div>
          </ItemSubHeaderWrapper>
          <ItemPrice>
            {"\u20AC"}
            {Number(car.price).toFixed(2)}
          </ItemPrice>
          <ImgList>
            {car?.gallery.map((img) => {
              return <img src={img} alt="Car" crossOrigin="anonymous" />;
            })}
          </ImgList>
          <ItemDescrModalP>{car.description}</ItemDescrModalP>
          <Tabs car={car}></Tabs>
        </div>
      </ModalWrapper>
    </WrapperOverlay>,
    rootModal
  );
};
