import { createFileRoute } from "@tanstack/react-router";
import { DocsRoutePage, loadDocsPage } from "@/lib/docs-route";

export const Route = createFileRoute("/$")({
  component: Page,
  loader: ({ params }) => loadDocsPage(params._splat?.split("/") ?? []),
});

function Page() {
  return <DocsRoutePage data={Route.useLoaderData()} />;
}
