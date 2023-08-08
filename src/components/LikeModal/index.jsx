import * as React from "react";
import Modal from "@mui/material/Modal";
import {
    CloseBtn,
    EmptyTitle,
    HeaderTitle,
    ModalBox,
    ModalBoxBody,
    ModalBoxHeader,
    ProductList,
} from "components/CartModal/style";
import { CloseIcon } from "assets/images/svgIcons";
import LikeListItems from "./LikeLIstItems";
import MainContext from "context/CartContext";

export default function LikeModal({ likeModal, handleLike, data }) {
    const { cartItems } = React.useContext(MainContext);
    return (
        <div>
            <Modal
                open={likeModal}
                onClose={handleLike}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                <ModalBox>
                    <ModalBoxHeader>
                        <HeaderTitle>Понравившиеся продукты</HeaderTitle>
                        <CloseBtn onClick={() => handleLike()}>
                            <CloseIcon />
                        </CloseBtn>
                    </ModalBoxHeader>
                    <ModalBoxBody isEmpty={!data.length}>
                        <ProductList>
                            {data.length ? (
                                data.map((el) => (
                                    <LikeListItems
                                        key={el.id}
                                        product={el}
                                        select={cartItems.find(
                                            (item) => item.id == el.id
                                        )}
                                    />
                                ))
                            ) : (
                                <EmptyTitle>
                                    Корзина на данный момент пуста 🤷‍♂️🤷‍♂️🤷‍♂️
                                </EmptyTitle>
                            )}
                        </ProductList>
                    </ModalBoxBody>
                </ModalBox>
            </Modal>
        </div>
    );
}
