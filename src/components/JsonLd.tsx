// Server component — emits JSON-LD structured data inline.
// Use one <JsonLd> per schema object; multiple are allowed per page.

type SchemaObject = Record<string, unknown>;

export function JsonLd({ data }: { data: SchemaObject | SchemaObject[] }) {
  const json = JSON.stringify(data);
  return (
    <script
      type="application/ld+json"
      // Next.js inlines this without escaping — JSON is safe to embed as-is.
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
