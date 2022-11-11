import { useState } from "react";
import JSONTree from "./Components/JsonTree";

function App() {
  const [input, setInput] = useState("");
  const [jsonObj, setJsonObj] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const formatJson = () => {
    if (input) {
      const inputParsed = JSON.parse(input);
      const prettierInput = JSON.stringify(inputParsed, null, 4);
      setJsonObj(inputParsed);
      return prettierInput;
    }
  };

  return (
    <div className="App">
      <textarea
        value={input}
        onChange={handleInputChange}
        placeholder="paste your JSON here..."
      ></textarea>

      <div>
        <button type="button" onClick={formatJson}>
          Beautify
        </button>
      </div>

      <JSONTree jsonObj={jsonObj} />
    </div>
  );
}
export default App;
