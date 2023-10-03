import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Empoderamiento Financiero',
    Svg: require('@site/static/img/two.svg').default,
    description: (
      <>
        En The Money Maker, creemos que el conocimiento financiero es la clave para alcanzar tus metas y sueños. Nuestra misión es empoderarte con información confiable y consejos prácticos que te ayudarán a tomar decisiones financieras inteligentes y a construir un futuro financiero sólido.
      </>
    ),
  },
  {
    title: 'Construyendo Riqueza Juntos',
    Svg: require('@site/static/img/one.svg').default,
    description: (
      <>
        En The Money Maker, no solo hablamos de finanzas, vivimos las finanzas. Nuestra comunidad está dedicada a aprender, crecer y prosperar juntos. Te ofrecemos recursos valiosos, desde consejos de inversión hasta estrategias de ahorro, para que puedas tomar el control de tu dinero y construir riqueza a tu manera.
      </>
    ),
  },
  {
    title: 'Información Confiable, Resultados Tangibles',
    Svg: require('@site/static/img/three.svg').default,
    description: (
      <>
        En The Money Maker, nos comprometemos a brindarte información financiera confiable y basada en la evidencia. Nuestro objetivo es que tomes decisiones informadas que te lleven a resultados tangibles. Descubre cómo gestionar de manera efectiva tus finanzas personales y lograr tus objetivos financieros con nosotros.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
