import React from 'react'
import {render,screen} from '@testing-library/react'
import App from './react/app'
import '@testing-library/jest-dom'

describe("Testa os icons components", () => {

  test("deve conter data-type", () => {
    render(<App />);

    const icon = screen.getByRole("img");

    expect(icon).toBeInTheDocument()
    expect(icon).toHaveAttribute('data-type')
  })
})