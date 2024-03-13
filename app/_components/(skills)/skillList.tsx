import React from 'react';
import { SkillCardProps, SkillCardTypeProps } from '@/app/_types/types';
import SkillTitle from './skillTitle';
import SkilllDetail from './skillDatail';


const Available = ({ data }: { data: SkillCardProps[] }) => {
  return (
    <div className='flex flex-col items-start gap-1'>
      <SkillTitle title='扱える技術' />
      <ul className='flex flex-wrap gap-2'>
        {
          data.map((data) => {
            return (
              <React.Fragment key={data.id}>
                <SkilllDetail>
                  {data.name}
                </SkilllDetail>
              </React.Fragment>
            );
          })
        }
      </ul>
    </div>
  );
}

const Interested = ({ data }: { data: SkillCardProps[] }) => {
  return (
    <div className='flex flex-col items-start gap-1'>
      <SkillTitle title='興味ある技術' />
      <ul className='flex flex-wrap gap-2'>
        {
          data.map((data) => {
            return (
              <React.Fragment key={data.id}>
                <SkilllDetail>
                  {data.name}
                </SkilllDetail>
              </React.Fragment>
            );
          })
        }
      </ul>
    </div>
  );
}

const Learning = ({ data }: { data: SkillCardProps[] }) => {
  return (
    <div className='flex flex-col items-start gap-1'>
      <SkillTitle title='学習中の技術' />
      <ul className='flex flex-wrap gap-2'>
        {
          data.map((data) => {
            return (
              <React.Fragment key={data.id}>
                <SkilllDetail>
                  {data.name}
                </SkilllDetail>
              </React.Fragment>
            );
          })
        }
      </ul>
    </div>
  );
}

const SkillList = ({ data, isWhat }: { data: SkillCardProps[], isWhat: SkillCardTypeProps }) => {

  const available = <Available data={data} />
  const interested = <Interested data={data} />
  const learning = <Learning data={data} />

  if (isWhat === "available") return available;
  if (isWhat === "interested") return interested;
  else return learning;
}

export default SkillList;