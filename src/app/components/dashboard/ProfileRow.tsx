import SearchBar from "../SearchBar";

interface ProfileRowProps {
  profileIcon?: string;
  username?: string;
  userId?: string;
  userRole?: "Creator" | "User";
}

const ProfileRow = ({
  profileIcon,
  username = "Tenxi",
  userId = "J4W1RS3XS",
  userRole = "Creator",
}: ProfileRowProps) => {
  return (
    <div className="w-full flex flex-row justify-between">
      <div className="flex flex-row gap-[1.111vw]">
        <div className="w-[3.65vw] aspect-[1/1] bg-white rounded-full"></div>
        <div className="flex flex-col gap-[0.111vw]">
          <div className="flex flex-row gap-[1.111vw] items-center">
            <p className="font-jakarta text-[#FFFEFF]">{username}</p>
            <div className="bg-amber-100 rounded-[0.347vw] bg-linear-to-r from-[#8B609B] to-[#302135]">
              <p className="text-[0.833vw] p-[0.556vw] font-regular font-jakarta text-white">
                {userRole}
              </p>
            </div>
          </div>
          <p className="font-jakarta text-white-darker text-[0.833vw]">
            @{userId}
          </p>
        </div>
      </div>
      <SearchBar />
    </div>
  );
};

export default ProfileRow;
