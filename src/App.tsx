import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { APITester } from "./APITester";

export function App() {
  return (
    <div className="container relative z-10 mx-auto max-w-3xl p-8 text-center">
      <div className="mb-8 flex flex-col items-center gap-3">
        <p className="rounded-full border bg-card px-4 py-1 text-sm text-muted-foreground">TanStack Start</p>
        <h1 className="text-4xl font-bold tracking-tight">How Agave Works</h1>
        <p className="max-w-xl text-muted-foreground">
          A React app recreated with TanStack Start, file-based routing, and server routes.
        </p>
      </div>
      <Card>
        <CardHeader className="gap-4">
          <CardTitle className="text-3xl font-bold">API Tester</CardTitle>
          <CardDescription>
            Try the TanStack Start server routes at{" "}
            <code className="rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono">/api/hello</code>.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <APITester />
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
