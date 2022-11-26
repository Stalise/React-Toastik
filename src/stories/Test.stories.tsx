import React from 'react';

import { Test } from "../../build/bundle";

import '../assest/styles/null.css';

export default {
  title: 'Test',
  component: Test
}

export const DefaultApp = (args) => {
  return (
    <Test />
  )
}
