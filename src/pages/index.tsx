import { FC } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { Poppins } from 'next/font/google';
import axios from 'axios';

import styles from '@/styles/Home.module.css';
import ProjectList from '@/components/ProjectList/ProjectList';
import Headline from '@/components/UI/Typography/Headline/Headline';
import type { ProjectListProps } from '@/types/project';

const inter = Poppins({ weight: ['400', '600'], subsets: ['latin'] });

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/projects`
  );
  const projects = data.projects;

  return {
    props: {
      projects,
    },
  };
};

const HomePage: FC<ProjectListProps> = ({ projects }) => {
  return (
    <>
      <Head>
        <title>
          Dev-Guidance. Обучение разработке фронтенда с помощью совместных
          проектов
        </title>
        <meta
          name="description"
          content="Dev-Guidance — это платформа для обучения разработке фронтенда путем участия в реальных проектах. Присоединяйтесь к небольшим группам до 5 человек и вместе работайте над проектами. Получайте практический опыт, совершенствуйте свои навыки и сотрудничайте с другими в формате групповой разработки или парного программирования. Начните свой путь к становлению квалифицированным frontend-разработчиком уже сегодня!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Headline level="h3">Frontend Mentor Projects</Headline>
        <ProjectList projects={projects} />
      </main>
    </>
  );
};

export default HomePage;
