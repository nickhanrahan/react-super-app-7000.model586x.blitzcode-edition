import { TextTest } from './texts'

const existingText: TextTest = {
  text: 'Server started time.',
  date: new Date(),
}

export const generateTexts = () => {
  const newText: TextTest = {
    text: 'This is a new text.',
    date: new Date(),
  }
  return [existingText, newText]
}
