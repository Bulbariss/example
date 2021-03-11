export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl px-4 mx-auto md:px-0">
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
