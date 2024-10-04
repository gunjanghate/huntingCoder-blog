// "use client";
// import { useState } from 'react';
// import { useRouter } from 'next/router'; // Ensure this is uncommented

// const AddPost = () => {
//   const [title, setTitle] = useState('');
//   const [author, setAuthor] = useState(''); // Add state for author
//   const [description, setDescription] = useState('');
//   const [image, setImage] = useState('');
 
//   const router = useRouter();
//   // useEffect(() => {
//   // }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const newPost = {
//       title,
//       author, // Fix author state
//       description,
//       image
//     };

//     const res = await fetch('/api/posts', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(newPost)
//     });

//     if (res.ok) {
//       alert('Post added successfully!');
//       router.push('/pages/blog'); // Redirects to homepage or blog list
//     } else {
//       const errorResponse = await res.json();
//       console.error("Failed to add post:", errorResponse);
//       alert('Failed to add post: ' + errorResponse.error);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-3/4 text-black bg-gray-100 p-4">
//       <h1 className="text-3xl font-bold mb-6 text-center">Add New Blog Post</h1>
//       <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
//         <div className="mb-4">
//           <label htmlFor="title" className="block text-sm font-medium text-gray-700">Blog Title:</label>
//           <input
//             type="text"
//             id="title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//             className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-300"
//             aria-label="Blog Title"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="author" className="block text-sm font-medium text-gray-700">Author:</label>
//           <input
//             type="text"
//             id="author"
//             value={author} // Use author state here
//             onChange={(e) => setAuthor(e.target.value)} // Update with setAuthor
//             required
//             className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-300"
//             aria-label="Author"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="description" className="block text-sm font-medium text-gray-700">Blog Description:</label>
//           <textarea
//             id="description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//             className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-300 h-32"
//             aria-label="Blog Description"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="image" className="block text-sm font-medium text-gray-700">Blog Image URL:</label>
//           <input
//             type="text"
//             id="image"
//             value={image}
//             onChange={(e) => setImage(e.target.value)}
//             required
//             className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-300"
//             aria-label="Blog Image URL"
//           />
//         </div>
//         <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300">Add Post</button>
//       </form>
//     </div>
//   );
// };

// export default AddPost;
