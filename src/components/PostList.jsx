import PostItem from "./PostItem.jsx";

export default function PostList({ posts, onSelect }) {
  return (
    <ul id="post-list" className="post-list">
      
      {/* 게시글 하나씩 빼와서 화살표 뒤에거 실행해라 */}
      {posts.map((post) => (
        <PostItem key={post.id} post={post} onSelect={onSelect} />
      ))}
    </ul>
  );
}
