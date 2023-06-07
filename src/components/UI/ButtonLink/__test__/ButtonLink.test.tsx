import { render, fireEvent, screen } from '@testing-library/react';

import ButtonLink from '@/components/UI/ButtonLink/ButtonLink';

describe('<ButtonLink />', () => {
  it('should render the button and call the function after click', () => {
    const mockFn = jest.fn();
    render(
      <ButtonLink tag="button" onClick={mockFn} type="button">
        Button
      </ButtonLink>
    );
    const button = screen.getByRole('button', { name: /Button/i });

    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(mockFn).toBeCalledTimes(1);
  });

  it('should render the button and not call the function after click for disable button', () => {
    const mockFn = jest.fn();
    render(
      <ButtonLink tag="button" onClick={mockFn} type="button" disabled>
        Button
      </ButtonLink>
    );
    const button = screen.getByRole('button', { name: /Button/i });

    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(mockFn).not.toBeCalled();
  });

  it('should render the link', () => {
    const mockFn = jest.fn();
    render(
      <ButtonLink tag="link" href="#">
        Link
      </ButtonLink>
    );
    const link = screen.getByRole('link', { name: /Link/i });

    expect(link).toBeInTheDocument();
  });
});
