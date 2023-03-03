import { Aside } from './components/Aside'
import { VideoPlayer } from './components/VideoPlayer'
import { useVideoContext } from './context/VideoContext'
import styles from './styles/App.module.css'
import { UploadFiles } from './components/UploadFiles'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

function App() {
  const { video } = useVideoContext()
  return (
    <main className={styles.main}>
      <Header />
      <section className={styles.section}>
        {video ? <VideoPlayer /> : <UploadFiles />}
        <Aside />
        <Footer />
      </section>
    </main>
  )
}

export default App
