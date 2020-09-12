import TouchSweep from "./touchsweep.js"

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
    console.log(position)
    sections[position].click()
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
    sections[position].click()
  }
});

el.addEventListener('tap', event =>
{
  // event.detail
  console.log("Tapped")

});


/* ANIMATIONS  */

const section = document.querySelector("section")
const spans = document.querySelectorAll("span")
const textbox = document.querySelector(".textbox")
const link = document.querySelector("a")
const pageIndicator = document.querySelector("ul")


const tl = gsap.timeline()

console.log("loaded")
tl.fromTo(section, 1, {width: "0"}, {width: "100%", ease: Power2.easeInOut}, "-=1")
tl.fromTo(section, 1, {x: "-100%"}, {x: "0", ease: Power2.easeInOut},)
tl.fromTo(spans, 1, {display: "inline-block", x: "30", opacity: 0}, {x: "0", opacity: "100%", ease: Power2.easeInOut})
tl.fromTo(pageIndicator, 1, {opacity: 0, x: 30}, {opacity: "100%", x: 0}, "-=1")
tl.fromTo(textbox, 1, {x: "30", opacity: 0}, {x: "0", opacity: "100%", ease: Power2.easeInOut}, "-=1")
tl.fromTo(link, 1, {opacity: 0, y: 10}, {opacity: "100%", y: 0, ease: Power2.easeInOut},)


