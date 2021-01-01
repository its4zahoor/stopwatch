export const formatTime = (mSec) => {
  const ms = mSec % 1000;
  const s = Math.floor(mSec / 1000);
  const m = Math.floor(s / 60);
  const h = Math.floor(m / 60);

  const padMs = ms.toString().padStart(3, "0");
  const padS = s.toString().padStart(2, "0");
  const padM = m.toString().padStart(2, "0");
  const padH = h.toString().padStart(2, "0");

  return `${padH}:${padM}:${padS}.${padMs}`;
};
