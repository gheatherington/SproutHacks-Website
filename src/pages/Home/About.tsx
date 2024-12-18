import React from 'react';

const About: React.FC = (): JSX.Element => {
  return (
    <section
      id="event"
      className="flex flex-row justify-center items-center min-w-full h-screen"
    >
      <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
        <div className="flex flex-col justify-center items-center gap-4">
          <h4>What is SproutHacks</h4>
          <p className="text-white w-[70%]">
            SproutHacks invites high school students from across Ontario to
            learn, network, innovate, and have fun! This November, join 100+
            hackers for 36 hours of building creative projects, engaging in
            illuminating workshops, and participating in fun activities!At
            SproutHacks, you'll collaborate in a team of up to five to build a
            tech-related project (web, mobile, hardware, etc.), pitch your
            creation to judges, and have the chance to win cool prizes. You'll
            have the opportunity to meet like-minded students, learn from the
            experts, and connect with companies in tech. We'll provide free food
            and lodging so you can focus on bringing your ideas to life.
          </p>
        </div>
        <div className="md:flex flex-col justify-center items-center px-20 hidden">
          <img
            className="max-h-80 object-scale-down"
            src="logo.png"
            alt="logo"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1407.9151478039832!2d-80.52043574931864!3d43.47845070438815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf31d0cec9491%3A0x8bf5f60c306d2207!2sConestoga%20College%20Waterloo%20Campus!5e0!3m2!1sen!2sca!4v1734116453191!5m2!1sen!2sca"
            className="w-[70%] h-[400px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <h4>Where is SproutHacks</h4>
          <p className="text-white w-[70%]">
            SproutHacks invites high school students from across Ontario to
            learn, network, innovate, and have fun! This November, join 100+
            hackers for 36 hours of building creative projects, engaging in
            illuminating workshops, and participating in fun activities!At
            SproutHacks, you'll collaborate in a team of up to five to build a
            tech-related project (web, mobile, hardware, etc.), pitch your
            creation to judges, and have the chance to win cool prizes. You'll
            have the opportunity to meet like-minded students, learn from the
            experts, and connect with companies in tech. We'll provide free food
            and lodging so you can focus on bringing your ideas to life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
