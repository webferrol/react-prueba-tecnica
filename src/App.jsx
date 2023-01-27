import { useCatFact, useCatImage } from './hooks/'

export const App = () => {
  const { fact, refreshFact } = useCatFact()
  const { url } = useCatImage({ fact })

  const handleClick = async () => {
    await refreshFact()
  }

  return (
    <>
      <div>
        {fact || 'Loading ...'}
        <button className='btn' onClick={handleClick}>Next</button>
      </div>
      <div>{
        !url
          ? 'loading...'
          : <img className='image' src={url} alt={fact} />
        }
      </div>
    </>
  )
}
