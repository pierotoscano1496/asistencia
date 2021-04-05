export type Motivo = { tipo: number, descripcion: string };
export type Estado = { tipo: number, descripcion: string };

export const motivos: Motivo[] = [
    { tipo: 1, descripcion: "Queja" },
    { tipo: 2, descripcion: "Inconveniente" },
    { tipo: 3, descripcion: "Contrato" }
];

export const estados: Estado[] = [
    { tipo: 1, descripcion: "En recepción" },
    { tipo: 2, descripcion: "En atención" },
    { tipo: 3, descripcion: "Atendido" }
]