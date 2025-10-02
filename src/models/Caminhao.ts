// src/models/Caminhao.ts

import { Veiculo } from './Veiculo';

/**
 * Classe Caminhao herda de Veiculo.
 * Aplica Herança e Polimorfismo.
 */
export class Caminhao extends Veiculo {
    constructor(
        modelo: string,
        ano: number,
        private capacidadeCarga: number // Capacidade de Carga em toneladas. Atributo específico
    ) {
        // Chama o construtor da classe base (Veiculo)
        super(modelo, ano);
    }

    /**
     * Polimorfismo: Sobrescreve o método para retornar uma descrição específica.
     */
    public obterDescricao(): string {
        // Obtém o nome do motorista para inclusão na descrição
        const infoMotorista = this.motorista ? `Motorista: ${this.motorista}` : 'Sem Motorista Atribuído';

        return (
            `Caminhão: ${this.getModelo()} | Ano: ${this.getAno()} | Carga Máxima: ${this.capacidadeCarga}t ` +
            `| Status: ${this.obterStatus()} | ${infoMotorista}`
        );
    }

    // Getter para atributo específico
    public getCapacidadeCarga(): number {
        return this.capacidadeCarga;
    }
}
