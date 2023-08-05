import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MainContext from "context/CartContext";
import AddIcon from "@mui/icons-material/Add";
import * as S from "./style";

const LikeListItems = ({ product, select }) => {
    const { image, name, currentPrice, id } = product;
    const { addToCart, removeFromCart } = useContext(MainContext);

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
                    </S.ProductInfo>
                </S.ProductInfoWrapper>
            </S.Block>
            <S.Actions>
                <S.DeleteButton onClick={() => addToCart(product)}>
                    <AddIcon color='primary' />
                    Add to cart
                </S.DeleteButton>
                <p>{currentPrice}</p>
            </S.Actions>
        </S.ProductWrapper>
    );
};

export default LikeListItems;
