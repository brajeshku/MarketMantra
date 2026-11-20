const basePath = "/MarketMantra";

/** Prefix a public/ asset URL with the app's deployment path. */
export function publicAsset(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}
