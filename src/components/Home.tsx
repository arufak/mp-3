export default function Home() {
  return (
    <main className="title">
      <section>
      <section className="about">
        <h3>ABOUT ME</h3>
        <h2>Hi I’m</h2>
        <h1>Arufa Khanom</h1>
        <p className="tagline">Student / Computer Science / Business Administration</p>
        <div className="about-details">
          <div className="left-column">
            {/* Profile Image */}
            <img src="/images/profile.jpg" alt="Arufa Khanom" className="profile-pic" />
            <p><strong>Hometown:</strong> Dhaka, Bangladesh</p>
            <p><strong>Location:</strong> Redmond, WA</p>
            <p><strong>Major:</strong> Computer Science</p>
            <p><strong>Minor:</strong> Business Administration & Management</p>
          </div>

          <div className="right-column">
            <p>
              Hi, I’m Arufa Khanom (pronounced ah-roo-fah), currently a senior at Boston University,
              majoring in Computer Science with a minor in Business Administration. My academic
              journey and hands-on experiences have equipped me with a unique intersection of
              technical expertise and business insight.
              <br /><br />
              From leading a machine learning project on predicting movie revenue to integrating
              APIs into fully functional websites, I’ve developed a passion for solving real-world
              business challenges through innovative tech solutions. With proficiency in Python,
              Java, React, and SQL, I enjoy taking on complex problems and collaborating with dynamic
              teams to create impactful, scalable solutions.
              <br /><br />
              What sets me apart is my drive to bridge the gap between technology and business. I am
              passionate about leveraging data-driven insights and tech tools to enhance
              decision-making and optimize processes in ever-evolving industries. Whether it's
              automating workflows or building intuitive user experiences, I am constantly motivated
              by the prospect of making a meaningful difference.
              <br /><br />
              Outside of coding, you’ll likely find me experimenting with new recipes in the kitchen,
              planning my next travel adventure, or exploring hiking trails in the Pacific Northwest!
            </p>
          </div>
        </div>
      </section>
      </section>
    </main>
  );
};

