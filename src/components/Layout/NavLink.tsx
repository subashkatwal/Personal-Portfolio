import React from 'react';

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
  isMobile?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, onClick, isMobile = false }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
    if (onClick) onClick();
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`relative font-medium transition-colors hover:text-blue-500 ${
        isMobile
          ? 'text-slate-800 dark:text-white text-xl py-2'
          : 'text-slate-700 dark:text-slate-200 text-sm py-1'
      }`}
    >
      {label}
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
    </a>
  );
};

export default NavLink;