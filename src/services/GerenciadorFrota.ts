// src/services/GerenciadorFrota.ts

import { Veiculo } from '../models/Veiculo';
import { Motorista } from '../models/Motorista';

/**
 * Classe GerenciadorFrota.
 * Contém a lógica de negócio do sistema.
 */
export class GerenciadorFrota {
    private veiculos: Veiculo[] = [];
    private motoristas: Motorista[] = [];

    /**
     * Adiciona um veículo à frota.
     */
    public adicionarVeiculo(veiculo: Veiculo): void {
        this.veiculos.push(veiculo);
        console.log(`\nVeículo "${veiculo.getModelo()}" adicionado à frota.`);
    }

    /**
     * Adiciona um motorista ao sistema.
     */
    public adicionarMotorista(motorista: Motorista): void {
        this.motoristas.push(motorista);
        console.log(`Motorista "${motorista.nome}" adicionado.`);
    }

    /**
     * Lista todos os veículos usando Polimorfismo.
     * O método obterDescricao() se comporta de forma diferente para Carro e Caminhão.
     */
    public listarVeiculos(): void {
        console.log('\n--- Lista de Veículos na Frota ---');
        if (this.veiculos.length === 0) {
            console.log('A frota está vazia.');
            return;
        }

        this.veiculos.forEach((veiculo, index) => {
            // Chamada Polimórfica!
            console.log(`${index + 1}. ${veiculo.obterDescricao()}`);
        });
        console.log('----------------------------------');
    }

    /**
     * Associa um motorista a um veículo.
     */
    public atribuirMotorista(modeloVeiculo: string, nomeMotorista: string): boolean {
        // Encontra o veículo pelo modelo
        const veiculo = this.veiculos.find(v => v.getModelo() === modeloVeiculo);
        // Encontra o motorista pelo nome
        const motorista = this.motoristas.find(m => m.nome === nomeMotorista);

        if (!veiculo) {
            console.error(`\nErro: Veículo com modelo "${modeloVeiculo}" não encontrado.`);
            return false;
        }

        if (!motorista) {
            console.error(`\nErro: Motorista com nome "${nomeMotorista}" não encontrado.`);
            return false;
        }

        // Associa o nome do motorista ao atributo público do veículo
        veiculo.motorista = motorista.nome;
        console.log(`\nSucesso: Motorista ${motorista.nome} atribuído ao veículo ${veiculo.getModelo()}.`);
        return true;
    }
}
