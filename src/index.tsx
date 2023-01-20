import blurHashToDataURL from "./blurHashToDataUrl";

export default function useBlurData(
  blurHash: string,
  width: number = 160,
  height: number = 120,
  punch?: number
) {
  return [blurHashToDataURL(blurHash, width, height, punch)];
}