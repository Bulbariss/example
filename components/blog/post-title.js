export default function PostTitle({ children }) {
  return (
    <h1 className="mb-12 text-3xl font-bold leading-tight tracking-tighter text-left md:text-4xl lg:text-5xl md:leading-none">
      {children}
    </h1>
  );
}
