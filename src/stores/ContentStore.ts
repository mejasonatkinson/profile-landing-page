import { defineStore } from 'pinia'

export const useContentStore = defineStore('contentStore', {
  state: () => ({
    title: ["Jason Atkinson,", "Creative Developer"],
    location: "London",
    subtitle: [
        "At my core I am a creative problem solver.",
        "This passion and creative need to understand, is the driving force behind everything I do."
    ],
  })
})

// https://www.youtube.com/playlist?list=PL4cUxeGkcC9hp28dYyYBy3xoOdoeNw-hD
// (4)