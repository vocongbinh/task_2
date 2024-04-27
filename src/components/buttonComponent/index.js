import styles from "./buttonComponent.module.css";
import clsx from "clsx";
import { useState } from "react";
function ButtonComponent({ icon, className, onClick }) {
  const [active, setActive] = useState(false);
  const [children, setChildren] = useState([]);
  return (
    <button
      className={clsx(styles.wrapper, {
        [`${className}`]: className,
        [`${styles.active}`]: active,
      })}
      onClick={() => {
        onClick();
        setChildren((prev) => [...prev, <div></div>]);
        setTimeout(() => {
          setChildren((prev) => prev.slice(1));
        }, 9000);
      }}
    >
      {children.map((ch) => (
        <div className={styles.effect}></div>
      ))}
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ zIndex: "4", height: 24 }}
      >
        {icon}
      </div>
    </button>
  );
}
export default ButtonComponent;
