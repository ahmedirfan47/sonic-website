import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Container } from "../components/ui/Container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <div className="font-mono text-sm text-[var(--color-accent)]">404</div>
      <h1 className="mt-4 text-2xl font-bold text-[var(--color-text)]">
        Page not found
      </h1>
      <p className="mt-2 text-[var(--color-text-muted)]">
        The page you're looking for doesn't exist.
      </p>
      <div className="mt-8">
        <Link to="/">
          <Button>Back to home</Button>
        </Link>
      </div>
    </Container>
  );
}