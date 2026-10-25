import { describe, expect, it } from 'vitest';
import {
  CONTAINERS,
  DIAL_THINGS,
  SAMPLES,
  apparent,
  dialMarks,
  digitalStart,
  display,
  gramsText,
  judgeDial,
  judgeDigital,
  nearestMark,
  needle,
  pressTare,
} from './engine.js';

const [apples, pumpkin, rice, bigSack] = DIAL_THINGS;
const [beaker] = CONTAINERS;
const [salt] = SAMPLES;

describe('dial scale', () => {
  it('reads the nearest 50 g mark', () => {
    expect(DIAL_THINGS.map((t) => nearestMark(t.mass))).toEqual([1400, 2700, 4950, 10050]);
  });

  it('adds the zero error and stops at the ends of the dial', () => {
    expect(needle(0, 100)).toBe(100);
    expect(needle(1415, 0)).toBe(1415);
    expect(needle(bigSack.mass, 0)).toBe(5000);
    expect(needle(0, -75)).toBe(0);
  });

  it('shifts the reading when the eye looks slanted', () => {
    expect(apparent(1400, 'vuong')).toBe(1400);
    expect(apparent(1400, 'phai')).toBeCloseTo(1470, 9);
    expect(apparent(1400, 'trai')).toBeCloseTo(1330, 9);
  });

  it('accepts a correct weighing in kilograms', () => {
    const r = judgeDial({ thing: apples, zeroError: 0, eye: 'vuong', kilograms: 1.4 });
    expect(r.ok).toBe(true);
    expect(r.messages[0]).toContain('1,4 kg');
    expect(judgeDial({ thing: pumpkin, zeroError: 0, eye: 'vuong', kilograms: 2.7 }).ok).toBe(true);
    expect(judgeDial({ thing: rice, zeroError: 0, eye: 'vuong', kilograms: 4.95 }).ok).toBe(true);
  });

  it('names a needle not set to zero, a slanted eye and a value off the marks', () => {
    const r = judgeDial({ thing: apples, zeroError: 100, eye: 'trai', kilograms: 1.515 });
    expect(r.ok).toBe(false);
    const text = r.messages.join(' ');
    expect(text).toMatch(/vạch số 0/);
    expect(text).toMatch(/vuông góc/);
    expect(text).toMatch(/ĐCNN/);
  });

  it('rejects a wrong reading and an object past the GHĐ', () => {
    const wrong = judgeDial({ thing: apples, zeroError: 0, eye: 'vuong', kilograms: 1.45 });
    expect(wrong.ok).toBe(false);
    expect(wrong.messages).toHaveLength(1);
    expect(
      judgeDial({ thing: bigSack, zeroError: 0, eye: 'vuong', kilograms: 5 }).messages[0],
    ).toMatch(/GHĐ/);
    expect(judgeDial({ thing: apples, zeroError: 0, eye: 'vuong', kilograms: NaN }).ok).toBe(false);
  });

  it('labels every 0,5 kg and marks every 50 g', () => {
    const m = dialMarks(0, 500);
    expect(m).toHaveLength(11);
    expect(m[0]).toEqual({ value: 0, kind: 'label' });
    expect(m[5]).toEqual({ value: 250, kind: 'half' });
    expect(m[10]).toEqual({ value: 500, kind: 'label' });
    expect(dialMarks(4900, 6000).at(-1)?.value).toBe(5000);
  });
});

describe('electronic scale', () => {
  it('shows the load minus the tare, with one decimal', () => {
    /** @type {import('./engine.js').Digital} */
    let s = { ...digitalStart(), container: beaker };
    expect(display(s)).toEqual({ over: false, tenths: 623 });
    s = pressTare(s);
    expect(display(s)).toEqual({ over: false, tenths: 0 });
    s = { ...s, sample: salt };
    expect(display(s)).toEqual({ over: false, tenths: 254 });
    expect(gramsText(254)).toBe('25,4');
    expect(gramsText(0)).toBe('0,0');
  });

  it('shows an overload past the GHĐ', () => {
    expect(
      display({ container: beaker, sample: { id: 'x', name: 'x', tenths: 4400 }, tare: 0 }),
    ).toEqual({ over: true });
  });

  it('accepts the sample mass only after taring the container', () => {
    const good = { container: beaker, sample: salt, tare: beaker.tenths };
    expect(judgeDigital(good, 25.4).ok).toBe(true);
    expect(judgeDigital(good, 25.5).ok).toBe(false);
    const noTare = judgeDigital({ ...good, tare: 0 }, 87.7);
    expect(noTare.ok).toBe(false);
    expect(noTare.messages[0]).toMatch(/Trừ bì/);
    const lateTare = judgeDigital({ ...good, tare: beaker.tenths + salt.tenths }, 0);
    expect(lateTare.messages[0]).toMatch(/khi mẫu đã ở trên đĩa/);
  });

  it('names a tare taken with another container or with the sample alone', () => {
    const paper = { id: 'dia', name: 'Giấy cân', tenths: 18 };
    const swapped = judgeDigital({ container: paper, sample: salt, tare: beaker.tenths }, 25.4);
    expect(swapped.ok).toBe(false);
    expect(swapped.messages[0]).toMatch(/không ứng với giấy cân/);
    const sampleOnly = judgeDigital({ container: beaker, sample: salt, tare: salt.tenths }, 62.3);
    expect(sampleOnly.ok).toBe(false);
    expect(sampleOnly.messages[0]).toMatch(/không ứng với cốc thuỷ tinh/);
  });

  it('asks for a container and a sample', () => {
    expect(judgeDigital({ container: null, sample: salt, tare: 0 }, 25.4).messages[0]).toMatch(
      /Không đặt hoá chất/,
    );
    expect(judgeDigital({ container: beaker, sample: null, tare: 623 }, 0).ok).toBe(false);
  });
});
