import React, { useState } from "react";
import "../styles/taginput.css";

function TagInput(props) {
  const [input, setInput] = useState("");
  const [tags, setTags] = useState([]);
  const [isKeyReleased, setIsKeyReleased] = useState(false);

  const onChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const onKeyDown = (e) => {
    const { key } = e;
    const trimmedInput = input.trim();

    if (key === "," && trimmedInput.length && !tags.includes(trimmedInput)) {
      e.preventDefault();
      setTags((prevState) => [...prevState, trimmedInput]);
      setInput("");
    }

    if (key === "Backspace" && !input.length && tags.length) {
      e.preventDefault();
      const tagsCopy = [...tags];
      const poppedTag = tagsCopy.pop();

      setTags(tagsCopy);
      setInput(poppedTag);
    }
    setIsKeyReleased(false);
  };

  const onKeyUp = () => {
    setIsKeyReleased(true);
  };

  const deleteTag = (index) => {
    setTags((prevState) => prevState.filter((tag, i) => i !== index));
  };

  return (
    <>
      <div className="taginput-container">
        {tags.map((tag, index) => (
          <div className="tag-div">
            {tag}
            <button onClick={() => deleteTag(index)}>x</button>
          </div>
        ))}
        <input
          ref={props.reference}
          value={input}
          placeholder="Enter a tag"
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          onChange={onChange}
        />
      </div>
    </>
  );
}

export default TagInput;
