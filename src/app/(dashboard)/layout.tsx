import { Header } from "@/components/header";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <>
      <main className="px-3 lg: px-30">
        <Header />
        {children}
      </main>
    </>
  );
};

export default DashboardLayout;
