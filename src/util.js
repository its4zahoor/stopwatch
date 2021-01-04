const H_mSec = 60 * 60 * 1000;
const M_mSec = 60 * 1000;
const S_mSec = 1000;

export const formatTime = (mSec) => {
  let left = mSec;
  const h = Math.floor(left / H_mSec);
  left -= h * H_mSec;
  const m = Math.floor(left / M_mSec);
  left -= m * M_mSec;
  const s = Math.floor(left / S_mSec);
  left -= s * S_mSec;
  const ms = left % 1000;

  const padMs = ms.toString().padStart(3, "0");
  const padS = s.toString().padStart(2, "0");
  const padM = m.toString().padStart(2, "0");
  const padH = h.toString().padStart(2, "0");

  return `${padH}:${padM}:${padS}.${padMs}`;
};
