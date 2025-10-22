"use client";
import { useState } from "react";

const UserSettingsPage = () => {
  const [settings, setSettings] = useState({
    displayName: "",
    email: "",
    notifications: true,
    privateProfile: false,
  });

  const handleSave = () => {
    // TODO: Implement save settings functionality
    console.log("Saving settings:", settings);
  };

  return (
    <section className="flex flex-col w-[75vw] gap-[2.222vw]">
      <h1 className="text-white font-jakarta font-bold text-[2.222vw]">
        Settings
      </h1>

      <div className="flex flex-col gap-[1.667vw] bg-neutral-400 rounded-[0.833vw] p-[2.222vw]">
        {/* Profile Settings */}
        <div className="flex flex-col gap-[1.111vw]">
          <h2 className="text-white font-jakarta font-semibold text-[1.389vw]">
            Profile
          </h2>

          <div className="flex flex-col gap-[0.556vw]">
            <label className="text-white font-jakarta text-[1.111vw]">
              Display Name
            </label>
            <input
              type="text"
              value={settings.displayName}
              onChange={(e) =>
                setSettings({ ...settings, displayName: e.target.value })
              }
              placeholder="Enter your display name"
              className="w-full px-[1.111vw] py-[0.833vw] bg-neutral-black-base border border-neutral-black-light rounded-[0.556vw] text-white font-jakarta text-[1.111vw] outline-none focus:border-purple-base"
            />
          </div>

          <div className="flex flex-col gap-[0.556vw]">
            <label className="text-white font-jakarta text-[1.111vw]">
              Email
            </label>
            <input
              type="email"
              value={settings.email}
              onChange={(e) =>
                setSettings({ ...settings, email: e.target.value })
              }
              placeholder="Enter your email"
              className="w-full px-[1.111vw] py-[0.833vw] bg-neutral-black-base border border-neutral-black-light rounded-[0.556vw] text-white font-jakarta text-[1.111vw] outline-none focus:border-purple-base"
            />
          </div>
        </div>

        {/* Privacy Settings */}
        <div className="flex flex-col gap-[1.111vw]">
          <h2 className="text-white font-jakarta font-semibold text-[1.389vw]">
            Privacy
          </h2>

          <div className="flex flex-row items-center justify-between">
            <label className="text-white font-jakarta text-[1.111vw]">
              Enable Notifications
            </label>
            <button
              onClick={() =>
                setSettings({ ...settings, notifications: !settings.notifications })
              }
              className={`w-[3.333vw] h-[1.667vw] rounded-full transition-colors ${
                settings.notifications ? "bg-purple-base" : "bg-neutral-black-light"
              }`}
            >
              <div
                className={`w-[1.389vw] h-[1.389vw] rounded-full bg-white transition-transform ${
                  settings.notifications ? "translate-x-[1.667vw]" : "translate-x-[0.278vw]"
                }`}
              />
            </button>
          </div>

          <div className="flex flex-row items-center justify-between">
            <label className="text-white font-jakarta text-[1.111vw]">
              Private Profile
            </label>
            <button
              onClick={() =>
                setSettings({ ...settings, privateProfile: !settings.privateProfile })
              }
              className={`w-[3.333vw] h-[1.667vw] rounded-full transition-colors ${
                settings.privateProfile ? "bg-purple-base" : "bg-neutral-black-light"
              }`}
            >
              <div
                className={`w-[1.389vw] h-[1.389vw] rounded-full bg-white transition-transform ${
                  settings.privateProfile ? "translate-x-[1.667vw]" : "translate-x-[0.278vw]"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="mt-[1.111vw] w-full py-[0.833vw] bg-purple-base hover:bg-purple-dark transition-colors rounded-[0.556vw] text-white font-jakarta font-medium text-[1.111vw]"
        >
          Save Changes
        </button>
      </div>
    </section>
  );
};

export default UserSettingsPage;
