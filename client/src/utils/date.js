//formatTimestamp
function formatTimestamp (timestamps) {
  return new Date(Number(timestamps)).toDateString()
}

export default formatTimestamp