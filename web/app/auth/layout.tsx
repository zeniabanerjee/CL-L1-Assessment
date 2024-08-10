"use client";

const SignInUpLayout = ({ children }: { children: React.ReactNode }) => {
  console.log("Layoout");
  return (
    <div className="flex lg:flex-row flex-col h-screen w-screen ">
      <div
        className="lg:w-1/2 h-full hidden lg:block"
        style={{
          backgroundImage: `url(${"/auth/banner.png"})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      />
      {children}
    </div>
  );
};

export default SignInUpLayout;
