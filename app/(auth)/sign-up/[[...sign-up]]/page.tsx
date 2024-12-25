import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="h-screen flex items-center justify-center p-4">
      <div
        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
        className="max-w-full max-h-full overflow-auto hide-scrollbar rounded-xl"
      >
        <SignUp />
      </div>
    </div>
  );
}
