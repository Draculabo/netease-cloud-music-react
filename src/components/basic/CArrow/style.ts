import styled from "styled-components";

interface CArrowProps {
    width: number;
    height: number;
}
export const CArrow = styled.a<CArrowProps>`
    width: ${props => props.width + "px"};
    height: ${props => props.height + "px"};
`;
