import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export const ButtonWithIconMock = [
  {
    label: "Continue with Google",
    backgroundColor: "#4285f4",
    textColor: "white",
    icon: (
      <div
        style={{
          backgroundColor: "white",
          padding: " 5px 10px 0px",
          borderRadius: "50%",
        }}
      >
        <FcGoogle />
      </div>
    ),
  },
  {
    label: "Continue with Apple",
    backgroundColor: "transparent",
    textColor: "black",
    icon: <FaApple />,
  },
];
