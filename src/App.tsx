import { Aside } from './components/Aside'
import { VideoPlayer } from './components/VideoPlayer'
import { useVideoContext } from './context/VideoContext'
import styles from './styles/App.module.css'
import { UploadFilesButton } from './components/UploadFilesButton'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

function App() {
  const { files } = useVideoContext()
  return (
    <main className={styles.main}>
      <Header />
      <section className={styles.section}>
        {files.length != 0 ? <VideoPlayer /> : <UploadFilesButton />}
        <Aside />
        <Footer />
      </section>
    </main>
  )
}

export default App
