import { FC, useRef } from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { useTranslations } from 'next-intl';

import styles from '@/styles/Home.module.css';
import ProjectList from '@/components/ProjectList/ProjectList';
import HeroSection from '@/components/HeroSection/HeroSection';
import Header from '@/components/Header/Header';
import Participate from '@/components/Participate/Participate';
import Footer from '@/components/Footer/Footer';
import FAQ from '@/components/FAQ/Faq';
import type { ProjectListProps } from '@/types/project';

const HomePage: FC<ProjectListProps> = ({ projects }) => {
  const t = useTranslations();
  const projectSectionRef = useRef<HTMLUListElement | null>(null);
  const onClickHandler = () =>
    projectSectionRef.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('meta_content')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <HeroSection onClick={onClickHandler} />
        <ProjectList ref={projectSectionRef} projects={projects} />
        <Participate />
        <FAQ />
      </main>
      <Footer />
    </>
  );
};

export const getStaticProps: GetServerSideProps = async (context) => {
  const { data } = await axios.get<ProjectListProps>(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/projects`
  );

  const messages = (await import(`../../public/locales/${context.locale}.json`))
    .default;

  const projects = data.projects.filter(({ lang }) => lang === context.locale);

  return {
    props: {
      projects,
      messages,
    },
  };
};

export default HomePage;
