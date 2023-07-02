import React, { useContext } from "react";
import Rate from "components/Rate";
import { Button, IconButton } from "@mui/material";
import MainContext from "context/CartContext";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";
import * as S from "./style";

const ProductCard = ({ data, select, like }) => {
    const { inCash, image, name, currentPrice, oldPrice, id, mark } = data;

    const cartToggle = () => {
        return select ? removeFromCart(id) : addToCart(data);
    };
    const likeToggle = () => {
        return like ? removeFromLike(id) : addToLike(data);
    };
    const { addToCart, removeFromCart, addToLike, removeFromLike } =
        useContext(MainContext);
    return (
        <S.ProductCardWrapper>
            <S.ProductImageLink to={`/product/detail/${id}`}>
                <S.InCashTextBox>
                    <S.CashText>
                        {inCash ? "В наличии" : "Нет в наличии"}
                    </S.CashText>
                </S.InCashTextBox>
                <S.SaleBox>Sale</S.SaleBox>
                <S.ProductImage src={image} alt={name} />
            </S.ProductImageLink>
            <S.ProductCardInfo>
                <S.RateText>
                    <Rate mark={mark} />
                    <S.RateTextInfo>(12) отзывов</S.RateTextInfo>
                </S.RateText>

                <S.InfoTitle>{name}</S.InfoTitle>
                <S.PriceBoard>
                    <S.MainPrice>{currentPrice}</S.MainPrice>
                    <S.OldPrice>{oldPrice}</S.OldPrice>
                    <div>
                        <IconButton onClick={cartToggle}>
                            {select ? (
                                <LocalMallRoundedIcon color='primary' />
                            ) : (
                                <ShoppingBagOutlinedIcon />
                            )}
                        </IconButton>
                        <IconButton onClick={likeToggle}>
                            {like ? (
                                <FavoriteRoundedIcon color='error' />
                            ) : (
                                <FavoriteBorderOutlinedIcon color='error' />
                            )}
                        </IconButton>
                    </div>
                </S.PriceBoard>
            </S.ProductCardInfo>
        </S.ProductCardWrapper>
    );
};

export default ProductCard;
