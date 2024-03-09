'use client';

import { SkillTitleProps } from '@/app/_types/types';
import { notoSansJP } from '@/app/lib/fonts';

const SkillTitle = ({ title }: { title: SkillTitleProps }) => {
  return (
    <h3 className={`${notoSansJP.className} text-lg font-semibold`}>
      {title}
    </h3>
  );
}

export default SkillTitle;