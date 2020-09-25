/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled/macro";
import { FaSpinner } from "react-icons/fa";
import { ImSpinner10 } from "react-icons/im";
import { CgSpinner } from "react-icons/cg";

import { keyframes } from "@emotion/core";

const spin = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

const Spinner = styled(CgSpinner)({
  animation: `${spin} 1s linear infinite`,
});
Spinner.defaultProps = {
  "aria-label": "loading",
};

function FullPageSpinner() {
  return (
    <div
      css={{
        fontSize: "3em",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spinner />
    </div>
  );
}

export { FullPageSpinner };
