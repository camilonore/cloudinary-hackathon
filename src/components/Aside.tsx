import styles from '../styles/Aside.module.css'
import common from '../styles/common.module.css'

function Aside() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const height = e.currentTarget.height.value
    const width = e.currentTarget.width.value
    console.log(height, width)
  }
  const formFields = [
    {
      label: 'Height:',
      name: 'height',
      id: 'height',
      type: 'text'
    },
    {
      label: 'Width:',
      name: 'width',
      id: 'width',
      type: 'text'
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
