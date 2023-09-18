import { useState } from "react";
import { compareObjs } from "./utils/compareObjs";

function App() {
  const [obj1, setObj1] = useState("");
  const [obj2, setObj2] = useState("");
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState(false);

  const handleCompare = () => {
    if (!obj1.trim() || !obj2.trim()) return;
    setResult(
      compareObjs(
        JSON.parse(JSON.stringify(obj1.replace(/(\r\n|\n|\r)/gm, ""))),
        JSON.parse(JSON.stringify(obj2.replace(/(\r\n|\n|\r)/gm, "")))
      )
    );
    setOpen(true);
  };

  return (
    <main className="h-screen bg-slate-500 py-5">
      <h1 className="text-center text-rose-700 text-3xl font-bold uppercase">
        Compare your nested and complex JSON objects
      </h1>
      <p className="italic text-blue-900 font-bold text-2xl text-center">
        Place the objects you want to compare separately
      </p>
      <div className="flex justify-between px-10 mt-10">
        <div className="flex flex-col gap-10">
          <button
            onClick={handleCompare}
            className="bg-green-700 text-white font-medium px-4 py-2 rounded hover:opacity-60"
          >
            Compare!
          </button>
          <div>
            {open && (
              <>
                {result ? (
                  <p className="text-xl">
                    This objects completely{" "}
                    <span className="text-green-700 font-bold text-xl">
                      equal!
                    </span>
                  </p>
                ) : (
                  <p className="text-xl">
                    This objects are{" "}
                    <span className="text-rose-500">not equal!</span>
                  </p>
                )}
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <textarea
            className="textArea"
            name=""
            value={obj1}
            onChange={(e) => setObj1(e.target.value)}
            id=""
            cols="60"
            rows="10"
          ></textarea>
          <textarea
            className="textArea"
            name=""
            value={obj2}
            onChange={(e) => setObj2(e.target.value)}
            id=""
            cols="60"
            rows="10"
          ></textarea>
        </div>
      </div>
    </main>
  );
}

export default App;
