export default function(callback, times, arg) {
  for(let i = 0; i < times; i++) {
    callback(arg)
  }
}