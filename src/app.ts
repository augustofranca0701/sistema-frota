// src/app.ts

import { Carro } from './models/Carro';
import { Caminhao } from './models/Caminhao';
import { Motorista } from './models/Motorista';
import { Veiculo } from './models/Veiculo'; 
import { GerenciadorFrota } from './services/GerenciadorFrota';

console.log('=== Inicializando o Sistema de Gerenciamento de Frota ===');

// 1. Instanciar o GerenciadorFrota
const gerenciador = new GerenciadorFrota();

// --- Criação de Entidades ---

// 2. Criar Motoristas (Aluno A)
const motoristaA = new Motorista('Joana Darc', '111.222.333-44', '987654321');
const motoristaB = new Motorista('Pedro Álvares', '555.666.777-88', '123456789');

// Testando Encapsulamento de Motorista (acesso protegido ao CPF/CNH)
// Tentar alterar motoristaA.cpf resultaria em erro de TS, pois não há setter.
console.log(`\nDetalhes de ${motoristaA.nome}: CNH protegida: ${motoristaA.cnh}`); 

// 3. Criar Veículos (Aluno B)
// Usamos a tipagem da classe base Veiculo para demonstrar Polimorfismo
const carroFamiliar: Veiculo = new Carro('VW Gol', 2015, 4);
const caminhaoCarga: Veiculo = new Caminhao('Scania R450', 2024, 60);
const carroEsportivo: Veiculo = new Carro('Porsche 911', 2023, 2);


// --- Adicionar ao Gerenciador ---

gerenciador.adicionarMotorista(motoristaA);
gerenciador.adicionarMotorista(motoristaB);

gerenciador.adicionarVeiculo(carroFamiliar);
gerenciador.adicionarVeiculo(caminhaoCarga);
gerenciador.adicionarVeiculo(carroEsportivo);

// --- Testando Métodos e POO ---

// 4. Testando Encapsulamento de Veículo (ligar/desligar)
console.log('\n--- Teste de Encapsulamento de Veículo ---');
carroFamiliar.acelerar(); // Tenta acelerar desligado
carroFamiliar.ligar();
carroFamiliar.acelerar(); // Acelera ligado
carroFamiliar.desligar();

// 5. Listar Veículos (Polimorfismo em ação!)
console.log('\n--- Listagem de Veículos (Pré-Atribuição) ---');
gerenciador.listarVeiculos();

// 6. Atribuir Motoristas
gerenciador.atribuirMotorista(carroFamiliar.getModelo(), motoristaA.nome);
gerenciador.atribuirMotorista(caminhaoCarga.getModelo(), motoristaB.nome);

// Teste de erro: Motorista não encontrado
gerenciador.atribuirMotorista(carroEsportivo.getModelo(), 'Motorista Inexistente');

// 7. Listar novamente para ver as atribuições (Polimorfismo atualizado)
console.log('\n--- Listagem de Veículos (Pós-Atribuição) ---');
gerenciador.listarVeiculos();

// Testando o método específico do Motorista
console.log('\n--- Teste de Ação do Motorista ---');
motoristaA.dirigir();
