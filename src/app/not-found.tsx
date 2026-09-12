import Link from "next/link";
export default function NotFound() {
  return (
    <div className="wrap not-found">
      <p className="eyebrow">404 / A path not on the map</p>
      <h1>A different way in.</h1>
      <p>
        This page may have moved, may not be public, or may never have been
        published. Protected and unpublished stories do not provide access here.
      </p>
      <Link href="/explore" className="button">
        Return to Compass ↗
      </Link>
    </div>
  );
}
