
const page = () => {
  return (
    <div className="max-w-md mx-auto mt-10 bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <img
          className="w-16 h-16 mx-auto mb-4 rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqMUo9VNkorpDwaYq_j_UHy_B1kZSma7r-ZhJuZ7raeQ&s"
          alt="User Avatar"
        />
        <h3 className="text-lg leading-6 font-medium text-gray-900 text-center">
          User Profile
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500 text-center">
          This is some information about the user.
        </p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Full name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              John Doe
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              johndoe@example.com
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Phone number</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              (123) 456-7890
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              123 Main St
              <br />
              Anytown, USA 12345
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default page;
