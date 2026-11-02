/**
 * Choosing what to put on a fire. Each scenario rates every extinguishing
 * agent as `good` (the right choice), `poor` (works only partly or only on a
 * small fire) or `bad` (useless or dangerous), with the reason shown to the
 * learner. Fire classes follow TCVN 4878:2009.
 */

/** @typedef {'good' | 'poor' | 'bad'} Verdict */
/** @typedef {'water' | 'foam' | 'powder' | 'co2' | 'metal' | 'cover'} AgentId */

/** @type {Array<{ id: AgentId, name: string }>} */
export const AGENTS = [
  { id: 'water', name: 'Nước' },
  { id: 'foam', name: 'Bọt chữa cháy' },
  { id: 'powder', name: 'Bột ABC' },
  { id: 'co2', name: 'Khí CO₂' },
  { id: 'metal', name: 'Bột chuyên dụng cho kim loại' },
  { id: 'cover', name: 'Đậy kín (vung, chăn ướt)' },
];

/**
 * @typedef {object} FireCase
 * @property {string} id
 * @property {string} fire what is burning
 * @property {string} fireClass
 * @property {string} first what to do before anything else
 * @property {Record<AgentId, { verdict: Verdict, why: string }>} agents
 */

/** @type {FireCase[]} */
export const CASES = [
  {
    id: 'solid',
    fire: 'Một đống gỗ và giấy trong nhà kho',
    fireClass: 'Đám cháy chất rắn (loại A)',
    first: 'Báo động và gọi $114$ nếu đám cháy lớn.',
    agents: {
      water: { verdict: 'good', why: 'Nước hấp thụ nhiều nhiệt và thấm vào than hồng.' },
      foam: { verdict: 'good', why: 'Bọt phủ kín bề mặt, cách li oxygen và làm mát.' },
      powder: { verdict: 'good', why: 'Bột ABC tạo lớp phủ trên chất rắn đang cháy.' },
      co2: {
        verdict: 'poor',
        why: 'CO₂ khuếch tán nhanh và không làm nguội than hồng, lửa dễ cháy lại.',
      },
      metal: {
        verdict: 'bad',
        why: 'Bột này chỉ dành cho kim loại, không phù hợp với đám cháy gỗ, giấy.',
      },
      cover: {
        verdict: 'poor',
        why: 'Chăn ướt chỉ dập được đám lửa rất nhỏ, không đủ cho cả đống gỗ.',
      },
    },
  },
  {
    id: 'liquid',
    fire: 'Xăng tràn ra nền đang cháy',
    fireClass: 'Đám cháy chất lỏng (loại B)',
    first: 'Ngắt nguồn xăng nếu làm được an toàn.',
    agents: {
      water: {
        verdict: 'bad',
        why: 'Xăng nhẹ hơn nước và không tan, nổi lên trên nên lửa lan rộng hơn.',
      },
      foam: { verdict: 'good', why: 'Bọt nổi trên mặt xăng, ngăn hơi xăng gặp oxygen.' },
      powder: { verdict: 'good', why: 'Bột dập nhanh ngọn lửa trên bề mặt chất lỏng.' },
      co2: { verdict: 'good', why: 'CO₂ nặng hơn không khí, đẩy oxygen ra khỏi vùng cháy.' },
      metal: { verdict: 'bad', why: 'Bột này chỉ dành cho kim loại.' },
      cover: {
        verdict: 'poor',
        why: 'Chỉ dập được khi lượng xăng rất nhỏ, tràn rộng thì không phủ kín được.',
      },
    },
  },
  {
    id: 'gas',
    fire: 'Lửa bùng ở đầu van bình gas',
    fireClass: 'Đám cháy chất khí (loại C)',
    first: 'Khoá van gas nếu tiếp cận được, vì đó là cách cắt chất cháy.',
    agents: {
      water: {
        verdict: 'bad',
        why: 'Nước không dập được khí đang phun, chỉ dùng để làm mát bình từ xa.',
      },
      foam: { verdict: 'bad', why: 'Bọt không phủ được dòng khí đang phun ra.' },
      powder: {
        verdict: 'good',
        why: 'Bột dập ngọn lửa khí rất nhanh; sau đó phải khoá van, không để gas tiếp tục xì.',
      },
      co2: {
        verdict: 'good',
        why: 'CO₂ dập được lửa khí nhỏ; sau đó phải khoá van, không để gas tiếp tục xì.',
      },
      metal: { verdict: 'bad', why: 'Bột này chỉ dành cho kim loại.' },
      cover: {
        verdict: 'poor',
        why: 'Chăn ướt có thể dập lửa nhỏ ở đầu van, nhưng phải khoá van ngay sau đó.',
      },
    },
  },
  {
    id: 'metal',
    fire: 'Bột magnesium đang cháy',
    fireClass: 'Đám cháy kim loại (loại D)',
    first: 'Tránh xa ngọn lửa rất sáng và không nhìn trực tiếp vào đó.',
    agents: {
      water: { verdict: 'bad', why: 'Mg nóng phản ứng với nước sinh ra H₂, gây nổ.' },
      foam: { verdict: 'bad', why: 'Bọt chứa nhiều nước nên Mg vẫn phản ứng sinh ra H₂.' },
      powder: {
        verdict: 'bad',
        why: 'Bột thông dụng không cách li được kim loại cháy ở nhiệt độ rất cao.',
      },
      co2: { verdict: 'bad', why: 'Mg cháy được trong CO₂: 2Mg + CO₂ → 2MgO + C.' },
      metal: {
        verdict: 'good',
        why: 'Bột chuyên dụng phủ kín, cách li kim loại với không khí mà không phản ứng với nó.',
      },
      cover: { verdict: 'bad', why: 'Chăn ướt có nước và vải bị cháy, Mg vẫn tiếp tục cháy.' },
    },
  },
  {
    id: 'cooking',
    fire: 'Chảo dầu ăn bốc cháy trên bếp',
    fireClass: 'Đám cháy dầu mỡ nấu ăn (loại F)',
    first: 'Tắt bếp để dầu không nóng thêm.',
    agents: {
      water: {
        verdict: 'bad',
        why: 'Nước chìm xuống đáy, hoá hơi đột ngột và bắn dầu cháy ra xung quanh.',
      },
      foam: {
        verdict: 'poor',
        why: 'Bọt thông thường có thể làm dầu nóng bắn lên; chỉ bình chuyên dụng cho dầu mỡ mới phù hợp.',
      },
      powder: {
        verdict: 'poor',
        why: 'Bột có thể dập ngọn lửa nhưng không làm nguội dầu, lửa dễ bùng lại.',
      },
      co2: {
        verdict: 'poor',
        why: 'Luồng khí mạnh có thể làm dầu bắn ra và không làm nguội được dầu.',
      },
      metal: { verdict: 'bad', why: 'Bột này chỉ dành cho kim loại.' },
      cover: {
        verdict: 'good',
        why: 'Đậy vung hoặc trùm chăn ướt làm hết oxygen, dầu nguội dần; để yên cho tới khi nguội hẳn.',
      },
    },
  },
  {
    id: 'electric',
    fire: 'Tủ điện đang cháy và vẫn còn điện',
    fireClass: 'Cháy thiết bị điện',
    first: 'Cắt cầu dao điện trước nếu làm được an toàn.',
    agents: {
      water: { verdict: 'bad', why: 'Nước dẫn điện, người chữa cháy có thể bị điện giật.' },
      foam: { verdict: 'bad', why: 'Bọt chứa nhiều nước nên có thể dẫn điện.' },
      powder: {
        verdict: 'good',
        why: 'Bột không dẫn điện và dập được lửa, dù để lại cặn trên thiết bị.',
      },
      co2: { verdict: 'good', why: 'CO₂ không dẫn điện và không để lại cặn trên thiết bị.' },
      metal: { verdict: 'bad', why: 'Bột này chỉ dành cho kim loại.' },
      cover: { verdict: 'bad', why: 'Chăn ướt có nước nên có thể gây điện giật khi còn điện.' },
    },
  },
];

/**
 * @param {FireCase} fireCase
 * @param {AgentId} agent
 */
export const verdictOf = (fireCase, agent) => fireCase.agents[agent].verdict;

/**
 * The agents that are right for a fire.
 * @param {FireCase} fireCase
 */
export const goodAgents = (fireCase) => AGENTS.filter((a) => verdictOf(fireCase, a.id) === 'good');

/**
 * The feedback for one choice.
 * @param {FireCase} fireCase
 * @param {AgentId} agent
 */
export function agentFeedback(fireCase, agent) {
  const { verdict, why } = fireCase.agents[agent];
  if (verdict === 'good') return `Phù hợp. ${why}`;
  if (verdict === 'poor') return `Chưa tốt. ${why} Hãy chọn cách khác.`;
  return `Không nên dùng. ${why} Hãy chọn cách khác.`;
}

/**
 * Heat water takes up when it boils away, kJ/kg.
 */
export const WATER_VAPORISATION = 2260;

/**
 * Mass of water, in kg, that boiling away would absorb a given heat.
 * @param {number} heat kJ
 */
export const waterToAbsorb = (heat) => heat / WATER_VAPORISATION;
