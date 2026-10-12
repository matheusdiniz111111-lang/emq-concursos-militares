import Link from 'next/link';

const navigation = [
  { href: '/', label: 'Início' },
  { href: '/cursos', label: 'Cursos' },
  { href: '/banco', label: 'Banco de questões' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/login', label: 'Entrar' },
];

export default function NavBar() {
  return (
    <header className="topbar">
      <div className="container nav-shell">
        <Link href="/" className="brand" aria-label="EMQ Concursos Militares">
          <span className="brand-mark">EMQ</span>
          <span className="brand-text">CONCURSOS MILITARES</span>
        </Link>

        <nav className="nav" aria-label="Navegação principal">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
