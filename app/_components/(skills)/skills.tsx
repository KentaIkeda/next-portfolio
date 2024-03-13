'use client';

import SkillList from './skillList';

const Skills = () => {

  // ここに列挙したい技術を書いていく
  const availableSkills = [
    { id: 1, name: 'HTML' },
    { id: 2, name: 'CSS' },
    { id: 3, name: 'Javascript' },
    { id: 4, name: 'Typescript' },
    { id: 5, name: 'React' },
    { id: 6, name: 'Gatsby.js' },
    { id: 7, name: 'Contentful' },
  ];
  const interestedSkills = [
    { id: 1, name: 'C#' },
    { id: 2, name: 'HTMX' },
    { id: 3, name: 'Bun' },
    { id: 4, name: 'WordPress' },
  ];
  const learningSkills = [
    { id: 1, name: 'Next.js' }
  ];

  return (
    <>
      <div className='flex flex-col h-full justify-center gap-y-7 px-4'>
        <SkillList data={availableSkills} isWhat="available" />
        <SkillList data={interestedSkills} isWhat="interested" />
        <SkillList data={learningSkills} isWhat="learning" />
      </div>
    </>
  );
}

export default Skills;