import Link from "next/link"
import styles from '../styles/Header.module.scss'

const tabs = [
{
   id: '1',
   path: '/',
   src: './media/tasks.png',
   alt: 'taskmanager',
   title: 'tasks',
},
{
    id: '2',
    path: '/calculator',
    src: './media/calculator.png',
    alt: 'calculator',
    title: 'calculator',
 },
 {
    id: '3',
    path: '/stopwatch',
    src: './media/stopwatch.png',
    alt: 'stopwatch',
    title: 'stopwatch',
 },
 {
    id: '4',
    path: '/weather',
    src: './media/weather.png',
    alt: 'weather',
    title: 'weather',
 },
 {
    id: '5',
    path: '/currency',
    src: './media/currencies.png',
    alt: 'currencies',
    title: 'currencies',
 },
 {
    id: '6',
    path: '/quizapp',
    src: './media/quizapp.png',
    alt: 'quizapp',
    title: 'quizapp',
 },
]

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header__tabs}>
            { tabs.map(({id, path, src, alt, title}) => (
                <Link key={id} href={path}>
                    <div className={styles.header__tab}>
                        <img src={src} alt={alt} />
                        <p>{title}</p>
                    </div>
                </Link>
            ) ) }
            </div>
        </div>
    )
}

export default Header
