import Navbar from "@/components/Navbar";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="w-full bg-white px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <Navbar />
      </div>
      <div className=" bg-slate-100 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        {children}
      </div>
    </>
  );
}
