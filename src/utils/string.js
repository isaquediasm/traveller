export default function(input, needle) {
  return { __html: input.replace(needle, `<b>${needle}</b>`) }
}
