import SkillList from './skillList';

const Skills = () => {
  // ここに列挙したい技術を書いていく
  const availableSkills = [
    { id: 1, name: 'HTML' },
    { id: 2, name: 'CSS' },
    { id: 3, name: 'JavaScript' },
    { id: 4, name: 'TypeScript' },
    { id: 5, name: 'React' },
    { id: 6, name: 'Gatsby.js' },
    { id: 7, name: 'Astro' },
    { id: 8, name: 'Contentful' },
    { id: 9, name: 'GSAP' },
  ];
  const interestedSkills = [
    { id: 1, name: 'Remix' },
    { id: 3, name: 'Bun' },
  ];
  const learningSkills = [{ id: 1, name: 'Next.js' }];

  return (
    <div className='flex flex-col h-full justify-center gap-y-7'>
      <SkillList
        data={availableSkills}
        skillKind='available'
      />
      <SkillList
        data={interestedSkills}
        skillKind='interested'
      />
      <SkillList
        data={learningSkills}
        skillKind='learning'
      />
    </div>
  );
};

export default Skills;
