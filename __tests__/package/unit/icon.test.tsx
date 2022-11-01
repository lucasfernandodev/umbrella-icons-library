import React from 'react'
import {render,screen} from '@testing-library/react'
import {Github} from '../../../package/umbrella-icons-library/react';
import App from './react/app'
import '@testing-library/jest-dom'

describe("Testa os icons components", () => {

  test("Deve importar com sucesso",() => {
    render(<Github />)
    const icon = screen.getByRole("img");
    expect(icon).toBeInTheDocument()
  })


  test("deve conter data-type", () => {
    render(<App />);

    const icon = screen.getByRole("img");

    expect(icon).toBeInTheDocument()
    expect(icon).toHaveAttribute('data-type')
  })
})