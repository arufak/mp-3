import React from 'react';
import Calculator from './Calculator';  // Import the Calculator component

export default function Projects() {
  return (
    <main>
      <section className="title">
        <h1>Projects</h1>

        {/* Project 1 */}
        <section>
          <h2>Movie Revenue Predictor</h2>
          <p><strong>Tools:</strong> Python, Jupyter Notebook, Kaggle Dataset (TMDB)</p>
          <ul>
            <li>
              Accomplished a 15% reduction in mean squared error compared to baseline models by
              developing and optimizing a machine learning model to predict movie revenue,
              incorporating features such as actor/director success, release season, and budget.
            </li>
            <li>
              Improved model performance through the use of Boosted Decision Trees and other
              optimization techniques, enhancing predictive accuracy.
            </li>
          </ul>
          <a className="btn" href="https://github.com/arufak/PredictingMovieRevenue" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> View on GitHub
          </a>
        </section>

        {/* Project 2 */}
        <section>
          <h2>ThatsAWrap - Functional Website using Spotify API</h2>
          <p><strong>Tools:</strong> Python, HTML, JavaScript, CSS, MongoDB, Spotify API</p>
          <ul>
            <li>
              Accomplished increased user engagement by developing an interactive web application
              that provides personalized monthly top 10 song lists, leveraging the Spotify API for
              real-time updates.
            </li>
            <li>
              Enhanced user experience with a responsive and user-friendly interface built using
              JavaScript, CSS, and HTML, while achieving seamless account management and personalized
              content delivery through efficient MongoDB integration.
            </li>
          </ul>
          <a className="btn" href="https://github.com/arufak/ThatsAWrap" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> View on GitHub
          </a>
        </section>

        {/* Project 3 */}
        <section>
          <h2>Notes Web App</h2>
          <p><strong>Tools:</strong> Python, Flask, SQLAlchemy, JavaScript</p>
          <ul>
            <li>
              Accomplished secure user note management by building a web application that allows
              users to sign up, log in, and log out, ensuring that only authenticated users can
              access or modify their notes.
            </li>
            <li>
              Enhanced security and data integrity by utilizing Flask for backend development and
              SQLAlchemy for database management, ensuring secure data storage with user-specific
              access control through foreign key relationships.
            </li>
          </ul>
          <a className="btn" href="https://github.com/arufak/Flask-Web-App" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> View on GitHub
          </a>
        </section>

        {/* Project 4 */}
        <section>
          <h2>Spotify Data Analysis</h2>
          <p><strong>Tools:</strong> Python, Amazon AWS S3, AWS QuickSight, Jupyter Notebook</p>
          <ul>
            <li>
              Accomplished detailed insights into artist popularity and song characteristics as
              measured by comprehensive visualizations in AWS QuickSight by analyzing the Spotify
              dataset using data stored and managed in Amazon S3.
            </li>
            <li>
              Increased understanding of music trends by developing interactive dashboards that
              visualized metrics like artist song count, time signature distribution,
              energy-valence correlation, and danceability-popularity relationships, providing
              actionable insights for music industry trends.
            </li>
          </ul>
          <a className="btn" href="https://github.com/arufak/Spotify-Data-Analysis" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> View on GitHub
          </a>
        </section>

        {/* Simple Calculator Project */}
        <section>
          <h2>Simple Calculator</h2>
          <p><strong>Tools:</strong> HTML, CSS, JavaScript</p>
          <ul>
            <li>
              A basic calculator that performs addition, subtraction, multiplication, division,
              exponentiation (using a for loop), and clearing results.
            </li>
            <li>The result is displayed in red if it is negative.</li>
          </ul>
          <Calculator /> {/* This includes the separate Calculator component */}
        </section>
        
      </section>
    </main>
  );
};

