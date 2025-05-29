export default function TeamCard({ member }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl hover:shadow-lg shadow-sm overflow-hidden">
      <div className="aspect-w-1 aspect-h-1">
        <img
          // src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {member.name}
        </h3>
        <p className="text-blue-600 dark:text-blue-400 mb-4">{member.role}</p>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{member.bio}</p>
        <div className="flex space-x-4">
          <a
            href={member.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
          >
            Twitter
          </a>
          <a
            href={member.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
          >
            GitHub
          </a>
          <a
            href={member.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-700 dark:hover:text-blue-500"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
