import { useContexto } from "../../hooks"
import { Carregando } from "../Carregando";
import Resultados from "../Resultados";

export function Principal () {
    const {megasena} = useContexto();

    return (
        <>
            {
                megasena.dataApuracao ? (
                <Resultados />
                ) : (
                <Carregando />
                )
            }
        </>
    )
}