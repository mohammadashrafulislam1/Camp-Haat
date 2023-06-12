import useAuth from "../../hock/useAuth";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-lg my-10">
      <img
        src={user?.photoURL ? user?.photoURL : 'https://w7.pngwing.com/pngs/691/765/png-transparent-primary-profile-illustration-computer-icons-person-anonymous-miscellaneous-silhouette-black-thumbnail.png' }
        alt="User"
        className="w-24 h-24 rounded-full mb-4 object-cover"
      />
      <h2 className="text-2xl font-bold mb-2">{user?.displayName}</h2>
      <p className="text-gray-600">{user?.email}</p>
    </div>
  );
};

export default Profile;
