function btnClick() {
    console.log("Button clicked");
    document.querySelector(".hire-btn").innerHTML = "Noob Dev Can't be Hired";
}
const makeCall = () => {
    window.open('tel:+8801626199913');
}
const sendMail = () => {
    window.open('mailto:"rifatsaown0@gmail.com"');
}
const initialState = {}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case rifatsaown0:
    return { ...state, ...payload }

  default:
    return state
  }
}
