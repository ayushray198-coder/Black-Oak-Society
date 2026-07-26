import { Link } from "react-router-dom";
import AuthBanner from "./AuthBanner";

const AuthLayout = ({
  title,
  subtitle,
  children,
  footerText,
  footerLinkText,
  footerLink,
}) => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#D8B46A]/10 blur-[170px]" />
      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-[#D8B46A]/5 blur-[170px]" />

      <div className="relative mx-auto flex min-h-screen max-w-[1650px] items-center px-8 py-16 lg:px-16">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.3fr_1fr]">

          <AuthBanner />

          <div className="mx-auto w-full max-w-[580px]">
            <div
              className="
                rounded-[34px]
                border
                border-[#D8B46A]/15
                bg-[#0B0B0B]/75
                p-10
                backdrop-blur-3xl
                shadow-[0_25px_80px_rgba(0,0,0,.55)]
                transition-all
                duration-500
              "
            >
              <p className="text-sm uppercase tracking-[0.35em] text-[#D8B46A]">
                Welcome
              </p>

              <h2 className="mt-4 text-[42px] font-light leading-tight">
                {title}
              </h2>

              <p className="mt-5 text-[15px] leading-7 text-white/65">
                {subtitle}
              </p>

              <div className="mt-10">
                {children}
              </div>

              {footerText && (
                <div className="mt-10 border-t border-white/10 pt-7 text-center">
                  <span className="text-white/55">
                    {footerText}
                  </span>

                  <Link
                    to={footerLink}
                    className="ml-2 font-medium text-[#D8B46A] transition duration-300 hover:text-white"
                  >
                    {footerLinkText}
                  </Link>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AuthLayout;