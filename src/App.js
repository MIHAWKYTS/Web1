import React from 'react';
import './index.css';
import { SectionLogo } from './components/sectionLogo/sectionLogo';
import { Sectionmenu } from './components/sectionmenu';
import { Sectionhero } from './components/sectionhero';
import { SectionArtesas } from './components/sectionartesas';
import { SectionSobre } from './components/sectionsobre';
import { SectionOnde } from './components/sectiononde';
import { Sectionfooter } from './components/sectionfooter';

function App() {
  return (
    <>
      <SectionLogo />
      <Sectionmenu />
      <Sectionhero />
      <SectionArtesas />
      <SectionSobre />
      <SectionOnde />
      <Sectionfooter />
    </>
  );
}

export default App;
