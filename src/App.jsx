import { useCatFact } from './hooks/useCatFact'

export const App = () => {
  const { fact, refreshFact } = useCatFact()

  const handleClick = async () => {
    await refreshFact()
  }

  return (
    <main>
      <div>{fact || 'Loading ...'}</div>
      <button onClick={handleClick}>Next</button>
    </main>
  )
}
