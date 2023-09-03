import wellcometwitter from "../Images/wellcometwitter.png";

import React from "react";
import Footer from "./Footer";

const Wellcome = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="flex flex-row items-stretch flex-shrink flex-grow min-h-[auto] min-w-0 lg:flex-col-reverse  lg:w-auto lg:min-h-screen">
        <div
          className="flex justify-center flex-col flex-grow bg-cover bg-no-repeat bg-center w-full lg:flex "
          style={{
            backgroundImage: `url(${wellcometwitter})`,
          }}
        >
          <div className="flex flex-col justify-center m-auto  lg:h-[50%] lg:w-[30%] lg:items-center lg:flex ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="auto"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M23.643 2.70502C22.808 3.07502 21.911 3.32502 20.968 3.43802C21.93 2.86202 22.668 1.94802 23.016 0.860023C22.116 1.39402 21.119 1.78202 20.058 1.99002C19.208 1.08602 17.998 0.52002 16.658 0.52002C14.086 0.52002 12 2.60602 12 5.18002C12 5.54402 12.042 5.89802 12.12 6.24002C8.24701 6.04502 4.81601 4.19002 2.51801 1.37202C2.11801 2.06202 1.88801 2.86202 1.88801 3.71402C1.88801 5.33002 2.71101 6.75702 3.96001 7.59202C3.19601 7.56702 2.47801 7.35802 1.85001 7.00902V7.06902C1.85001 9.32602 3.45501 11.209 5.58701 11.637C5.19501 11.743 4.78401 11.799 4.36001 11.799C4.06001 11.799 3.76701 11.771 3.48301 11.717C4.07601 13.567 5.79601 14.915 7.83501 14.951C6.24001 16.201 4.23101 16.946 2.04901 16.946C1.67301 16.946 1.30201 16.924 0.937012 16.881C2.99901 18.204 5.44701 18.974 8.07701 18.974C16.647 18.974 21.332 11.876 21.332 5.72002C21.332 5.52002 21.327 5.31802 21.318 5.11802C22.228 4.46002 23.018 3.64102 23.641 2.70802L23.643 2.70502Z"
                fill="#F3208A"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col justify-center text-left py-2 pl-10 lg:pl-0 min-w-[750px] lg:justify-center lg:items-center lg:min-w-max lg:pt-[5%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="41"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M23.643 2.70502C22.808 3.07502 21.911 3.32502 20.968 3.43802C21.93 2.86202 22.668 1.94802 23.016 0.860023C22.116 1.39402 21.119 1.78202 20.058 1.99002C19.208 1.08602 17.998 0.52002 16.658 0.52002C14.086 0.52002 12 2.60602 12 5.18002C12 5.54402 12.042 5.89802 12.12 6.24002C8.24701 6.04502 4.81601 4.19002 2.51801 1.37202C2.11801 2.06202 1.88801 2.86202 1.88801 3.71402C1.88801 5.33002 2.71101 6.75702 3.96001 7.59202C3.19601 7.56702 2.47801 7.35802 1.85001 7.00902V7.06902C1.85001 9.32602 3.45501 11.209 5.58701 11.637C5.19501 11.743 4.78401 11.799 4.36001 11.799C4.06001 11.799 3.76701 11.771 3.48301 11.717C4.07601 13.567 5.79601 14.915 7.83501 14.951C6.24001 16.201 4.23101 16.946 2.04901 16.946C1.67301 16.946 1.30201 16.924 0.937012 16.881C2.99901 18.204 5.44701 18.974 8.07701 18.974C16.647 18.974 21.332 11.876 21.332 5.72002C21.332 5.52002 21.327 5.31802 21.318 5.11802C22.228 4.46002 23.018 3.64102 23.641 2.70802L23.643 2.70502Z"
              fill="#F3208A"
            />
          </svg>

          <h1 className="font-black text-[84px]/[98.44px] my-12 lg:text-6xl lg:my-6 ">
            Happening now
          </h1>
          <h2 className="font-black text-[42px]/[49.22px] mb-6 lg:text-4xl">
            Join Twitter today
          </h2>
          <nav className="flex flex-col pl-2 lg:w-auto lg:pl-0">
            <a
              href="/"
              className="flex items-center gap-1 justify-center max-h-[52px] min-w-[139px] pt-[22px] pb-[15px] px-[70px] font-medium text-xl flex-shrink-0 border rounded-3xl border-solid border-opacity-75 border-[#E4EAED] w-[403px] my-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
                <path d="M1 1h22v22H1z" fill="none" />
              </svg>
              Sign Up With Google
            </a>
            <a
              href="/"
              className="flex items-center gap-1 justify-center max-h-[52px] min-w-[139px] pt-[22px] pb-[15px] px-[70px] font-medium text-xl flex-shrink-0 border rounded-3xl border-solid border-opacity-75 border-[#E4EAED] w-[403px] my-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                overflow="visible"
                viewBox="0 0 857.52942 999.99992"
              >
                <g
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  transform="translate(3e-8 -.00025013) scale(.85753)"
                >
                  <path
                    fill="#61bb46"
                    stroke="#61bb46"
                    stroke-miterlimit="2.61310005"
                    stroke-width="6.28089046"
                    d="M54.232461 423.0098c.348572-.57566.718141-1.14287 1.087711-1.69954C115.05402 328.95469 209.27966 274.90015 297.88826 274.90015c90.22756 0 146.94605 49.66861 221.52778 49.66861 72.36642 0 116.44394-49.74031 220.75925-49.74031 78.81501 0 162.37771 43.09815 221.89737 117.62109-16.45637 9.05021-31.30215 19.32551-44.57099 30.6193l-863.269209-.0589z"
                  />
                  <path
                    fill="#61bb46"
                    stroke="#61bb46"
                    stroke-miterlimit="2.61310005"
                    stroke-width="6.28089046"
                    d="M661.04954 191.61588c37.86412-48.83359 66.66537-117.78556 56.22711-188.28314-61.90716 4.26153-134.31558 43.84038-176.60824 95.36246-38.37648 46.8051-70.05869 116.22095-57.7243 183.65049 67.5872 2.11073 137.50311-38.41488 178.10543-90.72981z"
                  />
                  <path
                    fill="#fdb827"
                    d="M51.151054 421.64891C25.42683 462.11947 7.6276563 520.12542 2.9042342 571.00351l834.5498858-.0215c9.02332-55.66242 39.02667-108.84145 86.58225-149.27157l-872.885316-.0615h.04925z"
                  />
                  <path
                    fill="#f5821f"
                    stroke="#f5821f"
                    stroke-miterlimit="2.61310005"
                    stroke-width="6.28089046"
                    d="M10.482518 719.0309c-8.1095407-51.96489-9.4219338-102.06365-4.3277482-148.02531l828.0487802-.0213c-8.09905 49.84363-1.30189 101.71362 19.18405 148.07802l-842.905082-.0317z"
                  />
                  <path
                    fill="#e03a3e"
                    stroke="#e03a3e"
                    stroke-miterlimit="2.61310005"
                    stroke-width="6.28089046"
                    d="M50.950428 867.04567c-19.55361-49.72976-32.942121-99.67671-40.46791-148.01477l842.905082.0317c26.09457 59.07939 74.38644 109.27093 142.38522 135.06361-2.02003 4.51035-3.96868 8.82458-5.84383 12.98278l-938.978562-.0632z"
                  />
                  <path
                    fill="#963d97"
                    stroke="#963d97"
                    stroke-miterlimit="2.61310005"
                    stroke-width="6.28089046"
                    d="M989.9269 867.10682c-23.34591 51.54106-36.8793 78.29106-69.18727 127.67077-4.34665 6.63161-8.83819 13.41511-13.51452 20.26181l-778.04344.072c-2.4925-3.7281-4.9619-7.454-7.3935-11.1504-29.088937-44.49017-52.638522-90.61629-70.837742-136.91744l938.976472.0632z"
                  />
                  <path
                    fill="#009ddc"
                    stroke="#009ddc"
                    stroke-miterlimit="2.61310005"
                    stroke-width="6.28089046"
                    d="M907.22511 1015.0394c-47.59473 70.0126-111.49253 147.0574-189.02664 147.7891-75.65684.6895-95.06557-49.4409-197.70942-48.8758-102.64386.5757-124.07261 49.7509-199.72945 49.0403-80.88753-.7507-143.69762-76.4165-191.57793-147.8819l778.04344-.072z"
                  />
                </g>
              </svg>
              Sign Up With Apple
            </a>
            <a
              href="/"
              className="flex items-center gap-1 justify-center max-h-[52px] min-w-[139px] pt-[22px] pb-[15px] px-[70px] font-medium text-xl flex-shrink-0 border rounded-3xl border-solid border-opacity-75 border-[#E4EAED] w-[403px] my-2 "
            >
              Sign Up With Phone or E-mail
            </a>
          </nav>

          <span className=" py-4 pl-2 w-[400px]  ">
            By signing up you agree to the
            <a href="/" className="text-[#1E97E1]">
              {" "}
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/" className="text-[#1E97E1]">
              Privacy Policy
            </a>
            , including{" "}
            <a href="/" className="text-[#1E97E1]">
              Cookie Use
            </a>
            .
          </span>
          <span className=" py-1 pl-2 ">
            Already have an account?
            <a href="/" className="text-[#1E97E1]">
              {"  "}
              Log in
            </a>
          </span>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Wellcome;
