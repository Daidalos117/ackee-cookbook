import React from "react";
import { render, RenderResult } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Item from "./Item";

test("renders Item", async () => {
    const props = {
        name: "John doe",
        duration: 10,
        score: 3.4,
        id: "cutecat",
    };
    const rendered: RenderResult = render(<Item {...props} />);

});
