import { render, screen, fireEvent } from '@testing-library/react';

import HeroSection from '@/components/HeroSection/HeroSection';

describe('<HeroSection />', () => {
  const mockFn = jest.fn();

  beforeEach(() => {
    render(<HeroSection onClick={mockFn} />);
  });

  it('responds to click events', () => {
    const button = screen.getByRole('button', { name: /Выбрать проект/i });
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
