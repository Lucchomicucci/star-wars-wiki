import styles from './styles.module.css'

interface Props {
    text: string,
    value: string | number
    children: any
}

const TextItem: React.FC<Props> = ({text, value, children}) => {
    return(
        <div className={styles.textContainer}>
        {children}
        <p style={{marginLeft: 10}}>{text}: <span>{value}</span></p>
        </div>
    )
}

export default TextItem