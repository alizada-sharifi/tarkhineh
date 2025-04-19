import { useState } from "react";
import Sidbar from "../../components/Sidbar";
import MobileHeader from "../../components/MobileHeader";
import { ProfileInput } from "../../components/form";
import useForm, { FormProvider } from "../../hooks/UseForm";
import { profileSchema } from "../../schemas";
import { Button } from "../../components/buttons";
import { Edit } from "../../components/icons";

function Profile() {
  const { handleSubmit, ...methods } = useForm(profileSchema);
  const [isDisabled, setIsDisabled] = useState(true);

  const onSubmit = (data) => {
    console.log("data", data);
    localStorage.setItem("email", data.email);
    localStorage.setItem("name", data.name);
    localStorage.setItem("familyName", data.familyName);
    localStorage.setItem("phoneNumber", data.phoneNumber);
    localStorage.setItem("userName", data.userName);
    setIsDisabled(true);
  };

  return (
    <div className="container mx-auto mt-6 px-5 min-h-[calc(100vh_-_239px)] md:mt-10">
      <MobileHeader
        title={"پروفایل"}
        className={"relative justify-center "}
        iconClassName={"absolute right-0"}
      />

      <div className="flex gap-x-10">
        <Sidbar className={"hidden lg:block "} />
        <div className="lg:border border-neutral-400 p-4 flex-1 rounded-lg ">
          <h3 className="font-semibold mb-4 text-xl text-neutral-800 border-b-2 border-r-neutral-400 pb-3 hidden md:block">
            {isDisabled ? "پروفایل من" : "ویرایش اطلاعات شخصی"}
          </h3>

          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-4 md:grid-cols-2">
                <ProfileInput
                  name="name"
                  placeholder="نام"
                  isDisabled={isDisabled}
                  value={localStorage.getItem("name")}
                />
                <ProfileInput
                  name="familyName"
                  placeholder="نام خانوادگی"
                  isDisabled={isDisabled}
                  value={localStorage.getItem("familyName")}
                />
                <ProfileInput
                  name="email"
                  type="email"
                  placeholder="آدرس ایمیل"
                  isDisabled={isDisabled}
                  dir={"ltr"}
                  value={localStorage.getItem("email")}
                />
                <ProfileInput
                  name="phoneNumber"
                  type="tel"
                  placeholder="شماره همراه"
                  isDisabled={isDisabled}
                  value={localStorage.getItem("phoneNumber")}
                />

                <ProfileInput
                  name="userName"
                  placeholder="نام نمایشی (اختیاری)"
                  isDisabled={isDisabled}
                  value={localStorage.getItem("userName")}
                />
              </div>

              {isDisabled ? (
                <Button
                  type="button"
                  onClick={() => setIsDisabled(false)}
                  className="bg-transparent border border-primary flex items-center gap-2 text-primary mt-6 mx-auto"
                >
                  <Edit className={"size-6 fill-primary"} />
                  <span>ویرایش اطلاعات شخصی</span>
                </Button>
              ) : (
                <div className="flex justify-end gap-x-4 mt-6">
                  <Button
                    type="button"
                    className="bg-transparent border border-primary text-primary"
                    onClick={() => setIsDisabled(true)}
                  >
                    انصراف
                  </Button>
                  <Button type="submit">ذخیره اطلاعات</Button>
                </div>
              )}
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
}

export default Profile;
