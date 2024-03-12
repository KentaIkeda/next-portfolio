const themeColor = `text-dark dark:text-light`;

const HYPERLINK = ({ link, text }: { link: string, text: React.ReactNode }) => {
  return (
    <a href={link} id='link' className={`text-indigo-500 hover:underline underline-offset-2`}>
      {text}
    </a>
  );
}
const HEADING_1 = ({ text }: { text: React.ReactNode }) => (
  <h3 className={`text-3xl my-20 ${themeColor}`}>
    {text}
  </h3>
);
const HEADING_2 = ({ text }: { text: React.ReactNode }) => (
  <h4 className={`text-2xl my-10 ${themeColor}`}>
    {text}
  </h4>
);
const HEADING_3 = ({ text }: { text: React.ReactNode }) => (
  <h5 className={`text-xl ${themeColor}`}>
    {text}
  </h5>
);
const HEADING_4 = ({ text }: { text: React.ReactNode }) => (
  <h6 className={`text-lg ${themeColor}`}>
    {text}
  </h6>
);
const BOLD = ({ text }: { text: React.ReactNode }) => (
  <b className={themeColor}>
    {text}
  </b>
);
const ITALIC = ({ text }: { text: React.ReactNode }) => (
  <i className={themeColor}>
    {text}
  </i>
);
const UNDERLINE = ({ text }: { text: React.ReactNode }) => (
  <u className={`decoration-dark dark:decoration-light underline-offset-2 ${themeColor}`}>
    {text}
  </u>
);
const SUPERSCRIPT = ({ text }: { text: React.ReactNode }) => (
  <sup className={themeColor}>
    {text}
  </sup>
);
const SUBSCRIPT = ({ text }: { text: React.ReactNode }) => (
  <sub className={themeColor}>
    {text}
  </sub>
);
const CODE = ({ text }: { text: React.ReactNode }) => (
  <code className=' text-light bg-slate-700 dark:text-dark dark:bg-slate-300 py-0.5 px-0.5 rounded-sm'>
    {text}
  </code>
);
const HR = () => (
  <hr className='border-gray-500'/>
);

export {
  HYPERLINK,
  HEADING_1,
  HEADING_2,
  HEADING_3,
  HEADING_4,
  BOLD,
  ITALIC,
  UNDERLINE,
  SUPERSCRIPT,
  SUBSCRIPT,
  CODE,
  HR,
}