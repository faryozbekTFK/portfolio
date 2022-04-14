import "../assets/styles/about.css";

function About() {
  return (
    <div className="about d-flex justify-content-center ">
      <div className="aboutCont">
        <h1 className="text-center m-3">About Me</h1>
        <h5 className=" px-5">
          My full name is Faryozbek Tukhtasinov Komiljonovich. I was born on
          November 13, 2000. I am a boy. I am 21 years old. I live on Aydin
          Street, Bostan district, Andijan region.
          <ul>In 2007-2008 I studied at 22-th secondary school.</ul>
          <ul>
            In 2008-2016 I studied at the 48-th state specialized school.
            <li>
              In 2015, I won the 3rd place in the Regional Science Olympiad in
              Computer Science.
            </li>
            <li>
              I have an honorary place in Informatics at the 2016 Regional
              Science Olympiad.
            </li>
          </ul>
          <ul>
            After graduating from high school, I entered an academic lyceum.
            <li>
              In 2018, I won the 3rd place in the Regional Science Olympiad in
              Computer Science.
            </li>
            <li>
              I have an honorary place in Informatics at the 2019 Regional
              Science Olympiad.
            </li>
          </ul>
          In 2019, I graduated from the academic Lyceum and became a student of
          Tashkent University of Information Technologies. I am currently a
          3-course student. I am a frontend programmer now.
        </h5>
      </div>
    </div>
  );
}

export default About;
