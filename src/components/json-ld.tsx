/**
 * Renders a JSON-LD <script> tag for structured data (schema.org).
 * Helps search engines and AI systems understand page content beyond raw text.
 * https://nextjs.org/docs/app/guides/json-ld
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
