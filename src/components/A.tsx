import type { AnchorHTMLAttributes } from "react";
import { Link } from "react-router";

/** Internal links use the router; "#" placeholders (actions not wired yet) do nothing. */
export function A({ href, children, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  if (href && href.length > 1 && href.startsWith("#")) {
    // in-page anchor (e.g. a table of contents): let the browser scroll
    return <a href={href} {...rest}>{children}</a>;
  }
  if (!href || href === "#") {
    return (
      <a href="#" onClick={(e) => e.preventDefault()} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link to={href} {...(rest as object)}>
      {children}
    </Link>
  );
}
