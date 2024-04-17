import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
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
import { SvgSymbols } from "../../images/svg/SvgSymbols";
import { Tabs } from "../tabs/Tabs";

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
      <SvgSymbols />
      <ModalWrapper>
        <div>
          <ItemHeaderModalWrapper>
            <h1>{car.name}</h1>
            <CloseModalButton type="button" onClick={closeModal}>
              <svg height={24}>
                <use href="#icon-x" width={24} height={24} />
              </svg>
            </CloseModalButton>
          </ItemHeaderModalWrapper>
          <ItemSubHeaderWrapper>
            <div>
              <svg width={18} height={18}>
                <use xlinkHref="#icon-normal" />
              </svg>
              <span>{car.rating}</span>
              <span>({car.reviews.length} Reviews)</span>
            </div>
            <div>
              <svg width={18} height={18}>
                <use xlinkHref="#icon-normal" />
              </svg>
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
