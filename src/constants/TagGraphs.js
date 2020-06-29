export default function getTagGraphFromAssets(tagId) {
  if (!tagId)
    return null

  return require(`../assets/${tagId}-tag.svg`)
}