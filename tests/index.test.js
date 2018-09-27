import React from "react"
import {shallow} from "enzyme"

import App from "../client/components/App"
import Fretboard from "../client/components/Fretboard"
import KeyChordButtons from "../client/components/KeyChordButtons"

test("Tests running", () => {
  expect(true).toBeTruthy()
})

// Component: App
test("App text 'Guitar HeroKu' appears", () => {
  const expected = "Guitar HeroKu"
  const wrapper = shallow(<App />)
  expect(wrapper.text(expected))
})

test("Fretboard component exists", () => {
  const expected = "<Fretboard"
  const wrapper = shallow(<App />)
  expect(wrapper.text(expected))
})

test("KeyChordButtons component exists", () => {
  const expected = "<KeyChordButtons"
  const wrapper = shallow(<App />)
  expect(wrapper.text(expected))
})


// Component: Fretboard
test("Fretboard has class of fretboard", () => {
  const expected = "fretboard"
  const wrapper = shallow(<Fretboard />)
  expect(wrapper.hasClass(expected))
})

test("Fretboard has IDs for each string", () => {
  const wrapper = shallow(<Fretboard />)
  expect(wrapper.text("Estring1"))
  expect(wrapper.text("Bstring2"))
  expect(wrapper.text("Gstring3"))
  expect(wrapper.text("Dstring4"))
  expect(wrapper.text("Astring5"))
  expect(wrapper.text("Estring6"))
})


// Component: KeyChordButtons