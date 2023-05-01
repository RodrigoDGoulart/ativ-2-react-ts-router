interface PropsNumero {
    numero: string;
}

interface PropsListaNumeros {
    lista?: string[];
}

interface PropsTitulo {
    children: string;
    cor: 'verde' | 'roxo' | 'azul';
    tamanho: 'grande' | 'medio';
}

interface PropsDescricao {
    children: string;
}

interface LoteriaContextProps {
    megasena: LoteriaProps;
    lotofacil: LoteriaProps;
}

interface LoteriaProps {
    acumulado: boolean,
    concursoEspecial: boolean,
    dataApuracao: string,
    dataPorExtenso: string,
    dataProximoConcurso: string,
    dezenas: string[],
    numeroDoConcurso: number,
    quantidadeGanhadores: number,
    tipoJogo: string,
    valorEstimadoProximoConcurso: number,
    valorPremio: number
}

export type {
    PropsNumero,
    PropsListaNumeros,
    PropsTitulo,
    PropsDescricao,
    LoteriaContextProps,
    LoteriaProps
};