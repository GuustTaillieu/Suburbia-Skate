export async function getDominantColor(url: string) {
  const paletteUrl = new URL(url);
  paletteUrl.searchParams.set("palette", "json");

  const res = await fetch(paletteUrl);
  const palette = await res.json();

  return (
    palette.dominant_colors.vibrant?.hex ??
    palette.dominant_colors.vibrant_light?.hex
  );
}
