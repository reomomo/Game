// スプレーで色を塗る

const H = 6; // 画用紙のサイズ
const W = 6; // 画用紙のサイズ
const S = 2; // スプレーした回数
let T = 9; // ドローンが種をまいた高さ
let x = 5; // 種をまいた場所が畑の左から何区画目か
let y = 8; // 種をまいた場所が畑の上から何区画目か

const aryArea = [...Array(H * W)].fill(0);

// コンソールを見やすくする為の数字登録
aryArea.splice(5, 1, 5);
aryArea.splice(11, 1, 6);
aryArea.splice(17, 1, 7);
aryArea.splice(23, 1, 8);
aryArea.splice(29, 1, 9);

for (num = 2; num <= S + 1; num++) {
  let center = (y - 1) * W + x - 1;
  let area = parseInt(T / 2, 10);
  aryArea.splice(center, 1, "C");
  if (area == 0) {
    aryArea.splice(center, 1, aryArea[center] += 1);
  } else if (area >= 1) {
    // 下段の一列
    if (center + W * area < H * W) {
      // 真ん中（Wが偶数の場合には真ん中の左)
      if ((y - 1) * W <= center - area && (y - 1) * W + W - 1 >= center + area) {
        for (let i = center + W * area - area; i <= center + W * area + area; i++) {
          aryArea.splice(i, 1, aryArea[i] += 1);
        }
      }
      // 左寄りでareaが枠内に収まる場合
      else if (Math.round(W / 2) > x && x <= area) {
        for (let i = (y - 1) * W + W * area; i <= center + W * area + area; i++) {
          aryArea.splice(i, 1, aryArea[i] += 1);
        }
      }
      // 右寄りでareaが枠内に収まる場合
      else if (Math.round(W / 2) < x && x > area) {
        for (let i = center + W * area - area; i <= (y - 1) * W + W * (area + 1) - 1; i++) {
          aryArea.splice(i, 1, aryArea[i] += 1);
        }
      }
    }
    // 上段の一列
    if (y > area) {
      // 真ん中（Wが偶数の場合には真ん中の左)
      if ((y - 1) * W <= center - area && (y - 1) * W + W - 1 >= center + area) {
        for (let i = center - W * area - area; i <= center - W * area + area; i++) {
          aryArea.splice(i, 1, aryArea[i] += 1);
        }
      }
      // 左よりでareaが枠内に収まる場合
      else if (Math.round(W / 2) > x && x <= area) {
        for (let i = (y - 1) * W - W * area; i <= center - W * area + area; i++) {
          aryArea.splice(i, 1, aryArea[i] += 1);
        }
      }
      // 右寄りでareaが枠内に収まる場合
      else if (Math.round(W / 2) < x && x > area) {
        for (let i = center - W * area - area; i <= (y - 1) * W + W - 1 - W * area; i++) {
          aryArea.splice(i, 1, aryArea[i] += 1);
        }
      }
    }
    // 左一列（上下一段ずつ省く）
    if ((y - 1) * W <= center - area) {
      // areaが枠内に収まる場合
      if (y > area && center + W * area < H * W) {
        for (let i = center - W * area - area + W; i < center + W * area - area; i += W) {
          aryArea.splice(i, 1, aryArea[i] += 1);
        }
      }
      // 上寄りでareaが枠内に収まらない場合
      else if (y <= area) {
        for (let i = x - area - 1; i < center + W * area - area; i += W) {
          aryArea.splice(i, 1, aryArea[i] += 1);
        }
      }
      // 下寄りでareaが枠内に収まらない場合
      else if (H - y <= area) {
        for (let i = center - W * area - area + W; i <= H * W; i += W) {
          aryArea.splice(i, 1, aryArea[i] += 1);
        }
      }
    }
    // 右一列（上下一段ずつ省く）
    if ((y - 1) * W + W - 1 >= center + area) {
      // areaが枠内に収まる場合
      if (y > area && center + W * area < H * W) {
        for (let i = center - W * area + area + W; i < center + W * area + area; i += W) {
          aryArea.splice(i, 1, aryArea[i] += 1);
        }
      }
      // 上寄りでareaが枠内に収まらない場合
      else if (y <= area) {
        for (let i = x + area - 1; i < center + W * area + area; i += W) {
          aryArea.splice(i, 1, aryArea[i] += 1);
        }
      }
      // 下寄りでareaが枠内に収まらない場合
      else if (H - y <= area) {
        console.log(y - Math.round(H / 2));
        for (let i = center - W * area + area + W; i < center + W * area + area; i += W) {
          aryArea.splice(i, 1, aryArea[i] += 1);
        }
      }
    }
  }
  T = 7;
  x = 4;
  y = 6;
}


for (let num = 1; num <= H; num++) {
  console.log(aryArea.splice(0, W).join(" "));
}