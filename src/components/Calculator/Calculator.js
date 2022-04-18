import styles from './Calculator.module.css'
import {useCallback, useRef, useState} from "react";
import Button from "../Button/Button";

const keypads = ['C', '+-', '%', '/', '7', '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=']
const numbers = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0']

const Calculator = () => {
    const prevOutput = useRef('0');
    const [output, setOutput] = useState('0');

    const handleInput = useCallback((key) => {
        if (numbers.includes(key)) {
            setOutput(o => o + key);
        } else {
            switch (key) {
                case '+':
                    prevOutput.current = output;
                    setOutput('');

                    break;
                case '=':
                    const num1 = parseInt(prevOutput.current);
                    const num2 = parseInt(output);

                    setOutput((num1 + num2).toString());
                    break;
                default:
                    break;
            }
        }
    }, [output, setOutput]);

    const rows = Math.ceil(keypads.length / 4);
    const rowsArray = Array.from({length: rows}, (_, i) => i);

    return (<div className={styles.Calculator}>
        <p className={styles.screen}>{output}</p>
        <div className="keypad">
            {rowsArray.map(row =>
                <div key={row} className={styles.row}>
                    {
                        keypads.slice(row * 4, row * 4 + 4).map((keypad, i) => {
                            const className = keypads.length - 1 === (row * 4 + i) ? styles.col50 : styles.col25;

                            return (
                                <div className={className}>
                                    <Button onClick={() => handleInput(keypad)}>
                                        {keypad}
                                    </Button>
                                </div>
                            )

                        })
                    }
                </div>
            )}
        </div>
    </div>)
}

export default Calculator;
