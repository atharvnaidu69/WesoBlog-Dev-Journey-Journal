export default function CommentList({ comments }) {
  if (comments.length === 0) {
    return (
      <div className="text-gray-500 dark:text-gray-400 text-center py-8">
        No comments yet. Be the first to comment!
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {comments.map((comment) => (
        <div key={comment.id} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium text-gray-900 dark:text-gray-100">
              {comment.author}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {comment.date?.toDate?.().toLocaleDateString?.() || 'Just now'}
            </span>
          </div>
          <p className="text-gray-700 dark:text-gray-200">{comment.content}</p>
        </div>
      ))}
    </div>
  );
}
