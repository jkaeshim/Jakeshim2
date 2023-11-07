---
toc: true
comments: false
layout: post
title: DOM
Description:
type: hacks
courses: { compsci: {week: 6} }
---

<!DOCTYPE html>
<html>
<body>

<p id="demo">This is a demonstration.</p>

<button onclick="changeText()">Click me to change the text!</button>

<script>
function changeText() {
  document.getElementById("demo").innerHTML = "Text has been changed!";
}
</script>

</body>
</html>
