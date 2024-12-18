import React from 'react';
import Dropdown from '../../components/Dropdown';

const Faq: React.FC = (): JSX.Element => {
  return (
    <section
      id="faq"
      className="flex flex-col justify-center items-center min-w-full h-screen gap-8"
    >
      <h2>FAQ</h2>
      <div className="flex md:flex-row flex-col w-[60%] gap-4">
        <div className="flex w-full flex-col gap-4">
          <Dropdown
            buttonText="What is a hackathon?"
            content="A hackathon is an event where participants collaborate on bringing innovative projects to life within a limited period of time. At SproutHacks, high school students will also participate in workshops and activities, connect with sponsors and other hackers, and compete for cool prizes!"
          />
          <Dropdown content="" buttonText="How many people can be on a team?" />
          <Dropdown content="" buttonText="Who can attend?" />
          <Dropdown content="" buttonText="How will projects be judged?" />
          <Dropdown content="" buttonText="Are there any costs?" />
        </div>
        <div className="flex w-full flex-col gap-4">
          <Dropdown
            content=""
            buttonText="Can I start my project before the event?"
          />
          <Dropdown
            content=""
            buttonText="Will food and lodging be provided?"
          />
          <Dropdown content="" buttonText="What project should I make?" />
          <Dropdown
            content=""
            buttonText="What if I’ve never been to a hackathon?"
          />
          <Dropdown
            content=""
            buttonText="What else can I expect at Sprouthacks?"
          />
        </div>
      </div>
      <h3 className="mt-[4rem]">More Questions?</h3>
      <p className="flex flex-wrap text-white font-bold text-3xl justify-center font-bebas tracking-wider mx-auto">
        Reach out and ask at
        <a className="underline" href="hello@sprouthacks.ca">
          hello@sprouthacks.ca
        </a>
      </p>
    </section>
  );
};

export default Faq;
