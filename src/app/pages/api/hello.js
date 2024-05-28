export default function handler(req, res) {
  if (req.method === "POST") {
    res.status(200).json({ message: "This is a POST request" });
  } else {
    res.status(200).json("allBlogs");
  }
}
