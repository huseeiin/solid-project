import { Title } from "@solidjs/meta";
import { GET, HttpStatusCode } from "@solidjs/start";

export default function NotFound() {
  return (
    <main>
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />
      <h1>Page Not Found</h1>
      <a href="/">Home</a>
    </main>
  );
}
