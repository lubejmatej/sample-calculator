import styles from './App.module.css';
import Calculator from "./components/Calculator/Calculator";

const App = () => {
  return (
    <div className={styles.App}>
      <Calculator />
    </div>
  );
}

export default App;
