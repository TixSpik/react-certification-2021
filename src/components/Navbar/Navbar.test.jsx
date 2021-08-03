import React from "react";
import { screen, render } from "@testing-library/react";
import Navbar from "./Navbar.component";

describe('Navbar component', () => {
    it('should render Navbar componet', () => {
        const { container } = render(<Navbar />)
        const navbar = container.querySelector('div')
        expect(navbar).toBeInTheDocument()
    })

    it('should render Logo', () => {
        const { container } = render(<Navbar />)
        const logo = container.querySelector('img')
        expect(logo).toBeInTheDocument()
    })
})