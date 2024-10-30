const template = async ({ children }: { children: React.ReactNode }) => {
  return <div className="animate-appear">{children}</div>;
};

export default template;
