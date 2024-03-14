const themeColor = `text-dark dark:text-light`;

const HYPERLINK = ({ link, text }: { link: string; text: React.ReactNode }) => {
  "use client";
  return (
    <a
      href={link}
      id="link"
      className={`text-indigo-500 hover:underline underline-offset-2`}
    >
      {text}
    </a>
  );
};
const PARAGRAPH = ({ text }: { text: React.ReactNode }) => {
  "use client";
  return <p className="leading-relaxed">{text}</p>;
};
const HEADING_1 = ({ text }: { text: React.ReactNode }) => {
  "use client";
  return (
    <h3 className={`text-2xl lg:text-3xl mt-20 mb-10 ${themeColor}`}>{text}</h3>
  );
};
const HEADING_2 = ({ text }: { text: React.ReactNode }) => {
  "use client";
  return <h4 className={`text-xl lg:text-2xl my-10 ${themeColor}`}>{text}</h4>;
};
const HEADING_3 = ({ text }: { text: React.ReactNode }) => {
  "use client";
  return <h5 className={`text-lg lg:text-xl ${themeColor}`}>{text}</h5>;
};
const HEADING_4 = ({ text }: { text: React.ReactNode }) => {
  "use client";
  return <h6 className={`text-base lg:text-lg ${themeColor}`}>{text}</h6>;
};
const BOLD = ({ text }: { text: React.ReactNode }) => {
  "use client";
  return <b className={themeColor}>{text}</b>;
};
const ITALIC = ({ text }: { text: React.ReactNode }) => {
  "use client";
  return <i className={themeColor}>{text}</i>;
};
const UNDERLINE = ({ text }: { text: React.ReactNode }) => {
  "use client";
  return (
    <u
      className={`decoration-dark dark:decoration-light underline-offset-2 ${themeColor}`}
    >
      {text}
    </u>
  );
};
const SUPERSCRIPT = ({ text }: { text: React.ReactNode }) => {
  "use client";
  return <sup className={themeColor}>{text}</sup>;
};
const SUBSCRIPT = ({ text }: { text: React.ReactNode }) => {
  "use client";
  return <sub className={themeColor}>{text}</sub>;
};
const CODE = ({ text }: { text: React.ReactNode }) => {
  "use client";
  return (
    <code className=" text-light bg-slate-700 dark:text-dark dark:bg-slate-300 py-0.5 px-0.5 rounded-sm">
      {text}
    </code>
  );
};
const HR = () => {
  "use client";
  return <hr className="border-gray-500" />;
};

export {
  PARAGRAPH,
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
};
