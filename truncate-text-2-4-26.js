function truncateText(text) {
  const ellipsis = "..."
  if (text.length > 20) {
    return text.slice(0, 17) + ellipsis;
  }
  return text;
}
