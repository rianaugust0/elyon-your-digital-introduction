import logo from "@/assets/elyon-logo.png.asset.json";
import { Link } from "@tanstack/react-router";

export function Logo({
  size = 36,
  withWordmark = true,
  className = "",
}: {
  size?: number;
  withWordmark?: boolean;
  className?: string;
}) {
  return (
    <Link to="/" className={`group flex items-center gap-2.5 ${className}`}>
      <img
        src={logo.url}
        alt="Elyon Corporate"
        width={size}
        height={size}
        className="rounded-lg object-contain"
        style={{ width: size, height: size }}
      />
      {withWordmark && (
        <span className="font-display text-lg tracking-tight text-foreground">
          Elyon
        </span>
      )}
    </Link>
  );
}

export function LogoMark({ size = 96 }: { size?: number }) {
  return (
    <img
      src={logo.url}
      alt="Elyon Corporate"
      width={size}
      height={size}
      className="rounded-2xl object-contain shadow-elegant"
      style={{ width: size, height: size }}
    />
  );
}
