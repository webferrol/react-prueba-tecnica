export const getWordFromSentence = (sentence) => {
  return sentence.split(/\s/i, 1).join(' ')
}
