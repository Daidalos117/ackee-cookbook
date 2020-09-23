import React from 'react';
import { shallow, mount } from "enzyme";
import App from './App';

it("renders correctly", () => {
    shallow(<App />);
});

