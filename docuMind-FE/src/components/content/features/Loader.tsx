import { useState, useEffect } from "react";

interface LoaderProps {
  setIsLoader: (value: boolean) => void;
  setIsChattingWindow: (value: boolean) => void;
  setNewChat: (value: boolean) => void;
}

const Loader: React.FC<LoaderProps> = ({
  setIsLoader,
  setIsChattingWindow,
  setNewChat,
}) => {
  const [status, setStatus] = useState<"pending" | "success" | "failed">(
    "pending",
  );

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        // Replace with real API
        const res = await fetch("/api/analyze-status");
        const data = await res.json();

        if (data.status === "success") {
          setStatus("success");
          clearInterval(interval);
        }

        if (data.status === "failed") {
          setStatus("failed");
          clearInterval(interval);
        }
      } catch {
        setStatus("failed");
        clearInterval(interval);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleStartChat = () => {
    setIsChattingWindow(true);
    setIsLoader(false);
  };

  const handleFallback = () => {
    setIsLoader(false);
    setNewChat(true);
  };

  return (
    <>
      {status === "pending" && <h1>Loading - Analyzing</h1>}

      {status === "success" && (
        <>
          <h2>Analyze successful</h2>
          <button onClick={handleStartChat}>Start your QnA</button>
        </>
      )}

      {status === "failed" && (
        <button onClick={handleFallback}>Go back to reanalyze</button>
      )}
    </>
  );
};

export default Loader;
