import styled from "styled-components";
import { Titulo } from "../../components/Titulo";
import TrevoMegaSena from '../../assets/trevo-megasena.png';
import TrevoLotoFacil from '../../assets/trevo-lotofacil.png';
import { Descricao } from "../../components/Descricao";
import { ListaNumerosMegaSena } from "../../components/ListaNumerosMegaSena";
import { Divisoria } from "../../components/Divisoria";
import { useContexto } from "../../hooks";
import numeral from 'numeral';
import 'numeral/locales/pt-br';
import { LoteriaProps } from "../../types";
import { ListaNumerosLotoFacil } from "../../components/ListaNumerosLotoFacil";
import { useEffect } from "react";

export default function Resultados () {
    const {lotofacil, megasena} = useContexto();

    numeral.locale('pt-br');      

    const acumulou = (sena: LoteriaProps) => {
        if (sena.acumulado) {
            return 'ACUMULOU!';
        }
        return `${sena.quantidadeGanhadores} GANHADORES`
    }

    useEffect(() => {
        if(megasena.dataApuracao) {
            console.log('tem')
        } else {
            console.log('n tem')
        }
        // console.log(megasena)
    }, [megasena])
    return(
        <div>
            <ResultadoStl>
                {/* megasena */}
                <LeftStl>
                    <TituloStl>
                        <LogoStl src={TrevoMegaSena} alt='Mega-sena' />
                        <Titulo cor="verde" tamanho="grande">MEGA-SENA</Titulo>
                    </TituloStl>
                    <LeftContentStl>
                        <Descricao>
                            {`Estimativa de prêmio do próximo concurso. Sorteio em: ${megasena.dataProximoConcurso}`}
                        </Descricao>
                        <ValorStl>
                            <Titulo cor="verde" tamanho="medio">
                                {`R$${numeral(megasena.valorEstimadoProximoConcurso).format('0,0.00')}`}
                            </Titulo>
                        </ValorStl>
                    </LeftContentStl>
                </LeftStl>
                <RightStl>
                    <ListaNumerosMegaSena lista={megasena.dezenas} />
                    <GanhadoresStl>
                        <Titulo cor="azul" tamanho="grande">
                            {acumulou(megasena)}
                        </Titulo>
                    </GanhadoresStl>
                    <GanhadoresStl>
                        <Descricao>{`Concurso ${megasena.numeroDoConcurso} - ${megasena.dataPorExtenso}`}</Descricao>
                    </GanhadoresStl>
                </RightStl>
            </ResultadoStl>
            <DivisoriaStl><Divisoria /></DivisoriaStl>
            <ResultadoStl>
                {/* lotofacil */}
                <LeftStl>
                    <TituloStl>
                        <LogoStl src={TrevoLotoFacil} alt='Mega-sena' />
                        <Titulo cor="roxo" tamanho="grande">LOTOFÁCIL</Titulo>
                    </TituloStl>
                    <LeftContentStl>
                        <Descricao>
                            {`Estimativa de prêmio do próximo concurso. Sorteio em: ${lotofacil.dataProximoConcurso}`}
                        </Descricao>
                        <ValorStl>
                            <Titulo cor="roxo" tamanho="medio">
                                {`R$${numeral(lotofacil.valorEstimadoProximoConcurso).format('0,0.00')}`}
                            </Titulo>
                        </ValorStl>
                    </LeftContentStl>
                </LeftStl>
                <RightStl>
                    <ListaNumerosLotoFacil lista={lotofacil.dezenas} />
                    <GanhadoresStl>
                        <Titulo cor="azul" tamanho="grande">
                            {acumulou(lotofacil)}
                        </Titulo>
                    </GanhadoresStl>
                    <GanhadoresStl>
                        <Descricao>{`Concurso ${lotofacil.numeroDoConcurso} - ${lotofacil.dataPorExtenso}`}</Descricao>
                    </GanhadoresStl>
                </RightStl>
            </ResultadoStl>
        </div>
    );
}

const ResultadoStl = styled.div`
    display: flex;
    padding: 24px;
    margin: 24px;
`;

const DivisoriaStl = styled.div`
    margin: 24px;
`;

const LeftStl = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 365px;
    margin-right: 64px;
`;

const TituloStl = styled.span`
    display: flex;
    align-items: center;
    padding: 0;
    height: 48px;
    margin-bottom: 20px;
`;

const LeftContentStl = styled.div `
    margin-left: 48px;
    display: flex;
    flex-direction: column;
`;

const LogoStl = styled.img`
    margin-right: 12px
`;

const ValorStl = styled.span`
    margin-top: 12px;
`;

const RightStl = styled.div`
    display: flex;
    flex-direction: column;
    width: 36%
`;

const GanhadoresStl = styled.span`
    margin-top: 16px;
`;