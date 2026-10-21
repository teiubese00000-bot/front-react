import { useState } from "react";
import BoardFooter from "./BoardFooter";
import BoardHeader from "./components/BoardHeader";
import PostList from "./components/PostList";
import "./style.css";


/** useState 를 사용하면 추가한 것에 대한 랜더링을 다시해줌...실시간으로 뭔가를 해줌*/

export default function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "첫 번째 게시글",
      authorNickname: "학생",
      createDatetime: "2026-10-04",
      content: "우끼기",
    },
    {
      id: 2,
      title: "두 번째 게시글",
      authorNickname: "강사",
      createDatetime: "2026-10-04",
      content: "바나나",
    },
  ]);

  function addPracticePost() {
    const id = Date.now();
    setPosts((currentPosts) => [
      {
        id,
        title: `임시게시글 ${currentPosts.length}`,
        authorNickname: "학생",
        createDatetime: "2026-10-04",
      },
      ...currentPosts,
    ]);
  }

  return (
    <>
      <BoardHeader />
      <main>
        <h1> 게시판</h1>
        <p id="list-message" role="status">
          게시글 목록
        </p>
        <button id="retry-list" type="button">
          {" "}
          목록 다시시도
        </button>

        <PostList posts={posts} onSelect={(post) => window.alert(post.title)} />
        <button type="button" onClick={addPracticePost}>
          게시글 추가
        </button>

        <div className="pagination" aria-label="페이지 이동">
          <button id="previous-page" type="button" disabled>
            이전
          </button>
          <span id="page-number">1 페이지</span>
          <button id="next-page" type="button" disabled>
            다음
          </button>
        </div>
      </main>

      <BoardFooter />
    </>
  );
}
