// "use client";
// import { useState } from 'react';
// import { useRouter } from 'next/navigation'; 

// const AddPost = () => {
//   const [title, setTitle] = useState('');
//   const [author, setAuthor] = useState('');
//   const [description, setDescription] = useState('');
//   const [image, setImage] = useState('');

//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const newPost = {
//       title,
//       author,
//       description,
//       image
//     };
//     try {
//       const res = await fetch('/api/posts', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newPost),
//       });

//       if(!res.ok){
//         throw new Error("Failed to add posts");
//       }
//       router.push('/pages/blogs')
      
//     } catch (error) {
//       console.log(error)
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-3/4 text-black p-4">
//       <h1 className="text-3xl font-bold mb-6 text-center text-white">Add New Blog Post</h1>
//       <form onSubmit={handleSubmit} className="form shadow-md rounded-lg p-8 w-full max-w-lg bg-transparent">
//         <div className="mb-4">
//           <label htmlFor="title" className="block text-xl font-bold text-white">Blog Title:</label>
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
//           <label htmlFor="author" className="block text-xl font-bold text-white">Author:</label>
//           <input
//             type="text"
//             id="author"
//             value={author}
//             onChange={(e) => setAuthor(e.target.value)}
//             required
//             className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-300"
//             aria-label="Author"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="description" className="block text-xl font-bold text-white">Blog Description:</label>
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
//           <label htmlFor="image" className="block text-xl font-bold text-white">Blog Image URL:</label>
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
"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      title,
      author,
      description,
      image
    };
    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });

      if(!res.ok){
        throw new Error("Failed to add posts");
      }
      setShowToast(true);
      setTimeout(() => {
        router.push('/pages/blogs');
      }, 3000);
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-3/4 text-black p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">Add New Blog Post</h1>
      <form onSubmit={handleSubmit} className="form shadow-md rounded-lg p-8 w-full max-w-lg bg-transparent">
        <div className="mb-4">
          <label htmlFor="title" className="block text-xl font-bold text-white">Blog Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-300"
            aria-label="Blog Title"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="author" className="block text-xl font-bold text-white">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-300"
            aria-label="Author"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-xl font-bold text-white">Blog Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-300 h-32"
            aria-label="Blog Description"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-xl font-bold text-white">Blog Image URL:</label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-300"
            aria-label="Blog Image URL"
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300">Add Post</button>
      </form>
      {showToast && (
        <div className="fixed top-24 left-0 w-fit h-fit rounded-lg shadow-md text-xl font-semibold shadow-slate-400 flex justify-center items-center bg-green-500 text-white p-4">
          <p>Post added successfully!</p>
        </div>
      )}
    </div>
  );
};

export default AddPost;