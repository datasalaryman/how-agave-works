import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/hello")({
  server: {
    handlers: {
      GET: async () => Response.json({ message: "Hello, world!", method: "GET" }),
      PUT: async () => Response.json({ message: "Hello, world!", method: "PUT" }),
    },
  },
});
