import {wordbank} from "./all-words"
import {answers} from "./answer-words"

//const defaultMessage = ' Using word of the day instead.'

export function getWordOfTheDay() {
  const now = new Date()
  // word list start on Feb 1st
  const start = new Date(2022, 1, 1)
  const diff = Number(now) - Number(start)
  let day = Math.floor(diff / (1000 * 60 * 60 * 24))
  while (day > answers.length) {
    day -= answers.length
  }
  return answers[day]
}

export const allWords = wordbank
