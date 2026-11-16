// Synced from tiennm99dev/mathmax by scripts/sync-core.sh. Do not edit it here; change it in mathmax and sync again.
import { describe, expect, it } from 'vitest';
import { slipOptions } from './quiz.js';
import {
  capitalReading,
  classParts,
  compareWhy,
  digitAt,
  digitsOf,
  firstDiff,
  fromRoman,
  placeColumns,
  placeDigits,
  placesText,
  readPart,
  readWhole,
  romanSum,
  roundTo,
  roundWhy,
  roundingDigit,
  roundingPlaces,
  sticksOf,
  sumParts,
  sumText,
  toRoman,
  valueAt,
  valueOfDigits,
} from './whole-numbers.js';

/** Group spaces as plain spaces, so expectations stay readable. @param {string} t */
const plain = (t) => t.replace(/\u202f/g, ' ');

describe('reading whole numbers', () => {
  it('reads four- and five-digit numbers the book way', () => {
    expect(readWhole(3067)).toBe('ba nghìn không trăm sáu mươi bảy');
    expect(readWhole(4007)).toBe('bốn nghìn không trăm linh bảy');
    expect(readWhole(6302)).toBe('sáu nghìn ba trăm linh hai');
    expect(readWhole(1015)).toBe('một nghìn không trăm mười lăm');
    expect(readWhole(10000)).toBe('mười nghìn');
    expect(readWhole(24105)).toBe('hai mươi tư nghìn một trăm linh năm');
    expect(readWhole(70040)).toBe('bảy mươi nghìn không trăm bốn mươi');
    expect(readWhole(92007)).toBe('chín mươi hai nghìn không trăm linh bảy');
    expect(readWhole(100000)).toBe('một trăm nghìn');
    expect(readWhole(321)).toBe('ba trăm hai mươi mốt');
    expect(readWhole(0)).toBe('không');
  });

  it('reads numbers of the millions class', () => {
    expect(readWhole(109140903)).toBe(
      'một trăm linh chín triệu một trăm bốn mươi nghìn chín trăm linh ba',
    );
    expect(readWhole(304028102)).toBe(
      'ba trăm linh bốn triệu không trăm hai mươi tám nghìn một trăm linh hai',
    );
    expect(readWhole(2000001)).toBe('hai triệu không trăm linh một');
    expect(readWhole(1000000)).toBe('một triệu');
  });

  it('reads past the millions and writes anything else in digits', () => {
    expect(readWhole(2000000005)).toBe('hai tỉ không trăm linh năm');
    expect(readWhole(2.5)).toBe('2.5');
    expect(readWhole(-3)).toBe('-3');
    expect(capitalReading(7000)).toBe('Bảy nghìn');
  });

  it('splits a number into classes', () => {
    expect(classParts(304028102).map((p) => p.text)).toEqual(['304', '028', '102']);
    expect(readPart(3045302, 1)).toBe('không trăm bốn mươi lăm nghìn');
    expect(readPart(2000001, 1)).toBe('');
  });
});

describe('places', () => {
  it('lays out a table of any number of places', () => {
    expect(placeColumns(4).map((p) => p.title)).toEqual(['Nghìn', 'Trăm', 'Chục', 'Đơn vị']);
    expect(placeColumns(4)[0]).toMatchObject({ key: 'thousands', value: 1000, block: 'nghin' });
    expect(placeColumns(6)[0]).toMatchObject({ unit: 'trăm nghìn', exp: 5 });
    expect(placeColumns(6)[0].block).toBeUndefined();
  });

  it('splits a number into places and rebuilds it', () => {
    expect(placeDigits(3067, 4)).toEqual({ thousands: 3, hundreds: 0, tens: 6, ones: 7 });
    expect(placeDigits(10000, 4).thousands).toBe(10);
    expect(placeDigits(42316, 5).tenThousands).toBe(4);
    const bad = [0, 7, 3067, 10000, 99999].filter((n) => valueOfDigits(placeDigits(n, 5)) !== n);
    expect(bad).toEqual([]);
    expect(placesText(3067, 4)).toBe('3 nghìn, 0 trăm, 6 chục, 7 đơn vị');
  });

  it('finds digits, values and the sum of places', () => {
    expect(digitsOf(653720).map((d) => d.digit)).toEqual([6, 5, 3, 7, 2, 0]);
    expect(digitAt(63782910, 4)).toBe(8);
    expect(valueAt(653720, 4)).toBe(50000);
    expect(sumParts(50701)).toEqual([50000, 700, 1]);
    expect(plain(sumText(3892))).toBe('3 892 = 3 000 + 800 + 90 + 2');
    expect(plain(sumText(882936))).toBe('882 936 = 800 000 + 80 000 + 2 000 + 900 + 30 + 6');
    expect(plain(sumText(4000))).toBe('4 000');
  });
});

describe('rounding', () => {
  it('rounds to any place', () => {
    expect(roundTo(2826, 10)).toBe(2830);
    expect(roundTo(3524, 100)).toBe(3500);
    expect(roundTo(9950, 100)).toBe(10000);
    expect(roundTo(3272353, 100000)).toBe(3300000);
    expect(roundTo(149000, 100000)).toBe(100000);
    expect(roundingDigit(3256, 100)).toBe(5);
  });

  it('explains the deciding digit and keeps a round number', () => {
    expect(roundingPlaces(10000)).toEqual({
      look: 'hàng nghìn',
      target: 'hàng chục nghìn',
      round: 'tròn chục nghìn',
    });
    expect(plain(roundWhy(3272353, 100000))).toBe(
      'Chữ số hàng chục nghìn của 3 272 353 là 7, 7 > 5 nên làm tròn lên. Làm tròn 3 272 353 đến hàng trăm nghìn được 3 300 000.',
    );
    expect(plain(roundWhy(3524, 100))).toContain('2 < 5 nên làm tròn xuống');
    expect(plain(roundWhy(2150000, 100000))).toContain('5 = 5 nên làm tròn lên');
    expect(plain(roundWhy(4000, 1000))).toBe('4 000 đã là số tròn nghìn, giữ nguyên 4 000.');
  });
});

describe('comparing', () => {
  it('finds the first place that differs', () => {
    expect(firstDiff(693251, 693500)).toBe(2);
    expect(firstDiff(99999, 100000)).toBeNull();
  });

  it('explains by digit count, then place by place', () => {
    expect(plain(compareWhy(99999, 100000))).toBe(
      '99 999 có năm chữ số, 100 000 có sáu chữ số. Số nào có ít chữ số hơn thì bé hơn. Vậy 99 999 < 100 000.',
    );
    expect(plain(compareWhy(3456, 3465))).toBe(
      'Hàng nghìn, hàng trăm giống nhau. Ở hàng chục: 5 bé hơn 6. Vậy 3 456 < 3 465.',
    );
    expect(plain(compareWhy(693251, 693500))).toBe(
      'Các hàng bên trái giống nhau. Ở hàng trăm: 2 bé hơn 5. Vậy 693 251 < 693 500.',
    );
    expect(plain(compareWhy(700000, 699999))).toBe(
      'Ở hàng trăm nghìn: 7 lớn hơn 6. Vậy 700 000 > 699 999.',
    );
    expect(compareWhy(12, 12)).toBe('Hai số giống nhau ở mọi hàng. Vậy 12 = 12.');
  });
});

describe('Roman numerals', () => {
  it('writes and reads I to XXXIX', () => {
    expect([1, 4, 9, 14, 19, 20].map(toRoman)).toEqual(['I', 'IV', 'IX', 'XIV', 'XIX', 'XX']);
    expect(toRoman(40)).toBe('');
    const bad = Array.from({ length: 39 }, (_, i) => i + 1).filter(
      (n) => fromRoman(toRoman(n)) !== n,
    );
    expect(bad).toEqual([]);
    expect(['IIII', 'VV', 'IIV', 'VX', ''].map(fromRoman)).toEqual([null, null, null, null, null]);
  });

  it('adds letters and counts matchsticks', () => {
    expect(romanSum('XIX')).toBe(19);
    expect(romanSum('IIII')).toBe(4);
    expect(sticksOf('VIII')).toBe(5);
  });
});

describe('answer options from slips', () => {
  it('keeps the right answer once among four whole numbers in order', () => {
    const { options, answer } = slipOptions(18, [9, 24, 12]);
    expect(options).toEqual(['9', '12', '18', '24']);
    expect(options[answer]).toBe('18');
    expect(slipOptions(4, [4, -1, 1.5]).options).toEqual(['4', '5', '6', '7']);
  });

  it('fills up from the near offsets within the range', () => {
    const { options, answer } = slipOptions(99999, [99999, 100500, -3], {
      near: [1, 10, -1, -10],
      max: 100000,
    });
    expect(options.map(plain)).toEqual(['99 989', '99 998', '99 999', '100 000']);
    expect(answer).toBe(2);
    expect(slipOptions(5, [0, 6], { min: 1, near: [] }).options).toEqual(['5', '6']);
  });

  it('groups digits and adds a unit', () => {
    expect(slipOptions(40, [4, 400], { near: [], unit: 'yến' }).options.map(plain)).toEqual([
      '4 yến',
      '40 yến',
      '400 yến',
    ]);
  });
});
