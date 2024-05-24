export default defineEventHandler(async (event) => {
  //ReadForm Data
  const inputForm = readBody(event)
  console.log("Login action: ", inputForm)
  return inputForm
})
