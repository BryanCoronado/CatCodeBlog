import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Python",
    Svg: require("@site/static/img/python.svg").default,

    description: (
      <>
        Versátil, legible, poderoso. Ideal para desarrollo. <br />
        <a
          href="docs/Back-End/Python"
          className="button button--secondary text-sm"
        >
          Leer más
        </a>
      </>
    ),
  },
  {
    title: "Javascript",
    Svg: require("@site/static/img/javascript.svg").default,
    description: (
      <>
        Para web dinámica, interactiva, esencial en desarrollo web.
        <br />
        <a
          href="docs/Front-End/Javascript"
          className="button button--secondary text-sm"
        >
          Leer más
        </a>
      </>
    ),
  },
  {
    title: "Java",
    Svg: require("@site/static/img/java.svg").default,
    description: (
      <>
        Multiplataforma, robusto, ampliamente usado en desarrollo empresarial.
        <br />
        <a
          href="docs/Back-End/Java"
          className="button button--secondary text-sm"
        >
          Leer más
        </a>
      </>
    ),
  },
  {
    title: "C++",
    Svg: require("@site/static/img/c.svg").default,
    description: (
      <>
       Potente, eficiente, versátil. Ideal para alto rendimiento.
        <br />
        <a
          href="docs/Back-End/C-mas-mas"
          className="button button--secondary text-sm"
        >
          Leer más
        </a>
      </>
    ),
  },
  {
    title: "C#",
    Svg: require("@site/static/img/c2.svg").default,
    description: (
      <>
       Robusto, versátil, para desarrollo en plataforma Microsoft.
        <br />
        <a
          href="docs/Back-End/C-share"
          className="button button--secondary text-sm"
        >
          Leer más
        </a>
      </>
    ),
  },
  {
    title: "PHP",
    Svg: require("@site/static/img/Php.svg").default,
    description: (
      <>
       Popular para desarrollo web dinámico, ampliamente utilizado.
        <br />
        <a
          href="docs/Back-End/Php"
          className="button button--secondary text-sm"
        >
          Leer más
        </a>
      </>
    ),
  },
  {
    title: "HTML",
    Svg: require("@site/static/img/html.svg").default,
    description: (
      <>
       Básico para crear páginas web estáticas.
        <br />
        <a
          href="docs/Front-End/Html"
          className="button button--secondary text-sm"
        >
          Leer más
        </a>
      </>
    ),
  },
  {
    title: "Ruby",
    Svg: require("@site/static/img/ruby.svg").default,
    description: (
      <>
        Elegante, expresivo, enfoque en la productividad del desarrollador.
        <br />
        <a
          href="docs/Back-End/Ruby"
          className="button button--secondary text-sm"
        >
          Leer más
        </a>
      </>
    ),
  },
  {
    title: "TypeScript",
    Svg: require("@site/static/img/typescript.svg").default,
    description: (
      <>
       Tipado estático para JavaScript, seguro y escalable.
        <br />
        <a
          href="docs/Front-End/Typescript"
          className="button button--secondary text-sm"
        >
          Leer más
        </a>
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
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
        <h1>
          <center>Los más conocidos</center>
        </h1>

        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
