import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';


const FeatureList = [
  {
    title: 'Python',
    Svg: require('@site/static/img/python.svg').default,
    
    description: (
      <>
        Versátil, legible y poderoso para diversas aplicaciones de software.  <br/>
        <a href="docs/tutorial-extras/manage-docs-versions" className="button button--secondary text-sm">Leer más</a>

      </>
      
    ),
  },
  {
    title: 'Javascript',
    Svg: require('@site/static/img/javascript.svg').default,
    description: (
      <>
        Para desarrollo web dinámico e interactivo en navegadores.<br/>
        <a href="docs/tutorial-basics/create-a-page" className="button button--secondary text-sm">Leer más</a>

      </>
    ),
  },
  {
    title: 'Java',
    Svg: require('@site/static/img/java.svg').default,
    description: (
      <>

       Para desarrollo web dinámico e interactivo en navegadores.<br/>
        <a href="docs/tutorial-extras/java" className="button button--secondary text-sm">Leer más</a>

      </>
    ),
  },
  {
    title: 'C++',
    Svg: require('@site/static/img/c.svg').default,
    description: (
      <>
    
       Para desarrollo web dinámico e interactivo en navegadores.<br/>
        <a href="docs/tutorial-extras/c-mas-mas" className="button button--secondary text-sm">Leer más</a>
      </>
    ),
  },
  {
    title: 'C#',
    Svg: require('@site/static/img/c2.svg').default,
    description: (
      <>

       Para desarrollo web dinámico e interactivo en navegadores.<br/>
        <a href="docs/tutorial-extras/c-share" className="button button--secondary text-sm">Leer más</a>
      </>
    ),
  },
  {
    title: 'PHP',
    Svg: require('@site/static/img/php.svg').default,
    description: (
      <>
   
       Para desarrollo web dinámico e interactivo en navegadores.<br/>
        <a href="docs/tutorial-extras/translate-your-site" className="button button--secondary text-sm">Leer más</a>
      </>
    ),
  },
  {
    title: 'HTML',
    Svg: require('@site/static/img/html.svg').default,
    description: (
      <>
    
      Para desarrollo web dinámico e interactivo en navegadores.<br/>
        <a href="docs/tutorial-basics/create-a-document" className="button button--secondary text-sm">Leer más</a>
      </>
    ),
  },
  {
    title: 'SQL',
    Svg: require('@site/static/img/sql.svg').default,
    description: (
      <>
     
        Para desarrollo web dinámico e interactivo en navegadores.<br/>
        <a href="docs/tutorial-basics/create-a-page" className="button button--secondary text-sm">Leer más</a>
      </>
    ),
  },
  {
    title: 'TypeScript',  
    Svg: require('@site/static/img/typescript.svg').default,
    description: (
      <>
    
       Para desarrollo web dinámico e interactivo en navegadores.<br/>
        <a href="docs/tutorial-basics/congratulations" className="button button--secondary text-sm">Leer más</a>
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
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}


export default function HomepageFeatures() {
  return (

    <section className={styles.features}>
          
      <div className="container">
      <h1><center>Los más conocidos</center></h1>

        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}


