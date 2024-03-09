import SkillList from './skillList';

const Skills = () => {

  const available = [
    { id: 1, name: 'HTML' },
    { id: 2, name: 'CSS' },
    { id: 3, name: 'Javascript' },
    { id: 4, name: 'Typescript' },
    { id: 5, name: 'React' },
    { id: 6, name: 'Gatsby.js' },
    { id: 7, name: 'Contentful' },
  ];
  const interested = [
    { id: 1, name: 'C#' },
    { id: 2, name: 'HTMX' },
    { id: 3, name: 'Bun' },
    { id: 4, name: 'WordPress' },
  ];
  const learning = [
    { id: 1, name: 'Next.js' }
  ];

  return (
    <>
      <div className='flex flex-col h-full justify-center gap-y-7 px-4'>
        <SkillList data={available} isWhat="available" />
        <SkillList data={interested} isWhat="interested" />
        <SkillList data={learning} isWhat="learning" />
      </div>
    </>
  );
}

export default Skills;