// src/models/Motorista.ts

/**
 * Classe Motorista.
 * Aplica Encapsulamento: CPF e CNH protegidos com getters e setters.
 */
export class Motorista {
    // Atributos privados
    private _cpf: string;
    private _cnh: string;
    public nome: string;

    constructor(nome: string, cpf: string, cnh: string) {
        this.nome = nome;
        this._cpf = cpf;
        this._cnh = cnh;
    }

    /**
     * Getter para CNH (Apenas leitura para proteção).
     */
    public get cnh(): string {
        return this._cnh;
    }

    /**
     * Getter para CPF (Apenas leitura para proteção).
     */
    public get cpf(): string {
        return this._cpf;
    }
    
    // NOTA: Não incluímos setters para CPF/CNH, garantindo que não sejam alterados após a criação.

    /**
     * Método para simular a ação de dirigir.
     */
    public dirigir(): void {
        console.log(`Motorista ${this.nome} está dirigindo.`);
    }

    /**
     * Método para obter informações básicas.
     */
    public obterDetalhes(): string {
        return `Motorista: ${this.nome} | CPF: ${this._cpf} | CNH: ${this._cnh}`;
    }
}
