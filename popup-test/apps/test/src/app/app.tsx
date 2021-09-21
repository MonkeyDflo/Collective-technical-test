import { useState } from 'react';
import styles from './app.module.css';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';

import { Popup } from '@popup-test/ui';

export function App() {
  const [trigger, setTrigger] = useState(false);
  console.log(trigger);
  return (
    <div className={styles.app}>
      <header className="flex">
        <Logo width="75" height="75" />
        <h1>Welcome to test!</h1>
      </header>
      <main>
        <h2>Resources &amp; Tools</h2>
        <button
          className={styles.button}
          onClick={() => {
            setTrigger(true);
          }}
        >
          Open pop up!
        </button>
        <Popup trigger={trigger} setTrigger={setTrigger} />
        <h2>Next Steps</h2>
        <p>Here are some things you can do with Nx.</p>
        <details open>
          <summary>Add UI library</summary>
          <pre>{`# Generate UI lib
nx g @nrwl/react:lib ui

# Add a component
nx g @nrwl/react:component xyz --project ui`}</pre>
        </details>
        <details>
          <summary>View dependency graph</summary>
          <pre>{`nx dep-graph`}</pre>
        </details>
        <details>
          <summary>Run affected commands</summary>
          <pre>{`# see what's been affected by changes
nx affected:dep-graph

# run tests for current changes
nx affected:test

# run e2e tests for current changes
nx affected:e2e
  `}</pre>
        </details>
      </main>
    </div>
  );
}

export default App;
