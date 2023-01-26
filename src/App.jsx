import { useEffect, useState } from 'react'

export const App = () => {
  const [fact, setFact] = useState(null)
  useEffect(() => {
    fetch(import.meta.env.VITE_CAT_ENDPOINTCAT_FACT)
      .then(res => res.json())
      .then(setFact)
      .catch(console.log)
  }, [])
  return (
    <div>{fact && JSON.stringify(fact)}</div>
  )
}
