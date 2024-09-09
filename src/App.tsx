import React from 'react';
import Header from './components/header';
import WhatWeStandFor from './components/WhatWeStandFor';
import OurColorfulCredo from './components/OurColorfulCredo';
import Revolutionaries from './components/Revolutionaries';
import Partners from './components/Partners';
import ContactForm from './components/ContactForm';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-textColor">
      <Header />
      <main className="space-y-10 p-5">
        <WhatWeStandFor />
        <OurColorfulCredo />
        <Revolutionaries />
        <Partners />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;
