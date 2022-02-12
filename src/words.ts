import {wordbank} from "./all-words"
import {answers} from "./answer-words"

//const defaultMessage = ' Using word of the day instead.'

export function getDayNumber() {
  const now = new Date()
  // word list start on Feb 12th
  const start = new Date(2022, 1, 12)
  const diff = Number(now) - Number(start)
  let day = Math.floor(diff / (1000 * 60 * 60 * 24)) + 1
  while (day > answers.length) {
    day -= answers.length
  }
  return day
}

export function getWordOfTheDay(day: number) {
  // -1 to get the zeroth item on list
  return answers[(day - 1)]
}

export function getRandomWord() {
  let length = answers.length;
  let randint = Math.floor((Math.random() * length) + 1);
  return answers[randint]
}

export const allWords = wordbank
