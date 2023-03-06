import { Aside } from './components/Aside'
import { VideoPlayer } from './components/VideoPlayer'
import { useVideoContext } from './context/VideoContext'
import styles from './styles/App.module.css'
import { UploadFilesButton } from './components/UploadFilesButton'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

function ButtonForNoFiles() {
  return (
    <div className={styles.filesContainer}>
      <h1>Start by uploading a file! 📼</h1>
      <UploadFilesButton />
    </div>
  )
}

function App() {
  const { currentVideo } = useVideoContext()
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.section}>
          {/* {currentVideo.url ? <VideoPlayer /> : <ButtonForNoFiles />} */}
          <VideoPlayer />
          <Footer />
        </section>
        <Aside />
      </main>
    </>
  )
}

export default App
