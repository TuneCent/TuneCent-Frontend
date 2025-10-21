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
  userId = "TENXITINGGI",
  userRole = "Creator",
}: ProfileRowProps) => {
  return (
    <div className="w-full flex flex-row justify-between border-b-[0.069vw] border-[#201C22] pb-[1.111vw]">
      <div className="flex flex-row gap-[1.111vw]">
        {profileIcon ? (
          <></>
        ) : (
          <div className="w-[3.65vw] aspect-[1/1] bg-white rounded-full"></div>
        )}
        <div className="flex flex-col gap-[0.111vw]">
          <div className="flex flex-row gap-[1.111vw] items-center">
            <p className="font-jakarta text-[#FFFEFF] text-[1.111vw]">
              {username}
            </p>
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
