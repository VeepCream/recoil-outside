/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import RecoilOutside from "recoil-outside"
import { RecoilRoot } from "recoil"

import Main from "./Main"

const App = () => {

  return (
    <RecoilRoot>
      <Main />
    </RecoilRoot>
  );
};


export default App;
