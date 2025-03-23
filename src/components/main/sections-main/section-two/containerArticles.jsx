import CountUp from "react-countup";
const ContainerArticles = ({inView}) => {
  return (
    <div className="div_container-articles" >
      {inView && (
        <>
          <article>
            <h3>
              <CountUp start={0} end={5} duration={3} />
            k</h3>
            <p>Completed proyects</p>
          </article>
          <article>
            <h3><CountUp start={0} end={20} duration={3} /></h3>
            <p>Years of works</p>
          </article>
          <article>
            <h3><CountUp start={0} end={9} duration={3} />k</h3>
            <p>Satisfied clients</p>
          </article>
          <article>
            <h3><CountUp start={0} end={99} duration={3} />%</h3>
            <p>Happy rate</p>
          </article>
        </>
      )}
    </div>
  );
};

export default ContainerArticles;
