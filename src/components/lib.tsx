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

interface errorMessageVariantsType {
  [key: string]: { display: string };
}

const errorMessageVariants: errorMessageVariantsType = {
  stacked: { display: "block" },
  inline: { display: "inline-block" },
};

function ErrorMessage({
  error,
  variant = "stacked",
  ...props
}: {
  error?: Error;
  variant?: string;
}) {
  return (
    <div
      role="alert"
      css={[{ color: "#ef5350" }, errorMessageVariants[variant]]}
      {...props}
    >
      <span>There was an error: </span>
      <pre
        css={[
          { whiteSpace: "break-spaces", margin: "0", marginBottom: -5 },
          errorMessageVariants["stacked"],
        ]}
      >
        {error?.message}
      </pre>
    </div>
  );
}

function FullPageErrorFallback({ error }: { error?: Error }) {
  return (
    <div
      role="alert"
      css={{
        color: "#ef5350",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>Uh oh... There's a problem. Try refreshing the app.</p>
      <pre>{error?.message}</pre>
    </div>
  );
}

function ErrorFallback({ error }: { error?: Error }) {
  return (
    <ErrorMessage
      error={error}
      css={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    />
  );
}

export { FullPageSpinner, ErrorMessage, FullPageErrorFallback, ErrorFallback };
