# recoil-outside

There is a problem to update states on recoilJS outside of component.
It is a package of React to set or get on RecoilJS from outside of a component.
This package is going to help you to update states or get states from outside of a component.

### Set-Up

---

**npm**

`npm i react-dom recoil recoil-outside`

**yarn**

`yarn add react-dom recoil recoil-outside`

### How to use

#1. Set recoil follow [recoiljs getting-started](https://recoiljs.org/docs/introduction/getting-started)

#2. Add `RecoilOutside` same file with `RecoilRoot`

```js
import React from 'react';
import RecoilOutside from "recoil-outside"
import { RecoilRoot } from "recoil"

import Main from "./Main"

const App = () => {

  return (
    <RecoilRoot>
      <RecoilOutside/>
      <Main />
    </RecoilRoot>
  );
};


export default App;

```

#3 When You will set or get at outside of the component, You can import `promiseSetRecoil` or `promiseGetRecoil`

:example

```js
import { promiseSetRecoil, promiseGetRecoil } from "recoil-outside"
import { store } from "./Store"

export const setTest = async() => {
    await promiseSetRecoil(store, "Success")
}

export const getTest = async() => {
    const value = await promiseGetRecoil(store)
    return value
}
```
