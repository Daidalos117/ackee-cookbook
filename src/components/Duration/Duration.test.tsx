import React from "react";
import {
    render,
    RenderResult,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Duration from "./Duration";

test("renders Duration", async () => {
    const time = 100;
    const rendered: RenderResult = render(<Duration duration={time} />);

    expect(rendered.getByTitle("duration")).toHaveTextContent(time);
    expect(rendered.getByTitle("duration")).toBeValid();
});
