import { describe, expect, it } from 'vitest';
import {
    somar,
    subtrair,
    multiplicar,
    dividir,
    elevar,
    fatorial,
    ehPar,
    media,
    ehPrimo,
    limitar,
    fibonacci
} from '../src/math.js';

describe('Biblioteca matematica.', () => {

    it('deve somar dois numeros.', () => {
        expect(somar(7, 4)).toBe(11);
        expect(somar(8, 0)).toBe(8);
        expect(somar(-5, 9)).toBe(4);
    });

    it('deve lançar erro ao somar valores não numericos', () => {
        expect(() => somar(7, '4')).toThrow('Os valores devem ser números.');
    });


    it('deve subtrair dois numeros.', () => {
        expect(subtrair(9, 4)).toBe(5);
        expect(subtrair(8, 0)).toBe(8);
        expect(subtrair(-3, 7)).toBe(-10);
    });

    it('deve lançar erro ao subtrair valores não numericos', () => {
        expect(() => subtrair(9, '4')).toThrow('Os valores devem ser números.');
    });


    it('deve multiplicar dois numeros.', () => {
        expect(multiplicar(4, 5)).toBe(20);
        expect(multiplicar(7, 0)).toBe(0);
        expect(multiplicar(-3, 6)).toBe(-18);
    });

    it('deve lançar erro ao multiplicar valores não numericos', () => {
        expect(() => multiplicar(4, '5')).toThrow('Os valores devem ser números.');
    });


    it('deve dividir dois numeros.', () => {
        expect(dividir(12, 4)).toBe(3);
        expect(dividir(20, 5)).toBe(4);
        expect(dividir(-15, 3)).toBe(-5);
    });

    it('deve lançar erro ao dividir valores não numericos', () => {
        expect(() => dividir(12, '4')).toThrow('Os valores devem ser números.');
    });

    it('deve lançar erro ao dividir por zero', () => {
        expect(() => dividir(12, 0)).toThrow('Divisão por zero não é permitida.');
    });


    it('deve elevar um numero a uma potencia.', () => {
        expect(elevar(3, 3)).toBe(27);
        expect(elevar(4, 2)).toBe(16);
        expect(elevar(7, 0)).toBe(1);
    });

    it('deve lançar erro ao elevar valores não numericos', () => {
        expect(() => elevar(3, '3')).toThrow('Os valores devem ser números.');
    });


    it('deve calcular o fatorial de um numero.', () => {
        expect(fatorial(6)).toBe(720);
        expect(fatorial(4)).toBe(24);
        expect(fatorial(1)).toBe(1);
    });

    it('deve lançar erro ao calcular fatorial de valor não numerico', () => {
        expect(() => fatorial('6')).toThrow('O valor deve ser um número.');
    });

    it('deve lançar erro ao calcular fatorial de numero negativo', () => {
        expect(() => fatorial(-6)).toThrow('Fatorial de número negativo não é permitido.');
    });


    it('deve verificar se um numero é par.', () => {
        expect(ehPar(8)).toBe(true);
        expect(ehPar(12)).toBe(true);
        expect(ehPar(7)).toBe(false);
    });

    it('deve lançar erro ao verificar valor não numerico', () => {
        expect(() => ehPar('8')).toThrow('O valor deve ser um número.');
    });


    it('deve calcular a media de numeros.', () => {
        expect(media([4, 8, 12])).toBe(8);
        expect(media([15, 25])).toBe(20);
        expect(media([2, 4, 6, 8])).toBe(5);
    });

    it('deve lançar erro ao calcular media de lista invalida', () => {
        expect(() => media([])).toThrow(
            'É necessário informar uma lista de números válida.'
        );
    });

    it('deve lançar erro ao calcular media de valor que não é uma lista', () => {
        expect(() => media('4,8,12')).toThrow(
            'É necessário informar uma lista de números válida.'
        );
    });


    it('deve verificar se um numero é primo.', () => {
        expect(ehPrimo(5)).toBe(true);
        expect(ehPrimo(7)).toBe(true);
        expect(ehPrimo(9)).toBe(false);
        expect(ehPrimo(12)).toBe(false);
    });

    it('deve retornar falso para numero menor ou igual a 1', () => {
        expect(ehPrimo(1)).toBe(false);
        expect(ehPrimo(0)).toBe(false);
        expect(ehPrimo(-8)).toBe(false);
    });


    it('deve limitar um numero entre minimo e maximo.', () => {
        expect(limitar(7, 0, 15)).toBe(7);
        expect(limitar(-4, 0, 15)).toBe(0);
        expect(limitar(20, 0, 15)).toBe(15);
    });

    it('deve lançar erro quando o minimo for maior que o maximo', () => {
        expect(() => limitar(7, 15, 0)).toThrow(
            'O valor mínimo não pode ser maior que o máximo.'
        );
    });


    it('deve calcular o fibonacci.', () => {
        expect(fibonacci(2)).toBe(1);
        expect(fibonacci(3)).toBe(2);
        expect(fibonacci(7)).toBe(13);
        expect(fibonacci(12)).toBe(144);
    });

    it('deve lançar erro ao calcular fibonacci de valor não numerico', () => {
        expect(() => fibonacci('7')).toThrow(
            'A posição deve ser um número inteiro não negativo.'
        );
    });

    it('deve lançar erro ao calcular fibonacci de posição negativa', () => {
        expect(() => fibonacci(-2)).toThrow(
            'A posição deve ser um número inteiro não negativo.'
        );
    });

});