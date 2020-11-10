const assert = require('assert');
const { numberToRoman } = require('../index');
    
// Teste para conversão dos Números decimais para Romanos
describe('Number Transform to Roman', () => {
    // Testando o Número 2
    it("Test 1  - Number 2", async () => {
        const number = '2';
        const expected = 'II';
        const result = await numberToRoman(number);

        return assert.equal(result, expected, `Resultado: ${result} !== Esperado: ${expected}`);
    });

    // Testando o Número 45
    it("Test 2  - Number 45", async () => {
        const number = '45';
        const expected = 'XLV';
        const result = await numberToRoman(number);

        return assert.equal(result, expected, `Resultado: ${result} !== Esperado: ${expected}`);
    });
    
    // Testando o Número 230
    it("Test 3  - Number 230", async () => {
        const number = '230';
        const expected = 'CCXXX';
        const result = await numberToRoman(number);

        return assert.equal(result, expected, `Resultado: ${result} !== Esperado: ${expected}`);
    });

    // Testando o Número 674
    it("Test 4  - Number 674", async () => {
        const number = '674';
        const expected = 'DCLXXIV';
        const result = await numberToRoman(number);

        return assert.equal(result, expected, `Resultado: ${result} !== Esperado: ${expected}`);
    });

    // Testando o Número 821
    it("Test 5  - Number 821", async () => {
        const number = '821';
        const expected = 'DCCCXXI';
        const result = await numberToRoman(number);

        return assert.equal(result, expected, `Resultado: ${result} !== Esperado: ${expected}`);
    });

    // Testando o Número 1013
    it("Test 6  - Number 1013", async () => {
        const number = '1013';
        const expected = 'MXIII';
        const result = await numberToRoman(number);
        
        return assert.equal(result, expected, `Resultado: ${result} !== Esperado: ${expected}`);
    });

    // Testando o Número 1023
    it("Test 7  - Number 1023", async () => {
        const number = '1023';
        const expected = 'MXXIII';
        const result = await numberToRoman(number);

        return assert.equal(result, expected, `Resultado: ${result} !== Esperado: ${expected}`);
    });

    // Testando o Número 1397
    it("Test 8  - Number 1397", async () => {
        const number = '1397';
        const expected = 'MCCCXCVII';
        const result = await numberToRoman(number);
        
        return assert.equal(result, expected, `Resultado: ${result} !== Esperado: ${expected}`);
    });

    // Testando o Número 1455
    it("Test 9  - Number 1455", async () => {
        const number = '1455';
        const expected = 'MCDLV';
        const result = await numberToRoman(number);
        
        return assert.equal(result, expected, `Resultado: ${result} !== Esperado: ${expected}`);
    });

    // Testando o Número 1847
    it("Test 10 - Number 1847", async () => {
        const number = '1847';
        const expected = 'MDCCCXLVII';
        const result = await numberToRoman(number);
        
        return assert.equal(result, expected, `Resultado: ${result} !== Esperado: ${expected}`);
    });
    
    // Testando o Número 2491
    it("Test 11 - Number 2491", async () => {
        const number = '2491';
        const expected = 'MMCDXCI';
        const result = await numberToRoman(number);
        
        return assert.equal(result, expected, `Resultado: ${result} !== Esperado: ${expected}`);
    });

    // Testando o Número 2766
    it("Test 12 - Number 2766", async () => {
        const number = '2766';
        const expected = 'MMDCCLXVI';
        const result = await numberToRoman(number);
        
        return assert.equal(result, expected, `Resultado: ${result} !== Esperado: ${expected}`);
    });

    // Testando o Número 3103
    it("Test 13 - Number 3103", async () => {
        const number = '3103';
        const expected = 'MMMCIII';
        const result = await numberToRoman(number);
        
        return assert.equal(result, expected, `Resultado: ${result} !== Esperado: ${expected}`);
    });

    // Testando o Número 3572
    it("Test 14 - Number 3572", async () => {
        const number = '3572';
        const expected = 'MMMDLXXII';
        const result = await numberToRoman(number);
        
        return assert.equal(result, expected, `Resultado: ${result} !== Esperado: ${expected}`);
    });

    // Testando o Número 3999
    it("Test 15 - Number 3999", async () => {
        const number = '3999';
        const expected = 'MMMCMXCIX';
        const result = await numberToRoman(number);
        
        return assert.equal(result, expected, `Resultado: ${result} !== Esperado: ${expected}`);
    });
});