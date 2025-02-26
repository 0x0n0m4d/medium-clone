# 8 JavaScript Performance Tips I Discovered After Years of Coding

[!banner](http://localhost:3000/assets/articles/!title!/images/!token!.png)

Hey Everyone!! I wanted to share these Javascript Performance tips, that i feel that everyone should be aware of, since it took a lot of effort and mistakes for me to learn it. So, here are eight performance tips that have made a real difference in my projects. Dont forget to bookmark them for further reference.

## 1) Use Strict Mode

Enabling strict mode in JavaScript catches common coding bloopers, prevents the use of undeclared variables, and makes your code run faster.

**How to Enable Strict Mode:**

```javascript
"use strict";

function myFunction() {
    // Your code here
}
```

“use strict;” can tell the browser to execute in strict mode, which can improve the performance

## 2) Minimize DOM Manipulation

Manipulating the Document Object Model (DOM) is one of the slowest operations in JavaScript. Reducing the number of direct DOM manipulations can significantly improve performance.

**Instead of:**

```javascript
const list = document.getElementById('myList');
const items = ['Item 1', 'Item 2', 'Item 3'];

items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
});
```

**Use Document Fragments:**

```javascript
const list = document.getElementById('myList');
const items = ['Item 1', 'Item 2', 'Item 3'];
const fragment = document.createDocumentFragment();
```

By using a document fragment, you batch your DOM updates, which is much more efficient.

**Personal Note:** After switching to document fragments in a dynamic list, I noticed a significant reduction in rendering time, especially with large datasets.

## 3) Use Event Delegation

Attaching event listeners to multiple DOM elements can be inefficient. Event delegation allows you to handle events at a higher level in the DOM.

**Instead of:**

```javascript
const buttons = document.querySelectorAll('.myButton');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Handle click
    });
});
```

**Use Event Delegation:**

```javascript
document.body.addEventListener('click', function(event) {
    if (event.target.classList.contains('myButton')) {
        // Handle click
    }
});
```

This way, you attach a single event listener to a parent element, reducing memory usage and improving performance.

**Personal Note:** Implementing event delegation cleaned up my code and made it more maintainable, especially when dynamically adding new elements.

## 4) Avoid Memory Leaks

Memory leaks can slow down or even crash your application. Be mindful of closures and unnecessary references that prevent garbage collection.

**Common Pitfall:**

```javascript
let element = document.getElementById('myElement');
element.addEventListener('click', function() {
    console.log('Clicked!');
});
// Later in the code
element = null; // This doesn't remove the event listener
```

**Proper Cleanup:**

```javascript
let element = document.getElementById('myElement');
function handleClick() {
    console.log('Clicked!');
}
element.addEventListener('click', handleClick);
// Later in the code
element.removeEventListener('click', handleClick);
element = null;
```

By removing event listeners when they are no longer needed, you prevent memory leaks.

**Personal Note:** After noticing my app slowing down over time, I realized I wasn’t properly cleaning up event listeners. Fixing this improved performance dramatically.

## 5) Optimize Loops

Loops can be performance bottlenecks. Simple changes can make them more efficient.

**Instead of:**

```javascript
for (let i = 0; i < array.length; i++) {
    // Do something with array[i]
}
```

**Cache the Length:**

```javascript
for (let i = 0, len = array.length; i < len; i++) {
    // Do something with array[i]
}
```

Or use modern methods like `for...of` or array methods like `forEach`, which are optimized.

**Personal Note:** In a performance-critical application, caching the array length in loops reduced execution time noticeably.

## 6) Debounce and Throttle Expensive Functions

For functions that are called frequently, like window resizing or scrolling, use debouncing or throttling to limit how often they run.

**Debounce Example:**

```javascript
function debounce(func, delay) {
    let timeout;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(func, delay);
    }
}

window.addEventListener('resize', debounce(function() {
    // Handle resize
}, 250));
```

**Throttle Example:**

```javascript
function throttle(func, limit) {
    let inThrottle;
    return function() {
        if (!inThrottle) {
            func();
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}
window.addEventListener('scroll', throttle(function() {
    // Handle scroll
}, 250));
```

**Personal Note:** Implementing debounce on a window resize event handler fixed a lag issue in my UI, making it feel much more responsive.

## 7) Use Asynchronous Code Wisely

Non-blocking code keeps your application responsive. Use asynchronous programming features like `async/await` and Promises.

**Example:**

```javascript
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        // Process data
    } catch (error) {
        console.error(error);
    }
}
```

By handling operations asynchronously, you prevent blocking the main thread.

**Personal Note:** Switching to `async/await` made my code cleaner and improved performance by not blocking the UI during data fetching.

## 8) Leverage Browser Caching

Caching assets can greatly improve load times. Set appropriate cache headers on your server and use service workers for advanced caching.

**Service Worker Example:**

```javascript
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('v1').then(function(cache) {
            return cache.addAll([
                '/index.html',
                '/styles.css',
                '/script.js',
            ]);
        })
    );
});
```

By caching static assets, you reduce network requests and improve performance.

**Personal Note:** After implementing service workers, my web app loaded almost instantly on subsequent visits, enhancing the user experience.

## Wrapping Up

**Final Thoughts:**

- **Test After Changes:** Always benchmark your application before and after optimizations to ensure they’re effective.
- **Stay Updated:** JavaScript and web technologies evolve rapidly. Keep learning to take advantage of new features and best practices.

If you have any JavaScript performance tips or tricks, please share them in the comments below!

**Happy coding!**
