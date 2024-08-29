import React from "react";
import UseState01 from "./a_UseState/UseState01";
import UseState02 from "./a_UseState/UseState02";
import UseState03 from "./a_UseState/UseState03";
import UseState04 from "./a_UseState/UseState04";
import UseState05 from "./a_UseState/UseState05";
import UseState06 from "./a_UseState/UseState06";
import UseRef01 from "./b_UseRef/UseRef01";
import UseRef02 from "./b_UseRef/UseRef02";
import Practice01 from "./a_UseState/Practice01";
import UseRef03 from "./b_UseRef/UseRef03";
import UseEffect01 from "./c_UseEffect/UseEffect01";
import UseEffect02 from "./c_UseEffect/UseEffect02";
// import WebCamPractice from "./c_UseEffect/Practice01";

// 전체 파일 정렬
// ctrl + a: 전체 선택
// ctrl + k + f: 포맷터 사용
function Index() {
  return (
    <div>
      <h1 style={{ backgroundColor: "black", color: "white" }}>
        리액트 Hooks
      </h1>

      <h2>리액트 Hooks - useState</h2>
      <UseState01 />
      <UseState02 />
      <UseState03 />
      <UseState04 />
      <UseState05 />
      <UseState06 />

      <Practice01 />

      <hr />
      <h2>리액트 Hooks - useRef</h2>
      <UseRef01 />
      <UseRef02 />
      <UseRef03 />

      <hr />
      <h2>리액트 Hooks - useEffect</h2>
      <UseEffect01 />
      <UseEffect02 />
      {/* <WebCamPractice /> */}
    </div>
  );
}

export default Index;
