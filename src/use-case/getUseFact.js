export const getCatFact = async () => {
  const res = await fetch(import.meta.env.VITE_CAT_ENDPOINTCAT_FACT)
  if (!res.ok) throw new Error('Error fetching fact')
  const { fact } = await res.json()
  return fact
}
