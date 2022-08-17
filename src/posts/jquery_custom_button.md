---
title: jQuery custom color-changing button.
description: A blog post about a little program I write to study for quizzes.
date: 2022-02-16
tags:
  - jQuery
layout: layouts/post.njk
---
<script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>

## How to make a custom color-changing button with jQuery.

Here is the result of what we will make:

<button class="myButton">Click Me!</button>

Let's jump right into it.

---
### Step One: Import jQuery from the CDN.

A CDN, or a Content Distribution Network is a way for you to load external Javascript into your webpage.

In this case we will be loading the jQuery library from their CDN.

Bellow is the HTML:

```html
<html>
	<head>
		<title>Awesome jQuery Button</title>
	</head>
	<body>
		<script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
	</body>
</html>
```

We can import the jQuery library directly from their site by specifiying the path to the file inside our `<script>` tag, pretty neat.

---
### Step Two: Create the button and style it using jQuery.

Bellow are the changes to the HTML:

```html
<html>
	<head>
		<title>Awesome jQuery Button</title>
	</head>
	<body>
		<button class="myButton">Click Me!</button>
		<script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
	</body>
</html>
<script>
	var button = $(".myButton");

	// Style the button.
	button.css("width", "150");
	button.css("height", "50");
	button.css("background-color", "#a9a1e1");
	button.css("border-radius", "15px");
	button.css("font-family", "Monospace");
</script>
```

There's a lot to digest here, let's start with the `<button>` tag.

First we create a button with the class of `myButton` so that we can easily create multiple different buttons that will be the same.

Secondly, we create a reference to that button in our jQuery script using the jQuery selector `$(".myButton")`.

Thirdly, we style the button using the `button.css("<key>", "<value>")` method provided to us by jQuery.

---
### Step Three Create the onClick function and bind it to the button.

```html
<html>
	<head>
		<title>Awesome jQuery Button</title>
	</head>
	<body>
		<button class="myButton">Click Me!</button>
		<script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
	</body>
</html>
<script>
	var button = $(".myButton");

	// Style the button.
	button.css("width", "150");
	button.css("height", "50");
	button.css("background-color", "#a9a1e1");
	button.css("border-radius", "15px");
	button.css("font-family", "Monospace");

	var clicked = false;

	const onClick = () => {
		if (clicked === true) {
			button.css("background-color", "#a9a1e1");
			clicked = false;
		} else {
			button.css("background-color", "#98c379");
			clicked = true;
		}
	}

	button.on("click", onClick);
</script>
```

Firstly, we are creating a click variable to check if the button is active or not.

Secondly, we are creating a function that will get called if the button is clicked.

Thirdly, inside the function we are checking if the button has been clicked,

- If so then change the background color back to the original.
- If not, change the background color to the secondary color.

And Fifth, we are ending the function and binding the function to the onclick event listener.

Now, every time we click the button it should change.

Let's test it out below!

---
<button class="myButton">Click Me!</button>

---

<script>
	// Create the button.
	var button = $(".myButton");

	// Style the button.
	button.css("width", "150");
	button.css("height", "50");
	button.css("background-color", "#a9a1e1");
	button.css("border-radius", "15px");
	button.css("font-family", "Monospace");

	var clicked = false;

	const onClick = () => {
		if (clicked === true) {
			button.css("background-color", "#a9a1e1");
			clicked = false;
		} else {
			button.css("background-color", "#98c379");
			clicked = true;
		}
	}

	button.on("click", onClick);
</script>

That's all for today's nugget of information, great job team!