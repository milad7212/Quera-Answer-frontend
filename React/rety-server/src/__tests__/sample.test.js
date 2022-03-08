import "@testing-library/jest-dom";
import { render, act, waitFor, fireEvent } from "@testing-library/react";
import App from "../App";

beforeEach(() => {
  jest.spyOn(window, "fetch").mockImplementation((...args) => {
    console.warn("window.fetch is not mocked for this call", ...args);
    return Promise.reject(new Error("This must be mocked!"));
  });

  jest.useFakeTimers();
});

afterEach(() => {
  window.fetch.mockRestore();

  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

const wait = (time) =>
  act(() => {
    return new Promise((resolve) => {
      jest.advanceTimersByTime(time);
      resolve();
    });
  });

const apiErrorOuput = {
  status: 500,
  json: () => {
    return Promise.resolve({ message: "NOT OK" });
  },
};

const apiSuccessOutput = {
  status: 200,
  json: () => {
    return Promise.resolve({ message: "OK" });
  },
};

function mockFetchToFailAfter(n) {
  window.fetch.mockResolvedValue(apiErrorOuput);

  for (let i = 0; i < n; i++) {
    window.fetch.mockResolvedValueOnce(apiSuccessOutput);
  }
}

function renderApp(delay, maxAttempts) {
  return render(
    <App
      firstRetryDelay={delay}
      maxAttempts={maxAttempts}
      url="http://localhost:5000"
    />
  );
}

test("sample test", async () => {
  mockFetchToFailAfter(6);

  const delay = 600;

  const { container, getByRole } = renderApp(delay, 8);

  expect(container.querySelector("#message")).toHaveTextContent(
    /first attempt/i
  );

  await wait(5);

  expect(container.querySelector("#message")).toHaveTextContent(
    /attempt 1 done/i
  );

  expect(container.querySelector("#message")).toHaveTextContent(
    /retrying in 600/i
  );

  await wait(delay);

  expect(container.querySelector("#message")).toHaveTextContent(
    /attempt 2 done/i
  );

  expect(container.querySelector("#message")).toHaveTextContent(
    /retrying in 1200/i
  );

  await wait(2 * delay);

  expect(container.querySelector("#message")).toHaveTextContent(
    /attempt 3 done/i
  );

  expect(container.querySelector("#message")).toHaveTextContent(
    /retrying in 1800/i
  );

  await wait(3 * delay);

  expect(container.querySelector("#message")).toHaveTextContent(
    /attempt 4 done/i
  );

  expect(container.querySelector("#message")).toHaveTextContent(
    /retrying in 2400/i
  );

  await wait(4 * delay);

  expect(container.querySelector("#message")).toHaveTextContent(
    /attempt 5 done/i
  );

  expect(container.querySelector("#message")).toHaveTextContent(
    /retrying in 3000/i
  );

  await wait(5 * delay);

  expect(container.querySelector("#message")).toHaveTextContent(
    /attempt 6 done/i
  );

  expect(container.querySelector("#message")).toHaveTextContent(
    /retrying in 3600/i
  );

  await wait(6 * delay);

  expect(container.querySelector("#message")).not.toBeInTheDocument();

  await waitFor(() => {
    expect(container.querySelector("#result")).toHaveTextContent(
      /failed after 7 attempt/i
    );
  });

  expect(container.querySelector("#result")).not.toHaveTextContent(
    /[8-9]|[0-6]/i
  );


  mockFetchToFailAfter(9);

  fireEvent.click(getByRole('button'))

  expect(container.querySelector("#message")).toHaveTextContent(
    /first attempt/i
  );

  await wait(5);

  expect(container.querySelector("#message")).toHaveTextContent(
    /attempt 1 done/i
  );

  expect(container.querySelector("#message")).toHaveTextContent(
    /retrying in 600/i
  );

  await wait(delay);

  expect(container.querySelector("#message")).toHaveTextContent(
    /attempt 2 done/i
  );

  expect(container.querySelector("#message")).toHaveTextContent(
    /retrying in 1200/i
  );

  await wait(2 * delay);

  expect(container.querySelector("#message")).toHaveTextContent(
    /attempt 3 done/i
  );

  expect(container.querySelector("#message")).toHaveTextContent(
    /retrying in 1800/i
  );

  await wait(3 * delay);

  expect(container.querySelector("#message")).toHaveTextContent(
    /attempt 4 done/i
  );

  expect(container.querySelector("#message")).toHaveTextContent(
    /retrying in 2400/i
  );

  await wait(4 * delay);

  expect(container.querySelector("#message")).toHaveTextContent(
    /attempt 5 done/i
  );

  expect(container.querySelector("#message")).toHaveTextContent(
    /retrying in 3000/i
  );

  await wait(5 * delay);

  expect(container.querySelector("#message")).toHaveTextContent(
    /attempt 6 done/i
  );

  expect(container.querySelector("#message")).toHaveTextContent(
    /retrying in 3600/i
  );

  await wait(6 * delay);

  expect(container.querySelector("#message")).toHaveTextContent(
    /attempt 7 done/i
  );

  expect(container.querySelector("#message")).toHaveTextContent(
    /retrying in 4200/i
  );

  await wait(7 * delay);

  expect(container.querySelector("#message")).not.toBeInTheDocument();

  await waitFor(() => {
    expect(container.querySelector("#result")).toHaveTextContent(
      /success after 8 attempt/i
    );
  });

  expect(container.querySelector("#result")).not.toHaveTextContent(
    /9|[0-7]/i
  );
});
