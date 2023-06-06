import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "../Container/style";
import { Title } from "../WhyUs/style";
import * as S from "./style";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper";
import { SwiperNavBtn, SwiperNavigation } from "../Banner/style";
import { ArrowIcon } from "../../assets/images/svgIcons";
import { popularProductData } from "./data";

const PopularProducts = () => {
    const useSwiperRef = () => {
        const [wrapper, setWrapper] = useState(null);
        const ref = useRef(null);

        useEffect(() => {
            if (ref.current) {
                setWrapper(ref.current);
            }
        }, []);

        return [wrapper, ref];
    };

    const [nextEl, nextElRef] = useSwiperRef();
    const [prevEl, prevElRef] = useSwiperRef();
    return (
        <S.PopularWrapper>
            <Container>
                <S.PopularHeader>
                    <Title>Наши популярные продукты</Title>
                    <S.PopularSwiperNavigation>
                        <SwiperNavBtn ref={prevElRef}>
                            <ArrowIcon />
                        </SwiperNavBtn>
                        <SwiperNavBtn ref={nextElRef}>
                            <ArrowIcon
                                style={{ transform: "rotate(180deg)" }}
                            />
                        </SwiperNavBtn>
                    </S.PopularSwiperNavigation>
                </S.PopularHeader>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    navigation={{
                        prevEl,
                        nextEl,
                    }}
                    modules={[Navigation]}
                    className='mySwiper'
                >
                    {popularProductData.map((el) => (
                        <S.ProductCard key={el.id}>
                            <S.ProductImageLink to='/'>
                                <S.InCashTextBox>
                                    <S.CashText>
                                        {el.inCash
                                            ? "В наличии"
                                            : "Нет в наличии"}
                                    </S.CashText>
                                </S.InCashTextBox>
                                <S.SaleBox>Sale</S.SaleBox>
                                <img src={el.image} />
                            </S.ProductImageLink>
                            <S.ProductCardInfo>
                                <S.InfoTitle>{el.title}</S.InfoTitle>
                                <S.PriceBoard>
                                    <S.MainPrice>{el.main_price}</S.MainPrice>
                                    <S.OldPrice>{el.oldPrice}</S.OldPrice>
                                </S.PriceBoard>
                            </S.ProductCardInfo>
                        </S.ProductCard>
                    ))}
                </Swiper>
            </Container>
        </S.PopularWrapper>
    );
};

export default PopularProducts;