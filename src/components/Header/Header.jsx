import Checkbox from '../Checkbox/Checkbox';

export default function Header() {
  console.log('Header');
  return (
    <header className="header">
      <nav className="contentMaxWidth">
        <Checkbox />
      </nav>
    </header>
  );
}
