// src/components/sections/Header/index.jsx
// import styles from './Header.module.css';

function Header() {
  return (
    <header style={{ borderBottom: '1px solid #d4d4d4' }}>
      <div className="container" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <h2>MECK</h2>
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a href="/">Главная</a>
          <span>|</span>
          <a href="/">Музыка</a>
          <span>|</span>
          <a href="/">Сообщества</a>
          <span>|</span>
          <a href="/">Друзья</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
