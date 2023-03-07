import styles from '../styles/Footer.module.css'
import { AddSideFile } from './AddSideFile'

function DummyFooter() {
  return <footer className={styles.footer} />
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <AddSideFile />
    </footer>
  )
}

export { Footer, DummyFooter }
