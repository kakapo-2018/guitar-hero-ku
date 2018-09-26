import request from "superagent"


export function fetchThing() {
  return (dispatch) => {
    request.get("/api/v1/route")
    .then((res) => {
// console.log("------------ actions/index.js fetchThing() --------")
// console.log(res.body)
      return res.body //array of objects from the route
    }).then(dataFromRoute => {
      dispatch(receiveThing(dataFromRoute))
    })
  }
}

export function receiveThing(dataFetchedFromRoute){
// console.log("------------ actions/index.js recieveThing() --------")
// console.log(dataFetchedFromRoute)
  return {
    type: "RECEIVE_THING",
    actionObjectData: dataFetchedFromRoute //array of objects
  }
}