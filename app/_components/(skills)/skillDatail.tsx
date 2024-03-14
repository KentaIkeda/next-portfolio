const SkilllDetail = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="py-1 px-2 bg-dark dark:bg-light text-light dark:text-dark rounded-md tracking-wide cursor-default">
      {children}
    </li>
  );
};

export default SkilllDetail;
