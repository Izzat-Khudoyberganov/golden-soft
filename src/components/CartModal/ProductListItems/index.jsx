import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MainContext from "context/CartContext";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import * as S from "./style";

const ProductListItems = ({ product }) => {
    const { image, name, currentPrice, id, quantity } = product;
    const { removeFromCart, addOne, removeOne } = useContext(MainContext);

    return (
        <S.ProductWrapper>
            <S.Block>
                <Link to={`/product/detail/${id}`}>
                    <S.ImageWrapper>
                        <img src={image} alt={name} />
                    </S.ImageWrapper>
                </Link>
                <S.ProductInfoWrapper>
                    <S.ProductInfo>
                        <S.ProductInfoTitle>{name}</S.ProductInfoTitle>
                        <S.BtnGroup>
                            <S.CounterBtn onClick={() => removeOne(id)}>
                                -
                            </S.CounterBtn>
                            <S.ProductCount>{quantity}</S.ProductCount>
                            <S.CounterBtn onClick={() => addOne(id)}>
                                +
                            </S.CounterBtn>
                        </S.BtnGroup>
                    </S.ProductInfo>
                </S.ProductInfoWrapper>
            </S.Block>
            <S.Actions>
                <S.DeleteButton onClick={() => removeFromCart(id)}>
                    <DeleteOutlinedIcon color='primary' />
                    Удалить
                </S.DeleteButton>
                <p>{(currentPrice * quantity).toLocaleString()}</p>
            </S.Actions>
        </S.ProductWrapper>
    );
};

export default ProductListItems;
