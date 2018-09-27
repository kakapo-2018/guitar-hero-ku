import React from "react"
import {shallow} from "enzyme"

import {App} from "../client/components/App"

test("connection", () => {
  expect(true).toBeTruthy()
})

test("app text appears", () => {
  const expected = "Hi React!"
  const wrapper = shallow(<App />)
  expect(wrapper.text()).toBe(expected)
})
