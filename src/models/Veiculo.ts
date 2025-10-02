// src/models/Veiculo.ts

/**
 * Classe abstrata Veiculo.
 * Aplica Abstração: Define o que é comum a todos os veículos.
 */
export abstract class Veiculo {
    // Atributo privado para Encapsulamento, controla o status do veículo.
    private estaLigado: boolean = false;

    // Motorista opcional associado ao veículo.
    public motorista: string | null = null; 

    constructor(
        private modelo: string,
        private ano: number
    ) {}

    /**
     * Aplica Encapsulamento: Método público para ligar o veículo.
     */
    public ligar(): void {
        if (!this.estaLigado) {
            this.estaLigado = true;
            console.log(`[${this.modelo}] Veículo ligado.`);
        } else {
            console.log(`[${this.modelo}] O veículo já está ligado.`);
        }
    }

    /**
     * Aplica Encapsulamento: Método público para desligar o veículo.
     */
    public desligar(): void {
        if (this.estaLigado) {
            this.estaLigado = false;
            console.log(`[${this.modelo}] Veículo desligado.`);
        } else {
            console.log(`[${this.modelo}] O veículo já está desligado.`);
        }
    }

    /**
     * Retorna o status atual de ignição do veículo.
     */
    public obterStatus(): string {
        return this.estaLigado ? 'Ligado' : 'Desligado';
    }

    /**
     * Método genérico de aceleração.
     */
    public acelerar(): void {
        if (this.estaLigado) {
            console.log(`[${this.modelo}] Acelerando de forma genérica.`);
        } else {
            console.log(`[${this.modelo}] Não é possível acelerar. O veículo está desligado.`);
        }
    }

    // Abstração e Polimorfismo: Obriga as classes filhas a implementarem
    // este método para fornecer uma descrição específica.
    public abstract obterDescricao(): string;

    // Getters para acesso controlado aos atributos privados/protegidos
    public getModelo(): string {
        return this.modelo;
    }
    
    public getAno(): number {
        return this.ano;
    }
}
