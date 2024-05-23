type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <>
      <main className="px-3 lg: px-30">{children}</main>
    </>
  );
};

export default DashboardLayout;
