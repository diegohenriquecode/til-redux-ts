import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../Store";
import { addProductToCartRequest } from "../Store/modules/cart/actions";
import { IProduct } from "../Store/modules/cart/types";

interface CatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const hasFailedStockCheck = useSelector<IState, boolean>((state) => {
    return state.cart.faieldStockCheck.includes(product.id);
  });

  const handleAddProductToCard = useCallback(() => {
    dispatch(addProductToCartRequest(product));
  }, [dispatch, product]);

  return (
    <article>
      <strong>{product.title}</strong> {" - "}
      <strong>{product.price}</strong> {"  "}
      <button type="button" onClick={handleAddProductToCard}>
        Comprar
      </button>
      {hasFailedStockCheck && (
        <span style={{ color: "red" }}>Falta de estoque</span>
      )}
    </article>
  );
};

export default CatalogItem;
