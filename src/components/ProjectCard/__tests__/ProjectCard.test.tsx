import { render, screen } from '@testing-library/react';

import { PROJECT_MOCK } from '../../../mock';
import ProjectCard from '@/components/ProjectCard/ProjectCard';

describe('<ProjectCard />', () => {
  beforeEach(() => {
    render(<ProjectCard project={PROJECT_MOCK} />);
  });

  it('should renders badge and content', () => {
    const badge = screen.getByText('Completed');
    const content = screen.getByText('Venenatis cras sed');

    expect(badge).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });
});
