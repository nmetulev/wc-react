# React wrapper for web components

[![npm](https://img.shields.io/npm/v/wc-react?style=for-the-badge)](https://www.npmjs.com/package/wc-react) ![GitHub](https://img.shields.io/github/license/nmetulev/wc-react?style=for-the-badge)

Use `wc-react` to simplify usage of web components in React. This is a light wrapper to help manage events and props of the web component.

```tsx
const MyComponent = wrapWc('my-web-component');
```

The wrapper syncs props and events to the web component, including when they change and when the component is unmounted.

## Installation

```bash
npm install wc-react
```

or

```bash
yarn add wc-react
```

## Usage

Import `wrapWc` at the top:

```tsx
import {wrapWc} from 'wc-react';
```

Create a new component that wraps your web component by calling the `wrapWc` function and pass the tag name of the web component.

```tsx
const MyComponent = wrapWc('my-web-component');
```

You can now use `MyComponent` anywhere in your JSX as if it were a regular React component. 

For example, you can set the `someProp` property of the web component to an object:

```jsx
const App = (props) => {

  const someObj = {
    prop1: 'bla'
  }

  return <MyComponent someProp={someObj}></MyComponent>;
}
```

Or register event handlers:

```jsx
const App = (props) => {

  const handleEvent = (e) => {}

  return <MyComponent event={handleEvent}></MyComponent>;
}
```

All properties and events map exactly as they are defined on the web component.

> Note: React events following the `onEvent` naming convention are also supported. For example, if you use the `onClick` event on the React component, wc-react will register the `click` event with the web component.

## Refs

Wrapped components support passing a `ref` which will get a reference to the underlying web component.

Example with `useRef`:

```jsx
const App = (props) => {

  let myRef = React.useRef();

  const handleClick = () => {
    console.log('web component reference', myRef.current)
  }

  return <MyComponent ref={myRef} onClick={handleClick}></MyComponent>;
}
```

Example with callback:

```jsx
const App = (props) => {

  const onRefChanged = (element) => {
    console.log('web component reference', element)
  }

  return <MyComponent ref={onRefChanged}></MyComponent>;
}
```

## Typescript

`wrapWc` supports optional props type to ensure type safety when using the component:

```ts
type PersonProps = {
  personDetails: PersonDetails, // object
  showName: boolean,
  personCardInteraction: PersonCardInteraction // enum
}

const Person = wrapWc<PersonProps>('mgt-person');
```

By default, if no type is provided, any prop will be valid.

## Why

If you've used web components in React, you know that proper interop between web components and React components requires a bit of extra work.

From [https://custom-elements-everywhere.com/](https://custom-elements-everywhere.com/):

> React passes all data to Custom Elements in the form of HTML attributes. For primitive data this is fine, but the system breaks down when passing rich data, like objects or arrays. In these instances you end up with stringified values like some-attr="[object Object]" which can't actually be used.

> Because React implements its own synthetic event system, it cannot listen for DOM events coming from Custom Elements without the use of a workaround. Developers will need to reference their Custom Elements using a ref and manually attach event listeners with addEventListener. This makes working with Custom Elements cumbersome.


## Example

Here is an example of using the [`vaading-date-picker`](https://vaadin.com/components/vaadin-date-picker/) web component in React.

### Without `wc-react`:

```jsx
import React from 'react';
import '@vaadin/vaadin-date-picker';

const App: React.FunctionComponent = () => {

  const handleChange = (e) => {/**/}
  const localizedStrings = {/**/}

  return <vaadin-date-picker
          label="When were you born?"
          ref={(element) => {
            if (!element) {
              return;
            }

            element.i18n = localizedStrings;

            // the event listener needs to be removed
            // when the element is unloaded - not shown here
            element.addEventListener('change', (e) => handleChange(e));
          }}>
          </vaadin-date-picker>;
};
```

### With `wc-react`:

```jsx
import React from 'react';
import '@vaadin/vaadin-date-picker';
import { wrapWc } from 'wc-react';

const DatePicker = wrapWc('vaading-date-picker');

const App: React.FunctionComponent = () => {

  const handleChange = (e) => {/**/}
  const localizedStrings = {/**/}

  return <DatePicker 
            label="When were you born?" 
            change={handleChange}
            i18n={localizedStrings}>
          </DatePicker>;
};
```
