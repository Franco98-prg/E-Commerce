import { useState, useEffect } from "react";
import Button from "../Button";
import styles from "./style.module.css";

const Counter = ({ initial = 1, min = 1, max = 10, onChange }) => {
  const [num, setNum] = useState(initial);

  const sumar = () => {
    if (num < max) setNum(num + 1);
  };

  const restar = () => {
    if (num > min) setNum(num - 1);
  };

  useEffect(() => {
    if (onChange) onChange(num);
  }, [num]);

  return (
    <div className={styles.wrapper}>
      <Button callback={restar} variant="secondary">-</Button>

      <input
        type="text"
        value={num}
        readOnly
        className={styles.input}
      />

      <Button callback={sumar} variant="primary">+</Button>
    </div>
  );
};

export default Counter;