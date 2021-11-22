export default function waiting (state = false, action) {
  if (/PENDING/.test(action.type)) return true
  if (/SUCCESS/.test(action.type)) return false
  else return state
}
