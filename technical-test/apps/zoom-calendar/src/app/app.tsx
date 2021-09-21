import styles from './app.module.scss';

import logo from './collective_logo.jpeg';
import { Calendar } from '@technical-test/calendar';

export function App() {
  return (
    <div className={styles.app}>
      <header className="flex">
        <img src={logo} alt="logo"></img>
        <h1>Welcome to Collective zoom-calendar !</h1>
      </header>
      <main>
        <Calendar />
      </main>
    </div>
  );
}

export default App;
