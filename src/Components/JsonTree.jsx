import { useState } from "react";
import TreeNode from "./TreeNode";

function JSONTree(props) {
  const [display, setDisplay] = useState();

  function getNode(obj) {
    const arr = [];
    Object.keys(obj).forEach((key) => {
      arr.push({ value: obj[key], nodeKey: key });
    });
    return arr;
  }

  const root = getNode(props.jsonObj);

  return (
    <div className="tree">
      <p>
        <span onClick={() => setDisplay(!display)}>
          <p>OUTPUT:-(Click on caret)</p>
          <button>{`>`}</button>
          {"{"}
        </span>
      </p>
      {display &&
        root.map((data) => (
          <TreeNode
            nodeKey={data.nodeKey}
            node={data.value}
            getNode={getNode}
            level={1}
          />
        ))}
    </div>
  );
}

export default JSONTree;
