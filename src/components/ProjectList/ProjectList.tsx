import { ForwardRefRenderFunction, forwardRef } from 'react';

import Wrapper from '@/components/Wrapper/Wrapper';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import ProjectCardEmpty from '@/components/ProjectCard/ProjectCardEmpty';
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
          {projects.length ? (
            projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <ProjectCardEmpty />
          )}
        </ul>
      </Wrapper>
    </section>
  );
};

export default forwardRef(ProjectList);
