import styled from "styled-components";
import { NumeroMegaSena } from "../NumeroMegaSena";
import { PropsListaNumeros } from "../../types";

export function ListaNumerosMegaSena ({lista}: PropsListaNumeros) {
    return(
        <>
            {lista && (<ListaStl>
                {lista.map((n, index) => (
                    <ItemStl key={index}>
                        <NumeroMegaSena numero={n} />
                    </ItemStl>
                ))}
            </ListaStl>)}
        </>
    );
}

const ListaStl = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    width: fit-content;
`;

const ItemStl = styled.li`
    width: fit-content;
    padding-left: 6px;
    padding-right: 6px;
`;