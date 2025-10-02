// src/models/Carro.ts

import { Veiculo } from './Veiculo';

/**
 * Classe Carro herda de Veiculo.
 * Aplica Herança e Polimorfismo.
 */
export class Carro extends Veiculo {
    constructor(
        modelo: string,
        ano: number,
        private numeroPortas: number // Atributo específico
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
            `Carro: ${this.getModelo()} | Ano: ${this.getAno()} | Portas: ${this.numeroPortas} ` +
            `| Status: ${this.obterStatus()} | ${infoMotorista}`
        );
    }

    // Getter para atributo específico
    public getNumeroPortas(): number {
        return this.numeroPortas;
    }
}
