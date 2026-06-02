import { useEffect, useId, useRef, useState } from "react";

type MermaidResult = {
  svg: string;
  bindFunctions?: (element: Element) => void;
};

export function Mermaid({ chart }: { chart: string }) {
  const reactId = useId();
  const id = `mermaid-${reactId.replaceAll(":", "")}`;
  const containerRef = useRef<HTMLDivElement>(null);
  const [result, setResult] = useState<MermaidResult>();

  useEffect(() => {
    let cancelled = false;

    async function renderChart() {
      const { default: mermaid } = await import("mermaid");

      mermaid.initialize({
        startOnLoad: false,
        securityLevel: "loose",
        fontFamily: "inherit",
        theme: "default",
        flowchart: {
          htmlLabels: true,
          nodeSpacing: 80,
          rankSpacing: 80,
          padding: 24,
        },
      });

      const rendered = await mermaid.render(id, chart.replaceAll("\\n", "\n"));
      if (!cancelled) setResult(rendered);
    }

    void renderChart();

    return () => {
      cancelled = true;
    };
  }, [chart, id]);

  useEffect(() => {
    if (result && containerRef.current) {
      result.bindFunctions?.(containerRef.current);
    }
  }, [result]);

  return (
    <div
      ref={containerRef}
      style={{ marginTop: "1.5rem", minHeight: "220px", overflowX: "auto" }}
      dangerouslySetInnerHTML={result ? { __html: result.svg } : undefined}
    />
  );
}
