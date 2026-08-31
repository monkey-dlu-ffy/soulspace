import SmartLink from "./SmartLink";

/**
 * Single button primitive used for every action on the site.
 * Renders a link when `href` is supplied (a router `Link` for internal
 * routes, a plain <a> for in-page hashes) and a real <button> otherwise.
 *
 * @param {"primary"|"secondary"|"soft"|"ghost"} variant
 * @param {"md"|"sm"} size
 * @param {boolean}   full   Stretch to the container width.
 */
export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  full = false,
  className = "",
  ...rest
}) {
  const classes = [
    "btn",
    `btn--${variant}`,
    size === "sm" ? "btn--sm" : "",
    full ? "btn--full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <SmartLink className={classes} href={href} {...rest}>
        {children}
      </SmartLink>
    );
  }

  return (
    <button className={classes} type="button" {...rest}>
      {children}
    </button>
  );
}
