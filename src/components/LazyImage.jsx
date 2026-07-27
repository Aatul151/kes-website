export default function LazyImage({
  loading = "lazy",
  decoding = "async",
  fetchPriority,
  ...props
}) {
  return (
    <img
      loading={loading}
      decoding={decoding}
      fetchPriority={fetchPriority}
      {...props}
    />
  );
}
