// Simple utility function for combining class names
// This is a simplified version that doesn't require external dependencies

export function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(' ');
}