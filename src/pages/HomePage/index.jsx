import CardInput from '../../components/CardInput';
import './style.css';

export const HomePage = () => {
  return (
    <div className="container">
      <header>
        <h1>Kreditní karta</h1>
      </header>
      <main>
        <CardInput/>
      </main>
    </div>
  );
};
