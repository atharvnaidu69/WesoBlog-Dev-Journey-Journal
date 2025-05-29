import './FeaturedPost.css'; // You still need to define some styles here if not using Tailwind-only

export default function FeaturedPost({ post }) {
  return (
    <div className="relative w-full max-w-4x2 mx-auto mb-10">
      {/* Glowing border animation */}
      <div className="absolute inset-0 rounded-xl z-0 animate-spinBorder bg-gradient-to-r from-pink-500 via-blue-500 to-green-400 blur-[50px] opacity-40" />

      {/* Actual content on top of glowing layer */}
      <article className="relative z-10 bg-white dark:bg-charcoal-800 text-gray-900 dark:text-gray-100 rounded-xl shadow-md p-6 sm:p-8">
        <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
        {post.content.split('\n\n').map((para, idx) => (
          <p key={idx} className="mb-4">{para}</p>
        ))}
      </article>
    </div>
  );
}npm 
