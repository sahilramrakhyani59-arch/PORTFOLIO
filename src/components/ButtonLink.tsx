

type ButtonLinkProps = {
  href: string;
  icon: React.ElementType;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  external?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
};

export function ButtonLink({
  href,
  icon: Icon,
  children,
  variant = 'primary',
  external = false,
  onClick,
  className = '',
}: ButtonLinkProps) {
  const base =
    'group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#060a18]';

  const styles: Record<string, string> = {
    primary:
      'bg-gradient-to-r from-blue-500 to-violet-500 text-white hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:scale-[1.02]',
    secondary:
      'glass text-slate-200 hover:text-white hover:border-blue-400/40 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]',
    ghost: 'text-slate-300 hover:text-white',
  };

  return (
    <a
      href={href}
      onClick={onClick}
      className={`${base} ${styles[variant]} ${className}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
      {children}
    </a>
  );
}
