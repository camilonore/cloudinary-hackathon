import styles from '../styles/Aside.module.css'
import common from '../styles/common.module.css'
import { URL_PATH, editOptions } from '../cloudinary/index'
import type { EdtitOptionsType } from '../cloudinary/index'
import { useVideoContext } from '../context/VideoContext'

function Aside() {
  const { currentVideo, setCurrentVideo } = useVideoContext()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!currentVideo) return
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const formInputs = Array.from(formData)
    const optionsUrl: (string | undefined)[] = formInputs.map((input) => {
      const [name, value] = input as [keyof EdtitOptionsType, string]
      if (value !== '') {
        return editOptions[name](Number(value))
      }
    })
    const optionsUrlFiltered = optionsUrl.filter(
      (option) => option !== undefined
    )
    const newUrl = `${URL_PATH}/${optionsUrlFiltered.join(',')}/${
      currentVideo.path
    }`
    setCurrentVideo({ ...currentVideo, url: newUrl })
  }
  const formFields = [
    {
      label: 'Height:',
      name: 'height',
      id: 'height',
      type: 'number',
      placeholder: '500 (px)'
    },
    {
      label: 'Width:',
      name: 'width',
      id: 'width',
      type: 'number',
      placeholder: '500 (px)'
    },
    {
      label: 'Start:',
      name: 'startOffset',
      id: 'startOffset',
      type: 'number',
      placeholder: '30 (seconds)'
    },
    {
      label: 'End:',
      name: 'endOffset',
      id: 'endOffset',
      type: 'number',
      placeholder: '50 (seconds)'
    },
    {
      label: 'Rotate:',
      name: 'rotate',
      id: 'rotate',
      type: 'number',
      placeholder: '45 (degrees)'
    }
  ]

  return (
    <aside className={styles.aside}>
      <form onSubmit={handleSubmit} className={styles.form}>
        {formFields.map((field) => (
          <section className={styles.section} key={field.id}>
            <label className={common.label} htmlFor={field.id}>
              {field.label}
            </label>
            <input
              placeholder={field.placeholder}
              className={common.input}
              type={field.type}
              name={field.name}
              id={field.id}
            />
          </section>
        ))}
        <button className={common.button} type='submit'>
          Apply!
        </button>
      </form>
    </aside>
  )
}

export { Aside }
