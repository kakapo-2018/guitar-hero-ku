import React from "react"
import {shallow} from "enzyme"

import App from "../client/components/App"

test("connection", () => {
  expect(true).toBeTruthy()
})

test("App text appears", () => {
  const expected = "Hi React!"
  const wrapper = shallow(<App />)
  expect(wrapper.text()).toBe(expected)
})

test("App has class of AppDiv", () => {
  const expected = "AppDiv"
  const wrapper = shallow(<App />)
  expect(wrapper.hasClass(expected))
})

