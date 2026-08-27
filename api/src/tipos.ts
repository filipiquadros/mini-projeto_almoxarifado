export type StatusFerramenta = "disponivel" | "em_uso" | "manutenção";

export interface Ferramenta {
    id: number;
    nome: string;
    quantidade: number;
    status: StatusFerramenta;
}