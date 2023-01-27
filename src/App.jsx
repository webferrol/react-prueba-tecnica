import { useCatFact, useCatImage } from './hooks/'

export const App = () => {
  const { fact, refreshFact } = useCatFact()
  const { url } = useCatImage({ fact })

  const handleClick = async () => {
    await refreshFact()
  }

  return (
    <main className='container'>
      <div>
        {fact || 'Loading ...'}
        <button onClick={handleClick}>Next</button>
      </div>
      <div>{
        !url
          ? 'loading...'
          : <img src={url} />
        }
      </div>
    </main>
  )
}
