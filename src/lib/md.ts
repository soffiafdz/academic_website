/**
 * Minimal inline-markdown renderer for YAML-authored content.
 * Supports: **bold**, *italic*, `code`, [link](url). Safe because content
 * is authored by us, not user input — set:html is fine on the output.
 */
export function md(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code>$1</code>');
}
