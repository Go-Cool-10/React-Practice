import { useRef } from "react";

const UseRefDemo4 = () => {
  let paraRef = useRef();
  let imgRef = useRef();

  const handleFocus = () => {
    paraRef.current.style.color = "red";
    paraRef.current.style.fontSize = "30px";
  };

  const handleClick = () => {
    if (imgRef.current.width >= 100 && imgRef.current.width <= 500) {
      imgRef.current.width = imgRef.current.width + 100;
      imgRef.current.height = imgRef.current.height + 100;
    } else if (imgRef.current.width >= 500) {
      imgRef.current.width = imgRef.current.width - 100;
      imgRef.current.height = imgRef.current.height - 100;
    }

    console.log("Height:" + imgRef.current.width);
    console.log("Width:" + imgRef.current.height);
  };

  return (
    <>
      <img
        src="/Images/project.png"
        alt="hug"
        height="100px"
        width="100px"
        ref={imgRef}
        onClick={handleClick}
      />
      <p ref={paraRef} onClick={handleFocus}>
        This is a paragraph
      </p>
    </>
  );
};
export default UseRefDemo4;
