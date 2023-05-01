import styled from "styled-components"
import { PropsNumero } from "../../types";

export function NumeroMegaSena ({numero}: PropsNumero) {
    return(
        <SpanSld>
            {numero}
        </SpanSld>
    );
}

const SpanSld = styled.div`
    background-color: #209869;
    color: white;
    width: 48px;
    height: 48px;
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    font-weigth: bold;
`;