export function formatStars(count: number): string {
  if (count >= 1_000_000) {
    return (count / 1_000_000).toFixed(1).replace(/\.0$/, "") + " M";
  } else if (count >= 1000) {
    return (count / 1000).toFixed(1).replace(/\.0$/, "") + " K";
  } else {
    return count.toString();
  }
}
