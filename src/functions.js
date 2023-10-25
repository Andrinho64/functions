// Requisito 1 - Crie a função verifyPalindrome
function verifyPalindrome(palavra) {
  palavra = palavra.toLowerCase();

  let palavraInvertida = '';
  const tamanho = palavra.length;

  for (let index = tamanho - 1; index >= 0; index -= 1) {
    palavraInvertida += palavra[index];
  }

  return palavra === palavraInvertida;
}

console.log(verifyPalindrome(arara));
console.log(verifyPalindrome(desenvolvimento));
// Requisito 2 - Crie a função getHighestIndex

function getHighestIndex(array) {
  let highestIndex = 0;
  let highestValue = array[0];

  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > highestValue) {
      highestValue = array[index];
      highestIndex = index;
    }
  }

  return highestIndex;
}

const array1 = [2, 3, 6, 7, 10, 1];
const array2 = [9, 1, 3, 5, 7];
const array3 = [-9, -1, -3, -5, -7];

const result1 = getHighestIndex(array1);
const result2 = getHighestIndex(array2);
const result3 = getHighestIndex(array3);

console.log(result1);
console.log(result2);
console.log(result3);

// Requisito 3 - Crie a função getSmallestIndex

function getSmallestIndex(array) {
  let smallestIndex = 0;
  let smallestValue = array[0];

  for (let index = 1; index < array.length; index += 1) {
    if (array[index] < smallestValue) {
      smallestValue = array[index];
      smallestIndex = index;
    }
  }

  return smallestIndex;
}

const array4 = [2, 3, 6, 7, 10, 1];
const array5 = [2, 4, 6, 7, 10, 0, -3];

const result4 = getSmallestIndex(array4);
const result5 = getSmallestIndex(array5);

console.log(result4);
console.log(result5);

// Requisito 4 - Crie a função getLongestWord

function getLongestWord(array) {
  let maiorPalavra = '';

  for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > maiorPalavra.length) {
      maiorPalavra = array[index];
    }
  }
  return maiorPalavra;
}
const arrayA = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
const arrayB = ['JavaScript', 'HTML', 'CSS', 'GitHub', 'Unix'];

const resultA = getLongestWord(arrayA);
const resultB = getLongestWord(arrayB);

console.log(resultA);
console.log(resultB);

// Requisito 5 - Crie a função countHighestNumberMaxOccurrences

function countHighestNumberMaxOccurrences(array) {
  let maiorNumero = array[0];
  let contagem = 1;

  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > maiorNumero) {
      maiorNumero = array[index];
      contagem = 1;
    } else if (array[index] === maiorNumero) {
      contagem += 1;
    }
  }
  return contagem;
}
const arrayx = [9, 1, 2, 3, 9, 5, 7];
const arrayy = [0, 4, 4, 4, 9, 2, 1];
const arrayz = [0, 0, 0];

const result8 = countHighestNumberMaxOccurrences(arrayx);
const result9 = countHighestNumberMaxOccurrences(arrayy);
const result10 = countHighestNumberMaxOccurrences(arrayz);

console.log(result8);
console.log(result9);
console.log(result10);

// Não modifique as linhas abaixo
module.exports = {
  verifyPalindrome: typeof verifyPalindrome === 'function' ? verifyPalindrome : (() => {}),
  getHighestIndex: typeof getHighestIndex === 'function' ? getHighestIndex : (() => {}),
  getSmallestIndex: typeof getSmallestIndex === 'function' ? getSmallestIndex : (() => {}),
  getLongestWord: typeof getLongestWord === 'function' ? getLongestWord : (() => {}),
  countHighestNumberMaxOccurrences: typeof countHighestNumberMaxOccurrences === 'function'
    ? countHighestNumberMaxOccurrences
    : (() => {}),
};
