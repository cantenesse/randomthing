export const fetchIndexedFileData = () => (
  fetch("/api")
    .then((res) => res.json())
)