import { render, screen } from '../../../../test-utils';
import { PROJECTS_MOCK } from '../../../mock';
import ProjectList from '@/components/ProjectList/ProjectList';

describe('<ProjectList />', () => {
  it('should display a project with the title', () => {
    render(<ProjectList projects={PROJECTS_MOCK} />);

    const title = screen.getByText('Learn How to Pre-render Pages');

    expect(title).toBeInTheDocument();
  });

  it('should display an empty card with the title', () => {
    render(<ProjectList projects={[]} />);

    const title = screen.queryByText('Проектов пока нет');

    expect(title).toBeInTheDocument();
  });
});
