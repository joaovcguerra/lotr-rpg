import Ficha from './components/Ficha/Ficha';
import './globals.css'; // Mantenha o globals.css se quiser usar estilos globais

export default function Home() {
  return (
    <main>
      {/* No futuro, aqui teremos a navegação com abas */}
      <Ficha />
    </main>
  );
}