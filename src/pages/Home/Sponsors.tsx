import React from 'react';

const Sponsors: React.FC = (): JSX.Element => {
  return (
    <section
      id="sponsors"
      className="flex flex-col justify-center items-center min-w-full h-screen gap-8"
    >
      <h2>Sponsors</h2>
      <h2>Partners</h2>
      <div className="grid grid-cols-3 gap-4 p-4">
        <div></div>
        <div>
          <img className="w-full" src="/partners/hackClubBank.png" alt="HCB" />
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Sponsors;
