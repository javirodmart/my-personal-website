const box = document.getElementsByTagName('a');

// 👇️ Change text color on mouseover
box.addEventListener('mouseover', function handleMouseOver() {
  box.style.color = 'yellow';
});

// 👇️ Change text color back on mouseout
box.addEventListener('mouseout', function handleMouseOut() {
  box.style.color = 'red';
});