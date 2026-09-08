import { describe, expect, it, vi } from 'vitest';
import axios from 'axios';
import { buscarCotacao, converterMoeda } from '../src/moeda';

vi.mock('axios', () => ({
    default: {
        get: vi.fn(),
    }
}));

describe('Biblioteca de moedas', () => {

    // BUSCAR COTAÇÃO

    it('deve buscar a cotação atual da moeda', async () => {
        axios.get.mockResolvedValue({
            data: {
                rates: { BRL: 5.36 }
            }
        });
        const cotacao = await buscarCotacao('USD', 'BRL');

        expect(cotacao).toBe(5.36)
        expect(axios.get).toHaveBeenCalledWith(
            'https://api.frankfurter.app/latest',{
                params: {
                    from: 'USD',
                    to: 'BRL'
                },
            }
        )
    })

    it('deve buscar a cotação de EUR para BRL', async () => {
        axios.get.mockResolvedValue({
            data: {
                rates: { BRL: 6.25 }
            }
        });
        const cotacao = await buscarCotacao('EUR', 'BRL');

        expect(cotacao).toBe(6.25)
    })

    it('deve buscar a cotação de GBP para USD', async () => {
        axios.get.mockResolvedValue({
            data: {
                rates: { USD: 1.35 }
            }
        });
        const cotacao = await buscarCotacao('GBP', 'USD');

        expect(cotacao).toBe(1.35)
    })

    it('deve lançar erro quando a moeda destino não for encontrada', async () => {
        axios.get.mockResolvedValue({
            data: {
                rates: { EUR: 0.85 }
            }
        });

        await expect(
            buscarCotacao('USD', 'BRL')
        ).rejects.toThrow(
            'Moeda destino não encontrada na resposta da API.'
        );
    })


    // CONVERTER MOEDA

    it('deve converter USD para BRL', async () => {
        axios.get.mockResolvedValue({
            data: {
                rates: { BRL: 5.36 }
            }
        });
        const resultado = await converterMoeda(10, 'USD', 'BRL');

        expect(resultado).toBe(53.60)
    })

    it('deve converter EUR para BRL', async () => {
        axios.get.mockResolvedValue({
            data: {
                rates: { BRL: 6.25 }
            }
        });
        const resultado = await converterMoeda(20, 'EUR', 'BRL');

        expect(resultado).toBe(125)
    })

    it('deve converter GBP para USD', async () => {
        axios.get.mockResolvedValue({
            data: {
                rates: { USD: 1.35 }
            }
        });
        const resultado = await converterMoeda(30, 'GBP', 'USD');

        expect(resultado).toBe(40.50)
    })

    it('deve lançar erro quando o valor for menor ou igual a zero', async () => {
        await expect(
            converterMoeda(0, 'USD', 'BRL')
        ).rejects.toThrow(
            'O valor deve ser maior que zero.'
        );
    })

});