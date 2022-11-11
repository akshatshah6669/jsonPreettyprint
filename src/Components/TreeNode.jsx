import { useState } from "react";

function TreeNode(props) {
  const [display, setDisplay] = useState();

  const { node, nodeKey, level } = props;

  if (typeof node === "string" || typeof node === "number") {
    return (
      <p style={{ marginLeft: level * 10 + "px" }}>
        <span>
          {nodeKey}:&nbsp;
          {node}
        </span>
      </p>
    );
  } else if (typeof node === "object") {
    const root = props.getNode(node);

    return (
      <>
        <p style={{ marginLeft: level * 10 + "px" }}>
          <span onClick={() => setDisplay(!display)}>
            {nodeKey}
            <button>{`>`}</button>
            {"{"}
          </span>
        </p>
        {display &&
          root.map((data) => (
            <TreeNode
              nodeKey={data.nodeKey}
              node={data.value}
              getNode={props.getNode}
              level={level + 1}
            />
          ))}
        <p style={{ marginLeft: level * 10 + "px" }}> {"}"} </p>
      </>
    );
  }
}

export default TreeNode;
