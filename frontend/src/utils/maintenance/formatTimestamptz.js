export default function formatTimestamptz(timestamptz){
  const arr = timestamptz.split('T');
  const date = arr[0];
  const time = arr[1];
  return {
    date: date.substr(8) + '/' + date.substr(5, 2) + '/' + date.substr(0, 4),
    time: time.substr(0, 5),
    tz: timestamptz.substr(-6)
  }
}