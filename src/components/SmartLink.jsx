import { Link } from "react-router-dom";

/**
 * Renders a react-router `Link` for internal routes ("/…", including
 * "/path#hash") and a plain anchor for same-page hashes ("#…") or anything
 * external. Keeps every existing `href="#…"` callsite working unchanged
 * while letting new copy link across pages.
 */
export default function SmartLink({ href, children, ...rest }) {
  if (href && href.startsWith("/")) {
    return (
      <Link to={href} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
}
