const assert = require('assert');
const { numberToRoman } = require('../index');
    
// Teste para conversão dos Números decimais para Romanos
describe('Number Transform to Roman', () => {
    
    it("Test 1  - Number 2", async () => {
        const number = '2';
        const expected = 'II';
        const result = await numberToRoman(number);

        return assert.equal(result, expected, `Resultado: ${result} !== Esperado: ${expected}`);
    });

    it("Test 2  - Number 45", async () => {
        const number = '45';
        const expected = 'XLV';
        const result = await numberToRoman(number);

        return assert.equal(result, expected, `Resultado: ${result} !== Esperado: ${expected}`);
    });
    
    it("Test 3  - Number 230", async () => {
        const number = '230';
        const expected = 'CCXXX';
        const result = await numberToRoman(number);

        return assert.equal(result, expected, `Resultado: ${result} !== Esperado: ${expected}`);
    });

    it("Test 4  - Number 674", async () => {
        const number = '674';
        const expected = 'DCLXXIV';
        const result = await numberToRoman(number);

        return assert.equal(result, expected, `Resultado: ${result} !== Esperado: ${expected}`);
    });

    it("Test 5  - Number 821", async () => {
        const number = '821';
        const expected = 'DCCCXXI';
        const result = await numberToRoman(number);

        return assert.equal(result, expected, `Resultado: ${result} !== Esperado: ${expected}`);
    });

    it("Test 6  - Number 1013", async () => {
        const number = '1013';
        const expected = 'MXIII';
        const result = await numberToRoman(number);
        
        return assert.equal(result, expected, `Resultado: ${result} !== Esperado: ${expected}`);
    });

    it("Test 7  - Number 1023", async () => {
        const number = '1023';
        const expected = 'MXXIII';
        const result = await numberToRoman(number);

        return assert.equal(result, expected, `Resultado: ${result} !== Esperado: ${expected}`);
    });

    it("Test 8  - Number 1397", async () => {
        const number = '1397';
        const expected = 'MCCCXCVII';
        const result = await numberToRoman(number);
        
        return assert.equal(result, expected, `Resultado: ${result} !== Esperado: ${expected}`);
    });

    it("Test 9  - Number 1455", async () => {
        const number = '1455';
        const expected = 'MCDLV';
        const result = await numberToRoman(number);
        
        return assert.equal(result, expected, `Resultado: ${result} !== Esperado: ${expected}`);
    });

    it("Test 10 - Number 1847", async () => {
        const number = '1847';
        const expected = 'MDCCCXLVII';
        const result = await numberToRoman(number);
        
        return assert.equal(result, expected, `Resultado: ${result} !== Esperado: ${expected}`);
    });
    
    it("Test 11 - Number 2491", async () => {
        const number = '2491';
        const expected = 'MMCDXCI';
        const result = await numberToRoman(number);
        
        return assert.equal(result, expected, `Resultado: ${result} !== Esperado: ${expected}`);
    });

    it("Test 12 - Number 2766", async () => {
        const number = '2766';
        const expected = 'MMDCCLXVI';
        const result = await numberToRoman(number);
        
        return assert.equal(result, expected, `Resultado: ${result} !== Esperado: ${expected}`);
    });

    it("Test 13 - Number 3103", async () => {
        const number = '3103';
        const expected = 'MMMCIII';
        const result = await numberToRoman(number);
        
        return assert.equal(result, expected, `Resultado: ${result} !== Esperado: ${expected}`);
    });

    it("Test 14 - Number 4000", async () => {
        const number = '4000';
        const expected = 'Limite maximo permitido é de \'3999\'';
        const result = await numberToRoman(number);
        
        return assert.equal(result, expected, `Resultado: ${result} !== Esperado: ${expected}`);
    });

    it("Test 15 - Number \'\'", async () => {
        const number = '';
        const expected = 'É necessário informar algum número válido';
        const result = await numberToRoman(number);
        
        return assert.equal(result, expected, `Resultado: ${result} !== Esperado: ${expected}`);
    });
});