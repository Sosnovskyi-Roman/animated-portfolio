import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/11107635/pexels-photo-11107635.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    desc: "Pexels has now changed its entity name to Canva Germany GmbH. We've updated our Terms and Privacy Policy.",
  },
  {
    id: 2,
    title: "Next.js Blog",
    img: "https://images.pexels.com/photos/19983799/pexels-photo-19983799/free-photo-of-miasto-lato-slonce-budynek.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    desc: "Pexels has now changed its entity name to Canva Germany GmbH. We've updated our Terms and Privacy Policy.",
  },
  {
    id: 3,
    title: "Vanilla Js App",
    img: "https://images.pexels.com/photos/10261197/pexels-photo-10261197.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    desc: "Pexels has now changed its entity name to Canva Germany GmbH. We've updated our Terms and Privacy Policy.",
  },
  {
    id: 4,
    title: "Music App",
    img: "https://images.pexels.com/photos/11054160/pexels-photo-11054160.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    desc: "Pexels has now changed its entity name to Canva Germany GmbH. We've updated our Terms and Privacy Policy.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;

// const Single = ({ item }) => {
//   return <section>{item.title}</section>;
// };
// const Portfolio = () => {
//   const ref = useRef();
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["end end ", "start start"],
//   });

//   const scaleX = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//   });

//   return (
//     <div className="portfolio" ref={ref}>
//       <div className="progress">
//         <h1>Featured Works</h1>
//         <motion.div style={{ scaleX }} className="progressBar"></motion.div>
//       </div>
//       {items.map((item) => (
//         <Single item={item} key={item.id} />
//       ))}
//     </div>
//   );
// };

// export default Portfolio;
