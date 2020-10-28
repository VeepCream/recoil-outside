/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  Text
} from 'react-native';
import RecoilOutside from "recoil-outside"
import { useRecoilState } from "recoil"

import { store } from "./Store"
import { getTest, setTest } from "./TestRecoil"

const Main = () => {

  const [getStore, setStore] = useRecoilState(store)
  const [getState, setState] = useState("")

  useEffect(() => {
    setTimeout(async () => {
      await setTest()
    }, 7000)
    setTimeout(async() => {
      const value = await getTest()
      setState(value)
    }, 14000)
  }, [])

  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <RecoilOutside />
        <Text>{`storeValue : ${getStore}`}</Text>
        <Text>{`outside : ${getState}`}</Text>
      </SafeAreaView>
    </View>
  );
};


export default Main;
