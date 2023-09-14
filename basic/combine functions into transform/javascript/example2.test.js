const {filtrarNumerosPares, Int} = require('./example2');

test("obtener los números pares de una array", () => {
    const nums = [199, 200, 60, 33, 105, 500];
    expect(filtrarNumerosPares(nums)).toEqual(Int.pairsFrom(nums));
});
