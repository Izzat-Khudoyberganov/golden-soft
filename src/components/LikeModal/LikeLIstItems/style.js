import styled from "styled-components";
import { Button } from "@mui/material";
import { Colors, Flex } from "utils/index";
import { adaptiveValue } from "utils/variable";

const ProductWrapper = styled.div`
    ${Flex.spaceBetween}
    width: 100%;
    height: 100%;

    &:not(:last-child) {
        margin-bottom: 20px;
    }
`;
const ImageWrapper = styled.div`
    width: 136px;
    height: 120px;
    overflow: hidden;

    & > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const ProductInfoWrapper = styled.div`
    ${Flex.spaceBetween}
`;
const ProductInfo = styled.div`
    ${Flex.spaceBetween}
    align-items: flex-start;
    flex-direction: column;
    gap: 30px;
    height: 100%;
`;

const ProductInfoTitle = styled.h3`
    ${adaptiveValue("font-size", 16, 12)}
    ${adaptiveValue("line-height", 26, 18)}
`;

const BtnGroup = styled.div`
    ${Flex.alignCenter};
    gap: 8px;
`;

const CounterBtn = styled.button`
    width: 16px;
    height: 16px;
    color: ${Colors.dark};

    &:disabled {
        color: ${Colors.borderColor};
    }
`;

const ProductCount = styled.span`
    padding: 5px 22px;
    border: 1px solid ${Colors.lightGray};
    color: ${Colors.dark};
`;

const Actions = styled.div`
    ${Flex.center};
    gap: 30px;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
`;
const Block = styled.div`
    ${Flex.alignCenter}
    gap: 12px;
`;

const DeleteButton = styled(Button)`
    background-color: transparent;
    ${Flex.alignCenter};
    column-gap: 5px;
    text-transform: capitalize !important;
`;
export {
    ProductWrapper,
    ImageWrapper,
    ProductInfoWrapper,
    ProductInfo,
    BtnGroup,
    CounterBtn,
    ProductCount,
    ProductInfoTitle,
    Actions,
    Block,
    DeleteButton,
};
