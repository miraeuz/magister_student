import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { runAction } from "./actions";

/**
 * Link. Routes go through the router; in-page "#id" anchors scroll inside the main pane; "#" placeholders
 * (controls not backed by an API yet) go through the action resolver so that nothing is silently dead.
 */
export function A({ href, children, onClick, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { pathname } = useLocation();
  const go = useNavigate();
  if (href && href.length > 1 && href.startsWith("#")) {
    const jump = (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" });
      onClick?.(e);
    };
    return <a href={href} onClick={jump} {...rest}>{children}</a>;
  }
  if (!href || href === "#") {
    const dead = (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      if (onClick) { onClick(e); return; }
      runAction(e.currentTarget, pathname, (to) => go(to));
    };
    return <a href="#" data-dead="1" onClick={dead} {...rest}>{children}</a>;
  }
  if (/^(https?:|mailto:|tel:)/.test(href)) return <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick} {...rest}>{children}</a>;
  return <Link to={href} onClick={onClick} {...(rest as object)}>{children}</Link>;
}
