import React from "react";
import { screen, render } from "@testing-library/react";
import Heading from "./Heading.component";

describe('Heading component', () => {
    it('should render a header', () => {
        const { container } = render(<Heading />)
        const heading = container.querySelector('h2')
        expect(heading).toBeInTheDocument()
    })
})