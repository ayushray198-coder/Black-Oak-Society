import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center text-text">
      <h1 className="text-8xl font-bold text-primary">404</h1>

      <h2 className="mt-4 text-3xl font-semibold">
        Page Not Found
      </h2>

      <p className="mt-3 max-w-md text-text-secondary">
        The page you're looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-8 rounded-md border border-primary px-6 py-3 transition-all duration-300 hover:bg-primary hover:text-background"
      >
        Back to Home
      </Link>
    </main>
  );
}

export default NotFound;