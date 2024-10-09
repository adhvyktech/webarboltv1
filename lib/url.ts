export function getAbsoluteUrl(path: string): string {
  const baseUrl = typeof window !== 'undefined' && window.location.origin
    ? window.location.origin
    : 'http://localhost:3000';
  
  return `${baseUrl}${path}`;
}