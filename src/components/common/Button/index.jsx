import styles from "./style.module.css";

const Button = ({ children, callback, type = "button", variant = "primary", className = "" }) => {
  return (
    <button
      onClick={callback}
      type={type}
      className={`${styles.btn} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
