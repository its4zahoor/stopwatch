const H_mSec = 60 * 60 * 1000;
const M_mSec = 60 * 1000;
const S_mSec = 1000;

export const formatTime = (mSec) => {
  const ms = mSec % 1000;
  const s = Math.floor((mSec / S_mSec) % 60);
  const m = Math.floor((mSec / M_mSec) % 60);
  const h = Math.floor(mSec / H_mSec);

  const padMs = ms.toString().padStart(3, "0");
  const padS = s.toString().padStart(2, "0");
  const padM = m.toString().padStart(2, "0");
  const padH = h.toString().padStart(2, "0");

  return `${padH}:${padM}:${padS}.${padMs}`;
};
