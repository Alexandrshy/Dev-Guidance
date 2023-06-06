import { ForwardRefRenderFunction, forwardRef } from 'react';

import Wrapper from '@/components/Wrapper/Wrapper';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import type { ProjectListProps } from '@/types/project';

import styles from './ProjectList.module.css';

const ProjectList: ForwardRefRenderFunction<
  HTMLElement | null,
  ProjectListProps
> = ({ projects }, ref) => {
  return (
    <section className={styles.box} ref={ref}>
      <Wrapper>
        <ul className={styles.list}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ul>
      </Wrapper>
    </section>
  );
};

export default forwardRef(ProjectList);
