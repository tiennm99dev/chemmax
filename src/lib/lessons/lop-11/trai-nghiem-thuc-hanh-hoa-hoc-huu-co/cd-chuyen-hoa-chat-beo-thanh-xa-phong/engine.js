/**
 * Soap making from a fat and sodium hydroxide, worked out from the fat's
 * saponification value (chỉ số xà phòng hoá: mg of KOH that saponify 1 g of
 * fat). One mole of KOH and one mole of NaOH do the same job, so the NaOH
 * mass is the KOH mass times 40/56. A triglyceride takes 3 mol of base per
 * mol and gives back 1 mol of glycerol (92 g/mol), so the soap mass follows
 * from conservation of mass.
 */
import { tidy } from '#lib/core/number-format.js';

export const M_KOH = 56;
export const M_NAOH = 40;
export const M_GLYCEROL = 92;

/** Molarity of the NaOH solution used in class (mol/L). */
export const NAOH_MOLARITY = 10;

/**
 * Typical saponification values (mg KOH per g of fat), middle of the usual
 * range of each fat.
 */
export const FATS = [
  { id: 'dua', name: 'Dầu dừa', sap: 257 },
  { id: 'co', name: 'Dầu cọ', sap: 199 },
  { id: 'mo-lon', name: 'Mỡ lợn', sap: 198 },
  { id: 'dau-nanh', name: 'Dầu đậu nành', sap: 191 },
  { id: 'o-liu', name: 'Dầu ô liu', sap: 190 },
];

/**
 * Saponification value of a pure triglyceride of molar mass `molar`.
 * @param {number} molar g/mol
 */
export function sapOf(molar) {
  return tidy((3 * M_KOH * 1000) / molar, 6);
}

/**
 * Base needed to saponify a mass of fat completely.
 * @param {number} sap mg KOH per g
 * @param {number} fat g of fat
 */
export function baseFor(sap, fat) {
  const koh = (sap * fat) / 1000;
  const mol = koh / M_KOH;
  return {
    koh: tidy(koh, 6),
    mol: tidy(mol, 6),
    naoh: tidy(mol * M_NAOH, 6),
    /** Volume of the class NaOH solution (mL). */
    ml: tidy((mol / NAOH_MOLARITY) * 1000, 6),
  };
}

/**
 * Make a batch with some share of the NaOH the calculation asks for.
 * @param {{ sap: number, fat: number, percent: number }} batch
 */
export function makeBatch({ sap, fat, percent }) {
  const need = baseFor(sap, fat);
  const share = percent / 100;
  const naoh = need.naoh * share;
  const reacted = Math.min(1, share);
  const mol = need.mol * reacted;
  const glycerol = (mol / 3) * M_GLYCEROL;
  const soap = fat * reacted + mol * M_NAOH - glycerol;
  return {
    naoh: tidy(naoh, 6),
    ml: tidy(need.ml * share, 6),
    soap: tidy(soap, 6),
    glycerol: tidy(glycerol, 6),
    leftoverFat: tidy(fat * (1 - reacted), 6),
    leftoverNaoh: tidy(Math.max(0, naoh - need.naoh), 6),
  };
}

/**
 * How the bar of soap turns out.
 * @param {number} percent NaOH used, % of the calculated amount
 * @returns {{ tone: 'ok' | 'warn', text: string }}
 */
export function verdict(percent) {
  if (percent > 100) {
    return {
      tone: 'warn',
      text: 'Dư NaOH: xà phòng có tính kiềm mạnh (pH cao), gây khô rát, có thể làm bỏng da. Không được dùng; phải tính lại lượng kiềm.',
    };
  }
  if (percent < 90) {
    return {
      tone: 'warn',
      text: 'Thiếu nhiều NaOH: còn nhiều chất béo chưa phản ứng, bánh xà phòng mềm, nhờn, dễ bị ôi.',
    };
  }
  if (percent < 100) {
    return {
      tone: 'ok',
      text: 'Hơi thiếu NaOH một chút: một phần nhỏ chất béo còn lại làm mềm da, và không có kiềm dư. Người làm xà phòng thủ công thường chọn cách này cho an toàn.',
    };
  }
  return {
    tone: 'ok',
    text: 'Vừa đủ NaOH theo tính toán: chất béo bị xà phòng hoá hoàn toàn. Vì chỉ số xà phòng hoá của mỗi mẻ dầu có thể lệch đôi chút, cần thử pH sản phẩm.',
  };
}

/**
 * The soap-making procedure of the lesson, one decision per step, for the
 * step quiz.
 * @type {import('../_shared/step-quiz.js').Step[]}
 */
export const SOAP_STEPS = [
  {
    title: 'Chuẩn bị an toàn',
    question: 'Trước khi làm việc với dung dịch NaOH đặc, em cần chuẩn bị gì?',
    options: [
      {
        label: 'Làm tay trần cho dễ thao tác, kính bảo hộ không cần thiết.',
        why: 'NaOH đặc ăn mòn da và có thể làm hỏng mắt chỉ với một giọt bắn vào.',
      },
      {
        label: 'Đeo kính bảo hộ, găng tay, mặc áo thí nghiệm; để sẵn nước sạch gần chỗ làm.',
        ok: true,
        why: 'Kính và găng tay bảo vệ mắt, da khỏi kiềm; nước sạch để rửa ngay khi bị dính.',
      },
      {
        label: 'Chuẩn bị nồi nhôm để đun cho nhanh nóng.',
        why: 'Nhôm phản ứng với dung dịch NaOH, giải phóng khí hydrogen và làm thủng nồi.',
      },
    ],
    result: 'Bàn làm việc đã an toàn.',
  },
  {
    title: 'Tính lượng kiềm',
    question: 'Lấy bao nhiêu dung dịch NaOH cho $50$ g dầu?',
    options: [
      {
        label: 'Càng nhiều NaOH càng tốt để phản ứng nhanh.',
        why: 'NaOH dư nằm lại trong xà phòng, làm pH rất cao, gây bỏng da.',
      },
      {
        label: 'Tính từ chỉ số xà phòng hoá của chất béo.',
        ok: true,
        why: 'Chỉ số xà phòng hoá cho biết số mg KOH cần cho $1$ g chất béo; đổi sang NaOH theo cùng số mol.',
      },
      {
        label: 'Ước lượng bằng mắt, khoảng nửa cốc.',
        why: 'Lượng kiềm phải vừa đủ với chất béo; ước lượng dễ thiếu hoặc dư nhiều.',
      },
    ],
    result: 'Đã có lượng NaOH vừa đủ (hoặc hơi thiếu một chút).',
  },
  {
    title: 'Đun chất béo',
    question: 'Làm nóng chất béo như thế nào?',
    options: [
      {
        label: 'Cho chất béo vào cốc thuỷ tinh, đun nóng nhẹ (cách thuỷ) và giữ nhiệt độ ổn định.',
        ok: true,
        why: 'Chất béo nóng chảy, phản ứng nhanh hơn; nhiệt độ ổn định tránh trào và cháy khét.',
      },
      {
        label: 'Đun sôi mạnh chất béo trên lửa to.',
        why: 'Dầu quá nóng dễ bốc khói, bắt cháy và bắn khi cho dung dịch kiềm vào.',
      },
      {
        label: 'Không cần đun, đổ thẳng vào khuôn.',
        why: 'Chất béo phải phản ứng với kiềm trước; đổ khuôn là bước cuối.',
      },
    ],
    result: 'Chất béo đã nóng chảy đều.',
  },
  {
    title: 'Thêm kiềm và khuấy',
    question: 'Cho dung dịch NaOH vào chất béo như thế nào?',
    options: [
      {
        label: 'Đổ hết một lần rồi để yên.',
        why: 'Chất béo và dung dịch kiềm không tan vào nhau; không khuấy thì phản ứng chỉ xảy ra ở mặt phân cách, rất chậm, dễ trào.',
      },
      {
        label: 'Rót từ từ, khuấy liên tục bằng đũa thuỷ tinh, giữ nhiệt độ ổn định.',
        ok: true,
        why: 'Khuấy làm hai lớp trộn vào nhau, phản ứng xà phòng hoá diễn ra đều; hỗn hợp đặc dần như kem.',
      },
      {
        label: 'Rót nhanh và đun to lửa để phản ứng xong ngay.',
        why: 'Hỗn hợp sẽ sôi trào, bắn kiềm nóng ra ngoài.',
      },
    ],
    result: 'Phản ứng xà phòng hoá đang diễn ra, hỗn hợp sánh đặc dần.',
  },
  {
    title: 'Kiểm tra phản ứng',
    question: 'Làm sao biết chất béo đã phản ứng hết?',
    options: [
      {
        label: 'Nếm thử một chút hỗn hợp.',
        why: 'Không bao giờ nếm hoá chất; hỗn hợp có kiềm ăn da.',
      },
      {
        label: 'Nhỏ vài giọt hỗn hợp vào nước nóng: tan hết, không có váng dầu nổi lên.',
        ok: true,
        why: 'Muối của acid béo và glycerol tan trong nước nóng; chất béo dư sẽ nổi thành váng.',
      },
      {
        label: 'Thấy hỗn hợp có bọt là xong.',
        why: 'Hỗn hợp có bọt ngay khi mới có một ít xà phòng; chất béo vẫn có thể còn nhiều.',
      },
    ],
    result: 'Chất béo đã được xà phòng hoá hoàn toàn.',
  },
  {
    title: 'Hoàn thiện sản phẩm',
    question: 'Bước cuối cùng là gì?',
    options: [
      {
        label: 'Thêm tinh dầu, chất màu, đổ vào khuôn; để khô vài tuần rồi thử pH trước khi dùng.',
        ok: true,
        why: 'Tinh dầu tạo mùi thơm, chất màu tạo màu; thời gian để khô giúp phản ứng còn lại hoàn tất và nước bay hơi.',
      },
      {
        label: 'Dùng ngay để rửa tay khi hỗn hợp còn nóng.',
        why: 'Hỗn hợp còn nóng và có thể còn kiềm chưa phản ứng hết.',
      },
      {
        label: 'Rửa sạch bằng nhiều nước để loại hết xà phòng.',
        why: 'Xà phòng tan trong nước, rửa như vậy sẽ mất sản phẩm.',
      },
    ],
    result: 'Bánh xà phòng đã thành hình.',
  },
];
