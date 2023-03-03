import { Aside } from './components/Aside'
import { VideoPlayer } from './components/VideoPlayer'
import { useVideoContext } from './context/VideoContext'
import styles from './styles/App.module.css'
import { UploadFiles } from './components/UploadFiles'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

function App() {
  const { videoUrl, setVideoUrl } = useVideoContext()
  return (
    <main className={styles.main}>
      <Header />
      <section className={styles.section}>
        {videoUrl != '' ? <VideoPlayer /> : <UploadFiles />}
        <Aside />
        <Footer />
      </section>
    </main>
  )
}

export default App
