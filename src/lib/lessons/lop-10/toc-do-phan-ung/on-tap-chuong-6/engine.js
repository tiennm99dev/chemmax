/**
 * Reading average rates off a graph: the book's oxygen curve and three
 * illustrative ones whose readings sit on grid crossings, the tasks drawn from
 * them, and how a typed rate is judged.
 */
import { numTex, tidy } from '#lib/core/number-format.js';
import { shuffle, rng } from '#lib/core/drill.js';
import { averageRate } from '../_shared/rate.js';

/**
 * @typedef {object} Graph
 * @property {string} id
 * @property {string} equation TeX
 * @property {string} species TeX of the tracked species
 * @property {number} coefficient of the tracked species
 * @property {string} symbol TeX of the plotted quantity
 * @property {string} unit unit of the rate
 * @property {string} tUnit
 * @property {string} tName
 * @property {string} yName
 * @property {Array<[number, number]>} points
 * @property {number} tMax
 * @property {number} tStep
 * @property {number} yMax
 * @property {number} yStep
 * @property {number} yLabelEvery
 */

/** @type {Graph[]} */
export const GRAPHS = [
  {
    id: 'oxygen',
    equation: '2\\mathrm{H_2O_2} \\rightarrow 2\\mathrm{H_2O} + \\mathrm{O_2}',
    species: '\\mathrm{O_2}',
    coefficient: 1,
    symbol: 'V',
    unit: 'cm³/phút',
    tUnit: 'phút',
    tName: 't (phút)',
    yName: 'V của O₂ (cm³)',
    points: [
      [0, 0],
      [15, 16],
      [30, 30],
      [45, 40],
      [60, 48],
    ],
    tMax: 60,
    tStep: 15,
    yMax: 48,
    yStep: 2,
    yLabelEvery: 4,
  },
  {
    id: 'n2o5',
    equation: '2\\mathrm{N_2O_5} \\rightarrow 4\\mathrm{NO_2} + \\mathrm{O_2}',
    species: '\\mathrm{N_2O_5}',
    coefficient: 2,
    symbol: 'C',
    unit: 'mol/(L·s)',
    tUnit: 's',
    tName: 't (s)',
    yName: 'C của N₂O₅ (M)',
    points: [
      [0, 0.4],
      [50, 0.3],
      [100, 0.24],
      [150, 0.2],
      [200, 0.18],
    ],
    tMax: 200,
    tStep: 50,
    yMax: 0.4,
    yStep: 0.02,
    yLabelEvery: 5,
  },
  {
    id: 'hcl',
    equation: '\\mathrm{H_2} + \\mathrm{Cl_2} \\rightarrow 2\\mathrm{HCl}',
    species: '\\mathrm{HCl}',
    coefficient: 2,
    symbol: 'C',
    unit: 'mol/(L·phút)',
    tUnit: 'phút',
    tName: 't (phút)',
    yName: 'C của HCl (M)',
    points: [
      [0, 0],
      [2, 0.4],
      [4, 0.6],
      [6, 0.7],
      [8, 0.75],
    ],
    tMax: 8,
    tStep: 2,
    yMax: 0.8,
    yStep: 0.05,
    yLabelEvery: 4,
  },
  {
    id: 'ab',
    equation: '\\mathrm{A} + 2\\mathrm{B} \\rightarrow \\mathrm{C}',
    species: '\\mathrm{B}',
    coefficient: 2,
    symbol: 'C',
    unit: 'mol/(L·s)',
    tUnit: 's',
    tName: 't (s)',
    yName: 'C của B (M)',
    points: [
      [0, 0.8],
      [10, 0.56],
      [20, 0.4],
      [30, 0.28],
      [40, 0.2],
    ],
    tMax: 40,
    tStep: 10,
    yMax: 0.8,
    yStep: 0.04,
    yLabelEvery: 5,
  },
];

/**
 * @typedef {{ graph: Graph, from: number, to: number }} Task
 */

/**
 * Every task on every graph: neighbouring readings and ones two apart, in a
 * fixed mixed order, so all visitors start alike.
 * @returns {Task[]}
 */
export function allTasks() {
  /** @type {Task[]} */
  const tasks = [];
  for (const graph of GRAPHS) {
    for (const span of [1, 2]) {
      for (let from = 0; from + span < graph.points.length; from++) {
        tasks.push({ graph, from, to: from + span });
      }
    }
  }
  return shuffle(rng(19), tasks);
}

/**
 * @param {Task} task
 * @returns {number} the average rate on the task's interval
 */
export function taskRate({ graph, from, to }) {
  const [t1, y1] = graph.points[from];
  const [t2, y2] = graph.points[to];
  return averageRate(y1, y2, t1, t2, graph.coefficient);
}

/**
 * Judges a typed rate. Answers rounded to two decimals pass, as 0,53 for 8/15
 * does, which is why the margin is one percent; two common
 * slips get a named reply: a negative sign, and a forgotten coefficient.
 * @param {Task} task
 * @param {number | null} typed
 * @returns {'invalid' | 'right' | 'negative' | 'coefficient' | 'wrong'}
 */
export function judge(task, typed) {
  if (typed === null) return 'invalid';
  const rate = taskRate(task);
  const close = (/** @type {number} */ target) => Math.abs(typed - target) <= target * 0.01;
  if (close(rate)) return 'right';
  if (typed < 0) return 'negative';
  if (task.graph.coefficient !== 1 && close(rate * task.graph.coefficient)) return 'coefficient';
  return 'wrong';
}

/**
 * The worked solution, as rich text.
 * @param {Task} task
 * @returns {string}
 */
export function solutionText(task) {
  const { graph, from, to } = task;
  const [t1, y1] = graph.points[from];
  const [t2, y2] = graph.points[to];
  const rise = y2 > y1;
  const sign = rise ? '' : '-';
  const over = graph.coefficient === 1 ? '' : `\\dfrac{1}{${graph.coefficient}} \\cdot `;
  const s = graph.symbol;
  const rate = taskRate(task);
  const equals = tidy(rate, 4) === rate ? '=' : '\\approx';
  return `Đọc đồ thị: $${s}_1 = ${numTex(y1)}$ ở $t_1 = ${numTex(t1)}$ ${graph.tUnit}, $${s}_2 = ${numTex(y2)}$ ở $t_2 = ${numTex(t2)}$ ${graph.tUnit}. Khi đó $\\overline{v} = ${sign}${over}\\dfrac{${numTex(y2)} - ${numTex(y1)}}{${numTex(t2)} - ${numTex(t1)}} ${equals} ${numTex(rate, 4)}$ ${graph.unit}.`;
}
