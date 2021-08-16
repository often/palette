let divs = document.querySelectorAll('div')
let colors = ''

let setColor = (el, hex) =>
{
  el.style.background = hex
  el.textContent = hex
  colors += hex

  el.addEventListener('click', async () => {
    await navigator.clipboard.writeText(hex)
    el.textContent = 'copied'

    setTimeout(() => {
      el.textContent = hex
    }, 1000)
  })
}

let randomize = () =>
{
  colors = ''

  for (let div of divs)
  {
    let hex = '#' + Math.floor(Math.random() * 8 ** 8).toString(16).padStart(6, '0')
    setColor(div, hex)
  }

  location.hash = colors
}

if (location.hash)
{
  let colors = location.hash.split('#').slice(1)

  for (let i of divs.keys())
    setColor(divs[i], '#' + colors[i])
}
else randomize()

addEventListener('keyup', randomize)
