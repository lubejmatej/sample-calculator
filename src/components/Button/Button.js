import styles from './Button.module.css'

const Button = ({children, ...restProps}) => {
    return (<button className={styles.Button} {...restProps}>
        {children}
    </button>)
}

export default Button;
