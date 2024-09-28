import React from 'react';
import { SkillCardProps, SkillCardTypeProps } from '@/app/_types/types';
import SkillTitle from './skillTitle';
import SkilllDetail from './skillDatail';

const Available = ({ data }: { data: SkillCardProps[] }) => {
  return (
    <div className='flex flex-col items-start gap-1'>
      <SkillTitle title='扱える技術' />
      <ul className='flex flex-wrap gap-2'>
        {data.map(data => (
          <SkilllDetail key={data.id}>{data.name}</SkilllDetail>
        ))}
      </ul>
    </div>
  );
};

const Interested = ({ data }: { data: SkillCardProps[] }) => {
  return (
    <div className='flex flex-col items-start gap-1'>
      <SkillTitle title='興味ある技術' />
      <ul className='flex flex-wrap gap-2'>
        {data.map(data => (
          <SkilllDetail key={data.id}>{data.name}</SkilllDetail>
        ))}
      </ul>
    </div>
  );
};

const Learning = ({ data }: { data: SkillCardProps[] }) => {
  return (
    <div className='flex flex-col items-start gap-1'>
      <SkillTitle title='学習中の技術' />
      <ul className='flex flex-wrap gap-2'>
        {data.map(data => (
          <SkilllDetail key={data.id}>{data.name}</SkilllDetail>
        ))}
      </ul>
    </div>
  );
};

const SkillList = ({
  data,
  skillKind,
}: {
  data: SkillCardProps[];
  skillKind: SkillCardTypeProps;
}) => {
  switch (skillKind) {
    case 'available':
      return <Available data={data} />;
    case 'interested':
      return <Interested data={data} />;
    case 'learning':
      return <Learning data={data} />;
  }
};

export default SkillList;
