import styles from "@/styles/Input.module.css";

const Input = ({ name, value, onChange, label, labelStyle, ...otherprops }) => {
  return (
    <div className={styles.group}>
      {label && (
        <label style={labelStyle} htmlFor={name}>
          {label}
        </label>
      )}

      <input
        name={name}
        onChange={onChange}
        value={value}
        id={name}
        {...otherprops}
      />
    </div>
  );
};

export default Input;
