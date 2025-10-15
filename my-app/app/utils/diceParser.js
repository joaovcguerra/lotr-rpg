// app/utils/diceParser.js

/**
 * Interpreta uma notação de dado complexa e retorna o resultado.
 * @param {string} notation - A string da notação a ser rolada.
 * @returns {{total: number | string, output: any, critStatus: string, isMultiRoll: boolean}}
 */
export function rollCustomDice(notation) {
    const originalNotation = notation.trim();
    let critStatus = 'normal';

    // Pré-processamento para notação X#A (continua igual)
    const multiRollMatch = originalNotation.match(/^(\d+)#(.+)/);
    if (multiRollMatch) {
        const count = parseInt(multiRollMatch[1]);
        const subNotation = multiRollMatch[2];
        let detailedResults = [];
        for (let i = 0; i < count; i++) {
            const subResult = rollCustomDice(subNotation);
            detailedResults.push(subResult);
        }
        detailedResults.sort((a, b) => b.total - a.total);
        return {
            total: '',
            output: detailedResults,
            isMultiRoll: true,
            critStatus: 'normal',
        };
    }

    // Pré-processamento para contagem de sucesso (continua igual)
    const successCountMatch = originalNotation.match(/(.*)(>>|<<)(\d+)/);
    if (successCountMatch) {
        const dicePart = successCountMatch[1];
        const operator = successCountMatch[2];
        const target = parseInt(successCountMatch[3]);
        const diceResult = rollCustomDice(dicePart);
        const rollsMatch = diceResult.output.match(/\[(.*?)\]/);
        if (rollsMatch) {
            const rolls = rollsMatch[1].split(',').map(Number);
            let successCount = 0;
            if (operator === '>>') {
                successCount = rolls.filter(r => r >= target).length;
            } else {
                successCount = rolls.filter(r => r <= target).length;
            }
            return {
                total: successCount,
                output: `Contagem: ${diceResult.output} -> ${successCount} sucessos`,
                critStatus: 'normal',
                isMultiRoll: false,
            };
        }
    }

    let calculationString = originalNotation.replace(/\s+/g, '');
    let outputString = calculationString;

    // ===== Regex ATUALIZADA para incluir o modificador por dado (ex: ++2, --1) =====
    const diceExpressionRegex = /(\d*)d(\d+)(!(?:\d+)?)?((?:[kd](?:h|l)?)\d+)?((?:\+\+|--)\d+)?/g;

    const diceMatches = [...calculationString.matchAll(diceExpressionRegex)];

    for (const match of diceMatches) {
        const fullMatch = match[0];
        let numDice = match[1] ? parseInt(match[1]) : 1;
        const sides = parseInt(match[2]);
        const explode = match[3];
        const keepDrop = match[4];
        const perDieModifierString = match[5]; // Nova captura! Ex: "++2"

        if (numDice === 0 || sides === 0) continue;

        let rolls = [];
        let i = 0;
        while (i < numDice) {
            const roll = Math.floor(Math.random() * sides) + 1;
            rolls.push(roll);
            if (explode) {
                const explodeTarget = explode.length > 1 ? parseInt(explode.substring(1)) : sides;
                if (roll >= explodeTarget) {
                    numDice++;
                }
            }
            i++;
        }

        if (numDice === 1 && sides === 20 && rolls.length === 1) {
            if (rolls[0] === 20) critStatus = 'critSuccess';
            if (rolls[0] === 1) critStatus = 'critFailure';
        }

        // ===== LÓGICA DO MODIFICADOR POR DADO ADICIONADA AQUI =====
        let modifiedRolls = [...rolls];
        if (perDieModifierString) {
            const perDieOperator = perDieModifierString.substring(0, 2); // "++" ou "--"
            const perDieValue = parseInt(perDieModifierString.substring(2));
            if (perDieOperator === '++') {
                modifiedRolls = rolls.map(r => r + perDieValue);
            } else { // "--"
                modifiedRolls = rolls.map(r => r - perDieValue);
            }
        }

        let resultRolls = [...modifiedRolls];
        if (keepDrop) {
            const val = parseInt(keepDrop.substring(keepDrop.length > 2 ? 2 : 1));
            resultRolls.sort((a, b) => a - b);
            if (keepDrop.startsWith('k')) {
                if (keepDrop.startsWith('kl')) {
                    resultRolls = resultRolls.slice(0, val);
                } else {
                    resultRolls = resultRolls.slice(modifiedRolls.length - val);
                }
            } else if (keepDrop.startsWith('d')) {
                if (keepDrop.startsWith('dh')) {
                    resultRolls = resultRolls.slice(0, modifiedRolls.length - val);
                } else {
                    resultRolls = resultRolls.slice(val);
                }
            }
        }

        const sum = resultRolls.reduce((s, r) => s + r, 0);
        // A saída mostra os dados originais para clareza
        const detailedRoll = `${fullMatch}[${rolls.join(', ')}]`;

        calculationString = calculationString.replace(fullMatch, sum);
        outputString = outputString.replace(fullMatch, detailedRoll);
    }

    let total;
    try {
        total = Function(`'use strict'; return (${calculationString})`)();
    } catch (e) {
        return { total: 'Erro', output: 'Notação matemática inválida', critStatus: 'normal', isMultiRoll: false };
    }

    return {
        total,
        output: `Rolagem: ${outputString} = ${total}`,
        critStatus,
        isMultiRoll: false,
    };
}