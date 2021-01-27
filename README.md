# react-starter-fdp

## Understanding React Components

### What is a React Component?
According to the official react site 
:

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. 


How do you define a React Component?
   
   You can define a component by extending the React.Component class.

Example:
```jsx
import React, { Component } from 'react';

class ExampleComponent extends Component {
    render() {
        return <h1>Hey, this is an example component</h1>;
    }
}

export default ExampleComponent;
```

Noticed anything different about the above snippet of code?

The above code is written in JSX Syntax. While you can write React without JSX syntax, JSX makes it elagant.

You could also use React with plain javascript as follows:
```javascript
React.createElement('a', {href: 'mailto:xyz@example.com'}, 'xyz@example.com');
```

Its better to use JSX syntax to keep the code clean and readable.
