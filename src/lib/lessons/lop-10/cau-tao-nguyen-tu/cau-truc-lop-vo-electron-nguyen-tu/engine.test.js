import { describe, expect, it } from 'vitest';
import { electronConfiguration, formatConfiguration } from '#lib/domain/elements.js';
import {
  MAX_Z,
  breaks,
  configText,
  emptyState,
  groundState,
  outerKind,
  place,
  shells,
  total,
  unpaired,
} from './engine.js';

/**
 * Fills a state by a list of [subshell index, box, spin] steps, failing on any broken rule.
 * @param {number} z
 * @param {Array<[number, number, 1 | -1]>} steps
 */
function fill(z, steps) {
  let state = emptyState();
  for (const [sub, box, spin] of steps) {
    const r = place(state, z, sub, box, spin);
    if (!r.ok) throw new Error(r.rule);
    state = r.state;
  }
  return state;
}

describe('ground states', () => {
  it('match the domain configuration for the first 20 elements', () => {
    /** @type {string[]} */
    const wrong = [];
    for (let z = 1; z <= MAX_Z; z++) {
      const state = groundState(z);
      const expected = formatConfiguration(electronConfiguration(z));
      if (total(state) !== z || configText(state) !== expected)
        wrong.push(`${z}: ${configText(state)}`);
    }
    expect(wrong).toEqual([]);
  });

  it('counts unpaired electrons and shells', () => {
    expect(unpaired(groundState(7))).toBe(3);
    expect(unpaired(groundState(8))).toBe(2);
    expect(unpaired(groundState(10))).toBe(0);
    expect(shells(groundState(19))).toEqual([2, 8, 8, 1]);
    expect(configText(groundState(19))).toBe('1s²2s²2p⁶3s²3p⁶4s¹');
  });

  it('reads the outer shell the way the book does', () => {
    expect(outerKind(11)).toEqual({ outer: 1, kind: 'kim loại' });
    expect(outerKind(17)).toEqual({ outer: 7, kind: 'phi kim' });
    expect(outerKind(18)).toEqual({ outer: 8, kind: 'khí hiếm' });
    expect(outerKind(2)).toEqual({ outer: 2, kind: 'khí hiếm' });
    expect(outerKind(1).kind).toBe('phi kim');
    expect(outerKind(5).kind).toBe('phi kim');
    expect(outerKind(14).kind).toBe('phi kim hoặc kim loại');
  });
});

describe('placing electrons', () => {
  const oxygenSoFar = fill(8, [
    [0, 0, 1],
    [0, 0, -1],
    [1, 0, 1],
    [1, 0, -1],
    [2, 0, 1],
  ]);

  it('applies the energy order', () => {
    expect(breaks(emptyState(), 8, 1, 0, 1)).toBe('aufbau');
    expect(breaks(fill(20, [[0, 0, 1]]), 20, 1, 0, 1)).toBe('aufbau');
  });

  it('applies the Pauli principle', () => {
    expect(breaks(fill(8, [[0, 0, 1]]), 8, 0, 0, 1)).toBe('pauli-spin');
    expect(
      breaks(
        fill(8, [
          [0, 0, 1],
          [0, 0, -1],
        ]),
        8,
        0,
        0,
        1,
      ),
    ).toBe('pauli-max');
  });

  it("applies Hund's rule", () => {
    expect(breaks(oxygenSoFar, 8, 2, 0, -1)).toBe('hund-pair');
    expect(breaks(oxygenSoFar, 8, 2, 1, -1)).toBe('hund-spin');
    expect(breaks(oxygenSoFar, 8, 2, 1, 1)).toBeNull();
  });

  it('stops at z electrons', () => {
    expect(breaks(groundState(3), 3, 2, 0, 1)).toBe('full');
  });

  it('fills 4s before 3d', () => {
    const argonCore = groundState(18);
    expect(breaks(argonCore, 20, 6, 0, 1)).toBe('aufbau');
    expect(breaks(argonCore, 20, 5, 0, 1)).toBeNull();
  });

  it('never changes the state it is given', () => {
    const before = JSON.stringify(oxygenSoFar);
    place(oxygenSoFar, 8, 2, 1, 1);
    expect(JSON.stringify(oxygenSoFar)).toBe(before);
  });
});
