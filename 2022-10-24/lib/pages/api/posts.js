import { getSortedPostsData } from "../../lib/posts"

export default function Handler(req, res) {
  const allPostsData = getSortedPostsData()
  res.status(200).json({ allPostsData})
}