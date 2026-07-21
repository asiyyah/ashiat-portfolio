import Link from "next/link";

interface ButtonBaseProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: undefined;
  onClick?: () => void;
  type?: "button" | "submit";
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  onClick?: undefined;
  type?: undefined;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseStyles = "btn";

const variants = {
  primary: "btn-primary",
  secondary: "btn-secondary",
};

export default function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  const styles = `${baseStyles} ${variants[variant]} ${className}`.trim();

  if (props.href !== undefined) {
    return (
      <Link href={props.href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      className={styles}
    >
      {children}
    </button>
  );
}
