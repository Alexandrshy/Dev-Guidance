import Link from 'next/link';
import Head from 'next/head';

import styles from '@/styles/404.module.css';
import Wrapper from '@/components/Wrapper/Wrapper';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>
          Dev-Guidance. Учимся фронтенду, работая вместе над проектами
        </title>
        <meta
          name="description"
          content="Dev-Guidance — это платформа для обучения разработке фронтенда путем участия в реальных проектах. Присоединяйтесь к небольшим группам до 5 человек и вместе работайте над проектами. Получайте практический опыт, совершенствуйте свои навыки и сотрудничайте с другими в формате групповой разработки или парного программирования. Начните свой путь к становлению квалифицированным frontend-разработчиком уже сегодня!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Wrapper>
          <div className={styles.text}>
            <h1 className={styles.h1}>404</h1>
            <h2 className={styles.h2}>
              Ой, страница, которую вы ищете, не найдена
            </h2>
            <Link href="/" className={styles.link}>
              Вернуться на главную
            </Link>
          </div>
        </Wrapper>
      </main>
    </>
  );
}
