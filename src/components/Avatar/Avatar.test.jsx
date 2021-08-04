import React from 'react'
import { screen, render } from "@testing-library/react";
import Avatar from './Avatar.component';

describe('Avatar component', () => {
    it('should render a img', () => {
        const { container } = render(<Avatar />)
        const img = container.querySelector('img')
        expect(img).toBeInTheDocument()
    })

    it('should render wrapper component', () => {
        const { container } = render(<Avatar />)
        const wrapper = container.querySelector('div')
        expect(wrapper).toBeInTheDocument()
    })
})