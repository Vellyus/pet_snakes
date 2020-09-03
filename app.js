import TouchSweep from "./touchsweep.js"

const swup = new Swup

const debounce = (fn, delay) =>
{
  let timeout
  return function (...args)
  {
    if (timeout) clearTimeout(timeout)

    timeout = setTimeout(() =>
    {
      fn(...args)
    }, delay)
  }
}


const sections = document.querySelectorAll("#links a")

let position = 0

switch (document.title)
{
  case "Reasons to Keep a Snake": position = 1
    break
  case "Afraid of Snakes?": position = 2
    break
  case "Best Beginner Snakes": position = 3
    break
}

window.addEventListener("wheel", debounce(event =>
{
  if (event.deltaY > 0)
  {
    if (sections[position + 1])
    {
      position++
      console.log(position)
      sections[position].click()
    }
  }
  else
  {
    if (sections[position - 1])
    {
      position--
      console.log(position)
      sections[position].click()
    }

  }
}, 300))




const el = document.querySelector('body');
const data = {
  value: 1
};
const threshold = 150;

new TouchSweep(el, data, threshold);

el.addEventListener('swipeleft', event =>
{
  // event.detail
  console.log("Swiped Left")

});

el.addEventListener('swiperight', event =>
{
  // event.detail
  console.log("Swiped Right")

});

el.addEventListener('swipedown', event =>
{
  // event.detail
  console.log("Swiped Down")

  if (sections[position - 1])
  {
    position--
    sections.forEach(e => e.style.display = "none")
    sections[position].style.display = "block"
    console.log(position)
  }
});

el.addEventListener('swipeup', event =>
{
  // event.detail
  console.log("Swiped Up")

  if (sections[position + 1])
  {
    position++
    console.log(position)
    sections.forEach(e => e.style.display = "none")
    sections[position].style.display = "block"
  }
});

el.addEventListener('tap', event =>
{
  // event.detail
  console.log("Tapped")

});
