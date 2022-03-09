import { useEffect, useState } from "react";
function App({ firstRetryDelay, maxAttempts, url }) {
  const [attemptCount, setAttemptCount] = useState(0);
  const [okServer, setOkServer] = useState(true);

  useEffect(() => {
    async function fetchData() {
      if (attemptCount < maxAttempts && okServer) {
        fetch(url).then((res) => {
          console.log(res.status);
          if (res.status === 200) {
            console.log("Success");
            setTimeout(async () => {
              setAttemptCount((e) => e + 1);
            }, firstRetryDelay * attemptCount);
          }
          if (res.status === 500) {
            setOkServer(false);
          }
        });
      }
    }
    fetchData();
  }, [attemptCount]);

  return (
    <div>
      {attemptCount === 0 && <p id="message">First attempt...</p>}
      {attemptCount >= 1 && attemptCount < maxAttempts && okServer && (
        <p id="message">
          Attempt {attemptCount} done. Retrying in{" "}
          {firstRetryDelay * attemptCount} milliseconds...
        </p>
      )}

      <div id="result">
        {attemptCount === maxAttempts && okServer && (
          <p>
            <span>Success after {attemptCount} attempts.</span>
          </p>
        )}

        {!okServer && (
          <p>
            <span>Failed after {attemptCount + 1} attempts.</span>
          </p>
        )}
        <button
          onClick={() => {
            setOkServer(true);

            setAttemptCount(0);
          }}
        >
          Resend requests
        </button>
      </div>
    </div>
  );
}

export default App;
