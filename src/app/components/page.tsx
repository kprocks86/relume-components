import Link from 'next/link';
import React from 'react'; // {{ edit_1 }}

const components = [
    {name: 'pricing-24' , link: 'components/pricing-24'},
    {name: 'layout-31' , link: 'components/layout-31'},
    {name: 'layout-34' , link: 'components/layout-34'},
    {name: 'cta-38' , link: 'components/cta-38'},
    {name: 'faq-4' , link: 'components/faq-4'},
    {name: 'header-80' , link:'components/header-80'},
    {name: 'cta-33' , link:'components/cta-33'},
    {name: 'header-105' , link:'components/header-105'},
    {name: 'header-118' , link:'components/header-118'},
    {name: 'layout-221' , link:'components/layout-221'},
    {name: 'layout-353' , link:'components/layout-353'},
    {name: 'stats-13' , link:'components/stats-13'},
    {name: 'layout-351' , link:'components/layout-351'},
    {name: 'layout-395' , link:'components/layout-395'},
    {name: 'stats-23' , link:'components/stats-23'},
    {name: 'layout-486' , link:'components/layout-486'},
    {name: 'layout-12' , link:'components/layout-12'},
    {name: 'pricing-13' , link:'components/pricing-13'},
    {name: 'team-7' , link:'components/team-7'},
    {name: 'layout-121' , link:'components/layout-121'}
]

const App = () => {
  return <>
    <div className='flex gap-2'> {components.map((component, index) => <div key={index} className='border border-white p-1' ><Link href={component.link} > {component.name} </Link> </div> )} </div>
  </>;
};

export default App;
