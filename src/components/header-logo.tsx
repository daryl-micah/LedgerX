import Link from "next/link";

export const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="items-center hidden lg:flex">
        <p className="font-semibold text-white text-2xl mr-2">LedgerX</p>
      </div>
    </Link>
  );
};
