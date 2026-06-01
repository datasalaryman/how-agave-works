import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/hello/$name")({
  server: {
    handlers: {
      GET: async ({ params }) => Response.json({ message: `Hello, ${params.name}!` }),
    },
  },
});
