const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a public/ asset URL with the app's deployment path. */
export function publicAsset(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}
